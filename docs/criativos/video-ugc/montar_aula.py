"""Monta o UGC de corte de aula: gancho da Camila + aula na vertical + CTA da Camila.

Uso:
    python3 docs/criativos/video-ugc/montar_aula.py \
        --roteiro docs/criativos/video-ugc/aula-forames/roteiro.json \
        --aula ScreenRecording_10-07-2026_08-44-23_1.mov \
        --gancho G1 \
        --avatar-gancho camila-g1.mp4 --avatar-cta camila-cta.mp4 \
        --saida ugc-forames-g1.mp4

Os vídeos da Camila vêm do Google Flow com fundo verde (a cor é lida no canto do primeiro
quadro). Corte antes a respiração do começo e o que sobrar depois da última palavra: a
duração do arquivo vira a duração do gancho e do CTA. Sem --avatar-*, a prévia usa a foto
parada da Camila e fica muda nesses trechos.

A aula (gravação de tela 16:9, tela dividida) vira 9:16 empilhada: a ilustração em cima,
com zoom por corte, e a Aline embaixo. As legendas são queimadas a partir das palavras do
roteiro.json. Precisa de ffmpeg com libass.
"""

import argparse
import json
import subprocess
import sys
import tempfile
from pathlib import Path

W, H, FPS = 1080, 1920, 30
TOPO_H = 1170  # ilustração (1088x1180 na origem) em 1080 de largura; altura par pro yuv420p
BASE_H = H - TOPO_H
AQUI = Path(__file__).resolve().parent
FOTO_CAMILA = AQUI / "avatar" / "camila-transparente.png"
AV_LARG, AV_X, AV_Y_EXTRA = 900, (W - 900) // 2 + 40, 80
SAIDA_ANIM = 0.25  # segundos da Camila deslizando pra fora / pra dentro

X264 = ["-c:v", "libx264", "-preset", "medium", "-crf", "19", "-pix_fmt", "yuv420p", "-r", str(FPS)]
AAC = ["-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-ac", "2"]


def rodar(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit(f"ffmpeg falhou:\n{' '.join(map(str, cmd))}\n{r.stderr[-3000:]}")


def duracao(arquivo):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(arquivo)],
                       capture_output=True, text=True)
    return float(r.stdout.strip())


def cor_do_fundo(video, pasta):
    """Média de um quadrado de 24px no canto de cima à esquerda do primeiro quadro."""
    png = pasta / "canto.png"
    rodar(["ffmpeg", "-v", "error", "-y", "-i", str(video), "-frames:v", "1", "-vf", "crop=24:24:8:8,scale=1:1", str(png)])
    from PIL import Image
    r, g, b = Image.open(png).convert("RGB").getpixel((0, 0))
    return f"0x{r:02X}{g:02X}{b:02X}"


# ---------------------------------------------------------------- legendas (ASS)

def ass_tempo(t):
    t = max(t, 0)
    return f"{int(t // 3600)}:{int(t % 3600 // 60):02d}:{t % 60:05.2f}"


ASS_TOPO = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {W}
PlayResY: {H}
WrapStyle: 0
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Aula,Inter,70,&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,6,0,2,90,90,{H - 1150},1
Style: Topo,Inter,74,&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,7,0,8,90,90,290,1
Style: Sub,Inter,56,&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,5,0,8,90,90,395,1
Style: Fala,Inter,58,&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,6,0,2,90,90,430,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
COR_DESTAQUE = r"{\c&H5CD1FF&}"  # #FFD15C
COR_NORMAL = r"{\c&HFFFFFF&}"


LIGACAO = {"a", "o", "e", "de", "da", "do", "dos", "das", "na", "no", "em", "bem", "com", "por", "que", "nessa", "essa", "sua"}


def blocos(palavras, max_pal=3, max_car=20, pausa=0.3):
    """Agrupa [ini, fim, palavra] em blocos curtos de legenda.

    Um bloco nunca termina em palavra de ligação ("de", "a", "nessa"…): ela passa pro bloco seguinte."""
    grupos, atual = [], []
    for i, p in enumerate(palavras):
        atual.append(p)
        prox = palavras[i + 1] if i + 1 < len(palavras) else None
        if prox is None or p[2][-1] in ",.?!" or prox[0] - p[1] > pausa:
            grupos.append(atual)
            atual = []
            continue
        texto = " ".join(x[2] for x in atual)
        if len(atual) >= max_pal or len(texto) + 1 + len(prox[2]) > max_car:
            sobra = []
            while len(atual) > 1 and atual[-1][2].lower() in LIGACAO:
                sobra.insert(0, atual.pop())
            grupos.append(atual)
            atual = sobra
    return grupos


def linha_legenda(grupo, destaques):
    partes = []
    for _, _, pal in grupo:
        limpa = pal.strip(",.?!").lower()
        txt = pal.strip(",").upper() if not pal.endswith("?") else pal.upper()
        txt = txt.rstrip(".")
        partes.append(f"{COR_DESTAQUE}{txt}{COR_NORMAL}" if limpa in destaques else txt)
    return " ".join(partes)


