# Disparos de WhatsApp · 05 e 06/10 · Aula "Por Dentro da Face"

**Objetivo:** vender o ingresso da aula (R$67) para as ex-alunas que ainda não compraram.
**Volume:** 3 disparos em 05/10 e 5 em 06/10 (a aula é às 20h, e as inscrições fecham nessa hora).
**Base:** skill *copywriting* (Corey Haines, com a lista de AI tells) e os três livros do Hormozi, como em `docs/alunas/README.md`.

**Estes 8 textos substituem a M4 e a M5 de `docs/alunas/README.md`.** Se a M4 (véspera) ou os três toques da M5 já estiverem agendados na ferramenta, cancele antes. Misturar as duas sequências manda 11 mensagens em dois dias.

## Por que são diferentes das mensagens 1 a 5

As cinco primeiras seguiam o mesmo molde: linha de abertura em caixa alta, "Aqui é da equipe", bloco de oferta, link. Duas rodadas com esse molde deram resultado fraco. As mudanças:

1. **Sem caixa alta e sem "gancho de campanha".** Soa como colega mandando, e não como lista.
2. **Cada mensagem traz uma coisa nova**, uma por vez: uma pergunta, uma cena, o resumo prático, o presente, o preço comparado, a garantia, o prazo. Quem leu a anterior tem motivo pra ler a próxima.
3. **A primeira pede uma resposta, e não um clique.** Quem responde abre a janela de 24h do WhatsApp, e o link chega numa mensagem livre, sem template. É engajamento que vira venda.
4. **Só o que é verdade e já está no repo.** Datas, preço, garantia e o número de ingressos são reais. Nada de "poucas vagas" com número, nada de promessa de agenda cheia.

### Princípios do Hormozi aplicados (equação de valor: sonho × probabilidade ÷ (tempo × esforço))

| Mensagem | Alavanca | Princípio |
|---|---|---|
| 1 · pergunta | Probabilidade percebida | $100M Leads: dar antes de pedir, e personalizar pela resposta |
| 2 · cena | Sonho | Mostrar o resultado (ver por dentro) e a causa (a artéria a milímetros da agulha) |
| 3 · resumo | Tempo e esforço | Tirar toda dúvida prática de uma vez, pra decidir sem sair do WhatsApp |
| 4 · presente | Bônus | "Focus on the bonus": o Protocolo é o motivo, com prazo real (some às 20h) |
| 5 · Aline | Probabilidade | Autoridade na voz dela |
| 6 · a conta | Preço | Âncora de preço de referência e prova social real |
| 7 · garantia | Risco | $100M Offers: garantia nomeada, "se não X em Y, fazemos Z" |
| 8 · prazo | Urgência | Escassez real (o checkout fecha) e saída elegante |

As últimas horas concentram a maior parte das vendas (Offers: 50 a 60% nas últimas 4 horas). Por isso 4 dos 8 disparos ficam entre 12h30 e 20h do dia da aula.

## Cronograma

Horário de Brasília. Se hoje já passou do horário do disparo 1, mantenha a ordem e aproxime os três.

| # | Dia | Hora | Mensagem | `utm_content` |
|---|---|---|---|---|
| 1 | 05/10 | 11h | A pergunta (responde um número) | `d1-pergunta` |
| 2 | 05/10 | 15h | A artéria e o atlas | `d1-cena` |
| 3 | 05/10 | 19h30 | O resumo pra decidir à noite | `d1-resumo` |
| 4 | 06/10 | 9h | O presente expira às 20h | `d0-presente` |
| 5 | 06/10 | 12h30 | Recado da Aline | `d0-aline` |
| 6 | 06/10 | 16h | A conta | `d0-conta` |
| 7 | 06/10 | 18h30 | O risco fica com a gente | `d0-garantia` |
| 8 | 06/10 | 19h40 | Faltam 20 minutos | `d0-ultima` |

**Link de todos:**
`https://live.alinefilgueiras.com.br/alunas?utm_source=whatsapp&utm_medium=lista-alunas&utm_campaign=live-por-dentro-da-face&utm_content=<slug da tabela>`

---

