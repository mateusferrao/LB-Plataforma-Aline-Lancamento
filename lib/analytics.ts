// Wrapper fino sobre o Meta Pixel. O script só é injetado (ver components/MetaPixel.tsx)
// quando NEXT_PUBLIC_META_PIXEL_ID está definido, então `track` é sempre seguro de chamar —
// vira no-op silencioso enquanto o pixel real não está configurado.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}
