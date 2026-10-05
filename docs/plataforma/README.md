# Filgueiras Academy · Consulta, Agulha e Espelho

As páginas de venda da plataforma, depois da aula ao vivo **Por Dentro da Face** (06/10/2026):

- **`/academy/sala`:** para quem esteve na aula. Custa **R$1.497** com cupom até **08/10, 23h59**, com bônus em níveis. É `noindex`, e o link só circula na sala e no grupo.
- **`/academy`:** a evergreen. Custa **R$1.797**, sem bônus, e recebe os anúncios de aquisição.

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
| Preço | R$1.797 cheio · **R$1.497 com o cupom da sala até 08/10, 23h59** · 12x com a taxa do gateway ou Pix |
| Base da sala (todas) | Gravação da aula de 06/10 + **6 meses a mais de acesso (18 meses)**. O Protocolo saiu: boa parte da sala já tem, e ele virou oferta de entrada |
| Primeiras N (≤40, conforme o estoque de pranchetas) | + encontro extra ao vivo de análise de casos + prancheta ilustrada pelo correio |
| Primeiras 10 | + diagnóstico 1:1 online de 30 minutos **com a Aline** |
| Sala de Lapidação | Encontros mensais ao vivo, conduzidos pela equipe (a página não cita a Aline). Gravações dentro do curso |
| Garantia | **Garantia Mão Segura:** 7 dias sem perguntas + 30 dias se assistiu ao módulo de anatomia e não sentiu a mão mais segura |
| Conteúdo | O plano "Filgueiras Academy Anual" + **Anatomia** + **Sala de Lapidação**. Full Face e Análise de casos ficam de fora. Os 4 cursos vazios (Sua Jornada, Além da Técnica, Mentalidade, Espiritualidade) ficam ocultos. Fios não existe |
| Já alunas | As 28 anuais ganham o curso de anatomia. As ex-alunas pagam R$1.497 com o mesmo prazo, pela lista (outro cupom) |
| Prova | Prints reais com o rótulo "alunas da Aline", sem dizer que são da plataforma. Sem o print de faturamento. Pedir depoimento às alunas mais engajadas da plataforma |
| Público | Inclui esteticistas (o "Pra quem é" cita, sem ressalva legal por enquanto) |
| Ancoragem | Pilha de valor com o valor riscado por item, o total riscado e o preço ao lado (pedido de 05/10, no modelo da página do Mapa de Intercorrência). Os módulos que já existiam usam a valoração da LP de abr/2025. Anatomia, Alfa Ômega e os bônus das mais rápidas têm valor a confirmar. Na página é "valor", nunca "de R$X por". Total: R$10.979 na evergreen, R$11.945 na sala (com a gravação e os +6 meses). Saiu o bloco dos cursos presenciais |
| Fora da página | Curso presencial nos EUA como próxima oferta; promessa de agenda, faturamento ou resultado clínico |
| Tráfego frio | Teste A/B: `/academy` × oferta de entrada **Protocolo + aula gravada** → upsell da plataforma por R$1.797 menos o valor pago, por 72h. A gravação nunca é vendida "avulsa" e não entra antes de 08/10, 23h59 |
| Canais do carrinho | Grupo da aula, agente de IA no WhatsApp (o playbook precisa ser atualizado: hoje ele proíbe falar da plataforma) e disparo para ex-alunas |

## 3. Estrutura das páginas (a mesma sequência do pitch)

1. **Hero:** faixa, pré-headline, H1 com grifo, subtítulo, os 4 pilares, preço, CTA, garantia e, na sala, cupom e contador até 08/10. No celular, a foto vai para o fim do hero.
2. **Você se reconhece?:** a dor com as palavras da pesquisa, em segunda pessoa (a mão que hesita, o medo de errar, "você já fez isso?", "vou pensar", "só quer saber preço", "fiz curso e continuo perdida").
3. **Três momentos:** consulta, agulha e espelho, cada um com a cena da dor e o que a Academy entrega.
4. **Por que dessa vez é diferente:** a objeção "fiz curso e continuo travada" (36% da pesquisa).
5. **O que tem dentro:** o destaque do curso de fresh frozen (a evergreen repete o anúncio) + os cursos por pilar, com a contagem de aulas do Memberkit.
6. **Oferta:** a pilha de valor (cada item com o valor riscado e o total riscado) ao lado do card de preço. Na sala, os bônus de todas entram na pilha; as mais rápidas vêm abaixo, com valor e fora da soma, e depois o contador.
7. **Garantia Mão Segura.**
8. **Quem conduz:** a história da Aline nas duas inseguranças.
9. **Prints de alunas da Aline.**
10. **Pra quem é / não é.**
11. **FAQ:** a da sala tem perguntas próprias (18 meses, níveis, prancheta, depois de 08/10).
12. **CTA final** + barra fixa no celular.

