# Criativos · Filgueiras Academy (out/2026)

10 criativos de tráfego para a **`/academy`** (evergreen): 6 vídeos e 4 estáticos, feitos só com o
material real do laboratório de dissecção nos EUA (gravado em 19/08/2026) e com o clipe da aula de
calha lacrimal (02/10).

## Decisões (06/10)
- **Destino:** só `/academy`. **Nenhum preço em nenhum criativo.** O CTA é sempre "Quero entrar na
  Academy", o mesmo texto do botão da LP.
- **Dor específica no primeiro segundo.** Pelo menos 2 estáticos batem em venda e agenda (E2 e E4). A
  dor aparece com as palavras da LP ("agenda parada", "vou pensar", "Tem vaso nesse ponto?"). **Não
  existe promessa de agenda cheia, faturamento ou resultado clínico** (regra de `lib/ofertaAcademy.ts`,
  além da política da Meta para cursos).
- **A peça anatômica pixelada está liberada.** O clipe da aula já rodou sem reprovação e converteu. Isso
  é uma exceção à regra antiga de "nenhuma foto de cadáver" (`docs/fresh/README.md`). Peça sem
  pixelização continua proibida, e por isso o `IMG_2821` (cabeça descoberta de 0 a 18s) não é usado.
- **O clipe da aula é da Academy** (módulo de anatomia), então o anúncio pode dizer isso.
- **Credenciais que podem ser usadas:**
  - 1.000+ alunas formadas;
  - 11+ anos de clínica;
  - professora internacional de anatomia em fresh frozen, com cursos nos EUA e na Europa.
- **O que não pode ser afirmado:**
  - A formação dela não está confirmada: use só "Dra. Aline Filgueiras".
  - Nas gravações de 19/08 ela era **aluna**. Nada diz que ali ela está ensinando.
- **Fotos da Aline:** só em contexto. Nada de boca aberta nem de arrumando o cabelo como foto de
  capa. Nos estáticos de venda ela aparece como avatar (`fotos/avatar-aline.jpg`, recortada do
  IMG_2769).
- **Trilhas:** Pixabay Music, com a Pixabay Content License (uso comercial em anúncio, sem
  atribuição). Ficam em `privado/trilhas/`, fora do git:
  - "Emotional Piano Cinematic Cue" (Farran_Ez)
  - "Documentary Suspense" (leberch)
  - "Documentary Cinematic" (leberch)

## Os 10 criativos

| # | Público | Pilar | Formato | Gancho |
|---|---|---|---|---|
| **V1** · Aula da Academy | Frio | Anatomia | Remix do vencedor (controle) | "A equipe pediu pra eu não liberar esse vídeo…" + aula real com legenda |
| **V2** · Camila + aula | Frio | Anatomia | Gancho UGC (IA) sobre o V1 | Ganchos UGC 1a/1b/1c (abaixo). *Aguardando os vídeos da Camila* |
| **V3** · Paramentação | Frio | Anatomia, fundadora | Abre na aula pixelada + paramentação acelerada | "1.000 alunas formadas. E ela ainda estuda dissecção." |
| **V4** · A seringa na sua mão | Frio | Dor e medo | Abre na cânula sobre a peça pixelada + perguntas da Cena da LP | "“Tem vaso nesse ponto?”" |
| **V5** · Três vezes | Remarketing | Venda e consulta | Conversa animada (mensagens entram uma a uma) + Virada da LP | "Vou pensar." → "Quantas vezes você ouviu isso este mês?" |
| **V6** · O que tem dentro | Remarketing | Academy completa | 4 cortes rápidos sob o gancho + explicador sem preço | "Fez curso e continua travada na agulha e na consulta?" |
| **E1** · Embaixo da agulha | Frio | Anatomia | Headline + autoridade | "“Tem vaso nesse ponto?” Se você pensa isso com a seringa na mão, a paciente percebe." |
| **E2** · Vou pensar | Frio | **Venda** | Conversa de WhatsApp (ilustrativa) | A paciente pede o valor, responde "Vou pensar." e some há 9 dias |
| **E3** · Tudo num lugar só | Remarketing | Academy completa | Grade 2×2 | "Fez curso e continua travada na agulha e na consulta?" |
| **E4** · Agenda parada | Remarketing | **Agenda** | A semana vazia (2 de 30 horários) | "Você postou, fez promoção, baixou o preço. E a agenda continua parada." |

A conversa do E2 e a agenda do E4 são **ilustrativas**: mostram a situação de quem lê. Não são print
de cliente nem depoimento.

## Arquivos
- `estaticos.html` + `render.mjs` → `out/estaticos/*-feed.png` (1080×1350) e `*-story.png` (1080×1920).
  Usa o Chrome do sistema. O E3 lê `privado/aula-pixelada.jpg`, que fica fora do git.
