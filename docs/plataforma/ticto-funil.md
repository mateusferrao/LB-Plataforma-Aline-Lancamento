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
                                ├─ aceitou ─► /academy/obrigado
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

### 1.1 Antes

- [ ] O produto **Por Dentro da Face · Anatomia em Fresh Frozen** e a oferta **Anatomia · Downsell** (R$797) criados (`ticto.md` §11.2).
- [ ] No produto da **Academy**, a oferta oculta **Academy · Upgrade Anatomia** criada:
  - R$1.000;
  - 12x com juros pagos pelo comprador, Pix e cartão;
  - ligada ao plano de 12 meses na MemberKit;
  - redirecionamento para `/academy/obrigado`.
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
4. **Se aceitar:** ir para `https://live.alinefilgueiras.com.br/academy/obrigado`, a página de quem tem a Academy.
5. **Se recusar:** ir para `https://live.alinefilgueiras.com.br/academy/anatomia/obrigado`. **Não** criar etapa de downsell depois do upsell. Abaixo da anatomia não existe oferta que faça sentido, e um terceiro "não" seguido cansa a compradora.
6. **Desconto em pop-up ao recusar: desligado.** A Ticto oferece um pop-up que baixa o preço do upsell quando a pessoa recusa, e ele quebra a regra acima: alguém levaria a Academy por menos que R$1.797 no total.
7. Clicar em **`<> scripts`**, na barra superior do Flow, e **copiar os três trechos**:
   - o **script de incorporação**;
   - o **botão de aceitar**;
   - o **botão de recusar**.
8. **Mandar os três trechos aqui na conversa.** Eu colo em `lib/ofertaAcademy.ts` (`TICTO_UPSELL_ANATOMIA`) e publico. Sem os scripts, o 1 clique não funciona. Até lá, a página usa o link da oferta oculta, que pede os dados de novo, ou o WhatsApp da equipe.
9. Salvar e **ativar** o Flow.

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

## 2. Academy: Flow pós-compra (por enquanto, nenhum)

- **Oferta Sala:** **sem Flow.** Os 10 primeiros já levam a mentoria em grupo como bônus, e um upsell na mesma noite atrapalharia a entrega dos bônus.
- **Oferta Evergreen:** **sem Flow por enquanto.** O upsell natural é a **mentoria em grupo com a Aline** para quem não está nos 10 primeiros (o "vender depois"). Quando o formato e o preço estiverem definidos, ele entra aqui com a mesma estrutura do item 1:
  - página `/academy/mentoria/upsell`, que eu crio;
  - etapa de upsell no Flow da Academy;
  - recusa vai para `/academy/obrigado`.

---

## 3. Recuperação de quem não comprou (WhatsApp)

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
| **48 horas**, sem resposta ou se a objeção for preço | A mensagem do downsell (`ticto.md` §11.5): o curso de anatomia separado, R$797 ou 12x de R$82,42, com 6 meses de acesso e a troca pela Academy pela diferença em até 30 dias. [link da oferta Anatomia · Downsell] |
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

- [ ] Os três trechos de `<> scripts` do Flow, que eu colo em `TICTO_UPSELL_ANATOMIA`.
- [ ] O link da oferta oculta **Academy · Upgrade Anatomia**, que vai em `UPGRADE_ANATOMIA_URL`. É a reserva da página e o link das mensagens do 7º e do 25º dia.
- [ ] O formato e o preço da mentoria em grupo, para o upsell da evergreen (seção 2).
- [ ] A ferramenta de WhatsApp, se quiserem automatizar a recuperação (seção 3.4).
