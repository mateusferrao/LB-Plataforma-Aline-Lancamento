// URL do checkout Ticto do ingresso (R$77). Vem de NEXT_PUBLIC_TICTO_CHECKOUT_URL
// (.env.production); se ausente, cai no placeholder #checkout-pendente.
export const TICTO_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_TICTO_CHECKOUT_URL ?? "#checkout-pendente";

export const isCheckoutConfigured = TICTO_CHECKOUT_URL !== "#checkout-pendente";

export const LIVE_DATE_ISO = "2026-09-24T20:00:00-03:00";
