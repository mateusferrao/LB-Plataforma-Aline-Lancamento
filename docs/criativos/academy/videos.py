"""Monta os vídeos da Academy (V1, V3, V4, V5, V6) a partir dos brutos do laboratório (19/08/2026).

Uso:
    python docs/criativos/academy/videos.py            # todos
    python docs/criativos/academy/videos.py V1 V4      # só alguns

Os brutos ficam fora do git, em BRUTOS (padrão: Downloads/Criativos Filgueiras Academy).
As trilhas (Pixabay, uso comercial) ficam em privado/trilhas/. A "Documentary Suspense" saiu em 06/10 (tensa demais). A saída vai para out/videos/:
cada vídeo em 9:16 (1080x1920) e 4:5 (1080x1350, crop central).

Os textos na tela são renderizados em HTML pelo Chrome headless, com fundo transparente, para
usar as fontes e o grifo da LP. Depois o ffmpeg (imageio-ffmpeg) recorta, sobrepõe e mixa.

Regras que valem aqui (README desta pasta): nenhum preço, nenhum nome de medicamento, nenhum
frame com terceiros, marca de terceiros ou peça anatômica sem pixelização. O clipe da aula
(WhatsApp de 02/10) já vem pixelado. O IMG_2821 (cabeça descoberta de 0 a 18s) não é usado.
"""

import html
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parents[2]
BRUTOS = Path(os.environ.get("BRUTOS", Path.home() / "Downloads" / "Criativos Filgueiras Academy"))
OUT = AQUI / "out"
TMP = OUT / "tmp"
OVL = OUT / "overlays"
VIDS = OUT / "videos"
TRILHAS = AQUI / "privado" / "trilhas"
W, H, FPS = 1080, 1920, 30

WA = "WhatsApp Video 2026-10-02 at 15.46.32.mp4"
# A aula pixelada sem o texto queimado no topo: recorte da metade de baixo (mãos + peça pixelada).
WA_SEM_TEXTO = dict(cx=0.5, cy=0.63, z=1.6)

CHROME = next((c for c in [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
] if Path(c).exists()), None)


def ffmpeg_bin():
    if os.environ.get("FFMPEG"):
        return os.environ["FFMPEG"]
    if shutil.which("ffmpeg"):
        return "ffmpeg"
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


FF = ffmpeg_bin()


def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    if r.returncode != 0:
        sys.exit(f"ffmpeg falhou:\n{' '.join(map(str, cmd))}\n{r.stderr[-3000:]}")


# --------------------------------------------------------------------------------------------
# Roteiros. Cada cena: fonte (clip/foto/cartao), duração de saída e textos com tempos relativos.
# Textos: lista de (inicio, fim, posição, html). Copy da LP sempre que possível.
# --------------------------------------------------------------------------------------------

def clip(src, ss, dur, speed=1.0, cx=0.5, cy=0.5, z=1.0, voz=False, textos=()):
    return dict(tipo="clip", src=src, ss=ss, dur=dur, speed=speed, cx=cx, cy=cy, z=z, voz=voz, textos=list(textos))


def foto(src, dur, z0=1.0, z1=1.08, cx=0.5, cy=0.5, textos=()):
    return dict(tipo="foto", src=src, dur=dur, z0=z0, z1=z1, cx=cx, cy=cy, textos=list(textos))


def cartao(dur, html_cartao):
    return dict(tipo="cartao", dur=dur, html=html_cartao, textos=[])


def cor(dur, textos=()):
    """Fundo sólido (preto da marca) para cenas só de texto/interface, como a conversa do V5."""
    return dict(tipo="cor", dur=dur, textos=list(textos))


def T(a, b, pos, conteudo):
    return (a, b, pos, conteudo)


G = lambda s: f'<span class="grifo">{s}</span>'  # noqa: E731
# Gancho: texto grande no centro, visível já no frame 0 (é o quadro do autoplay e da miniatura).
GANCHO = lambda s: f'<p class="gancho">{s}</p>'  # noqa: E731
GANCHO_S = lambda s: f'<p class="gancho serif">{s}</p>'  # noqa: E731
GANCHO_V6 = GANCHO(f"Fez curso e continua travada {G('na agulha e na consulta?')}")


