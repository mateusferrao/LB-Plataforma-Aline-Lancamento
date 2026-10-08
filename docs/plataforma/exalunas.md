# LP `/academy/exalunas` · Volta das ex-assinantes da Academy

Condição de volta pra quem **já foi assinante** da Filgueiras Academy e **hoje está sem acesso**,
enviada por disparo de WhatsApp (08/10).

- **Página:** `https://live.alinefilgueiras.com.br/academy/exalunas` (`app/academy/exalunas/page.tsx`).
  É `noindex` e **não entra em anúncio**.
- **Checkout:** oferta da Ticto `https://payment.ticto.app/O647D6C32` (R$797).
- **Oferta (fonte única):** bloco `EXALUNAS` em `lib/ofertaAcademy.ts`. Os totais são calculados lá.
- **Componentes:** `components/academy/exalunas/`. Reaproveita a `Prova`, a `Autoridade` e a
  `Garantia` da Academy, e o `AteOFim`/`PrazoInline` com a prop `fim`.
- **Agente de IA:** `docs/agente-ia/04-filgueiras-academy.md`, seção 6b (e 01, 02 A1/A2, 03).

## 1. A oferta

| Item | Valor |
|---|---|
| Volta à Filgueiras Academy, 12 meses | ~~R$1.797~~ |
| Novo curso online de Fresh Frozen + dissecção (**presente**) | ~~R$1.297~~ |
| *A plataforma e o módulo* | *~~R$3.094~~* |
| Mentoria em grupo com a Aline, 3 meses (bônus) | ~~R$5.000~~ |
| Certificado do curso de anatomia (bônus) | Incluso |
| Preferência nos próximos cursos online e presenciais (bônus) | Incluso |
| **Valor total** | **~~R$8.094~~** |
| **Pra ex-assinante** | **12x de R$82,42** ou R$797 à vista (R$2,18 por dia). No card, o 12x vem em destaque, como na `/academy` |

**Prazo:** sexta, 09/10, 23h59. **O botão não trava:** depois do prazo somem a barra do topo, os
contadores e as frases "até sexta"; o preço e o checkout continuam.

## 2. Decisões (08/10) e por quê

| Decisão | Por quê |
|---|---|
| **O presente primeiro** (o módulo de anatomia de presente), e o preço só no card | O mesmo aprendizado da `/alunas` (01/10): "grátis" converte mais que "% off". |
| **Duas âncoras somadas** (R$1.797 + R$1.297), a pedido da equipe | Mostra o tamanho da volta. Os R$1.797 da `/academy` já incluem o módulo: se alguém comparar, a resposta é que pra ela o módulo vem de presente. |
| **Motivo do desconto** escrito ("quem entra pela primeira vez paga R$1.797; a sua volta custa R$797") | Desconto sem motivo soa como liquidação. Com motivo, soa como reconhecimento. |
| **Hero sem preço; o botão leva à oferta e aos bônus** (como na `/academy`), e a barra fixa do celular também, até ela chegar no card | Pedido de 08/10: valor antes do preço. O checkout fica no card da oferta, na seção da mentoria e no CTA final. |
| **Página curta:** o que mudou → oferta → prova → mentoria → autoridade → garantia → FAQ | A oferta entra na 3ª dobra. As objeções ficam depois, pra quem ainda precisa. |
| **Mentoria como resposta a "assinei e não usei"** (seção "Dessa vez você não estuda sozinha" e FAQ) | É a objeção nº 1 de quem já assinou e saiu. |
| **O Fresh Frozen como a grande novidade** (08/10): selo "Novo" e H1 no hero, card grande com foto na seção "Enquanto você esteve fora", linha destacada no card da oferta, barra do topo e barra do celular | Dá o ar de novidade: é o motivo de voltar agora. A mentoria, o certificado e a preferência viram "E mais, só na sua volta". |
| **Imagens reais e autorais, direto dos EUA** (08/10): no hero, no card do Fresh Frozen (etiqueta na foto, 1º item da lista e texto), na linha do card da oferta, no FAQ e no CTA final | É o diferencial do curso: o que ela vê são as dissecções da própria Aline, não atlas. |
| **Sem escassez inventada** | A mentoria é pra todas as que voltarem. A única urgência é o prazo real de sexta. |

