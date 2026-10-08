// ============================================================================
//  FILGUEIRAS ACADEMY · CONSULTA, AGULHA E ESPELHO — FONTE ÚNICA DA VERDADE
//  Duas páginas usam esta oferta (plano em docs/plataforma/README.md):
//   - /academy/sala: quem esteve na aula de 06/10. R$1.797, com os bônus da
//     sala até 06/10 23h59 (a noite da aula): os 10 primeiros (certificado,
//     prancheta, mentoria em grupo com a Aline, toxina) e +3 meses de acesso
//     pra todo mundo que compra nessa noite (os +6 dos 5 primeiros saíram em 06/10).
//     noindex, link só na sala e no grupo.
//   - /academy: evergreen, R$1.797, só o núcleo. Recebe os anúncios.
//
//  Regras:
//   - Oferta ajustada pela equipe em 05/10: um preço só (R$1.797), sem cupom.
//     Valores da pilha passados pela equipe. Na página é "valor", nunca
//     "de R$X por": nenhum item foi vendido avulso por esse preço.
//   - Os 10 primeiros contam pela hora da compra na Ticto. A página não mostra
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
const PRIMEIROS_CINCO = 5;

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
  // Todo mundo que compra pela sala até o fim dos bônus: +3 meses (decisão de 06/10).
  mesesTodos: 15,
  extensaoAte: "10/10",
  primeirosN: PRIMEIROS_N,
  primeirosCinco: PRIMEIROS_CINCO,
  parcela12x: ACADEMY.parcela12x,
  contentName: "Filgueiras Academy (sala 06/10)",
} as const;

// Ligar (true) e publicar quando a equipe avisar que o 10º pagamento da sala foi
// confirmado: a página para de oferecer os bônus dos 10 primeiros e segue com
// os +3 meses de todo mundo até 23h59.
export const BONUS_10_ESGOTADO = false;

type Item = { nome: string; detalhe: string; valor?: number };

// Pilha no formato do $100M Offers: cada item diz, numa linha curta, o
// problema que resolve ("Pra…"). O núcleo ataca as três inseguranças (agulha,
// consulta, sozinha); cada bônus derruba uma objeção. Valores da equipe (05/10).
// O núcleo: o que todo mundo leva por R$1.797.
// Revisão de 06/10: os nomes dizem o que a pessoa leva (números de aulas conferidos
// na MemberKit em 06/10) e as ferramentas e as aulas jurídicas viraram itens
// próprios, sem valor novo (a soma não muda).
export const PILHA_ACADEMY: readonly Item[] = [
  {
    nome: "Curso online de Fresh Frozen + dissecção",
    detalhe: "A face por dentro, camada por camada. Pra mão parar de hesitar.",
    valor: 1297,
  },
  {
    nome: "Mais de 70 aulas de técnica",
    detalhe: "Preenchimento região por região, bioestimuladores, toxina, intercorrências e anestesia.",
    valor: 1497,
  },
  {
    nome: "Consulta, vendas e posicionamento",
    detalhe: "O roteiro pra ela fechar na consulta, em vez de sair dizendo “vou pensar”. Mais vendas no consultório e marketing nas redes.",
  },
  {
    nome: "Material de apoio pronto",
    detalhe: "Anamnese, termos e precificação pra usar na próxima paciente.",
  },
  {
    nome: "Dicas jurídicas com advogados",
    detalhe: "Aulas do escritório Juk Cattani Advogados Associados. Pra atender com mais tranquilidade.",
  },
  {
    nome: "6 encontros ao vivo no ano",
    detalhe: "Você leva as dúvidas do consultório e sai com a resposta. Com a Aline ou o time dela.",
    valor: 5000,
  },
  { nome: "1 aula ao vivo com a Aline pra discussão de casos", detalhe: "Pra ver como ela pensa a conduta.", valor: 1000 },
  { nome: "Preferência nos cursos presenciais", detalhe: "Pra garantir a vaga quando quiser o hands-on." },
];