def chat(n):
    """Conversa de WhatsApp do V5 com as n primeiras mensagens (para aparecerem uma a uma)."""
    msgs = [
        '<div class="msg ela">Oi! Quanto fica o preenchimento labial?<small>19:02</small></div>',
        '<div class="msg voce">Te mandei a avaliação, o que eu faria no seu caso e o valor.<small>19:15 ✓✓</small></div>',
        '<div class="msg ela fim">Vou pensar.<small>19:41</small></div>',
        '<span class="aviso">sem resposta há 9 dias</span>',
    ]
    return ('<div class="chatv"><div class="cab"><i></i><span><b>Paciente</b><small>visto por último hoje</small></span></div>'
            f'<div class="msgs">{"".join(msgs[:n])}</div></div>')

CTA = '<span class="cta">Quero entrar na Academy <b>→</b></span>'
ASSINA = ('<span class="assina"><img src="{avatar}"><span><b>Dra. Aline Filgueiras</b>'
          '1.000+ alunas formadas · 11+ anos de clínica</span></span>')


def card(titulo, apoio):
    return (f'<div class="card"><img class="logo" src="{{logo}}"><h2>{titulo}</h2>'
            f'<p>{apoio}</p>{CTA}{ASSINA}</div>')


# Fala da Aline no clipe da aula (conferida com dois modelos + usuário em 06/10).
FALAS_V1 = [
    (0.00, 3.36, "Visão anatômica da região de pálpebra inferior, infraorbital."),
    (3.36, 7.60, "Eu tenho a tear trough aqui, que já é a minha calha lacrimal."),
    (7.66, 10.50, "Aqui eu tenho a minha região palpebromalar."),
    (10.50, 12.76, "Vou entrar e vou pra minha calha."),
    (12.80, 15.55, "Não há muito o que ser feito em região de calha lacrimal,"),
    (15.56, 18.98, "considerando que a espessura dérmica aqui é muito pequena."),
    (19.04, 22.40, "Então, eu vou sempre ver o prato da minha cânula mesmo,"),
    (22.48, 24.90, "deixar um pouquinho de produto."),
    (24.98, 26.90, "Microbolus, eu deposito."),
    (26.90, 30.22, "E aqui, ó, lembra que a gente falou da pálpebra superior de rebordo ósseo?"),
    (30.26, 30.94, "Aqui é a mesma coisa."),
    (30.96, 35.40, "Então, no rebordo ósseo, eu sempre vou assentar."),
]

