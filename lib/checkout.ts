// URL do checkout Ticto do ingresso (R$67). Ainda não temos acesso à conta Ticto —
// enquanto isso, o CTA aponta para este placeholder, sinalizado por data-checkout-placeholder
// no componente CtaButton para facilitar QA visual antes de trocar pela URL real.
export const TICTO_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_TICTO_CHECKOUT_URL ?? "#checkout-pendente";

export const isCheckoutConfigured = TICTO_CHECKOUT_URL !== "#checkout-pendente";

export const LIVE_DATE_ISO = "2026-09-24T20:00:00-03:00";
