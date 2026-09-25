// ============================================================================
//  OFERTA DO KIT "MAPA DAS INTERCORRÊNCIAS" (/info) — FONTE ÚNICA DA VERDADE
//  Para mudar preço, parcela, checkout ou bônus da /info, edite SÓ o array
//  FASES abaixo. Mesma lógica de lib/lotes.ts (datas no fuso de Brasília,
//  commit → deploy sozinho).
//
//  Regras:
//   - Fase "comBonus": kit + aula ao vivo de presente, até a chegada da aula
//     (LIVE_DATE_ISO). A aula não tem gravação, então o bônus acaba com ela.
//   - Fase "soKit": depois da aula, só o kit. Sem `checkoutUrl` o botão fica
//     bloqueado ("Em breve") — preencha quando existir o checkout só do kit.
//   - `valorDe` de cada item é o preço "de" mostrado riscado. O do Mapa é o
//     mesmo "de R$109,90" do order bump na Ticto; o da aula é o preço real do
//     ingresso (R$67). Total "de" e % de desconto são calculados (valorDeTotal
//     / descontoPct), nunca escritos à mão.
//   - O preço do kit + aula nunca pode ficar abaixo de R$96,90 (aula R$67 +
//     bump R$29,90): quem já comprou não pode ter pago mais caro.
// ============================================================================

import { LIVE_DATE_ISO } from "@/lib/lotes";

export type ItemOferta = {
  titulo: string;
  detalhe: string;
  valorDe: number;
  // true = sai "de presente" (o valor aparece riscado, sem somar ao preço).
  bonus?: boolean;
};

export type FaseKit = {
  id: "comBonus" | "soKit";
  startsAt: string;
  endsAt: string;
  price: number;
  priceLabel: string;
  parcela12x: string;
  checkoutUrl?: string;
  ctaLabel: string;
  itens: ItemOferta[];
};

const ITEM_MAPA: ItemOferta = {
  titulo: "Mapa das Intercorrências na Harmonização Facial",
  detalhe:
    "4 pranchas para imprimir, tabela de zonas, glossário, card da paciente em PNG e referências",
  valorDe: 109.9,
};

const ITEM_AULA: ItemOferta = {
  titulo: "Aula ao vivo Por Dentro da Face",
  detalhe: "6 de outubro, 20h, online, ~90 minutos, sem gravação",
  valorDe: 67,
  bonus: true,
};

export const FASES: FaseKit[] = [
  {
    id: "comBonus",
    startsAt: "2026-09-25T00:00:00-03:00",
    endsAt: LIVE_DATE_ISO,
    price: 97,
    priceLabel: "R$97",
    parcela12x: "R$10,03",
    checkoutUrl: "https://payment.ticto.app/O74848DBC",
    ctaLabel: "Quero o Mapa + a aula ao vivo",
    itens: [ITEM_MAPA, ITEM_AULA],
  },
  {
    // Preço do kit sozinho ainda não definido (decidir pelos resultados).
    // Enquanto não houver checkoutUrl, o CTA fica bloqueado nesta fase.
    id: "soKit",
    startsAt: LIVE_DATE_ISO,
    endsAt: "2027-12-31T23:59:59-03:00",
    price: 97,
    priceLabel: "R$97",
    parcela12x: "R$10,03",
    ctaLabel: "Quero o Mapa das Intercorrências",
    itens: [ITEM_MAPA],
  },
];

/** Fase ativa para um instante (ms). null fora de todas as fases. */
export function faseKitEm(ts: number): FaseKit | null {
  return (
    FASES.find((f) => ts >= Date.parse(f.startsAt) && ts < Date.parse(f.endsAt)) ??
    null
  );
}

/** Soma dos valores "de" de todos os itens (bônus incluso). */
export function valorDeTotal(fase: FaseKit): number {
  return fase.itens.reduce((s, i) => s + i.valorDe, 0);
}

/** % de desconto do preço sobre o total "de", arredondado. */
export function descontoPct(fase: FaseKit): number {
  const de = valorDeTotal(fase);
  return de > fase.price ? Math.round((1 - fase.price / de) * 100) : 0;
}

/** R$ no padrão brasileiro, sem centavos quando inteiro: 67 → "R$67", 109.9 → "R$109,90". */
export function formatBRL(v: number): string {
  return Number.isInteger(v)
    ? `R$${v}`
    : `R$${v.toFixed(2).replace(".", ",")}`;
}

// O hook client useOfertaKit() vive em lib/useOfertaKit.ts (este arquivo é
// puro, para poder ser importado também por Server Components como o MetaPixel).
