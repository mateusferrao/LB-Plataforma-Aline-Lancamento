"use client";

import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";
import { gaEvent, trackCustom } from "@/lib/analytics";

const INSTAGRAM_URL = "https://www.instagram.com/draaline_filgueiras";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
  showPrice?: boolean;
};

// CTA da /alunas: público quente, então vai DIRETO ao checkout da oferta de
// ex-alunas (sem ingresso emitido). O repasse de UTM é do ticto-echo (layout).
// Sem checkoutUrl → "Em breve" (bloqueado). Depois da aula → Instagram.
export function CtaButton({ children, variant = "dark", className = "", showPrice = false }: Props) {
  const [encerrado, setEncerrado] = useState(false);
  useEffect(() => {
    const tick = () => setEncerrado(agora() >= Date.parse(OFERTA_ALUNAS.endsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5";
  const palette =
    variant === "dark"
      ? "bg-wine text-on-wine hover:bg-wine-hover"
      : "bg-fg text-wine hover:bg-white";

  if (encerrado) {
    return (
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${palette} ${className}`}
        onClick={() => {
          trackCustom("ClickProximaTurma", { content_name: "Proxima turma (Instagram)" });
          gaEvent("click_proxima_turma", {});
        }}
      >
        Quero saber da próxima turma
      </a>
    );
  }

  if (!OFERTA_ALUNAS.checkoutUrl) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed opacity-60 ${palette} ${className}`}
      >
        Em breve
      </span>
    );
  }

  return (
    <a
      href={OFERTA_ALUNAS.checkoutUrl}
      data-checkout
      className={`${base} ${palette} ${className}`}
      onClick={() => {
        trackCustom("ClickCheckout", {
          content_name: OFERTA_ALUNAS.contentName,
          value: OFERTA_ALUNAS.price,
          currency: "BRL",
        });
        gaEvent("click_checkout", { value: OFERTA_ALUNAS.price, currency: "BRL", produto: "alunas" });
      }}
    >
      {children}
      {showPrice && <span className="font-serif text-[1.16rem]">· {OFERTA_ALUNAS.priceLabel}</span>}
    </a>
  );
}
