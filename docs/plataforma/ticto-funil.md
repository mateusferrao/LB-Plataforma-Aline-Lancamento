# Ticto · Funil de vendas da Filgueiras Academy

Este é o passo a passo para montar o funil das três ofertas na Ticto:

- **Academy:** R$1.797, com duas ofertas, a da sala e a evergreen.
- **Anatomia (downsell):** R$797.
- **Upgrade:** R$1.000.

Os produtos, as ofertas e os templates estão em [`ticto.md`](ticto.md), e este guia parte do princípio de que já estão criados. Os campos e caminhos vêm da [central de ajuda da Ticto](https://help.ticto.com.br/) (consulta de 05/10/2026).

## 0. Como o funil funciona

**O limite da Ticto:** o **Flow**, que é o funil da Ticto, só começa **depois de uma compra**. O upsell e o downsell do Flow aparecem para quem acabou de comprar. Quem desistiu não passa pelo Flow: essa pessoa é recuperada pela tela **Recuperação de compras** (carrinho abandonado e Pix emitido), pelo WhatsApp. Por isso o funil tem duas partes.

```
LP /academy ou sala ─► Academy R$1.797 ─────────────────────────► /academy/obrigado
        │
        └─ não comprou ─► Recuperação de compras (WhatsApp)
                            ├─ 1º: retomar a Academy (sem desconto)
                            └─ 2º, a partir de 07/10: downsell Anatomia R$797
                                         │
                                         ▼  (Flow, pós-compra)
                              /academy/anatomia/upgrade
                              Upsell de 1 clique: Academy por +R$1.000
                                ├─ "Sim": cobra +R$1.000 no cartão (1 clique) ─► /academy/obrigado
                                └─ recusou ─► /academy/anatomia/obrigado
                                               (+ WhatsApp no 7º e no 25º dia)
```

**A lógica do Hormozi (Money Model):**

- A Academy é a oferta principal.
- A anatomia é o **downsell**: menos coisas, não a mesma oferta mais barata.
- O upgrade é o **rollover**: o que ela pagou vira crédito.

Nenhuma etapa dá desconto na Academy. Quem pagou R$1.797 nunca vê ninguém pagar menos pela mesma coisa.

---

## 1. Flow da anatomia: o upsell de 1 clique para a Academy

### 1.0 Criar a oferta do rollover (Academy · Upgrade Anatomia)

O rollover é a **Academy vendida pela diferença** para quem já comprou a anatomia: R$1.797 − R$797 = **R$1.000**. Ele é uma **oferta dentro do produto da Academy**, e não um produto novo, porque libera o mesmo plano de 12 meses na MemberKit.

**Passo a passo:**

1. **Meus Produtos →** Filgueiras Academy · Consulta, Agulha e Espelho **→ Ações → Ofertas → cadastrar nova oferta.**
2. Preencher a oferta:

   | Campo | Preencher |
   |---|---|
   | **Nome da oferta** | Academy · Upgrade Anatomia |
   | **Valor** | R$1.000,00 |
   | **Formas de pagamento** | Cartão e Pix. Sem boleto |
   | **Parcelamento** | Até 12x, com **juros pagos pelo comprador**. Pela conta, dá cerca de 12x de R$103,42. Conferir no checkout, porque a Ticto arredonda (foi o caso dos R$82,42 da anatomia) |
   | **Área de membros** | O **mesmo plano da Academy na MemberKit (12 meses)** das ofertas Sala e Evergreen. O plano de 6 meses da anatomia continua ativo até vencer e não atrapalha |
   | **Afiliados** | Não |
   | **Redirecionamento pós-compra** | `https://live.alinefilgueiras.com.br/academy/obrigado` |
   | **Template de checkout** | Um template novo, **"Upgrade"** (item 3) |

3. Criar o **template "Upgrade"** (Ações → Templates de checkout → novo template) e ligar à oferta:
   - **Banner ou texto do topo:** `Upgrade para a Filgueiras Academy: você paga só a diferença do curso de anatomia que já comprou.`
   - **Lista de benefícios**, se o template tiver o campo: Plataforma Filgueiras Academy (R$1.497) · 6 encontros ao vivo no ano (R$5.000) · aula ao vivo de casos com a Aline (R$1.000) · preferência nos cursos presenciais · 12 meses de acesso em vez de 6. **Hoje: só a diferença, R$1.000.**
   - **Selo de garantia:** Garantia Mão Segura, 30 dias, com a mesma legenda dos outros templates.
   - **Cupom:** desligado. **Contador:** não usar. **Order bump:** nenhum. **Notificações:** desligadas, porque é uma compra individual e prova social aqui não faz sentido.
   - **Telefone e confirmação de e-mail:** iguais aos da Academy.
4. Salvar e **copiar o link da oferta**. Ele é usado em três lugares:
   - a etapa de upsell do Flow (item 1.2);
   - as mensagens do 7º e do 25º dia (item 3.3);
   - `UPGRADE_ANATOMIA_URL` em `lib/ofertaAcademy.ts`, a reserva da página de upsell. **Me mandem o link** que eu colo e publico.
5. **Fazer uma compra-teste** e conferir:
   - a parcela;
   - o acesso de 12 meses chegando na MemberKit;
   - o redirecionamento.

**Dois cuidados, porque a Ticto não restringe a oferta por comprador:**

- **O link nunca é publicado.** Ele só aparece na página de upsell, que é `noindex` e só é alcançada depois da compra da anatomia, e no WhatsApp de quem comprou a anatomia. Quem tiver o link consegue comprar a Academy por R$1.000 sem ter a anatomia.
- **O prazo de 30 dias é controlado pela equipe:** só mandar o link a quem está dentro dos 30 dias da compra da anatomia. Uma vez por semana, cruzar as vendas do **Upgrade** com as da **Anatomia** (Minhas Vendas). Upgrade sem anatomia antes é sinal de link vazado. Nesse caso, falar com a pessoa e trocar o link (desativar a oferta e criar outra).

### 1.1 Antes do Flow

- [ ] O produto **Por Dentro da Face · Anatomia em Fresh Frozen** e a oferta **Anatomia · Downsell** (R$797) criados (`ticto.md` §11.2).
- [ ] A oferta **Academy · Upgrade Anatomia** criada (item 1.0).
- [ ] A página de upsell está no ar em `https://live.alinefilgueiras.com.br/academy/anatomia/upgrade`.

### 1.2 Na Ticto, passo a passo

1. **Meus Produtos →** Por Dentro da Face · Anatomia em Fresh Frozen **→ Ações → Gerenciar → Flow.**
2. Criar o funil:
   - **Nome:** `Anatomia → Upgrade Academy`;
   - **Oferta de entrada:** Anatomia · Downsell.
3. Adicionar a etapa **Upsell:**
   - **URL da página de upsell:** `https://live.alinefilgueiras.com.br/academy/anatomia/upgrade`
   - **Produto:** Filgueiras Academy · Consulta, Agulha e Espelho
   - **Oferta:** Academy · Upgrade Anatomia (R$1.000)
4. **Se aceitar:** ir para `https://live.alinefilgueiras.com.br/academy/obrigado`, a página de quem tem a Academy. A **compra acontece no próprio botão "Sim"** da página de upsell: o script do 1 clique cobra os R$1.000 no cartão que ela acabou de usar na anatomia, sem abrir checkout nem pedir dados. Só **depois** da cobrança aprovada a Ticto leva para o obrigado.
5. **Se recusar:** ir para `https://live.alinefilgueiras.com.br/academy/anatomia/obrigado`. **Não** criar etapa de downsell depois do upsell. Abaixo da anatomia não existe oferta que faça sentido, e um terceiro "não" seguido cansa a compradora.
6. **Desconto em pop-up ao recusar: desligado.** A Ticto oferece um pop-up que baixa o preço do upsell quando a pessoa recusa, e ele quebra a regra acima: alguém levaria a Academy por menos que R$1.797 no total.
7. Clicar em **`<> scripts`**, na barra superior do Flow, e **copiar os três trechos**:
   - o **script de incorporação**;
   - o **botão de aceitar**;
   - o **botão de recusar**.
8. **Mandar os três trechos aqui na conversa.** Eu colo em `lib/ofertaAcademy.ts` (`TICTO_UPSELL_ANATOMIA`) e publico. Sem os scripts, o 1 clique não funciona. Até lá, a página usa o link da oferta oculta, que pede os dados de novo, ou o WhatsApp da equipe.
9. Salvar e **ativar** o Flow.

### Como ela compra o upgrade, passo a passo

1. Paga a anatomia (R$797) no checkout da Ticto.
2. A Ticto leva ela para `/academy/anatomia/upgrade`, em vez do obrigado.
3. Ela clica em **"Sim, quero a Academy completa por mais R$1.000"**. **A compra é esse clique:** o script da Ticto cobra no mesmo cartão, sem novo checkout.
4. Com a cobrança aprovada, a Ticto leva para `/academy/obrigado` e a MemberKit libera a Academy (12 meses).
5. Se ela clicar em **"Não, quero ficar só com o curso de anatomia"**, nada é cobrado e ela vai para `/academy/anatomia/obrigado`.

**Enquanto os scripts não estiverem colados na página**, o "Sim" abre o **checkout normal** da oferta Academy · Upgrade Anatomia. Ela preenche os dados e paga ali, e o redirecionamento da oferta leva ao mesmo `/academy/obrigado`. Funciona igual, só que com mais um passo.

**Quem pagou a anatomia no Pix** não tem cartão salvo. No "Sim", a Ticto deve gerar um Pix novo ou abrir o checkout. Testar esse caso antes (seção 4).

### 1.3 A página de upsell (já no ar)

`/academy/anatomia/upgrade` segue o formato do Hormozi para upsell:

- **Título:** "Você já tem a anatomia. Leve a Academy inteira pagando só R$1.000 a mais."
- **O que entra a mais, cada item com o valor da pilha:** plataforma (R$1.497), 6 encontros ao vivo (R$5.000), aula de casos (R$1.000), preferência nos presenciais e 12 meses em vez de 6 (R$899). O valor do que entra a mais soma **R$8.396**.
- **O preço:** "Agora, só a diferença: R$1.000".
- **Sim:** "Sim, quero a Academy completa por mais R$1.000".
- **Não:** "Não, quero ficar só com o curso de anatomia". É uma recusa honesta, sem fazer a pessoa se sentir mal por recusar.
- A Garantia Mão Segura embaixo. Sem contador e sem desconto.

**Pix:** o 1 clique costuma reaproveitar o **cartão** da compra. Quem pagou a anatomia no Pix deve receber um novo Pix no aceite. Testar os dois casos (seção 4).

---

## 2. Flow da Academy: upsell da mentoria em grupo (só na Evergreen)

Decisões de 05/10:

- **O upsell:** mentoria em grupo com a Aline, **3 meses, 1 encontro ao vivo por mês**, por **R$1.997** (valor de R$5.000 na pilha, a mesma mentoria que os 10 primeiros da aula levaram de bônus).
- **Sem downsell** depois da recusa.
- **Só na oferta Evergreen.** Na noite da aula, os 10 primeiros já levam a mentoria como bônus, e vender a mesma coisa em seguida confunde quem comprou.

```
Academy (oferta Evergreen) ─► /academy/mentoria/upsell
                                ├─ "Sim": cobra R$1.997 (1 clique) ─► /academy/mentoria/obrigado
                                └─ "Não" ─► /academy/obrigado
```

### 2.1 Criar o produto da mentoria

1. **Meus Produtos → cadastrar produto:**

   | Campo | Preencher |
   |---|---|
   | **Nome** | Mentoria em grupo com a Aline |
   | **Tipo** | Mentoria |
   | **URL da página de vendas** | `https://live.alinefilgueiras.com.br/academy/mentoria/upsell` |
   | **E-mail, WhatsApp, categoria e capa** | Os mesmos da Academy |
   | **Prazo de reembolso** | **7 dias.** A Garantia Mão Segura é da anatomia e não se aplica aqui. A página da mentoria promete 7 dias |
   | **Descrição** | `Mentoria em grupo com a Dra. Aline Filgueiras: 3 meses, 1 encontro ao vivo por mês, online. Você leva os casos e as dúvidas do consultório e a Aline responde junto com o grupo. As datas dos encontros são combinadas pela equipe no WhatsApp.` |

2. **Oferta:**

   | Campo | Preencher |
   |---|---|
   | **Nome** | Mentoria · Upsell Academy |
   | **Valor** | R$1.997,00 |
   | **Pagamento** | Cartão e Pix, sem boleto |
   | **Parcelamento** | Até 12x com juros pagos pelo comprador. Pela conta, cerca de 12x de R$206,54. Conferir e me mandar o valor que a Ticto mostrar |
   | **Área de membros** | Opcional: um plano "Mentoria em grupo" na MemberKit, de 3 meses, se as gravações dos encontros ficarem lá. Sem isso, a entrega é pelo WhatsApp |
   | **Afiliados** | Não |
   | **Redirecionamento** | `https://live.alinefilgueiras.com.br/academy/mentoria/obrigado` |
   | **Template** | Selo de 7 dias. Sem cupom, contador, bump e notificações |

3. **Copiar o link da oferta** e me mandar. O código depois de `payment.ticto.app/` vira o fallback do 1 clique.

### 2.2 Criar o Flow (no produto da Academy)

1. **Meus Produtos → Filgueiras Academy 3.0 → Ações → Gerenciar → Flow → novo funil.**
2. **START:** a oferta **Evergreen**. **Não incluir a oferta Sala.** Confira o texto "carregado para compras da(s) oferta(s): …", que tem que mostrar só a Evergreen.
3. **Etapa Upsell:**
   - **Nome:** Upsell · Mentoria
   - **URL:** `https://live.alinefilgueiras.com.br/academy/mentoria/upsell`
   - **Produto:** Mentoria em grupo com a Aline
   - **Oferta:** Mentoria · Upsell Academy
4. **Aceitou:**
   - **Tipo:** Página de Obrigado
   - **Nome:** Obrigado · Mentoria
   - **URL:** `https://live.alinefilgueiras.com.br/academy/mentoria/obrigado`
5. **Rejeitou:**
   - **Tipo:** Página de Obrigado
   - **Nome:** Obrigado · Academy
   - **URL:** `https://live.alinefilgueiras.com.br/academy/obrigado`
6. **Pop-up de desconto na recusa:** desligado.
7. **`<> scripts`:** me mandar o **script de incorporação**, que tem um `flow=` diferente do da anatomia. Os botões da página já usam as classes `ticto-upsell-button` e `ticto-refuse-button`. Até o script entrar, o "Sim" abre o WhatsApp da equipe e o "Não" leva ao obrigado da Academy.
8. Salvar e ativar.

### 2.3 As páginas (já no ar)

- **`/academy/mentoria/upsell`:**
  - título: "Você entrou na Academy. Quer a Aline olhando os seus casos de perto?";
  - o que ela leva, com o valor de R$5.000 riscado;
  - R$1.997, ou 12x;
  - "Sim, quero a mentoria por R$1.997" e "Não, quero seguir só com a Academy";
  - garantia de 7 dias.
- **`/academy/mentoria/obrigado`:** os primeiros passos na Academy (começar pela anatomia) e o aviso de que a equipe chama no WhatsApp com as datas dos encontros.

---

## 3. Downsell de quem não quis a Academy: só a anatomia

O Flow só existe **depois** de uma compra, então quem desiste da Academy não passa por ele. O downsell para essa pessoa é feito por três caminhos, todos levando à **página de venda da anatomia**:

**`https://live.alinefilgueiras.com.br/academy/anatomia`**

É uma página fechada: fora do Google e sem link na LP. Ela traz:

- **Título:** "Se a Academy inteira não cabe agora, comece pela parte que muda a sua mão."
- **O curso:** valor de R$1.297 riscado, 6 meses de acesso.
- **O preço:** R$797, ou 12x de R$82,42.
- **A garantia.**
- **O upgrade:** em até 30 dias, a troca pela Academy pela diferença.
- **O botão:** vai para o checkout da oferta **Anatomia · Downsell** quando o link estiver em `CHECKOUT_ANATOMIA` (`lib/ofertaAcademy.ts`). Até lá, vai para o WhatsApp da equipe. **Me mandem o link dessa oferta.**

Os três caminhos:

1. **Aviso de retorno na `/academy` (automático, já no ar):**
   - **Quem vê:** quem clicou no checkout da Academy, saiu sem comprar e voltou ao site **20 minutos ou mais** depois. Vê um aviso: "Voltou? Se a Academy inteira não cabe agora, comece pela parte que muda a sua mão", com o botão para a página da anatomia.
   - **Quem não vê:** quem comprou, porque as páginas de obrigado marcam isso no navegador; quem nunca foi ao checkout; quem fechou o aviso; e qualquer pessoa antes de 06/10, 23h59.
2. **WhatsApp da recuperação (item 3.2):** a mensagem de 48 horas leva para a página da anatomia, e não direto para o checkout. Assim, o downsell é apresentado antes do preço.
3. **Remarketing:** um público de quem visitou a `/academy` e não comprou (excluir compradores pelo pixel). O anúncio aponta para `/academy/anatomia`, nunca antes de 07/10.

### Recuperação de quem não comprou (WhatsApp)

**Onde fica:** menu **Recuperação de compras**:

- **Carrinhos abandonados:** a pessoa preencheu o formulário e ficou 30 segundos sem interagir. A tela mostra nome, e-mail e telefone, e o botão **Ações** abre o WhatsApp.
- **Pix emitidos:** os Pix gerados e não pagos. Dá para copiar o código e reenviar.

**Regra:**

- Sempre começar retomando a **Academy**, sem desconto.
- O **downsell da anatomia** só entra **a partir de 07/10** e só depois de a pessoa não responder ou dizer que o problema é preço.
- **Nunca** oferecer a anatomia na noite da aula.

### 3.1 Noite da aula (06/10, até 23h59), oferta Sala

| Quando | Mensagem |
|---|---|
| **Até 10 min** depois do abandono | Oi, [nome]! Aqui é da equipe da Dra. Aline. Vi que você começou a inscrição na Filgueiras Academy e não finalizou. Ficou alguma dúvida? Os bônus dos 10 primeiros vão só até hoje, 23h59, e ainda restam [X]. Seu link: [link da oferta Sala] |
| **Pix emitido e não pago, 15 min** | Oi, [nome]! Seu Pix da Filgueiras Academy ainda não foi pago. Pra não perder a vaga entre os 10 primeiros, segue o código de novo: [código Pix]. Vale até 23h59. |

Só mandar "ainda restam [X]" com a contagem **real**. Se os 10 já fecharam, tirar a frase.

### 3.2 A partir de 07/10, oferta Evergreen

| Quando | Mensagem |
|---|---|
| **1 hora** | Oi, [nome]! Vi que você chegou até o checkout da Filgueiras Academy e não finalizou. Posso te ajudar com alguma dúvida? Se for sobre pagamento, dá pra fazer no Pix ou em 12x de R$185,85. Seu link: [link da oferta Evergreen] |
| **24 horas** | [nome], uma coisa que pesa pra muita aluna: você tem 7 dias pra pedir o dinheiro de volta sem explicar nada. E se em 30 dias assistir ao módulo de anatomia e não sentir a mão mais segura, a gente devolve. O risco fica com a Aline. [link da oferta Evergreen] |
| **48 horas**, sem resposta ou se a objeção for preço | A mensagem do downsell (`ticto.md` §11.5): o curso de anatomia separado, R$797 ou 12x de R$82,42, com 6 meses de acesso e a troca pela Academy pela diferença em até 30 dias. Link: `https://live.alinefilgueiras.com.br/academy/anatomia` |
| **Pix emitido e não pago, 30 min** | Oi, [nome]! Seu Pix ainda não foi pago. Segue o código de novo, pra você não precisar refazer a compra: [código Pix] |

Depois da terceira mensagem, parar. Mais do que isso vira insistência e queima a lista para os próximos lançamentos.

### 3.3 Upgrade de quem comprou a anatomia e recusou o 1 clique

| Quando | Mensagem |
|---|---|
| **7º dia** | Oi, [nome]! Como está o curso de anatomia? Lembrando: até o 30º dia da sua compra, você troca pela Filgueiras Academy pagando só a diferença, R$1.000. Entram a plataforma completa, 6 encontros ao vivo, a aula de casos com a Aline e 12 meses de acesso. [link da oferta Academy · Upgrade Anatomia] |
| **25º dia** | [nome], último aviso: a troca pela Academy pela diferença (R$1.000) vale até [data da compra + 30 dias]. Depois disso, a Academy volta a R$1.797. [link] |

### 3.4 Automatizar (opcional)

A Ticto manda **webhooks** com os eventos de carrinho abandonado, Pix expirado e compra aprovada. Dá para ligar esses eventos ao WhatsApp e mandar as mensagens acima sozinhas, com uma automação (no n8n, por exemplo). Para isso, preciso saber qual ferramenta de WhatsApp vocês usam para disparo (API oficial, Z-API ou outra).

---

## 4. Testes antes de ativar

- [ ] **Compra da anatomia no cartão:**
  - cai em `/academy/anatomia/upgrade`;
  - "Sim" compra a Academy em 1 clique, sem pedir dados;
  - chega em `/academy/obrigado`;
  - a MemberKit libera o plano de 12 meses.
- [ ] **Compra da anatomia no Pix:** ver o que acontece no "Sim" (novo Pix?) e se a página explica isso.
- [ ] **Recusa:** "Não" leva a `/academy/anatomia/obrigado` sem cobrança.
- [ ] **O pop-up de desconto não aparece** na recusa.
- [ ] **Reembolso das compras-teste:** o acesso sai da MemberKit nas duas.
- [ ] **Carrinho abandonado de teste:** aparece em Recuperação de compras com o telefone.

---

## Pendências

- [ ] **Link do checkout da oferta Anatomia · Downsell**, que vai em `CHECKOUT_ANATOMIA`. É o botão da página `/academy/anatomia`.
- [ ] **Mentoria:** o link da oferta "Mentoria · Upsell Academy", que vira o fallback; o script do Flow da Academy (`<> scripts`), que vai em `TICTO_UPSELL_ACADEMY`; e a parcela de 12x que a Ticto mostrar.

- [x] Script do Flow colado em `TICTO_UPSELL_ANATOMIA.scriptSrc` (05/10). Os botões da página usam as classes `ticto-upsell-button` e `ticto-refuse-button`.
- [x] **Código da oferta de upgrade para o fallback** (`OB97300B4`, em `TICTO_UPSELL_ANATOMIA.fallbackOffer` e `UPGRADE_ANATOMIA_URL`, 05/10): é o trecho depois de `payment.ticto.app/` no link do checkout da oferta Academy · Upgrade Anatomia. Sem cartão salvo (anatomia paga no Pix), a Ticto usa esse código para abrir o checkout do upgrade.
- [x] **START do Flow** na oferta da anatomia (R$797), corrigido em 05/10. Conferir e o caminho "Rejeitou" para `/academy/anatomia/obrigado`.
- [x] Link da oferta **Academy · Upgrade Anatomia**: `https://payment.ticto.app/OB97300B4`. É o link das mensagens do 7º e do 25º dia.
- [ ] O formato e o preço da mentoria em grupo, para o upsell da evergreen (seção 2).
- [ ] A ferramenta de WhatsApp, se quiserem automatizar a recuperação (seção 3.4).