**Depois de 08/10, 23h59:** o botão da sala leva à `/academy` e o contador diz que a condição terminou. Para testar, use `?preview=2026-10-09T10:00:00-03:00`.

## 4. Pitch da aula (versão aprovada)

Roteiro completo, bloco a bloco: permissão → o que a aula não resolve → os três momentos → por que é diferente → oferta sem bônus, com âncora e R$1.797 → condição da sala (R$1.497, gravação, 18 meses, primeiras N, primeiras 10) → Garantia Mão Segura → pra quem é → pedido ("escreve ENTREI") → respostas rápidas → fechamento ("daqui a um ano, a paciente vai sentir isso?").

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
- [ ] **Ticto:** criar o cupom `SALA0610` (−R$300, válido até 08/10, 23h59) e conferir o código em `CUPOM_SALA`.
- [ ] **Ticto:** criar o cupom das ex-alunas, que vai só pela lista.
- [ ] Preencher a parcela exata em 12x (`ACADEMY.parcela12x` e `SALA.parcela12x`).
- [ ] Definir o número de pranchetas (`PRIMEIRAS_N`, até 40).
- [ ] Preencher a data do encontro de análise de casos e o prazo do diagnóstico (`SALA.encontroCasosData` e `SALA.diagnosticoAte`). A página só mostra quando estiverem preenchidos.
- [ ] **Memberkit:** criar o plano da oferta e ligá-lo ao produto na Ticto, com 12 meses de acesso. Cursos: Comece por aqui, Toxina, Preenchimento Facial, Bioestimuladores, Anestesia, Intercorrência, Vendas, Marketing, Posicionamento, Dicas Jurídicas, Material de Apoio, Alfa Ômega, **Anatomia** e **Sala de Lapidação**.
- [ ] **Memberkit:** publicar o curso de Anatomia e mandar os títulos das aulas para a página e o pitch.
- [ ] **Confirmar os valores da pilha** (`lib/ofertaAcademy.ts`): curso de Anatomia R$2.997, Alfa Ômega R$497, encontro de casos R$497, prancheta R$197, diagnóstico R$997.
- [ ] **A Aline confirma:**
  - o 1º curso de dissecção em 2018;
  - os estudos nos EUA e em Portugal;
  - a definição de fresh frozen;
  - os "5 passos da consulta" no conteúdo atual;
  - os "11+ anos de clínica";
  - o nome "Garantia Mão Segura".
- [ ] **Confirmar o conteúdo do "Material de Apoio":** anamnese, termos, precificação e scripts.
- [ ] **A plataforma dá certificado?** A FAQ fica sem essa pergunta até a resposta.
- [ ] **Agente de IA:** atualizar `docs/agente-ia/` para o carrinho (preço, bônus, garantia, objeções) e tirar a afirmação de que a gravação só existe na Academy.

**Depois de 06/10:**

- [ ] **09/10:** estender para 18 meses quem comprou com o cupom e enviar as pranchetas às primeiras N.
- [ ] **Oferta de entrada para o teste do tráfego frio:** Protocolo + aula gravada, com upsell por R$1.797 menos o valor pago, por 72h. Só depois de 08/10.
- [ ] **VSL nova da evergreen:** gravar e colocar no topo da `/academy`.
- [ ] **Data do próximo encontro mensal:** é a urgência real da evergreen ("entre até X para o encontro de outubro").
- [ ] **Revisão jurídica** do "Pra quem é" com esteticistas.