- `videos.py` → `out/videos/*-9x16.mp4` e `*-4x5.mp4`. Os roteiros (cenas, timecodes dos brutos e
  textos) estão no próprio arquivo. Os textos são renderizados em HTML pelo Chrome, com fundo
  transparente, e o ffmpeg monta, mixa a trilha (com ducking sob a voz) e normaliza em -14 LUFS.
  Os brutos são lidos de `BRUTOS` (padrão: `Downloads/Criativos Filgueiras Academy`).
- `verificar.py` → specs de cada MP4 e uma contact sheet com a safe zone em `out/verificacao/`.
- `fotos/` → frames e fotos otimizados **sem** peça anatômica, que podem ir para o git.
- `out/` e `privado/` → **fora do git** (repositório público): renders, frames em 4K, trilhas e tudo
  que mostra a peça pixelada.

## Origem das cenas (brutos)

| Bruto | O que é | Onde entra | Cuidados |
|---|---|---|---|
| WhatsApp 02/10 (0:35) | Aula da calha lacrimal, peça pixelada, texto de gancho queimado no topo | V1 inteiro; V3 e V6 recortados embaixo (sem o texto) | Conferir a pixelização quadro a quadro |
| IMG_2749 (2:13) | Paramentação completa, de camisa branca até as luvas | **Não usar** | Ela rindo, falando e prendendo o cabelo, que não faz sentido no anúncio (06/10) |
| IMG_2837 (0:41) | Paramentação já de touca; termina num close de máscara olhando para a câmera | V3 (gancho no close + paramentação a 6,4×) e V5 (38-41s) | Começar depois de 4s (antes ela está falando) |
| IMG_2775 (0:47) | Montagem da bandeja de cânulas e seringas | V4, V5 e V6 | |
| IMG_2824 / IMG_2826 | Mesa com a luz cirúrgica desfocada em primeiro plano; ela entra, trabalha e vem para a câmera | V4, V5, V6; E1 | Cena encenada "pro marketing" |
| IMG_2777 (3:16) | Plano aberto e fixo do laboratório | V6 | |
| IMG_2778, IMG_2769 | Seringas e cânulas (detalhe); Aline de braço erguido, sorrindo | V4, V6; E3; avatar | IMG_2757, IMG_2795 e IMG_2871 já rodaram nos criativos da aula |
| IMG_2821 | Mesa de lado | **Não usar** | Cabeça descoberta de 0 a 18s |
| IMG_2823 | Terceiro de preto no celular + música com copyright | **Não usar** | |

## Copy para a Meta

O texto principal vai no campo "Texto principal". As primeiras ~125 letras aparecem antes do "ver
mais", então o gancho vem primeiro. Os números entre parênteses são os caracteres (limites: título ≤40,
descrição ≤30). Botão: **Saiba mais** no frio e **Comprar agora** no remarketing. Link:
`https://live.alinefilgueiras.com.br/academy` com as UTMs de `docs/rastreamento-utm.md`
(`utm_content={{ad.name}}`). Nomeie o anúncio com o código (V1, E4…).

### V1 · Aula da Academy (frio)
> A equipe pediu pra eu não liberar esse vídeo. É um trecho da aula de calha lacrimal do novo curso de anatomia em fresh frozen da Filgueiras Academy.
>
> Na peça, a região infraorbital por dentro: onde fica a calha, por que a espessura dérmica pede cuidado e onde a cânula assenta.
>
> Na Academy você ainda leva mais de 70 aulas de técnica, a Consulta que Vende e 6 encontros ao vivo no ano.

- Título: **A face por dentro, camada por camada** · alt: "Uma aula de dentro da Academy" · alt: "Anatomia em fresh frozen, online"
- Descrição: **Filgueiras Academy**

### V2 · Camila + aula (frio)
> Essa aula de calha lacrimal é de dentro do curso de anatomia em fresh frozen da Filgueiras Academy.
>
> (resto igual ao V1)

- Título: **A face por dentro, camada por camada** · Descrição: **Filgueiras Academy**

### V3 · Paramentação (frio)
> 1.000 alunas formadas. E ela ainda estuda dissecção.
>
> A culpa nunca foi sua. Faltava ver a face por dentro. A Dra. Aline Filgueiras tem 11 anos de clínica e continua estudando dissecção fora do país. Agora ela mostra a face por dentro, camada por camada, num curso online. Sem visto e sem passagem.
>
> Ele está dentro da Filgueiras Academy, junto com mais de 70 aulas de técnica e a Consulta que Vende.

- Título: **Anatomia em fresh frozen, online** · alt: "A face por dentro, sem passagem"
- Descrição: **Sem visto e sem passagem**