// Sala, pela hora da compra (escada revista em 06/10): os 10 primeiros levam o
// certificado e a mentoria (sem número de encontros); as 5 primeiras, também o
// Manual do Envelhecimento; a primeira, também 2 ml de ácido hialurônico
// (só pra quem é habilitada; sem marca). Saíram a prancheta e a toxina. A equipe
// entra em contato depois da compra pra combinar a entrega de tudo.
export const BONUS_PRIMEIROS: readonly Item[] = [
  { nome: "Certificado Filgueiras Academy", detalhe: "Pra paciente ver com quem você estudou." },
  { nome: "Mentoria em grupo com a Aline", detalhe: "3 meses com a Aline, ao vivo, só com os 10 primeiros. Você leva os seus casos.", valor: 5000 },
];
export const BONUS_CINCO: Item = {
  nome: "Manual do Envelhecimento",
  detalhe: "Um álbum de mesa pra mostrar à paciente, na consulta, como a pele, a gordura e os ossos do rosto dela mudam com o tempo.",
  valor: 600,
};
export const BONUS_PRIMEIRA: Item = {
  nome: "2 ml de ácido hialurônico",
  detalhe: "Pra sua próxima aplicação. Só pra quem é habilitada a aplicar.",
};
export const ENTREGA_BONUS =
  "Os bônus são entregues depois da compra: a equipe entra em contato pelo WhatsApp pra combinar o certificado, a entrada na mentoria e o envio do Manual do Envelhecimento e do ácido hialurônico.";

// Sala: todo mundo que entra até o fim dos bônus (06/10 23h59) ganha +3 meses.
// Entra na soma da sala. Extensão em lote pela equipe até 10/10, como a dos 5.
export const BONUS_TODOS: Item = {
  nome: `+3 meses de acesso (${SALA.mesesTodos} no total)`,
  detalhe: "Pra estudar sem correr. Pra todo mundo que entrar hoje, até 23h59.",
  valor: Math.round(PRECO / 4), // um quarto do plano de 12 meses
};

const soma = (itens: readonly Item[]) => itens.reduce((t, i) => t + (i.valor ?? 0), 0);

