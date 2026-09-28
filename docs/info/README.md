# LP `/info` · Protocolo de Resgate Vascular (+ aula ao vivo de bônus)

> **28/09/2026: troca de produto.** O kit *Mapa das Intercorrências* foi descartado (a Aline não
> conseguiu validar o conteúdo) e substituído pelo **Protocolo de Resgate Vascular**, feito só com
> os dois protocolos que a Aline usa: *Protocolo Intercorrências* (oclusão) e *Protocolo Necrose*.
> Mesmo checkout, mesmo preço e mesmo "de" do bump. Quem comprou o Mapa recebe o Protocolo no lugar
> assim que os arquivos estiverem prontos (mensagem na seção 5.2). **Entrega imediata:** quem
> compra agora recebe os arquivos no WhatsApp logo após a confirmação do pagamento.

> **28/09/2026: padrão da `/fresh`.** A `/info` passou a seguir a `/fresh` (`docs/fresh/README.md`):
> headline de resultado (pré-headline com a dor, H1 em Inter com o grifo só na parte final),
> títulos das seções com destaque só em cor (`components/fresh/Titulo`), seção nova "O que muda na
> sua cadeira", e o CTA **"Quero o Protocolo + a aula"**, que abre o mesmo modal da `/lp2`/`/fresh`
> (`components/info/IngressoInfo.tsx`). O Protocolo é o produto principal em todos os textos; o
> ingresso é o da aula de presente, e a página avisa isso antes do clique (linha abaixo do CTA,
> card e passos da oferta, FAQ). **O preço (R$97) só aparece no ingresso emitido**, ao lado
> do comparativo `components/info/AncoraIngresso.tsx`. A âncora é o **total de R$306,90**
> (Protocolo "de R$109,90" + aula "de R$197", o mesmo "de" da `/lp2`), **só no ingresso emitido**:
> "de R$306,90 por R$97 · 68% de desconto". A página não mostra nenhum valor em R$; só a comparação com a seringa, na oferta. Checkout novo: `O841FD9F7`.

O Protocolo é vendido de duas formas:
- **Order bump** (R$29,90, "de R$109,90") no checkout da aula **Por Dentro da Face** (R$67,
  06/10/2026 às 20h, sem gravação).
- **Produto principal na `/info`** (R$97), com a aula de bônus até a data dela.

Endereços e arquivos:
- **Página:** `https://live.alinefilgueiras.com.br/info` (`app/info/page.tsx`)
- **Obrigado:** `https://live.alinefilgueiras.com.br/info/obrigado`. É o redirecionamento
  pós-compra da oferta "Protocolo + aula" na Ticto.
- **Oferta (fonte única):** `lib/ofertaKit.ts`
- **Componentes:** `components/info/`
- **Produto (fonte do PDF, cards e imagens):** `docs/kit-protocolo/`. Fica **só local**: está no
  `.gitignore` porque o repositório é **público** (produto pago + fotos de paciente). Ver seção 7.

## 1. Oferta

| | Na página | No ingresso emitido |
|---|---|---|
| Protocolo de Resgate Vascular | sem valor | ~~R$109,90~~ (mesmo "de" do bump na Ticto) |
| Aula ao vivo Por Dentro da Face | "de presente", sem valor | ~~R$197~~ de presente (`AULA_VALOR_DE` em `lib/lotes.ts`, o "de" da `/lp2`) |
| **Valor total** | não aparece | ~~R$306,90~~ |
| **Você paga** | não aparece ("o valor aparece quando você emite o ingresso") | **R$97** ou 12x de R$10,03 (68% de desconto) |

Checkout: `https://payment.ticto.app/O841FD9F7` (trocado em 28/09; antes `O74848DBC`).