ROTEIROS = {
    # V1 · Frio · anatomia · remix do vencedor (controle). Gancho original queimado no clipe.
    "V1-aula-academy": dict(trilha="inspiring-uplifting.mp3", vol=0.2, cenas=[
        clip(WA, 0, 35.5, voz=True, textos=[
            T(9.0, 35.5, "chip", '<span class="chip">Trecho de uma aula da Filgueiras Academy</span>'),
            *[T(a, b, "fala", f'<span class="fala">{html.escape(f)}</span>') for a, b, f in FALAS_V1],
        ]),
        cartao(3.8, card(
            f"Essa é uma aula do novo curso de {G('anatomia em fresh frozen')} da Filgueiras Academy.",
            "Mais de 70 aulas de técnica, a Consulta que Vende e 6 encontros ao vivo no ano.")),
    ]),
    # V3 · Frio · fundadora. Abre na aula pixelada (o que mais para a tela) com gancho de curiosidade.
    # Sem o IMG_2749: nada de frame rindo ou prendendo o cabelo (pedido de 06/10).
    "V3-paramentacao": dict(trilha="piano-esperanca.mp3", vol=0.9, cenas=[
        clip(WA, 21.0, 2.2, **WA_SEM_TEXTO, textos=[
            T(0.0, 2.2, "centro", GANCHO(f"1.000 alunas formadas. {G('E ela ainda estuda dissecção.')}")),
        ]),
        clip("IMG_2837.MOV", 4.0, 4.6, speed=6.8, cx=0.5, cy=0.45, z=1.05, textos=[
            T(0.0, 4.6, "alto", f'<p class="t">A culpa nunca foi sua.<br>{G("Faltava ver a face por dentro.")}</p>'),
        ]),
        clip("IMG_2824.MOV", 60.0, 3.4, cx=0.55, cy=0.5, z=1.15, textos=[
            T(0.0, 3.4, "alto", '<p class="m">11 anos de clínica.</p>'
                                f'<p class="t">{G("Professora internacional de anatomia em fresh frozen.")}</p>'),
        ]),
        clip(WA, 14.0, 3.2, **WA_SEM_TEXTO, textos=[
            T(0.0, 3.2, "alto", f'<p class="t">Agora ela mostra a face por dentro, {G("camada por camada.")}</p>'
                                '<p class="m">No curso online de anatomia em fresh frozen. Sem visto e sem passagem.</p>'),
        ]),
        cartao(3.6, card(f"Anatomia em fresh frozen {G('dentro da Filgueiras Academy.')}",
                         "Com mais de 70 aulas de técnica e a Consulta que Vende.")),
    ]),
    # V4 · Frio · dor e medo. Abre com a cânula na peça pixelada + a pergunta que ela se faz na cadeira.
    "V4-seringa-na-mao": dict(trilha="corporate-inspiring.mp3", vol=0.9, cenas=[
        clip(WA, 19.6, 2.4, **WA_SEM_TEXTO, textos=[
            T(0.0, 2.4, "centro", GANCHO_S("“Tem vaso nesse ponto?”")),
        ]),
        clip("IMG_2775.MOV", 12.0, 2.6, cx=0.5, cy=0.62, z=1.5, textos=[
            T(0.0, 2.6, "meio", '<p class="s">“Qual é a profundidade aqui?”</p>'),
        ]),
        foto("IMG_2778.HEIC", 2.4, z0=1.0, z1=1.12, cy=0.6, textos=[
            T(0.0, 2.4, "meio", '<p class="s">“E se der intercorrência?”</p>'),
        ]),
        clip("IMG_2826.MOV", 12.0, 3.0, cx=0.62, cy=0.45, z=1.6, textos=[
            T(0.0, 3.0, "meio", '<p class="t">Se a mão hesita, <br>a paciente percebe.</p>'),
        ]),
        clip("IMG_2824.MOV", 88.6, 3.4, cx=0.55, cy=0.5, z=1.15, textos=[
            T(0.0, 3.4, "alto", f'<p class="t">Quem já viu a face por dentro {G("sabe o que tem embaixo da agulha.")}</p>'),
        ]),
        cartao(3.6, card(f"Anatomia em fresh frozen, {G('camada por camada.')}",
                         "O curso online de dissecção da Filgueiras Academy. Sem visto e sem passagem.")),
    ]),
    # V5 · Remarketing · venda. Abre com a conversa animada: as mensagens entram uma a uma.
    "V5-tres-vezes": dict(trilha="corporate-inspiring.mp3", vol=0.9, cenas=[
        cor(3.6, textos=[
            T(0.0, 0.45, "chat", chat(1)),
            T(0.45, 1.0, "chat", chat(2)),
            T(1.0, 1.8, "chat", chat(3)),
            T(1.8, 3.6, "chat", chat(4)),
            T(2.2, 3.6, "pergunta", '<p class="t menor">Quantas vezes você ouviu isso este mês?</p>'),
        ]),
        clip("IMG_2824.MOV", 15.0, 3.2, cx=0.55, cy=0.5, z=1.1, textos=[
            T(0.0, 3.2, "alto", f'<p class="t">A paciente decide se confia em você {G("três vezes.")}</p>'),
        ]),
        clip("IMG_2826.MOV", 30.0, 1.8, cx=0.62, cy=0.45, z=1.5, textos=[
            T(0.0, 1.8, "meio", '<p class="t g1">Na consulta.</p>'),
        ]),
        clip("IMG_2775.MOV", 18.0, 1.8, cx=0.5, cy=0.62, z=1.4, textos=[
            T(0.0, 1.8, "meio", '<p class="t g1">Na agulha.</p>'),
        ]),
        clip("IMG_2837.MOV", 39.3, 1.8, cx=0.45, cy=0.42, z=1.05, textos=[
            T(0.0, 1.8, "meio", '<p class="t g1">No espelho.</p>'),
        ]),
        clip("IMG_2824.MOV", 60.0, 4.2, cx=0.55, cy=0.5, z=1.15, textos=[
            T(0.0, 4.2, "alto", '<p class="m">Se a mão hesita, a paciente percebe.</p>'
                                f'<p class="t">{G("Se você trava na consulta, ela diz “vou pensar” e não volta.")}</p>'),
        ]),
        cartao(3.6, card(f"Consulta, agulha e espelho {G('num lugar só.')}",
                         "Anatomia em fresh frozen, mais de 70 aulas de técnica e a Consulta que Vende.")),
    ]),
    # V6 · Remarketing · Academy completa. Abre com 4 cortes rápidos sob o gancho (movimento no 1º segundo).
    "V6-o-que-tem-dentro": dict(trilha="corporate-inspiring.mp3", vol=0.9, cenas=[
        # o mesmo gancho atravessa os 4 cortes
        clip(WA, 20.0, 0.55, **WA_SEM_TEXTO, textos=[T(0.0, 0.55, "centro", GANCHO_V6)]),
        clip("IMG_2775.MOV", 25.0, 0.55, cx=0.5, cy=0.6, z=1.35, textos=[T(0.0, 0.55, "centro", GANCHO_V6)]),
        clip("IMG_2824.MOV", 89.8, 0.55, cx=0.55, cy=0.5, z=1.15, textos=[T(0.0, 0.55, "centro", GANCHO_V6)]),
        foto("IMG_2769.JPG", 0.55, z0=1.05, z1=1.08, cy=0.42, textos=[T(0.0, 0.55, "centro", GANCHO_V6)]),
        clip("IMG_2824.MOV", 40.0, 2.8, cx=0.55, cy=0.5, z=1.15, textos=[
            T(0.0, 2.8, "alto", f'<p class="t">A Filgueiras Academy junta tudo {G("num lugar só.")}</p>'),
        ]),
        clip(WA, 20.0, 3.0, **WA_SEM_TEXTO, textos=[
            T(0.0, 3.0, "alto", '<span class="num">1</span><p class="t">Anatomia em fresh frozen</p>'
                                '<p class="m">A face por dentro, camada por camada.</p>'),
        ]),
        clip("IMG_2775.MOV", 25.0, 3.0, cx=0.5, cy=0.6, z=1.35, textos=[
            T(0.0, 3.0, "alto", '<span class="num">2</span><p class="t">Mais de 70 aulas de técnica</p>'
                                '<p class="m">Toxina, preenchimento e bioestimuladores, com intercorrências e anestesia.</p>'),
        ]),
        clip("IMG_2824.MOV", 87.6, 3.0, cx=0.55, cy=0.5, z=1.15, textos=[
            T(0.0, 3.0, "alto", '<span class="num">3</span><p class="t">A Consulta que Vende</p>'
                                '<p class="m">Com anamnese, termos e precificação prontos.</p>'),
        ]),
        foto("IMG_2769.JPG", 3.0, z0=1.05, z1=1.15, cy=0.42, textos=[
            T(0.0, 3.0, "alto", '<span class="num">4</span><p class="t">6 encontros ao vivo no ano</p>'
                                '<p class="m">E uma aula com a Aline pra discussão de casos.</p>'),
        ]),
        cartao(3.6, card(f"12 meses de acesso {G('a tudo.')}", "No celular ou no computador. 7 dias de garantia.")),
    ]),
}


