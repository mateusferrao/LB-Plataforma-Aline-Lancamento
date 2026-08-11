// Captura de parâmetros de rastreamento (UTM/click-id) e repasse para o checkout
// do Ticto. Sem esse repasse, a atribuição da venda ao anúncio quebra no pulo de
// domínio (LP -> Ticto). Ver docs/rastreamento-utm.md.

const PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src", // parâmetro próprio do Ticto
  "sck", // parâmetro próprio do Ticto
  "fbclid",
  "gclid",
  "ttclid",
];

const STORAGE_KEY = "lp_tracking_params";

function getStored(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

// Guarda na sessão os parâmetros presentes na URL de entrada (primeiro toque vence).
export function captureParams(): void {
  if (typeof window === "undefined") return;
  try {
    const url = new URLSearchParams(window.location.search);
    const stored = getStored();
    let changed = false;
    for (const key of PARAM_KEYS) {
      const value = url.get(key);
      if (value && !stored[key]) {
        stored[key] = value;
        changed = true;
      }
    }
    if (changed) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    /* noop */
  }
}

// Monta a URL final do checkout mesclando os parâmetros guardados + os da URL atual.
// Não mexe em placeholders (ex.: "#checkout-pendente").
export function buildCheckoutUrl(base: string): string {
  if (typeof window === "undefined") return base;
  if (!base || base.startsWith("#")) return base;
  try {
    const params: Record<string, string> = { ...getStored() };
    const url = new URLSearchParams(window.location.search);
    for (const key of PARAM_KEYS) {
      const value = url.get(key);
      if (value && !params[key]) params[key] = value;
    }
    const keys = Object.keys(params);
    if (keys.length === 0) return base;
    const finalUrl = new URL(base, window.location.origin);
    for (const key of keys) finalUrl.searchParams.set(key, params[key]);
    return finalUrl.toString();
  } catch {
    return base;
  }
}
