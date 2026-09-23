# Vídeo UGC com pessoa de IA · Por Dentro da Face

Formato: uma pessoa de IA na frente do criativo da Aline, que fica **pausado atrás**. Ela
solta um gancho de 3 a 5 segundos, sai da tela e o criativo roda. É o formato "green
screen" de creator reagindo a um vídeo.

Vídeos-base:

| # | Vídeo | Duração | Resumo |
|---|-------|---------|--------|
| V1 | `Criativo_Lab_Aline.mp4` | 24s | Aline no laboratório dos EUA: "essa insegurança é do conhecimento que você ainda não adquiriu" |
| V2 | `Aline - Vídeo Aula Ao Vivo.mov` | 1min41 | Aline no consultório: "toda vez que você preenche um rosto, existe uma artéria a milímetros da sua agulha" |
| V3 | Caixinha de perguntas (em gravação) | — | Aline responde "me sinto muito insegura nas aplicações, qual dica você me dá?" |

As transcrições de V1 e V2 estão no fim deste arquivo. Os fundos pausados prontos estão
em `fundos/`.

---

## 0. Antes de gravar: 4 cuidados

1. **Confirme a profissão da Aline antes de usar "biomédica" no gancho.** Nem o site nem
   o material do lançamento dizem a formação dela. Até confirmar, use "essa doutora" (o
   site já usa "Dra."), "essa professora de anatomia" ou "essa especialista em anatomia
   da face".
2. **Não use "liberar".** "Olha o que ela vai liberar" soa como conteúdo grátis, e a aula
   custa R$67. Quem clica esperando algo grátis se sente enganada na página de preço.
   Troque por "mostrar", "abrir" ou "ensinar ao vivo".
3. **A pessoa de IA apresenta, não dá depoimento.** Ela nunca diz "eu fiz a aula", "minha
   paciente", "sou biomédica" nem "mudou minha carreira". Um depoimento de gente que não
   existe é propaganda enganosa (CONAR) e risco de reprovação na Meta. O papel dela é o
   da amiga que manda um vídeo: "olha o que ela falou".
4. **Nada de jaleco, crachá ou título na pessoa de IA.** Isso sugere uma credencial que
   ela não tem. Roupa comum de creator.

A Meta pode colocar o selo "Informações de IA" no anúncio. Isso é normal e não derruba o
formato. Não tente esconder.

---

## 1. Estrutura do vídeo (segundo a segundo)

| Tempo | Tela | Som |
|-------|------|-----|
| 0,0–0,3s | Criativo **pausado**, escurecido e desfocado, com ícone ⏸. A pessoa já aparece falando, sem "oi". | Voz da pessoa |
| 0,3–3,5s | Pessoa em primeiro plano, da cintura ou do peito pra cima, na metade de baixo da tela. Legenda da fala dela. | Gancho |
| 3,5–4,0s | Ela aponta pra trás ("olha") e **sai de cena** (desliza pra baixo ou corte seco). | Clique de "play" |
| 4,0s → fim | O fundo perde o escurecimento e o ícone, e o criativo **roda** do começo, com as legendas originais. | Áudio da Aline |

Regras:
- O gancho tem **no máximo 12 palavras** e cabe em até 4 segundos.
- A primeira palavra já é conteúdo. Nada de "gente", "oi" ou "então".
- A última frase da pessoa **puxa a primeira frase da Aline**. Por exemplo, "escuta o que
  ela falou pra quem preenche rosto" e a Aline começa com "toda vez que você preenche um
  rosto…".
- Nos Stories, nada de texto nos 250px de cima e nos 330px de baixo, como nos estáticos.

---

## 2. Que tipo de pessoa de IA usar

Teste **duas personas**. Com o mesmo gancho, a persona costuma mudar mais o resultado do
que a própria copy.

**Persona A · "A colega" (principal)**
- Mulher de 27 a 34 anos, brasileira típica, maquiagem leve, cabelo natural.
- Blusa lisa ou camiseta básica. Sem jaleco.
- Fala rápida e informal, tom de fofoca útil ("gente, olha isso").
- Enquadramento de selfie, com leve movimento de mão.
- Por quê: o público é quase todo feminino e jovem na profissão. Ela se parece com quem
  está assistindo, e isso segura o dedo no feed.

**Persona B · "A curadora"**
- Mulher de 35 a 45 anos, blazer ou camisa, tom calmo e sério ("presta atenção nisso").
- Por quê: passa mais peso pra quem já aplica há anos e é mais cética.

