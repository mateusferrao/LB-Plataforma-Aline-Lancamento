"""Monta os criativos em vídeo do Mapa do Envelhecimento (V1A, V1B, V2A, V2B, V3A, V3B).

Uso:
    python3 docs/criativos/video-mapa/montar_mapa.py --fontes fontes.json --video v1b --saida saida/
    python3 docs/criativos/video-mapa/montar_mapa.py --fontes fontes.json --video todos --saida saida/

`fontes.json` aponta para os arquivos de origem (veja `fontes.exemplo.json`). Os roteiros
estão em VIDEOS, mais abaixo, e as legendas saem de `palavras.json` (transcrição com marca
de tempo das falas da Aline).

Etapa 1 (sem a Camila): as versões A abrem com a fala da Camila escrita na tela, sobre o
quadro pausado. Etapa 2: preencha "camila" no fontes.json com os clipes do Flow (fundo
verde #00B140) e rode de novo. A fala dela entra no gancho e a voz dela na ponte e no CTA.

Precisa de ffmpeg no PATH e de Pillow (`pip install pillow`).
"""

import argparse
import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H, FPS = 1080, 1920, 30
TOPO_H = 1100  # metade de cima (b-roll) no layout dividido
BAIXO_H = H - TOPO_H  # metade de baixo (Aline)
AQUI = Path(__file__).resolve().parent

MARSALA = (126, 30, 28)
CREME = (245, 241, 234)
PRETO = (12, 11, 10)
BRANCO = (255, 255, 255)

# Recortes nas gravações da aula (x, y, largura, altura, em pixels da origem).
# "baixo" tem a proporção da metade de baixo (1080x820). "cheio" é 9:16.
CORTE = {
    "aline98": {"baixo": (300, 0, 1554, 1180), "cheio": (838, 0, 664, 1180)},
    "mapa": {"baixo": (453, 0, 1554, 1180), "cheio": (898, 0, 664, 1180)},
    # Recorte fechado na Aline: a bandeja de frascos fica de fora do quadro.
    "ml": {"baixo": (727, 0, 896, 680), "cheio": (900, 0, 550, 977)},
    "desconto": {"baixo": (453, 0, 1554, 1180), "cheio": (898, 0, 664, 1180)},
}

# ---------------------------------------------------------------- roteiros

CABECALHO = "98% FECHAM NA\n1ª CONSULTA"
SELO = "98% FECHAM NA 1ª CONSULTA"
FILTRO = "PRA QUEM APLICA HARMONIZAÇÃO"


def br(t0, t1, y=520, vel=1.0):
    """Trecho do b-roll vertical do álbum. y = topo do recorte na metade de cima."""
    return {"tipo": "br", "t0": t0, "t1": t1, "y": y, "vel": vel}


def foto(chave, dur):
    return {"tipo": "foto", "chave": chave, "dur": dur}


def rot(texto, t0, t1=None, src=False):
    """Rótulo grande. Com src=True, t0/t1 são tempos da fala na origem."""
    return {"texto": texto, "t0": t0, "t1": t1, "src": src}


SEG = {
    "p98": {
        "tipo": "dividido",
        "fala": [("aline98", 5.95, 10.30)],
        "topo": [br(6.0, 12.5, y=380)],
    },
    "p12": {
        "tipo": "dividido",
        "fala": [("aline98", 14.62, 17.85)],
        "topo": [br(35.5, 37.5, y=300), br(37.6, 39.6, y=420)],
        "rotulos": [rot("12 ANOS DE CONSULTÓRIO", 15.9, src=True)],
    },
    "mapa": {
        "tipo": "dividido",
        "fala": [("mapa", 5.25, 14.20)],
        "topo": [br(2.0, 3.8, y=420), br(15.6, 17.6), br(6.0, 7.4), br(7.4, 9.6), br(9.6, 12.5)],
        "rotulos": [
            rot("GORDURA", 7.62, 10.30, src=True),
            rot("MÚSCULO", 10.46, 12.90, src=True),
            rot("OSSO", 13.20, 14.20, src=True),
        ],
        "sfx": [("folha", 0.0)],
    },
    "espelho": {
        "tipo": "dividido",
        "fala": [("mapa", 14.25, 17.45)],
        "topo": [br(6.0, 12.5, vel=2.0)],
        "rotulos": [rot("ELA SÓ VÊ POR FORA", 0.15)],
    },
    "estrutura": {
        "tipo": "dividido",
        "fala": [("mapa", 30.12, 34.05)],
        "topo": [br(15.0, 19.5)],
        "rotulos": [rot("30 ANOS", 0.1, 0.95), rot("45 ANOS", 1.0, 2.95), rot("60 ANOS", 3.0, None)],
    },
    "ml": {
        "tipo": "dividido",
        "fala": [("ml", 1.45, 4.42), ("ml", 11.50, 14.02)],
        "topo": [br(21.5, 25.5), br(9.6, 12.5)],
        "rotulos": [rot("1 ML · LÁBIO", 3.8, 4.42, src=True), rot("8 A 10 ML · CONTORNO", 12.85, src=True)],
    },
    "naturalidade": {
        "tipo": "dividido",
        "fala": [("ml", 21.92, 27.90)],
        "topo": [br(34.0, 35.4, y=600), foto("foto_pele", 2.6), br(36.0, 37.5, y=300)],
        "rotulos": [rot("COM NATURALIDADE", 22.9, 24.9, src=True), rot('SEM "É CARO"', 26.6, src=True)],
    },
    "desconto": {
        "tipo": "cheio",
        "fala": [("desconto", 1.20, 5.56)],
        "rotulos": [rot("SEM DESCONTO DE CARA", 0.2)],
    },
    "citacao": {
        "tipo": "broll",
        "topo": [br(38.0, 41.4)],
        "dur": 3.4,
        "grafico": ("citacao", "As pessoas só compram quando elas entendem que elas precisam."),
    },
    "ponte": {
        "tipo": "broll",
        "topo": [br(35.5, 37.5), br(37.6, 39.8)],
        "dur": 3.8,
        "grafico": ("ponte", None),
        "camila": "ponte",
        "sfx": [("folha", 0.0)],
    },
    "final": {
        "tipo": "foto",
        "chave": "packshot",
        "dur": 3.6,
        "grafico": ("final", None),
        "camila": "cta",
    },
}

