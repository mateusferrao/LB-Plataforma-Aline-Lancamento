import Script from "next/script";

// GA4 (analytics de comportamento). Mesmo padrão do MetaPixel: sem NEXT_PUBLIC_GA4_ID
// configurado, não renderiza nada — fica "desligado" até o cliente criar a propriedade
// e informar o Measurement ID (G-XXXXXXX).
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