## 3. Link do disparo (com UTMs)

```
https://live.alinefilgueiras.com.br/academy/exalunas?utm_source=whatsapp&utm_medium=disparo&utm_campaign=exassinantes
```

O ticto-echo repassa as UTMs pro checkout. Se o disparo for em lotes, troque `utm_content` por lote
(ex.: `utm_content=gancho-a`).

## 4. Mensagens

**Regra:** a primeira linha é o que aparece na notificação. Depois vêm quem manda, um link só e a
opção de sair. Se o disparo for pela API oficial do WhatsApp, cadastre como template antes
(`docs/plataforma/templates-whatsapp-oficial.md`).

**Ganchos pra testar:**
- **A · presente (recomendado):** *EX-ASSINANTE DA ACADEMY: A ALINE SEPAROU UM PRESENTE PRA SUA VOLTA.*
- **B · novidade:** *{NOME}, A ACADEMY GANHOU A FACE POR DENTRO.*

### Mensagem 1 · quinta, 08/10 (o disparo)

> EX-ASSINANTE DA ACADEMY: A ALINE SEPAROU UM PRESENTE PRA SUA VOLTA.
>
> Oi, {NOME}! Aqui é a equipe da Dra. Aline Filgueiras.
>
> Desde que você saiu, a Filgueiras Academy ganhou o curso online de Fresh Frozen + dissecção: a
> face por dentro, camada por camada, com imagens reais das dissecções que a Aline fez nos EUA.
>
> Pra quem já foi assinante, até sexta (09/10, 23h59):
> • a Academy de volta por 12 meses, por R$797 (ou 12x de R$82,42). Quem entra pela primeira vez paga R$1.797;
> • o módulo de anatomia de presente (vale R$1.297);
> • 3 meses de mentoria em grupo com a Aline, ao vivo.
>
> Tá tudo aqui: {LINK}
>
> Se não quiser mais receber, é só responder SAIR.

### Mensagem 2 · sexta, 09/10, de manhã (último dia)

> ÚLTIMO DIA DA SUA CONDIÇÃO DE VOLTA.
>
> Oi, {NOME}! A condição de ex-assinante da Academy termina hoje, às 23h59: R$797, com o módulo de
> anatomia em fresh frozen de presente e 3 meses de mentoria com a Aline.
>
> {LINK}
>
> Responda SAIR pra não receber mais.

### Mensagem 3 · sexta, 09/10, 20h (só pra quem não comprou)

> FALTAM 4 HORAS.
>
> {NOME}, a sua volta à Academy com o módulo de anatomia de presente fecha hoje, às 23h59.
>
> {LINK}

## 5. Checklist antes do disparo

- [ ] A oferta O647D6C32 libera na MemberKit a **Academy (12 meses) e o módulo de anatomia**.
- [ ] A página de obrigado da oferta na Ticto (sugestão: `/academy/obrigado`).
- [ ] O 12x no checkout confere com **R$82,42** (se não, trocar `EXALUNAS.parcela12x`).
- [ ] Clicar num botão da página publicada: o checkout abre em **R$797** e as UTMs aparecem na URL.
- [ ] A lista do disparo tem só ex-assinantes **sem acesso ativo**.
- [ ] Depois da compra: a equipe chama no WhatsApp pra colocar na mentoria e combinar o certificado.

## 6. Depois de sexta

- A página segue no ar com o preço e o botão, sem a urgência.
- A partir de 10/10, o agente para de oferecer (03-politicas, §9). Quem pedir a condição vai pro humano.
