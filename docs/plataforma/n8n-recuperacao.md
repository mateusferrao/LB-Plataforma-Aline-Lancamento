# n8n · Recuperação de carrinho automática (Ticto → WhatsApp)

Workflow: **Aline · Recuperação de carrinho (Ticto → WhatsApp)**, no n8n (projeto pessoal),
`https://n8n.automato.pro/workflow/hG8cmJAd7Ry8BFxq`. Ele está **desativado** até você terminar este passo a passo.
As mensagens são as de [`recuperacao-carrinho.md`](recuperacao-carrinho.md).

## Como funciona

```
Ticto (webhook) ─► Ler evento ─► Abandono? ─► já está na fila? ─► não: entra na fila (Data Table)
                                └► Compra?  ─► marca "comprou" na fila

A cada 10 min ─► quem está na hora ─► MemberKit: comprou? ─► sim: marca "comprou" e para
                                                          └► não: manda a mensagem da vez pelo WhatsApp
                                                                  e agenda a próxima
```

| Produto (oferta) | 1 h | 24 h | 48 h |
|---|---|---|---|
| Academy Sala `OEF7AADF6` e Evergreen `ODB726458` | Ajuda (na noite da aula, com os bônus e o link da sala; depois, o link da evergreen) | Valor: a pilha, o preço e a garantia | Downsell: página da anatomia |
| Anatomia `O39AA5EC7` | Ajuda | Valor e crédito de 30 dias | — |
| Upgrade `OB97300B4` | Ajuda e crédito | — | — |
| Mentoria `O5491F4AA` | Ajuda e valor (com a vaga da colega se for no mesmo dia) | — | — |

**Regras que o fluxo já segue:**
- Qualquer outra oferta da Ticto (ingresso da aula, protocolo) é ignorada.
- Há **uma sequência por e-mail e produto**. Se a Ticto mandar o mesmo abandono de novo, ninguém recebe a mensagem 1 duas vezes.
- **Antes de cada mensagem, o fluxo confere na MemberKit.** Se ela já tem o plano, sai da fila e não recebe mais nada.
- Se o evento **Compra aprovada** da Ticto estiver ligado ao webhook, a compra também tira a pessoa da fila na hora.
- **Horário:** só envia das **8h às 21h59** (Brasília). Fora disso, a mensagem espera até as 8h. A exceção é a noite da aula (06/10, até 23h59), para os abandonos da Sala.
- O código Pix **não** vai na mensagem. O lembrete de Pix com o código continua manual, pela tela **Pix emitidos** da Ticto.

A fila fica na Data Table **Aline - Recuperacao de Carrinho** (n8n → Overview → Data tables). Os status possíveis:

| Status | Quer dizer |
|---|---|
| `ativo` | Na sequência; `proximo_envio` diz quando sai a próxima mensagem |
| `comprou` | Achada na MemberKit ou compra aprovada na Ticto. Parou |
| `finalizado` | Recebeu todas as mensagens do produto e não comprou |
| `sem_telefone` | O webhook veio sem telefone |
| `erro` | O WhatsApp recusou o envio. O motivo está em `observacao` |

Para **parar a sequência de alguém** (por exemplo, ela respondeu e a equipe assumiu), troque o status dela para `parado`.

---

## Passo a passo

### 1. MemberKit: credencial e IDs dos planos

1. No n8n, abra o nó **Consultar MemberKit**. Em **Generic Auth Type**, escolha **Query Auth**. Em **Credential**, clique em **Create new credential**:
   - **Name:** `api_key`
   - **Value:** a chave da API da MemberKit (MemberKit → Configurações → API). Cole só no n8n, nunca em conversa ou documento.
   - Salve com o nome **MemberKit API (api_key)**.
2. Descubra o ID de cada plano (*membership level*). Abra no navegador, com a sua chave no lugar de `SUA_CHAVE`:
   `https://memberkit.com.br/api/v1/membership_levels?api_key=SUA_CHAVE`
   Anote o `id` do plano **da Academy (12 meses)**, do plano **da Anatomia (6 meses)** e, se existir, do plano **da mentoria**.
3. Abra o nó **Decidir próximo passo** e preencha no topo do código, por exemplo:
   ```js
   const NIVEIS_ACADEMY = [12345];
   const NIVEIS_ANATOMIA = [12346];
   const NIVEIS_MENTORIA = [];      // vazio se a mentoria não tiver plano na MemberKit
   ```
   **Por que isso é importante:**
   - **Sem os IDs**, qualquer plano ativo conta como compra. Uma ex-aluna com um plano antigo ficaria fora da recuperação.
   - **Upgrade e mentoria:** sem o ID do plano, a única forma de saber que ela comprou é o evento de compra aprovada da Ticto (passo 3).