def eventos_de_palavras(palavras, estilo, destaques, fim_total):
    ev = []
    grupos = blocos(palavras)
    for i, g in enumerate(grupos):
        ini = g[0][0]
        fim = grupos[i + 1][0][0] if i + 1 < len(grupos) else min(g[-1][1] + 0.3, fim_total)
        fim = min(fim, g[-1][1] + 0.6)
        ev.append(f"Dialogue: 0,{ass_tempo(ini)},{ass_tempo(fim)},{estilo},,0,0,0,,{linha_legenda(g, destaques)}")
    return ev


def palavras_espalhadas(fala, dur, ini=0.15, fim_folga=0.2, pular=""):
    """Sem as marcas de tempo da fala da Camila, distribui as palavras pelo trecho.

    As primeiras palavras que repetem o texto fixo da tela (`pular`) não viram legenda."""
    pals = fala.split()
    passo = (dur - ini - fim_folga) / len(pals)
    todas = [[ini + i * passo, ini + (i + 1) * passo, p] for i, p in enumerate(pals)]
    norm = lambda t: t.strip(",.?!").lower()
    fixo = [norm(x) for x in pular.split()]
    n = len(fixo) if [norm(p) for p in pals[:len(fixo)]] == fixo else 0
    return todas[n:]


# ---------------------------------------------------------------- trechos

def crop_topo(c):
    z = c["zoom"]
    cw, ch = 1088 / z, 1180 / z
    x = min(max(c["cx"] - cw / 2, 0), 1088 - cw) + 1010
    y = min(max(c["cy"] - ch / 2, 0), 1180 - ch)
    return f"crop={cw:.0f}:{ch:.0f}:{x:.0f}:{y:.0f}"


def crop_aline(z):
    cw, ch = 1010 / z, 700 / z
    x = min(max(540 - cw / 2, 0), 1010 - cw)
    y = min(max(470 - ch / 2, 0), 1180 - ch)
    return f"crop={cw:.0f}:{ch:.0f}:{x:.0f}:{y:.0f}"


