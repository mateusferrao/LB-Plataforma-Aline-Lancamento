import Script from "next/script";

// Pixel oficial da UTMify: captura UTM/sessão pro dashboard de atribuição
// deles. Complementar ao TictoEcho (que cuida da UTM no link de checkout
// da Ticto) — não reescreve links, só reporta pro painel da UTMify.
export function UtmifyPixel() {
  return (
    <Script
      src="https://cdn.utmify.com.br/scripts/utms/latest.js"
      data-utmify-prevent-xcod-sck=""
      data-utmify-prevent-subids=""
      strategy="afterInteractive"
    />
  );
}
