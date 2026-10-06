// ============================================================================
//  FILGUEIRAS ACADEMY · CONSULTA, AGULHA E ESPELHO — FONTE ÚNICA DA VERDADE
//  Duas páginas usam esta oferta (plano em docs/plataforma/README.md):
//   - /academy/sala: quem esteve na aula de 06/10. R$1.797, com os bônus da
//     sala até 06/10 23h59 (a noite da aula): os 10 primeiros (certificado,
//     prancheta, mentoria em grupo com a Aline, toxina) e, entre eles, os 5
//     primeiros ganham +6 meses de acesso.
//     noindex, link só na sala e no grupo.
//   - /academy: evergreen, R$1.797, só o núcleo. Recebe os anúncios.
//
//  Regras:
//   - Oferta ajustada pela equipe em 05/10: um preço só (R$1.797), sem cupom.
//     Valores da pilha passados pela equipe. Na página é "valor", nunca
//     "de R$X por": nenhum item foi vendido avulso por esse preço.
//   - Os 10 e os 5 primeiros contam pela hora da compra na Ticto. A página não mostra
//     contador de vagas (não há dado em tempo real); a contagem é dita na sala.
//   - Sem checkoutUrl → botão "Em breve". Produto ainda não criado na Ticto.
//   - Nenhuma promessa de agenda, faturamento ou resultado clínico.
// ============================================================================

const PRECO = 1797;

// Links das duas ofertas do produto "Filgueiras Academy · Consulta,
// Agulha e Espelho" na Ticto (docs/plataforma/ticto.md). Mesmo preço; a oferta
// da sala separa quem comprou na noite da aula (contagem dos 10 primeiros) de
// quem veio pelos anúncios. Depois de 06/10 23h59 a sala usa o link da evergreen.
const CHECKOUT_EVERGREEN = "https://payment.ticto.app/ODB726458";
const CHECKOUT_SALA = "https://payment.ticto.app/OEF7AADF6";

const PRIMEIROS_N = 10;
const PRIMEIROS_TOPO = 5;

// "R$1.797" (o formatBRL do kit não põe o separador de milhar).
function formatBRL(v: number) {
  return `R$${v.toLocaleString("pt-BR")}`;
}

export const ACADEMY = {
  nome: "Filgueiras Academy",
  nomeOferta: "Consulta, Agulha e Espelho",
  nomeCompleto: "Filgueiras Academy · Consulta, Agulha e Espelho",
  precoCheio: PRECO,
  precoCheioLabel: formatBRL(PRECO),
  mesesAcesso: 12,
  checkoutUrl: CHECKOUT_EVERGREEN,
  // 12x com os juros do gateway (informado pela equipe em 05/10).
  parcela12x: "R$185,85",
  contentName: "Filgueiras Academy (evergreen)",
} as const;

export const SALA = {
  preco: PRECO,
  precoLabel: formatBRL(PRECO),
  checkoutUrl: CHECKOUT_SALA || CHECKOUT_EVERGREEN,
  // Os bônus da sala valem só na noite da aula: até 06/10 às 23h59 (Brasília).
  // Depois disso a página da sala segue vendendo o núcleo, sem os bônus.
  endsAt: "2026-10-06T23:59:59-03:00",
  prazoLabel: "hoje, terça, 6 de outubro, até 23h59",
  prazoCurto: "06/10, 23h59",
  // Os 5 primeiros: 18 meses. A extensão é feita em lote pela equipe (a Ticto vende 12).
  mesesTopo: 18,
  extensaoAte: "10/10",
  primeirosN: PRIMEIROS_N,
  primeirosTopo: PRIMEIROS_TOPO,
  parcela12x: ACADEMY.parcela12x,
  contentName: "Filgueiras Academy (sala 06/10)",
} as const;

type Item = { nome: string; detalhe: string; valor?: number };

// Pilha no formato do $100M Offers: cada item diz, numa linha curta, o
// problema que resolve ("Pra…"). O núcleo ataca as três inseguranças (agulha,
// consulta, sozinha); cada bônus derruba uma objeção. Valores da equipe (05/10).
// O núcleo: o que todo mundo leva por R$1.797.
export const PILHA_ACADEMY: readonly Item[] = [
  { nome: "Curso online de Fresh Frozen + dissecção", detalhe: "Pra mão parar de hesitar.", valor: 1297 },
  {
    nome: "Plataforma Filgueiras Academy",
    detalhe: "Pro caminho completo: 70+ aulas de técnica e a Consulta que Vende.",
    valor: 1497,
  },
  {
    nome: "6 encontros ao vivo no ano",
    detalhe: "Pra não travar sozinha. Com a Aline ou o time dela.",
    valor: 5000,
  },
  { nome: "1 aula ao vivo com a Aline pra discussão de casos", detalhe: "Pra ver como ela pensa a conduta.", valor: 1000 },
  { nome: "Preferência nos cursos presenciais", detalhe: "Pra garantir a vaga quando quiser o hands-on." },
];