### 2. WhatsApp (Evolution)

1. Abra o nó **Enviar WhatsApp**. O n8n ligou sozinho a credencial **Evolution account**. Troque pela conta do **WhatsApp da Aline**, o número de atendimento.
2. Em **Instance Name**, coloque o nome da instância da Evolution desse número.

### 3. Ticto: o webhook

1. Ticto → **Tictools → Webhook → Novo webhook**:
   - **URL:** `https://n8n.automato.pro/webhook/ticto-recuperacao-aline`
   - **Versão:** 2.0 (recomendada)
   - **Produtos:** Filgueiras Academy (Sala, Evergreen e Upgrade), Anatomia em Fresh Frozen e Mentoria em grupo.
   - **Eventos:**
     - **Abandono de carrinho** (obrigatório);
     - **Venda aprovada / Compra aprovada** (recomendado: tira da fila na hora);
     - **Pix gerado** (opcional: quem gerou o Pix e não pagou entra na mesma sequência).
2. Copie o **token** do webhook. No n8n, abra o nó **Ler evento da Ticto** e cole no topo:
   `const TICTO_TOKEN = 'o-token-aqui';`
   Assim, quem não tem o token não consegue colocar ninguém na fila.

### 4. Teste (com o seu número)

1. No nó **Decidir próximo passo**, coloque o seu número em `const TELEFONE_TESTE = '5531...';`. Com ele preenchido, **todas** as mensagens vão só para você.
2. **Salve e ative o workflow** (botão **Active** / **Publish**).
3. Numa janela anônima, abra o checkout da Evergreen (`https://payment.ticto.app/ODB726458`). Preencha nome, um e-mail **que não seja de aluna** e telefone. Não pague e espere 1 minuto.
4. No n8n, abra **Executions** e veja a execução do webhook. No nó **Ler evento da Ticto**, confira se saíram e-mail, nome, telefone (`55DDDnúmero`) e `familia: academy`.
   **Se o nó sair vazio:** o formato do payload é diferente do previsto. Me mande a estrutura do JSON que aparece no nó **Webhook da Ticto**, sem nome, e-mail e telefone reais, que eu ajusto.
5. Na Data Table **Aline - Recuperacao de Carrinho**, a linha aparece com `status = ativo`, `etapa = 0` e `proximo_envio` daqui a 1 hora.
6. **Para não esperar 1 hora:** edite `proximo_envio` dessa linha para um horário que já passou. Em até 10 minutos chega a **mensagem 1** no seu WhatsApp, e a linha vai para `etapa = 1`, com `proximo_envio` 24 horas depois do abandono.
7. Repita o passo 6 para receber a **mensagem 2** e a **mensagem 3** (downsell da anatomia).
8. **Teste da compra:** crie outra linha de teste com o e-mail de uma aluna que já tem a Academy (status `ativo`, `etapa` 0, `proximo_envio` no passado). Ela tem que virar `comprou`, sem mensagem.
9. Repita o passo 3 com o checkout da Anatomia (`O39AA5EC7`) e confira `familia: anatomia`.
10. **Acabou:** apague o `TELEFONE_TESTE` (deixe `''`), salve e apague as linhas de teste da tabela.

### 5. Operação

- **Respostas:** a equipe responde as conversas no WhatsApp normalmente. Quando assumir uma conversa, troque o status da pessoa para `parado`.
- **Mensagens manuais:** não mandem à mão as mensagens de 1h, 24h e 48h de [`recuperacao-carrinho.md`](recuperacao-carrinho.md) para quem já está na fila. Ficam manuais o lembrete de Pix com o código e as mensagens do 7º e do 25º dia do upgrade.
- **Uma vez por semana**, olhem a tabela: muitas linhas em `erro` indicam um problema na instância da Evolution, e muitas em `sem_telefone` indicam que o checkout não está pedindo telefone.
- **Volume:** a Evolution não é a API oficial do WhatsApp. Com volume de lançamento, tudo bem. Se um dia passar de centenas de envios por dia, vale migrar para a API oficial, para não arriscar o número.

## Limites conhecidos

- **Os nomes dos campos do webhook** foram escritos para a versão 2.0 da Ticto: status `abandoned_cart`, `customer.email`, `customer.phone` e `item.offer_code`. O código aceita variações, mas o teste do passo 4 é o que confirma.
- **Uma sequência por e-mail e produto, para sempre.** Se ela abandonar a Academy de novo um mês depois, não recebe outra sequência. Para reiniciar, apague a linha dela.
- **A consulta à MemberKit usa o e-mail.** Se ela comprou com outro e-mail, a MemberKit não acha a compra. O evento de compra aprovada da Ticto também usa o e-mail.
