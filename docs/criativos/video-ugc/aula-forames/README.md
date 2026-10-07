# UGC · Corte da aula de forames → Filgueiras Academy

Anúncio de aquisição para a `/academy` (evergreen, R$1.797). A Camila (pessoa de IA, a mesma
de `../avatar/`) faz o gancho na frente da aula, a aula roda na vertical e a Camila volta
com o CTA. O corte é do curso de anatomia da plataforma, então ele funciona como amostra do
produto.

Decisões de 07/10:

| Tema | Decisão |
|---|---|
| Destino | `/academy` |
| Origem do corte | Curso de anatomia da Filgueiras Academy (a Camila pode dizer "essa aula tá na plataforma") |
| Formato do gancho | Green screen: Camila recortada sobre a aula escurecida, com a seta sendo desenhada atrás |
| Fim | A Camila volta com o CTA |
| Ganchos | 3 no mesmo corpo de vídeo: G1 (risco), A1 (agenda), A2 (confiança) |
| Avatar | A Camila como está (a equipe acha que ela já é diferente o bastante da Aline) |
| Fonte | Só a gravação de tela (`ScreenRecording_10-07-2026_08-44-23_1.mov`, 2098×1180) |

## 1. Estrutura (~37s)

| Tempo | Tela | Som |
|---|---|---|
| 0–3,8s | **Gancho.** Aula rodando muda, escurecida e desfocada (a seta subindo da boca pro olho). Camila na metade de baixo. Texto-filtro no topo, legenda da fala sobre o jaleco. No fim ela desliza pra baixo. | Voz da Camila |
| 3,8–33s | **Aula na vertical.** Ilustração em cima (1080×1170), Aline embaixo (1080×750). 7 cortes sem as pausas, com zoom por corte que acompanha o desenho (1,0× → 1,8× no forame → 1,2×). Legenda em caixa alta, 2 ou 3 palavras, com os termos-chave em amarelo. | Aula, com clique de "play" na virada |
| 33–37,4s | **CTA.** O quadro da elipse congelado e escuro. A Camila sobe de baixo. "FILGUEIRAS ACADEMY" + "a plataforma da Dra. Aline Filgueiras" no topo. | Voz da Camila |

O corpo usa só o trecho de 17,4s a 50,9s do original, porque os primeiros 17s começam no meio
de uma frase. A fala que fica:

> Da região dos nossos forames sai vascularização bem nobre, principalmente de pálpebra
> superior, aqui na área dos olhos. A gente tem o forame supratroclear, o forame supraorbital,
> e de dentro dele sai a artéria supratroclear e a artéria supraorbital. Então essa região aqui
> de fato é uma região de bastante atenção, de bastante cuidado. A gente deve evitar ao máximo
> os preenchimentos nessa região, por causa do risco de oclusão e o nível de proximidade com a
> região dos olhos.

Os cortes, zooms e palavras com tempo estão em `roteiro.json`.

## 2. Falas da Camila

Regras do kit (`../README.md`): no máximo 12 palavras, a primeira palavra já filtra quem aplica,
nada de depoimento ("eu fiz", "minha paciente") e nada de profissão ou nome.

| # | Ângulo | Fala | Texto na tela |
|---|---|---|---|
| G1 | Risco | "Aplica na glabela? Olha a artéria que sai de dentro da órbita." [polegar por cima do ombro no "Olha"] | APLICA NA GLABELA? |
| A1 | Agenda | "Aplica e quer a agenda cheia? Começa sabendo o que passa aqui." [aponta pra trás no "aqui"] | PRA QUEM APLICA E QUER AGENDA CHEIA |
| A2 | Confiança | "Aplica harmonização? A paciente percebe quando sua mão hesita." | APLICA HARMONIZAÇÃO? |
| CTA | Fechamento | "Essa aula tá na Filgueiras Academy, a plataforma dela. O link tá aqui embaixo." [aponta pra baixo] | FILGUEIRAS ACADEMY |

- **G1:** as artérias supratroclear e supraorbital são ramos da oftálmica e **saem** da órbita.
  "A artéria que vai pro olho" estaria errado. A Aline ou alguém da equipe valida a frase antes
  de subir.
