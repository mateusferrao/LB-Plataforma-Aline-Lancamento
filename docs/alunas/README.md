# LP `/alunas` · Ex-alunas da Aline (aula ao vivo + Protocolo de presente)

Oferta exclusiva para as **~1.000 ex-alunas** da Aline, de cursos presenciais e online: a aula
ao vivo **Por Dentro da Face** (06/10/2026, 20h) pelo **mesmo preço de todo mundo, R$67**, com o
**Protocolo de Resgate Vascular** de presente (~~R$109,90~~).

- **Página:** `https://live.alinefilgueiras.com.br/alunas` (`app/alunas/page.tsx`). É `noindex` e
  **não entra em anúncio**: o link vai só na mensagem de WhatsApp.
- **Checkout:** o mesmo da `/info` ("Protocolo + aula", **R$96,90** na Ticto), com o cupom
  **EXALUNAS** (−R$29,90) já aplicado pelo link: `https://payment.ticto.app/O841FD9F7?coupon=EXALUNAS`,
  o que dá **R$67**. A página também mostra o código perto dos botões, caso ele não entre sozinho.
- **Obrigado:** o pós-compra é o da oferta da `/info` (`/info/obrigado`), que fala do Protocolo e do
  grupo da aula. A `/alunas/obrigado` fica pronta, mas sem uso. Para usá-la, seria preciso uma oferta
  separada na Ticto.
- **Oferta (fonte única):** `lib/ofertaAlunas.ts`
- **Componentes:** `components/alunas/`. Reaproveita `components/Titulo.tsx`, a seção
  `OQueVoceLeva` e as âncoras da `/fresh` (`components/fresh/ancora.ts`).

## 1. Decisões (29/09) e por quê

Base: skills *offers*, *copywriting*, *marketing-psychology* e *sms*.

| Decisão | Por quê |
|---|---|
| **Aula a R$67 + Protocolo de presente** | O benefício de ex-aluna é o presente, não um desconto. A aula não fica mais barata que o preço público, e um brinde de fidelidade é defensável se alguém de fora descobrir. A skill *offers* diz que desconto só se justifica para recompensar quem já é cliente. |
| **Âncora: "de R$306,90 por R$67", 78% de desconto** | Aula "de R$197" (`AULA_VALOR_DE`, o mesmo "de" da `/lp2` e da `/info`) + Protocolo "de R$109,90" (o "de" do order bump). É a mesma conta da `/info`, calculada em `lib/ofertaAlunas.ts`, e aparece no Hero e no card da oferta. |
| **Checkout da `/info` + cupom EXALUNAS** (R$96,90 − R$29,90 = R$67) | Não precisa de oferta nova: entrega os dois (aula e Protocolo) automaticamente. As vendas da lista são medidas pelo uso do cupom e pelas UTMs `lista-alunas`. **Risco:** o cupom vale para esse checkout inteiro, então quem receber o código repassado também paga R$67. |
| **Preço na página e CTA direto ao checkout**, sem o ingresso emitido | É o público mais quente da marca. O ingresso serve para segurar tráfego frio; aqui ele só acrescentaria um passo. |
| **Quem já comprou a aula não ganha o presente** | A FAQ responde com honestidade e oferece o Protocolo por R$29,90, o mesmo valor do order bump. |
| **A urgência é real:** o presente vale até a aula começar (06/10, 20h) | Nada de cronômetro de sessão. Depois das 20h, o botão vira "quero saber da próxima turma". |

**Pontos de atenção:**
- A página é pública para quem tem o link. Se o link circular, alguém de fora consegue comprar. É um
  vazamento aceitável, porque o preço da aula é o mesmo de sempre.
- **Teste obrigatório antes do disparo:** clique num botão da página publicada, confira se o
  checkout abre em **R$67** com o cupom aplicado e se as UTMs aparecem na URL (o ticto-echo acrescenta
  as UTMs ao link, que já tem o `?coupon=`).

## 1b. Ajustes de 01/10 (Hormozi)

Dois disparos já foram feitos pra lista inteira, com resultado fraco. Mudanças, com o princípio:

| Mudança | Por quê |
|---|---|
| **O presente vem primeiro** no bloco de preço (`components/alunas/PrecoPresente.tsx`): "Protocolo de Resgate Vascular · grátis", depois o ingresso, depois o total riscado e o %. Mesmos números. | Money Models: "focus on the bonus, not the membership"; "grátis" converte mais que "% off". |
| **Garantia de Presença** no lugar do "7 dias" solto (card, FAQ e CTA final). Termos em `lib/ofertaFresh.ts`. | Offers: garantia com nome e estrutura "se não X em Y, fazemos Z". |
| **"Tem gravação?"** com a resposta honesta: sem replay avulso; a gravação entra na condição da plataforma, apresentada na sala. | Offers: resolver a objeção apresentada (é a nº 1 no WhatsApp). |
| **Pedido de indicação** em uma linha, na oferta e no final: "Vem com uma colega ex-aluna: o mesmo link vale pra ela." Sem incentivo novo (nenhum foi autorizado). | Leads: pedir indicação na hora da compra, como oferta. |
| **Mensagens 3–5** (seção 3b): reativação em 9 palavras pra quem não clicou, tease na véspera e três toques no dia. | Leads: whisper → tease → shout; "Are you still looking to…?"; Offers: as últimas 4 horas fazem 50–60% das vendas. |

