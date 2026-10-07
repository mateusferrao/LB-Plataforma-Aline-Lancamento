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

Os prompts seguem o formato que a equipe já usa no Flow, em português, com o tom de voz, o ritmo,
as pausas, as palavras com peso e o gesto descritos frase por frase.

Em todos:
- **Frames to Video**, com `../avatar/camila-fundo-verde.jpg` como quadro inicial.
- **Formato 9:16.** Se o Flow só entregar 16:9, avise, que o script precisa de outro recorte.
- Gere de 3 a 4 tomadas por fala e escolha a de sotaque mais natural e boca mais sincronizada.
- Na tomada escolhida, corte a respiração antes da primeira palavra e o que sobra depois da
  última (CapCut ou Flow). O script usa a duração do arquivo como duração do trecho.

**Base (cole no fim de cada prompt):**

> Use a imagem como primeiro quadro. Vídeo vertical 9:16, selfie de celular na mão. É a mesma
> mulher da imagem, com o mesmo rosto, cabelo, jaleco branco liso e blusa preta, na frente do
> mesmo fundo verde liso, que não muda em nenhum momento do vídeo. Luz natural de janela, leve
> balanço da mão e pele real. Ela olha direto pra lente. Português do Brasil, sotaque neutro
> (paulista leve), voz feminina de timbre médio, perto do microfone, sem eco. Sem música, sem
> efeito sonoro, sem legenda e sem nenhum texto na tela. Ela fala SOMENTE a frase indicada, sem
> "oi", sem "gente" e sem nenhuma palavra a mais, e começa a falar já no primeiro segundo.

**G1 · Risco (até 4s):**
> Quero criar uma cena da mulher falando de forma rápida e humana, como quem acabou de ver uma
> coisa séria e precisa avisar uma colega na hora. O vídeo é um criativo de UGC para tráfego
> pago. A mulher deve falar SOMENTE a frase "Aplica na glabela? Olha a artéria que sai de dentro
> da órbita."
>
> Tom e ritmo: no primeiro meio segundo ela olha rápido por cima do ombro, como se tivesse
> acabado de assistir a algo atrás dela, e volta pra câmera com a sobrancelha levantada.
> "Aplica na glabela?" sai rápido e BEM enérgico, com entonação de pergunta. Pausa curtíssima.
> "Olha a artéria que sai de dentro da órbita" vem mais firme e um pouco mais grave, com peso em
> "artéria" e "órbita" e a voz descendo no fim, em tom de alerta sério, sem pânico. No "Olha"
> ela aponta com o polegar por cima do ombro. Ritmo de cerca de 3 palavras por segundo. Energia
> alta, de colega da área, nunca de locutora nem de vendedora.

**N1 · Agenda + onde não aplicar (até 4s):**
> Quero criar uma cena da mulher falando de forma rápida e humana, como quem vai contar pra uma
> colega uma coisa que pouca gente sabe. O vídeo é um criativo de UGC para tráfego pago. A
> mulher deve falar SOMENTE a frase "Aplica e quer a agenda cheia? Começa sabendo onde não
> aplicar."
>
> Tom e ritmo: "Aplica e quer a agenda cheia?" sai BEM enérgico e rápido, com a sobrancelha
> levantada e um meio sorriso, como quem chama a atenção. Pausa curta, de meio segundo, e o rosto
> fica mais sério. "Começa sabendo onde não aplicar" vem um pouco mais devagar e mais firme, com
> peso em "onde não aplicar" e a voz descendo no fim, como um conselho de quem tem experiência.
> No "onde" ela aponta com o polegar por cima do ombro. A virada de energia (animada na
> pergunta, séria na resposta) é o que segura quem assiste.

**C1 · Controle (até 3,5s, no formato original da equipe):**
> Quero criar uma cena da mulher falando de forma rápida e humana, como se estivesse dando uma
> notícia urgente. O vídeo será para um criativo em vídeo de UGC para tráfego pago. A mulher
> deve falar SOMENTE a frase "Quer encher sua agenda e aplicar com mais segurança?", e de forma
> BEM enérgica. A voz e o tom devem ser rápidos, e a frase é no estilo de um hook forte. Peso em
> "agenda" e "segurança", entonação de pergunta no fim e um leve aceno de cabeça.

**CTA (até 6s):**
> Quero criar uma cena da mulher fechando um vídeo de UGC para tráfego pago, de forma humana e
> confiante, como uma colega que recomenda uma coisa que vale a pena. A mulher deve falar
> SOMENTE a frase "Na plataforma dela tem isso e a consulta que fecha paciente. Toca em saiba
> mais."
>
> Tom e ritmo: energia média-alta, sorriso leve, voz firme e clara, um pouco mais calma que o
> gancho (cerca de 2,8 palavras por segundo), pra cada palavra ser entendida. Peso em "consulta
> que fecha paciente". Pausa curta antes de "Toca em saiba mais", que sai direto e convidativo,
> com a voz descendo no fim. Em "saiba mais" ela aponta pra baixo com o indicador.

Se o Veo errar, ajuste assim:
- **Falou palavra a mais:** repita no prompt "SOMENTE essa frase, palavra por palavra".
- **Ficou rápido demais pra entender:** troque "BEM enérgica" por "enérgica, mas articulando
  cada palavra".
- **Ficou com cara de vendedora:** acrescente "sem sorriso de propaganda, como numa conversa de
  WhatsApp com uma colega".

Confira na tomada: nenhuma legenda inventada pelo Veo, fundo verde sem sombra forte e as mãos
sem dedos a mais.

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
