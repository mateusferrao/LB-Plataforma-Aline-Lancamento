"""Variantes com gancho UGC (Camila, IA) no formato do exemplo de 06/10: ela recortada no canto inferior
direito, sobre a cena rodando, com legenda palavra a palavra; depois o corpo do vídeo segue normal.

Uso: python docs/criativos/academy/ugc.py [V2 V4 ...]     (depois de rodar videos.py: usa as cenas de out/tmp)

Os vídeos da Camila vieram sem fundo verde (parede bege): o fundo sai por IA (rembg, u2net_human_seg),
quadro a quadro, com cache em privado/ugc/recorte-*. Os arquivos ficam em privado/ugc/ (fora do git),
copiados de Downloads/videos ugc como ugc1..ugc6.mp4. A trilha do corpo corre contínua desde o
gancho e abaixa sob as vozes (Camila e Aline). Saída: out/videos/<nome>-9x16.mp4 e -4x5.mp4.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import videos as v  # noqa: E402

UGC = v.AQUI / "privado" / "ugc"
ALTURA_CAMILA = 1000  # px na tela de 1920: do meio pra baixo, no canto direito


def P(a, b, texto):
    """Pedaço de legenda (2 a 4 palavras), com <b> na palavra destacada em amarelo."""
    return v.T(a, b, "pal", f'<span class="pal">{texto}</span>')


# nome, arquivo, início e fim no arquivo (cortes pelos tempos de palavra do faster-whisper large-v3),
# fonte horizontal?, legendas (tempo relativo ao corte), cena de fundo (sem texto), corpo, cenas do corpo a pular
VARIANTES = [
    dict(nome="V2-camila-B-embaixo-da-pele", arq="ugc5.mp4", ini=0.0, fim=3.30, horizontal=False,
         legendas=[P(0.0, 1.0, "Olha o que tem"), P(1.0, 1.96, "<b>embaixo</b> da pele"),
                   P(1.96, 3.30, "na <b>calha lacrimal</b>")],
         fundo=v.clip(v.WA, 17.0, 3.30, **v.WA_SEM_TEXTO), corpo="V1-aula-academy", pular=0),
    # só até "por dentro": o resto saiu alarmista e fora do roteiro
    dict(nome="V2-camila-C-abriu-a-calha", arq="ugc4.mp4", ini=0.0, fim=4.0, horizontal=True,
         legendas=[P(0.0, 0.76, "<b>Presta atenção</b>"), P(0.76, 1.48, "olhem só"),
                   P(1.48, 2.34, "essa professora"), P(2.34, 3.44, "abriu a <b>calha lacrimal</b>"),
                   P(3.44, 4.0, "<b>por dentro</b>")],
         fundo=v.clip(v.WA, 17.0, 4.0, **v.WA_SEM_TEXTO), corpo="V1-aula-academy", pular=0),
    # só até "dissecção": o resto saiu embolado. O corpo pula a 1ª cena (o mesmo gancho em texto).
    dict(nome="V3-ugc-ainda-estuda", arq="ugc2.mp4", ini=0.0, fim=5.32, horizontal=True,
         legendas=[P(0.0, 0.98, "Essa <b>professora</b>"), P(0.98, 2.16, "formou mais de <b>mil</b>"),
                   P(2.16, 3.18, "<b>alunas</b>"), P(3.18, 4.48, "e ainda <b>estuda</b>"),
                   P(4.48, 5.32, "<b>dissecção</b>")],
         fundo=v.clip(v.WA, 21.0, 5.32, **v.WA_SEM_TEXTO), corpo="V3-paramentacao", pular=1),
    dict(nome="V4-ugc-travou", arq="ugc1.mp4", ini=0.0, fim=3.85, horizontal=False,
         legendas=[P(0.0, 0.82, "Já <b>travou</b>"), P(0.82, 2.2, "com a <b>seringa</b> na mão?"),
                   P(2.2, 2.96, "olha o que <b>ninguém</b>"), P(2.96, 3.85, "te <b>mostrou</b>")],
         fundo=v.clip("IMG_2775.MOV", 12.0, 3.85, cx=0.5, cy=0.62, z=1.5), corpo="V4-seringa-na-mao", pular=0),
    dict(nome="V5-ugc-vou-pensar", arq="ugc3.mp4", ini=0.0, fim=3.76, horizontal=False,
         legendas=[P(0.0, 1.10, "Se a <b>paciente</b>"), P(1.10, 1.52, "te diz"),
                   P(1.52, 2.04, "“<b>vou pensar</b>”"), P(2.04, 3.0, "e <b>some</b>"), P(3.0, 3.76, "<b>olha</b> isso")],
         fundo=v.clip("IMG_2824.MOV", 15.0, 3.76, cx=0.55, cy=0.5, z=1.1), corpo="V5-tres-vezes", pular=0),
    # fala de agenda que veio além do roteiro (sem promessa); corta o silêncio do começo
    dict(nome="V5-ugc-agenda", arq="ugc6.mp4", ini=0.55, fim=5.70, horizontal=False,
         legendas=[P(0.0, 1.19, "Se tudo <b>continuar</b>"), P(1.19, 1.65, "como está"),
                   P(1.65, 3.23, "pelos próximos <b>seis meses</b>"), P(3.23, 3.79, "você vai estar"),
                   P(3.79, 4.47, "<b>satisfeita</b>"), P(4.47, 5.15, "com a sua <b>agenda?</b>")],
         fundo=v.clip("IMG_2824.MOV", 15.0, 5.15, cx=0.55, cy=0.5, z=1.1), corpo="V5-tres-vezes", pular=0),
]


def recortar(arq, ini, dur, horizontal):
    """Quadros da Camila em PNG com fundo transparente (30fps). Cache por arquivo e corte."""
    pasta = UGC / f"recorte-{Path(arq).stem}-{ini:.2f}-{dur:.2f}"
    pngs = sorted(pasta.glob("*.png"))
    if pngs:
        return pasta
    pasta.mkdir(parents=True, exist_ok=True)
    bruto = pasta / "bruto"
    bruto.mkdir(exist_ok=True)
    # fonte horizontal: a pessoa está numa faixa central nítida; recorta 9:16 dela
    vf = "fps=30" + (",crop=ih*9/16:ih:(iw-ih*9/16)/2:0" if horizontal else "")
    v.run([v.FF, "-y", "-hide_banner", "-loglevel", "error", "-ss", f"{ini}", "-t", f"{dur}", "-i", str(UGC / arq),
           "-vf", vf, str(bruto / "%04d.png")])
    from PIL import Image
    from rembg import new_session, remove
    sessao = new_session("u2net_human_seg")
    quadros = sorted(bruto.glob("*.png"))
    for i, q in enumerate(quadros, 1):
        remove(Image.open(q).convert("RGB"), session=sessao).save(pasta / q.name)
        print(f"\r   recorte {i}/{len(quadros)}", end="", flush=True)
    print()
    return pasta


def montar(nome, arq, ini, fim, horizontal, legendas, fundo, corpo, pular):
    print(f"== {nome}")
    dur = round(fim - ini, 2)
    recorte = recortar(arq, ini, dur, horizontal)

    # 1) fundo rodando (sem som) com a legenda palavra a palavra
    fundo = dict(fundo, dur=dur, textos=legendas, voz=False)
    pngs = v.renderizar_overlays(f"{nome}-gancho", dict(cenas=[fundo]))
    base = v.renderizar_cena(f"{nome}-gancho", 0, fundo, pngs)

    # 2) a Camila recortada no canto inferior direito + a voz dela
    gancho = v.TMP / f"{nome}-gancho.mp4"
    v.run([v.FF, "-y", "-hide_banner", "-loglevel", "error", "-i", str(base),
           "-framerate", str(v.FPS), "-i", str(recorte / "%04d.png"),
           "-ss", f"{ini}", "-t", f"{dur}", "-i", str(UGC / arq),
           "-filter_complex",
           f"[1:v]scale=-2:{ALTURA_CAMILA}:flags=lanczos,format=rgba[c];"
           f"[0:v][c]overlay=x=W-w+30:y=H-h:eof_action=pass,format=yuv420p[vv];"
           f"[2:a]aresample=48000,aformat=channel_layouts=stereo,apad,atrim=0:{dur},"
           f"loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[aa]",
           "-map", "[vv]", "-map", "[aa]", "-t", f"{dur}", "-r", str(v.FPS),
           "-c:v", "libx264", "-preset", "medium", "-crf", "16", "-pix_fmt", "yuv420p",
           "-c:a", "aac", "-b:a", "192k", "-ar", "48000", str(gancho)])

    # 3) gancho + cenas do corpo (já montadas por videos.py, sem trilha) e a trilha contínua por cima
    roteiro = v.ROTEIROS[corpo]
    cenas = [v.TMP / f"{corpo}-s{ci:02d}.mp4" for ci in range(pular, len(roteiro["cenas"]))]
    faltando = [c for c in cenas if not c.exists()]
    if faltando:
        sys.exit(f"Rode antes: python docs/criativos/academy/videos.py {corpo[:2]} (faltam {faltando[0].name})")
    lista = v.TMP / f"{nome}-lista.txt"
    lista.write_text("".join(f"file '{p.as_posix()}'\n" for p in [gancho, *cenas]), encoding="utf-8")
    bruto = v.TMP / f"{nome}-concat.mp4"
    v.run([v.FF, "-y", "-hide_banner", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lista),
           "-c", "copy", str(bruto)])
    total = dur + sum(c["dur"] for c in roteiro["cenas"][pular:])
    v.mixar(nome, bruto, total, roteiro["trilha"], roteiro["vol"], roteiro.get("trilha_ss", 0), tem_voz=True)


if __name__ == "__main__":
    pedidos = sys.argv[1:]
    for var in VARIANTES:
        if not pedidos or any(var["nome"].startswith(p) for p in pedidos):
            montar(**var)