## 2. Estrutura da página

1. **Hero:**
   - pré-headline: "Exclusivo para quem já estudou com a Aline";
   - H1: "Você já aprendeu a técnica comigo. *Agora vem ver a face por dentro, em cadáver fresh
     frozen.*" (grifo na parte final);
   - a ancoragem (aula ~~R$197~~ + Protocolo ~~R$109,90~~ de presente = ~~R$306,90~~, **R$67**, 78% de
     desconto), o CTA "Garantir meu ingresso de ex-aluna" e o contador.
2. **"Enquanto você aplicava, a Aline foi mais fundo":** a Aline de agora, com a dissecção em fresh
   frozen nos EUA e os cursos internacionais.
3. **"O que muda na sua cadeira":** a mesma seção da `/fresh`.
4. **"Seu presente de ex-aluna":** os 5 entregáveis do Protocolo e o mockup. **Nenhum nome de
   medicamento**, a mesma regra da `/info`.
5. **"Quanto vale":** o curso internacional de cerca de R$35 mil (referência genérica) × R$67, e a
   seringa.
6. **Oferta:** o card com o preço, o presente, a garantia de 7 dias e os 3 passos.
7. **FAQ:** curso online vale, como recebo o Protocolo, **já comprei a aula**, aula online,
   gravação, parcelamento e garantia.
8. **CTA final:** "Você começou comigo. Vem ver o que eu vi por dentro."

## 3. Mensagem 1 · para as ex-alunas

**Regra (skill *sms*):** a primeira linha é o que aparece na notificação. É um gancho em caixa alta,
que precisa parar o dedo e ser verdade. Depois vêm a identificação de quem manda, um link só e a
opção de sair.

**Ganchos para testar** (se der, divida a lista em lotes, um gancho por lote, e compare os cliques):
- **A · identidade (recomendado):** *EX-ALUNA DA ALINE: ESSA MENSAGEM É SÓ PRA VOCÊ.*
- **B · contraintuitivo, do próprio Protocolo:** *NUNCA USE GELO NUMA OCLUSÃO.*
- **C · presente:** *{NOME}, A ALINE SEPAROU UM PRESENTE PRA VOCÊ.* A frase seguinte precisa deixar
  claro que o presente vem com o ingresso, senão soa enganosa.

**Texto (com o gancho A):**

> *EX-ALUNA DA ALINE: ESSA MENSAGEM É SÓ PRA VOCÊ.*
>
> Oi, {primeiro nome}. Aqui é da equipe da Dra. Aline Filgueiras.
>
> No dia *6/10, às 20h*, a Aline faz uma aula ao vivo: *Por Dentro da Face*. Ela mostra, com as
> imagens das dissecções que fez em cadáver fresh frozen, onde estão os riscos da face e por que cada
> rosto responde de um jeito.
>
> Pra quem já estudou com ela, o ingresso vem com um presente: o *Protocolo de Resgate Vascular*, o
> passo a passo de oclusão e necrose que ela usa, do primeiro minuto à cicatrização.
>
> Aula (R$197) + Protocolo (R$109,90) = ~~R$306,90~~. *Pra você, ex-aluna: R$67.*
>
> O presente vale até a aula começar:
> https://live.alinefilgueiras.com.br/alunas?utm_source=whatsapp&utm_medium=lista-alunas&utm_campaign=live-por-dentro-da-face&utm_content=gancho-a
>
> (Se não quiser receber nossas mensagens, responde SAIR.)

**Lembretes, só para quem não clicou:**
- **03/10:**
  > *FALTAM 3 DIAS PRO SEU PRESENTE DE EX-ALUNA.*
  >
  > {primeiro nome}, o Protocolo de Resgate Vascular continua separado pra você, junto com o
  > ingresso da aula ao vivo do dia 6, às 20h. Depois que a aula começar, o presente sai:
  > {link, utm_content=lembrete-1}
- **06/10, de manhã:**
  > *HOJE, 20H: ÚLTIMO DIA DO SEU PRESENTE.*
  >
  > A aula ao vivo da Aline é hoje, às 20h, e não tem gravação. O Protocolo de presente vale até
  > ela começar: {link, utm_content=ultimo-dia}

**Como enviar:**
- Pela API oficial do WhatsApp ou por uma ferramenta de disparo, **em lotes**, com o nome da pessoa.
  Nunca mil mensagens de uma vez pelo mesmo número, porque o WhatsApp bane o número.
- O "responde SAIR" atende a LGPD: são ex-clientes, mas a saída precisa ser fácil.

## 3b. Mensagens 3–5 · depois dos dois primeiros disparos (01/10)

