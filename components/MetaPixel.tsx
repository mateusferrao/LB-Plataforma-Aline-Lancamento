import Script from "next/script";
import { LOTES, loteAtivoEm } from "@/lib/lotes";
import { FASES, faseKitEm } from "@/lib/ofertaKit";
import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";
import { ACADEMY, ANATOMIA, MENTORIA } from "@/lib/ofertaAcademy";

// Preço do ViewContent = lote ativo no BUILD (é <Script>, não reativo). Calculado
// no escopo do módulo (uma vez, no build) para não chamar Date.now() no render.
const VIEW_VALUE = (loteAtivoEm(Date.now()) ?? LOTES[0]).price;
// Mesma ideia para a /info (Protocolo de Resgate Vascular, lib/ofertaKit.ts):
// o script é um só no layout, então escolhe o conteúdo pelo pathname.
const KIT_VIEW_VALUE = (faseKitEm(Date.now()) ?? FASES[0]).price;

// ViewContent por página (06/10): antes, toda página fora da /alunas e da /info
// mandava "Ingresso Por Dentro da Face" (R$67), inclusive a Academy, que recebe os
// anúncios. Agora cada página manda o próprio produto e valor; os obrigados não
// mandam ViewContent (quem chega ali já comprou). Ordem: o mais específico primeiro.
// O InitiateCheckout e o Purchase saem do checkout da Ticto (Tictools → Pixel).
const fim = String.raw`(\.html)?\/?$`;
const VIEW_RULES: { re: string; vc: Record<string, string | number> | null }[] = [
  { re: String.raw`\/obrigado` + fim, vc: null },
  { re: String.raw`^\/academy\/mentoria\/upsell` + fim, vc: { content_name: MENTORIA.nome, content_category: "upsell", value: MENTORIA.preco, currency: "BRL" } },
  { re: String.raw`^\/academy\/anatomia\/upgrade` + fim, vc: { content_name: "Upgrade Anatomia para a Filgueiras Academy", content_category: "upsell", value: ANATOMIA.upgradePreco, currency: "BRL" } },
  { re: String.raw`^\/academy\/anatomia` + fim, vc: { content_name: ANATOMIA.nome, content_category: "curso", value: ANATOMIA.preco, currency: "BRL" } },
  { re: String.raw`^\/academy(\/sala)?` + fim, vc: { content_name: ACADEMY.nome, content_category: "curso", value: ACADEMY.precoCheio, currency: "BRL" } },
  { re: String.raw`^\/alunas` + fim, vc: { content_name: OFERTA_ALUNAS.contentName, content_category: "live", value: OFERTA_ALUNAS.price, currency: "BRL" } },
  { re: String.raw`^\/info` + fim, vc: { content_name: "Protocolo de Resgate Vascular", content_category: "kit", value: KIT_VIEW_VALUE, currency: "BRL" } },
];
const VIEW_DEFAULT = { content_name: "Ingresso Por Dentro da Face", content_category: "live", value: VIEW_VALUE, currency: "BRL" };

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
          (function(){
            var regras = ${JSON.stringify(VIEW_RULES)};
            var vc = ${JSON.stringify(VIEW_DEFAULT)};
            for (var i = 0; i < regras.length; i++) {
              if (new RegExp(regras[i].re).test(location.pathname)) { vc = regras[i].vc; break; }
            }
            if (vc) fbq('track', 'ViewContent', vc);
          })();
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
