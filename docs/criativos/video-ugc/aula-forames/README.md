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
| Ganchos | 3 no mesmo corpo de vídeo: G1 (risco), N1 (agenda + onde não aplicar) e C1 (frase da equipe, como controle). A1 e A2 saíram |
| CTA | Fecha a metade "agenda" do gancho com a Consulta que Vende e põe a garantia de 7 dias na tela |
| Avatar | A Camila como está (a equipe acha que ela já é diferente o bastante da Aline) |
| Fonte | Só a gravação de tela (`ScreenRecording_10-07-2026_08-44-23_1.mov`, 2098×1180) |

## 1. Estrutura (~37s a 38s)

| Tempo | Tela | Som |
|---|---|---|
| 0–3,8s | **Gancho.** Aula rodando muda, escurecida e desfocada (a seta subindo da boca pro olho). Camila na metade de baixo. Texto-filtro no topo, legenda da fala sobre o jaleco. No fim ela desliza pra baixo. | Voz da Camila |
| 3,8–33s | **Aula na vertical.** Ilustração em cima (1080×1170), Aline embaixo (1080×750). 7 cortes sem as pausas, com zoom por corte que acompanha o desenho (1,0× → 1,8× no forame → 1,2×). Legenda em caixa alta, 2 ou 3 palavras, com os termos-chave em amarelo. | Aula, com clique de "play" na virada |
| 33–38s | **CTA.** O quadro da elipse congelado e escuro. A Camila sobe de baixo. "FILGUEIRAS ACADEMY" + "7 dias de garantia · acesso imediato" no topo. | Voz da Camila |

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
| N1 | Agenda + onde não aplicar | "Aplica e quer a agenda cheia? Começa sabendo onde não aplicar." [aponta pra trás no "onde"] | PRA QUEM APLICA E QUER AGENDA CHEIA |
| C1 | Controle | "Quer encher sua agenda e aplicar com mais segurança?" | QUER ENCHER SUA AGENDA? |
| CTA | Fechamento | "Na plataforma dela tem isso e a consulta que fecha paciente. Toca em saiba mais." [aponta pra baixo no "saiba mais"] | FILGUEIRAS ACADEMY · 7 dias de garantia · acesso imediato |

- **G1:** as artérias supratroclear e supraorbital são ramos da oftálmica e **saem** da órbita.
  "A artéria que vai pro olho" estaria errado. A Aline ou alguém da equipe valida a frase antes
  de subir.
- **N1 (aposta):** o texto na tela leva o desejo (agenda), e a fala abre uma pergunta que só a
  aula responde. A resposta é a última frase da Aline ("a gente deve evitar ao máximo os
  preenchimentos nessa região"), aos ~30s, logo antes do CTA. Saber onde não aplicar é o que dá
  segurança na agulha e o que faz a paciente confiar. É desejo, não promessa: nada de "vai
  encher sua agenda".
- **C1:** a frase da equipe, sem mudar nada, pra os dados decidirem. Os riscos que a gente viu:
  a pergunta tem resposta óbvia ("sim") e não abre curiosidade; são dois desejos numa frase só;
  e o filtro ("aplicar") só chega no meio da frase.
- **CTA:** o gancho prometeu agenda e a aula só entrega segurança. Quem fecha a agenda é o CTA,
  com o que o produto tem de verdade (a Consulta que Vende, pra paciente não sair dizendo "vou
  pensar"). A garantia de 7 dias fica na tela pra caber nos 8s do Veo. O nome "Garantia Mão
  Segura" só entra depois que a Aline confirmar. "Toca em saiba mais" é o nome do botão do
  anúncio.

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

**N1:**
> She looks into the lens with slightly raised eyebrows and says, fast and natural: "Aplica e
> quer a agenda cheia? Começa sabendo onde não aplicar." After the question she makes a short
> pause, and on the word "onde" she points back over her shoulder with her thumb. Falling,
> confident intonation at the end.

**C1:**
> She looks into the lens, friendly and energetic, and says at a natural pace: "Quer encher sua
> agenda e aplicar com mais segurança?" She ends with a light questioning intonation and a
> small nod.

**CTA:**
> She looks into the lens, calm and confident, and says: "Na plataforma dela tem isso e a
> consulta que fecha paciente. Toca em saiba mais." On "saiba mais" she points down with her
> index finger.

Confira na tomada: nenhuma legenda inventada pelo
Veo, fundo verde sem sombra forte e as mãos sem dedos a mais.

## 4. Montagem

```
python3 docs/criativos/video-ugc/montar_aula.py \
  --roteiro docs/criativos/video-ugc/aula-forames/roteiro.json \
  --aula ScreenRecording_10-07-2026_08-44-23_1.mov \
  --gancho N1 --avatar-gancho camila-n1.mp4 --avatar-cta camila-cta.mp4 \
  --saida ugc-forames-n1.mp4
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

**Texto principal (N1 e C1):**
> Saber onde não aplicar é o que faz a paciente confiar em você. Nessa aula do curso de
> anatomia, a Dra. Aline Filgueiras mostra uma região perto dos olhos que pede cuidado máximo,
> e por quê.
>
> Na Filgueiras Academy você estuda a face por dentro em fresh frozen, treina a técnica em mais
> de 70 aulas e aprende a Consulta que Vende, pra paciente não sair dizendo "vou pensar". São 12
> meses de acesso, com encontros ao vivo ao longo do ano e garantia de 7 dias.
>
> Ensino online para profissionais da estética e da saúde.

**Título:** Filgueiras Academy · acesso imediato
**Descrição:** 12x de R$185,85 ou Pix
**Botão:** Saiba mais
**Nome do anúncio e `utm_content`:** `ugc-forames-g1`, `ugc-forames-n1`, `ugc-forames-controle`

## 6. Teste

- Os 3 anúncios no mesmo conjunto, com público frio e orçamento igual.
- O que olhar, nesta ordem:
  1. **Taxa de gancho** (visualizações de 3s ÷ impressões). Abaixo de 25%, o gancho não está
     parando o dedo.
  2. **Retenção entre 4s e 10s.** Mostra se quem parou pelo gancho ficou pra aula. É aqui que
     um gancho de agenda pode ganhar no gancho e perder na retenção.
  3. **CTR no link** e **custo por venda**. É isso que decide.
- O gancho vencedor vira a base da rodada 2 (outro texto na tela, ou a mesma fala em outro
  corte da plataforma).
