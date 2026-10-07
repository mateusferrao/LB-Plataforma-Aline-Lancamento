# Templates de WhatsApp · pós-aula (07/10) e ex-assinantes da plataforma

Dois templates da API oficial, no mesmo formato dos três de `docs/plataforma/templates-whatsapp-oficial.md` (categoria Marketing, `pt_BR`, rodapé com SAIR, botão de link e botão de resposta rápida).

| | Template 1 | Template 2 |
|---|---|---|
| Nome | `live_pos_aula_academy_v1` | `live_ex_assinantes_v1` |
| Quem recebe | Quem comprou o ingresso (R$67) e ainda não comprou a Academy, tenha ido à aula ou não | Ex-assinantes da plataforma: membros da MemberKit sem plano ativo |
| Quando | 07/10, pela manhã (a Garantia de Presença dessa turma fecha às 20h de 07/10) | 07/10 à tarde ou 08/10 de manhã, depois do template 1 |
| Oferta | Academy Evergreen: R$1.797, 12 meses | Academy Evergreen: R$1.797, 12 meses, **mais um bônus só da lista** |
| Objeção principal | "Foi só uma noite, e agora?" e "perdi a aula" | "Já tenho/já vi tudo, o que tem de novo?" e "já fiz curso e não mudou nada" |

**Duas lacunas para preencher antes de enviar** (marcadas `[...]` nos textos):

1. **O bônus dos ex-assinantes** (só no template 2). A oferta é "mesmo preço, mais um bônus", como combinado. Eu não inventei o bônus. Opções que já existem na operação:
   - **+3 meses de acesso (15 no total).** É a opção mais simples: a equipe já estendeu em lote para a noite da aula, e o plano "+3 meses de acesso estendido" já existe na MemberKit.
   - **Manual do Envelhecimento** (valor R$600). Funciona, mas hoje ele é vendido como order bump na Evergreen, então dá para o comprador comum questionar.
   - Evite certificado e mentoria: são exclusivos de quem comprou na noite da aula.
2. **O prazo "por tempo limitado".** Está como `{{2}}` (uma data, como `10/10`). Sem data real, "por tempo limitado" é urgência falsa. O doc de recuperação de carrinho da equipe proíbe (regra 4), e e pode ser tratada como publicidade enganosa pelo Código de Defesa do Consumidor. A Evergreen não tem prazo, então no template 2 o prazo vale para o **bônus**, que vocês controlam. No template 1 não há nada que acabe, então a linha é opcional: só use se vocês criarem um prazo de verdade.

## Configuração comum

| Campo | Valor |
|---|---|
| Categoria | **Marketing** |
| Idioma | Português (BR) · `pt_BR` |
| Cabeçalho | Nenhum |
| Rodapé | `Filgueiras Academy · Responda SAIR para não receber mais` |
| Botão 1 | **Visitar site** · URL dinâmica · `https://live.alinefilgueiras.com.br/academy?utm_source=whatsapp&utm_medium=<medium do template>&utm_campaign=live-por-dentro-da-face&utm_content={{1}}` |
| Botão 2 | **Resposta rápida** · `Tenho uma dúvida` |

O botão leva à `/academy`, e não direto ao checkout, para a pessoa ver a pilha, as perguntas frequentes e a garantia antes do preço. A página já tem o botão de compra, e o `ticto-echo` repassa as UTMs ao checkout.

**Tamanho:** o template 1 tem cerca de 700 caracteres e o 2, cerca de 960 com o bônus preenchido, os dois abaixo do limite de 1.024 da Meta.

**Variáveis do corpo:** `{{1}}` é o primeiro nome (exemplo `Ana`, e quando faltar o nome use `Colega`, porque a Meta recusa variável vazia). `{{2}}` é a data limite, sem ano (exemplo `10/10`).

---

## Template 1 · `live_pos_aula_academy_v1`

