# n8n · Recuperação de carrinho automática (Ticto → WhatsApp)

Workflow: **Aline · Recuperação de carrinho (Ticto → WhatsApp)**, no n8n (projeto pessoal),
`https://n8n.automato.pro/workflow/hG8cmJAd7Ry8BFxq`. Ele está **desativado** até você terminar este passo a passo.
Desde 06/10 o envio é pela **API oficial do WhatsApp** (nó **Enviar template WhatsApp**, credencial "Suporte Filgueiras Academy - WhatsApp account"), com os três templates aprovados de [`templates-whatsapp-oficial.md`](templates-whatsapp-oficial.md). As mensagens de [`recuperacao-carrinho.md`](recuperacao-carrinho.md) continuam valendo para o envio manual da equipe.

## Como funciona

```
Ticto (webhook) ─► Ler evento ─► Abandono?        ─► já está na fila? ─► não: entra na fila (Data Table)
                                └► Venda aprovada? ─► marca "comprou" em tudo o que está ativo do e-mail
                                                    └► registra a compradora (e-mail + produto)

A cada 10 min ─► quem está "ativo" e na hora ─► manda o template da vez (API oficial) e agenda o próximo
```

Os mesmos três templates para todas as ofertas:

| | 1 h | 24 h | 48 h |
|---|---|---|---|
| Template | `aline_recupera_1h` | `aline_recupera_24h` | `aline_recupera_48h` |
| Ângulo | Tirar o atrito do pagamento | Valor e risco zero (garantia de 7 dias) | Última mensagem, a decisão é dela |

| Oferta | `{{1}}` / `{{2}}` do corpo | Botão (`payment.ticto.app/{{1}}`) |
|---|---|---|
| Academy Sala `OEF7AADF6` | nome / Filgueiras Academy | `OEF7AADF6` até 06/10 23h59; depois, `ODB726458` |
| Academy Evergreen `ODB726458` | nome / Filgueiras Academy | `ODB726458` |
| Anatomia `O39AA5EC7` | nome / Curso de Anatomia em Fresh Frozen | `O39AA5EC7` |
| Upgrade `OB97300B4` | nome / Upgrade para a Filgueiras Academy | `OB97300B4` |
| Mentoria `O5491F4AA` | nome / Mentoria em grupo com a Dra. Aline | `O5491F4AA` |

Sem nome no webhook, o `{{1}}` vai como "Colega" (a Meta recusa variável vazia). O downsell automático da anatomia às 48h saiu com a troca para templates genéricos; se quiserem de volta, vira um 4º template.

**Regras que o fluxo já segue:**
- Qualquer outra oferta da Ticto (ingresso da aula, protocolo) é ignorada.
- Há **uma sequência por e-mail e produto**. Se a Ticto mandar o mesmo abandono de novo, ninguém recebe a mensagem 1 duas vezes.
- **Quem comprou sai da fila pelo evento Venda aprovada da Ticto**, de qualquer oferta da Academy, da anatomia ou da mentoria, na hora da compra. Sem esse evento ligado, o fluxo manda mensagem para quem já pagou.
- A compradora também fica registrada. Se ela abrir de novo o checkout do mesmo produto depois de comprar, não entra na fila.
- **Horário:** só envia das **8h às 21h59** (Brasília). Fora disso, a mensagem espera até as 8h. A exceção é a noite da aula (06/10, até 23h59), para os abandonos da Sala.
- O código Pix **não** vai na mensagem. O lembrete de Pix com o código continua manual, pela tela **Pix emitidos** da Ticto.

A fila fica na Data Table **Aline - Recuperacao de Carrinho** (n8n → Overview → Data tables). Os status possíveis:

| Status | Quer dizer |
|---|---|
| `ativo` | Na sequência; `proximo_envio` diz quando sai a próxima mensagem |
| `comprou` | Compra aprovada na Ticto. Parou (ou nunca começou) |
| `finalizado` | Recebeu todas as mensagens do produto e não comprou |
| `sem_telefone` | O abandono veio só com e-mail (sem telefone completo). Não dá pra mandar WhatsApp |
| `erro` | A API do WhatsApp recusou o envio (template, número ou parâmetro). O motivo está em `observacao` |

Para **parar a sequência de alguém** (por exemplo, ela respondeu e a equipe assumiu), troque o status dela para `parado`.

---

## Passo a passo

### 1. WhatsApp (API oficial)

Já configurado no nó **Enviar template WhatsApp**: credencial "Suporte Filgueiras Academy - WhatsApp account", número `1244686352066586`, template e variáveis vindos do nó **Decidir próximo passo**. Nada a fazer aqui, a não ser que troquem de número ou renomeiem os templates (os nomes ficam na constante `TEMPLATES` do **Decidir próximo passo**).

### 2. Ticto: o webhook

1. Ticto → **Tictools → Webhook → Novo webhook**:
   - **URL:** `https://n8n.automato.pro/webhook/ticto-recuperacao-aline`
   - **Versão:** 2.0 (recomendada)
   - **Produto:** Filgueiras Academy 3.0. As 5 ofertas (Sala, Evergreen, Anatomia, Upgrade e Mentoria) ficam dentro dele.
   - **Eventos:**
     - **Abandono de carrinho** (obrigatório);
     - **Venda aprovada / Compra aprovada** (obrigatório: é o que tira da fila quem comprou);
     - **Pix gerado** (opcional: quem gerou o Pix e não pagou entra na mesma sequência).