## Disparo 1 · 05/10, 11h · A pergunta

**Objetivo:** a resposta, não o clique. Sem link no corpo. Quem responde recebe o link na hora.

**Texto (com botões de resposta rápida na API oficial, ou "responde só o número"):**

> Oi, {primeiro nome}. Aqui é a equipe da Dra. Aline, com uma pergunta de 3 segundos.
>
> Perto de qual destas áreas a sua mão pensa duas vezes?
>
> 1. Nariz
> 2. Glabela
> 3. Sulco
> 4. Ainda não aplico
>
> Responde só o número e eu te mando o seu ingresso de ex-aluna pra aula de amanhã, às 20h. A Aline vai mostrar por dentro o que fica embaixo da pele nessas áreas.
>
> (Pra parar de receber, responde SAIR.)

**Abertura B (para testar em metade da lista):** "{primeiro nome}, sem textão: perto de qual destas áreas a sua mão pensa duas vezes?" (o resto igual).

**Respostas automáticas (mensagem livre, dentro das 24h):**

- **1, 2 ou 3** (troque {região} por Nariz, Glabela ou Sulco):
  > {Região}, anotado. É uma das áreas que a Aline cita quando fala da mão que hesita, e a aula de amanhã é sobre o que fica embaixo dela.
  >
  > Seu ingresso de ex-aluna sai por R$67, com o Protocolo de Resgate Vascular de presente até a aula começar: {link, `utm_content=d1-resposta`}
- **4:**
  > Então você chegou na hora certa. Quanto antes a gente enxerga a anatomia por dentro, menos vício a mão carrega.
  >
  > A aula é amanhã, às 20h, por R$67, com o Protocolo de Resgate Vascular de presente: {link, `utm_content=d1-resposta`}
- **Qualquer outro texto:** passar para o agente de IA ou o atendimento (+55 31 95349-1799).

**Por que funciona:** nariz, glabela e sulco são as três áreas que a Aline cita no pitch como as que fazem a mão hesitar. A pessoa se identifica sem esforço e a resposta de um número vira lead quente.

---

## Disparo 2 · 05/10, 15h · A artéria e o atlas

> {primeiro nome}, no atlas a artéria é uma linha vermelha. Na face da sua paciente, ela passa a milímetros da agulha.
>
> Amanhã, às 20h, a Aline abre a face por dentro com as imagens das dissecções que fez em fresh frozen e mostra o que o atlas achata. São uns 90 minutos, online e ao vivo.
>
> Ingresso de ex-aluna: R$67, com o Protocolo de Resgate Vascular de presente até a aula começar.
> {link}
>
> (Pra parar de receber, responde SAIR.)

**Abertura B:** "A mesma técnica fica linda numa paciente e sem graça na outra. A explicação está embaixo da pele." (o resto igual, a partir de "Amanhã").

**Por que:** a primeira linha dá a imagem concreta antes de qualquer preço. "A milímetros da agulha" já é a frase da `/fresh`.

---

## Disparo 3 · 05/10, 19h30 · O resumo

> {primeiro nome}, deixo aqui o resumo pra você decidir com calma hoje à noite.
>
> Amanhã, terça, às 20h (Brasília). Online e ao vivo, com uns 90 minutos.
> O link da sala chega no grupo de WhatsApp assim que o pagamento confirma.
> Não tem replay avulso. A gravação só entra na condição especial da Filgueiras Academy, que quem está na sala conhece primeiro.
> R$67 em 12x de R$6,92 ou no Pix, e o Protocolo de Resgate Vascular de presente.
> Se a noite não valer, devolvemos: 7 dias depois da compra, ou até 24h depois da aula pra quem esteve ao vivo.
>
> As inscrições fecham quando a aula começa.
> {link}
>
> (Pra parar de receber, responde SAIR.)

**Por que:** é a mensagem que o agente de IA mais teria que repetir no atendimento. Resolve horário, replay, preço e garantia de uma vez, e quem estava "pensando" tem agora tudo na mão. Nenhum detalhe da condição da plataforma (regra do playbook).

---

## Disparo 4 · 06/10, 9h · O presente expira às 20h

