// Wrapper fino sobre o Meta Pixel (fbq) e o GA4 (gtag). Ambos são no-op silencioso
// enquanto o script correspondente não estiver carregado (ID não configurado),
// então é sempre seguro chamar.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

// Evento custom do Meta (não padrão). Usado no clique do CTA (ClickCheckout) para
// não colidir com o InitiateCheckout que o Ticto dispara via CAPI.
export function trackCustom(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("trackCustom", event, params);
}

// Evento do GA4 (gtag).
export function gaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