# --------------------------------------------------------------------------------------------
# Textos em HTML → PNG transparente (Chrome headless)
# --------------------------------------------------------------------------------------------

def uri(p):
    return Path(p).resolve().as_uri()


CSS = """
@font-face { font-family: "Fraunces"; src: url("@FR@") format("woff2"); font-weight: 400 700; }
@font-face { font-family: "Fraunces"; src: url("@FRI@") format("woff2"); font-weight: 400 700; font-style: italic; }
@font-face { font-family: "Inter"; src: url("@INTER@") format("woff2"); font-weight: 400 700; }
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { background: transparent; }
body { width: 1080px; height: 1920px; overflow: hidden; font-family: "Inter", sans-serif; }
.ov { position: absolute; inset: 0; display: none; }
.ov.on { display: block; }
.bloco { position: absolute; left: 150px; right: 180px; }
.bloco p { margin: 0 0 14px; }
.in { background: rgba(12,11,10,.76); box-decoration-break: clone; -webkit-box-decoration-break: clone; padding: .05em .22em; }
.alto { top: 330px; } .pergunta { top: 1250px; } .t.menor { font-size: 52px; } .centro { top: 640px; text-align: center; } .meio { top: 760px; } .meio2 { top: 960px; } .baixo { top: 1180px; }
.t { color: #f5f1ea; font-weight: 600; font-size: 62px; line-height: 1.42; letter-spacing: -.015em; }
.t .grifo, .t.g1 .in { background: #7e1e1c; box-decoration-break: clone; -webkit-box-decoration-break: clone; padding: .02em .16em; line-height: 1.44; text-shadow: none; }
.m { color: rgba(245,241,234,.92); font-weight: 500; font-size: 38px; line-height: 1.5; }
.s { font-family: "Fraunces", serif; font-style: italic; color: #f5f1ea; font-size: 84px; line-height: 1.32; letter-spacing: -.01em; }
.gancho { color: #f5f1ea; font-weight: 700; font-size: 84px; line-height: 1.36; letter-spacing: -.02em; }
.gancho .grifo { background: #7e1e1c; box-decoration-break: clone; -webkit-box-decoration-break: clone; padding: .02em .16em; }
.gancho.serif { font-family: "Fraunces", serif; font-style: italic; font-weight: 500; font-size: 104px; line-height: 1.24; letter-spacing: -.01em; }
.chatwrap { position: absolute; left: 70px; right: 150px; top: 240px; }
.chatv { background: #1b1613; border: 1px solid rgba(245,241,234,.14); border-radius: 28px; overflow: hidden; }
.chatv .cab { display: flex; align-items: center; gap: 20px; padding: 26px 32px; background: #221b17; border-bottom: 1px solid rgba(245,241,234,.08); }
.chatv .cab i { width: 66px; height: 66px; border-radius: 50%; background: #4a413b; display: block; }
.chatv .cab b { color: #f5f1ea; font-size: 36px; font-weight: 600; display: block; }
.chatv .cab small { font-size: 22px; color: #726b63; }
.chatv .msgs { padding: 34px 30px 38px; display: flex; flex-direction: column; gap: 24px; }
.chatv .msg { max-width: 84%; padding: 22px 28px 16px; border-radius: 24px; font-size: 44px; line-height: 1.32; color: #f5f1ea; }
.chatv .msg small { display: block; text-align: right; margin-top: 6px; font-size: 19px; color: rgba(245,241,234,.55); }
.chatv .ela { align-self: flex-start; background: #2c2521; border-top-left-radius: 6px; }
.chatv .voce { align-self: flex-end; background: #7e1e1c; border-top-right-radius: 6px; }
.chatv .fim { font-family: "Fraunces", serif; font-style: italic; font-size: 118px; line-height: 1.1; padding: 22px 32px 14px; white-space: nowrap; }
.chatv .aviso { align-self: center; margin-top: 10px; font-size: 22px; letter-spacing: .14em; text-transform: uppercase; color: #a69f97; }
.palbox { position: absolute; left: 150px; right: 180px; top: 700px; text-align: center; }
.pal { display: inline; color: #fff; font-weight: 700; font-size: 70px; line-height: 1.18; text-transform: uppercase; letter-spacing: .005em;
  -webkit-text-stroke: 10px #000; paint-order: stroke fill; text-shadow: 0 4px 18px rgba(0,0,0,.45); }
.pal b { color: #ffd400; font-weight: 700; }
.num { display: inline-flex; width: 74px; height: 74px; border-radius: 50%; background: #7e1e1c; color: #fff; font-family: "Fraunces", serif; font-size: 44px; align-items: center; justify-content: center; margin-bottom: 18px; }
.chipbox { position: absolute; left: 150px; right: 180px; top: 560px; text-align: center; }
.chip { display: inline-block; background: rgba(12,11,10,.78); color: #e7a39c; font-size: 25px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase; padding: 12px 22px; border-radius: 999px; }
.alto .chip { margin-top: 0; }
.falabox { position: absolute; left: 150px; right: 180px; top: 1160px; text-align: center; }
.fala { display: inline; background: rgba(12,11,10,.78); color: #fff; font-weight: 600; font-size: 46px; line-height: 1.5; padding: .1em .3em; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
.cartao { background: #0c0b0a; }
.card { position: absolute; left: 150px; right: 180px; top: 330px; height: 1090px; display: flex; flex-direction: column; justify-content: center; gap: 0; }
.card .logo { height: 54px; width: auto; align-self: flex-start; filter: invert(1) brightness(1.05) sepia(.12); opacity: .92; margin-bottom: 70px; }
.card h2 { color: #f5f1ea; font-weight: 600; font-size: 64px; line-height: 1.2; letter-spacing: -.015em; }
.card h2 .grifo { background: #7e1e1c; box-decoration-break: clone; -webkit-box-decoration-break: clone; padding: .02em .16em; line-height: 1.46; }
.card p { margin-top: 32px; color: #a69f97; font-size: 34px; line-height: 1.42; }
.card .cta { margin-top: 70px; align-self: flex-start; display: inline-flex; gap: 18px; align-items: center; background: #7e1e1c; color: #fff; font-weight: 600; font-size: 38px; padding: 30px 46px; border-radius: 999px; }
.card .assina { margin-top: 64px; display: flex; align-items: center; gap: 22px; color: #a69f97; font-size: 26px; line-height: 1.4; }
.card .assina img { width: 104px; height: 104px; border-radius: 50%; object-fit: cover; border: 3px solid #7e1e1c; }
.card .assina b { display: block; color: #f5f1ea; font-size: 30px; font-weight: 600; }
.grao::after { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .07; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"); }
"""