// Sala: os 10 primeiros, pela hora da compra. Cada um responde a uma objeção.
// Toxina sem quantidade por enquanto (decisão de 05/10); nunca a marca "Botox".
export const BONUS_PRIMEIROS: readonly Item[] = [
  { nome: "Certificado Filgueiras Academy", detalhe: "Pra paciente ver com quem você estudou." },
  { nome: "Prancheta ilustrada da Aline", detalhe: "Pra explicar o procedimento na consulta.", valor: 600 },
  // PENDENTE: formato da mentoria (frequência, duração, por quanto tempo).
  { nome: "Mentoria em grupo com a Aline", detalhe: "Pra ter a Aline perto, só com os 10 primeiros.", valor: 5000 },
  { nome: "Toxina botulínica", detalhe: "Pra sua próxima aplicação." },
];

// Sala: entre os 10 primeiros, os 5 primeiros. Fora da soma dos totais.
export const BONUS_TOPO: Item = {
  nome: `+6 meses de acesso (${SALA.mesesTopo} no total)`,
  detalhe: "Pra estudar no seu ritmo.",
  valor: Math.round(PRECO / 2), // metade do plano de 12 meses
};

const soma = (itens: readonly Item[]) => itens.reduce((t, i) => t + (i.valor ?? 0), 0);

// Dois totais: o de todo mundo (núcleo) e o dos 10 primeiros (núcleo + bônus).
export const VALOR_TOTAL = {
  nucleo: formatBRL(soma(PILHA_ACADEMY)),
  primeiros: formatBRL(soma(PILHA_ACADEMY) + soma(BONUS_PRIMEIROS)),
} as const;

// Downsell (docs/plataforma/ticto.md §11): só o curso de anatomia, 6 meses, para
// quem não comprou a Academy. Nunca à vista na LP. Upgrade pela diferença em até
// 30 dias, por uma oferta oculta da Academy na Ticto.
// Oferta oculta "Academy · Upgrade Anatomia" (R$1.000) na Ticto.
const UPGRADE_ANATOMIA_URL = "https://payment.ticto.app/OB97300B4";
// Oferta "Anatomia · Downsell" (R$797) na Ticto.
const CHECKOUT_ANATOMIA = "https://payment.ticto.app/O39AA5EC7";
const PRECO_ANATOMIA = 797; // definido pela equipe em 05/10

export const ANATOMIA = {
  nome: "Por Dentro da Face · Anatomia em Fresh Frozen",
  preco: PRECO_ANATOMIA,
  precoLabel: formatBRL(PRECO_ANATOMIA),
  mesesAcesso: 6,
  upgradePreco: PRECO - PRECO_ANATOMIA,
  upgradePrecoLabel: formatBRL(PRECO - PRECO_ANATOMIA),
  upgradeDias: 30,
  upgradeUrl: UPGRADE_ANATOMIA_URL,
  checkoutUrl: CHECKOUT_ANATOMIA,
  parcela12x: "R$82,42",
} as const;

// Upsell de 1 clique do Flow da Ticto (docs/plataforma/ticto-funil.md): quem
// compra a anatomia cai em /academy/anatomia/upgrade e leva a Academy pela
// diferença sem preencher nada de novo. O script (Flow → "<> scripts") liga os
// botões pelas classes ticto-upsell-button e ticto-refuse-button. O fallbackOffer
// é o código da oferta de upgrade (o trecho depois de payment.ticto.app/ no link
// do checkout): sem cartão salvo (ex.: anatomia paga no Pix), a Ticto abre o
// checkout dessa oferta.
export const TICTO_UPSELL_ANATOMIA = {
  scriptSrc: "https://midas.ticto.app/oneclickbuy.js?flow=8a88fef5-7f44-4687-9ca5-05b21b5a8288.120878",
  fallbackOffer: "OB97300B4",
} as const;

// Upsell da Academy (só na oferta Evergreen, docs/plataforma/ticto-funil.md §2):
// mentoria em grupo com a Aline, 3 meses, 1 encontro ao vivo por mês. É a mesma
// mentoria que os 10 primeiros da aula levaram de bônus (valor R$5.000 na pilha).
// Sem downsell depois dela (decisão de 05/10). Oferta na Ticto: O5491F4AA.
export const MENTORIA = {
  nome: "Mentoria em grupo com a Aline",
  meses: 3,
  encontros: "1 encontro ao vivo por mês",
  valor: 5000,
  preco: 1997,
  precoLabel: formatBRL(1997),
  // Pela conta (3,49% ao mês, juros do comprador). Conferir no checkout da Ticto.
  parcela12x: "R$206,54",
  checkoutUrl: "https://payment.ticto.app/O5491F4AA",
  // Bônus só da página do upsell (decisão de 06/10): quem aceita leva 1 colega da
  // estética ou da saúde nos encontros, sem pagar a mais. Não muda nada na Ticto
  // (o 1 clique cobra os mesmos R$1.997); a equipe cadastra a colega depois.
  // Vale para a mentoria comprada no mesmo dia da Academy.
  acompanhante: {
    nome: "+1 vaga pra uma colega",
    detalhe: "Uma colega da estética ou da saúde participa dos encontros ao vivo com você, pelos 3 meses.",
    valor: 5000,
  },
} as const;

export const TICTO_UPSELL_ACADEMY = {
  scriptSrc: "https://midas.ticto.app/oneclickbuy.js?flow=f8425439-00a2-4098-8a6d-5fb67376fe59.120878",
  fallbackOffer: "O5491F4AA",
} as const;

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

export { formatBRL as brl };