GANCHO_CAMILA = {
    "v1": {
        "fundo": ("aline98", 8.0),
        "fala": "Aplica harmonização?\nMais de 98% das pacientes dela\nfecham na consulta.",
    },
    "v2": {
        "fundo": ("broll", 11.0),
        "fala": "Injetora?\nVocê explica, explica,\ne a paciente continua\nsem entender?",
    },
    "v3": {
        "fundo": ("ml", 3.0),
        "fala": "Injetora?\nVocê cobra menos do que vale\ncom medo da paciente\nachar caro?",
    },
}

VIDEOS = {
    "v1a": {"gancho": "v1", "sub": "COM O MAPA DO ENVELHECIMENTO", "seq": ["p98", "mapa", "estrutura", "ponte", "final"]},
    "v1b": {"sub": "COM O MAPA DO ENVELHECIMENTO", "seq": ["p98", "p12", "mapa", "estrutura", "ponte", "final"]},
    "v2a": {"gancho": "v2", "sub": "ELA NÃO ENTENDE O QUE PRECISA", "seq": ["p98", "espelho", "mapa", "citacao", "ponte", "final"]},
    "v2b": {"sub": "ELA ENTENDE NA HORA", "seq": ["p98", "espelho", "mapa", "estrutura", "citacao", "ponte", "final"]},
    "v3a": {"gancho": "v3", "sub": "COBRAR O VALOR CERTO", "seq": ["p98", "ml", "naturalidade", "desconto", "ponte", "final"]},
    "v3b": {"sub": "COBRAR O VALOR CERTO", "seq": ["p98", "ml", "naturalidade", "desconto", "ponte", "final"]},
}

# ---------------------------------------------------------------- utilidades


def rodar(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit("ffmpeg falhou:\n" + " ".join(map(str, cmd)) + "\n" + r.stderr[-3000:])


def duracao(arquivo):
    r = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(arquivo)],
        capture_output=True,
        text=True,
    )
    return float(r.stdout.strip())


PESOS = {
    "Inter-Black": ("inter-latin.woff2", 900),
    "Inter-Bold": ("inter-latin.woff2", 700),
    "Inter-Medium": ("inter-latin.woff2", 500),
    "Fraunces-SemiBold": ("fraunces-latin.woff2", 600),
    "Fraunces-Italic": ("fraunces-latin-italic.woff2", 600),
}


def preparar_fontes(pasta):
    """Gera as TTF de peso fixo a partir das fontes variáveis da LP (app/fonts)."""
    pasta = Path(pasta)
    if all((pasta / f"{n}.ttf").exists() for n in PESOS):
        return
    try:
        from fontTools.ttLib import TTFont
        from fontTools.varLib import instancer
    except ImportError:
        sys.exit("Faltam as fontes em fontes_dir. Rode `pip install fonttools brotli` pra gerar a partir de app/fonts.")
    origem = AQUI.parents[2] / "app" / "fonts"
    pasta.mkdir(parents=True, exist_ok=True)
    for nome, (arquivo, peso) in PESOS.items():
        fonte = TTFont(str(origem / arquivo))
        fonte = instancer.instantiateVariableFont(fonte, {"wght": peso})
        fonte.flavor = None
        fonte.save(str(pasta / f"{nome}.ttf"))


class Fontes:
    def __init__(self, pasta):
        self.pasta = Path(pasta)
        self.cache = {}

    def __call__(self, nome, tam):
        chave = (nome, tam)
        if chave not in self.cache:
            self.cache[chave] = ImageFont.truetype(str(self.pasta / f"{nome}.ttf"), tam)
        return self.cache[chave]


def preparar_foto(origem, destino):
    """As fotos do álbum vêm deitadas (6000x3376, sem EXIF). Gira e recorta em 9:16."""
    im = Image.open(origem).convert("RGB").rotate(90, expand=True)
    escala = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * escala), round(im.height * escala)), Image.LANCZOS)
    x, y = (im.width - W) // 2, (im.height - H) // 2
    im.crop((x, y, x + W, y + H)).save(destino, quality=95)


