# Teste completo · LPs, Ticto e funil da Filgueiras Academy

Este é o roteiro para testar tudo antes de 06/10. Siga na ordem e marque cada item. Quando algo der diferente do **esperado**, anote na tabela do fim e me mande o print.

**Endereço base:** `https://live.alinefilgueiras.com.br`

---

## 0. Preparação

- [x] Links das ofertas da Academy no ar (05/10): **Sala** `OEF7AADF6` e **Evergreen** `ODB726458`.
- [ ] **Uma janela anônima nova para cada teste de compra.** O aviso de downsell usa a memória do navegador, e uma janela normal mistura os testes.
- [ ] **Um celular e um computador.** Faça pelo menos os testes 1, 4 e 6 no celular.
- [ ] **Um cartão de crédito real e um app de banco com Pix.** A Ticto não tem modo de teste: são compras reais, reembolsadas no teste 9.
- [ ] **Um e-mail de teste por compra** (ex.: `teste+1@…`, `teste+2@…`). Assim dá para conferir cada acesso na MemberKit.
- [ ] **Para simular datas, acrescente `?preview=` no fim do endereço.** Exemplos:
  - noite da aula: `?preview=2026-10-06T21:30:00-03:00`;
  - depois do prazo: `?preview=2026-10-07T10:00:00-03:00`.

---

## 1. As páginas (sem comprar)

Abra cada uma no celular e no computador.

| # | Endereço | O que conferir | Esperado |
|---|---|---|---|
| 1.1 | `/academy` | Topo, seções e oferta | Headline "Você não estudou tanto pra continuar insegura na agulha e com a agenda parada". Card com o valor total ~~R$8.794~~ e R$1.797 (12x de R$185,85). Sem bônus dos 10 primeiros. Nenhum "Em breve" depois do item 0 |
| 1.2 | `/academy/sala?preview=2026-10-06T21:30:00-03:00` | Noite da aula | Barra no topo "+3 meses de acesso pra todo mundo e bônus pros 10 primeiros até 06/10, 23h59" com contador. Card com o núcleo, os +3 meses (~~R$9.243~~) e os bônus dos 10 primeiros (~~R$14.843~~). Contador no card |
| 1.3 | `/academy/sala?preview=2026-10-07T10:00:00-03:00` | Depois do prazo | **Sem** barra, **sem** bônus, **sem** contador. Fica só o núcleo por R$1.797 |
| 1.4 | `/academy/anatomia` | Downsell | "Se a Academy inteira não cabe agora…". R$797 (12x de R$82,42), ~~R$1.297~~, 6 meses e o quadro da troca pela diferença (R$1.000) |
| 1.5 | `/academy/anatomia/upgrade` | Upsell do upgrade | "Você já tem a anatomia. Leve a Academy inteira pagando só R$1.000 a mais". Lista do que entra a mais, ~~R$8.396~~, botões "Sim…" e "Não…" |
| 1.6 | `/academy/mentoria/upsell` | Upsell da mentoria | "Você entrou na Academy. Quer a Aline olhando os seus casos de perto?". ~~R$5.000~~, R$1.997 (12x), botões "Sim…" e "Não…", garantia de 7 dias |
| 1.7 | `/academy/obrigado` | Obrigado da Academy | "Bem-vinda à Filgueiras Academy", os 3 passos e o quadro dos 10 primeiros |
| 1.8 | `/academy/anatomia/obrigado` | Obrigado da anatomia | "Bem-vinda ao curso de anatomia", os 3 passos e o quadro do upgrade (R$1.000) |
| 1.9 | `/academy/mentoria/obrigado` | Obrigado da mentoria | "Bem-vinda à Filgueiras Academy e à mentoria" e os 3 passos |
| 1.10 | Busca no Google `site:live.alinefilgueiras.com.br academy` | Páginas fechadas | Só a `/academy` pode aparecer. Sala, anatomia, upsells e obrigados são `noindex`. Leva dias para valer, então confira na semana |

---

## 2. Configuração na Ticto (sem comprar)

