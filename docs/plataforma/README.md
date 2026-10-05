# Filgueiras Academy · Consulta, Agulha e Espelho

As páginas de venda da plataforma, depois da aula ao vivo **Por Dentro da Face** (06/10/2026):

- **`/academy/sala`:** para quem esteve na aula. Custa **R$1.797**, com os bônus dos **10 primeiros** até **08/10, 23h59**. É `noindex`, e o link só circula na sala e no grupo.
- **`/academy`:** a evergreen. Custa **R$1.797**, só o núcleo, e recebe os anúncios de aquisição.

**Oferta ajustada pela equipe em 05/10** (`lib/ofertaAcademy.ts`), no formato do $100M Offers: cada item diz o problema que resolve e cada bônus derruba uma objeção.

| Para | Item | Valor |
|---|---|---|
| Todo mundo | Curso online de Fresh Frozen + dissecção | R$1.297 |
| Todo mundo | Plataforma Filgueiras Academy | R$1.497 |
| Todo mundo | 6 encontros ao vivo no ano (a Aline ou o time dela) | R$5.000 |
| Todo mundo | 1 aula ao vivo com a Aline pra discussão de casos | R$1.000 |
| Todo mundo | Preferência nos cursos presenciais | incluso |
| | **Total pra todo mundo** | **R$8.794** |
| 10 primeiros | Certificado Filgueiras Academy | incluso |
| 10 primeiros | Prancheta ilustrada, pelo correio | R$600 |
| 10 primeiros | Sala VIP de mentoria | R$5.000 |
| 10 primeiros | Toxina botulínica (quantidade a confirmar; só aparece quando preenchida) | — |
| | **Total pros 10 primeiros** | **R$14.394** |
| 5 primeiros | +6 meses de acesso (18 meses), fora da soma | R$899 |

Saíram o cupom `SALA0610`, o preço de R$1.497, a gravação da aula, o encontro extra de casos para as 40 primeiras e o diagnóstico 1:1.

Onde está cada coisa:

- **Oferta (fonte única):** `lib/ofertaAcademy.ts`.
- **Componentes:** `components/academy/`. As duas páginas usam o mesmo `AcademyPage` e mudam só o `modo` (`"sala"` ou `"evergreen"`).
- **Prova social:** reaproveita `components/fresh/sections/SocialProof.tsx` (prints reais com o rótulo "alunas da Aline").

Fontes do plano, de 04/10/2026:

- **Memberkit:** cursos, aulas e engajamento.
- **Pesquisa "Aline - 2025":** 340 respostas, abr/2025. Contém dados pessoais e fica fora do repositório.
- **Drive do lançamento de 2025:** esteira de produtos, roteiros de anúncio e LP de captação.
- **Os três livros do Hormozi** e os roteiros de aquisição revisados de 03/10.

## 1. Diagnóstico que orientou as decisões

- **A plataforma está parada.** São 706 membros e só 8 ativos em 30 dias. O fórum não teve nenhum post em 2026, há 55 comentários sem leitura e a Sala de Lapidação tem só 3 gravações desde abril. Prova vale mais que promessa: a página promete apenas o que a equipe garante (encontros mensais).
- **A pesquisa:**
  - **Sonhos:** clínica própria 26%, ser referência 25%, liberdade e estabilidade 23%.
  - **Obstáculos:** captação 29%, financeiro 18%, medo e insegurança 15%.
  - **Por que não deu certo:** a resposta mais comum é **falta de execução** (constância, procrastinação, "não coloquei em prática"). É um problema de probabilidade percebida, não de conteúdo.
- **2025 e 2026 se contradizem.** Em 2025 a tese foi "o problema não era a agulha, eram as palavras". A aula de 2026 diz que o problema é não enxergar embaixo da agulha. O que une as duas é a **segurança**, a palavra mais citada na pesquisa. Daí a grande ideia: **a paciente decide se confia em você três vezes, na consulta, na agulha e no espelho.**
- **Preço de 2025:** a esteira registra a plataforma a R$1.497 e as peças diziam "R$2.497 oficial, 50% off". Não repetimos âncora que não foi cobrada. Agora o cheio (R$1.797) é o preço real da evergreen.

## 2. Decisões

