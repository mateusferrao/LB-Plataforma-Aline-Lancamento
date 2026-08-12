import Script from "next/script";

// Script oficial da Ticto (ticto-echo): captura os parâmetros da URL (UTM/src/sck/fbclid)
// e os repassa para os links de checkout da Ticto (reescreve o href e intercepta o clique).
// Substitui o repasse manual que fazíamos em lib/tracking.ts.
export function TictoEcho() {
  return (
    <Script src="https://echo.ticto.app/ticto-echo.min.js" strategy="afterInteractive" />
  );
}
