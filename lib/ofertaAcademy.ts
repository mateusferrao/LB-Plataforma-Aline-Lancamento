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
//   - Âncoras só reais: os cursos presenciais da própria Aline (esteira 2025) e o
//     curso de fresh frozen fora do Brasil. Nada de valor inventado por item.
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
        porque: "Pra rever a anatomia de 06/10 quantas vezes precisar.",
      },
      {
        nome: `+6 meses de acesso: ${SALA.mesesAcesso} meses no total`,
        porque: "Porque a sua rotina não é só estudo. Você vai no seu ritmo.",
      },
    ],
  },
  {
    quem: `As primeiras ${SALA.primeirasN}`,
    itens: [
      {
        nome: "Encontro extra ao vivo de análise de casos",
        porque: "O online precisa de caso real pra virar mão.",
      },
      {
        nome: "A prancheta ilustrada da Aline, pelo correio",
        porque: "A que ela usa pra explicar o procedimento pra paciente, na consulta.",
      },
    ],
  },
  {
    quem: `As primeiras ${SALA.primeirasTopo}`,
    itens: [
      {
        nome: "Diagnóstico individual com a Aline",
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

// Âncoras reais (esteira de produtos da Aline, abr/2025).
export const ANCORAS = [
  { o: "Curso presencial de toxina (2 dias)", v: "R$2.800 a R$3.500" },
  { o: "Curso presencial de preenchimento (2 dias)", v: "R$4.400 a R$4.800" },
  { o: "Curso de fresh frozen fora do Brasil", v: "US$5.500 + passagem e visto" },
] as const;
