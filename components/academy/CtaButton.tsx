"use client";

import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { ACADEMY, SALA } from "@/lib/ofertaAcademy";
import { gaEvent, trackCustom } from "@/lib/analytics";

export type Modo = "sala" | "evergreen";

type Props = {
  modo: Modo;
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
  showPrice?: boolean;
};

// CTA das páginas da Academy: direto ao checkout da Ticto (o ticto-echo do
// layout repassa as UTMs). Um preço só (R$1.797). A sala usa a oferta própria
// (contagem dos 10 primeiros) até o fim dos bônus e, depois, a da evergreen.
// Sem checkout configurado → "Em breve".
export function CtaButton({ modo, children, variant = "dark", className = "", showPrice = false }: Props) {
  const [fimBonus, setFimBonus] = useState(false);
  useEffect(() => {
    if (modo !== "sala") return;
    const tick = () => setFimBonus(agora() >= Date.parse(SALA.endsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [modo]);

  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5";
  const palette =
    variant === "dark"
      ? "bg-wine text-on-wine hover:bg-wine-hover"
      : "bg-fg text-wine hover:bg-white";

  const url = modo === "sala" && !fimBonus ? SALA.checkoutUrl : ACADEMY.checkoutUrl;
  const preco = modo === "sala" ? SALA.preco : ACADEMY.precoCheio;
  const precoLabel = modo === "sala" ? SALA.precoLabel : ACADEMY.precoCheioLabel;
  const contentName = modo === "sala" ? SALA.contentName : ACADEMY.contentName;

  if (!url) {
    return (
      <span aria-disabled="true" className={`${base} cursor-not-allowed opacity-60 ${palette} ${className}`}>
        Em breve
      </span>
    );
  }

  return (
    <a
      href={url}
      data-checkout
      className={`${base} ${palette} ${className}`}
      onClick={() => {
        trackCustom("ClickCheckout", { content_name: contentName, value: preco, currency: "BRL" });
        gaEvent("click_checkout", { value: preco, currency: "BRL", produto: `academy-${modo}` });
      }}
    >
      {children}
      {showPrice && <span className="font-serif text-[1.16rem]">· {precoLabel}</span>}
    </a>
  );
}
