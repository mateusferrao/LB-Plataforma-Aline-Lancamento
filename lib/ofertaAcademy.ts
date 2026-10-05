// ============================================================================
//  FILGUEIRAS ACADEMY · CONSULTA, AGULHA E ESPELHO — FONTE ÚNICA DA VERDADE
//  Duas páginas usam esta oferta (plano em docs/plataforma/README.md):
//   - /academy/sala: quem esteve na aula de 06/10. R$1.497 com cupom até
//     08/10 23h59 + bônus em níveis. noindex, link só na sala e no grupo.
//   - /academy: evergreen, R$1.797, sem bônus. Recebe os anúncios de aquisição.
//
//  Regras:
//   - Preço cheio R$1.797 é o preço real da evergreen (âncora legítima). A sala
//     paga R$1.497 com o cupom, que a Ticto expira sozinho às 23h59 de 08/10.
//   - Pilha de valor (valores riscados por item): usa a valoração que a própria
//     equipe publicou na LP de abr/2025 para os módulos que já existiam. Os itens
//     novos (Anatomia, bônus da sala) têm valor PENDENTE de confirmação. Na página
//     é "valor", nunca "de R$X por": nenhum item foi vendido avulso por esse preço.
//   - Os níveis de bônus contam pela hora da compra na Ticto. A página não mostra
//     contador de vagas (não há dado em tempo real); a contagem é dita na sala.
//   - Sem checkoutUrl → botão "Em breve". Produto ainda não criado na Ticto.
//   - Nenhuma promessa de agenda, faturamento ou resultado clínico.
// ============================================================================


const PRECO_CHEIO = 1797;
const PRECO_SALA = 1497;

// PENDENTE: produto "Filgueiras Academy · Consulta, Agulha e Espelho" na Ticto.
// Preencher com o link do checkout (sem cupom). A sala acrescenta ?coupon=.
const CHECKOUT_BASE = "";

// PENDENTE: confirmar o código do cupom criado na Ticto (validade até 08/10 23h59).
const CUPOM_SALA = "SALA0610";

// PENDENTE: número de pranchetas em estoque (nível do meio = primeiras N, até 40).
const PRIMEIRAS_N = 40;

// PENDENTE (confirmar com a equipe): valores dos itens novos.
const VALOR_ANATOMIA = 2997;
const VALOR_ALFA_OMEGA = 497; // em 2025, R$997 era o bloco inteiro de espiritualidade e mentalidade
const VALOR_ENCONTRO_CASOS = 497;
const VALOR_PRANCHETA = 197;
const VALOR_DIAGNOSTICO = 997;

// "R$1.797" (o formatBRL do kit não põe o separador de milhar).
function formatBRL(v: number) {
  return `R$${v.toLocaleString("pt-BR")}`;
}

function comCupom(url: string, cupom: string) {
  if (!url) return "";
  return `${url}${url.includes("?") ? "&" : "?"}coupon=${cupom}`;
}

export const ACADEMY = {
  nome: "Filgueiras Academy",
  nomeOferta: "Consulta, Agulha e Espelho",
  nomeCompleto: "Filgueiras Academy · Consulta, Agulha e Espelho",
  precoCheio: PRECO_CHEIO,
  precoCheioLabel: formatBRL(PRECO_CHEIO),
  mesesAcesso: 12,
  checkoutUrl: CHECKOUT_BASE,
  // PENDENTE: parcela exata em 12x com os juros do gateway (conferir no checkout).
  parcela12x: "",
  contentName: "Filgueiras Academy (evergreen)",
} as const;

export const SALA = {
  preco: PRECO_SALA,
  precoLabel: formatBRL(PRECO_SALA),
  economiaLabel: formatBRL(PRECO_CHEIO - PRECO_SALA),
  cupom: CUPOM_SALA,
  checkoutUrl: comCupom(CHECKOUT_BASE, CUPOM_SALA),
  // A condição vale até 08/10 às 23h59 (horário de Brasília).
  endsAt: "2026-10-08T23:59:59-03:00",
  prazoLabel: "quarta, 8 de outubro, às 23h59",
  prazoCurto: "08/10, 23h59",
  mesesAcesso: 18,
  // A extensão para 18 meses é feita em lote pela equipe (o cupom só muda o preço).
  extensaoAte: "10/10",
  primeirasN: PRIMEIRAS_N,
  primeirasTopo: 10,
  // PENDENTES: datas que a página só mostra quando preenchidas.
  encontroCasosData: "",
  diagnosticoAte: "",
  // PENDENTE: parcela exata de R$1.497 em 12x com os juros do gateway.
  parcela12x: "",
  contentName: "Filgueiras Academy (sala 06/10)",
} as const;

