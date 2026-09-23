"""Monta o vídeo UGC: pessoa de IA na frente do criativo pausado, e depois o criativo rodando.

Uso:
    python3 docs/criativos/video-ugc/montar.py \
        --avatar camila-v2b.mp4 \
        --criativo "Aline - Video Aula Ao Vivo.mov" \
        --fundo docs/criativos/video-ugc/fundos/pausa-aula-com-icone.jpg \
        --texto "O QUE TEM A MILÍMETROS DA SUA AGULHA?" \
        --x -170 \
        --saida ugc-v2-gancho-b.mp4

O vídeo da pessoa deve vir com fundo verde (#00B140). Se ela vier com outro fundo,
use --sem-verde: o fundo é removido quadro a quadro com IA (rembg). Esse modo é mais
lento, e os fios soltos de cabelo podem tremer um pouco.

Precisa de ffmpeg (no PATH, na variável FFMPEG ou via `pip install imageio-ffmpeg`).
"""

import argparse
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

W, H, FPS = 1080, 1920, 30
AQUI = Path(__file__).resolve().parent


def achar_ffmpeg():
    if os.environ.get("FFMPEG"):
        return os.environ["FFMPEG"]
    if shutil.which("ffmpeg"):
        return "ffmpeg"
    try:
        import imageio_ffmpeg

        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        sys.exit("ffmpeg não encontrado: instale o ffmpeg ou rode `pip install imageio-ffmpeg`.")


def duracao(ffmpeg, arquivo):
    # ffmpeg -i escreve a duração no stderr ("Duration: 00:00:04.20").
    saida = subprocess.run([ffmpeg, "-hide_banner", "-i", str(arquivo)], capture_output=True, text=True).stderr
    for linha in saida.splitlines():
        if "Duration:" in linha:
            h, m, s = linha.split("Duration:")[1].split(",")[0].strip().split(":")
            return int(h) * 3600 + int(m) * 60 + float(s)
    sys.exit(f"Não consegui ler a duração de {arquivo}.")


def tem_audio(ffmpeg, arquivo):
    saida = subprocess.run([ffmpeg, "-hide_banner", "-i", str(arquivo)], capture_output=True, text=True).stderr
    return "Audio:" in saida