# ---------------------------------------------------------------- vídeo base


def filtro_kenburns(dur, zoom=0.05):
    # Aproximação lenta e contínua, centrada.
    return (
        f"scale=w='trunc({W}*(1+{zoom}*t/{dur})/2)*2':h=-2:eval=frame,"
        f"crop={W}:{H}:(iw-{W})/2:(ih-{H})/2"
    )


def render_topo(cfg, pecas, dur, altura, tmp, nome):
    """Renderiza a faixa de b-roll (altura TOPO_H no dividido, H no cheio)."""
    entradas, filtros = [], []
    for i, p in enumerate(pecas):
        if p["tipo"] == "br":
            entradas += ["-ss", f"{p['t0']:.3f}", "-t", f"{p['t1'] - p['t0']:.3f}", "-i", cfg["broll"]]
            crop = f"crop={W}:{altura}:0:{p['y']}," if altura < H else ""
            filtros.append(f"[{i}:v]setpts=(PTS-STARTPTS)/{p['vel']},fps={FPS},{crop}scale={W}:{altura},setsar=1[p{i}]")
        else:
            entradas += ["-loop", "1", "-t", f"{p['dur']:.3f}", "-i", str(tmp / f"{p['chave']}.jpg")]
            kb = filtro_kenburns(p["dur"])
            crop = f",crop={W}:{altura}:0:{(H - altura) // 2}" if altura < H else ""
            filtros.append(f"[{i}:v]fps={FPS},{kb}{crop},setsar=1[p{i}]")
    junta = "".join(f"[p{i}]" for i in range(len(pecas)))
    filtros.append(
        f"{junta}concat=n={len(pecas)}:v=1:a=0,tpad=stop_mode=clone:stop_duration={dur:.3f},"
        f"trim=duration={dur:.3f},setpts=PTS-STARTPTS[v]"
    )
    saida = tmp / f"{nome}.mp4"
    rodar(["ffmpeg", "-v", "error", "-y", *entradas, "-filter_complex", ";".join(filtros), "-map", "[v]",
           "-an", "-c:v", "libx264", "-crf", "14", "-preset", "veryfast", "-pix_fmt", "yuv420p", str(saida)])
    return saida


def render_fala_video(cfg, fala, modo, tmp, nome, push=False):
    """Recorta a Aline nas faixas de fala e junta (jump cut entre faixas)."""
    entradas, filtros = [], []
    largura, altura = (W, BAIXO_H) if modo == "baixo" else (W, H)
    for i, (chave, t0, t1) in enumerate(fala):
        x, y, w, h = CORTE[chave][modo]
        entradas += ["-ss", f"{t0:.3f}", "-t", f"{t1 - t0:.3f}", "-i", cfg[chave]]
        # Faixas alternadas ganham um punch-in leve, pra o jump cut parecer corte de câmera.
        z = 1.08 if i % 2 == 1 else 1.0
        zoom = f",scale=iw*{z}:ih*{z},crop={largura}:{altura}" if z != 1.0 else ""
        filtros.append(f"[{i}:v]setpts=PTS-STARTPTS,fps={FPS},crop={w}:{h}:{x}:{y},scale={largura}:{altura}{zoom},setsar=1[f{i}]")
    junta = "".join(f"[f{i}]" for i in range(len(fala)))
    fim = ""
    if push:
        dur = sum(t1 - t0 for _, t0, t1 in fala)
        fim = "," + filtro_kenburns(dur, 0.07)
    filtros.append(f"{junta}concat=n={len(fala)}:v=1:a=0{fim}[v]")
    saida = tmp / f"{nome}.mp4"
    rodar(["ffmpeg", "-v", "error", "-y", *entradas, "-filter_complex", ";".join(filtros), "-map", "[v]",
           "-an", "-c:v", "libx264", "-crf", "14", "-preset", "veryfast", "-pix_fmt", "yuv420p", str(saida)])
    return saida


def render_fala_audio(cfg, fala, tmp, nome):
    entradas, filtros = [], []
    for i, (chave, t0, t1) in enumerate(fala):
        entradas += ["-ss", f"{t0:.3f}", "-t", f"{t1 - t0:.3f}", "-i", cfg[chave]]
        d = t1 - t0
        filtros.append(f"[{i}:a]aresample=48000,aformat=channel_layouts=stereo,asetpts=PTS-STARTPTS,"
                       f"afade=t=in:d=0.03,afade=t=out:st={d - 0.05:.3f}:d=0.05[a{i}]")
    junta = "".join(f"[a{i}]" for i in range(len(fala)))
    filtros.append(f"{junta}concat=n={len(fala)}:v=0:a=1[a]")
    saida = tmp / f"{nome}.wav"
    rodar(["ffmpeg", "-v", "error", "-y", *entradas, "-filter_complex", ";".join(filtros), "-map", "[a]", str(saida)])
    return saida


