import Script from "next/script";
import { LOTES, loteAtivoEm } from "@/lib/lotes";
import { FASES, faseKitEm } from "@/lib/ofertaKit";

// Preço do ViewContent = lote ativo no BUILD (é <Script>, não reativo). Calculado
// no escopo do módulo (uma vez, no build) para não chamar Date.now() no render.
const VIEW_VALUE = (loteAtivoEm(Date.now()) ?? LOTES[0]).price;
// Mesma ideia para a /info (kit Mapa das Intercorrências, lib/ofertaKit.ts):
// o script é um só no layout, então escolhe o conteúdo pelo pathname.
const KIT_VIEW_VALUE = (faseKitEm(Date.now()) ?? FASES[0]).price;

// Semeia o pixel do Meta (plano de lançamento, "estratégia de tráfego": cada evento
// treina a conta). Sem NEXT_PUBLIC_META_PIXEL_ID configurado, não renderiza nada.
// A landing dispara topo de funil (PageView + ViewContent); o Ticto dispara
// InitiateCheckout + Purchase via CAPI. O clique no CTA dispara o custom ClickCheckout.
export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
          fbq('track', 'ViewContent', /\\/info(\\.html)?(\\/|$)/.test(location.pathname) ? {
            content_name: 'Mapa das Intercorrências',
            content_category: 'kit',
            value: ${KIT_VIEW_VALUE},
            currency: 'BRL'
          } : {
            content_name: 'Ingresso Por Dentro da Face',
            content_category: 'live',
            value: ${VIEW_VALUE},
            currency: 'BRL'
          });
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
