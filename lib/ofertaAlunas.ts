// ============================================================================
//  OFERTA DAS EX-ALUNAS (/alunas) — FONTE ÚNICA DA VERDADE
//  Aula ao vivo Por Dentro da Face pelo MESMO preço de todo mundo (R$67) +
//  Protocolo de Resgate Vascular de presente, só pelo link exclusivo enviado
//  às ex-alunas (a página é noindex e não entra em anúncio). Plano e mensagens
//  em docs/alunas/README.md.
//
//  Regras:
//   - O preço da aula nunca é menor que o público (lib/lotes.ts): o benefício
//     de ex-aluna é o presente, não desconto.
//   - Âncora: aula "de R$197" (AULA_VALOR_DE, o mesmo "de" da /lp2 e da /info)
//     + Protocolo "de R$109,90" (o "de" do order bump) = "de R$306,90 por R$67".
//     Total e % são calculados aqui, nunca escritos à mão.
//   - `checkoutUrl` é a oferta "Aula + Protocolo (ex-alunas)" na Ticto (R$67,
//     sem order bump, entrega os dois). Enquanto estiver vazio, o botão fica
//     "Em breve" — preencha aqui quando a oferta existir.
//   - O presente vale até a aula começar (LIVE_DATE_ISO). Depois, o botão
//     vira o mesmo "quero saber da próxima turma" das outras LPs.
//   - `protocoloAvulsoUrl` é o checkout só do Protocolo por R$29,90 (o mesmo
//     do order bump), pra quem já tem o ingresso. Vazio = a FAQ não mostra link.
// ============================================================================

import { AULA_VALOR_DE, LIVE_DATE_ISO } from "@/lib/lotes";
import { ITEM_AULA, formatBRL } from "@/lib/ofertaKit";

const PROTOCOLO_VALOR_DE = 109.9;
const VALOR_DE_TOTAL = AULA_VALOR_DE + PROTOCOLO_VALOR_DE;
const PRICE = 67;

export const OFERTA_ALUNAS = {
  price: PRICE,
  priceLabel: "R$67",
  parcela12x: "R$6,92",
  checkoutUrl: "",
  endsAt: LIVE_DATE_ISO,
  aulaValorDeLabel: formatBRL(AULA_VALOR_DE),
  protocoloValorDe: PROTOCOLO_VALOR_DE,
  protocoloValorDeLabel: formatBRL(PROTOCOLO_VALOR_DE),
  valorDeTotalLabel: formatBRL(VALOR_DE_TOTAL),
  descontoPct: Math.round((1 - PRICE / VALOR_DE_TOTAL) * 100),
  protocoloAvulsoPriceLabel: "R$29,90",
  protocoloAvulsoUrl: "",
  aula: ITEM_AULA,
  contentName: "Aula + Protocolo (ex-alunas)",
} as const;
