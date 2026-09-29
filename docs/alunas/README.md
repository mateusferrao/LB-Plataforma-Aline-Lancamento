# LP `/alunas` · Ex-alunas da Aline (aula ao vivo + Protocolo de presente)

Oferta exclusiva para as **~1.000 ex-alunas** da Aline, de cursos presenciais e online: a aula
ao vivo **Por Dentro da Face** (06/10/2026, 20h) pelo **mesmo preço de todo mundo, R$67**, com o
**Protocolo de Resgate Vascular** de presente (~~R$109,90~~).

- **Página:** `https://live.alinefilgueiras.com.br/alunas` (`app/alunas/page.tsx`). É `noindex` e
  **não entra em anúncio**: o link vai só na mensagem de WhatsApp.
- **Obrigado:** `https://live.alinefilgueiras.com.br/alunas/obrigado`. É o redirecionamento
  pós-compra da oferta nova na Ticto.
- **Oferta (fonte única):** `lib/ofertaAlunas.ts`
- **Componentes:** `components/alunas/`. Reaproveita `components/Titulo.tsx`, a seção
  `OQueVoceLeva` e as âncoras da `/fresh` (`components/fresh/ancora.ts`).

## 1. Decisões (29/09) e por quê

Base: skills *offers*, *copywriting*, *marketing-psychology* e *sms*.

| Decisão | Por quê |
|---|---|
| **Aula a R$67 + Protocolo de presente** | O benefício de ex-aluna é o presente, não um desconto. A aula não fica mais barata que o preço público, e um brinde de fidelidade é defensável se alguém de fora descobrir. A skill *offers* diz que desconto só se justifica para recompensar quem já é cliente. |
| **Oferta nova na Ticto**, "Aula + Protocolo (ex-alunas)", R$67, **sem bump** | Entrega os dois automaticamente e permite medir o resultado dessa lista separado das outras. |
| **Preço na página e CTA direto ao checkout**, sem o ingresso emitido | É o público mais quente da marca. O ingresso serve para segurar tráfego frio; aqui ele só acrescentaria um passo. |
| **Quem já comprou a aula não ganha o presente** | A FAQ responde com honestidade e oferece o Protocolo por R$29,90, o mesmo valor do order bump. |
| **A urgência é real:** o presente vale até a aula começar (06/10, 20h) | Nada de cronômetro de sessão. Depois das 20h, o botão vira "quero saber da próxima turma". |

**Pontos de atenção:**
- A página é pública para quem tem o link. Se o link circular, alguém de fora consegue comprar. É um
  vazamento aceitável, porque o preço da aula é o mesmo de sempre.
- **Enquanto `checkoutUrl` estiver vazio, todos os botões mostram "Em breve".** A página pode ir ao ar
  antes da oferta existir na Ticto.

## 2. Estrutura da página

1. **Hero:**
   - pré-headline: "Exclusivo para quem já estudou com a Aline";
   - H1: "Você já aprendeu a técnica comigo. *Agora vem ver a face por dentro, em cadáver fresh
     frozen.*" (grifo na parte final);
   - o preço com o Protocolo riscado de presente, o CTA "Garantir meu ingresso de ex-aluna" e o
     contador.
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
> passo a passo de oclusão e necrose que ela usa, do primeiro minuto à cicatrização. Separado, ele
> custa R$109,90. Pra você, vai junto com o ingresso de R$67.
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

- [ ] **Ticto:** criar a oferta "Aula + Protocolo (ex-alunas)":
  - R$67, com 12x de R$6,92 (confirmar a parcela na Ticto);
  - sem order bump, entregando o ingresso e os arquivos do Protocolo;
  - redirecionamento para `/alunas/obrigado`.

  Depois, preencher `checkoutUrl` em `lib/ofertaAlunas.ts`.
- [ ] **Ticto:** criar um checkout só do Protocolo por R$29,90, válido até 06/10 às 20h. Preencher
  `protocoloAvulsoUrl` em `lib/ofertaAlunas.ts` (a FAQ passa a mostrar o link) e usar o mesmo link na
  mensagem 2.
- [ ] **Lista:** exportar as ex-alunas com primeiro nome e telefone e escolher a ferramenta de
  disparo.
- [ ] **Agente de IA:** as notas já estão em `docs/agente-ia/01-playbook-vendas.md` e `02-faq.md`.