| Tema | Decisão |
|---|---|
| Páginas | `/academy/sala` (sobe para a aula) + `/academy` (evergreen, só texto; a VSL nova entra depois) |
| Oferta | **Filgueiras Academy · Consulta, Agulha e Espelho**, 12 meses |
| Headline da sala | "Você não fez tanto curso pra continuar com medo de aplicar e com a agenda vazia." (a dor final, as duas pontas; o subtítulo acolhe: "A culpa nunca foi sua…") |
| Headline da evergreen | "Você não estudou tanto pra continuar insegura na agulha e com a agenda parada." (mesma linha da sala; "parada" serve a quem já atende) |
| Os três momentos | "A paciente decide se confia em você três vezes" deixou de ser H1 e virou o título da seção do mecanismo (revisão de 04/10: como headline, era uma tese indireta, em terceira pessoa e sem dor nem resultado) |
| Preço | **R$1.797 para todo mundo** (ajuste de 05/10: sem cupom). 12x com a taxa do gateway ou Pix |
| Bônus da sala (até 08/10, 23h59) | **10 primeiros:** certificado, prancheta, Sala VIP de mentoria e toxina (quantidade a confirmar). **5 primeiros:** +6 meses (18 meses). Contam pela hora da compra |
| Encontros ao vivo | **6 no ano**, com a Aline ou com o time dela, gravados na plataforma + 1 aula ao vivo com a Aline para discussão de casos |
| Garantia | **Garantia Mão Segura:** 7 dias sem perguntas + 30 dias se assistiu ao módulo de anatomia e não sentiu a mão mais segura |
| Conteúdo | O plano "Filgueiras Academy Anual" + **Anatomia** + **Sala de Lapidação**. Full Face e Análise de casos ficam de fora. Os 4 cursos vazios (Sua Jornada, Além da Técnica, Mentalidade, Espiritualidade) ficam ocultos. Fios não existe |
| Já alunas | As 28 anuais ganham o curso de anatomia. Condição das ex-alunas a redefinir (era R$1.497 pela lista) |
| Prova | Prints reais com o rótulo "alunas da Aline", sem dizer que são da plataforma. Sem o print de faturamento. Pedir depoimento às alunas mais engajadas da plataforma |
| Público | Inclui esteticistas (o "Pra quem é" cita, sem ressalva legal por enquanto) |
| Ancoragem | Pilha de valor com o valor riscado por item e dois totais na sala: R$8.794 (todo mundo) e R$14.394 (10 primeiros). Os +6 meses dos 5 primeiros ficam fora da soma. Na página é "valor", nunca "de R$X por". Embaixo do card, os cursos presenciais da Aline como âncora real |
| Fora da página | Curso presencial nos EUA como próxima oferta; promessa de agenda, faturamento ou resultado clínico |
| Tráfego frio | Teste A/B: `/academy` × oferta de entrada **Protocolo + aula gravada** → upsell da plataforma por R$1.797 menos o valor pago, por 72h. A gravação nunca é vendida "avulsa" e não entra antes de 08/10, 23h59 |
| Canais do carrinho | Grupo da aula, agente de IA no WhatsApp (o playbook precisa ser atualizado: hoje ele proíbe falar da plataforma) e disparo para ex-alunas |

## 3. Estrutura das páginas (revisão de 05/10)

As duas páginas foram enxugadas no molde da página do Mapa de Intercorrência (Segredos da Otomodelação): coluna única, uma ideia por seção, a dor como cena concreta e a oferta num card só. A página da sala no celular caiu de ~17.100 px para ~11.500 px.

0. **Barra do topo (só na sala):** preço e contador até 08/10, 23h59.
1. **Hero:** chamada do público, H1 com grifo, uma frase de apoio, botão com o preço e selos (acesso imediato, 12x ou Pix, garantia). Na sala, a linha dos bônus dos 10 primeiros aparece embaixo do botão. No celular, a foto vai para o fim do hero.
2. **A cena:** "A paciente está na maca. A seringa, na sua mão." As perguntas que passam pela cabeça e quatro consequências curtas.
3. **O que muda o jogo:** os três momentos (consulta, agulha e espelho), em dois parágrafos.
4. **O que você recebe:** foto e quatro itens numerados (anatomia, técnica, consulta e encontros ao vivo).
5. **É pra você?:** sim e não.
6. **Quem conduz:** os números, um parágrafo e a frase do criativo 08.
7. **Prints de alunas da Aline.**
8. **Oferta:** um card com a pilha de valor (o valor riscado por item e o total riscado), o preço, o botão e os selos. Na sala, os bônus de todas entram na pilha; as mais rápidas vêm depois do botão, fora da soma. Embaixo, os cursos presenciais da Aline como âncora.
9. **Garantia Mão Segura:** selo e duas frases.
10. **FAQ:** fechada, 7 perguntas na evergreen e 9 na sala.
11. **Fechamento:** "Da próxima vez que a paciente deitar…", o resumo da oferta numa frase, o botão e o P.S. + barra fixa no celular.