def remover_fundo_com_ia(ffmpeg, avatar, pasta):
    """Troca o fundo de cada quadro por verde puro, pra seguir o mesmo caminho do chroma key."""
    try:
        from PIL import Image
        from rembg import new_session, remove
    except ImportError:
        sys.exit("Pro --sem-verde, instale: pip install 'rembg[cpu]' pillow")
    quadros, verdes = pasta / "q", pasta / "v"
    quadros.mkdir()
    verdes.mkdir()
    subprocess.run([ffmpeg, "-loglevel", "error", "-i", str(avatar), "-vf", f"fps={FPS}", str(quadros / "%05d.png")], check=True)
    sessao = new_session("isnet-general-use")
    arquivos = sorted(quadros.glob("*.png"))
    for i, f in enumerate(arquivos, 1):
        img = Image.open(f).convert("RGB")
        recorte = remove(img, session=sessao)
        fundo = Image.new("RGB", img.size, (0, 177, 64))
        fundo.paste(recorte, (0, 0), recorte)
        fundo.save(verdes / f.name)
        print(f"\rRemovendo fundo: {i}/{len(arquivos)}", end="", flush=True)
    print()
    saida = pasta / "avatar-verde.mp4"
    cmd = [ffmpeg, "-loglevel", "error", "-framerate", str(FPS), "-i", str(verdes / "%05d.png")]
    if tem_audio(ffmpeg, avatar):
        cmd += ["-i", str(avatar), "-map", "0:v", "-map", "1:a", "-c:a", "aac"]
    cmd += ["-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "12", str(saida)]
    subprocess.run(cmd, check=True)
    return saida


def imagem_do_texto(texto, fonte, destino):
    """Desenha o texto na tela num PNG transparente do tamanho do vídeo (não depende do drawtext do ffmpeg)."""
    from PIL import Image, ImageDraw, ImageFont

    fnt = ImageFont.truetype(fonte, 62)
    palavras, linhas, atual = texto.split(), [], ""
    for p in palavras:
        teste = f"{atual} {p}".strip()
        if atual and fnt.getlength(teste) > W - 160:
            linhas.append(atual)
            atual = p
        else:
            atual = teste
    linhas.append(atual)
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    for i, linha in enumerate(linhas):
        x = (W - fnt.getlength(linha)) / 2
        d.text((x, 470 + i * 80), linha, font=fnt, fill="white", stroke_width=6, stroke_fill=(0, 0, 0, 140))
    img.save(destino)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--avatar", required=True, help="vídeo da pessoa de IA falando o gancho")
    ap.add_argument("--criativo", required=True, help="vídeo da Aline que roda depois do gancho")
    ap.add_argument("--fundo", required=True, help="imagem do criativo pausado (fundos/*.jpg)")
    ap.add_argument("--saida", required=True)
    ap.add_argument("--texto", default="", help="texto na tela durante o gancho")
    ap.add_argument("--x", type=int, default=100, help="deslocamento horizontal da pessoa em px (negativo = esquerda)")
    ap.add_argument("--largura", type=float, default=0.8, help="largura da pessoa em fração da tela")
    ap.add_argument("--corte", type=float, default=0.68, help="fração da altura do vídeo da pessoa mantida, de cima pra baixo")
    ap.add_argument("--saida-cena", type=float, default=0.3, help="duração da saída deslizando pra baixo, em segundos (0 = corte seco)")
    ap.add_argument("--sem-verde", action="store_true", help="remove o fundo com IA quando o vídeo não vem em verde")
    ap.add_argument("--cor", default="0x00B140", help="cor do fundo verde")
    ap.add_argument("--fonte", default=str(AQUI / "inter-semibold.ttf"))
    args = ap.parse_args()

    ffmpeg = achar_ffmpeg()
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        avatar = remover_fundo_com_ia(ffmpeg, args.avatar, tmp) if args.sem_verde else Path(args.avatar)
        t = duracao(ffmpeg, avatar)
        s = args.saida_cena
        largura = int(W * args.largura) // 2 * 2

        # Gancho: fundo pausado + pessoa recortada colada embaixo, saindo pra baixo no fim.
        pessoa = (
            f"[1:v]fps={FPS},crop=iw:ih*{args.corte}:0:0,scale={largura}:-2,"
            f"chromakey=color={args.cor}:similarity=0.14:blend=0.06,despill=type=green,format=yuva420p[p]"
        )
        fundo = f"[0:v]scale={W}:{H},setsar=1,fps={FPS},format=yuv420p[f]"
        x = f"(W-w)/2+{args.x}"
        # Com --saida-cena 0 o corte é seco: ela some junto com o fim da fala.
        y = f"H-h+if(gt(t\\,{t - s:.3f})\\,(t-{t - s:.3f})/{s}*h\\,0)" if s > 0 else "H-h"
        if args.texto:
            imagem_do_texto(args.texto, args.fonte, tmp / "texto.png")
            gancho = f"[f][p]overlay=x={x}:y={y}:shortest=1[fp];[fp][3:v]overlay=0:0,format=yuv420p[gv]"
        else:
            gancho = f"[f][p]overlay=x={x}:y={y}:shortest=1,format=yuv420p[gv]"

        criativo = (
            f"[2:v]scale={W}:{H}:force_original_aspect_ratio=decrease:flags=lanczos,"
            f"pad={W}:{H}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps={FPS},format=yuv420p[cv]"
        )
        audio_gancho = "[1:a]aresample=44100,aformat=channel_layouts=stereo[ga]" if tem_audio(ffmpeg, avatar) else (
            f"anullsrc=r=44100:cl=stereo,atrim=0:{t:.3f}[ga]"
        )
        audio_criativo = "[2:a]aresample=44100,aformat=channel_layouts=stereo[ca]"
        filtro = ";".join([fundo, pessoa, gancho, criativo, audio_gancho, audio_criativo,
                           "[gv][ga][cv][ca]concat=n=2:v=1:a=1[v][a]"])

        cmd = [
            ffmpeg, "-y", "-loglevel", "error",
            "-loop", "1", "-t", f"{t:.3f}", "-i", args.fundo,
            "-i", str(avatar),
            "-i", args.criativo,
        ]
        if args.texto:
            cmd += ["-loop", "1", "-t", f"{t:.3f}", "-i", str(tmp / "texto.png")]
        cmd += [
            "-filter_complex", filtro,
            "-map", "[v]", "-map", "[a]",
            "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart",
            args.saida,
        ]
        subprocess.run(cmd, check=True)
    print(f"Pronto: {args.saida}")


if __name__ == "__main__":
    main()