def montar_corpo(aula, cortes, pasta):
    lista = pasta / "corpo.txt"
    nomes = []
    for i, c in enumerate(cortes):
        d = c["fim"] - c["ini"]
        seg = pasta / f"seg{i:02d}.mp4"
        filtro = (f"[0:v]fps={FPS},split[a][b];"
                  f"[a]{crop_topo(c)},scale={W}:{TOPO_H},setsar=1[t];"
                  f"[b]{crop_aline(c['zoom_aline'])},scale={W}:{BASE_H},setsar=1[bx];"
                  f"[t][bx]vstack[v];"
                  f"[0:a]afade=t=in:d=0.02,afade=t=out:st={d - 0.03:.3f}:d=0.03[au]")
        rodar(["ffmpeg", "-v", "error", "-y", "-ss", f"{c['ini']}", "-t", f"{d:.3f}", "-i", str(aula),
               "-filter_complex", filtro, "-map", "[v]", "-map", "[au]", *X264, *AAC, str(seg)])
        nomes.append(seg)
    lista.write_text("".join(f"file '{n}'\n" for n in nomes))
    corpo = pasta / "corpo.mp4"
    rodar(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", str(lista), "-c", "copy", str(corpo)])
    # Palavras no tempo do corpo já cortado.
    pals, t0 = [], 0.0
    for c in cortes:
        for a, b, p in c["palavras"]:
            pals.append([t0 + max(a - c["ini"], 0), t0 + min(b, c["fim"]) - c["ini"], p])
        t0 += c["fim"] - c["ini"]
    return corpo, pals, t0


def montar_camila(aula, fundo_filtro, fundo_ss, avatar, dur_previa, entrada, ass, pasta, nome):
    """Fundo da aula (em movimento ou congelado) + Camila por cima + textos."""
    saida = pasta / f"{nome}.mp4"
    if avatar:
        dur = duracao(avatar)
        cor = cor_do_fundo(avatar, pasta)
        ent_av = ["-i", str(avatar)]
        chave = (f"[1:v]fps={FPS},chromakey=color={cor}:similarity=0.13:blend=0.06,despill=type=green,"
                 f"scale={AV_LARG}:-1,format=yuva420p[p]")
        audio = ["-map", "1:a"]
    else:
        dur = dur_previa
        ent_av = ["-loop", "1", "-t", f"{dur}", "-i", str(FOTO_CAMILA)]
        chave = f"[1:v]fps={FPS},scale={AV_LARG}:-1,format=yuva420p[p]"
        audio = ["-map", "2:a"]
    if entrada:  # CTA: sobe de baixo
        y = f"H-h+{AV_Y_EXTRA}+max(0\\,{SAIDA_ANIM}-t)*{H}*3"
    else:  # gancho: desce e sai no fim
        y = f"H-h+{AV_Y_EXTRA}+max(0\\,t-{dur - SAIDA_ANIM:.3f})*{H}*3"
    filtro = (f"[0:v]fps={FPS},{fundo_filtro},scale={W}:{H},setsar=1,trim=duration={dur:.3f}[bg];{chave};"
              f"[bg][p]overlay=x={AV_X}:y='{y}':eval=frame:shortest=1,"
              f"subtitles='{ass}':fontsdir='{AQUI}',format=yuv420p[v]")
    rodar(["ffmpeg", "-v", "error", "-y", *fundo_ss, "-i", str(aula), *ent_av,
           "-f", "lavfi", "-t", f"{dur}", "-i", "anullsrc=r=48000:cl=stereo",
           "-filter_complex", filtro, "-map", "[v]", *audio, "-t", f"{dur:.3f}", *X264, *AAC, str(saida)])
    return saida, dur


def escrever_ass(caminho, eventos):
    caminho.write_text(ASS_TOPO + "\n".join(eventos) + "\n", encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--roteiro", required=True)
    ap.add_argument("--aula", required=True)
    ap.add_argument("--gancho", required=True, help="id do gancho no roteiro (G1, A1, A2…)")
    ap.add_argument("--avatar-gancho")
    ap.add_argument("--avatar-cta")
    ap.add_argument("--saida", required=True)
    a = ap.parse_args()

    r = json.loads(Path(a.roteiro).read_text(encoding="utf-8"))
    g, cta = r["ganchos"][a.gancho], r["cta"]
    destaques = set(r["destaques"])

    with tempfile.TemporaryDirectory() as tmp:
        pasta = Path(tmp)

        # Gancho: a aula rodando muda atrás (a seta sendo desenhada), escurecida.
        dur_g = duracao(a.avatar_gancho) if a.avatar_gancho else g["dur_previa"]
        ass_g = pasta / "gancho.ass"
        escrever_ass(ass_g, [f"Dialogue: 0,0:00:00.00,{ass_tempo(dur_g)},Topo,,0,0,0,,{g['texto']}"]
                     + eventos_de_palavras(palavras_espalhadas(g["fala"], dur_g, pular=g["texto"]), "Fala", set(), dur_g))
        fundo_g = "crop=664:1180:1222:0,boxblur=3,eq=brightness=-0.16:saturation=0.9"
        gancho, _ = montar_camila(a.aula, fundo_g, ["-ss", f"{r['fundo_gancho']['ini']}"], a.avatar_gancho,
                                  g["dur_previa"], False, ass_g, pasta, "gancho")

        corpo_bruto, pals, dur_c = montar_corpo(a.aula, r["cortes"], pasta)
        ass_c = pasta / "corpo.ass"
        escrever_ass(ass_c, eventos_de_palavras(pals, "Aula", destaques, dur_c))
        corpo = pasta / "corpo-leg.mp4"
        rodar(["ffmpeg", "-v", "error", "-y", "-i", str(corpo_bruto), "-vf",
               f"subtitles='{ass_c}':fontsdir='{AQUI}'", *X264, "-c:a", "copy", str(corpo)])

        # CTA: o quadro da elipse congelado, mais escuro, com a Camila subindo.
        dur_cta = duracao(a.avatar_cta) if a.avatar_cta else cta["dur_previa"]
        ass_k = pasta / "cta.ass"
        escrever_ass(ass_k, [f"Dialogue: 0,0:00:00.00,{ass_tempo(dur_cta)},Topo,,0,0,0,,{cta['texto']}",
                             f"Dialogue: 0,0:00:00.00,{ass_tempo(dur_cta)},Sub,,0,0,0,,{cta['sub']}"]
                     + eventos_de_palavras(palavras_espalhadas(cta["fala"], dur_cta), "Fala", set(), dur_cta))
        fundo_k = "crop=664:1180:1222:0,tpad=stop_mode=clone:stop_duration=30,boxblur=4,eq=brightness=-0.3:saturation=0.8"
        fim_k, _ = montar_camila(a.aula, fundo_k, ["-ss", f"{r['fundo_cta']['t']}", "-t", "0.1"], a.avatar_cta,
                                 cta["dur_previa"], True, ass_k, pasta, "cta")

        # Emenda, clique de "play" nas duas viradas e volume no padrão das redes (-14 LUFS).
        t1, t2 = dur_g, dur_g + duracao(corpo)
        clique = "aevalsrc='0.5*sin(2*PI*1800*t)*exp(-70*t)':d=0.09:s=48000,aformat=channel_layouts=stereo"
        filtro = (f"[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[v][au];"
                  f"{clique},asplit[c1][c2];[c1]adelay={int(t1 * 1000)}:all=1[k1];[c2]adelay={int(t2 * 1000)}:all=1[k2];"
                  f"[au][k1][k2]amix=inputs=3:duration=first:normalize=0,loudnorm=I=-14:TP=-1.5:LRA=11[a]")
        rodar(["ffmpeg", "-v", "error", "-y", "-i", str(gancho), "-i", str(corpo), "-i", str(fim_k),
               "-filter_complex", filtro, "-map", "[v]", "-map", "[a]", *X264, *AAC,
               "-movflags", "+faststart", a.saida])
    print(f"{a.saida}: gancho {dur_g:.1f}s + aula {t2 - t1:.1f}s + CTA {dur_cta:.1f}s = {t2 + dur_cta:.1f}s")


if __name__ == "__main__":
    main()