def silencio(dur, tmp, nome):
    saida = tmp / f"{nome}.wav"
    rodar(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo", "-t", f"{dur:.3f}", str(saida)])
    return saida


def render_quadro_pausado(cfg, fonte, t, dur, tmp, nome, camila=None):
    """Quadro congelado, escurecido e desfocado (fundo do gancho da Camila)."""
    chave = fonte
    src = cfg["broll"] if chave == "broll" else cfg[chave]
    if chave == "broll":
        vf = f"scale={W}:{H}"
    else:
        x, y, w, h = CORTE[chave]["cheio"]
        vf = f"crop={w}:{h}:{x}:{y},scale={W}:{H}"
    quadro = tmp / f"{nome}_quadro.png"
    rodar(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.3f}", "-i", src, "-frames:v", "1", "-vf", vf, str(quadro)])
    im = Image.open(quadro).convert("RGB").filter(ImageFilter.GaussianBlur(10))
    im = Image.blend(im, Image.new("RGB", im.size, PRETO), 0.45)
    im.save(quadro)
    saida = tmp / f"{nome}.mp4"
    if camila:
        # Camila em fundo verde, colada embaixo, com ~88% da largura.
        filtro = (
            f"[0:v]fps={FPS},setsar=1[bg];"
            f"[1:v]fps={FPS},colorkey=0x00B140:0.32:0.08,scale={int(W * 0.88)}:-2[cam];"
            f"[bg][cam]overlay=(W-w)/2:H-h:shortest=1[v]"
        )
        rodar(["ffmpeg", "-v", "error", "-y", "-loop", "1", "-i", str(quadro), "-i", camila, "-filter_complex", filtro,
               "-map", "[v]", "-t", f"{dur:.3f}", "-an", "-c:v", "libx264", "-crf", "14", "-preset", "veryfast",
               "-pix_fmt", "yuv420p", str(saida)])
    else:
        rodar(["ffmpeg", "-v", "error", "-y", "-loop", "1", "-i", str(quadro), "-t", f"{dur:.3f}", "-vf", f"fps={FPS},setsar=1",
               "-c:v", "libx264", "-crf", "14", "-preset", "veryfast", "-pix_fmt", "yuv420p", str(saida)])
    return saida


def render_foto(cfg, chave, dur, tmp, nome):
    saida = tmp / f"{nome}.mp4"
    rodar(["ffmpeg", "-v", "error", "-y", "-loop", "1", "-t", f"{dur:.3f}", "-i", str(tmp / f"{chave}.jpg"),
           "-vf", f"fps={FPS},{filtro_kenburns(dur, 0.06)},setsar=1", "-c:v", "libx264", "-crf", "14",
           "-preset", "veryfast", "-pix_fmt", "yuv420p", str(saida)])
    return saida


def vstack(cima, baixo, tmp, nome):
    saida = tmp / f"{nome}.mp4"
    rodar(["ffmpeg", "-v", "error", "-y", "-i", str(cima), "-i", str(baixo), "-filter_complex",
           "[0:v][1:v]vstack=inputs=2,setsar=1[v]", "-map", "[v]", "-c:v", "libx264", "-crf", "14",
           "-preset", "veryfast", "-pix_fmt", "yuv420p", str(saida)])
    return saida


# ---------------------------------------------------------------- legendas e grafismos


def palavras_da_fala(palavras, fala):
    """Palavras com tempo local (a partir do início do segmento), na ordem da fala."""
    saida, desloc = [], 0.0
    for chave, t0, t1 in fala:
        for p in palavras[chave]:
            if p["s"] >= t0 - 0.05 and p["e"] <= t1 + 0.05:
                saida.append({"w": p["w"], "s": max(0.0, p["s"] - t0) + desloc, "e": min(t1, p["e"]) - t0 + desloc})
        desloc += t1 - t0
    return saida


def blocos_de_legenda(palavras, inicio, fim_seg):
    """Agrupa em blocos de até 3 palavras (quebra na pontuação).

    Quando o bloco terminaria em palavra de ligação ("de", "do", "a"…) ou em número, ele
    estica até 5 palavras, pra "mais de 98%" não virar "…de mais / de 98%".
    """
    blocos, atual = [], []
    for p in palavras:
        atual.append(p)
        chars = sum(len(x["w"]) for x in atual)
        pontuacao = p["w"][-1] in ",.?!"
        cheio = len(atual) >= 3 or chars >= 15
        palavra = limpa(p["w"]).lower()
        estica = (palavra in LIGACAO or palavra.isdigit()) and len(atual) < 5 and chars <= 22
        if pontuacao or (cheio and not estica) or len(atual) >= 5:
            blocos.append(atual)
            atual = []
    if atual:
        blocos.append(atual)
    eventos = []
    for i, b in enumerate(blocos):
        ini = inicio + b[0]["s"]
        fim = inicio + (blocos[i + 1][0]["s"] if i + 1 < len(blocos) else min(b[-1]["e"] + 0.3, fim_seg - inicio))
        eventos.append({"ini": ini, "fim": fim, "palavras": [dict(p, s=p["s"] + inicio, e=p["e"] + inicio) for p in b]})
    return eventos


LIGACAO = {"de", "do", "da", "dos", "das", "a", "o", "e", "em", "no", "na", "por", "pra", "um", "uma",
           "que", "com", "meu", "minha", "seu", "sua", "mais", "é", "se", "eu", "vou", "tem"}


def limpa(palavra):
    return palavra.strip(",.;:!").upper()


def desenha_texto(d, xy, texto, fonte, cor, contorno=0, ancora="la"):
    d.text(xy, texto, font=fonte, fill=cor, stroke_width=contorno, stroke_fill=(0, 0, 0), anchor=ancora)


def desenha_legenda(im, evento, t, y_centro, F):
    d = ImageDraw.Draw(im)
    palavras = [limpa(p["w"]) for p in evento["palavras"]]
    tam = 66
    while True:
        f = F("Inter-Black", tam)
        larguras = [d.textlength(p, font=f) for p in palavras]
        esp = tam * 0.28
        total = sum(larguras) + esp * (len(palavras) - 1)
        if total <= 980 or tam <= 44:
            break
        tam -= 4
    x = (W - total) / 2
    for i, p in enumerate(evento["palavras"]):
        prox = evento["palavras"][i + 1]["s"] if i + 1 < len(evento["palavras"]) else evento["fim"]
        ativa = p["s"] <= t < prox
        if ativa:
            d.rounded_rectangle([x - 14, y_centro - tam * 0.62, x + larguras[i] + 14, y_centro + tam * 0.62],
                                radius=14, fill=MARSALA + (255,))
            desenha_texto(d, (x, y_centro), palavras[i], f, BRANCO, 0, "lm")
        else:
            desenha_texto(d, (x, y_centro), palavras[i], f, BRANCO, 6, "lm")
        x += larguras[i] + esp


def caixa_centrada(d, y, texto, fonte, cor_txt, cor_caixa, pad_x=28, pad_y=16, raio=18):
    larg = d.textlength(texto, font=fonte)
    asc, desc = fonte.getmetrics()
    alt = asc + desc
    x0 = (W - larg) / 2
    d.rounded_rectangle([x0 - pad_x, y - pad_y, x0 + larg + pad_x, y + alt + pad_y], radius=raio, fill=cor_caixa)
    d.text((x0, y), texto, font=fonte, fill=cor_txt)
    return y + alt + pad_y


def desenha_cabecalho(im, sub, F):
    d = ImageDraw.Draw(im)
    f_filtro = F("Inter-Bold", 32)
    desenha_texto(d, (W / 2, 292), FILTRO, f_filtro, CREME, 4, "mm")
    f = F("Fraunces-SemiBold", 84)
    linhas = CABECALHO.split("\n")
    asc, desc = f.getmetrics()
    alt_l = asc + desc - 8
    larg = max(d.textlength(l, font=f) for l in linhas)
    y0 = 330
    d.rounded_rectangle([(W - larg) / 2 - 36, y0, (W + larg) / 2 + 36, y0 + alt_l * len(linhas) + 36], radius=22,
                        fill=MARSALA + (245,))
    for i, l in enumerate(linhas):
        desenha_texto(d, (W / 2, y0 + 18 + i * alt_l), l, f, CREME, 0, "ma")
    if sub:
        caixa_centrada(d, y0 + alt_l * len(linhas) + 66, sub, F("Inter-Black", 38), BRANCO, PRETO + (200,))


def desenha_selo(im, F):
    d = ImageDraw.Draw(im)
    caixa_centrada(d, 268, SELO, F("Inter-Bold", 30), CREME, MARSALA + (235,), pad_x=22, pad_y=10, raio=14)


def desenha_rotulo(im, texto, y, F):
    d = ImageDraw.Draw(im)
    caixa_centrada(d, y, texto, F("Inter-Black", 56), BRANCO, MARSALA + (240,), pad_x=30, pad_y=14)


def desenha_gancho_texto(im, texto, F, y_meio=960):
    d = ImageDraw.Draw(im)
    linhas = [l.upper() for l in texto.split("\n")]
    # A primeira linha (a pergunta-filtro) é maior. Tudo encolhe junto até caber em 960px.
    t1, t2 = 92, 64
    while True:
        larg = [d.textlength(l, font=F("Inter-Black", t1 if i == 0 else t2)) for i, l in enumerate(linhas)]
        if max(larg) <= 960 or t2 <= 40:
            break
        t1, t2 = t1 - 4, t2 - 3
    alturas = [t1 * 1.14] + [t2 * 1.22] * (len(linhas) - 1)
    y = y_meio - sum(alturas) / 2
    for i, l in enumerate(linhas):
        f = F("Inter-Black", t1 if i == 0 else t2)
        cor = CREME if i == 0 else BRANCO
        desenha_texto(d, (W / 2, y), l, f, cor, 7, "ma")
        y += alturas[i]


def escurecer(im, alfa):
    camada = Image.new("RGBA", im.size, PRETO + (alfa,))
    im.alpha_composite(camada)


def desenha_citacao(im, texto, F):
    escurecer(im, 165)
    d = ImageDraw.Draw(im)
    f = F("Fraunces-Italic", 70)
    palavras, linhas, atual = texto.split(), [], ""
    for p in palavras:
        teste = (atual + " " + p).strip()
        if d.textlength(teste, font=f) > 880:
            linhas.append(atual)
            atual = p
        else:
            atual = teste
    linhas.append(atual)
    y = 960 - len(linhas) * 88 / 2
    desenha_texto(d, (W / 2, y - 110), "“", F("Fraunces-SemiBold", 160), MARSALA, 0, "ma")
    for l in linhas:
        desenha_texto(d, (W / 2, y), l, f, CREME, 0, "ma")
        y += 88
    desenha_texto(d, (W / 2, y + 40), "Dra. Aline Filgueiras", F("Inter-Bold", 38), CREME, 0, "ma")


def desenha_ponte(im, F):
    escurecer(im, 150)
    d = ImageDraw.Draw(im)
    desenha_texto(d, (W / 2, 640), "O MAPA DO ENVELHECIMENTO", F("Inter-Bold", 42), CREME, 0, "ma")
    f = F("Fraunces-SemiBold", 104)
    larg = d.textlength("é o passo 3 de 5", font=f)
    d.rounded_rectangle([(W - larg) / 2 - 34, 720, (W + larg) / 2 + 34, 870], radius=24, fill=MARSALA + (250,))
    desenha_texto(d, (W / 2, 795), "é o passo 3 de 5", f, CREME, 0, "mm")
    desenha_texto(d, (W / 2, 910), "da Consulta que Vende", F("Fraunces-SemiBold", 72), CREME, 0, "ma")
    desenha_texto(d, (W / 2, 1060), "Os outros 4 estão na", F("Inter-Medium", 44), CREME, 0, "ma")
    desenha_texto(d, (W / 2, 1118), "Filgueiras Academy", F("Inter-Black", 54), BRANCO, 0, "ma")


def desenha_final(im, F):
    # Na foto girada a capa fica no meio (~700–1450px). O texto vai em cima, sobre o logo
    # escurecido, e o botão embaixo, logo acima da faixa segura dos Stories.
    grad = Image.new("L", (1, H))
    for y in range(H):
        cima = max(0.0, min(1.0, (760 - y) / 420))
        baixo = max(0.0, min(1.0, (y - 1330) / 160))
        grad.putpixel((0, y), int(max(cima * 0.88, baixo * 0.80) * 255))
    camada = Image.new("RGBA", (W, H), PRETO + (0,))
    camada.putalpha(grad.resize((W, H)))
    im.alpha_composite(camada)
    d = ImageDraw.Draw(im)
    desenha_texto(d, (W / 2, 292), "NA FILGUEIRAS ACADEMY", F("Inter-Bold", 36), CREME, 0, "ma")
    desenha_texto(d, (W / 2, 340), "Mapa do Envelhecimento", F("Fraunces-SemiBold", 84), CREME, 0, "ma")
    desenha_texto(d, (W / 2, 452), "+ os 5 passos da Consulta que Vende", F("Inter-Bold", 46), BRANCO, 0, "ma")
    caixa_centrada(d, 548, "ÚLTIMAS UNIDADES", F("Inter-Black", 34), CREME, MARSALA + (255,), pad_x=26, pad_y=10, raio=30)
    # Botão desenhado + seta para o botão nativo "Enviar mensagem" do anúncio.
    f = F("Inter-Black", 44)
    txt = "TOQUE EM ENVIAR MENSAGEM"
    larg = d.textlength(txt, font=f)
    d.rounded_rectangle([(W - larg) / 2 - 40, 1424, (W + larg) / 2 + 40, 1528], radius=52, fill=CREME + (255,))
    desenha_texto(d, (W / 2, 1476), txt, f, MARSALA, 0, "mm")
    d.polygon([(W / 2 - 30, 1544), (W / 2 + 30, 1544), (W / 2, 1584)], fill=CREME + (255,))


# ---------------------------------------------------------------- montagem


def montar(nome, cfg, palavras, F, saida_dir, manter=False):
    video = VIDEOS[nome]
    tmp = Path(tempfile.mkdtemp(prefix=f"mapa_{nome}_"))
    for chave in ("packshot", "foto_pele"):
        preparar_foto(cfg[chave], tmp / f"{chave}.jpg")
    camila = cfg.get("camila") or {}

    clipes, audios, eventos, legendas, sfx = [], [], [], [], []
    t = 0.0
    seq = list(video["seq"])
    if video.get("gancho"):
        seq = ["gancho"] + seq
    fim_cabecalho = None
    inicio_cards = None  # o selo sai no primeiro card (citação ou ponte)

    for i, chave in enumerate(seq):
        nome_seg = f"s{i:02d}_{chave}"
        if chave == "gancho":
            g = GANCHO_CAMILA[video["gancho"]]
            clip_cam = camila.get(video["gancho"])
            dur = duracao(clip_cam) if clip_cam else 3.6
            clipes.append(render_quadro_pausado(cfg, g["fundo"][0], g["fundo"][1], dur, tmp, nome_seg, clip_cam))
            if clip_cam:
                audios.append(render_fala_audio({"cam": clip_cam}, [("cam", 0.0, dur)], tmp, nome_seg))
                eventos.append({"ini": t, "fim": t + dur, "tipo": "gancho_texto_cima", "txt": g["fala"]})
            else:
                audios.append(silencio(dur, tmp, nome_seg))
                eventos.append({"ini": t + 0.15, "fim": t + dur, "tipo": "gancho_texto", "txt": g["fala"]})
            fim_cabecalho = t + dur
            t += dur
            continue

        seg = SEG[chave]
        if seg["tipo"] in ("dividido", "cheio"):
            fala = seg["fala"]
            dur = sum(b - a for _, a, b in fala)
            if seg["tipo"] == "dividido":
                cima = render_topo(cfg, seg["topo"], dur, TOPO_H, tmp, nome_seg + "_topo")
                baixo = render_fala_video(cfg, fala, "baixo", tmp, nome_seg + "_baixo")
                clipes.append(vstack(cima, baixo, tmp, nome_seg))
                y_leg, y_rot = TOPO_H, 900
            else:
                clipes.append(render_fala_video(cfg, fala, "cheio", tmp, nome_seg, push=True))
                y_leg, y_rot = 1330, 560
            audios.append(render_fala_audio(cfg, fala, tmp, nome_seg))
            legendas += [dict(e, y=y_leg) for e in blocos_de_legenda(palavras_da_fala(palavras, fala), t, t + dur)]
            for r in seg.get("rotulos", []):
                if r["src"]:
                    _, a, _ = fala[0]
                    desloc = 0.0
                    for _, fa, fb in fala:  # acha a faixa que contém o tempo de origem
                        if fa - 0.01 <= r["t0"] <= fb + 0.01:
                            a = fa
                            break
                        desloc += fb - fa
                    ini = t + desloc + (r["t0"] - a)
                    fim = t + desloc + (r["t1"] - a) if r["t1"] else t + dur
                else:
                    ini = t + r["t0"]
                    fim = t + r["t1"] if r["t1"] else t + dur
                eventos.append({"ini": ini, "fim": min(fim, t + dur), "tipo": "rotulo", "txt": r["texto"], "y": y_rot})
                sfx.append(("pop", ini))
        elif seg["tipo"] == "broll":
            dur = seg["dur"]
            vo = camila.get(seg.get("camila", ""))
            if vo:
                dur = max(dur, duracao(vo) + 0.4)
            clipes.append(render_topo(cfg, seg["topo"], dur, H, tmp, nome_seg))
            audios.append(render_fala_audio({"cam": vo}, [("cam", 0.0, duracao(vo))], tmp, nome_seg) if vo else silencio(dur, tmp, nome_seg))
            if vo and dur > duracao(vo):
                audios.append(silencio(dur - duracao(vo), tmp, nome_seg + "_resto"))
            tipo, txt = seg["grafico"]
            eventos.append({"ini": t, "fim": t + dur, "tipo": tipo, "txt": txt})
            if inicio_cards is None:
                inicio_cards = t
        else:  # foto
            dur = seg["dur"]
            vo = camila.get(seg.get("camila", ""))
            if vo:
                dur = max(dur, duracao(vo) + 0.6)
            clipes.append(render_foto(cfg, seg["chave"], dur, tmp, nome_seg))
            audios.append(render_fala_audio({"cam": vo}, [("cam", 0.0, duracao(vo))], tmp, nome_seg) if vo else silencio(dur, tmp, nome_seg))
            if vo and dur > duracao(vo):
                audios.append(silencio(dur - duracao(vo), tmp, nome_seg + "_resto"))
            eventos.append({"ini": t, "fim": t + dur, "tipo": seg["grafico"][0], "txt": None})
        for tipo_sfx, quando in seg.get("sfx", []):
            sfx.append((tipo_sfx, t + quando))
        if i > 0:
            sfx.append(("whoosh", max(0.0, t - 0.12)))
        if fim_cabecalho is None:
            fim_cabecalho = t + dur
        t += dur

    total = t
    # Cabeçalho grande no gancho, depois o selo pequeno até o primeiro card.
    eventos.append({"ini": 0.0, "fim": fim_cabecalho, "tipo": "cabecalho", "txt": video.get("sub")})
    eventos.append({"ini": fim_cabecalho, "fim": inicio_cards or total, "tipo": "selo", "txt": None})
    sfx.append(("pop", 0.05))

    # ---- base de vídeo
    lista = tmp / "clipes.txt"
    lista.write_text("".join(f"file '{c}'\n" for c in clipes))
    base = tmp / "base.mp4"
    rodar(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", str(lista), "-c", "copy", str(base)])
    lista_a = tmp / "audios.txt"
    lista_a.write_text("".join(f"file '{a}'\n" for a in audios))
    voz = tmp / "voz.wav"
    rodar(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", str(lista_a), "-ar", "48000", "-ac", "2", str(voz)])

    # ---- camada de grafismos: um PNG por estado, com duração (ffconcat)
    cortes = {0.0, total}
    for e in eventos:
        cortes.update([round(e["ini"], 3), round(e["fim"], 3)])
    for l in legendas:
        cortes.update([round(l["ini"], 3), round(l["fim"], 3)])
        for p in l["palavras"]:
            cortes.add(round(p["s"], 3))
    cortes = sorted(c for c in cortes if 0 <= c <= total)
    graf_dir = tmp / "graf"
    graf_dir.mkdir()
    linhas = ["ffconcat version 1.0"]
    ultimo = None
    for k in range(len(cortes) - 1):
        a, b = cortes[k], cortes[k + 1]
        if b - a < 1 / FPS / 2:
            continue
        meio = (a + b) / 2
        im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ativos = [e for e in eventos if e["ini"] <= meio < e["fim"]]
        ordem = ["citacao", "ponte", "final", "gancho_texto", "gancho_texto_cima", "cabecalho", "selo", "rotulo"]
        for e in sorted(ativos, key=lambda e: ordem.index(e["tipo"])):
            if e["tipo"] == "cabecalho":
                desenha_cabecalho(im, e["txt"], F)
            elif e["tipo"] == "selo":
                desenha_selo(im, F)
            elif e["tipo"] == "rotulo":
                desenha_rotulo(im, e["txt"], e["y"], F)
            elif e["tipo"] == "gancho_texto":
                desenha_gancho_texto(im, e["txt"], F)
            elif e["tipo"] == "gancho_texto_cima":
                desenha_gancho_texto(im, e["txt"], F, y_meio=800)
            elif e["tipo"] == "citacao":
                desenha_citacao(im, e["txt"], F)
            elif e["tipo"] == "ponte":
                desenha_ponte(im, F)
            elif e["tipo"] == "final":
                desenha_final(im, F)
        for l in legendas:
            if l["ini"] <= meio < l["fim"]:
                desenha_legenda(im, l, meio, l["y"], F)
        arq = graf_dir / f"g{k:04d}.png"
        im.save(arq, optimize=False, compress_level=3)
        linhas += [f"file '{arq}'", f"duration {b - a:.4f}"]
        ultimo = arq
    linhas.append(f"file '{ultimo}'")
    graf = tmp / "graf.txt"
    graf.write_text("\n".join(linhas) + "\n")

    # ---- áudio: voz tratada + trilha com ducking + efeitos
    entradas = ["-i", str(base), "-f", "concat", "-safe", "0", "-i", str(graf), "-i", str(voz),
                "-ss", f"{cfg.get('trilha_inicio', 0)}", "-i", cfg["trilha"]]
    tipos = sorted({s[0] for s in sfx})
    idx = {}
    for tp in tipos:
        idx[tp] = 4 + len(idx)
        entradas += ["-i", cfg[f"sfx_{tp}"]]
    vol_sfx = {"pop": 0.22, "whoosh": 0.12, "folha": 0.35}
    fil = [
        f"[1:v]fps={FPS},format=rgba[g]",
        "[0:v][g]overlay=0:0:eof_action=repeat,format=yuv420p[v]",
        "[2:a]highpass=f=80,afftdn=nf=-28,loudnorm=I=-14:TP=-1.5:LRA=9,aresample=48000[vz]",
        "[vz]asplit=2[vz1][vz2]",
        f"[3:a]aresample=48000,aformat=channel_layouts=stereo,atrim=0:{total:.3f},volume=0.16,"
        f"afade=t=in:d=0.8,afade=t=out:st={total - 1.2:.3f}:d=1.2[tr]",
        "[tr][vz2]sidechaincompress=threshold=0.02:ratio=6:attack=15:release=350[trd]",
    ]
    mix = ["[vz1]", "[trd]"]
    for tp in tipos:
        quando = [q for k, q in sfx if k == tp]
        fil.append(f"[{idx[tp]}:a]aresample=48000,aformat=channel_layouts=stereo,volume={vol_sfx[tp]},asplit={len(quando)}"
                   + "".join(f"[{tp}{j}]" for j in range(len(quando))))
        for j, q in enumerate(quando):
            ms = int(q * 1000)
            fil.append(f"[{tp}{j}]adelay={ms}|{ms}[{tp}d{j}]")
            mix.append(f"[{tp}d{j}]")
    fil.append("".join(mix) + f"amix=inputs={len(mix)}:normalize=0:duration=first,alimiter=limit=0.8:level=false,atrim=0:{total:.3f}[a]")
    saida_dir.mkdir(parents=True, exist_ok=True)
    saida = saida_dir / f"mapa-{nome}.mp4"
    rodar(["ffmpeg", "-v", "error", "-y", *entradas, "-filter_complex", ";".join(fil), "-map", "[v]", "-map", "[a]",
           "-t", f"{total:.3f}", "-c:v", "libx264", "-crf", "18", "-preset", "slow", "-pix_fmt", "yuv420p",
           "-r", str(FPS), "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", str(saida)])
    if not manter:
        shutil.rmtree(tmp)
    print(f"{saida}  ({total:.1f}s)")
    return saida


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--fontes", required=True, help="JSON com os caminhos dos arquivos de origem")
    ap.add_argument("--video", default="todos", help="v1a, v1b, v2a, v2b, v3a, v3b ou todos")
    ap.add_argument("--saida", default="saida", help="pasta de saída")
    ap.add_argument("--manter-temp", action="store_true", help="não apaga os arquivos intermediários")
    args = ap.parse_args()

    cfg = json.loads(Path(args.fontes).read_text())
    palavras = json.loads((AQUI / "palavras.json").read_text())
    preparar_fontes(cfg["fontes_dir"])
    F = Fontes(cfg["fontes_dir"])
    nomes = list(VIDEOS) if args.video == "todos" else [args.video]
    for n in nomes:
        if n not in VIDEOS:
            sys.exit(f"Vídeo desconhecido: {n}. Opções: {', '.join(VIDEOS)}")
        montar(n, cfg, palavras, F, Path(args.saida), args.manter_temp)


if __name__ == "__main__":
    main()
