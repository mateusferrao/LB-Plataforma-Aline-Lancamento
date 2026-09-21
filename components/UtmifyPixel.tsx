import Script from "next/script";

// Pixel oficial da UTMify: captura UTM/sessão pro dashboard de atribuição
// deles. Complementar ao TictoEcho (que cuida da UTM no link de checkout
// da Ticto) — não reescreve links, só reporta pro painel da UTMify.
export function UtmifyPixel() {
  const pixelId = process.env.NEXT_PUBLIC_UTMIFY_PIXEL_ID;

  return (
    <>
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        strategy="afterInteractive"
      />
      {pixelId && (
        <>
          <Script id="utmify-pixel-init" strategy="afterInteractive">
            {`window.pixelId = "${pixelId}";`}
          </Script>
          <Script
            src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}