2. Copie o **token** do webhook. No n8n, abra o nó **Ler evento da Ticto** e cole no topo:
   `const TICTO_TOKEN = 'o-token-aqui';`
   Assim, quem não tem o token não consegue colocar ninguém na fila.

### 3. Teste (com o seu número)

1. No nó **Decidir próximo passo**, coloque o seu número em `const TELEFONE_TESTE = '5531...';`. Com ele preenchido, **todas** as mensagens vão só para você.
2. **Salve e ative o workflow** (botão **Active** / **Publish**).
3. Numa janela anônima, abra o checkout da Evergreen (`https://payment.ticto.app/ODB726458`). Preencha nome, um e-mail **que não seja de aluna** e telefone. Não pague e espere 1 minuto.
4. No n8n, abra **Executions** e veja a execução do webhook. No nó **Ler evento da Ticto**, confira se saíram e-mail, nome, telefone (`55DDDnúmero`) e `familia: academy`.
   **Se o nó sair vazio:** o formato do payload é diferente do previsto. Me mande a estrutura do JSON que aparece no nó **Webhook da Ticto**, sem nome, e-mail e telefone reais, que eu ajusto.
5. Na Data Table **Aline - Recuperacao de Carrinho**, a linha aparece com `status = ativo`, `etapa = 0` e `proximo_envio` daqui a 1 hora.
6. **Para não esperar 1 hora:** edite `proximo_envio` dessa linha para um horário que já passou. Em até 10 minutos chega a **mensagem 1** no seu WhatsApp, e a linha vai para `etapa = 1`, com `proximo_envio` 24 horas depois do abandono.
7. Repita o passo 6 para receber o `aline_recupera_24h` e o `aline_recupera_48h`. Toque no botão **Finalizar inscrição** e confira se abre o checkout certo.
8. **Teste da compra, sem comprar de verdade:** com uma linha de teste `ativo` na tabela, mande um evento de compra falso para o webhook, com o mesmo e-mail e o token. No terminal:
   ```
   curl -X POST https://n8n.automato.pro/webhook/ticto-recuperacao-aline \
     -H 'Content-Type: application/json' \
     -d '{"status":"authorized","token":"O-TOKEN","customer":{"email":"SEU-EMAIL-DE-TESTE"},"item":{"offer_code":"ODB726458"}}'
   ```
   A linha tem que virar `comprou`. Depois, confira na primeira compra real: em Executions, o status que chegou no nó **Ler evento da Ticto** tem que estar na lista `COMPRA` do código (`authorized`, `approved`, `paid`...). Se vier outro nome, me mande que eu incluo.
9. Repita o passo 3 com o checkout da Anatomia (`O39AA5EC7`) e confira `familia: anatomia`.
10. **Acabou:** apague o `TELEFONE_TESTE` (deixe `''`), salve e apague as linhas de teste da tabela.

### 4. Operação

- **Respostas e "SAIR":** os botões de resposta rápida ("Tenho uma dúvida", "Falar com a equipe", "Me ajuda a decidir") e o "SAIR" chegam no número de atendimento, onde está o agente de IA, **não no n8n**. O fluxo não para sozinho: quando a equipe assumir uma conversa ou a pessoa pedir pra sair, troque o status dela para `parado`.
- **Mensagens manuais:** não mandem à mão as mensagens de 1h, 24h e 48h de [`recuperacao-carrinho.md`](recuperacao-carrinho.md) para quem já está na fila. Ficam manuais o lembrete de Pix com o código e as mensagens do 7º e do 25º dia do upgrade.
- **Uma vez por semana**, olhem a tabela: muitas linhas em `erro` indicam um problema no número ou nos templates (vejam o motivo em `observacao`), e muitas em `sem_telefone` indicam que o checkout não está pedindo telefone.
- **Qualidade do número:** a Meta acompanha bloqueios e denúncias dos templates de marketing. Se a qualidade do número cair no WhatsApp Manager, pausem o workflow e revejam o volume.

## Limites conhecidos

- **Os campos do webhook** foram conferidos com payloads reais da Ticto (06/10):
  - **Abandono** (`abandoned_cart`): `name`, `email` e `phone` vêm soltos no topo, e o código da oferta só aparece no `checkout_url`. A Ticto manda `"Não informado"` quando o campo ficou vazio, e o telefone pode vir **incompleto** (a pessoa saiu no meio da digitação).
  - **Venda** (`authorized`): dados em `customer` (com `phone.ddi`, `ddd` e `number`) e a oferta em `item.offer_code`.
  - **Abandono sem e-mail válido e sem telefone completo** é ignorado: não há como falar com a pessoa.
- **Uma sequência por e-mail e produto, para sempre.** Se ela abandonar a Academy de novo um mês depois, não recebe outra sequência. Para reiniciar, apague a linha dela.
- **Tudo depende do evento Venda aprovada chegar.** Se o n8n estiver fora do ar na hora da compra, a compradora continua na fila. Depois de qualquer queda do n8n, olhem as linhas `ativo` contra as vendas da Ticto do período.
- **A compra é reconhecida pelo e-mail ou pelo telefone** do abandono. Se ela comprou com outro e-mail e outro telefone, continua na fila.
- **Erros que a Meta avisa depois** (número sem WhatsApp, limite de mensagens de marketing por pessoa) não voltam na resposta do envio: a linha fica como enviada. Eles aparecem nos relatórios do WhatsApp Manager.
- **O fluxo não lê respostas.** Quem responde ou pede "SAIR" continua na sequência até a equipe marcar `parado`.