> Bom dia, {primeiro nome}. A aula é hoje, às 20h, e hoje também é o último dia do seu presente.
>
> O Protocolo de Resgate Vascular tem 22 páginas, uma prancha pra pendurar na parede da sala, uma ficha de acompanhamento hora a hora e 2 cards pra mandar à paciente. É o passo a passo que a Aline usa em oclusão e necrose, do primeiro minuto à cicatrização.
>
> Ele vai de presente com o ingresso de R$67 até a aula começar. Depois das 20h, sai.
> {link}
>
> (Pra parar de receber, responde SAIR.)

**Abertura B:** "Se uma oclusão acontecer hoje na sua cadeira, onde está o seu passo a passo?" (o resto igual, a partir de "O Protocolo").

**Por que:** é o "focus on the bonus" do Hormozi. O presente é concreto (5 arquivos, impressos ou enviados à paciente) e o prazo é real. Sem nome de medicamento, como manda a Meta.

---

## Disparo 5 · 06/10, 12h30 · Recado da Aline

A Aline não consegue gravar. O texto vai assinado por ela, em primeira pessoa, curto e sem formatação. **Ela precisa aprovar antes de enviar.**

> {primeiro nome}, aqui é a Aline.
>
> Hoje, às 20h, eu abro a face por dentro com as imagens das dissecções que eu fiz em fresh frozen. Foi estudando assim que eu parei de aplicar pensando "e se tiver uma artéria bem aqui".
>
> Eu gostaria de te ver na sala. O ingresso de ex-aluna é R$67, com o Protocolo de presente, e se você entrar e achar que não valeu, a gente devolve.
> {link}
>
> (Pra parar de receber, responde SAIR.)

**Atenção ao mensageiro:** na API oficial, mande como template com o nome da Aline no perfil da conta, ou envie por um número que mostre a foto dela.

**Por que:** voz de quem ensina, sem preço de referência e sem urgência, pra alternar o tom depois de três mensagens de oferta.

---

## Disparo 6 · 06/10, 16h · A conta

> {primeiro nome}, vale fazer a conta antes das 20h.
>
> Um curso internacional de anatomia em cadáver fresh frozen chega a custar cerca de R$35 mil. A aula de hoje reúne as imagens das dissecções da Aline numa noite, por R$67. Isso é menos que uma seringa de preenchedor, e o Protocolo de Resgate Vascular, que vale R$109,90, vai de presente.
>
> Mais de 180 colegas já garantiram o ingresso.
> {link}
>
> (Pra parar de receber, responde SAIR.)

**Abertura B:** "Um retoque, um produto desperdiçado ou uma paciente que não volta custam mais do que R$67." (e seguir a partir de "A aula de hoje", sem o primeiro parágrafo da comparação).

**Antes de enviar:** troque "Mais de 180" pelo número da hora, vindo da Ticto. Se não puder atualizar, apague a linha. Nunca arredonde pra cima.

**Por que:** o "R$35 mil" é a âncora genérica que a `/fresh` já usa (não é o preço de um curso da Aline). A prova social é real, o que a torna defensável se alguém perguntar.

---

## Disparo 7 · 06/10, 18h30 · O risco fica com a gente

> {primeiro nome}, falta uma hora e meia pra aula.
>
> Se a dúvida é "e se não valer a pena", o risco é nosso. Você entra, assiste a noite inteira e, se achar que não valeu, pede o dinheiro de volta até 24h depois. Chamamos de Garantia de Presença. E ela vem junto com os 7 dias de reembolso, sem perguntas.
>
> Quem estiver na sala também conhece primeiro a condição especial da Filgueiras Academy. Essa parte só acontece ao vivo.
> {link}
>
> (Pra parar de receber, responde SAIR.)

**Abertura B:** "{primeiro nome}, a pergunta que mais chega no nosso WhatsApp é se tem replay. Não tem. É por isso que a garantia cobre a noite inteira." (o resto igual, a partir de "Se a dúvida").

**Por que:** quem ainda não comprou a esta altura quase sempre está pesando risco. A garantia tem nome e termos ("se não X em Y, fazemos Z"). A condição da plataforma entra como motivo extra pra estar ao vivo, sem preço nem detalhe.