### V4 · A seringa na sua mão (frio)
> A paciente está na maca. A seringa, na sua mão. Qual é a profundidade aqui? Tem vaso nesse ponto?
>
> Se a mão hesita, a paciente percebe. O curso ensinou o passo a passo, mas ninguém te mostrou a face por dentro.
>
> No curso online de dissecção da Filgueiras Academy, a Dra. Aline Filgueiras mostra a face camada por camada, em peças fresh frozen.

- Título: **Saiba o que tem embaixo da agulha** · alt: "Tem vaso nesse ponto?"
- Descrição: **Curso online de dissecção**

### V5 · Três vezes (remarketing)
> “Vou pensar.” Quantas vezes você ouviu isso este mês?
>
> A paciente decide se confia em você três vezes: na consulta, na agulha e no espelho. Ela não vê o seu certificado. Ela sente se você sabe o que está fazendo.
>
> A Filgueiras Academy junta anatomia em fresh frozen, mais de 70 aulas de técnica e a Consulta que Vende, com anamnese, termos e precificação prontos.

- Título: **Consulta, agulha e espelho** · alt: "A Consulta que Vende"
- Descrição: **12 meses de acesso**

### V6 · O que tem dentro (remarketing)
> Fez curso e continua travada na agulha e na consulta?
>
> A Filgueiras Academy junta tudo num lugar só: o novo curso de anatomia em fresh frozen, mais de 70 aulas de toxina, preenchimento e bioestimuladores, a Consulta que Vende e 6 encontros ao vivo no ano, com uma aula da Aline pra discussão de casos.
>
> São 12 meses de acesso, no celular ou no computador, e 7 dias de garantia.

- Título: **Técnica, anatomia e consulta** · alt: "Tudo num lugar só"
- Descrição: **7 dias de garantia**

### E1 · Embaixo da agulha (frio)
> “Tem vaso nesse ponto?” Se você pensa isso com a seringa na mão, a paciente percebe.
>
> O novo curso online de dissecção da Dra. Aline Filgueiras mostra a face por dentro, camada por camada, em peças fresh frozen. Sem visto e sem passagem.
>
> Ele está dentro da Filgueiras Academy, junto com mais de 70 aulas de técnica e a Consulta que Vende.

- Título: **Saiba o que tem embaixo da agulha** · Descrição: **Anatomia em fresh frozen**

### E2 · Vou pensar (frio)
> Você explicou tudo, mandou o valor e ela respondeu “vou pensar”. Nunca mais voltou.
>
> A paciente decide se confia em você antes da agulha. Na Filgueiras Academy você aprende a Consulta que Vende e leva as ferramentas prontas: anamnese, termos e precificação.
>
> E ainda tem a anatomia em fresh frozen e mais de 70 aulas de técnica no mesmo lugar.

- Título: **A Consulta que Vende** · alt: "Ela disse “vou pensar”"
- Descrição: **Filgueiras Academy**

### E3 · Tudo num lugar só (remarketing)
> Fez curso e continua travada na agulha e na consulta?
>
> Na Filgueiras Academy: anatomia em fresh frozen, mais de 70 aulas de técnica, a Consulta que Vende e 6 encontros ao vivo no ano. São 12 meses de acesso e 7 dias de garantia.

- Título: **Técnica, anatomia e consulta** · Descrição: **12 meses de acesso**

### E4 · Agenda parada (remarketing)
> Você postou, fez promoção, baixou o preço. E a agenda continua parada.
>
> A paciente não vê o seu certificado. Ela sente se você sabe o que está fazendo, na consulta, na agulha e no espelho.
>
> Na Filgueiras Academy: anatomia em fresh frozen, mais de 70 aulas de técnica e a Consulta que Vende, com anamnese, termos e precificação prontos.

- Título: **Consulta, agulha e espelho** · alt: "A agenda continua parada?"
- Descrição: **Filgueiras Academy**

## Regra dos ganchos (revisão de 06/10)
- O texto do gancho aparece **cheio no frame 0** (sem fade). É o quadro do autoplay e da miniatura.
- Primeiro quadro com **ação ou o que desperta curiosidade** (a aula com a peça pixelada, a conversa entrando), nunca cenário vazio.
- Gancho grande (~84 a 104px) no centro, com até 8 a 10 palavras. Primeira cena com no máximo 2,5s. Cartão final de 3,6s.
- Do V3 ao V6 só tem música. A maior alavanca que falta é **voz humana no 1º segundo**: os ganchos UGC abaixo e, quando der, 3s de selfie da própria Aline.

