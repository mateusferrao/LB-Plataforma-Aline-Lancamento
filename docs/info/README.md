# LP `/info` · Mapa das Intercorrências (+ aula ao vivo de bônus)

O kit **Mapa das Intercorrências na Harmonização Facial** era vendido como order bump (R$29,90) no
checkout da aula **Por Dentro da Face** (R$67, 06/10/2026 às 20h, sem gravação). Como o bump
converteu bem, a `/info` inverte a oferta: o kit vira o produto principal e a aula entra como
bônus até a data dela.

- **Página:** `https://live.alinefilgueiras.com.br/info` (`app/info/page.tsx`)
- **Obrigado:** `https://live.alinefilgueiras.com.br/info/obrigado`. Configure como
  redirecionamento pós-compra na oferta "Kit + aula" da Ticto.
- **Oferta (fonte única):** `lib/ofertaKit.ts`
- **Componentes:** `components/info/`. `Authority` e `SocialProof` são reaproveitados.
- **Tráfego:** Meta Ads frio e remarketing. UTM `kit-mapa-intercorrencias` (ver
  `docs/rastreamento-utm.md`).

## 1. Oferta

| | Valor "de" | Na oferta |
|---|---|---|
| Mapa das Intercorrências | R$109,90 (mesmo "de" do bump na Ticto) | incluso |
| Aula ao vivo Por Dentro da Face | R$67 (preço real do ingresso) | de presente |
| **Total** | **R$176,90** | **R$97** ou 12x de R$10,03 (45% de desconto) |

Checkout: `https://payment.ticto.app/O74848DBC`.

**Por que R$97.** Quem comprou aula + bump pagou R$67 + R$29,90 = **R$96,90**. Qualquer preço
abaixo disso faria essa compradora ter pago mais caro que a nova. Com R$97, quem comprou só a aula
pagou R$67 sem o kit, e quem comprou os dois pagou R$96,90. **Nunca baixe o kit + aula para menos de
R$96,90.**

**Fases (troca sozinha):**
- `comBonus`, até 06/10 às 20h: kit + aula, R$97, contador até a aula.
- `soKit`, depois da aula: o bônus, o contador e as perguntas da aula somem. Não há checkout
  só do kit ainda, então o botão fica em "Em breve" e o preço some. Quando decidir o preço (sugestão:
  testar entre R$47 e R$67, sem ficar abaixo dos R$29,90 do bump), preencha `price`, `priceLabel`,
  `parcela12x` e `checkoutUrl` da fase `soKit`.
- Para pré-visualizar qualquer fase: `/info?preview=2026-10-07T00:00:00-03:00`.

## 2. Leitura crítica que guiou a página

