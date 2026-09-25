"use client";

import { useOfertaKit } from "@/lib/useOfertaKit";
import { trackCustom, gaEvent } from "@/lib/analytics";

type Props = {
  // Sem children, usa o rótulo da fase ativa (lib/ofertaKit.ts).
  children?: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
};

// CTA da /info. Mesmo visual do components/CtaButton.tsx, sem gate de VSL (a
// /info não tem vídeo). O href vem da fase ativa do kit; o repasse de UTM pro
// checkout é do ticto-echo, montado no layout. Sem checkoutUrl na fase (ex.:
// "soKit" antes de existir o checkout só do kit), o botão fica bloqueado.
export function CtaButton({ children, variant = "dark", className = "" }: Props) {
  const { fase, montado } = useOfertaKit();
  const bloqueado = montado && !fase?.checkoutUrl;

  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5";
  const palette =
    variant === "dark"
      ? "bg-wine text-on-wine hover:bg-wine-hover"
      : "bg-fg text-wine hover:bg-white";

  const label = bloqueado ? "Em breve" : (children ?? fase?.ctaLabel ?? "Quero o Mapa + a aula ao vivo");

  return (
    <a
      href={bloqueado ? undefined : (fase?.checkoutUrl ?? "#")}
      className={`${base} ${palette} ${
        bloqueado ? "cursor-not-allowed opacity-55 hover:translate-y-0" : ""
      } ${className}`}
      aria-disabled={bloqueado || undefined}
      onClick={(e) => {
        if (!fase?.checkoutUrl) {
          e.preventDefault();
          return;
        }
        trackCustom("ClickCheckout", {
          content_name: "Mapa das Intercorrências",
          produto: "kit-mapa",
          fase: fase.id,
          value: fase.price,
          currency: "BRL",
        });
        gaEvent("click_checkout", {
          produto: "kit-mapa",
          fase: fase.id,
          value: fase.price,
          currency: "BRL",
        });
      }}
      data-checkout={!bloqueado || undefined}
    >
      {label}
    </a>
  );
}
