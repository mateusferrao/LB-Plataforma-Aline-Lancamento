"""Variantes com gancho UGC (Camila, IA): a pessoa fala o gancho em tela cheia e corta seco pro vídeo.

Uso: python docs/criativos/academy/ugc.py            (depois de rodar videos.py)

Os vídeos da Camila chegaram sem fundo verde (parede bege), então em vez do recorte sobre o criativo
pausado (../video-ugc/montar.py) o formato é "reação + corte seco": ela em tela cheia com legenda,
e o corpo do vídeo entra direto. Os arquivos ficam em privado/ugc/ (fora do git), copiados de
Downloads/videos ugc com nomes simples (ugc1..ugc6.mp4).
Saída: out/videos/<nome>-9x16.mp4 e -4x5.mp4.
"""

import html
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import videos as v  # noqa: E402

UGC = v.AQUI / "privado" / "ugc"


def legendas(frases):
    return [v.T(a, b, "fala", f'<span class="fala">{html.escape(f)}</span>') for a, b, f in frases]


# (nome, arquivo, início, fim, legendas com tempo relativo ao início, vídeo que entra depois)
# Cortes pelos tempos de palavra (faster-whisper large-v3), conferidos em 06/10.
VARIANTES = [
    # ugc5: corta antes do "e some" que o gerador emendou no fim.
    ("V2-camila-B-embaixo-da-pele", "ugc5.mp4", 0.0, 3.30,
     [(0.0, 1.62, "Olha o que tem embaixo"), (1.62, 3.30, "da pele na calha lacrimal.")], "V1-aula-academy"),
    # ugc4: só até "por dentro" (o resto saiu alarmista e fora do roteiro). Fonte horizontal.
    ("V2-camila-C-abriu-a-calha", "ugc4.mp4", 0.0, 4.0,
     [(0.0, 1.40, "Presta atenção, olhem só,"), (1.40, 4.0, "essa professora abriu a calha lacrimal por dentro.")], "V1-aula-academy"),
    # ugc2: só até "dissecção" (o resto saiu embolado). Fonte horizontal.
    ("V3-ugc-ainda-estuda", "ugc2.mp4", 0.0, 5.32,
     [(0.0, 3.18, "Essa professora formou mais de mil alunas"), (3.18, 5.32, "e ainda estuda dissecção.")], "V3-paramentacao"),
    ("V4-ugc-travou", "ugc1.mp4", 0.0, 3.85,
     [(0.0, 1.70, "Já travou com a seringa na mão?"), (1.70, 3.85, "Olha o que ninguém te mostrou.")], "V4-seringa-na-mao"),
    ("V5-ugc-vou-pensar", "ugc3.mp4", 0.0, 3.76,
     [(0.0, 2.90, "Se a paciente te diz “vou pensar” e some,"), (2.90, 3.76, "olha isso.")], "V5-tres-vezes"),
    # ugc6: gancho de agenda que veio além do roteiro; corta o silêncio do começo.
    ("V5-ugc-agenda", "ugc6.mp4", 0.55, 5.70,
     [(0.0, 3.05, "Se tudo continuar como está pelos próximos seis meses,"), (3.05, 5.15, "você vai estar satisfeita com a sua agenda?")],
     "V5-tres-vezes"),
]


def montar(nome, arquivo, ini, fim, frases, corpo):
    print(f"== {nome}")
    dur = round(fim - ini, 2)
    cena = v.clip(str(UGC / arquivo), ini, dur, cx=0.5, cy=0.5, z=1.0, voz=True, textos=legendas(frases))
    roteiro = dict(cenas=[cena])
    pngs = v.renderizar_overlays(nome, roteiro)
    gancho = v.renderizar_cena(nome, 0, cena, pngs)
    corpo_mp4 = v.VIDS / f"{corpo}-9x16.mp4"
    vertical = v.VIDS / f"{nome}-9x16.mp4"
    # a voz da Camila normalizada no mesmo nível do corpo (-14 LUFS), num arquivo à parte
    gancho_n = v.TMP / f"{nome}-gancho.mp4"
    v.run([v.FF, "-y", "-hide_banner", "-loglevel", "error", "-i", str(gancho),
           "-af", "loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
           "-ar", "48000", str(gancho_n)])
    # corte seco pro vídeo: concat pelo demuxer (o filtro concat perdia ~4s no meio do corpo por timestamps)
    lista = v.TMP / f"{nome}-lista.txt"
    lista.write_text("".join(f"file '{p.as_posix()}'\n" for p in (gancho_n, corpo_mp4)), encoding="utf-8")
    v.run([v.FF, "-y", "-hide_banner", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lista),
           "-r", str(v.FPS), "-c:v", "libx264", "-preset", "medium", "-crf", "17", "-pix_fmt", "yuv420p",
           "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", str(vertical)])
    v.run([v.FF, "-y", "-hide_banner", "-loglevel", "error", "-i", str(vertical), "-vf", f"crop={v.W}:1350:0:285",
           "-c:v", "libx264", "-preset", "medium", "-crf", "17", "-pix_fmt", "yuv420p", "-c:a", "copy",
           "-movflags", "+faststart", str(v.VIDS / f"{nome}-4x5.mp4")])
    print(f"   {vertical.relative_to(v.AQUI)}")


if __name__ == "__main__":
    pedidos = sys.argv[1:]
    for var in VARIANTES:
        if not pedidos or any(var[0].startswith(p) for p in pedidos):
            montar(*var)