| # | Onde | Conferir |
|---|---|---|
| 2.1 | Produto da Academy | Prazo de reembolso de **30 dias**, descrição colada (até 1.000 caracteres), e-mail de suporte validado e capa |
| 2.2 | Ofertas da Academy | **Sala** e **Evergreen**: R$1.797, 12x com juros do comprador (**12x de R$185,85** no checkout), Pix e cartão, **sem boleto**, redirecionamento `/academy/obrigado` |
| 2.3 | Oferta **Upgrade Anatomia** (`OB97300B4`) | R$1.000, 12x com juros do comprador, plano de 12 meses na MemberKit, redirecionamento `/academy/obrigado` |
| 2.4 | Produto da anatomia, oferta `O39AA5EC7` | R$797, **12x de R$82,42**, plano de 6 meses (só o curso de Anatomia), reembolso de 30 dias, redirecionamento `/academy/anatomia/obrigado` |
| 2.5 | Produto da mentoria, oferta `O5491F4AA` | R$1.997, 12x (anote a parcela que aparece e me mande), reembolso de 7 dias, redirecionamento `/academy/mentoria/obrigado` |
| 2.6 | **Flow da anatomia** | START = oferta da anatomia · Upsell = `/academy/anatomia/upgrade` + oferta Upgrade · Aceitou = Página de Obrigado `/academy/obrigado` · Rejeitou = Página de Obrigado `/academy/anatomia/obrigado` · pop-up de desconto **desligado** · Flow **ativo** |
| 2.7 | **Flow da Academy** | START = **só a oferta Evergreen** (nunca a Sala) · Upsell = `/academy/mentoria/upsell` + oferta da mentoria · Aceitou = `/academy/mentoria/obrigado` · Rejeitou = `/academy/obrigado` · pop-up de desconto **desligado** · Flow **ativo** |
| 2.8 | Templates de checkout | Selo da garantia certo em cada um · **cupom desligado** · **sem contador** · notificações só de compra real · bump do Protocolo só no template Evergreen (se aprovaram) |
| 2.9 | Integração MemberKit | Ativa, com a chave válida. Cada oferta ligada ao plano certo: Academy e Upgrade no de 12 meses, anatomia no de 6, mentoria no da mentoria (se houver) |
| 2.10 | Pixel e GA4 | O mesmo pixel e o mesmo GA4 da LP nos produtos |

---

## 3. Compra na noite da aula (oferta Sala)

Abra `/academy/sala?utm_source=teste&utm_campaign=sala` numa janela anônima. O preview não vale no checkout da Ticto. Este teste confere o caminho da compra; os bônus são combinados à mão.

1. [ ] Clicar em "Quero entrar na Academy". **Esperado:** abre o checkout da **Oferta Sala**, R$1.797, sem campo de cupom. Na URL do checkout aparecem `utm_source=teste`.
2. [ ] Pagar no **Pix**. **Esperado:** depois do pagamento, vai **direto** para `/academy/obrigado`, **sem** upsell da mentoria, porque o Flow não roda na Sala.
3. [ ] **E-mail:** chegam a confirmação da Ticto e o acesso da MemberKit.
4. [ ] **MemberKit:** o aluno de teste está no plano da Academy de 12 meses, com a Anatomia liberada.
5. [ ] **Ticto → Minhas Vendas → a venda → Rastreamento:** aparece `teste` / `sala`.
6. [ ] **Ticto → Minhas Vendas:** dá para ordenar as vendas da Oferta Sala pela hora, que é como a equipe conta os 10 primeiros.

---

## 4. Academy evergreen + upsell da mentoria

### 4A · Aceita a mentoria (cartão)
1. [ ] Janela anônima → `/academy?utm_source=teste&utm_campaign=evergreen` → "Quero entrar na Academy". **Esperado:** checkout da **Oferta Evergreen**, 12x de R$185,85.
2. [ ] Pagar no **cartão**. **Esperado:** vai para **`/academy/mentoria/upsell`**, em vez do obrigado.
3. [ ] Clicar em **"Sim, quero a mentoria por R$1.997"**. **Esperado:** a Ticto cobra **sem abrir checkout nem pedir dados** e leva para **`/academy/mentoria/obrigado`**.
4. [ ] **Minhas Vendas:** duas vendas, a Academy (R$1.797) e a mentoria (R$1.997).
5. [ ] **MemberKit:** o plano da Academy de 12 meses e o da mentoria, se houver.

### 4B · Recusa a mentoria (cartão)
1. [ ] Nova janela anônima → compra da Academy no cartão → cai em `/academy/mentoria/upsell`.
2. [ ] Clicar em **"Não, quero seguir só com a Academy"**. **Esperado:** vai para **`/academy/obrigado`** sem cobrar nada e **sem** pop-up de desconto.

### 4C · Academy no Pix e "Sim" na mentoria
1. [ ] Nova janela anônima → compra da Academy no **Pix** → cai no upsell.
2. [ ] Clicar em "Sim". **Esperado:** sem cartão salvo, a Ticto abre o **checkout da mentoria** (`O5491F4AA`). Não precisa pagar: confirme só que abriu.

---

## 5. Downsell: anatomia + upsell do upgrade