- **A1:** liga o desejo da pesquisa (captação, 29%) à headline da `/academy` ("…e com a agenda
  parada"). É desejo, não promessa: nada de "vai encher sua agenda".
- **A2:** liga agenda e segurança sem prometer nada. É a tese da oferta (a paciente decide se
  confia em você na agulha).

## 3. Prompts do Google Flow (Veo)

Em todos:
- **Frames to Video**, com `../avatar/camila-fundo-verde.jpg` como quadro inicial.
- **Formato 9:16.** Se o Flow só entregar 16:9, avise, que o script precisa de outro recorte.
- Gere de 3 a 4 tomadas por fala e escolha a de sotaque mais natural e boca mais sincronizada.
- Na tomada escolhida, corte a respiração antes da primeira palavra e o que sobra depois da
  última (CapCut ou Flow). O script usa a duração do arquivo como duração do trecho.

**Base (cole antes de cada fala):**

> Vertical 9:16 handheld smartphone selfie video. The same woman from the reference frame, same
> face, hair, plain white lab coat and black top, in front of the same flat solid green
> background, which stays perfectly uniform and unchanged for the whole clip. Natural soft
> window light, subtle handheld sway, realistic skin texture, she looks straight into the lens.
> Audio: only her voice, close to the microphone, Brazilian Portuguese with a neutral accent.
> No music, no sound effects, no subtitles, no text on screen.

**G1:**
> For the first half second she glances back over her shoulder as if she had just watched
> something behind her, then turns to the lens with slightly raised eyebrows and says, fast and
> natural, like telling a colleague something serious: "Aplica na glabela? Olha a artéria que
> sai de dentro da órbita." On the word "Olha" she points back over her shoulder with her thumb.
> She ends with a falling, confident intonation and holds still.

**A1:**
> She looks into the lens with slightly raised eyebrows and says, fast and natural: "Aplica e
> quer a agenda cheia? Começa sabendo o que passa aqui." On the word "aqui" she points back over
> her shoulder with her thumb. Falling, confident intonation at the end.

**A2:**
> She looks into the lens, serious but warm, and says at a natural pace: "Aplica harmonização?
> A paciente percebe quando sua mão hesita." Small nod on "hesita", then she holds still.

**CTA:**
> She looks into the lens, calm and friendly, and says: "Essa aula tá na Filgueiras Academy, a
> plataforma dela. O link tá aqui embaixo." She says "Academy" the English way (a-CA-de-mi). On
> "aqui embaixo" she points down with her index finger.

Confira na tomada: "Filgueiras" e "Academy" pronunciados certo, nenhuma legenda inventada pelo
Veo, fundo verde sem sombra forte e as mãos sem dedos a mais.

## 4. Montagem

```
python3 docs/criativos/video-ugc/montar_aula.py \
  --roteiro docs/criativos/video-ugc/aula-forames/roteiro.json \
  --aula ScreenRecording_10-07-2026_08-44-23_1.mov \
  --gancho G1 --avatar-gancho camila-g1.mp4 --avatar-cta camila-cta.mp4 \
  --saida ugc-forames-g1.mp4
```

Sem `--avatar-*`, sai a prévia com a foto parada da Camila e sem voz nesses trechos. O script
lê a cor do fundo no canto do primeiro quadro, recorta o verde, encaixa os três trechos, põe o
clique de "play" nas viradas e normaliza o volume em -14 LUFS. Ele precisa de ffmpeg com libass
e de Pillow.

## 5. Texto do anúncio

**Texto principal (G1):**
> Do forame supratroclear e do supraorbital saem duas artérias que pedem atenção total de quem
> aplica perto dos olhos. Nessa aula do curso de anatomia, a Dra. Aline Filgueiras mostra onde
> fica cada uma.
>
> Na Filgueiras Academy você estuda a face por dentro em fresh frozen, treina a técnica em mais
> de 70 aulas e aprende o roteiro da Consulta que Vende. São 12 meses de acesso, com encontros
> ao vivo ao longo do ano e garantia de 7 dias.
>
> Ensino online para profissionais da estética e da saúde.

**Texto principal (A1 e A2):**
> Você estudou tanto e ainda sente a mão hesitar perto do olho? A paciente percebe. E é a
> segurança na agulha que faz ela voltar e indicar.
>
> Na Filgueiras Academy você estuda a face por dentro em fresh frozen, treina a técnica em mais
> de 70 aulas e aprende o roteiro da Consulta que Vende. São 12 meses de acesso, com encontros
> ao vivo ao longo do ano e garantia de 7 dias.
>
> Ensino online para profissionais da estética e da saúde.

**Título:** Filgueiras Academy · acesso imediato
**Descrição:** 12x de R$185,85 ou Pix
**Botão:** Saiba mais
**Nome do anúncio e `utm_content`:** `ugc-forames-g1`, `ugc-forames-a1`, `ugc-forames-a2`

## 6. Teste

- Os 3 anúncios no mesmo conjunto, com público frio e orçamento igual.
- O que olhar, nesta ordem:
  1. **Taxa de gancho** (visualizações de 3s ÷ impressões). Abaixo de 25%, o gancho não está
     parando o dedo.
  2. **Retenção entre 4s e 10s.** Mostra se quem parou pelo gancho ficou pra aula. É aqui que
     o A1 (agenda) pode ganhar no gancho e perder na retenção.
  3. **CTR no link** e **custo por venda**. É isso que decide.
- O gancho vencedor vira a base da rodada 2 (outro texto na tela, ou a mesma fala em outro
  corte da plataforma).
