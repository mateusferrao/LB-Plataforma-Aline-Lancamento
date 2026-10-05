// ============================================================================
//  FILGUEIRAS ACADEMY · CONSULTA, AGULHA E ESPELHO — FONTE ÚNICA DA VERDADE
//  Duas páginas usam esta oferta (plano em docs/plataforma/README.md):
//   - /academy/sala: quem esteve na aula de 06/10. R$1.797, com os bônus da
//     sala até 08/10 23h59: os 10 primeiros (certificado, prancheta, Sala VIP,
//     toxina) e, entre eles, os 5 primeiros ganham +6 meses de acesso.
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

// PENDENTE: produto "Filgueiras Academy · Consulta, Agulha e Espelho" na Ticto.
const CHECKOUT_BASE = "";

const PRIMEIROS_N = 10;
const PRIMEIROS_TOPO = 5;

// PENDENTE: quantidade de toxina botulínica do bônus dos 10 primeiros (ex.: "50U").
// Vazio → o item não aparece na página. Na página, nunca a marca "Botox".
const TOXINA_QTD = "";

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
  checkoutUrl: CHECKOUT_BASE,
  // PENDENTE: parcela exata em 12x com os juros do gateway (conferir no checkout).
  parcela12x: "",
  contentName: "Filgueiras Academy (evergreen)",
} as const;

export const SALA = {
  preco: PRECO,
  precoLabel: formatBRL(PRECO),
  checkoutUrl: CHECKOUT_BASE,
  // Os bônus da sala valem até 08/10 às 23h59 (horário de Brasília).
  endsAt: "2026-10-08T23:59:59-03:00",
  prazoLabel: "quarta, 8 de outubro, às 23h59",
  prazoCurto: "08/10, 23h59",
  // Os 5 primeiros: 18 meses. A extensão é feita em lote pela equipe (a Ticto vende 12).
  mesesTopo: 18,
  extensaoAte: "10/10",
  primeirosN: PRIMEIROS_N,
  primeirosTopo: PRIMEIROS_TOPO,
  parcela12x: ACADEMY.parcela12x,
  contentName: "Filgueiras Academy (sala 06/10)",
} as const;

type Item = { nome: string; detalhe: string; valor?: number };

// Pilha no formato do $100M Offers: cada item diz o problema que resolve
// ("Pra…"), não o que ele é. O núcleo ataca as três inseguranças (agulha,
// consulta, sozinha); cada bônus derruba uma objeção. Valores da equipe (05/10).
// O núcleo: o que todo mundo leva por R$1.797.
export const PILHA_ACADEMY: readonly Item[] = [
  {
    nome: "Curso online de Fresh Frozen + dissecção",
    detalhe: "Pra mão parar de hesitar: você vê o que tem embaixo da agulha antes de aplicar.",
    valor: 1297,
  },
  {
    nome: "Plataforma Filgueiras Academy",
    detalhe:
      "Pra ter o caminho completo: mais de 70 aulas de toxina, preenchimento e bioestimuladores, e a Consulta que Vende pra ela não sair dizendo “vou pensar”.",
    valor: 1497,
  },
  {
    nome: "6 encontros ao vivo no ano",
    detalhe: "Pra não travar sozinha: você tira a dúvida ao vivo com a Aline ou com o time dela.",
    valor: 5000,
  },
  {
    nome: "1 aula ao vivo com a Aline pra discussão de casos",
    detalhe: "Pra levar um caso real e ver como ela pensa a conduta.",
    valor: 1000,
  },
  {
    nome: "Preferência nos cursos presenciais da Aline",
    detalhe: "Pra quando quiser o hands-on: você garante a vaga antes da turma abrir.",
  },
];

// Sala: os 10 primeiros, pela hora da compra. Cada um responde a uma objeção.
export const BONUS_PRIMEIROS: readonly Item[] = [
  {
    nome: "Certificado Filgueiras Academy",
    detalhe: "Pra paciente ver, no consultório, com quem você estudou.",
  },
  {
    nome: "A prancheta ilustrada da Aline, pelo correio",
    detalhe: "Pra explicar o procedimento na consulta e ela entender o que vai fazer.",
    valor: 600,
  },
  // PENDENTE: o que é a Sala VIP (formato, quem conduz, por quanto tempo).
  {
    nome: "Sala VIP de mentoria",
    detalhe: "Pra ter acompanhamento de perto, no grupo fechado dos 10 primeiros.",
    valor: 5000,
  },
  ...(TOXINA_QTD
    ? [{ nome: `${TOXINA_QTD} de toxina botulínica`, detalhe: "Pra sua próxima aplicação sair sem o custo do produto." }]
    : []),
];

// Sala: entre os 10 primeiros, os 5 primeiros. Fora da soma dos totais.
export const BONUS_TOPO: Item = {
  nome: `+6 meses de acesso: ${SALA.mesesTopo} meses no total`,
  detalhe: "Pra estudar no seu ritmo, sem correr contra o prazo.",
  valor: Math.round(PRECO / 2), // metade do plano de 12 meses
};

const soma = (itens: readonly Item[]) => itens.reduce((t, i) => t + (i.valor ?? 0), 0);

// Dois totais: o de todo mundo (núcleo) e o dos 10 primeiros (núcleo + bônus).
export const VALOR_TOTAL = {
  nucleo: formatBRL(soma(PILHA_ACADEMY)),
  primeiros: formatBRL(soma(PILHA_ACADEMY) + soma(BONUS_PRIMEIROS)),
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

// Âncoras reais, embaixo do card da oferta: os cursos presenciais da própria
// Aline (esteira de abr/2025), só de técnica.
export const ANCORAS = [
  { o: "o curso presencial de toxina da Aline, 2 dias, só técnica", v: "R$2.800 a R$3.500" },
  { o: "o curso presencial de preenchimento da Aline, 2 dias, só técnica", v: "R$4.400 a R$4.800" },
] as const;

export { formatBRL as brl };