def html_texto(pos, conteudo):
    if pos == "chip":
        return f'<div class="chipbox">{conteudo}</div>'
    if pos == "fala":
        return f'<div class="falabox">{conteudo}</div>'
    if pos == "pal":
        return f'<div class="palbox">{conteudo}</div>'
    if pos == "chat":
        return f'<div class="chatwrap">{conteudo}</div>'
    # cada parágrafo ganha um <span class="in"> com fundo escuro por linha (lê sobre a parede branca)
    conteudo = re.sub(r'(<p class="[^"]*">)(.*?)(</p>)', lambda m: m.group(1) + '<span class="in">' + m.group(2) + '</span>' + m.group(3), conteudo, flags=re.S)
    return f'<div class="bloco {pos}">{conteudo}</div>'


def renderizar_overlays(nome, roteiro):
    """Gera um HTML com todos os textos do vídeo e tira um PNG transparente de cada um."""
    OVL.mkdir(parents=True, exist_ok=True)
    fontes = RAIZ / "app" / "fonts"
    css = (CSS.replace("@FR@", uri(fontes / "fraunces-latin.woff2"))
              .replace("@FRI@", uri(fontes / "fraunces-latin-italic.woff2"))
              .replace("@INTER@", uri(fontes / "inter-latin.woff2")))
    repl = dict(logo=uri(RAIZ / "public" / "images" / "logo-ink.png"), avatar=uri(AQUI / "fotos" / "avatar-aline.jpg"))
    partes, ids = [], []
    for ci, cena in enumerate(roteiro["cenas"]):
        if cena["tipo"] == "cartao":
            oid = f"c{ci}"
            partes.append(f'<section class="ov cartao grao" id="{oid}">{cena["html"].format(**repl)}</section>')
            ids.append((oid, ci, None))
        for ti, (a, b, pos, conteudo) in enumerate(cena["textos"]):
            oid = f"c{ci}t{ti}"
            partes.append(f'<section class="ov" id="{oid}">{html_texto(pos, conteudo)}</section>')
            ids.append((oid, ci, ti))
    doc = (f'<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>{css}</style></head><body>'
           + "\n".join(partes)
           + '<script>const o=new URLSearchParams(location.search).get("only");'
             'if(o)document.getElementById(o).classList.add("on");</script></body></html>')
    pagina = OVL / f"{nome}.html"
    pagina.write_text(doc, encoding="utf-8")
    pngs = {}
    for oid, ci, ti in ids:
        destino = OVL / f"{nome}-{oid}.png"
        u = pagina.resolve().as_uri() + f"?only={oid}"
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--allow-file-access-from-files", "--default-background-color=00000000",
                        "--run-all-compositor-stages-before-draw", "--virtual-time-budget=4000",
                        f"--screenshot={destino}", f"--window-size={W},{H}", "--force-device-scale-factor=1", u],
                       check=True, capture_output=True)
        pngs[(ci, ti)] = destino
    return pngs


