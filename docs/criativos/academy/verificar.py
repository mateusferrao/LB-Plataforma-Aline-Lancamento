"""Confere os vídeos de out/videos/: specs (ffmpeg) e uma contact sheet com a safe zone desenhada.

Uso: python docs/criativos/academy/verificar.py [V1 V4 ...]
Saída: out/verificacao/<video>.jpg (1 quadro por segundo, linhas vermelhas = limite da safe zone:
220px em cima, 500px embaixo, 180px nas laterais, sobre 1080x1920).
"""

import re
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw

sys.path.insert(0, str(Path(__file__).resolve().parent))
from videos import FF, OUT  # noqa: E402

VIDS = OUT / "videos"
DEST = OUT / "verificacao"


def info(arq):
    err = subprocess.run([FF, "-hide_banner", "-i", str(arq)], capture_output=True, text=True,
                         encoding="utf-8", errors="ignore").stderr
    dur = re.search(r"Duration: (\d+):(\d+):([\d.]+)", err)
    seg = int(dur[1]) * 3600 + int(dur[2]) * 60 + float(dur[3])
    v = re.search(r"Video: (\w+).*?, (\d+)x(\d+).*?, ([\d.]+) fps", err)
    a = re.search(r"Audio: (\w+).*?(\d+) Hz", err)
    return seg, v and v.groups(), a and a.groups()


def sheet(arq):
    seg, _, _ = info(arq)
    DEST.mkdir(parents=True, exist_ok=True)
    tw, th = 216, 384
    quadros = []
    t = 0.5
    while t < seg:
        png = DEST / "_q.png"
        subprocess.run([FF, "-y", "-loglevel", "error", "-ss", f"{t}", "-i", str(arq), "-frames:v", "1",
                        "-vf", f"scale={tw}:{th}", str(png)], check=True)
        im = Image.open(png).convert("RGB")
        d = ImageDraw.Draw(im)
        k = tw / 1080
        d.rectangle([180 * k, 220 * k, tw - 180 * k, th - 500 * k], outline=(255, 0, 0))
        d.text((4, 4), f"{t:.1f}s", fill=(255, 255, 0))
        quadros.append(im)
        t += 1.0
    cols = 10
    rows = (len(quadros) + cols - 1) // cols
    S = Image.new("RGB", (cols * tw, rows * th), "white")
    for i, q in enumerate(quadros):
        S.paste(q, ((i % cols) * tw, (i // cols) * th))
    destino = DEST / f"{arq.stem}.jpg"
    S.save(destino, quality=80)
    (DEST / "_q.png").unlink(missing_ok=True)
    return destino


if __name__ == "__main__":
    pedidos = sys.argv[1:]
    for arq in sorted(VIDS.glob("*.mp4")):
        if pedidos and not any(arq.name.startswith(p) for p in pedidos):
            continue
        seg, v, a = info(arq)
        print(f"{arq.name}: {seg:.2f}s · vídeo {v} · áudio {a}")
        if arq.stem.endswith("9x16"):
            print("   ", sheet(arq).relative_to(OUT.parent))
