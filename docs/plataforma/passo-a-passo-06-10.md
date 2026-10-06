# Passo a passo · plataformas externas (mudanças de 06/10)

Estas mudanças no site já estão no ar:
- **+3 meses de acesso pra todo mundo** que comprar na sala até 23h59;
- **sala → `/academy` às 23h59**;
- **preço depois da pilha** na evergreen;
- **mapa da plataforma**;
- **mentoria revisada**;
- **`/info` com o WhatsApp**.

O que muda **fora do site** está abaixo, na ordem de horário.

## Antes das 20h (hoje)

- [ ] **1. MemberKit · curso "Anatomia" (é o mais urgente).** A MemberKit mostra **0 aulas** nas seções "Dissecação de Fresh Frozen" e "Aplicação em Fresh Frozen".
  - É o carro-chefe da Academy, o produto inteiro do downsell, e a página de obrigado manda a aluna "assistir à primeira aula ainda hoje".
  - Publiquem as aulas e confiram com um login de aluna de teste se a primeira aula abre e toca.

- [ ] **2. Roteiro e slides da Aline.** Acrescentar o degrau novo no pitch:
  - **todo mundo que entrar hoje até 23h59: +3 meses de acesso (15 em vez de 12);**
  - os 10 primeiros: certificado, prancheta, mentoria em grupo e toxina;
  - os 5 primeiros: +6 meses (18 no total), em vez dos +3.

- [ ] **3. Ticto · oferta Sala (`OEF7AADF6`).** Se a descrição da oferta ou o checkout citam os bônus, acrescentar: "+3 meses de acesso para quem comprar até 23h59".
  - Caminho: Produtos → Filgueiras Academy → Ofertas → Sala → Editar → Salvar.
  - Se o checkout não mostra os bônus, nada a fazer.

- [ ] **4. Mensagem pro grupo do WhatsApp da aula** (para usar depois do pitch):
  > A Filgueiras Academy está aberta, só pra quem está aqui hoje.
  > Até 23h59: **+3 meses de acesso pra todo mundo** (15 meses em vez de 12).
  > E os 10 primeiros ainda levam certificado, prancheta ilustrada da Aline, mentoria em grupo com ela e toxina. As 5 primeiras ganham +6 meses (18 no total).
  > R$1.797, em 12x de R$185,85 ou no Pix, com a Garantia Mão Segura.
  > 👉 https://live.alinefilgueiras.com.br/academy/sala

## Durante a noite

- [ ] **5. Quando o 10º pagamento for confirmado na Ticto,** me avisem aqui.
  - Eu ligo o `BONUS_10_ESGOTADO` e publico (leva uns 3 minutos).
  - A página da sala passa a dizer que os 10 já entraram e que os +3 meses seguem até 23h59.
  - No WhatsApp, troquem o texto do grupo para "Os 10 primeiros já entraram. Até 23h59, os +3 meses continuam pra todo mundo."

## A partir de 23h59

- [ ] **6. Sala → Academy: não precisa fazer nada na Ticto.**
  - O site redireciona `/academy/sala` para `/academy` sozinho, mantendo os UTMs.
  - O botão da sala já usa o checkout da Evergreen depois das 23h59.
  - **Continua de pé:** desativar a oferta Sala (`OEF7AADF6`) na manhã de 07/10.
- [ ] **7. Meta Ads.** Os anúncios que levam para `/`, `/fresh`, `/lp2` ou `/alunas` já caem na `/academy` (com a faixa "a aula foi ao vivo em 06/10…").
  - Mesmo assim, troquem a **URL de destino** para `https://live.alinefilgueiras.com.br/academy`, mantendo os UTMs. Isso evita o salto de página e o tempo de carregamento a mais.
  - Confiram se algum criativo fala em **"agenda"**. A página não fala mais, e a mensagem precisa bater.

## Até 10/10

- [ ] **8. Extensão do acesso na MemberKit.**
  1. Na **Ticto**: Vendas → filtro pela oferta **Sala (`OEF7AADF6`)** → status **aprovada** → período até **06/10, 23h59** → exportar.
  2. Separar as **5 primeiras** pela hora da aprovação.
  3. Na **MemberKit**: para cada aluna da lista, abrir o membro e ajustar a **data de expiração** da matrícula no plano da Academy:
     - compra + **15 meses** para todas;
     - compra + **18 meses** para as 5 primeiras.
     *Não confirmei daqui o nome exato do campo na MemberKit. Se for diferente, o que importa é a data final do acesso.*
  4. Conferir 3 alunas por amostragem.

## Agente de IA

- [ ] **9. Reenviar os 4 arquivos** de `docs/agente-ia/` para a plataforma do agente. Mudou isto:
  - +3 meses na linha do tempo, nos bônus, no acesso e na escassez;
  - a sala que vira `/academy` a partir de 07/10;
  - a pilha com o material de apoio e as dicas jurídicas;
  - a vaga da colega com o "dividindo, sai R$998,50 pra cada uma";
  - a mentoria sem o argumento "foi bônus dos 10 primeiros".

## n8n (recuperação pela Evolution, se for ligado antes da API oficial)

- [ ] **10.** O workflow está **desativado**. Se forem ligar hoje pela Evolution, ajustem duas mensagens no nó **Decidir próximo passo** (abrir o nó → código → localizar o trecho → trocar → **Save**):
  - **Mensagem 1 da Sala:** onde está
    `Os bônus dos 10 primeiros vão só até hoje, 23h59.`
    troquem por
    `Quem entra hoje, até 23h59, ganha +3 meses de acesso (15 no total), e os 10 primeiros ainda levam os bônus da noite.`
  - **Mentoria:** apaguem a frase
    ` É a mesma mentoria que, na noite da aula, foi bônus só das 10 primeiras. Vale R$5.000;`
    e deixem `Pra aluna, sai por R$1.997, ou 12x no cartão. 7 dias de garantia.`
  - Se o MCP do n8n voltar a conectar aqui, eu faço essas trocas.

## Meta · WhatsApp Manager (API oficial)

- [ ] **11. Cadastrar os 3 templates** de [`templates-whatsapp-oficial.md`](templates-whatsapp-oficial.md) (o passo a passo está lá). Me mandem o status da análise. Com eles aprovados, faço a revisão crítica do fluxo do n8n para a API oficial.

## Pendências que seguem de antes

- Link de checkout do **Protocolo sozinho** (R$97). Até lá, o botão da `/info` abre o WhatsApp da equipe e o card mostra R$97.
- **Prints da área de membros** (capas dos cursos e uma tela de aula). São o que falta para a página mostrar a plataforma em imagem; hoje ela mostra só em texto (o mapa das 3 trilhas).
- Confirmar as parcelas da mentoria (12x de R$206,54) e do upgrade.
- Pixel **Purchase** em todas as ofertas e o ID do GA4.