## Pedidos de UGC (Camila, IA)
As regras estão em `../video-ugc/README.md` §0:
- **Gravação:** fundo verde #00B140, selfie vertical 1080×1920, do peito para cima, 2 takes de cada.
- **Fala:** começa no primeiro quadro, sem "oi" e sem "gente". No fim, ela aponta por cima do ombro, como quem diz "olha".
- **Papel:** ela apresenta a Aline e nunca dá depoimento ("eu fiz", "minha paciente", profissão).

A montagem é feita com `../video-ugc/montar.py` sobre o 1º quadro do vídeo, pausado.

| Vídeo | Fala exata | Ângulo |
|---|---|---|
| V2 (aula da calha lacrimal) | A) "Se você tem medo de aplicar em calha lacrimal, olha isso." | Dor |
| | B) "Olha o que tem embaixo da pele na calha lacrimal." | Curiosidade |
| | C) "Essa professora abriu a calha lacrimal por dentro. Presta atenção." | Autoridade |
| V3 (fundadora) | "Essa professora formou mais de mil alunas e ainda estuda dissecção." | Curiosidade (é verdade: em 19/08 ela era aluna) |
| V4 (dor da agulha) | "Já travou com a seringa na mão? Olha o que ninguém te mostrou." | Dor |
| V5 (venda, bônus) | "Se a paciente te diz “vou pensar” e some, olha isso." | Dor de venda |

## Variantes com gancho UGC (montadas em 06/10, `ugc.py`)
Os vídeos da Camila chegaram **sem fundo verde** (parede bege). Por isso o formato usado é o de
corte seco (tier A): ela fala o gancho em tela cheia, com legenda já no frame 0, e o corpo do
vídeo entra direto. Os cortes foram feitos pelos tempos de cada palavra.

| Variante | Arquivo | Fala usada | Situação |
|---|---|---|---|
| V2-B | ugc5 | "Olha o que tem embaixo da pele na calha lacrimal." (corte antes de um "e some" que o gerador emendou) | Pronta |
| V4-ugc | ugc1 | "Já travou com a seringa na mão? Olha o que ninguém te mostrou." | Pronta |
| V5-ugc (venda) | ugc3 | "Se a paciente te diz “vou pensar” e some, olha isso." | Pronta |
| V5-ugc (agenda) | ugc6 | "Se tudo continuar como está pelos próximos seis meses, você vai estar satisfeita com a sua agenda?" (fala fora do roteiro original, sem promessa) | Pronta |
| V2-C | ugc4 | Só até "…abriu a calha lacrimal por dentro". O resto saiu alarmista ("vocês não têm noção do perigo… alertar vocês") e foi descartado | **Provisória**: a fonte veio horizontal e a imagem fica mole. Regerar na vertical |
| V3-ugc | ugc2 | Só até "…e ainda estuda dissecção". O resto saiu embolado ("e some dissecção e some") | **Provisória**: fonte horizontal, imagem mole e enquadramento apertado. Regerar na vertical |
| V2-A | (não veio) | "Se você tem medo de aplicar em calha lacrimal, olha isso." | Falta gravar |

## Plano de teste
- **Frio**, um conjunto aberto com V1, V2, V3, V4, E1 e E2. Pares de teste:
  - **V1 × V2:** o mesmo corpo com ganchos diferentes (o original contra a Camila);
  - **V3 × V4:** fundadora contra dor;
  - **E1 × E2:** anatomia contra venda.
- **Remarketing** (visitou a LP, comprou o ingresso ou viu 50% dos vídeos): V5, V6, E3 e E4.
- **Métricas:** hook rate (3s/impressões) acima de 30%, retenção até 15s, CTR de saída e custo por
  compra. Não julgar com menos de 1.000 impressões por anúncio.
- **Antes de subir verba:** o `components/MetaPixel.tsx` manda o ViewContent da `/academy` como
  "Ingresso Por Dentro da Face", com valor 67. Isso precisa ser corrigido.

## Checklist de compliance (conferido em 06/10)
- [x] Nenhum preço, "de R$X por", número de vagas ou escassez.
- [x] Nenhum nome de medicamento nem "Botox". A palavra "toxina" é genérica e já está na LP.
- [x] Nenhum antes e depois, promessa de resultado clínico, agenda cheia ou faturamento.
- [x] Nada sobre o que cada profissão "pode" fazer.
- [x] A peça anatômica só aparece pixelada (clipe da aula). O IMG_2821 está fora.
- [x] Sem terceiros, sem a marca "ECO" e sem música com copyright no quadro.
- [x] Credenciais só as confirmadas. Nada diz que no laboratório de 19/08 ela estava ensinando.
- [x] Legenda do V1 conferida com dois modelos de transcrição e com o usuário ("o prato da minha
      cânula", "infraorbital", "palpebromalar", "microbolus").
