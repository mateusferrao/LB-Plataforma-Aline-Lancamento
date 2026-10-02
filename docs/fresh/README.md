# LP `/fresh` e `/fresh/sem-vsl` · "A segurança de um curso internacional em cadáver fresh frozen"

Plano, debate e decisões da LP nova. **Implementada** em `app/fresh/page.tsx` (com VSL) e
`app/fresh/sem-vsl/page.tsx` (sem VSL), as duas montadas por `components/fresh/FreshPage.tsx`.
A âncora de valor tem fonte única em `components/fresh/ancora.ts`.

**O que foi ao ar (28/09):** headline curta com foco em fresh frozen; no celular, headline → vídeo → CTA;
barra fixa sem cronômetro de reserva; o CTA abre o ingresso da `/lp2` (mesmo modal, sem o "de R$197",
com a âncora do curso da Aline e o cronômetro de reserva dentro do ingresso); **o valor da aula só
aparece no ingresso emitido, igual à `/lp2`** (na página, "R$35 mil × uma fração disso");
fisioterapeutas no "pra quem é" e no ingresso; sem gravação; nenhuma frase "direto da mesa de
dissecção"; nenhuma imagem de peça anatômica.

**Ajustes de 28/09 (depois do primeiro deploy):** a headline passou a terminar em "pra você aplicar sem
medo e com resultado" (em vez de "sem medo de intercorrência"), com o destaque em `--wine-bright`
(#b8322c, o vermelho do botão clareado pra ficar legível sobre o preto). O valor da aula saiu da página
inteira, inclusive do subtexto do contador (`Countdown semPreco`), e só aparece no ingresso emitido.

**Âncora genérica (28/09):** a página não atribui mais os R$35 mil ao curso da Aline. O texto diz que
"um curso internacional em cadáver fresh frozen chega a custar cerca de R$35 mil" (o curso dela está
nessa faixa; cursos nos EUA cobram US$3.500+ só de inscrição, fora viagem). No ingresso emitido, o
comparativo é visual (`components/fresh/AncoraIngresso.tsx`): o curso internacional aparece com o valor
riscado, o ingresso de R$67 em destaque e o selo "Menos de 1% do valor · sem viajar". O riscado fica no
produto de referência, nunca num "de/por" da própria aula.

**Outras âncoras (28/09).** Uma por lugar, sem empilhar: a **seringa** ("O ingresso custa menos que uma
seringa de preenchedor") no card da oferta e no comparativo do ingresso, e o **custo de refazer** ("Um
retoque, um produto desperdiçado ou uma paciente que não volta custa mais do que esta noite") no CTA
final. Os textos ficam em `components/fresh/ancora.ts`. Próximo teste sugerido, nos criativos e não na
LP: seringa × curso internacional × refazer, com o mesmo público. O ângulo com menor custo por compra
sobe para o Hero.

**Sem nada que diminua a aula (28/09).** Saíram da página: o aviso "não é curso prático / não substitui o
hands-on" (na seção de valor e na FAQ), o tira-dúvidas (a aula não tem tira-dúvidas individual), a FAQ
"é transmitida de dentro de um laboratório? Não" (virou "Como eu vejo a face por dentro numa aula
online?", sem afirmar laboratório) e a menção a certificado. O "não é pra você" filtra pela atitude. O
único "não" que ficou é o da gravação, porque evita reembolso de quem não pode assistir e reforça a
escassez. As seções que dependiam de confirmação da Aline (roteiro
em blocos, detalhes dos cursos) foram escritas só com fatos já confirmados.

**Âncora da aula no ingresso (28/09, noite):** a equipe confirmou que o valor
da aula é R$197 (`AULA_VALOR_DE` em `lib/lotes.ts`). O ingresso emitido da `/fresh` passa a mostrar
~~de R$197~~ **R$67** ao lado do comparativo com o curso internacional, igual ao "de/por" da `/lp2`.
A página continua sem nenhum valor. Isso substitui a decisão D5 abaixo, na parte do "sai o de R$197".

---

## Decisões de 01/10 (Hormozi) · o que mudou e por quê

Base: os três livros do Alex Hormozi lidos por inteiro ($100M Offers, $100M Leads, $100M Money
Models; digests com referência de linha ficaram fora do repositório) e os números do Meta Ads dos
últimos 30 dias: **R$2.275 gastos, 54 compras, CPA médio ~R$42**, subindo campanha a campanha
(R$14 → R$28 → R$47 → R$64 → R$74 nas duas ativas, "Teste Criativo"). Num recorte: 123 visitas →
13 ingressos emitidos → 5 checkouts → 2 pagamentos → 2 compras. Nunca foi lido por rota.

**Diagnóstico.** Com ticket de R$67 e CPA de R$42–74, o front-end sozinho fica em ~1–1,4:1
(Leads: quem trava abaixo de 3:1 não escala). A aula é a oferta de atração; o bump e a condição da
plataforma na sala decidem o lucro (Money Models: pagar aquisição + entrega em 30 dias). CPA
subindo é saturação: a ordem de variação do Offers é criativo → texto → embalagem → estrutura. E
a primeira dobra não espelhava o anúncio (Leads: "make your landing pages match your ads").

| O que mudou | Princípio | Onde |
|---|---|---|
| **H1 espelha os anúncios ativos** (insegurança na hora de aplicar → ver por dentro). "Não é falta de coragem" é a frase da Aline no vídeo do consultório. Fresh frozen vai pro subtítulo. | Leads: LP = continuação do anúncio, "click to close" | `components/fresh/sections/Hero.tsx`, `app/fresh/metadata.ts` |
| **Preço na página e CTA direto ao checkout.** Sai o modal de emitir ingresso da /fresh (fica só na /lp2, que é o controle). | Money Models: estranho entende preço, não valor; Leads: cada passo é um ponto de queda | `FreshPage.tsx`, `StickyCta.tsx`, `Ancora.tsx`, `Offer.tsx`, `components/fresh/OfertaPreco.tsx` |
| **Um ingresso só (R$67); o Protocolo continua como order bump (R$29,90) e a página o pré-vende** ("opcional, no checkout"). Dois pacotes na página foram descartados: o bump já está no momento certo (depois da decisão) e antecipar o pacote faria a visitante dizer "não" duas vezes. | Money Models: upsell "no exato momento" do próximo problema; "hint at your next offer early" | `lib/ofertaFresh.ts` (`BUMP`), `Offer.tsx`, `Faq.tsx` |
| **Garantia de Presença**, com nome e duas camadas: 7 dias após a compra (como sempre) e, pra quem esteve ao vivo, até 24h depois da aula. Repetida no card, no Hero, no final e na FAQ. | Offers: "se não X em Y, fazemos Z" + nome; conversão 2–4× (Fladlien) | `lib/ofertaFresh.ts` (`GARANTIA`), `sections/Garantia.tsx` |
| **Objeção nº 1 ("ao vivo / sem gravação") tratada com honestidade:** não há replay avulso; a gravação entra só na condição especial da Filgueiras Academy, apresentada na sala. A LP cita a plataforma em uma linha, sem preço. | Offers: resolver todo obstáculo apresentado; Money Models: antecipar a próxima oferta | `Faq.tsx`, `ParaQuem.tsx`, `Offer.tsx` (`PLATAFORMA_LINHA`) |
| **Oferta e garantia sobem** pra logo depois de "o que muda na sua cadeira". | Tráfego frio vê preço e risco zero antes de rolar o resto | `FreshPage.tsx` |

**O que ficou como estava, de propósito:** "poucas vagas" sem número (não há capacidade declarada),
nenhum bônus novo, nenhuma gravação avulsa, âncora do curso internacional como referência genérica,
"de R$197" como único "de" (confirmado pela equipe em 28/09).

**Pendências operacionais desta decisão:**
- Definir como a equipe confirma presença pra segunda camada da garantia (lista da sala / nome no
  login) e registrar em `docs/agente-ia/03-politicas.md`.
- Ticto → aba Rastreamento de cada venda → compras por LP de origem e **taxa de aceite do bump**
  (vendas com Protocolo ÷ vendas). GA4 → exploração por `page_path`. Meta → URL de cada campanha.
- Concentrar as campanhas em duas rotas (`/` controle × `/fresh`) e pausar `/lp2`, `/sem-vsl` e
  `/fresh/sem-vsl` enquanto o volume for ~R$75/dia.

**Próximo lançamento (desenho, não implementado):** testar uma isca antes do ingresso (Leads: "one
step" ou "reveal problem"; ex.: a regra "nunca gelo" em vídeo curto) ou um giveaway "bolsa na
plataforma"; versão premium real pra ancorar; plano de pagamento como primeiro downsell e Protocolo
avulso como segundo (precisa do checkout `protocoloAvulsoUrl`); programa de indicação bilateral pras
ex-alunas (valor ≈ CAC); calendário whisper → tease → shout; testar 2–3 nomes da aula por enquete.

### Rodada 2 (02/10) · fresh frozen de volta na primeira dobra

**Por quê:** o criativo que mais vende é o story "Por dentro da *face* · uma aula ao vivo de
anatomia em fresh frozen" (foto da Aline com a anatomia ilustrada sobre metade do rosto). Ele só
tem chamada (contraste + incomum), sem nenhum elemento de valor e sem preço. A LP precisa confirmar
o anúncio e entregar o valor que ele não entrega (Leads: "make your landing pages match your ads";
todo anúncio = chamada + valor + CTA). O H1 da rodada 1 tinha tirado o fresh frozen da dobra.

| Peça | Texto | Princípio |
|---|---|---|
| Faixa | Aula ao vivo de anatomia em fresh frozen · 06/10 · 20h | Igual ao anúncio |
| Pré-headline | Pra quem aplica (ou vai aplicar) harmonização | Filtro da profissional (label) |
| H1 | A face por dentro, em cadáver fresh frozen, numa noite e sem viajar. *Pra você parar de aplicar no escuro e a paciente sentir a sua segurança.* | Tempo e esforço a zero (Offers, "leve o fundo a zero"); a cena da dor; status visto pela paciente |
| Subtítulo | A Aline estuda e dá cursos de fresh frozen nos EUA e na Europa; um curso desses chega a R$35 mil (genérico); ao vivo, por R$67, a artéria a milímetros da agulha | Âncora com número específico; probabilidade percebida |
| Bullets | risco antes da agulha · segurança que a paciente percebe e indica · diferencial caro e difícil de ter, cobrar pelo que entrega | Segurança → status → valor, sem número de ganho |

- **"Vender mais" só como:** status (a paciente percebe, volta e indica), cobrar pelo que entrega
  (frase do playbook, FAQ 13) e diferencial de mercado ("caro e difícil de ter", sustentado pelos
  preços de cursos presenciais da seção 6.4). Proibido: número de faturamento, agenda cheia.
- **A ponte com a paciente** virou seção de três passos e subiu pra logo depois do "por que".
- **"O que muda na sua cadeira"** ganhou o item "Um diferencial caro e difícil de ter" (só na
  /fresh; a /alunas usa a lista sem ele).
- **Imagem:** na variante sem VSL, a mídia do Hero é a própria arte do criativo
  (`public/images/fresh/criativo-por-dentro-da-face.webp`). **Exceção registrada à regra da seção
  8:** é ilustração anatômica sobre uma pessoa viva, já aprovada na Meta, não foto de peça ou de
  cadáver. Foto real de peça continua proibida.
- **Descartados:** H1 só de segurança (sem tempo, esforço nem número; "segurança" é palavra de todo
  curso); "pouca gente no Brasil viu" (sem fonte); âncora como promessa no H1.
- **Variante pra testar depois:** "Você aplica perto de artérias que só viu desenhadas? *Numa
  noite, a Aline te mostra a face em fresh frozen. R$67.*"

---

Base original (28/09): skill *copywriting* (coreyhaines31/marketingskills), com o Human Action Model (desconforto →
visão → caminho), o teste "Now you can…", o Perception Gap, "uma ideia por seção" e "clareza acima
de esperteza". Também usei a pesquisa de público da Aline (abr/2025), as LPs atuais (`/`, `/lp2`,
`/info`), o playbook do agente e os docs dos criativos.

---

## 0. Resumo e decisões para debatermos

**A tese da página nova:** ela não vende anatomia. Ela vende o que a anatomia dá: **aplicar com
segurança, sem medo de intercorrência, e entregar resultado em cada rosto.** A dissecção em fresh
frozen entra em dois papéis. Ela é o **motivo pra acreditar** (por que desta vez a insegurança vai
embora, quando outros cursos não resolveram) e a **âncora de valor** (o que um curso presencial
cobra mais de R$6 mil pra mostrar, numa noite, por R$67).

**Bloco de headline (versão curta, escolhida em 28/09):**

> <small>PRA QUEM JÁ APLICA HARMONIZAÇÃO E AINDA SENTE INSEGURANÇA EM ALGUNS PROCEDIMENTOS</small>
> **A segurança de um curso internacional em cadáver fresh frozen, *pra você aplicar sem medo de
> intercorrência.***
> Numa aula ao vivo de R$67, a Dra. Aline Filgueiras, que estudou e dá cursos internacionais de
> fresh frozen nos EUA e na Europa, mostra nas imagens das dissecções dela onde estão os riscos da
> face e por que cada rosto responde de um jeito. Sem viajar, sem visto e sem pagar em dólar.
> `Quero meu ingresso · R$67` · 06/10 · 20h · ao vivo
>
> ✓ Aplique sem travar perto do nariz, da glabela, da testa e do sulco
> ✓ Acerte o resultado em cada rosto
> ✓ O curso internacional de fresh frozen da Aline custa cerca de R$35 mil. Esta aula, R$67, sem viajar

**Ponto de atenção no H1:** "a segurança de um curso internacional" chega perto de dizer que a aula
equivale ao curso. Duas proteções: a frase "não é curso prático e não substitui o hands-on" na seção
de valor, e o subtítulo, que deixa claro que é uma aula ao vivo com imagens. Se quiser suavizar:
"A segurança que se aprende num curso internacional em cadáver fresh frozen, pra você aplicar sem
medo de intercorrência."

### Decisões tomadas (28/09)
| # | Decisão |
|---|---|
| D1 | **É para esta aula (06/10).** Vai ao ar em até 2 dias. O teste fica só `/` × `/fresh`, meio a meio. |
| Formato | **A aula é de estúdio, com fotos e vídeos das dissecções da Aline.** Nenhuma página pode dizer "direto da mesa de dissecção" ou "ao vivo do laboratório". O certo é "com as imagens das dissecções que ela fez". Esse ajuste também vale para as LPs atuais e para os criativos. |
| H1 | **Foco no fresh frozen, vendendo o resultado.** A frase começa pela segurança e o fresh frozen entra como o "com o quê". |
| Termo | **"cadáver fresh frozen"** no texto. Nenhuma imagem de peça na página nem nos anúncios. |
| D5 | **Sai o "de R$197".** A âncora é o **curso internacional de fresh frozen da própria Aline: cerca de R$35 mil** (informado pela equipe em 28/09). Mostra mais valor e reforça a autoridade dela. Os preços de mercado da seção 6.4 ficam só como referência. |
| Onde | "Estudou e dá cursos internacionais de fresh frozen **nos EUA e na Europa**". |
| H1 | Versão curta: "A segurança de um curso internacional em cadáver fresh frozen, pra você aplicar sem medo de intercorrência." |
| D6 | **Sem gravação.** A página deixa isso claro no "pra quem não é" e na FAQ. |
| D7 | **Fisioterapeutas entram** no "pra quem é". |

**Decisões que preciso de você (e da Aline):**

| # | Decisão | Minha recomendação |
|---|---|---|
| D1 | A `/fresh` é para **esta** aula (06/10, faltam 8 dias) ou para o **próximo** lançamento? | Se for para esta, a página tem que ir ao ar em até 2 dias e o teste precisa ser simplificado (seção 10). |
| D2 | O problema está mesmo na página? | Antes de culpar a LP, preciso dos números do funil (seção 1). Uma LP nova não resolve criativo fraco nem checkout que trava. |
| D3 | Onde entra a dissecção? | **Não** entra como promessa. Ela é o motivo pra acreditar (logo no subtítulo) e a âncora de valor (seções 4 e 6.4). A promessa é segurança e resultado. |
| D4 | Estilo da headline: Fraunces ou Inter? E o grifo morre de vez? | H1 em Inter bold, com 3 ou 4 palavras em marsala e sem bloco de fundo. Grifo parcial só nos H2 para manter a ligação com os criativos (seção 5). |
| D5 | Tirar o "de R$197 por R$67"? | ✅ Decidido: sai. A âncora é o curso internacional de fresh frozen (ver acima). |
| D6 | Gravação por 48h? | ✅ Decidido: segue sem gravação. |
| D7 | Incluir **fisioterapeutas** no "pra quem é"? | ✅ Decidido: entram. |

---

## 1. Antes da página: diagnóstico crítico

Você disse que as páginas atuais estão trazendo pouco resultado. Antes de escrever a quinta página,
preciso saber **onde** o funil está vazando. Cada vazamento pede um remédio diferente:

| Onde vaza | Sintoma | Remédio | A LP nova resolve? |
|---|---|---|---|
| Anúncio | CTR baixo, CPC alto | Criativo e ângulo | Não |
| Primeira dobra | Muita gente sai sem rolar e sem dar play | Headline, foto e ordem do vídeo | **Sim** |
| Argumento | Rola a página, mas não clica no CTA | Problema, mecanismo, prova e oferta | **Sim** |
| Checkout | Clica, mas não paga | Checkout, Pix, confiança e preço | Pouco |
| Ingresso da `/lp2` | Emite o ingresso e não confirma | O passo extra pode estar atrapalhando | Parcialmente |

**Números que preciso (por rota: `/`, `/sem-vsl`, `/lp2`, `/lp2/sem-vsl`, `/info`):**
visitas, % que clicou no CTA, % que iniciou o checkout, compras, taxa de play e de 25% da VSL, CTR e
CPC dos anúncios por criativo. O GA4 e o pixel já registram os cliques e a VSL (`lib/analytics.ts`).

**Três achados que já dá para ver sem os números:**

1. **No celular, a headline das LPs atuais fica abaixo da dobra.** Nas duas versões com VSL, o
   vídeo 9:16 vem antes do texto (`order-first`). Num celular de 390px de largura, o vídeo tem
   ~590px de altura e a headline só começa por volta de 660px, que é o limite da tela visível no
   navegador do Instagram. O botão fica bem mais abaixo. Quem chega do anúncio vê um vídeo mudo e
   não vê a promessa, a data, o preço nem o botão. Se a VSL não prender nos primeiros 3 segundos, a pessoa
   sai sem ter lido nada. **Esse pode ser o maior vazamento do funil, e dá para corrigir em 10
   minutos nas páginas atuais, sem esperar a `/fresh`.**
2. **O tráfego está dividido em 5 páginas.** Com 8 dias até a aula, nenhuma delas vai chegar a um
   resultado estatisticamente confiável. Para ver a diferença entre 2% e 3% de conversão, cada
   variante precisa de ~3.800 visitas. Colocar mais uma página no ar sem desligar outras deixa o
   teste mais fraco (seção 10).
3. **A mensagem muda de página para página** ("segurança de quem viu por dentro", "3 camadas", "o
   mapa das intercorrências"). A skill pede uma mensagem por página e uma página por mensagem. Tudo
   bem ter vários ângulos no teste, desde que cada um seja claro e completo.

---

## 2. O que a pesquisa diz (e o que ela não diz)

**Fonte:** planilha "Aline - 2025" (Drive, pasta "Respostas Pesquisa"), coletada em 3 e 4/04/2025.
São 340 respostas, das quais 308 têm resposta aberta aproveitável (as outras estão em branco ou
cheias de "asdf").
*A planilha tem nome e telefone. Ela **não** entra no repositório. Aqui ficam só contagens e
frases sem identificação (o nº é a linha da resposta).*

### Perfil
| | |
|---|---|
| Formação | Biomedicina **47%** · Esteticista 12% · **Fisioterapia 12%** · Farmácia 9% · Odontologia 9% · Enfermagem 6% |
| Idade | 31–40 anos **48%** · 21–30 anos 35% · 41–50 anos 16% |
| Escolaridade | Pós-graduação **77%** |
| Consultório próprio | **66% sim** · 34% atende em clínica parceira |
| Tempo de formada | 1–3 anos 29% · 4–7 anos 26% · 8–12 anos 28% · +12 anos 17% |

### Obstáculos (pergunta aberta, 308 respostas válidas; uma resposta pode citar mais de um)
| Tema | % | Frases reais |
|---|---|---|
| Captação, pacientes, vendas, posicionamento | **~32%** | "Captação de pacientes", "paciente chamando querendo saber apenas preço" (#67) |
| Financeiro | ~19% | "Financeiro", "dinheiro para investir" |
| Medo, insegurança, falta de confiança | **~16%** | "medo de errar" (#225, #247), "receio de realizar alguns procedimentos" (#197), "insegurança em alguns procedimentos" (#232) |
| Prática, técnica, intercorrência | ~5% | "Medo de intercorrências… o medo me trava" (#81), "Falta-me dominar o preenchimento… Dosar o básico é triste demais" (#12) |

### O que já tentaram
- **36% já fizeram cursos e mentorias** e continuam travadas. As queixas se repetem: "cursos muito
  vazios" (#64), "cursos com pouca objetividade, cheio de 1000 passos" (#16), "faltou parte prática"
  (#196, #199), "mentorias que não me levaram a lugar nenhum" (#162).

### Sonhos
- Ser **reconhecida / referência**: ~26%. Clínica própria: ~27%. Liberdade financeira: ~27%.
- **O dado mais importante para esta página:** ~10 pessoas (3%) citaram, **sem ninguém
  perguntar**, que o sonho é um curso de dissecção ou um curso fora do país:
  - "Fazer um curso em **cadáver fresco**" → obstáculo: financeiro (#154)
  - "Fazer **seu curso nos EUA**" → obstáculo: **visto, "já tentei 2x"** (#265)
  - "Trabalhar mais para guardar dinheiro para fazer **sua imersão**" (#307)
  - "Fazer uma imersão internacional" (#276) · "Ir para um curso fora" (#332) · "fazer cursos fora
    do Brasil" (#52) · "fazer um curso no exterior" (#229) · "Certificado internacional" (#29) ·
    "Fazer seu curso" (#94) · "não ter como investir no curso que é o maior sonho da minha vida" (#177)

### Leitura crítica
1. **A dor nº 1 (captação e dinheiro) não é o que esta aula resolve.** Existem dois caminhos. Um é
   falar só com os ~16–20% que sentem medo e insegurança, que são as compradoras naturais de uma
   aula de anatomia. O outro é fazer uma **ponte honesta** entre as duas coisas: segurança na mão
   vira segurança que a paciente percebe (#26: *"não passo tanta segurança às minhas pacientes"*).
   **Recomendo o primeiro como promessa e o segundo como uma seção curta**, sem prometer agenda
   cheia nem faturamento (o playbook e a Meta proíbem).
2. **3% parece pouco, mas é o sinal mais forte da pesquisa.** Ninguém perguntou sobre dissecção,
   e mesmo assim elas escreveram "cadáver fresco", "seu curso nos EUA", "sua imersão". O desejo
   existe e esbarra em **dinheiro, visto e tempo**. A R$67, ao vivo e sem viajar, a aula tira
   exatamente essas três barreiras. Esse é o ângulo que a concorrência não tem.
3. **As perguntas da pesquisa puxam para o lado do negócio** ("sonho profissional", "obstáculos").
   Por isso a pesquisa **subestima** o medo clínico. Por vergonha, pouca gente escreve "tenho medo de
   causar uma necrose" num formulário. O medo aparece disfarçado de "insegurança", "receio" e
   "falta de prática".
4. **"Mais um curso" é uma objeção forte.** Um terço já comprou curso ou mentoria e se frustrou. A
   página precisa dizer logo de cara por que isso é diferente: não é protocolo, é **ver** o que
   está embaixo da pele.
5. **A pesquisa é de abril de 2025** e foi respondida pela audiência da Aline, que já é público
   morno. Serve bem para a linguagem, mas não para medir o tamanho do mercado frio.
6. **Tom:** ~10% citam Deus ou oração e ~10% citam filhos, pais ou família como motivação. Isso não
   entra na copy como gatilho, mas pede um tom acolhedor, sem agressividade nem "chega de
   desculpas".

---

## 3. Crítica das páginas atuais (pela skill)

| Ponto | `/` | `/lp2` | Na `/fresh` |
|---|---|---|---|
| **Headline** | "Aplique com a segurança de quem já viu, por dentro, onde estão os riscos da face." É boa na ideia, mas é longa, fica num bloco grifado de 3.7rem e não diz **o que** é (aula? curso?) nem por quanto. | "Entenda as 3 camadas que ninguém te mostrou…" É curiosidade abstrata. "Entender camadas" falha no "Now you can…": não é uma capacidade nova e concreta. | Headline curta de benefício + sub com o mecanismo (fresh frozen) + bullets concretos. |
| **Estilo visual do H1** | O bloco marsala atrás da frase inteira pesa, parece cartaz e cansa a leitura. | Igual, com um 2º nível dentro do H1. | Padrão de página de vendas: eyebrow, H1 médio com destaque em cor, sub, bullets, CTA e microcopy de confiança (seção 5). |
| **Mobile** | Vídeo antes da headline. | Igual. | Headline e CTA na 1ª tela; o vídeo vem depois. |
| **Dissecção** | Aparece, mas como prova ("é a bagagem de quem estudou…"). | "Direto da mesa de dissecção" num parágrafo. | Vira o mecanismo e o desejo, com seção própria, comparação e fotos reais. |
| **"Fresh frozen"** | Citado e nunca explicado. | Igual. | Explicado em uma frase: é o tecido mais próximo do rosto vivo. |
| **Especificidade** | "a leitura de anatomia que faltava" (vago). | "técnica, anatomia e resultado" (framework genérico). | Regiões nomeadas (nariz, glabela, testa, sulco), o que ela viu e onde. |
| **Âncora de preço** | Não tem. | "De R$197 por R$67", com timer. | Âncora real: o custo de um curso presencial em fresh frozen. |
| **Clareza** | "Quem está na sala vê a nova fase nascer" é esperto, mas ninguém sabe o que é. | Igual. | Explicar o que é ou tirar (seção 9). |
| **Distração** | "Essa aula é a sua porta de entrada na Filgueiras Academy…" dentro da oferta. | Igual. | Tirar. É uma página, um objetivo, um CTA. |
| **"Pra quem é"** | Não tem. | Tem, mas sem fisioterapeutas e sem o "não é pra você". | Com o "não é pra você" (filtra e reduz reembolso). |

---

## 4. Estratégia da `/fresh`

### A grande ideia
> **Aplicar com segurança e entregar resultado, sem medo de intercorrência.**
> Por que desta vez funciona: a Aline mostra a face como ela é por dentro, do jeito que viu em
> peças fresh frozen. Por que vale: é o que um curso presencial cobra mais de R$6 mil pra mostrar,
> numa noite, por R$67.

**Regra da copy (sua orientação, que concordo):** ninguém compra "aprender anatomia". Ela compra
**segurança na mão e resultado na paciente**. Anatomia, dissecção e fresh frozen aparecem sempre
como **o porquê** e **o valor**, nunca como **o quê**. Teste rápido para cada frase: "isso fala do
que ela vai **sentir ou conseguir**, ou do que ela vai **estudar**?" Se for estudar, reescrever.

### As palavras dela (pesquisa), e por que isso muda o seu exemplo
| O público escreve | Vezes | Leitura |
|---|---|---|
| "insegurança", "insegura", "segurança nos procedimentos" | **~30** | É a palavra-chave da dor. Tem que estar no bloco da headline. |
| "medo" ("medo de errar", "o medo me trava") | ~25 | É a emoção. |
| "entregar resultado(s)" | ~15, como sonho | É o desejo positivo. |
| "intercorrência" | **2** | Quase ninguém escreve essa palavra. Mas é **o que** ela teme quando diz "insegurança". |

**Minha crítica ao "diminua as intercorrências":**
1. **Pressupõe que ela tem intercorrências.** A maioria não tem, ela **tem medo** de ter. Quem lê
   "diminua as suas intercorrências" pode pensar "isso não é pra mim" ou se sentir acusada.
2. **É promessa de resultado clínico.** Isso é arriscado no CDC, na Meta e nos conselhos
   profissionais, e o playbook proíbe. Por outro lado, **"sem medo de intercorrência"** fala do
   sentimento dela, e **"menos risco de intercorrência"** é uma afirmação que se sustenta: conhecer
   a anatomia vascular é a principal forma de prevenção.
3. **Recomendo:** "intercorrência" entra no H1 como **medo** ("sem medo de intercorrência") e,
   se for preciso, como **risco** num bullet ("menos risco perto do nariz e da glabela"). Nunca como
   "diminua as intercorrências".

### Human Action Model aplicado
| Tempo | Onde fica | O que diz |
|---|---|---|
| **Desconforto** (a dor que ela reconhece) | Pré-headline | "…e ainda sente insegurança em alguns procedimentos" |
| **Visão** (o resultado) | H1 | "Aplique com segurança e entregue resultado, sem medo de intercorrência" |
| **Caminho** (o que é entregue + por que acreditar) | Subtítulo | Aula ao vivo, os riscos da face e cada rosto, visto em fresh frozen |
| **Valor** | Bullets + CTA | R$67 contra mais de R$6 mil do presencial, sem viajar |

### Por que fresh frozen é um bom mecanismo (e não só um enfeite)
Um mecanismo único responde a pergunta "por que *isso* funciona quando os outros cursos não
funcionaram?". Isso casa com a queixa de 36% da pesquisa ("fiz cursos e continuo travada"):

- **Atlas e slide:** desenho 2D. Você decora a posição e não vê a variação de um rosto para outro.
- **Peça fixada em formol:** o tecido fica rígido e acinzentado e os planos perdem a elasticidade.
- **Fresh frozen:** o tecido é congelado sem fixação e mantém cor, textura e mobilidade próximas
  às do rosto vivo. Os planos e os vasos aparecem como estão na paciente.

*(Confirmar com a Aline se ela assina essa comparação exatamente assim. Ver a seção 9.)*

### Perception Gap (o mesmo argumento lido por perfis diferentes)
| Frase | A experiente (8+ anos) lê | A iniciante (1–3 anos, 29%) lê |
|---|---|---|
| "Anatomia em cadáver" | "Finalmente o nível que eu queria." ✅ | "É avançado demais pra mim." 🚩 |
| "Aplique sem medo" | "Eu não tenho medo, isso não é pra mim." 🚩 | "É exatamente o que eu sinto." ✅ |

**Como resolver:** "sem medo de intercorrência" fala com as duas, porque até a experiente tem esse
medo, só não chama de "medo". A pré-headline usa "insegurança **em alguns procedimentos**", que é a
frase dela (#232, #327) e não acusa ninguém de ser insegura em tudo. O "Pra quem é" separa os perfis.

### Honestidade que também vende
Dizer com todas as letras **"não é curso prático e não substitui o hands-on"**. Isso aumenta a
confiança, protege de reclamação e reembolso e, de quebra, prepara a venda do curso presencial ou
da imersão da Aline (se esse for o plano, seção 9).

---

## 5. Headline: estilo novo e opções

### Especificação visual (padrão de página de vendas)
- **Eyebrow** em pílula com borda marsala, 12px, caixa alta: `AULA AO VIVO · 06/10 · 20H · ONLINE`.
- **H1** em **Inter 700**, 30px no celular e 44–48px no desktop, `line-height 1.15`, no máximo 3
  linhas. **3 ou 4 palavras em marsala claro (cor do texto, sem fundo).** Sem sublinhado e sem bloco.
- **Subheadline** de 18–19px em `fg-soft`, com no máximo 2 frases.
- **3 bullets** com ✓, uma linha cada.
- **CTA** com o preço: `Quero meu ingresso · R$67`. Ocupa a largura toda no celular.
- **Microcopy** logo abaixo: `Pix ou 12x de R$6,92 · 7 dias de garantia · ao vivo, sem gravação`.
- **Imagem:** foto real da Aline de luvas no laboratório (`public/images/info/aula-lab-luvas.webp`),
  com a etiqueta "Laboratório de dissecção · EUA". No mobile, a VSL (se houver) vem **depois** do CTA.
- **H2 das seções:** continuam em Fraunces, com o grifo marsala **só em 2 ou 3 palavras** (não na
  frase inteira). Assim a página segue parecida com os criativos, que usam o grifo, sem o peso de hoje.

> Debate D4: Inter no H1 deixa a página com cara de "página de vendas" e melhora a leitura no
> celular. Fraunces é mais premium e mais Aline. Posso fazer um mock das duas lado a lado antes de
> decidir.

### Como avaliar: o bloco de headline tem 3 tarefas
Em 5 segundos, a pessoa precisa: **(1) reconhecer a dor dela**, **(2) entender o que vai receber** e
**(3) ver valor naquilo**. Uma frase só não carrega as três sem ficar enorme e virar o "textão" de
hoje. Por isso o padrão de página de vendas divide o trabalho:

| Peça | Tarefa | Tamanho |
|---|---|---|
| Pré-headline | Dor e identificação ("pra quem…") | 1 linha, pequena |
| **H1** | **Resultado** (o valor emocional) | 8–12 palavras |
| Subtítulo | O que é entregue + por que acreditar (fresh frozen) | 1–2 frases |
| Bullets + CTA | Valor concreto + preço + data | 3 linhas + botão |

**Crítica importante:** o H1 atual da `/` ("Aplique com a segurança de quem já viu, por dentro, onde
estão os riscos da face") **já é uma headline de resultado.** Se a `/fresh` só mudar o visual, o teste
não ensina nada. A diferença precisa estar na **dor explícita** (pré-headline), no **resultado
nomeado por inteiro** (segurança + resultado + sem medo de intercorrência) e no **valor visível**
(R$67 contra mais de R$6 mil).

### Opções

**A · Resultado sem a dor (recomendada)** · fórmula "{resultado} sem {dor}"
> <small>PRA QUEM JÁ APLICA HARMONIZAÇÃO E AINDA SENTE INSEGURANÇA EM ALGUNS PROCEDIMENTOS</small>
> **Aplique com segurança e entregue resultado, *sem medo de intercorrência.***
> Numa aula ao vivo, a Dra. Aline Filgueiras mostra onde estão os riscos da face e por que cada rosto
> responde de um jeito, do jeito que ela viu dissecando peças fresh frozen nos EUA.

- **Dor:** "insegurança em alguns procedimentos" e "medo de intercorrência", nas palavras dela.
- **Entrega:** aula ao vivo, os riscos da face e cada rosto.
- **Valor:** segurança + resultado, e fresh frozen como diferencial logo no subtítulo.
- **"Now you can…"** aplicar com segurança e entregar resultado sem medo de intercorrência. Passa.
- **Fraqueza:** "segurança" é a palavra que todo curso de HOF usa. Quem diferencia é o subtítulo.
  Se o subtítulo não for lido, o H1 parece genérico. Por isso o fresh frozen fica na 1ª linha do
  subtítulo.

**B · Pare / comece** · fórmula "Stop {dor}. Start {prazer}."
> **Pare de aplicar com insegurança. *Saiba onde está o risco antes de a agulha chegar lá.***

- A dor fica mais explícita que em A. A segunda frase é concreta e dá pra imaginar a cena.
- **Fraqueza:** "saiba onde está o risco" volta a soar como conhecimento. Não fala de resultado.

**C · Pergunta com a dor**
> **Ainda sente insegurança na hora de aplicar perto do *nariz, da glabela ou do sulco?***
> Subtítulo: Em uma noite ao vivo, a Dra. Aline te mostra o que tem ali embaixo, visto em peças
> fresh frozen, pra você aplicar com segurança e entregar resultado.

- A identificação é imediata, com as regiões que mais dão medo (as que concentram os casos de
  perda visual publicados).
- **Fraqueza:** o H1 não diz o que ela ganha, isso fica no subtítulo. Ainda assim, costuma
  converter bem em tráfego frio porque a pessoa responde "sim" na cabeça.

**D · Três benefícios**
> **Mais segurança na aplicação. *Menos risco de intercorrência.* Resultado bonito em cada rosto.**

- É o formato mais "página de vendas". Dá pra escanear em segundos e nomeia os três desejos.
- **Fraqueza:** é uma lista, não uma frase, e fica um pouco impessoal. O criativo 04 já usa quase
  essa frase, o que ajuda a manter a mesma mensagem do anúncio à página.

**E · Valor em primeiro (âncora no H1)**
> **A segurança que um curso de R$6 mil em fresh frozen dá, *numa aula ao vivo de R$67.***

- É a percepção de valor mais forte de todas.
- **Fraqueza:** coloca o curso e o cadáver na frente, ou seja, vende o meio. Depende de um número de
  concorrente que ainda não foi conferido. Pode parecer "barato demais pra ser verdade". **Melhor
  como bullet ou como seção** do que como H1.

### Comparativo
| | Dor | Entrega | Valor | Clareza | Compliance | Diferencia |
|---|---|---|---|---|---|---|
| **A** | ✅ (pré-headline) | ✅ (subtítulo) | ✅ | ✅ | ✅ | ⚠️ só no subtítulo |
| **B** | ✅✅ | ⚠️ | ⚠️ | ✅ | ✅ | ❌ |
| **C** | ✅✅ | ✅ (subtítulo) | ⚠️ | ✅ | ✅ | ✅ (subtítulo) |
| **D** | ⚠️ | ⚠️ | ✅✅ | ✅ | ⚠️ "menos risco" pede cuidado | ❌ |
| **E** | ❌ | ✅ | ✅✅ | ✅ | ⚠️ número a conferir | ✅✅ |

**Minha recomendação:** **A** como H1 da `/fresh`. **C** é a variante mais interessante pra testar
contra ela quando houver volume, porque o contraste "resultado × dor" ensina algo pro próximo
lançamento. **E** vira o bullet de valor e o H2 da seção 4. **D** fica pros criativos de remarketing.

---

## 6. Estrutura seção a seção (rascunho de copy)

Tudo com base nos fatos do playbook. O que depende de confirmação da Aline está marcado com **[confirmar]**.

### 1 · Hero
Conforme a seção 5 (opção A). Bullets (cada um começa pelo resultado; o "como" vem depois):
- ✓ **Aplique sem travar** perto do nariz, da glabela, da testa e do sulco, sabendo até onde ir
- ✓ **Acerte o resultado em cada rosto**, entendendo por que a mesma técnica muda de uma paciente pra outra
- ✓ **O curso internacional de fresh frozen da Aline custa cerca de R$35 mil.** Esta aula, R$67, sem viajar.

Faixa de prova logo abaixo: `11+ anos de clínica · 1.000+ alunas · Dissecção fresh frozen nos EUA · Cursos de anatomia na Europa`

*Por quê:* a primeira tela entrega o que é, para quem é, quando, quanto custa e por que acreditar.
Tráfego frio lê só o hero.

### 2 · Problema (na voz da pesquisa)
> **H2:** Você já fez curso. Talvez mais de um. *E a mão ainda trava.*
>
> Quando a Aline perguntou a mais de 300 profissionais da estética o que as impede de crescer, as
> mesmas frases voltaram muitas vezes: "medo de errar", "receio de realizar alguns procedimentos",
> "cursos muito vazios", "faltou a parte prática".
>
> - Você sabe o protocolo, mas perto do nariz e da glabela a mão hesita.
> - Você fica no básico porque ainda não tem segurança pra ir além.
> - Você sente que a paciente percebe quando você está insegura.
>
> Não é falta de curso. É que quase todo curso ensina o protocolo em cima de um desenho.

*Por quê:* a skill pede para descrever o problema melhor do que a própria leitora. Citar a pesquisa
real é honesto, é específico e diz "você não está sozinha". A última linha já leva para o mecanismo.

### 3 · Mecanismo: por que fresh frozen
> **H2:** Por que mais um curso *não tirou a sua insegurança.*
>
> Porque a insegurança não vem da técnica. Vem de aplicar sem saber o que está embaixo da pele. E
> atlas, slide e peça em formol não mostram isso como é no rosto vivo.

Tabela de 3 colunas (seção 4). Fechamento:
> Fresh frozen é o mais perto do rosto vivo que se pode chegar para estudar anatomia. E é caro e
> difícil de encontrar. **[confirmar a frase]**

*Por quê:* responde "por que isso funcionaria se os outros cursos não funcionaram?". A comparação é
a seção que a skill chama de "vs. status quo". O H2 fala da dor dela (insegurança), não de anatomia.
A anatomia só aparece como explicação.

### 4 · Âncora de valor: o curso internacional
> **H2:** O que a Aline ensina lá fora, numa noite, *sem sair do Brasil.*
>
> Quadro: **Curso internacional da Aline: cerca de R$35 mil** × **Esta aula ao vivo: R$67**.
>
> A Aline estudou em cadáver fresh frozen nos EUA e hoje dá esse curso fora do país. Sem passagem, sem
> visto e sem pagar em dólar ou euro.
>
> No dia 6, ela traz pra sua tela, com as imagens das dissecções dela, o que muda a segurança de
> quem aplica. **R$67.**
>
> *Não é um curso prático e não substitui o hands-on. É a segurança que faltava pra você aplicar
> agora, e o primeiro passo pra quem sonha em fazer esse curso um dia.*

*Por quê:* é a maior diferença de preço que dá pra mostrar com honestidade (curso internacional ×
R$67). E, ao mesmo tempo, prova a autoridade: **ela não só fez, ela ensina lá fora.** Fala direto com
quem escreveu "fazer seu curso nos EUA" (#265, bloqueada pelo visto) e "guardar dinheiro pra fazer
sua imersão" (#307).
**Regras:** usar o preço de um curso **real** e informar a moeda e que é o valor por pessoa. Se for
mostrar em reais, dizer "cerca de".

**Âncora usada na página: o curso da própria Aline, cerca de R$35 mil** (`components/fresh/ancora.ts`).
Os preços de mercado abaixo ficam só como referência (por exemplo, para anúncios).

**Referência de mercado (pesquisa de 28/09/2026).** O proxy bloqueou a abertura das páginas. Os valores
vêm do trecho que a busca devolveu, então **abra cada página e confira antes de publicar**:
| Curso | Local | Valor |
|---|---|---|
| [Empire Medical Training · Facial Anatomy Cadaver Training for Aesthetics](https://www.empiremedicaltraining.com/courses/facial-anatomy-cadaver-training-for-aesthetics-in-orlando-fl-07-18-2026/) | Orlando, 18/07/2026 | a partir de **US$3.799** |
| [AmSpa · AIA Cadaver Lab 2026](https://www.americanmedspa.org/cadaver-anatomy-lab/) | EUA | a partir de **US$3.795** |
| [The Aesthetic Mentor · Applied Anatomy Cadaver Dissection](https://www.theaestheticmentor.com/courses/applied-anatomy-for-facial-aesthetics-a-cadaver-dissection-course/) | Boston / Hartford | **US$3.500** |
| [Rãmaga · Harmonização em cadáver fresh frozen](https://www.ramagaproestetica.com.br/produto/curso-anatomia-avancada-na-harmonizacao-facial-em-cadaver-fresco-sao-paulo-08-03-a-10-03-202/) | São Paulo | R$8.100 à vista / R$8.600 em 10x |

- **Câmbio:** o dólar estava em ~R$5,16 em 24/09/2026 ([Revista Fórum](https://revistaforum.com.br/economia/preco-dolar-24-09-2026/)).
  US$3.500 × 5,16 ≈ R$18.060 e US$3.799 × 5,16 ≈ R$19.600, daí o "cerca de R$18 mil a R$20 mil".
- **Ressalva honesta:** esses cursos americanos são voltados a profissionais licenciados nos EUA.
  As imersões internacionais feitas para brasileiras ([Escola da Bel, Las Vegas](https://escoladabel.com/freshfrozen/las-vegas),
  [Skincademy](https://skincademy.com.br/lp-imersao-internacional-2-2/)) não publicam o preço, mas
  deixam claro que passagem, hotel, visto e alimentação ficam por conta da aluna.
- **A âncora mais forte continua sendo o preço do curso da própria Aline.** Se ela topar divulgar,
  substitui a tabela acima.

### 5 · O que você vai ver (roteiro da noite) **[confirmar com a Aline]**
| Bloco | O que ela mostra | Você sai sabendo |
|---|---|---|
| 1 | As camadas da face em fresh frozen: pele, gordura, músculo e osso | Em qual plano o produto fica e por que isso muda o resultado |
| 2 | Nariz, glabela, testa e sulco: por onde passam os vasos | Até onde ir em cada região |
| 3 | Rostos diferentes, anatomias diferentes | Por que a mesma técnica dá resultados diferentes |
| 4 | Tira-dúvidas ao vivo | A sua dúvida respondida na hora |

*Por quê:* "o que eu vou ver" é a pergunta de quem já se decepcionou com "cursos muito vazios".
Nas LPs atuais, essa resposta é vaga ("a leitura de anatomia que faltava").

### 6 · Quem conduz (história da Aline)
Galeria com as 4 fotos reais do laboratório (`docs/criativos/fotos/`) + texto:
> Em 2018, a Aline aplicava com a mesma insegurança que você sente hoje. O primeiro curso de
> dissecção mudou isso: ver a face por dentro deu a ela uma segurança que nenhum atlas tinha dado.
> Depois vieram a temporada de dissecção em peças fresh frozen nos EUA **[cidade, instituição e
> ano]** e os cursos internacionais de anatomia que ela dá hoje na Europa **[países e nº de turmas]**.

*Por quê:* a história segue o próprio Human Action Model (ela tinha o desconforto, a dissecção foi o
caminho). Local, instituição e ano deixam a autoridade verificável, e os concorrentes não têm isso.

> Debate: escrever esse bloco em **1ª pessoa** ("Em 2018, eu…") cria mais conexão. Precisa ser
> aprovado pela Aline.

### 7 · Ponte com a paciente (a dor nº 1, sem promessa)
> **H2:** A paciente *percebe.*
>
> Quem sabe o que está embaixo da pele explica o procedimento com calma, responde a dúvida sem
> hesitar e passa segurança na consulta. É disso que a paciente lembra quando indica alguém.

*Por quê:* conversa com captação e com "não passo segurança às minhas pacientes" sem prometer agenda
nem faturamento. **Debate:** se isso parecer promessa demais, sai.

### 8 · Prova social
- Prints que falam de segurança e anatomia: `depoimento-12` ("profissionais mais humanos e
  seguros"), `depoimento-1` ("nunca tinha feito uma boca tão linda"), `depoimento-8` ("explicar de
  forma tão simples"), `depoimento-11`.
- **Fica de fora:** `depoimento-13` ("faturei R$20.000"). É promessa de ganho, e a Meta proíbe.
- **Pedido:** 3 a 5 prints de alunas dos **cursos presenciais de dissecção e anatomia** da Aline
  (Europa e EUA). É a prova que mais conversa com esta página.
- Rótulo honesto: "Prints reais de alunas da Aline", porque esta aula ainda não aconteceu.

### 9 · Pra quem é / pra quem não é
> **É pra você que:**
> - já fez curso e ainda hesita em algumas regiões;
> - está começando e quer aprender no lugar certo, antes de pegar vício;
> - sonha em estudar em peças fresh frozen e ainda não pôde ir;
> - quer explicar para a paciente o que está fazendo, com segurança.
>
> Biomédicas, dentistas, enfermeiras, farmacêuticas, fisioterapeutas e esteticistas.
>
> **Não é pra você se:**
> - procura um curso prático com certificado;
> - quer aprender captação ou marketing (esta aula é de anatomia);
> - não consegue estar ao vivo no dia 6, às 20h (não tem gravação).

*Por quê:* responde "isso é pra mim?". O "não é" filtra quem pediria reembolso e aumenta a confiança
de quem fica.

### 10 · Como funciona (3 passos)
1. **Garanta o seu ingresso** no Pix ou no cartão em até 12x.
2. **Entre no grupo de WhatsApp.** O link aparece na página de obrigado.
3. **Dia 6/10, às 20h,** o link da sala chega no grupo.

### 11 · Oferta
Card do ingresso com: aula ao vivo de ~90 min · tira-dúvidas ao vivo · link privado. **R$67** ou
12x de R$6,92 · Pix. Garantia de 7 dias colada no preço. "Inscrições encerram às 20h do dia 6 ·
poucas vagas." **Sem** "de R$197" e **sem** o parágrafo da Filgueiras Academy.

### 12 · FAQ (perguntas novas em negrito)
- **O que é fresh frozen?**
- **Vou ver imagens de cadáver? São fortes?** Sim, a aula mostra imagens reais de dissecção. **[a Aline define o tom da resposta: o que aparece e com que cuidado]**
- **A aula é transmitida de dentro de um laboratório?** Não. É uma aula ao vivo de estúdio, em que a Aline mostra fotos e vídeos das dissecções que ela fez em cadáver fresh frozen e explica cada estrutura.
- **Substitui um curso presencial em fresh frozen?** Não, e explicar por quê.
- Já fiz curso de harmonização. Vai repetir o que eu sei?
- Estou começando. Aproveito?
- Tem gravação? Tem certificado?
- Como recebo o acesso? · Posso parcelar? · E se não for pra mim? (garantia)

### 13 · CTA final
> **H2:** Na próxima vez que chegar perto da glabela, *aplique com calma.*
> CTA + garantia + data.

### Meta
- **title:** "Por Dentro da Face · Aplique com segurança, sem medo de intercorrência · Dra. Aline Filgueiras · 06/10"
- **description:** "Aplique com segurança e entregue resultado, sem medo de intercorrência. Aula ao vivo
  com a Dra. Aline Filgueiras, com o que ela viu dissecando peças fresh frozen nos EUA. 6 de outubro, 20h. R$67."

---

## 7. Oferta e preço (skill *offers*, em debate)

1. **Tirar o "de R$197 por R$67".** Se o ingresso nunca custou R$197, é uma âncora inventada, e o
   CDC (art. 37) e o Procon tratam isso como publicidade enganosa. Além disso, profissionais de saúde
   estão acostumadas a desconfiar de "de/por". A âncora do mercado (R$6.600+ no presencial) é real e
   muito mais forte.
2. **"Sem gravação" é faca de dois gumes.** Cria urgência, mas o público tem filhos, trabalha em CLT
   ou em 2 empregos e atende à noite (a pesquisa mostra isso várias vezes). **Proposta de debate:**
   liberar o replay por 48h só para quem comprou (tira a objeção e mantém a urgência para comprar
   antes do dia 6). Se a Aline não quiser, a página continua como está, deixando isso claro.
3. **Garantia de 7 dias:** já existe e fica colada no preço e no CTA final.
4. **"A nova fase":** se o fim da aula tem uma oferta (plataforma, pós, imersão), a página pode
   dizer de forma clara que haverá "uma condição especial para quem estiver na sala". "Ver a nova
   fase nascer" não quer dizer nada para quem é de fora.

---

## 8. Compliance e ética (não negociável)

- **Nenhuma foto de peça anatômica ou de cadáver na página nem nos anúncios.** Só fotos da Aline, do
  laboratório, das luvas e das mesas. As instituições costumam proibir imagem de doador, é uma
  questão de respeito ao doador, e a Meta derruba anúncio com esse tipo de imagem. A FAQ avisa com
  honestidade o que aparece na aula.
- Nada de antes e depois, de promessa de resultado clínico ou de "zero intercorrência".
- Nada de promessa financeira (agenda cheia, faturamento).
- Nada sobre qual profissão "pode" aplicar. O cenário regulatório de 2026 é sensível (ver
  `docs/criativos/README.md`).
- Não dizer que a aula é igual a um hands-on.
- Números de concorrentes só com a fonte conferida.

---

## 9. O que preciso da Aline (sem isso a página não pode ser escrita de forma honesta)

1. **Como a aula é transmitida?** Ao vivo de um laboratório ou de estúdio, mostrando fotos e vídeos
   gravados das dissecções? As LPs dizem "direto da mesa de dissecção". Se não for literal, a
   gente ajusta.
2. **O que aparece na tela:** imagens de peças (dela, autorizadas?), ilustrações ou só a explicação?
3. **Detalhes do fresh frozen nos EUA:** cidade, instituição, ano e duração. **Cursos na Europa:**
   países, instituições e quantas turmas.
4. **Nos cursos, ela injetou produto na peça e dissecou para ver onde ele foi parar?** Se sim, esse
   é o argumento mais forte da página ("eu vi onde o preenchedor vai parar").
5. **Roteiro da aula** em blocos (seção 6.5).
6. **A Aline tem um curso ou imersão presencial em dissecção** (a pesquisa fala em "seu curso nos
   EUA" e "sua imersão")? É esse o produto da "nova fase"? Isso muda a página inteira: a aula vira a
   porta de entrada para esse sonho.
7. **Prints de alunas** dos cursos presenciais de anatomia.
8. **Fisioterapeutas** entram? (D7)
9. **Replay de 48h?** (seção 7.2)
10. **De onde vem o "de R$197"?**
11. **A comparação atlas × formol × fresh frozen** está tecnicamente correta do jeito que ela diria?

---

## 10. Plano de teste e medição

- **Se for para esta aula (D1):** desligar as variantes sem VSL, a não ser que os números mostrem o
  contrário, e rodar `/` (controle) × `/fresh` em 50/50 no mesmo conjunto de anúncios, com o mesmo
  criativo e mudando só a URL. Com poucos dias, não vai dar para ter significância estatística.
  Então a decisão sai dos **indicadores que aparecem antes da compra**:
  - clique no CTA ÷ visitas (meta: +30% sobre a `/`);
  - início de checkout ÷ visitas;
  - scroll até 50% e play da VSL;
  - custo por compra (a decisão final).
- **Se for para o próximo lançamento:** dá para gravar uma VSL nova só sobre dissecção e fresh
  frozen, colher os prints das alunas do presencial e testar a headline A × B com volume.
- **Em qualquer um dos casos:** corrigir já nas páginas atuais a ordem do vídeo no mobile (seção 1).
  É o ganho mais barato de todos.
- **Rastreamento:** a `/fresh` usa o mesmo `utm_campaign` (`live-por-dentro-da-face`) e o
  `utm_content` do anúncio. O caminho da página já separa a variante no GA4.

---

## 11. Próximos passos

1. Você me passa os números do funil (seção 1) e as respostas das decisões D1–D7.
2. A Aline responde a seção 9.
3. Eu fecho a copy final e faço o mock do hero (Inter × Fraunces) para aprovar.
4. Implemento a `/fresh` reaproveitando `Authority`, `Countdown`, `CtaButton`, `StickyCta`,
   `OfertaPreco` e os componentes de FAQ, e crio os que faltam (Mecanismo, Roteiro, Pra quem é
   / não é, Como funciona).
5. Build, revisão no celular e no desktop e publicação.