Ângulo: a aula foi a amostra, e o curso completo está aberto. Mexe nas alavancas de **sonho** (a face por dentro de verdade) e de **sacrifício** (preço por dia, garantia).

```
*A aula de ontem foi a amostra.*

{{1}}, a Dra. Aline mostrou a face por dentro em uma noite. O curso completo de Fresh Frozen + dissecção está na *Filgueiras Academy*, junto com:

• mais de 70 aulas de técnica, do preenchimento às intercorrências
• o roteiro da consulta pra fechar em vez de ouvir "vou pensar"
• 6 encontros ao vivo no ano e 1 aula de casos com a Aline
• preferência nos cursos presenciais

O valor somado é R$8.794. Você leva por *R$1.797*, com 12 meses de acesso, em 12x de R$185,85 ou no Pix. Dá menos de R$5 por dia.

O risco fica com a gente: 7 dias pra pedir o dinheiro de volta sem explicar nada, e 30 dias se a sua mão não ficar mais segura depois do módulo de anatomia.
```

**Linha opcional, só com prazo real** (entra antes do último parágrafo):

```
Por tempo limitado, até {{2}}.
```

Botões: **[Ver a Academy]** (URL) · **[Tenho uma dúvida]** (resposta rápida)
Botão de URL: `utm_medium=lista-ingresso`, exemplo de `{{1}}`: `pos-aula-academy`.

**Por que funciona**
- Abre pelo que todo mundo viu (ou ouviu falar) ontem, sem exigir que a pessoa tenha estado na sala. Serve a quem faltou.
- A pilha vem antes do preço, e o preço vem junto com a conta por dia e a garantia (as regras 2 e 3 do doc de recuperação).
- "Foi só uma amostra" já responde à dúvida de "e agora?", sem prometer nada da aula que a pessoa não viu.

---

## Template 2 · `live_ex_assinantes_v1`

Ângulo: a pessoa já passou pela plataforma e pode achar que não há nada novo. O texto confirma o que ela já conhece, lista só o que entrou, e dá um bônus que só a lista leva, com data.

```
*Tem coisa nova na plataforma da Aline.*

{{1}}, você já fez parte da plataforma da Dra. Aline. Se a dúvida é "o que eu ainda não vi?", aqui está o que entrou:

• o curso de Fresh Frozen + dissecção, com a face por dentro, camada por camada
• 6 encontros ao vivo no ano, com a Aline ou o time dela, pra você levar as dúvidas do consultório
• 1 aula ao vivo com a Aline pra discutir casos
• preferência nos cursos presenciais

O conteúdo que você já conhece continua lá, e agora tem alguém junto com você.

Pra quem já foi assinante, o valor é o mesmo de todo mundo, *R$1.797* por 12 meses (12x de R$185,85 ou Pix), e você leva de bônus [BÔNUS], por tempo limitado, até {{2}}.

A Garantia Mão Segura cobre o risco: 7 dias pra pedir o dinheiro de volta sem explicar nada, e 30 dias se a sua mão não ficar mais segura depois do módulo de anatomia.

Se o que pesou foi preço, tempo ou "já fiz curso e não mudou nada", é só responder aqui.
```

Botões: **[Ver a Academy]** (URL) · **[Tenho uma dúvida]** (resposta rápida)
Botão de URL: `utm_medium=lista-ex-assinantes`, exemplo de `{{1}}`: `ex-assinantes-novidade`.

**Exemplo de preenchimento do bônus** (escolha uma opção das lacunas acima): `+3 meses de acesso, 15 no total`. A frase final fica "e você leva de bônus +3 meses de acesso, 15 no total, por tempo limitado, até 10/10."

