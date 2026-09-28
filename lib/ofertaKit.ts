// ============================================================================
//  OFERTA DO "PROTOCOLO DE RESGATE VASCULAR" (/info) — FONTE ÚNICA DA VERDADE
//  (substituiu o kit "Mapa das Intercorrências" em 28/09/2026)
//  Para mudar preço, parcela, checkout ou bônus da /info, edite SÓ o array
//  FASES abaixo. Mesma lógica de lib/lotes.ts (datas no fuso de Brasília,
//  commit → deploy sozinho).
//
//  Regras:
//   - Fase "comBonus": kit + aula ao vivo de presente, até a chegada da aula
//     (LIVE_DATE_ISO). A aula não tem gravação, então o bônus acaba com ela.
//     O CTA abre o ingresso (padrão da /fresh): o preço só aparece no
//     ingresso emitido, e o botão dele leva ao checkoutUrl.
//   - Fase "soKit": depois da aula, só o kit. Sem aula não há ingresso: o CTA
//     vai direto ao checkout. Sem `checkoutUrl` o botão fica bloqueado
//     ("Em breve") — preencha quando existir o checkout só do kit.
//   - Sem "de/por" do próprio Protocolo (padrão da /fresh): o único valor
//     riscado é o do ingresso da aula (`valorDe` do item bônus), que é o preço
//     real dela vendida sozinha (R$67).
//   - O preço do kit + aula nunca pode ficar abaixo de R$96,90 (aula R$67 +
//     bump R$29,90): quem já comprou não pode ter pago mais caro.
// ============================================================================

import { LIVE_DATE_ISO } from "@/lib/lotes";

// Entrega: imediata, pelo WhatsApp, logo após a confirmação do pagamento.

export type ItemOferta = {
  titulo: string;
  detalhe: string;
  // Só no bônus: valor real dele vendido sozinho, mostrado riscado ("de presente").
  valorDe?: number;
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

const ITEM_PROTOCOLO: ItemOferta = {
  titulo: "Protocolo de Resgate Vascular: oclusão e necrose",
  detalhe:
    "Protocolo em PDF, prancha de parede, ficha hora a hora e 2 cards para a paciente",
};

export const ITEM_AULA: ItemOferta = {
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
    checkoutUrl: "https://payment.ticto.app/O841FD9F7",
    ctaLabel: "Emitir meu ingresso",
    itens: [ITEM_PROTOCOLO, ITEM_AULA],
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
    ctaLabel: "Quero o Protocolo de Resgate Vascular",
    itens: [ITEM_PROTOCOLO],
  },
];

/** Fase ativa para um instante (ms). null fora de todas as fases. */
export function faseKitEm(ts: number): FaseKit | null {
  return (
    FASES.find((f) => ts >= Date.parse(f.startsAt) && ts < Date.parse(f.endsAt)) ??
    null
  );
}

/** R$ no padrão brasileiro, sem centavos quando inteiro: 67 → "R$67", 109.9 → "R$109,90". */
export function formatBRL(v: number): string {
  return Number.isInteger(v)
    ? `R$${v}`
    : `R$${v.toFixed(2).replace(".", ",")}`;
}

// O hook client useOfertaKit() vive em lib/useOfertaKit.ts (este arquivo é
// puro, para poder ser importado também por Server Components como o MetaPixel).
