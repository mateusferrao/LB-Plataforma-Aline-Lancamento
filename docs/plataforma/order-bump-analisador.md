# Order bump · Analisador Facial de Consulta (EM ESPERA)

> **06/10: decidido não colocar o order bump por enquanto.** O analisador segue só como bônus das 5 primeiras da noite da aula. Este arquivo fica como referência caso ele volte.

O analisador é bônus das **5 primeiras** da noite da aula, até 06/10 às 23h59. A partir de 07/10, depois da sala, ele passa a ser vendido como **order bump** no checkout da Academy (oferta Evergreen). Assim quem compra amanhã também pode levar, sem tirar a exclusividade da noite.

Os campos marcados com **[preencher]** dependem de dado que só vocês têm.

## 1. Criar o produto na Ticto

Caminho: **Meus Produtos → Criar produto**.

| Campo | Valor |
|---|---|
| Tipo | **Produto físico** (enviado pelo correio). Assim a Ticto pede o endereço no checkout. |
| Nome do produto | Analisador Facial de Consulta · Dra. Aline Filgueiras |
| Categoria | Saúde e estética (ou a mais próxima disponível) |
| Descrição | A ferramenta que a Dra. Aline usa na consulta pra mostrar à paciente, no rosto dela, o processo de envelhecimento: o que muda com o tempo e por que o tratamento faz sentido. Ajuda a paciente a entender a indicação e a decidir ali mesmo. Uso na consulta, por profissionais da estética e da saúde. |
| O que vem | **[preencher]**: formato, material, tamanho e quantidade de peças |
| Peso e dimensões da embalagem | **[preencher]**: a Ticto usa para o frete |
| Frete | Recomendado: **frete grátis embutido no preço**. Um bump com frete calculado à parte converte menos. |
| Prazo de envio | **[preencher]**, por exemplo "postado em até 5 dias úteis" |
| Área de membros | Nenhuma (é só físico) |
| Garantia | 7 dias |
| E-mail de suporte | suporte.filgueirasacademy@gmail.com |
| WhatsApp de suporte | +55 31 95349-1799 |
| Pixel | O mesmo Pixel da Meta do produto Filgueiras Academy 3.0, com Purchase ligado |

## 2. A oferta do produto

**Ofertas → Nova oferta**

| Campo | Valor |
|---|---|
| Nome da oferta | Analisador · Order bump Academy |
| Preço | **[decidir]**. Sugestão: **R$197**. Um order bump converte melhor entre 10% e 20% do valor do produto principal (R$1.797), e R$197 fica bem abaixo dos R$600 que a página da sala usa como valor dele. |
| Parcelamento | Segue o do checkout principal |
| Visível na loja | Não (só como bump) |

## 3. Ligar como order bump

**Filgueiras Academy 3.0 → Ofertas → Evergreen (`ODB726458`) → Order bump → Adicionar**

| Campo | Valor |
|---|---|
| Produto/oferta do bump | Analisador · Order bump Academy |
| Ofertas onde aparece | **Só a Evergreen `ODB726458`**. A Sala não leva bump: hoje à noite ele é bônus e, a partir de amanhã, a oferta é desativada. A anatomia, o upgrade e a mentoria também não levam. |
| Quando ligar | **07/10, de manhã**, junto com a desativação da oferta Sala |
| Título (chamada do checkbox) | Sim, quero o Analisador Facial de Consulta por + R$197 |
| Descrição (até ~250 caracteres) | Mostre à paciente, no rosto dela, o processo de envelhecimento, e ela entende na hora por que o tratamento faz sentido. É a ferramenta que a Dra. Aline usa na consulta. Vai pelo correio, com frete incluso. |
| Imagem | Foto do analisador, quadrada (1080 × 1080), fundo limpo, sem paciente e sem marca de produto. **[enviar a foto]** |
| Destaque | Caixa marcada como "Oferta só neste checkout", se a Ticto permitir |

## 4. Depois da compra

- **Na Ticto, a venda chega com o bump junto.** O webhook da recuperação (n8n) recebe a mesma venda da Academy, e não precisa mudar nada no fluxo.
- **Envio:** a equipe pega o endereço na venda (Ticto → Vendas) e posta no prazo combinado. Se a Ticto não pedir o endereço no bump, a equipe pede pelo WhatsApp.
- **Agente de IA:** quando o bump estiver no ar, me avisem que eu acrescento nos docs do agente: o que é, preço, prazo de envio e "comprei o analisador, quando chega?", que vai para o humano.
- **Página `/academy`:** dá para citar o analisador perto do botão ("no checkout você pode levar também o Analisador Facial de Consulta"). Faço isso quando o preço estiver definido.

## Pendências

- Formato, material, tamanho, peso e dimensões do analisador.
- O preço do bump (sugestão R$197).
- O prazo de envio.
- A foto quadrada.