// Escada de bônus da sala (pitch, bloco 5). Cada bônus responde a uma objeção.
export const NIVEIS_SALA = [
  {
    quem: `Todas que entrarem até ${SALA.prazoCurto}`,
    itens: [
      {
        nome: "A gravação da aula Por Dentro da Face",
        valor: 67, // o preço do ingresso da aula
        porque: "Pra rever a anatomia de 06/10 quantas vezes precisar.",
      },
      {
        nome: `+6 meses de acesso: ${SALA.mesesAcesso} meses no total`,
        valor: Math.round(PRECO_CHEIO / 2), // metade do plano de 12 meses
        porque: "Porque a sua rotina não é só estudo. Você vai no seu ritmo.",
      },
    ],
  },
  {
    quem: `As primeiras ${SALA.primeirasN}`,
    itens: [
      {
        nome: "Encontro extra ao vivo de análise de casos",
        valor: VALOR_ENCONTRO_CASOS,
        porque: "O online precisa de caso real pra virar mão.",
      },
      {
        nome: "A prancheta ilustrada da Aline, pelo correio",
        valor: VALOR_PRANCHETA,
        porque: "A que ela usa pra explicar o procedimento pra paciente, na consulta.",
      },
    ],
  },
  {
    quem: `As primeiras ${SALA.primeirasTopo}`,
    itens: [
      {
        nome: "Diagnóstico individual com a Aline",
        valor: VALOR_DIAGNOSTICO,
        porque: "30 minutos, online, pra olhar o seu momento e montar o seu caminho na Academy.",
      },
    ],
  },
] as const;

// Garantia nomeada (pitch, bloco 6). Duas camadas.
export const GARANTIA_ACADEMY = {
  nome: "Garantia Mão Segura",
  prazoIncondicionalDias: 7,
  prazoCondicionalDias: 30,
  incondicional: "7 dias pra pedir o dinheiro de volta, sem explicar nada.",
  condicional:
    "Se em 30 dias você assistir ao módulo de anatomia e não sentir a mão mais segura, é só escrever que a gente devolve.",
  linha: "Garantia Mão Segura: 7 dias sem perguntas + 30 dias se a mão não ficar mais segura",
  whatsapp: "+55 31 95349-1799",
  email: "suporte.alinefilgueiras@gmail.com.br",
} as const;

// Pilha de valor do núcleo (12 meses). Valores dos módulos que já existiam: LP
// de abr/2025 ("Clínica de Excelência" R$2.997, "Consulta que Vende" R$1.497,
// "Vitrine Estratégica" R$997, ferramentas R$497, Sala de Lapidação R$1.497).
export const PILHA_ACADEMY = [
  {
    nome: "Curso online de Fresh Frozen + dissecção",
    detalhe: "Novo: a face por dentro, camada por camada",
    valor: VALOR_ANATOMIA,
  },
  {
    nome: "Mais de 70 aulas práticas",
    detalhe: "Toxina, preenchimento, bioestimuladores, intercorrências e anestesia",
    valor: 2997,
  },
  { nome: "A Consulta que Vende", detalhe: "Aulas, roleplays e checklist da consulta", valor: 1497 },
  { nome: "Marketing e posicionamento", detalhe: "Copy pra Reels, Stories e WhatsApp", valor: 997 },
  {
    nome: "Ferramentas prontas",
    detalhe: "Anamnese, termos, precificação, scripts e dicas jurídicas",
    valor: 497,
  },
  {
    nome: "12 meses de Sala de Lapidação",
    detalhe: "Encontros ao vivo todo mês, com as gravações na plataforma",
    valor: 1497,
  },
  { nome: "Alfa Ômega", detalhe: "Fé, identidade e propósito", valor: VALOR_ALFA_OMEGA },
] as const;

const soma = (itens: readonly { valor: number }[]) => itens.reduce((t, i) => t + i.valor, 0);

export const VALOR_TOTAL = {
  // Evergreen: o núcleo. Sala: o núcleo + os bônus de todas (nível 1). Os níveis
  // das mais rápidas aparecem com valor, mas fora da soma.
  evergreen: formatBRL(soma(PILHA_ACADEMY)),
  sala: formatBRL(soma(PILHA_ACADEMY) + soma(NIVEIS_SALA[0].itens)),
} as const;

// Âncoras reais, embaixo do card da oferta: os cursos presenciais da própria
// Aline (esteira de abr/2025), só de técnica.
export const ANCORAS = [
  { o: "o curso presencial de toxina da Aline, 2 dias, só técnica", v: "R$2.800 a R$3.500" },
  { o: "o curso presencial de preenchimento da Aline, 2 dias, só técnica", v: "R$4.400 a R$4.800" },
] as const;

export { formatBRL as brl };
