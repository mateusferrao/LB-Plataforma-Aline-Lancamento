"use client";

import { abrirIngresso } from "@/lib/ingresso";
import { FASES } from "@/lib/ofertaKit";
import { useOfertaKit } from "@/lib/useOfertaKit";
import { trackCustom, gaEvent } from "@/lib/analytics";

type Props = {
  // Sem children, usa o rótulo da fase ativa (lib/ofertaKit.ts).
  children?: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
};

// CTA da /info, no padrão da /fresh: enquanto a aula de presente faz parte da
// oferta, o botão NÃO vai direto pro checkout — abre o ingresso
// (components/info/IngressoInfo.tsx), que mostra o preço e leva ao checkout.
// Depois da aula (fase "soKit"), sem ingresso, o botão vai direto ao
// checkoutUrl da fase; sem checkoutUrl, abre o WhatsApp da equipe (06/10: antes
// ficava bloqueado em "Em breve", um beco sem saída pro tráfego de depois da aula).
// O repasse de UTM pro checkout é do ticto-echo, montado no layout.
const WHATS_PROTOCOLO =
  "https://wa.me/5531953491799?text=" + encodeURIComponent("Oi! Quero o Protocolo de Resgate Vascular.");

export function CtaButton({ children, variant = "dark", className = "" }: Props) {
  const { fase, montado } = useOfertaKit();
  const bloqueado = montado && !fase?.checkoutUrl;
  // Antes de montar, assume a fase vigente na campanha (ingresso), igual ao HTML estático.
  const emiteIngresso = !montado || fase?.id === "comBonus";

  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5";
  const palette =
    variant === "dark"
      ? "bg-wine text-on-wine hover:bg-wine-hover"
      : "bg-fg text-wine hover:bg-white";

  const label = bloqueado ? "Quero o Protocolo: falar com a equipe" : (children ?? (fase ?? FASES[0]).ctaLabel);
  const href = bloqueado ? WHATS_PROTOCOLO : emiteIngresso ? "#ingresso" : fase?.checkoutUrl;

  return (
    <a
      href={href}
      className={`${base} ${palette} ${className}`}
      target={bloqueado ? "_blank" : undefined}
      rel={bloqueado ? "noopener noreferrer" : undefined}
      aria-haspopup={!bloqueado && emiteIngresso ? "dialog" : undefined}
      onClick={(e) => {
        if (bloqueado) {
          gaEvent("click_whatsapp", { produto: "kit-protocolo" });
          return;
        }
        if (!fase?.checkoutUrl) {
          e.preventDefault();
          return;
        }
        if (emiteIngresso) {
          e.preventDefault();
          abrirIngresso();
          trackCustom("AbrirIngresso", {
            content_name: "Protocolo de Resgate Vascular",
            produto: "kit-protocolo",
          });
          gaEvent("open_ingresso", { produto: "kit-protocolo" });
          return;
        }
        trackCustom("ClickCheckout", {
          content_name: "Protocolo de Resgate Vascular",
          produto: "kit-protocolo",
          fase: fase.id,
          value: fase.price,
          currency: "BRL",
        });
        gaEvent("click_checkout", {
          produto: "kit-protocolo",
          fase: fase.id,
          value: fase.price,
          currency: "BRL",
        });
      }}
      data-checkout={(!bloqueado && !emiteIngresso) || undefined}
    >
      {label}
    </a>
  );
}