**Âncoras (textos em `components/info/ancora.ts`):** a ancoragem com valores (**total de R$306,90**)
fica **só no ingresso emitido**. A **seringa** ("O Protocolo e a aula custam menos que uma seringa de
preenchedor", sem número) fica na oferta e no ingresso, e o **custo de não ter o
protocolo**, sem número ("Uma hora de dúvida, um frasco a mais ou uma paciente que perde a confiança custam mais
do que o protocolo inteiro") no CTA final.

**Fluxo do CTA:** até 06/10 às 20h, o botão ("Quero o Protocolo + a aula", com a linha "No próximo
passo, você emite o ingresso da aula de presente e vê o valor" logo abaixo) abre o ingresso ("Seu
Protocolo está separado · falta só o ingresso da aula"; nome + área, dados só no navegador),
que mostra o preço, o comparativo e a reserva da vaga na aula, e só então leva ao checkout. Depois
da aula (fase `soKit`) não há ingresso: o botão vai direto ao `checkoutUrl` da fase (ou fica "Em
breve" enquanto ele não existir). Eventos: `AbrirIngresso` no botão da página, `Lead` ao emitir e
`ClickCheckout` no "Confirmar meu ingresso", todos com `content_name: Protocolo de Resgate
Vascular` e `produto: kit-protocolo`.

**Por que R$97.** Quem comprou aula + bump pagou R$67 + R$29,90 = **R$96,90**. Qualquer preço
abaixo disso faria essa compradora ter pago mais caro que a nova. **Nunca baixe o protocolo + aula
para menos de R$96,90.**

**Fases (troca sozinha):**
- `comBonus`, até 06/10 às 20h: protocolo + aula, R$97, com contador até a aula.
- `soKit`, depois da aula: sai o bônus. Não há checkout só do protocolo ainda, então o botão fica
  em "Em breve". Quando decidir (sugestão: testar entre R$47 e R$67, nunca abaixo dos R$29,90 do
  bump), preencha `price`, `priceLabel`, `parcela12x` e `checkoutUrl` da fase `soKit`.
- Para pré-visualizar: `/info?preview=2026-10-07T00:00:00-03:00`.

## 2. O produto

**Nome:** Protocolo de Resgate Vascular
**Subtítulo:** Oclusão e necrose: o que fazer do primeiro minuto à cicatrização.

**Regra de conteúdo:** só o que está nos dois protocolos da Aline. O design organiza e transforma
em ferramenta (fluxograma, régua de horas, ficha, cards, checklist), sem acrescentar conduta. As
doses estão literais, e as dúvidas de unidade e posologia estão na lista de validação
(`docs/kit-protocolo/validacao-aline.md`).

**Entregáveis** (5 arquivos, enviados pelo WhatsApp):

| # | Arquivo | Para quê |
|---|---|---|
| 1 | `Protocolo-de-Resgate-Vascular.pdf` (22 págs., A4) | Estudar e consultar |
| 2 | `Prancha-de-Parede-Oclusao.pdf` (1 pág.) | Imprimir e deixar na sala |
| 3 | `Ficha-de-Acompanhamento.pdf` (1 pág.) | Imprimir uma por caso |
| 4 | `card-oclusao.png` (1080×1920) | Enviar à paciente ao liberá-la |
| 5 | `card-necrose.png` (1080×1920) | Enviar no início do tratamento da necrose |

Roteiro do PDF:
1. Capa.
2. Carta da Aline.
3. Como usar.
4. Linha do tempo.
5. **Oclusão** (págs. 5-11): abertura, prancha de parede, passos 1-2, passo 3, passos 4-6,
   medicações e ficha.
6. **Necrose** (págs. 12-18): abertura, porta de entrada e fases, infecção, cicatrização,
   acompanhamento e calendário, medicações, evolução de um caso real.
7. Cards (págs. 19-20), checklist da maleta (pág. 21) e fechamento com aviso legal (pág. 22).

## 3. Leitura crítica que guiou produto e página

1. **O conteúdo é curto (13 slides).** O valor percebido vem de transformar texto corrido em
   ferramentas de uso na emergência: prancha, ficha, cards e checklist. Não de páginas "enchidas".
2. **A dor é o minuto zero.** O protocolo responde literalmente às perguntas que paralisam: o que
   faço primeiro? gelo ou calor? não reverteu, repito? quanto? até quando? mando pra casa? pústulas
   no dia seguinte é piora? A seção Problema da LP usa exatamente essas perguntas.
3. **Gancho contraintuitivo do próprio conteúdo:** "NUNCA USAR GELO! Precisamos de vasodilatação".
   Virou a seção `NuncaGelo` e é o melhor hook para bump e anúncios.
4. **Alívio real, também do conteúdo:** "A maioria dos casos reverte na primeira aplicação de
   hialuronidase." Vende calma sem prometer "zero intercorrência".
5. **Medicamentos de prescrição.** Isordil, AAS, Clavulin e Predsim entram **só dentro do produto**,
   com aviso forte ("prescrição conforme a sua habilitação profissional"). Na LP, no bump e nos
   anúncios, **nunca aparece nome de medicamento**: a Meta restringe anúncio de medicamento de
   prescrição. As imagens da LP são renderizadas com `?lp=1`, que desfoca o painel de medicações.
6. **Fotos de necrose:** só dentro do produto, recortadas para não identificar a paciente (os
   originais eram prints de WhatsApp com nome e rosto). Nunca na LP, no bump ou nos anúncios. **A
   Aline precisa confirmar o consentimento da paciente**; sem isso, a página 18 sai do PDF.
7. **Compradoras do Mapa** foram prometidas "4 pranchas, zonas, glossário". A troca é comunicada
   como upgrade honesto e a garantia de 7 dias cobre quem não quiser.
8. **Sem depoimento do produto novo.** Nada foi inventado: a prova é a Aline e as páginas reais.

## 4. Nome e descrições (foco em conversão)

Base: skill *copywriting*.
- Human Action Model: desconforto → visão → caminho.
- Teste "Now you can…" em toda headline.
- Clareza acima de esperteza, sem exclamação.
- Nenhum número ou promessa fora do conteúdo.

**Nome do produto na Ticto:** Protocolo de Resgate Vascular: oclusão e necrose

**Promessa (1 linha):** O que fazer, minuto a minuto, se uma oclusão acontecer na sua cadeira.

### 4.1 Caixa do order bump (checkout da aula)

- **Título:** Sim, quero o Protocolo de Resgate Vascular da Dra. Aline por R$29,90
- **Descrição (completa, se a caixa aceitar lista):**
  > Se uma oclusão acontecer na sua cadeira, você vai saber o que fazer no primeiro minuto. É o
  > protocolo que a Dra. Aline usa, pronto pra usar no dia em que precisar. Você recebe na
  > hora, no WhatsApp:
  >
  > • **Protocolo completo em PDF (22 páginas):** os 6 passos da oclusão (o que fazer nos primeiros
  > segundos, por que nunca usar gelo, a hialuronidase por encharcamento, o que repetir a cada hora,
  > quando liberar a paciente) e os 9 passos do cuidado da necrose até a cicatrização
  > • **Medicações que a Aline utiliza** em cada fase, com posologia e o momento de começar
  > • **Prancha de parede:** a oclusão inteira em uma folha, pra imprimir e deixar na sala
  > • **Ficha de acompanhamento hora a hora,** pra preencher em cada caso
  > • **2 cards pra enviar à paciente** no WhatsApp: o que fazer em casa depois da oclusão e os
  > cuidados até cicatrizar
  > • **Calendário da recuperação, checklist da maleta e a evolução de um caso real** acompanhado
  > pela Aline
  >
  > De R$109,90 por R$29,90, só neste checkout.

- **Descrição (compacta, se a caixa for pequena, ~300 caracteres):**
  > O protocolo de oclusão e necrose que a Dra. Aline usa, do primeiro minuto à cicatrização. Você
  > recebe: PDF com os passos e as medicações com posologia, prancha de parede pra imprimir, ficha
  > hora a hora e 2 cards pra enviar à paciente. Chega na hora no seu WhatsApp. R$29,90, só aqui.
- **Imagem:** `docs/kit-protocolo/out/Imagem-Order-Bump.png` (1080×1080: capa, prancha com as
  medicações desfocadas e card no celular).
- **Variante B do título (teste):** Adicionar o protocolo de oclusão e necrose que a Aline usa
  (R$29,90)

### 4.2 Descrição curta (checkout "Protocolo + aula")

> O passo a passo de oclusão e necrose que a Dra. Aline usa, do primeiro minuto à cicatrização.
> Prancha de parede, ficha hora a hora, medicações com posologia e 2 cards para a paciente. De
> presente: a aula ao vivo Por Dentro da Face, 06/10 às 20h.

### 4.3 Descrição completa (página do produto na Ticto)

> **O que fazer, minuto a minuto, se uma oclusão acontecer na sua cadeira.**
>
> A cor muda no meio da aplicação. Você massageia, esquenta ou esfria? Aplicou a hialuronidase e
> não reverteu: repete, quanto, por quanto tempo? Já se passaram horas: libera a paciente ou não?
> E se ela voltar no dia seguinte com pústulas?
>
> O Protocolo de Resgate Vascular responde cada uma dessas perguntas, na ordem em que elas
> aparecem. É o protocolo de conduta que a Dra. Aline Filgueiras utiliza para oclusão e necrose,
> organizado pra você ter na mão no dia em que precisar.
>
> **O que você recebe**
> - **Protocolo completo (PDF, 22 páginas em A4):** os 6 passos da oclusão (do primeiro gesto à
>   hialuronidase por encharcamento e à repetição hora a hora), os 9 passos do cuidado da necrose
>   até a cicatrização, as medicações que a Aline utiliza em cada fase com a posologia, o
>   calendário da recuperação e a evolução de um caso real.
> - **Prancha de parede:** o protocolo de oclusão inteiro em uma folha, com as decisões de sim ou
>   não e a régua das 5 horas. Pra imprimir e deixar na sala de atendimento.
> - **Ficha de acompanhamento hora a hora:** horário, frascos, coloração, teste de pressão,
>   liberação e dia seguinte. Uma por caso.
> - **2 cards para a paciente (PNG, tela de celular):** o que fazer em casa depois da oclusão e os
>   cuidados até cicatrizar. Você coloca seu nome e WhatsApp e envia.
> - **Checklist da maleta:** tudo o que o protocolo usa, pra conferir antes de atender.
>
> **De presente para quem garantir até 06/10: aula ao vivo Por Dentro da Face (valor R$197).** A
> Dra. Aline mostra, nas imagens das dissecções que ela fez em cadáver fresh frozen, o que existe
> embaixo da pele. 6 de outubro de
> 2026, às 20h (Brasília), online, cerca de 90 minutos, sem gravação. O protocolo mostra o que
> fazer. A aula mostra, por dentro, onde tudo acontece.
>
> **Formato:** 5 arquivos digitais, enviados na hora pelo WhatsApp. **Garantia:** 7 dias.
>
> *Material educativo com o protocolo que a Dra. Aline Filgueiras utiliza. Não substitui formação,
> protocolos clínicos oficiais, orientação do seu conselho profissional ou avaliação individual.
> Medicações conforme a sua habilitação profissional.*

### 4.4 Headlines da LP e alternativas para teste A/B (Hero)

- **No ar (28/09, padrão da `/fresh`):** pré-headline "Pra quem já aplica ou quer aplicar e tem medo
  de não saber o que fazer se a cor mudar" + H1 "O passo a passo que a Dra. Aline usa numa oclusão,
  *pra você aplicar sem medo e agir com calma se acontecer.*"
- **A (anterior):** O que fazer, minuto a minuto, se uma oclusão acontecer na sua cadeira.
- **B:** Se a cor mudar no meio da aplicação, você vai saber exatamente o próximo passo.
- **C (hook):** O primeiro impulso numa oclusão é pegar gelo. É exatamente o que a Aline proíbe.

**CTA:** "Quero o Protocolo + a aula" (abre o ingresso da aula de presente, avisado logo abaixo do
botão); no ingresso, "Garantir meu Protocolo + ingresso" leva ao checkout. Depois de 06/10, "Quero o
Protocolo de Resgate Vascular" (direto ao checkout).

### 4.5 Seções da LP (com o porquê)

| # | Seção | Headline | Por quê |
|---|---|---|---|
| 1 | Hero | O passo a passo que a Dra. Aline usa numa oclusão, pra você aplicar sem medo e agir com calma se acontecer. | Resultado no H1 (padrão da `/fresh`), bullets que começam pelo que muda, mockup real na primeira dobra, sem preço. |
| 2 | Problema | Você sabe que é raro. Também sabe que, se acontecer, vai ser na sua cadeira. | As 4 dúvidas do minuto zero, cada uma respondida pelo protocolo. |
| 3 | Nunca gelo | O primeiro impulso é pegar gelo. É o que a Aline proíbe. | Entrega uma regra útil de graça e mostra o nível de detalhe do protocolo. |
| 3b | O que muda | O que muda na sua cadeira a partir de hoje. | Percepção de resultado antes do material (par do "O que você leva" da `/fresh`). |
| 4 | O que tem dentro | Tudo o que você precisa ter na mão, da hora zero aos 60 dias. | 5 páginas reais (versão `?lp=1`). Sem fotos de paciente e sem nome de medicamento. |
| 5 | Como usar | Feito pra ficar à vista, não guardado numa pasta. | Prancha, ficha e cards: não é mais um curso pra assistir. |
| 6 | Cards | Sua paciente vai pra casa sabendo exatamente o que fazer. | Ponte com a dor nº1 (a paciente), sem prometer agenda. |
| 7 | Bônus | Você leva o Protocolo. A aula ao vivo vem de presente. | O bônus completa o protocolo (o que fazer × por dentro, onde acontece). Sem "tira-dúvidas": a aula não tem. |
| 8-9 | Autoridade e prova | (as da `/fresh`) | Foto do laboratório; prints sem promessa de faturamento. |
| 10 | Pra quem é | O Protocolo é pra você que… | Perfis da pesquisa. O "não é pra você" filtra pela atitude e mantém o aviso de que não é curso nem substitui formação. |
| 11-13 | Oferta, FAQ, CTA final | — | FAQ nova (medicações, entrega, impressão, iniciante, formação). |

## 5. WhatsApp

### 5.1 Venda realizada (novas compras)

> Oi, {nome}. Aqui é da equipe da Dra. Aline Filgueiras.
>
> Sua compra do *Protocolo de Resgate Vascular* foi confirmada. Seja muito bem-vinda.
>
> *1. Seus arquivos*
> Aqui estão os 5 arquivos: o protocolo completo, a prancha de parede, a ficha de acompanhamento e
> os dois cards da paciente: {link}
>
> Pra aproveitar desde o primeiro dia:
> • Imprima a prancha de parede e deixe na sala de atendimento. Numa emergência, ninguém procura
> arquivo no celular.
> • Deixe algumas fichas impressas e coloque seu nome e WhatsApp nos dois cards.
>
> *2. Seu presente: aula ao vivo Por Dentro da Face*
> 📅 6 de outubro, às 20h (Brasília)
> 💻 Online, cerca de 90 minutos
>
> Entre no grupo pra receber o link da sala:
> https://chat.whatsapp.com/KmL36ic5sFGFYVCJL6vm7g?s=cl&p=i&mlu=4
>
> A aula é ao vivo e não tem gravação, então já reserva esse horário na agenda.
>
> Qualquer dúvida, é só responder esta mensagem.

### 5.2 Troca, para quem comprou o Mapa (bump ou `/info`), enviar já, com os arquivos

> Oi, {nome}. Aqui é da equipe da Dra. Aline Filgueiras.
>
> Chegou o seu material, com uma novidade. Antes de enviar, a Aline decidiu trocar o Mapa pelo que
> ela mesma usa na clínica: o *Protocolo de Resgate Vascular*, com o passo a passo de oclusão e
> necrose, do primeiro minuto à cicatrização.
>
> São 5 arquivos: o protocolo completo, a prancha de parede pra imprimir, a ficha de
> acompanhamento hora a hora, as medicações que ela utiliza e dois cards pra enviar à paciente.
>
> Aqui está o acesso: {link}
>
> Pra começar: imprima a prancha de parede e deixe na sala de atendimento.
>
> Qualquer dúvida, é só responder esta mensagem.

## 6. Pendências

- [ ] **Aline:** responder `docs/kit-protocolo/validacao-aline.md` e aprovar o PDF de prévia (até
  30/09 12h; sem resposta, entra o texto literal dela).
- [ ] **Aline:** confirmar o consentimento da paciente das fotos de evolução (senão sai a pág. 18).
- [ ] **Ticto:** renomear o produto do bump e o da oferta "Protocolo + aula", colar as descrições
  da seção 4, trocar a imagem do bump e o arquivo de entrega.
- [ ] **Anúncios:** pausar ou trocar os criativos que mostram as pranchas antigas.
- [ ] **Assim que a Ticto estiver atualizada:** enviar a mensagem 5.2 para quem comprou o Mapa
  (elas esperavam receber em 01/10; mandar antes é ponto a favor).
- [ ] Coletar prints de quem comprar o Protocolo e trocar a faixa de `SocialProof`.
- [ ] Depois de 06/10: definir preço e checkout do protocolo sozinho na fase `soKit`.

## 7. Como regenerar o produto e as imagens da LP

Tudo em `docs/kit-protocolo/`, só local (fora do git):

```bash
node docs/kit-protocolo/tools/prep-imagens.mjs   # amplia e recorta ilustrações e fotos
node docs/kit-protocolo/render.mjs               # PDFs, cards, prévias e imagens da LP
node docs/kit-protocolo/render.mjs paisagem      # versão A4 deitada (out/paisagem/)
```

- `render.mjs` usa o Chrome do sistema em modo headless (sem Playwright).
- **Versão paisagem** (A4 deitado, igual ao Kit original): é o mesmo `protocolo.html` com
  `?formato=paisagem`, que carrega `kit-paisagem.css`. O conteúdo é um só; qualquer correção de
  texto vale para as duas versões. Rode os dois comandos depois de editar.
- Saída: `docs/kit-protocolo/out/`, com os 5 entregáveis e `Imagem-Order-Bump.png`.
- Imagens da LP: `public/images/info/protocolo-*.webp` e `card-*.webp`. Estas entram no git e só
  mostram páginas sem foto de paciente e sem nome de medicamento.
- As imagens do Mapa antigo (`prancha-*`, `tabela-zonas`, `glossario`, `referencias`,
  `hero-mapa`, `capa`, `card-paciente`) não são mais usadas.
