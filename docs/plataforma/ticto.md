# Ticto · Filgueiras Academy · Consulta, Agulha e Espelho

Este é o guia para criar e configurar o produto inteiro na Ticto. Os campos seguem a [central de ajuda da Ticto](https://help.ticto.com.br/) (consulta de 05/10/2026). A oferta é a de `lib/ofertaAcademy.ts`, e todo valor que aparece aqui vem dela.

## 0. Arquitetura

O funil (upsell de 1 clique, recuperação de carrinho e sequência de WhatsApp) está em [`ticto-funil.md`](ticto-funil.md).

| Peça | O quê | Por quê |
|---|---|---|
| **1 produto** (curso digital) | Filgueiras Academy · Consulta, Agulha e Espelho | Um produto só, ligado ao plano da MemberKit |
| **Oferta A · Sala** | R$1.797 · 12x de R$185,85 · Pix ou cartão | Link usado só na `/academy/sala`, na noite da aula. Separa quem comprou na aula (é ali que contam os 10 primeiros) de quem veio dos anúncios |
| **Oferta B · Evergreen** | R$1.797 · 12x de R$185,85 · Pix ou cartão | Link da `/academy` e dos anúncios. A sala passa a usar este link sozinha depois de 06/10, 23h59 |
| **2 templates de checkout** | Sala: com os bônus da noite · Evergreen: só o núcleo | O checkout repete a pilha de valor da página (Hormozi: o valor percebido não pode cair no último passo) |
| **Integração MemberKit** | Libera o acesso na hora | Acesso imediato é o "time delay" da Equação de Valor caindo a zero |
| **Página de obrigado** | `https://live.alinefilgueiras.com.br/academy/obrigado` | A primeira vitória rápida (a primeira aula de anatomia), que diminui o reembolso |

**Em seguida, no código:** colar os dois links em `lib/ofertaAcademy.ts`, nas constantes `CHECKOUT_SALA` e `CHECKOUT_EVERGREEN`. Até lá, os botões mostram "Em breve".

---

## 1. Antes de começar

- [ ] Conta da Ticto com cadastro e documentos aprovados. Sem isso, o produto não pode ser criado.
- [ ] **MemberKit:** o plano "Filgueiras Academy · Consulta, Agulha e Espelho" criado, com **12 meses** de acesso e estes cursos:
  - Comece por aqui, Toxina, Preenchimento Facial, Bioestimuladores, Anestesia, Intercorrência;
  - Vendas, Marketing, Posicionamento, Dicas Jurídicas, Material de Apoio, Alfa Ômega;
  - **Anatomia (Fresh Frozen + dissecção)** e **Sala de Lapidação**, onde ficam as gravações dos encontros.
- [ ] **MemberKit → Configurações:** copiar a **chave de API**. Ela não pode ser compartilhada nem colada em conversa ou documento. Vai direto no campo da Ticto.
- [ ] Imagem de capa: [`ticto/capa-produto-1200.jpg`](ticto/capa-produto-1200.jpg) (quadrada, 1200×1200, 120 KB; a Ticto recomenda 600×600 e aceita até 2 MB).

---

## 2. Produto (Meus Produtos → Cadastrar)

| Campo da Ticto | Preencher |
|---|---|
| **Produto ativo?** | Sim |
| **Nome do produto** | Filgueiras Academy · Consulta, Agulha e Espelho |
| **URL da página de vendas** | `https://live.alinefilgueiras.com.br/academy` |
| **Tipo de produto** | Curso digital |
| **Categoria** | A mais próxima de Saúde/Estética. Se não houver, Educação |
| **E-mail de suporte** | `suporte.filgueirasacademy@gmail.com`. A Ticto manda um e-mail de validação e o produto só fica vinculado depois da confirmação. **Conferir o domínio:** o mais comum é `@gmail.com` |
| **Contato de suporte (WhatsApp)** | +55 31 95349-1799 |
| **Imagem de capa** | `docs/plataforma/ticto/capa-produto-1200.jpg` |
| **Prazo de reembolso** | **30 dias** (veja a nota abaixo) |
| **Descrição** | O texto da seção 2.1 |

**Por que 30 dias:** a página promete a **Garantia Mão Segura** (7 dias sem perguntas + 30 dias se a mão não ficar mais segura). Com 7 dias na Ticto, a equipe não consegue honrar a segunda camada pela plataforma. Com 30, a compradora consegue pedir pela Ticto até o 30º dia, mesmo sem a condição.

Hormozi aceita essa troca: uma garantia mais forte aumenta a conversão mais do que aumenta o reembolso, ainda mais com a primeira aula liberada na hora. O que reduz o pedido é a página de obrigado levar a pessoa direto à anatomia.

### 2.1 Descrição do produto (até 1.000 caracteres)

O campo da Ticto aceita no máximo 1.000 caracteres e não formata o texto: negrito não aparece. Por isso o texto abaixo é puro e tem **863 caracteres** contando as quebras de linha. É só copiar e colar.

```text
Pra mão parar de hesitar, a consulta parar de travar e você não estudar sozinha.

A paciente decide se confia em você três vezes: na consulta, na agulha e no espelho. A Filgueiras Academy junta o que muda cada momento, com a Dra. Aline Filgueiras.

O que você recebe (12 meses de acesso):
• Curso online de Fresh Frozen + dissecção (valor R$1.297): pra ver o que tem embaixo da agulha.
• Plataforma Filgueiras Academy (valor R$1.497): mais de 70 aulas de toxina, preenchimento e bioestimuladores e a Consulta que Vende.
• 6 encontros ao vivo no ano (valor R$5.000): com a Aline ou o time dela.
• 1 aula ao vivo com a Aline pra discussão de casos (valor R$1.000).
• Preferência nos cursos presenciais da Aline.

Valor total: R$8.794. Hoje: R$1.797 no Pix ou 12x de R$185,85.

Garantia Mão Segura: 7 dias sem perguntas, e 30 dias se a sua mão não ficar mais segura.
```

### 2.2 Descrição da sala (noite da aula, até 1.000 caracteres)

Este texto vale para a Oferta A · Sala e tem **949 caracteres**. A descrição da Ticto é do produto, não da oferta. Por isso, use este texto no campo de descrição ou de benefícios do **template Sala**, se ele tiver. Se o campo só existir no produto, troque a descrição do produto por esta às 20h de 06/10 e volte para a 2.1 na manhã de 07/10.

```text
Condição de quem esteve na aula Por Dentro da Face. Os bônus valem só até hoje, 23h59.

Você viu a face por dentro. Agora são 12 meses pra levar isso pra sua mão, com a Dra. Aline Filgueiras.

O que todo mundo leva:
• Curso online de Fresh Frozen + dissecção (valor R$1.297)
• Plataforma Filgueiras Academy: mais de 70 aulas e a Consulta que Vende (valor R$1.497)
• 6 encontros ao vivo no ano, com a Aline ou o time dela (valor R$5.000)
• 1 aula ao vivo com a Aline pra discussão de casos (valor R$1.000)
• Preferência nos cursos presenciais da Aline

Só pros 10 primeiros:
• Certificado Filgueiras Academy
• Mentoria em grupo com a Aline (valor R$5.000)
As 5 primeiras: também o Manual do Envelhecimento. A primeira: também 2 ml de ácido hialurônico.
A equipe entra em contato pelo WhatsApp depois da compra pra combinar a entrega.
E todo mundo que compra até 23h59 leva 15 meses de acesso (os +6 meses dos 5 primeiros saíram em 06/10).

Valor total pros 10 primeiros: R$14.243. Hoje: R$1.797 à vista ou 12x de R$185,85.

Garantia Mão Segura: 7 dias sem perguntas, e 30 dias se a sua mão não ficar mais segura.
```

**Versão curta (para campos de até ~300 caracteres):**

> Fresh Frozen + dissecção, mais de 70 aulas de técnica, a Consulta que Vende, 6 encontros ao vivo no ano e uma aula de casos com a Dra. Aline. 12 meses de acesso. Valor total R$8.794, hoje R$1.797 ou 12x de R$185,85. Garantia de 30 dias.

---

## 3. Integração com a MemberKit (Tictools → Área de membros externa → MemberKit)

Para produto do tipo curso, a Ticto só deixa cadastrar oferta **depois** de ligar uma área de membros. Por isso este passo vem antes das ofertas.

1. **Tictools → Área de membros externa → MemberKit → Nova integração.**
2. **Nome da conta:** `Filgueiras Academy`, um nome interno.
3. **Chave secreta:** colar a chave de API da MemberKit.
4. **Produto:** Filgueiras Academy · Consulta, Agulha e Espelho.
5. Ligar as **duas ofertas** (seção 4) ao plano da MemberKit, com 12 meses. O reembolso e o chargeback devem remover o acesso sozinhos, porque a integração trata esses eventos.

**Compras da noite (15 meses):** a Ticto vende 12 meses. A extensão para 15 é manual, feita pela equipe na MemberKit, de 07/10 a 10/10.

---

## 4. Ofertas (Meus Produtos → Ações → Ofertas)

As duas ofertas são iguais. Só mudam o nome e o template de checkout.

| Campo | Oferta A · Sala | Oferta B · Evergreen |
|---|---|---|
| **Nome da oferta** | Academy · Aula 06/10 | Academy · Evergreen |
| **Valor** | R$1.797,00 | R$1.797,00 |
| **Formas de pagamento** | **Cartão e Pix** | Cartão e Pix |
| **Parcelamento** | Até 12x | Até 12x |
| **Juros** | **Pagos pelo comprador** | Pagos pelo comprador |
| **Área de membros** | O plano da MemberKit (12 meses) | O mesmo |
| **Afiliados** | Não | Não, por enquanto |
| **Redirecionamento pós-compra** | `https://live.alinefilgueiras.com.br/academy/obrigado` | O mesmo |
| **Template de checkout** | Template Sala (seção 5.1) | Template Evergreen (seção 5.2) |

**Conferência da parcela:** com juros de 3,49% ao mês pagos pelo comprador, R$1.797 em 12x dá exatamente **R$185,85** (R$2.230,21 no total). Se o checkout mostrar outro número, a configuração de juros está diferente da que a página promete.

**Sem boleto:** o boleto compensa em 1 a 3 dias. Os 10 primeiros contam pela confirmação do pagamento, e a noite da aula acaba às 23h59. Com boleto, quem compra fica sem saber se entrou e o acesso não chega na hora. Pix e cartão confirmam na hora.

---

## 5. Templates de checkout (Meus Produtos → Ações → Templates de checkout)

### Configurações comuns aos dois

| Opção | Configuração | Por quê |
|---|---|---|
| **Selo de garantia** | Título: `Garantia Mão Segura` · Duração: `30 dias` · Legenda: `7 dias sem perguntas. 30 dias se a sua mão não ficar mais segura.` · Cor: o vinho da marca (`#7e1e1c`) | É o maior redutor de risco da Equação de Valor. Fica visível ao lado do botão |
| **Telefone** | Mostrar e exigir | A equipe chama os 10 primeiros no WhatsApp. É também o canal de suporte |
| **Confirmação de e-mail** | Ativar | O acesso chega por e-mail. Um e-mail errado vira ticket de suporte e pedido de reembolso |
| **Ativar cupom?** | **Não** | Um preço só. Um campo de cupom à vista faz a pessoa sair pra procurar cupom e não voltar |
| **Contador regressivo** | **Não usar** | O contador da Ticto conta uma duração a partir da visita: cada pessoa vê um prazo diferente, que reinicia. A escassez real (10 primeiros, 23h59) já está no banner e na página. Escassez falsa derruba a confiança e é risco no CDC |
| **Notificações** | Só **"[nome] acabou de comprar"**. Desligar "pessoas comprando agora" e "clientes interessados" | Prova social só com compra real. Nas primeiras horas os números são baixos e trabalham contra |
| **Avaliações (depoimentos)** | Só prints e textos reais, **com autorização da aluna**, com primeiro nome e sem foto de paciente. Se não tiver autorização, deixar vazio | Prova vale mais que promessa (Hormozi), mas um depoimento inventado ou sem consentimento é risco de CONAR e LGPD |

### 5.1 Template Sala (Oferta A)

Banner e texto do topo:

> **Bônus dos 10 primeiros, só até 23h59:** certificado Filgueiras Academy e mentoria em grupo com a Aline. 5 primeiras: Manual do Envelhecimento. A primeira: 2 ml de ácido hialurônico. E todo mundo que comprar até 23h59 leva 15 meses de acesso.

Lista de benefícios ou resumo, se o template tiver o campo:

> - Curso online de Fresh Frozen + dissecção (R$1.297)
> - Plataforma Filgueiras Academy: mais de 70 aulas e a Consulta que Vende (R$1.497)
> - 6 encontros ao vivo no ano (R$5.000)
> - 1 aula ao vivo com a Aline pra discussão de casos (R$1.000)
> - Preferência nos cursos presenciais
> - **Valor total: R$8.794. Pros 10 primeiros, com os bônus: R$14.243. Hoje: R$1.797**

**Na manhã de 07/10:** tirar o banner dos bônus deste template, ou desativar a Oferta A. A página da sala já troca para o link da evergreen às 23h59 sozinha. Mesmo assim, alguém pode ter guardado o link da sala.

### 5.2 Template Evergreen (Oferta B)

Banner e texto do topo:

> **Filgueiras Academy:** anatomia em fresh frozen, técnica e consulta num lugar só, com 6 encontros ao vivo no ano.

Lista de benefícios: a mesma da Sala, terminando em **"Valor total: R$8.794. Hoje: R$1.797"**, sem a linha dos 10 primeiros.

**URL de Back Redirect** (configurações do template): `https://live.alinefilgueiras.com.br/academy/anatomia`. Quem aperta voltar no checkout sem comprar cai no downsell da anatomia. **Ligar só na manhã de 07/10** e nunca no template da Sala. Detalhes em `ticto-funil.md` §3.

**Banners em imagem:** a central de ajuda não informa as medidas. Quando a equipe abrir o editor do template, me passem os tamanhos pedidos (desktop e celular) que eu gero as artes no mesmo padrão dos criativos.

---

## 6. Order bump (template → Profit Boosters → Order Bump)

| | Recomendação |
|---|---|
| **Template Sala** | **Sem bump.** É uma decisão de 2 horas, e boa parte da sala já tem o Protocolo, que foi bump da aula. Qualquer atrito a mais custa venda principal |
| **Template Evergreen** | **Protocolo de Resgate Vascular** por **R$47**. Complementa o pilar "agulha" e custa menos de 3% do principal, a faixa em que o bump não compete com a compra |

Caixa do bump da evergreen:

> **Título:** Sim, quero o Protocolo de Resgate Vascular da Dra. Aline por R$47
> **Descrição:** O protocolo de oclusão e necrose que a Dra. Aline usa, do primeiro minuto à cicatrização. Prancha de parede pra imprimir, ficha hora a hora, medicações com posologia e 2 cards pra enviar à paciente. Chega na hora.

**Decisão sua:** o preço do bump. Usei R$47 porque o R$29,90 foi vendido como "só até 06/10, 20h" para as ex-alunas, e repetir esse valor desmente a urgência que foi dada a elas.

---

## 7. Upsell e downsell (Flow), para depois de 06/10

O Hormozi chama isto de Money Model: a oferta de atração paga a aquisição, e o lucro vem do que entra depois.

1. **Upsell de 1 clique na página de obrigado da evergreen:** a **mentoria em grupo com a Aline** para quem não entrou nos 10 primeiros. É o "vender isso depois" que vocês decidiram. Preço e formato a definir. A compradora não preenche os dados de novo.
2. **Downsell para quem não comprou a Academy:** o **curso de anatomia separado**, por R$797 (seção 11). Ele substitui o "Protocolo + aula gravada" como downsell. Um downsell só por vez, para a mensagem não se dividir. **Nunca antes de 06/10, 23h59.**

---

## 8. Pixel e rastreamento

- **Tictools → Pixel:** o mesmo Pixel da Meta e o mesmo GA4 da LP, nas duas ofertas. A compra (Purchase) é disparada no checkout da Ticto, e a LP dispara só o `ClickCheckout`.
- **UTMs:** o `ticto-echo` da LP repassa as UTMs para os links com `data-checkout` (os dois botões da Academy já têm). Para conferir, veja a aba **Rastreamento** de uma venda-teste (`docs/rastreamento-utm.md`).

---

## 9. Testes antes de 06/10

- [ ] **Compra-teste no Pix pela `/academy/sala`:**
  - o checkout abre na Oferta A;
  - o banner dos bônus aparece;
  - o acesso chega na MemberKit;
  - o redirecionamento vai para `/academy/obrigado`;
  - as UTMs aparecem na aba Rastreamento.
- [ ] **Compra-teste no cartão pela `/academy`:** a parcela de 12x é de R$185,85, sem campo de cupom, e o bump do Protocolo aparece.
- [ ] **Reembolso da compra-teste:** o acesso some da MemberKit.
- [ ] **Página da sala com `?preview=2026-10-07T10:00:00-03:00`:** o botão aponta para a Oferta B.

---

## 10. Operação na noite da aula e depois

- **Durante o pitch:** a equipe acompanha as vendas da **Oferta A** em tempo real, pela hora da confirmação, e avisa a Aline: "faltam X dos 10".
- **Fechou 10 antes das 23h59:**
  - a Aline anuncia;
  - a equipe troca o banner do template Sala para "Os bônus dos 10 primeiros já foram. A Academy continua por R$1.797".
- **De 07/10 a 10/10:**
  - estender para 15 meses todas as compras da oferta Sala;
  - chamar as primeiras no WhatsApp: certificado e mentoria (10 primeiros), endereço para o Manual do Envelhecimento (5 primeiras) e o ácido hialurônico (a primeira, só se for habilitada a aplicar).

---

## 11. Downsell: o curso de anatomia separado

**Para quem é:** quem viu a Academy e não comprou. O motivo quase sempre é o preço.

**A regra do Hormozi:** o downsell tira coisas da oferta, não baixa o preço da mesma oferta. Quem recusou R$1.797 recebe uma oferta **menor**, nunca a Academy mais barata. Assim o preço da Academy continua valendo para quem já pagou.

### 11.1 A oferta

| | Academy (principal) | **Anatomia (downsell)** |
|---|---|---|
| Curso online de Fresh Frozen + dissecção | ✓ | ✓ |
| Plataforma (mais de 70 aulas e a Consulta que Vende) | ✓ | — |
| 6 encontros ao vivo no ano | ✓ | — |
| Aula ao vivo de casos com a Aline | ✓ | — |
| Preferência nos presenciais | ✓ | — |
| Acesso | 12 meses | **6 meses** |
| Preço | R$1.797 · 12x R$185,85 | **R$797 · 12x R$82,42** |

**R$797 (definido pela equipe em 05/10):**

- **Fica 39% abaixo do valor do curso na pilha (R$1.297)** e corresponde a 44% do preço da Academy. Quem recusou pelo preço ainda enxerga um degrau real: R$82 por mês contra R$186.
- **Não canibaliza a Academy.** A diferença é de R$1.000, e por ela a compradora leva a plataforma inteira, 6 encontros ao vivo, a aula de casos e mais 6 meses de acesso, itens que somam R$7.497 na pilha.
- **Facilita o upgrade.** Com a distância menor, a troca pela Academy (seção 11.4) fica mais fácil de aceitar.
- **O cuidado:** com o downsell mais perto do preço da Academy, ele não pode, de jeito nenhum, aparecer para quem ainda não recusou a Academy (seção 11.5).
- **Os 6 meses** são o segundo "tirar coisas". Eles também dão motivo para o upgrade (seção 11.4).

### 11.2 Na Ticto

**Produto separado.** Cada produto aponta para um plano na integração com a MemberKit, e um produto à parte evita liberar a Academy inteira por engano.

| Campo | Preencher |
|---|---|
| **Nome do produto** | Por Dentro da Face · Anatomia em Fresh Frozen |
| **Tipo** | Curso digital |
| **URL da página de vendas** | `https://live.alinefilgueiras.com.br/academy`. Não existe página própria, porque o downsell não fica aberto ao público (seção 11.5) |
| **E-mail, WhatsApp e categoria** | Os mesmos da Academy |
| **Imagem de capa** | A da Academy serve. Se quiserem, eu gero uma própria |
| **Prazo de reembolso** | 30 dias, pelo mesmo motivo da Academy: a Garantia Mão Segura |
| **Descrição** | O texto da seção 11.3 |
| **MemberKit** | Um plano novo, "Anatomia em Fresh Frozen", **só com o curso de Anatomia, 6 meses**, ligado a este produto |
| **Oferta** | `Anatomia · Downsell` · R$797 · cartão (12x, juros pagos pelo comprador) e Pix · sem boleto · sem afiliados · redirecionamento para `https://live.alinefilgueiras.com.br/academy/anatomia/obrigado`. Com o Flow ativo, a compradora passa antes pela página de upsell `/academy/anatomia/upgrade` ([`ticto-funil.md`](ticto-funil.md)) |
| **Template** | O selo da Garantia Mão Segura, sem cupom, sem contador, sem bump. Banner: "Curso online de Fresh Frozen + dissecção, com a Dra. Aline. 6 meses de acesso." |

**Parcela:** **12x de R$82,42**, como aparece na Ticto, com os juros pagos pelo comprador (informado pela equipe em 05/10).

### 11.3 Descrição (até 1.000 caracteres)

**801 caracteres**, texto puro para colar.

```text
Pra mão parar de hesitar: veja o que tem embaixo da agulha antes de aplicar.

A paciente sente quando a sua mão hesita perto do nariz, da glabela, do sulco. O que faz a mão parar de hesitar é saber o que tem embaixo da pele.

Neste curso online, a Dra. Aline Filgueiras reúne o que estudou em fresh frozen e dissecção nos Estados Unidos e em Portugal: a face por dentro, camada por camada. Sem visto e sem passagem.

O que você recebe:
• Curso online de Fresh Frozen + dissecção (valor R$1.297)
• 6 meses de acesso, no celular ou no computador

Hoje: R$797 no Pix ou 12x de R$82,42.

Quer o caminho completo depois? Em até 30 dias você troca pela Filgueiras Academy pagando só a diferença.

Garantia Mão Segura: 7 dias sem perguntas, e 30 dias se você assistir ao curso e não sentir a mão mais segura.
```

### 11.4 Upgrade para a Academy (rollover)

Quem comprou a anatomia pode trocar pela Academy **pagando só a diferença**, em até 30 dias. É o "rollover" do Hormozi: o dinheiro do primeiro passo vira crédito no próximo, e a compradora não sente que pagou duas vezes.

- **Na Ticto:** criar no produto da Academy uma terceira oferta, **oculta**, chamada `Academy · Upgrade Anatomia` (passo a passo em [`ticto-funil.md`](ticto-funil.md) §1.0), por **R$1.000** (cerca de 12x de R$103,42; conferir no checkout). Ela fica ligada ao mesmo plano de 12 meses da Academy. Um cupom não funciona aqui, porque o campo de cupom fica desligado no checkout.
- **Na MemberKit:** quando a compradora fizer o upgrade, o plano da Academy já inclui a anatomia. O plano de 6 meses pode ficar ativo até vencer.
- **Quando oferecer:**
  - **na página de obrigado do downsell** (`/academy/anatomia/obrigado`), logo depois da compra. O botão usa o link da oferta oculta, a ser colado em `UPGRADE_ANATOMIA_URL` (`lib/ofertaAcademy.ts`). Sem o link, o botão abre o WhatsApp da equipe com a mensagem pronta;
  - mensagem no WhatsApp no 7º dia depois da compra, quando ela já assistiu às primeiras aulas;
  - nova mensagem no 25º dia, como último aviso.

### 11.5 Onde aparece (e onde não aparece)

- **Nunca na LP nem na página da sala.** Se o downsell ficar à vista, quem compraria a Academy compra a anatomia. Ele só aparece para quem já disse não.
- **Nunca antes de 06/10, 23h59.** A noite da aula é só da oferta principal.
- **Onde usar a partir de 07/10:**
  1. **Carrinho abandonado da Ticto:** mensagem no WhatsApp, 24 horas depois do abandono.
  2. **Remarketing** para quem visitou a `/academy` e não comprou.
  3. **Agente de IA no WhatsApp:** quando a objeção for preço, a partir de 07/10 (`docs/agente-ia/04-filgueiras-academy.md`, seção 6).

Mensagem do carrinho abandonado:

> Oi, [nome]! Vi que você chegou até o checkout da Filgueiras Academy e não finalizou. Se o momento não é de entrar na plataforma inteira, tem uma porta menor: o curso online de Fresh Frozen + dissecção, separado, por R$797 (ou 12x de R$82,42), com 6 meses de acesso. É a parte que faz a mão parar de hesitar. E se depois quiser a Academy completa, em até 30 dias você troca pagando só a diferença. Link: [link da oferta Anatomia · Downsell]

---

## Pendências

- [ ] Os dois links do checkout em `lib/ofertaAcademy.ts` (`CHECKOUT_SALA` e `CHECKOUT_EVERGREEN`).
- [ ] Downsell: aprovar os 6 meses de acesso, criar o plano "Anatomia em Fresh Frozen" na MemberKit e a oferta oculta de upgrade (R$1.000), e colar o link dela em `UPGRADE_ANATOMIA_URL`.
- [ ] A Aline confirma os estudos nos EUA e em Portugal, citados na descrição da anatomia.
- [ ] Confirmar o e-mail de suporte (`@gmail.com.br` × `@gmail.com`).
- [ ] O preço do bump da evergreen (R$47 sugerido).
- [ ] As medidas dos banners do template, para eu gerar as artes.
- [ ] Autorização das alunas para usar os depoimentos no checkout.
- [ ] Toxina dos 10 primeiros: revisão jurídica e sanitária, e entrega só para quem é habilitada a aplicar.