Regras: só pra quem **não clicou** nos disparos anteriores (quem clicou e não comprou recebe só a
M5); dar antes de pedir (a M3 entrega a regra do gelo inteira); um link por mensagem; "responde
SAIR" em todas; lotes, nunca a lista de uma vez.

**M3 · 02/10 · reativação (dá a dica, depois pergunta em 9 palavras):**
> *NUNCA USE GELO NUMA OCLUSÃO.*
>
> Oi, {primeiro nome}. Aqui é da equipe da Dra. Aline. Uma regra do Protocolo dela que vale guardar:
> se a cor mudar no meio da aplicação, o primeiro impulso é pegar gelo, e é exatamente o que ela
> proíbe. A oclusão precisa de vasodilatação, não de frio.
>
> Esse Protocolo inteiro vai de presente pra quem já foi aluna e garantir o ingresso da aula ao
> vivo do dia 6, às 20h.
>
> Você ainda quer ver a face por dentro, {primeiro nome}?
> https://live.alinefilgueiras.com.br/alunas?utm_source=whatsapp&utm_medium=lista-alunas&utm_campaign=live-por-dentro-da-face&utm_content=m3-reativacao
>
> (Se não quiser receber nossas mensagens, responde SAIR.)

**M4 · 05/10 · véspera (o que ela vai ver + prazo do presente):**
> *AMANHÃ, 20H: O QUE A ALINE VIU POR DENTRO.*
>
> {primeiro nome}, amanhã a Aline mostra ao vivo, nas imagens das dissecções que fez em cadáver
> fresh frozen, até onde ir perto das áreas de risco e por que a mesma técnica fica linda numa
> paciente e sem graça na outra.
>
> Pra ex-aluna, o ingresso (R$67) vem com o Protocolo de Resgate Vascular de presente. O presente
> vale até a aula começar, amanhã às 20h.
>
> Vem com uma colega ex-aluna: o mesmo link vale pra ela.
> {link, utm_content=m4-vespera}

**M5 · 06/10 · dia da aula, três toques (só pra quem ainda não comprou):**
- **9h:** *HOJE, 20H.* "A aula ao vivo da Aline é hoje. O Protocolo de presente vale até ela
  começar. Garantia de Presença: se você estiver ao vivo e achar que não valeu, devolvemos."
  {link, utm_content=m5-manha}
- **17h:** *FALTAM 3 HORAS.* "Às 20h fecham as inscrições e o presente sai. Sem replay avulso."
  {link, utm_content=m5-tarde}
- **19h30:** *ÚLTIMA CHAMADA.* "Começa em 30 minutos. É a última mensagem sobre a aula."
  {link, utm_content=m5-ultima}

## 4. Mensagem 2 · no grupo da aula, para quem não levou o Protocolo

> *SE ACONTECER UMA OCLUSÃO NA SUA CADEIRA, VOCÊ SABE O QUE FAZER NO PRIMEIRO MINUTO?*
>
> Pessoal, aqui é da equipe da Dra. Aline.
>
> Na aula do dia 6, ela vai mostrar onde estão os riscos da face. E muita gente perguntou o que fazer
> se uma oclusão acontecer. Isso está no *Protocolo de Resgate Vascular*: o passo a passo de oclusão e
> necrose que a Aline usa, com a prancha pra deixar na parede, a ficha hora a hora e 2 cards pra enviar
> à paciente.
>
> Quem levou no checkout pagou R$29,90. Se você não levou, liberamos o mesmo valor aqui, *até a aula
> começar (06/10, 20h)*: {link do checkout R$29,90}
>
> Se você já tem o Protocolo, pode ignorar esta mensagem.

- **Quando:** 01 ou 02/10, com um lembrete curto em 06/10 à tarde ("Hoje às 20h começa a aula. O
  Protocolo por R$29,90 fica disponível até ela começar: {link}").
- **Por que o preço fecha a conta:** quem comprou na `/info` pagou R$97 = aula R$67 + ~R$30. Então
  R$29,90 no grupo não deixa ninguém em desvantagem.
- **Regra:** nenhum nome de medicamento na mensagem.

## 5. Pendências

- [x] **Checkout:** o da `/info` + cupom EXALUNAS (`lib/ofertaAlunas.ts`).
- [ ] **Testar o clique na página publicada:** R$67 no checkout, cupom aplicado e UTMs na URL.
  Confirmar também a parcela de 12x (a página diz R$6,92).
- [ ] **Ticto:** criar um checkout só do Protocolo por R$29,90, válido até 06/10 às 20h. Preencher
  `protocoloAvulsoUrl` em `lib/ofertaAlunas.ts` (a FAQ passa a mostrar o link) e usar o mesmo link na
  mensagem 2.
- [ ] **Lista:** exportar as ex-alunas com primeiro nome e telefone e escolher a ferramenta de
  disparo.
- [ ] **Agente de IA:** as notas já estão em `docs/agente-ia/01-playbook-vendas.md` e `02-faq.md`.