// Três totais: o núcleo (evergreen), o de todo mundo na sala (núcleo + 3 meses)
// e o dos 10 primeiros (núcleo + 3 meses + bônus).
export const VALOR_TOTAL = {
  nucleo: formatBRL(soma(PILHA_ACADEMY)),
  sala: formatBRL(soma(PILHA_ACADEMY) + (BONUS_TODOS.valor ?? 0)),
  primeiros: formatBRL(soma(PILHA_ACADEMY) + (BONUS_TODOS.valor ?? 0) + soma(BONUS_PRIMEIROS)),
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
// mentoria em grupo com a Aline, 3 meses, ao vivo (sem número de encontros na página). É a mesma
// mentoria que os 10 primeiros da aula levaram de bônus (valor R$5.000 na pilha).
// Sem downsell depois dela (decisão de 05/10). Oferta na Ticto: O5491F4AA.
export const MENTORIA = {
  nome: "Mentoria em grupo com a Aline",
  meses: 3,
  // Sem número de encontros na página (decisão de 06/10).
  encontros: "ao vivo, online",
  valor: 5000,
  preco: 1997,
  precoLabel: formatBRL(1997),
  // Pela conta (3,49% ao mês, juros do comprador). Conferir no checkout da Ticto.
  parcela12x: "R$206,54",
  checkoutUrl: "https://payment.ticto.app/O5491F4AA",
  // Bônus só da página do upsell (decisão de 06/10): quem aceita leva 1 colega da
  // estética ou da saúde nos encontros, sem pagar a mais. Não muda nada na Ticto
  // (o 1 clique cobra os mesmos R$1.997); a equipe cadastra a colega depois.
  // Vale para a mentoria comprada no mesmo dia da Academy. Valor = o que a colega
  // pagaria pela mentoria (decisão de 06/10), não o valor de pilha.
  acompanhante: {
    nome: "+1 vaga pra uma colega",
    detalhe: "Uma colega da estética ou da saúde participa dos encontros ao vivo com você, pelos 3 meses.",
    valor: 1997,
  },
} as const;

export const TICTO_UPSELL_ACADEMY = {
  scriptSrc: "https://midas.ticto.app/oneclickbuy.js?flow=f8425439-00a2-4098-8a6d-5fb67376fe59.120878",
  fallbackOffer: "O5491F4AA",
} as const;

// Volta das ex-assinantes (/academy/exalunas, decisão de 08/10; plano em
// docs/plataforma/exalunas.md): quem já foi assinante e está sem acesso renova a
// Academy por R$797 e leva o novo módulo de anatomia de brinde, a mentoria de 3 meses,
// a preferência nos próximos cursos e o certificado do curso de anatomia.
// Âncoras pedidas pela equipe: plataforma R$1.797 + anatomia R$1.297 (somadas).
// Prazo de sexta, 09/10, 23h59, mas o botão não trava: depois do prazo some só a
// urgência (barra, contador e "até sexta"); o preço e o checkout seguem.
// Oferta na Ticto: O647D6C32. Página noindex, link só no disparo.
export const EXALUNAS = {
  preco: 797,
  precoLabel: formatBRL(797),
  checkoutUrl: "https://payment.ticto.app/O647D6C32",
  // Mesmo preço e mesmo gateway da anatomia avulsa. Conferir no checkout.
  parcela12x: ANATOMIA.parcela12x,
  porDia: "R$2,18", // R$797 / 365
  mesesAcesso: ACADEMY.mesesAcesso,
  endsAt: "2026-10-09T23:59:59-03:00",
  prazoCurto: "sexta, 09/10, 23h59",
  prazoDia: "sexta, 09/10",
  contentName: "Filgueiras Academy (ex-assinantes)",
} as const;

export const RENOVACAO_EXALUNAS: Item = {
  nome: `Sua volta à Filgueiras Academy · ${ACADEMY.mesesAcesso} meses`,
  detalhe: "As mais de 70 aulas de técnica, a Consulta que Vende, o material de apoio e os 6 encontros ao vivo no ano.",
  valor: PRECO,
};
export const ANATOMIA_EXALUNAS: Item = {
  nome: "Novo curso online de Fresh Frozen + dissecção",
  detalhe: "A face por dentro, camada por camada: os planos, os vasos e os limites que mudam a conduta. Pra mão parar de hesitar.",
  valor: 1297,
};
export const BONUS_EXALUNAS: readonly Item[] = [
  {
    nome: "Mentoria em grupo com a Aline · 3 meses",
    detalhe: "Ao vivo, com a Aline. Você leva os seus casos e não estuda sozinha.",
    valor: MENTORIA.valor,
  },
  { nome: "Certificado do curso de anatomia", detalhe: "Pra paciente ver com quem você estudou a face por dentro." },
  { nome: "Preferência nos próximos cursos online e presenciais", detalhe: "Você fica sabendo antes e garante a vaga primeiro." },
];
export const ENTREGA_EXALUNAS =
  "Depois da compra, a equipe te chama no WhatsApp pra te colocar na mentoria e combinar o certificado.";

export const VALOR_EXALUNAS = {
  ancoras: formatBRL((RENOVACAO_EXALUNAS.valor ?? 0) + (ANATOMIA_EXALUNAS.valor ?? 0)),
  total: formatBRL(soma([RENOVACAO_EXALUNAS, ANATOMIA_EXALUNAS, ...BONUS_EXALUNAS])),
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
  email: "suporte.filgueirasacademy@gmail.com",
} as const;

export { formatBRL as brl };
