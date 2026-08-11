"use client";

import { useEffect, useState } from "react";
import { TICTO_CHECKOUT_URL } from "@/lib/checkout";
import { trackCustom, gaEvent } from "@/lib/analytics";
import { buildCheckoutUrl } from "@/lib/tracking";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
};

export function CtaButton({ children, variant = "dark", className = "" }: Props) {
  // Renderiza com a URL base (igual ao servidor) e, na hidratação, acrescenta os
  // UTMs/click-ids capturados — sem quebrar abrir-em-nova-aba nem causar mismatch.
  const [href, setHref] = useState(TICTO_CHECKOUT_URL);
  useEffect(() => {
    setHref(buildCheckoutUrl(TICTO_CHECKOUT_URL));
  }, []);

  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-transform duration-150 ease-out hover:-translate-y-0.5";
  const palette =
    variant === "dark"
      ? "bg-ink text-paper hover:bg-accent-deep"
      : "bg-on-accent text-accent-deep hover:bg-white";

  return (
    <a
      href={href}
      className={`${base} ${palette} ${className}`}
      onClick={() => {
        // Sinal de intenção (topo de funil). Custom pra não colidir com o
        // InitiateCheckout que o Ticto dispara via CAPI.
        trackCustom("ClickCheckout", {
          content_name: "Ingresso Por Dentro da Face",
          value: 67,
          currency: "BRL",
        });
        gaEvent("click_checkout", { value: 67, currency: "BRL" });
      }}
      data-checkout
    >
      {children}
    </a>
  );
}