### 5A · Aceita o upgrade (cartão)
1. [ ] Janela anônima → `/academy/anatomia` → "Quero o curso de anatomia". **Esperado:** checkout `O39AA5EC7`, R$797, 12x de R$82,42.
2. [ ] Pagar no **cartão**. **Esperado:** vai para **`/academy/anatomia/upgrade`**.
3. [ ] Clicar em **"Sim, quero a Academy completa por mais R$1.000"**. **Esperado:** cobra **R$1.000 sem novo checkout** e leva para **`/academy/obrigado`**.
4. [ ] **MemberKit:** o plano da Academy de 12 meses, e o de 6 meses da anatomia também.

### 5B · Recusa o upgrade (cartão)
1. [ ] Nova janela anônima → compra da anatomia no cartão → cai no upgrade.
2. [ ] Clicar em **"Não, quero ficar só com o curso de anatomia"**. **Esperado:** vai para **`/academy/anatomia/obrigado`** sem cobrar e sem pop-up.
3. [ ] **MemberKit:** só o plano de 6 meses, com só o curso de Anatomia.

### 5C · Anatomia no Pix e "Sim" no upgrade
1. [ ] Compra da anatomia no **Pix** → upgrade → "Sim". **Esperado:** abre o checkout do upgrade (`OB97300B4`). Só confirmar que abriu.

### 5D · Upgrade depois, pelo botão do obrigado
1. [ ] Em `/academy/anatomia/obrigado`, clicar em "Quero trocar pela Academy". **Esperado:** abre `payment.ticto.app/OB97300B4`, R$1.000.

---

## 6. Back redirect (downsell automático)

Só a partir de 07/10, depois que a URL de Back Redirect estiver ligada no template da Evergreen.

1. [ ] Janela anônima → `/academy` → clicar em "Quero entrar na Academy" → no checkout, **não pagar** e apertar **voltar** (no celular, o gesto ou botão de voltar). **Esperado:** abre `/academy/anatomia`, com o preço de R$797.
2. [ ] Repetir no **celular** (Instagram e WhatsApp abrem o link no navegador interno; testar pelos dois). **Esperado:** o mesmo.
3. [ ] **Sala não redireciona:** abrir o checkout da Sala (`https://payment.ticto.app/OEF7AADF6`) e apertar voltar. **Esperado:** volta para a página anterior, sem cair na anatomia.
4. [ ] **Anatomia não redireciona em loop:** no checkout da anatomia, apertar voltar. **Esperado:** volta para `/academy/anatomia`, sem redirecionamento.
5. [ ] **Site limpo:** a `/academy` não mostra mais nenhum aviso "Voltou?" em nenhum momento.

---

## 7. Recuperação de quem não comprou (Ticto + WhatsApp)

1. [ ] Janela anônima → checkout da Academy → preencher nome, e-mail e **telefone** → não pagar e ficar parado 1 minuto.
2. [ ] **Ticto → Recuperação de compras → Carrinhos abandonados.** **Esperado:** o teste aparece, com o telefone, e o botão **Ações** abre o WhatsApp.
3. [ ] Gerar um **Pix** e não pagar → **Pix emitidos.** **Esperado:** aparece, com o código para copiar.
4. [ ] Mandar para um número da equipe as mensagens do guia (`ticto-funil.md` §3) e conferir os links:
   - o de 48 horas leva para `/academy/anatomia`;
   - o do upgrade leva para `OB97300B4`.

---

## 8. Rastreamento

1. [ ] **Meta: Gerenciador de Eventos → Testar eventos**, com o endereço da `/academy`. Clicar no botão e conferir o evento **ClickCheckout**. Na compra-teste, conferir **Purchase**, que vem da Ticto.
2. [ ] **GA4 → Tempo real:** o evento `click_checkout` aparece com `produto: academy-evergreen` (ou `academy-sala`).
3. [ ] **Ticto → Rastreamento** de cada venda-teste: aparecem as UTMs usadas (`teste`).

---

## 9. Reembolsos (no fim)

1. [ ] Reembolsar **todas** as vendas-teste em Minhas Vendas.
2. [ ] **Esperado:** em poucos minutos, o acesso de cada e-mail de teste **some** da MemberKit.
3. [ ] Conferir que o valor volta no cartão e no Pix.

---

## 10. Registro

| Teste | Data | Quem | Resultado (ok / erro) | Observação ou print |
|---|---|---|---|---|
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4A | | | | |
| 4B | | | | |
| 4C | | | | |
| 5A | | | | |
| 5B | | | | |
| 5C | | | | |
| 5D | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |
