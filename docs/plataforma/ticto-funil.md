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
   - as mensagens do 7º e do 25º dia ([`recuperacao-carrinho.md`](recuperacao-carrinho.md) §5);
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
- **Bônus só da página (06/10): +1 vaga pra uma colega.** Quem aceita a mentoria leva uma colega da estética ou da saúde nos encontros, sem pagar a mais (vale R$5.000 na página, total R$10.000). Nada muda na Ticto: o 1 clique cobra os mesmos R$1.997. Regras para a equipe:
  - vale para a mentoria comprada **no mesmo dia** da Academy (pelo 1 clique ou pelo checkout de reserva). Depois disso, não;
  - **1 colega por compra**, profissional da estética ou da saúde. Ela entra só nos encontros da mentoria, sem acesso à Academy;
  - a compradora manda nome e telefone da colega pelo WhatsApp (a página de obrigado pede isso). A equipe coloca as duas no grupo da mentoria;
  - reembolso da mentoria tira as duas.
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

1. **Back redirect no checkout da Evergreen (Ticto, nativo):**
   - **Onde:** Ticto → template de checkout da **Oferta B (Evergreen)** → **URL de Back Redirect** = `https://live.alinefilgueiras.com.br/academy/anatomia`.
   - **Quem vê:** quem abriu o checkout da Academy e apertou **voltar** sem comprar. Cai direto na página da anatomia (R$797), com o upgrade pela diferença.
   - **Quando ligar:** só na **manhã de 07/10**. Antes disso, quem volta do checkout precisa ver a oferta da noite com os bônus, não o downsell.
   - **Onde não colocar:** no template da **Sala** (Oferta A) nem nos templates da anatomia, do upgrade e da mentoria. Na Sala, quem volta tem que voltar para a oferta com bônus.
   - **Quem não pega:** quem fecha a aba em vez de voltar. Esse público é coberto pelo WhatsApp (caminho 2) e pelo remarketing (caminho 3).
2. **WhatsApp da recuperação ([`recuperacao-carrinho.md`](recuperacao-carrinho.md), E3):** a mensagem de 48 horas leva para a página da anatomia, e não direto para o checkout. Assim, o downsell é apresentado antes do preço.
3. **Remarketing:** um público de quem visitou a `/academy` e não comprou (excluir compradores pelo pixel). O anúncio aponta para `/academy/anatomia`, nunca antes de 07/10.

### Recuperação de quem não comprou (WhatsApp)

**Onde fica:** menu **Recuperação de compras**:

- **Carrinhos abandonados:** a pessoa preencheu o formulário e ficou 30 segundos sem interagir. A tela mostra nome, e-mail e telefone, e o botão **Ações** abre o WhatsApp.
- **Pix emitidos:** os Pix gerados e não pagos. Dá para copiar o código e reenviar.

**Regra:**

- Sempre começar retomando a **Academy**, sem desconto.
- O **downsell da anatomia** só entra **a partir de 07/10** e só depois de a pessoa não responder ou dizer que o problema é preço.
- **Nunca** oferecer a anatomia na noite da aula.

### 3.1 As mensagens

As mensagens de todas as ofertas (Sala, Evergreen, Anatomia, Upgrade e Mentoria), o calendário de envio e as respostas por objeção estão em [`recuperacao-carrinho.md`](recuperacao-carrinho.md).

### 3.4 Automação (n8n)

As mensagens de 1h, 24h e 48h saem sozinhas pelo n8n: o webhook da Ticto põe o abandono numa fila, e antes de cada mensagem o fluxo confere na MemberKit se ela já comprou. Configuração e testes em [`n8n-recuperacao.md`](n8n-recuperacao.md).

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

**Auditoria de 05/10 (configuração, fora do código):**

- [ ] **GA4 não está ativo no site.** O build não recebe `NEXT_PUBLIC_GA4_ID`, então o script do GA4 não carrega em nenhuma página. Passem o ID (`G-…`) para eu colocar no workflow, ou aceitem medir só pelo Pixel e pela Ticto.
- [ ] **Pixel na Ticto:** conferir se as cinco ofertas (Sala, Evergreen, Upgrade, Anatomia e Mentoria) disparam **Purchase** com o mesmo Pixel da LP. Sem isso, os anúncios não otimizam para compra.
- [ ] **Oferta Sala (`OEF7AADF6`):** desativar na manhã de 07/10. O link circulou no grupo e, se continuar ativo, quem comprar por ele entra na contagem da Sala e não passa pelo upsell da mentoria.
- [ ] **Back redirect:** na manhã de 07/10, ligar a URL de Back Redirect no template da Evergreen apontando para `/academy/anatomia` (§3, caminho 1). Substitui o aviso "Voltou?" que saiu do site.
- [ ] **Upgrade e prazo de 30 dias:** a Ticto não trava por comprador. Cruzar semanalmente as vendas do Upgrade com as da Anatomia (§1.0).

- [x] **Link da oferta Anatomia · Downsell:** `https://payment.ticto.app/O39AA5EC7` (em `CHECKOUT_ANATOMIA`, 05/10).
- [x] **Mentoria:** oferta `O5491F4AA` (fallback) e script do Flow da Academy em `TICTO_UPSELL_ACADEMY` (05/10).
- [ ] **Mentoria:** a parcela de 12x que a Ticto mostra (na página está a da conta, R$206,54).

- [x] Script do Flow colado em `TICTO_UPSELL_ANATOMIA.scriptSrc` (05/10). Os botões da página usam as classes `ticto-upsell-button` e `ticto-refuse-button`.
- [x] **Código da oferta de upgrade para o fallback** (`OB97300B4`, em `TICTO_UPSELL_ANATOMIA.fallbackOffer` e `UPGRADE_ANATOMIA_URL`, 05/10): é o trecho depois de `payment.ticto.app/` no link do checkout da oferta Academy · Upgrade Anatomia. Sem cartão salvo (anatomia paga no Pix), a Ticto usa esse código para abrir o checkout do upgrade.
- [x] **START do Flow** na oferta da anatomia (R$797), corrigido em 05/10. Conferir e o caminho "Rejeitou" para `/academy/anatomia/obrigado`.
- [x] Link da oferta **Academy · Upgrade Anatomia**: `https://payment.ticto.app/OB97300B4`. É o link das mensagens do 7º e do 25º dia.
- [ ] O formato e o preço da mentoria em grupo, para o upsell da evergreen (seção 2).
- [ ] A ferramenta de WhatsApp, se quiserem automatizar a recuperação (seção 3.4).
