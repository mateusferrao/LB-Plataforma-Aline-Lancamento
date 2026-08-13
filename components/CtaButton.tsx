"use client";

import { TICTO_CHECKOUT_URL } from "@/lib/checkout";
import { trackCustom, gaEvent } from "@/lib/analytics";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
};

// O repasse de UTM/params para o checkout é feito pelo script oficial da Ticto
// (ticto-echo), montado no layout. Aqui só apontamos pra URL base e disparamos o
// evento de intenção (ClickCheckout) — custom, pra não colidir com o InitiateCheckout
// que o Ticto dispara via CAPI.
export function CtaButton({ children, variant = "dark", className = "" }: Props) {
  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5";
  // dark = CTA marsala padrão (único elemento colorido da página).
  // accent = botão claro/creme, usado DENTRO do card de oferta (fundo marsala).
  const palette =
    variant === "dark"
      ? "bg-wine text-on-wine hover:bg-wine-hover"
      : "bg-fg text-wine hover:bg-white";

  return (
    <a
      href={TICTO_CHECKOUT_URL}
      className={`${base} ${palette} ${className}`}
      onClick={() => {
        trackCustom("ClickCheckout", {
          content_name: "Ingresso Por Dentro da Face",
          value: 77,
          currency: "BRL",
        });
        gaEvent("click_checkout", { value: 77, currency: "BRL" });
      }}
      data-checkout
    >
      {children}
    </a>
  );
}