---

## Disparo 8 · 06/10, 19h40 · Faltam 20 minutos

> {primeiro nome}, sem textão: faltam 20 minutos.
>
> Às 20h a Aline começa e as inscrições fecham. Depois disso não dá mais pra entrar.
>
> Se for hoje, é por aqui: {link}
>
> Se não for, tudo bem. A gente para de falar dessa aula por aqui.
>
> (Pra parar de receber, responde SAIR.)

**Por que:** a saída elegante ("tudo bem") tira a pressão, reduz pedidos de SAIR e deixa a porta aberta pra próxima oferta. É o último toque da campanha, e a frase final vale: depois da aula, não mande mais nada sobre esta turma a quem não comprou.

---

## Regras de envio

1. **Exclua os compradores antes de cada disparo.** Exporte da Ticto (hora da compra) e cruze com a lista. Quem comprou entre o 3 e o 4 não pode receber o 4.
2. **Quem responder SAIR sai de todos os disparos seguintes**, na hora.
3. **Quem responder qualquer coisa (exceto SAIR) sai do disparo em massa** e vai pro agente de IA ou pro atendimento humano, que continua a conversa.
4. **Em lotes**, nunca a lista inteira de uma vez.
5. **API oficial:** cadastre cada mensagem como template de categoria *Marketing*. Use `{{1}}` para o primeiro nome. No botão de link, deixe a URL base fixa e a variável só no `utm_content` (`...&utm_content={{1}}`), pra reaproveitar o mesmo template.
6. **Cuidado com a qualidade da conta:** 8 mensagens em 2 dias é bastante. Se o número de SAIR ou de bloqueios subir num disparo, corte o seguinte. Pela força de cada um, eu cortaria primeiro o 2 e o 4, e manteria o 1, o 7 e o 8.
7. **Teste obrigatório antes de enviar** (pendência do `docs/alunas/README.md`): clique no link do disparo 1, confira se o checkout abre em **R$67** com o cupom EXALUNAS e se as UTMs aparecem na URL.

## Checagem de copy (feita no texto final)

- Sem travessão, sem exclamação, sem emoji.
- Sem "não é X, é Y", sem lista de negações, sem pergunta respondida pelo próprio texto.
- No máximo uma lista por mensagem. Só as listas que são listas de verdade (as quatro opções do 1, os dados do 3, os arquivos do 4).
- Sem número de vagas, sem promessa de agenda, de faturamento ou de resultado clínico, sem nome de medicamento, sem a marca "Botox".
- A aula é descrita como "imagens das dissecções", e nunca como dissecção ao vivo.

## Pendências

- [ ] **Validar com a Aline** que a aula de amanhã cobre nariz, glabela e sulco por dentro (disparo 1 e as respostas).
- [ ] **A Aline aprova o texto do disparo 5** (primeira pessoa, com a frase sobre "e se tiver uma artéria bem aqui").
- [ ] **Atualizar o "180"** do disparo 6 com o número real da hora do envio.
- [ ] **Cancelar a M4 e a M5** do `docs/alunas/README.md`, se estiverem agendadas.
- [ ] **Template do disparo 1:** decidir se os 4 números viram botões de resposta rápida na API oficial (o limite é de 3 botões visíveis por vez). Se for assim, deixe "Ainda não aplico" como texto livre.

## Se a lista não for de ex-alunas

| Onde | Troque por |
|---|---|
| Link | `https://live.alinefilgueiras.com.br/fresh?utm_source=whatsapp&utm_medium=lista-leads&utm_campaign=live-por-dentro-da-face&utm_content=<slug>` |
| "Ingresso de ex-aluna" | "Ingresso" |
| "com o Protocolo de presente" | Apague. O disparo 4 vira: "No checkout dá pra levar o Protocolo de Resgate Vascular por R$29,90, opcional." |
| Disparo 6, "o Protocolo vale R$109,90" | "de R$197 por R$67" (o "de" que a `/fresh` mostra) |
| Respostas do 1 | Sem o Protocolo: "Seu ingresso por R$67: {link}" |