# --------------------------------------------------------------------------------------------
# Cenas → MP4 intermediários (1080x1920, 30fps, áudio estéreo 48k)
# --------------------------------------------------------------------------------------------

GRADE = "eq=saturation=0.82:contrast=1.04:brightness=-0.015"


def preparar_foto(src):
    """Foto → PNG 2160x3840 (cover), para o zoom lento sem perder nitidez."""
    from PIL import Image, ImageOps
    import pillow_heif
    pillow_heif.register_heif_opener()
    destino = TMP / (Path(src).stem + "_9x16.png")
    if src == "@chat":
        im = Image.open(OUT / "estaticos" / "E2-vou-pensar-story.png").convert("RGB")
        im = im.crop((0, 200, 1080, 1120))  # o bloco da conversa
        fundo = Image.new("RGB", (1080, 1920), (12, 11, 10))
        fundo.paste(im, (0, 420))
        fundo.resize((2160, 3840), Image.LANCZOS).save(destino)
        return destino
    im = ImageOps.exif_transpose(Image.open(BRUTOS / src)).convert("RGB")
    alvo = 2160 / 3840
    if im.width / im.height > alvo:
        nw = int(im.height * alvo)
        im = im.crop(((im.width - nw) // 2, 0, (im.width - nw) // 2 + nw, im.height))
    else:
        nh = int(im.width / alvo)
        im = im.crop((0, (im.height - nh) // 2, im.width, (im.height - nh) // 2 + nh))
    im.resize((2160, 3840), Image.LANCZOS).save(destino)
    return destino


def overlay_chain(base, textos, pngs, ci, n0):
    """Encadeia os PNGs de texto com enable por tempo e um fade curto de entrada."""
    entradas, filtros, atual = [], [], base
    for ti, (a, b, _pos, _c) in enumerate(textos):
        idx = n0 + ti
        entradas += ["-loop", "1", "-i", str(pngs[(ci, ti)])]
        # texto que entra em 0s aparece cheio no primeiro quadro (autoplay/miniatura); os outros entram com fade curto
        fade = f",fade=t=in:st={a}:d=0.18:alpha=1" if a > 0 else ""
        filtros.append(f"[{idx}:v]format=rgba{fade}[o{ti}]")
        filtros.append(f"[{atual}][o{ti}]overlay=0:0:enable='between(t,{a},{b})'[v{ti}]")
        atual = f"v{ti}"
    return entradas, filtros, atual


def renderizar_cena(nome, ci, cena, pngs):
    destino = TMP / f"{nome}-s{ci:02d}.mp4"
    d = cena["dur"]
    cmd = [FF, "-y", "-hide_banner", "-loglevel", "error"]
    filtros = []
    if cena["tipo"] == "clip":
        src = BRUTOS / cena["src"]
        cmd += ["-ss", f"{cena['ss']}", "-t", f"{d * cena['speed'] + 0.2:.3f}", "-i", str(src)]
        z, cx, cy = cena["z"], cena["cx"], cena["cy"]
        filtros.append(
            f"[0:v]setpts=PTS/{cena['speed']},"
            # reenquadra pra 9:16 (fonte vertical 2160x3840 ou horizontal 3840x2160)
            f"crop=w='min(iw,ih*9/16)/{z}':h='min(ih,iw*16/9)/{z}':"
            f"x='clip(iw*{cx}-ow/2,0,iw-ow)':y='clip(ih*{cy}-oh/2,0,ih-oh)',"
            f"scale={W}:{H}:flags=lanczos,fps={FPS},{GRADE},"
            # o bruto do iPhone traz a rotação como side data; sem apagar, o player gira a cena de novo
            "sidedata=mode=delete:type=DISPLAYMATRIX,format=yuv420p[b]")
        n0 = 1
    elif cena["tipo"] == "foto":
        img = preparar_foto(cena["src"])
        frames = int(d * FPS)
        z0, z1 = cena["z0"], cena["z1"]
        cmd += ["-loop", "1", "-t", f"{d}", "-i", str(img)]
        filtros.append(
            f"[0:v]zoompan=z='{z0}+({z1}-{z0})*on/{frames}':x='iw*{cena['cx']}-iw/zoom/2':y='ih*{cena['cy']}-ih/zoom/2':"
            f"d={frames}:s={W}x{H}:fps={FPS},{GRADE if cena['src'] != '@chat' else 'null'},format=yuv420p[b]")
        n0 = 1
    elif cena["tipo"] == "cor":
        cmd += ["-f", "lavfi", "-t", f"{d}", "-i", f"color=c=0x0c0b0a:s={W}x{H}:r={FPS}"]
        filtros.append("[0:v]format=yuv420p[b]")
        n0 = 1
    else:  # cartão: PNG opaco do HTML
        cmd += ["-loop", "1", "-t", f"{d}", "-i", str(pngs[(ci, None)])]
        filtros.append(f"[0:v]scale={W}:{H},fps={FPS},format=yuv420p[b]")
        n0 = 1
    entradas, ftxt, final = overlay_chain("b", cena["textos"], pngs, ci, n0)
    cmd += entradas
    filtros += ftxt
    # áudio: voz da Aline só quando pedido; senão silêncio (a trilha entra na mixagem final)
    if cena["tipo"] == "clip" and cena.get("voz"):
        filtros.append("[0:a]aresample=48000,aformat=channel_layouts=stereo,"
                       f"atrim=0:{d},asetpts=PTS-STARTPTS[a]")
    else:
        filtros.append(f"anullsrc=r=48000:cl=stereo,atrim=0:{d}[a]")
    cmd += ["-filter_complex", ";".join(filtros), "-map", f"[{final}]", "-map", "[a]",
            "-t", f"{d}", "-r", str(FPS), "-c:v", "libx264", "-preset", "medium", "-crf", "16",
            "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-ar", "48000", str(destino)]
    run(cmd)
    return destino


def montar(nome, roteiro):
    print(f"== {nome}")
    TMP.mkdir(parents=True, exist_ok=True)
    VIDS.mkdir(parents=True, exist_ok=True)
    pngs = renderizar_overlays(nome, roteiro)
    cenas = [renderizar_cena(nome, ci, c, pngs) for ci, c in enumerate(roteiro["cenas"])]
    lista = TMP / f"{nome}-lista.txt"
    lista.write_text("".join(f"file '{c.as_posix()}'\n" for c in cenas), encoding="utf-8")
    bruto = TMP / f"{nome}-concat.mp4"
    run([FF, "-y", "-hide_banner", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lista),
         "-c", "copy", str(bruto)])
    total = sum(c["dur"] for c in roteiro["cenas"])
    tem_voz = any(c.get("voz") for c in roteiro["cenas"])
    mixar(nome, bruto, total, roteiro["trilha"], roteiro["vol"], roteiro.get("trilha_ss", 0), tem_voz)


def mixar(nome, bruto, total, trilha, vol, ss=0, tem_voz=False):
    """Põe a trilha no vídeo montado (com ducking sob a voz), normaliza em -14 LUFS e gera 9:16 e 4:5."""
    musica = (f"[1:a]atrim={ss}:{ss + total},asetpts=PTS-STARTPTS,aresample=48000,volume={vol},"
              f"afade=t=out:st={total - 0.8:.2f}:d=0.8[m]")
    if tem_voz:
        # a trilha abaixa sozinha quando alguém fala (sidechain), e a voz fica na frente
        mix = (f"{musica};[0:a]asplit=2[voz][sc];[m][sc]sidechaincompress=threshold=0.02:ratio=8:attack=20:release=400[md];"
               f"[voz][md]amix=inputs=2:normalize=0,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]")
    else:
        mix = f"{musica};[m]loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]"
    vertical = VIDS / f"{nome}-9x16.mp4"
    run([FF, "-y", "-hide_banner", "-loglevel", "error", "-i", str(bruto), "-i", str(TRILHAS / trilha),
         "-filter_complex", mix, "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
         "-ar", "48000", "-movflags", "+faststart", str(vertical)])
    # 4:5 por crop central (os textos ficam entre y=330 e y=1420, dentro do recorte de 285 a 1635)
    run([FF, "-y", "-hide_banner", "-loglevel", "error", "-i", str(vertical), "-vf", f"crop={W}:1350:0:285",
         "-c:v", "libx264", "-preset", "medium", "-crf", "17", "-pix_fmt", "yuv420p", "-c:a", "copy",
         "-movflags", "+faststart", str(VIDS / f"{nome}-4x5.mp4")])
    print(f"   {vertical.relative_to(AQUI)} ({total:.1f}s)")

if __name__ == "__main__":
    if not CHROME:
        sys.exit("Chrome/Edge não encontrado")
    pedidos = sys.argv[1:]
    for nome, roteiro in ROTEIROS.items():
        if not pedidos or any(nome.startswith(p) for p in pedidos):
            montar(nome, roteiro)