1. **A conversão do bump não vale para tráfego frio.** Quem pegou o bump já tinha decidido
   comprar a aula. A `/info` é um **teste de mensagem** ("kit na frente, aula de bônus" contra "aula
   na frente, kit no bump"). Compare o CPA e o ROAS com a LP da aula, contando a receita do bump.
2. **O bônus vence em 06/10.** A urgência é real (a aula não tem gravação), mas a janela de
   veiculação é curta. Nos primeiros 2–3 dias, leia a taxa de clique no checkout.
3. **A pesquisa (340 respostas, abr/2025) fala de medo, não de intercorrência.** A palavra
   "intercorrência" aparece 2 vezes, enquanto "medo" e "insegurança" somam cerca de 55. A dor nº1 é
   captação e dinheiro. Frases reais: *"medo de errar"*, *"receio de realizar alguns procedimentos"*,
   *"não passo tanta segurança às minhas pacientes"*. Por isso a copy vende **calma e preparo**, e
   o card da paciente faz a ponte com a confiança da paciente, sem prometer agenda cheia.
4. **Ainda não existe depoimento do kit.** Nada foi inventado. A prova é a própria Aline e as
   pranchas reais na página. **Próximo passo:** pedir 2–3 prints a quem comprou o bump e trocar a
   faixa de `SocialProof` (hoje com prints das aulas da Aline) por eles.
5. **Compliance:** nada de antes/depois, nada sobre quem "pode" aplicar, nada de "zero
   intercorrência". Os números vêm só do kit e com fonte (Beleznay et al., 2019). O aviso de
   material educativo fica visível na oferta.

## 3. Copy por seção (com o porquê)

Base: skill *copywriting*. A espinha é o Human Action Model (desconforto → visão → caminho), com o
teste "Now you can…" em cada headline, uma ideia por seção, clareza acima de esperteza, sem
exclamação.

| # | Seção | Headline | Por quê |
|---|---|---|---|
| 1 | Hero | **Saiba em segundos se o que você vê na paciente é normal ou é alerta, e o que fazer nos primeiros minutos.** | Passa no "Now you can…" e é verdade (pranchas 04 e 03). Vende a calma, não o susto. A imagem é o recorte real da capa (as 8 zonas), então o produto aparece na primeira dobra. |
| 2 | Problema | Você sabe que é raro. Também sabe que, se acontecer, vai ser na sua cadeira. | Reconhece que o risco é raro, o que é honesto e reduz a sensação de pânico, e depois traz a responsabilidade. As 3 dores usam a voz da pesquisa: foto do pós à noite, mão que hesita na glabela, protocolo espalhado. |
| 3 | O que tem dentro | O que você precisa ter à vista, em pranchas para imprimir. | Mostra em vez de contar: cada página real do PDF vem com o benefício na frente. |
| 4 | Como usar | Feito pra ficar à vista, não guardado numa pasta. | Os 3 passos são da pág. 2 do kit. Reduz a complexidade: não é mais um curso para assistir. |
| 5 | Card da paciente | Sua paciente sai sabendo o que é normal e quando te chamar. | Ponte com a dor nº1 (a paciente) sem prometer mais pacientes. |
| 6 | Bônus | Você leva o Mapa. A aula ao vivo vem de presente. | O overdelivery pelo valor real (R$67). "O mapa mostra onde e o que fazer, a aula mostra por quê" faz o bônus completar o kit em vez de competir com ele. |
| 7–8 | Autoridade e prova | (reaproveitadas) | Autoridade da Aline e prints reais das aulas dela. |
| 9 | Pra quem é | O Mapa é pra você que… | Os perfis vêm da pesquisa. O "não é pra você" deixa claro que não é curso. |
| 10 | Oferta | O Mapa inteiro, e a aula ao vivo de presente. | Os itens aparecem com o "de" riscado, o total e o desconto calculados, e a garantia colada no preço. |
| 11 | FAQ | Perguntas honestas. | Inclui **"Já comprei o ingresso da aula. E agora?"**, que manda para o WhatsApp e evita que alguém pague a aula duas vezes. |
| 12 | CTA final | O mapa mostra onde e o que fazer. A aula mostra por quê. | Recapitula a ideia central e repete o CTA e a garantia. |

**Alternativas de headline para teste A/B (Hero):**
- B: "Tenha na parede do consultório o que fazer se uma intercorrência acontecer." Tangível e
  mostra o formato.
- C: "Aplique perto das zonas de risco sabendo onde está o perigo e o que fazer se algo sair do
  previsto." Conversa com os criativos 03/07 da aula.

**CTA:** "Quero o Mapa + a aula ao vivo" (diz o que a pessoa leva). Depois de 06/10: "Quero o Mapa
das Intercorrências". Alternativas: "Garantir meu Mapa das Intercorrências" e "Quero o kit com a
aula de bônus".

**Meta:** title "Mapa das Intercorrências na Harmonização Facial · Dra. Aline Filgueiras".
Description: "4 pranchas para imprimir com as zonas de risco da face, os sinais de alerta e a
conduta imediata. De bônus, a aula ao vivo Por Dentro da Face (06/10)."

## 4. Descrição do produto (Ticto)

**Nome:** Mapa das Intercorrências na Harmonização Facial + Aula ao vivo Por Dentro da Face (bônus)

**Curta (checkout):**
> 4 pranchas para imprimir com as 8 zonas de risco da face, os sinais de alerta e a conduta
> imediata em caso de intercorrência. Com card de cuidados para a sua paciente. De presente: a aula
> ao vivo Por Dentro da Face, 06/10 às 20h.

**Completa:**
> **Saiba em segundos se o que você está vendo na paciente é normal ou é alerta, e o que fazer nos
> primeiros minutos.**
>
> O Mapa das Intercorrências é o kit de referência clínica da Dra. Aline Filgueiras. Ele reúne em
> pranchas para imprimir o que você precisa ter à vista antes, durante e depois de cada aplicação.
> Em uma emergência, ninguém procura arquivo no celular.
>
> **O que você recebe**
> - Prancha 01 · Mapa das zonas de risco: as 8 regiões de maior atenção, as artérias de cada uma e
>   onde se concentram os casos publicados de perda visual (nariz 56%, glabela 27%, testa 19%, sulco
>   nasogeniano 15%; Beleznay et al., 2019).
> - Tabela de zonas em detalhe: nível de risco, estruturas de atenção e o que pode acontecer em
>   cada região.
> - Prancha 02 · Profundidade e planos: por que superficial não é sinônimo de seguro.
> - Prancha 03 · Protocolo de parede: sinais de alerta, linha do tempo das intercorrências, conduta
>   imediata em 5 passos e checklist do kit de emergência.
> - Prancha 04 · Normal ou alerta?: 7 sinais do pós-preenchimento lado a lado (cor, dor, inchaço,
>   temperatura, enchimento capilar, pele e visão).
> - Glossário rápido com 12 termos-chave.
> - Card de cuidados para a sua paciente, em PNG no formato de tela de celular: você coloca seu nome
>   e WhatsApp e envia logo depois do procedimento. Ela sabe o que é normal e quando te chamar, e você
>   fica sabendo cedo, quando ainda dá para agir.
> - Referências da literatura (Aesthetic Surgery Journal, Dermatologic Surgery, American Academy of
>   Ophthalmology, entre outras).
>
> **De presente para quem garantir até 06/10: aula ao vivo Por Dentro da Face (valor R$67).** A
> Dra. Aline mostra, direto da mesa de dissecção, o que existe embaixo da pele: os planos, as
> estruturas e os limites que mudam a conduta na cadeira. 6 de outubro de 2026, às 20h (Brasília),
> online, cerca de 90 minutos. O acesso é pelo grupo de WhatsApp e não há gravação. O mapa mostra onde
> está o risco e o que fazer. A aula mostra por quê.
>
> **Formato:** PDF digital de 10 páginas + card em PNG, com acesso enviado pelo WhatsApp.
> **Garantia:** 7 dias.
>
> *Material educativo. Organiza informações publicadas na literatura para consulta rápida e não
> substitui formação, protocolos clínicos oficiais, orientação do seu conselho profissional ou
> avaliação individual.*

## 5. WhatsApp · venda realizada

> Oi, {nome}. Aqui é da equipe da Dra. Aline Filgueiras.
>
> Sua compra do *Mapa das Intercorrências* foi confirmada. Seja muito bem-vinda.
>
> *1. Seu kit*
> Aqui está o acesso ao seu kit: {link do kit}
> Se tiver qualquer dificuldade pra abrir, me responda aqui que eu te ajudo.
>
> Pra aproveitar desde o primeiro dia:
> • Imprima as pranchas 01 e 03 e deixe na parede do consultório. Numa emergência, ninguém procura
> arquivo no celular.
> • Coloque seu nome e WhatsApp no card da paciente e envie depois do próximo procedimento.
>
> *2. Seu presente: aula ao vivo Por Dentro da Face*
> 📅 6 de outubro, às 20h (Brasília)
> 💻 Online, cerca de 90 minutos
>
> Entre no grupo pra receber o link da sala:
> https://chat.whatsapp.com/KmL36ic5sFGFYVCJL6vm7g?s=cl&p=i&mlu=4
>
> A aula é ao vivo e não tem gravação, então já reserva esse horário na agenda.
>
> Qualquer dúvida, é só responder esta mensagem.

## 6. Pendências antes/depois do lançamento

- [ ] Configurar `/info/obrigado` como redirecionamento pós-compra na oferta da Ticto.
- [ ] Confirmar que o "de R$109,90" do Mapa é o mesmo exibido no bump da Ticto.
- [x] Forma de entrega do kit: **pelo WhatsApp** (já refletido em `/info/obrigado`, na oferta, na
  FAQ, no template acima e nos docs do agente).
- [ ] Coletar prints de quem comprou o bump e trocar a prova social.
- [ ] Depois de 06/10: definir preço e checkout do kit sozinho na fase `soKit`.

Imagens: `public/images/info/`, renderizadas do PDF do kit. A foto do laboratório vem de
`docs/criativos/fotos/lab-luvas.jpg`.
