# Templates de recuperação de carrinho · API oficial do WhatsApp (Meta)

> **Aprovados na Meta em 06/10** e ligados no n8n (nó **Enviar template WhatsApp**, ver [`n8n-recuperacao.md`](n8n-recuperacao.md)).

Três templates **genéricos**: servem para quem abandonou qualquer oferta (Academy Sala ou Evergreen, curso de
anatomia, upgrade ou mentoria). O nome da oferta e o link entram por variável. Fora da janela de 24h, a API
oficial só aceita template aprovado, e as três mensagens de recuperação (1h, 24h e 48h) caem fora dessa janela.

**O que os três seguem:**
- **Hormozi:** cada mensagem tem um ângulo: tirar o atrito, depois valor com risco zero, depois a decisão.
  Nenhuma dá desconto ou inventa urgência.
- **Compliance:** nada de promessa de agenda, faturamento ou resultado clínico, e nunca a marca "Botox".
- **Garantia citada:** 7 dias. É a mínima de todas as ofertas (Academy, anatomia e upgrade têm a Garantia
  Mão Segura; a mentoria, 7 dias).

## Configuração comum aos três

| Campo | Valor |
|---|---|
| Categoria | **Marketing** (recuperação de carrinho é promocional para a Meta; em Utilidade, é rejeitado) |
| Tipo | Personalizado (padrão) |
| Idioma | Português (BR) · `pt_BR` |
| Cabeçalho | Nenhum |
| Rodapé | `Filgueiras Academy · Responda SAIR para não receber mais` |
| Botão 1 | **Visitar site** · URL **dinâmica** · `https://payment.ticto.app/{{1}}` · exemplo: `ODB726458` |
| Botão 2 | **Resposta rápida** (texto em cada template) |

**Variáveis do corpo:**
- `{{1}}`: primeiro nome. Exemplo: `Ana`.
- `{{2}}`: nome da oferta, **sem artigo**. Exemplo: `Filgueiras Academy`.

| Oferta (código Ticto) | `{{2}}` do corpo | `{{1}}` do botão |
|---|---|---|
| Academy Sala `OEF7AADF6` (só até 06/10, 23h59) | `Filgueiras Academy` | `OEF7AADF6` (depois de 23h59: `ODB726458`) |
| Academy Evergreen `ODB726458` | `Filgueiras Academy` | `ODB726458` |
| Anatomia `O39AA5EC7` | `Curso de Anatomia em Fresh Frozen` | `O39AA5EC7` |
| Upgrade `OB97300B4` | `Upgrade para a Filgueiras Academy` | `OB97300B4` |
| Mentoria `O5491F4AA` | `Mentoria em grupo com a Dra. Aline` | `O5491F4AA` |

> As regras da Meta já estão atendidas:
> - nenhuma variável no começo ou no fim do corpo;
> - nenhuma variável colada em outra;
> - corpo abaixo de 1.024 caracteres;
> - botão de resposta rápida com até 25 caracteres;
> - rodapé com até 60 caracteres.

---

## 1. `aline_recupera_1h` (1 hora depois do abandono: tirar o atrito)

```
*Faltou um clique pra você entrar.*

Oi, {{1}}! A sua inscrição em *{{2}}* ficou parada no pagamento. Se o cartão recusou, você pode tentar de novo, parcelar em até 12x ou pagar no Pix.

O botão abaixo te leva direto pro pagamento.

Travou em alguma coisa? Responda esta mensagem que a equipe da Dra. Aline resolve com você.
```
Botões: **[Finalizar inscrição]** (URL) · **[Tenho uma dúvida]** (resposta rápida)

## 2. `aline_recupera_24h` (24 horas: valor e risco zero)

```
*A paciente não vê o seu certificado. Ela sente a sua mão.*

{{1}}, ontem você quase entrou em *{{2}}*. Tudo o que a Dra. Aline colocou ali tem um objetivo só: você chegar na próxima paciente mais segura na consulta e na agulha.

E o risco fica com a gente: se não fizer sentido nos primeiros 7 dias, você pede o dinheiro de volta, sem explicar nada.

A sua inscrição continua no botão abaixo.
```
Botões: **[Finalizar inscrição]** (URL) · **[Falar com a equipe]** (resposta rápida)

## 3. `aline_recupera_48h` (48 horas: última mensagem, a decisão é dela)

```
*Esta é a última mensagem que a gente te manda sobre isso.*

{{1}}, a sua inscrição em *{{2}}* ainda está aberta, e depois daqui a gente não insiste mais.

Só uma pergunta: se tudo continuar como está pelos próximos 6 meses, a sua mão na agulha fica mais segura ou igual? Se a resposta for "igual", o botão abaixo é o próximo passo.

Se o que pesou foi outra coisa, responda e conta pra gente. A equipe lê uma por uma.
```
Botões: **[Finalizar inscrição]** (URL) · **[Me ajuda a decidir]** (resposta rápida)

---

## Como cadastrar na Meta (WhatsApp Manager)

1. **business.facebook.com** → WhatsApp Manager → conta do número da Aline → **Gerenciar modelos** → **Criar modelo**.
2. **Categoria:** Marketing. **Tipo:** Personalizado. **Nome:** exatamente `aline_recupera_1h`, `aline_recupera_24h` ou `aline_recupera_48h`, em minúsculas e com `_`. **Idioma:** Português (BR).
3. **Corpo:** cole o texto do bloco acima. Ao digitar `{{1}}` e `{{2}}`, a Meta pede exemplos: `Ana` e `Filgueiras Academy`.
4. **Rodapé:** `Filgueiras Academy · Responda SAIR para não receber mais`.
5. **Botões:**
   - **Visitar site**: texto "Finalizar inscrição", tipo **Dinâmico**, URL `https://payment.ticto.app/{{1}}`, exemplo `https://payment.ticto.app/ODB726458`;
   - **Resposta rápida**: com o texto de cada template.
6. **Enviar para análise.** A aprovação leva de minutos a 24 horas. Se rejeitar, copie o motivo e me mande.
7. Repita para os três.

## No n8n (feito em 06/10)

- O nó **Decidir próximo passo** escolhe o template pela etapa (1h, 24h, 48h) e monta as variáveis; o **Enviar template WhatsApp** manda o corpo (`{{1}}`, `{{2}}`) e o sufixo do botão de URL.
- As respostas rápidas e o "SAIR" chegam no número de atendimento (agente de IA), não no n8n. O agente sabe responder (`docs/agente-ia/01-playbook-vendas.md`, seção 13); para tirar alguém da sequência, a equipe marca `parado` na tabela.
- **O que fica de fora destes três templates** e pode virar um 4º, se quiserem:
  - o **downsell da anatomia** às 48h para quem abandonou a Academy;
  - a **vaga da colega** na recuperação da mentoria, que só vale no mesmo dia.