**Evite:** homem (o público é feminino, só teste depois), avatar "perfeito demais" de
estúdio (entrega a IA), fundo próprio do avatar visível (quebra o efeito de "na frente do
vídeo") e sotaque de dublagem.

**Alternativa sem IA (vale um teste):** uma pessoa real, como uma aluna ou alguém da
equipe, gravando no celular com o efeito green screen do Instagram ou do CapCut. Costuma
converter igual ou melhor, e não tem nenhum risco de selo de IA nem de depoimento falso,
desde que ela também não finja ter feito a aula.

---

## 3. Ferramentas e passo a passo

### Gerar a pessoa falando
Use uma ferramenta de avatar que aceite **roteiro exato em português do Brasil**. Os
ganchos precisam sair palavra por palavra.
- **HeyGen:** avatares prontos ou criados a partir de uma foto, voz PT-BR e opção de fundo
  personalizado. Dá pra subir direto o `fundos/pausa-*-com-icone.jpg` como fundo, ou
  exportar com fundo verde ou transparente pra montar no editor.
- **Arcads** (ou o AI Creator do app Captions): avatares já no estilo UGC de selfie. Em
  geral o avatar vem com o fundo dele, então você recorta no editor.
- Os geradores de vídeo por texto (Veo, Sora) fazem cenas mais naturais, mas controlam
  pior o roteiro exato. Use só se o avatar ficar artificial.

Antes de assinar, confirme no plano: voz PT-BR, exportação 1080×1920 e exportação com
fundo verde ou transparente.

### Montar no CapCut (desktop)
1. Crie um projeto **9:16, 1080×1920, 30 fps**.
2. **Faixa principal:** `fundos/pausa-lab-com-icone.jpg` (ou `pausa-aula-…`) com a
   duração do gancho. Logo depois, o criativo inteiro.
   - Sem os JPGs: coloque o criativo, use **Congelar** no primeiro quadro, aplique
     desfoque leve e brilho −35%, e ponha um ícone ⏸ por cima.
3. **Faixa de cima:** o vídeo da pessoa de IA. Se ele não veio transparente, use
   **Remover fundo** (ou chroma key no verde). Posicione na metade de baixo, com a cabeça
   por volta de 45% da altura da tela, e aplique uma sombra leve.
4. **Legenda automática** (PT-BR) só na fala dela: branca, negrito, com contorno, acima
   da cabeça.
5. **Saída:** corte no fim da última palavra, com a animação "deslizar pra baixo" de 6 a
   8 quadros e um SFX de clique. Nesse mesmo quadro, o fundo pausado vira o criativo
   rodando.
6. Mantenha as legendas originais da Aline.
7. **Exporte em 1080×1920, 30 fps.** Pra feed, gere também uma versão 4:5 recortada, com
   a pessoa inteira dentro do quadro.
8. Nomeie o arquivo e o anúncio como `ugc-v1-gancho-a`, `ugc-v2-gancho-b` etc. Esse nome
   vira o `utm_content`.

**Qualidade:** o V1 veio em **576×1024**. Esticado pra 1080×1920, ele fica mole. Peça o
arquivo original em 1080p pra quem editou. O V2 já está em 1080×1920.

---

## 4. Roteiros (fala da pessoa de IA)

O gancho está entre aspas. [ação] é o gesto. → é a primeira fala do criativo, que entra
logo depois.

### V1 · Laboratório (fundo: `pausa-lab-com-icone.jpg`, Aline debruçada na mesa)
- **A (curiosidade + lugar):** "Olha onde essa doutora foi parar pra perder o medo de
  aplicar." [aponta pra trás] → "Você sabe que essa insegurança que cê tem…"
- **B (dor):** "Se você ainda trava na hora de aplicar, escuta ela." [aponta] → "Você sabe
  que essa insegurança…"
- **C (autoridade):** "Ela estudou a face por dentro, nos Estados Unidos. Olha o recado
  dela." [aponta]

### V2 · Consultório (fundo: `pausa-aula-com-icone.jpg`)
- **A (encaixe direto):** "Escuta o que ela falou pra quem preenche rosto." [aponta] →
  "Toda vez que você preenche um rosto, existe uma artéria ali a milímetros…"
- **B (polêmica):** "Ela falou uma verdade sobre boneco e atlas que ninguém fala." [aponta]
- **C (desejo):** "Se você quer aplicar sem aquele frio na barriga, assiste isso." [aponta]

**Cortes do V2** (1min41 é longo pra anúncio frio; ajuste ±0,3s pelo áudio):
- **Corte curto, cerca de 34s:** 0:00–0:17 ("…seu paciente ali no seu consultório não é
  nenhum desses") + 1:24,5–1:41 ("agora eu quero que você pense no sentimento da sua
  próxima harmonização… garante sua vaga").
- **Corte médio, cerca de 76s:** 0:00–0:50 (até "…pra quem é injetor: segurança") +
  1:05,5–1:15,3 ("…eu sou a Aline Filgueiras… minha carreira destravou completamente") +
  1:24,5–1:41.
- **Completo:** pra remarketing de quem já assistiu à VSL ou visitou a LP.

### V3 · Caixinha de perguntas (fundo: o quadro com a **pergunta da caixinha visível**)
Aqui a pausa tem que mostrar a caixinha, porque a pergunta é a dor com as palavras da
aluna.
- **A:** "Mandaram isso na caixinha dela." [lê] "'Me sinto muito insegura nas aplicações.'
  Olha o que ela respondeu." [aponta]
- **B:** "Perguntaram pra ela o que toda injetora pensa e ninguém fala." [aponta]

**Pra gravação da resposta da Aline** (se ainda der tempo de ajustar):
1. Já comece respondendo, sem "oi gente": "Essa insegurança não é falta de coragem, é
   falta de clareza…"
2. Dê **uma** dica prática de verdade em 15 a 20s. Por exemplo: antes de aplicar, saiba
   em que plano o produto vai ficar e o que passa perto dele.
3. Faça a ponte: "e é isso que eu vou te mostrar ao vivo, direto de uma mesa de
   dissecção, dia 6 às 20h."
4. CTA: "clica no link e garante sua vaga." Ideal: até 45s no total.

---

## 5. Texto do anúncio

**Texto principal (V1 e V3):**
> Se você sente insegurança na hora de aplicar, não é falta de coragem. É falta de ver o
> que tem embaixo da pele.
>
> Dia 6/10, às 20h, a Dra. Aline Filgueiras mostra ao vivo, direto de uma mesa de
> dissecção, o que muda a sua segurança na cadeira. R$67, sem gravação.

**Texto principal (V2):**
> Toda vez que você preenche um rosto, existe uma estrutura a milímetros da sua agulha.
> Você viu em atlas e boneco. Seu paciente não é nenhum dos dois.
>
> Aula ao vivo "Por Dentro da Face", 06/10 às 20h. Pra você aplicar sem aquele frio na
> barriga.

**Título:** Aplique com mais segurança · 06/10 às 20h

---

## 6. Como testar

- **Rodada 1:** V1-A, V1-B, V2-A, V2-B, V3-A com a persona A, no mesmo conjunto de
  público frio. Depois, os 2 melhores ganchos com a persona B.
- **O que olhar, nesta ordem:**
  1. **Taxa de gancho** (visualizações de 3s ÷ impressões). Como referência comum de
     mercado, abaixo de 25% o gancho não está parando o dedo.
  2. **Retenção até o criativo rodar:** se muita gente sai antes dos 4s, a pessoa de IA
     não convenceu.
  3. **CTR no link** e **custo por ingresso**. É isso que decide.
- Gancho vencedor com persona vencedora vira a base das próximas variações.

---

## Anexo · Transcrições

Reconstruídas a partir das legendas gravadas no vídeo. [?] marca trecho que a legenda
não deixou claro.

**V1 · Laboratório (24s)**
> Você sabe que essa insegurança que cê tem é do conhecimento que cê ainda não adquiriu pra
> se tornar esse profissional como você tanto sonha? Cê precisa aprender, estudar, adquirir
> mais conhecimento. Eu estou pronta pra te ajudar. Nessa [aula?] darei uma super aula
> sobre anatomia, intercorrência e procedimentos injetáveis, tudo junto, da melhor forma,
> aplicável na prática, pra você se tornar um profissional [?]. Clica aqui no link,
> estaremos juntos.

A partir de 0:12, aparece o título "Por dentro da face · Uma aula de anatomia em fresh
frozen cadaver · 06/10 às 20h".

**V2 · Consultório (1min41)**
> [0:00] Toda vez que você preenche um rosto, existe uma artéria ali a milímetros da sua
> cânula ou da sua agulha. E tudo que você já estudou, aprendeu em livros, atlas ou até
> bonecos, nunca mostrou isso com muita realidade. Cê aprendeu em curso, em slide, em
> boneco. Seu paciente ali no seu consultório não é nenhum desses.
> [0:17] E é por isso que ainda existe aquela insegurança lá no [fundo?], mesmo quando você
> faz tudo certo. O problema não é a técnica em [si?]… mas o mapa que você usa pra te
> direcionar. Cê sempre aprendeu anatomia em duas dimensões, mas a realidade a gente sabe
> que não é essa. Quando você vê a face por dentro, os planos, as camadas, os tecidos
> entrelaçados, sua visão muda completamente. Seu mapa deixa de ser um desenho e vira
> realidade. E aí sua mão para de hesitar.
> [0:41] Não é que era falta de coragem, era falta de clareza. E essa clareza traz um fruto
> muito precioso pra quem é injetor: segurança. O profissional inseguro é aquele que [se
> posiciona menos?]… aquele que se posiciona, aquele que vende mais, aquele que entrega
> mais resultado é o profissional que não tem [medo?]… Viver com medo de intercorrência,
> isso custa noites [de sono?], custa muitas vezes a reputação e custa, sim, muito
> dinheiro.
> [1:05] Eu sou a Aline Filgueiras, tenho mais de onze anos de experiência [?]… numa mesa
> de dissecação, vendo tudo por dentro, lá em [2018?], minha carreira destravou
> completamente. Hoje já são mais de 1000 alunas formadas nos cursos de anatomia, que eu
> também dou fora do país. E tudo isso só aconteceu, só se destravou depois que eu entendi
> anatomia.
> [1:24] Agora eu quero que você pense no sentimento da sua próxima harmonização sabendo
> tudo que tem por baixo daquela pele, sem aquele frio na barriga da insegurança. Sabe
> aquela firmeza de quem já [sabe?], de quem entende? É isso que eu quero te mostrar ao
> vivo, direto de uma mesa de dissecação. Clica aqui no link e garante sua vaga.