**Por que funciona**
- **"O que ainda não vi?"** é a objeção de novidade dita com as palavras da pessoa, e a lista logo abaixo responde com fatos do que entrou (o curso de fresh frozen, os encontros e a aula de casos).
- **"O conteúdo que você já conhece continua lá"** não finge que tudo é novo. A plataforma tem pouco uso hoje (18 membros ativos nos últimos 30 dias, entre 706), e prometer "tudo renovado" seria falso. A promessa é só a que a equipe garante: os encontros ao vivo.
- **"Já fiz curso e não mudou nada"** é a objeção que mais aparece na pesquisa de 2025 (falta de execução). A resposta do pitch é a mesma: quase nunca faltou conteúdo, faltou ter alguém junto.
- **Preço igual, bônus com data.** Mantém a regra "nunca desconto", dá à ex-assinante um motivo para agir já, e o prazo é verdadeiro porque o bônus é de vocês.
- **A porta aberta no fim** ("é só responder aqui") deixa a pessoa dizer a objeção em vez de sumir, e vira insumo para a próxima mensagem.

---

## Como montar as listas

1. **Template 1:** compradores do ingresso na Ticto (R$67, 06/10) menos quem já comprou a Academy (Evergreen ou Sala), a anatomia ou a mentoria.
2. **Template 2:** exportar da MemberKit os membros **sem plano ativo** (hoje são cerca de 660 dos 706; só uns 40 têm "Filgueiras Academy Anual", "Plataforma completa" ou "1ª Turma Plataforma Botox" ativo). Depois tirar:
   - quem recebeu o template 1;
   - quem comprou a Academy desde 06/10;
   - quem pediu SAIR em qualquer disparo anterior.
3. **Quem nunca entrou** (43 membros): vale o mesmo texto, mas a frase "você já fez parte" continua verdadeira, e eles são os mais "frios".
4. **Entrega do bônus:** a equipe cruza o e-mail ou o telefone da compra com a lista de ex-assinantes depois do pagamento e libera o bônus em lote (como na extensão em lote de 07/10 a 10/10). Se o bônus for tempo de acesso, o plano "+3 meses de acesso estendido" já existe na MemberKit. Combine com a Ticto quem ficará responsável.

## Se responderem

As respostas chegam no número de atendimento, e o agente de IA já cobre a Academy (`docs/agente-ia/04-filgueiras-academy.md`). Respostas curtas para as objeções do template 2, se alguém da equipe atender à mão:

- **"O que tem de novo?"** "O curso de Fresh Frozen + dissecção, os 6 encontros ao vivo no ano e uma aula de casos com a Aline. O que você já via continua lá."
- **"Já fiz curso e não mudou nada."** "Quase nunca faltou conteúdo. Faltou ver por dentro e ter alguém junto. Por isso os encontros ao vivo e a aula de casos."
- **"Tá caro."** "Dá menos de R$5 por dia, ou 12x de R$185,85, e tem 7 dias pra pedir o dinheiro de volta."
- **"Não tenho tempo."** "São 12 meses, no seu ritmo, e os encontros ficam gravados."

Nunca ofereça desconto nem prometa agenda, faturamento ou resultado clínico.

## Checagem de copy

- Sem travessão e sem emoji. Sem "não é X, é Y", sem lista de negações, sem pergunta respondida pelo próprio texto.
- A única lista é a de itens que a pessoa leva (quatro itens reais, nunca três por reflexo).
- Sem nome de medicamento, sem a marca "Botox", sem promessa de agenda ou resultado clínico, sem número de vagas.
- O corpo termina em texto, e nenhuma variável fica no começo, no fim ou colada em outra.

## Pendências

- [ ] **Definir o bônus dos ex-assinantes** e trocar `[BÔNUS]` no template 2.
- [ ] **Definir a data do prazo** (`{{2}}`) e decidir se o template 1 leva a linha opcional.
- [ ] **Cadastrar os dois templates na Meta** (WhatsApp Manager) e esperar a aprovação, que leva de minutos a 24h.
- [ ] **Exportar a lista de ex-assinantes** da MemberKit e cruzar com a Ticto.
- [ ] **Combinar quem entrega o bônus** e em que prazo.