**Depois de 08/10, 23h59:** o botão da sala leva à `/academy` e o contador diz que a condição terminou. Para testar, use `?preview=2026-10-09T10:00:00-03:00`.

## 4. Pitch da aula (versão aprovada)

Roteiro completo, bloco a bloco: permissão → o que a aula não resolve → os três momentos → por que é diferente → a pilha do núcleo, com âncora e R$1.797 → os bônus da sala (10 primeiros e 5 primeiros, até 08/10) → Garantia Mão Segura → pra quem é → pedido ("escreve ENTREI") → respostas rápidas → fechamento ("daqui a um ano, a paciente vai sentir isso?"). **O roteiro do pitch precisa ser atualizado com a oferta de 05/10.**

Durante o pitch, a equipe:

- fixa o link `/academy/sala` no chat e no grupo;
- conta as primeiras N e as primeiras 10 pela hora da compra na Ticto e avisa a Aline;
- lê em voz alta os nomes de quem escreveu ENTREI.

## 5. Anúncios de aquisição (revisão de 04/10)

- **Ganchos:** passam de "estudo" para "segurança", com chamada do público ("pra quem aplica…") e dores ditas com as palavras da pesquisa.
- **Peças novas:** V06 e A06 cobrem o pilar consulta ("vou pensar").
- **A04:** usa a headline da evergreen ("três vezes").
- **V05 e A05:** viram remarketing.
- **Fatos:** fios e full face saíram. "LipNose" virou "lábios e nariz".
- **Aviso:** "Ensino online para profissionais da estética e da saúde".

## 6. Pendências

**Antes de 06/10** (em `lib/ofertaAcademy.ts`, salvo onde indicado):

- [ ] **Ticto:** criar o produto e preencher `CHECKOUT_BASE`. Sem ele, os botões mostram "Em breve".
- [ ] **Ticto:** criar o cupom das ex-alunas, que vai só pela lista.
- [ ] Preencher a parcela exata em 12x (`ACADEMY.parcela12x` e `SALA.parcela12x`).
- [ ] **Memberkit:** criar o plano da oferta e ligá-lo ao produto na Ticto, com 12 meses de acesso. Cursos: Comece por aqui, Toxina, Preenchimento Facial, Bioestimuladores, Anestesia, Intercorrência, Vendas, Marketing, Posicionamento, Dicas Jurídicas, Material de Apoio, Alfa Ômega, **Anatomia** e **Sala de Lapidação**.
- [ ] **Memberkit:** publicar o curso de Anatomia e mandar os títulos das aulas para a página e o pitch.
- [ ] **Toxina dos 10 primeiros:** definir a quantidade (`TOXINA_QTD`) e passar pela revisão jurídica e sanitária (é medicamento, e o público inclui esteticistas). Na página, nunca a marca "Botox".
- [ ] **Sala VIP de mentoria:** dizer o que é (formato, quem conduz, por quanto tempo) para a página descrever com precisão.
- [ ] **Calendário dos 6 encontros ao vivo** e da aula de casos com a Aline.
- [ ] **A Aline confirma:**
  - o 1º curso de dissecção em 2018;
  - os estudos nos EUA e em Portugal;
  - a definição de fresh frozen;
  - os "5 passos da consulta" no conteúdo atual;
  - os "11+ anos de clínica";
  - o nome "Garantia Mão Segura".
- [ ] **Confirmar o conteúdo do "Material de Apoio":** anamnese, termos, precificação e scripts.
- [ ] **Agente de IA:** atualizar `docs/agente-ia/` para o carrinho (preço, bônus, garantia, objeções) e tirar a afirmação de que a gravação só existe na Academy.

**Depois de 06/10:**

- [ ] **09/10:** estender para 18 meses os 5 primeiros; enviar prancheta e certificado e liberar a Sala VIP para os 10 primeiros.
- [ ] **Oferta de entrada para o teste do tráfego frio:** Protocolo + aula gravada, com upsell por R$1.797 menos o valor pago, por 72h. Só depois de 08/10.
- [ ] **VSL nova da evergreen:** gravar e colocar no topo da `/academy`.
- [ ] **Data do próximo encontro mensal:** é a urgência real da evergreen ("entre até X para o encontro de outubro").
- [ ] **Revisão jurídica** do "Pra quem é" com esteticistas.
