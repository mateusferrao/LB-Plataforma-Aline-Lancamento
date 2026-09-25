"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/info/CtaButton";
import { useOfertaKit } from "@/lib/useOfertaKit";

// CTA fixo da /info. Sem timer de reserva nem "poucas vagas": o kit é digital
// e a única urgência real é a data da aula de bônus.
// - Mobile: sempre visível.
// - Desktop: aparece depois do Hero e some perto do rodapé.
export function StickyCta() {
  const [mostrarDesktop, setMostrarDesktop] = useState(false);
  const { fase, montado } = useOfertaKit();

  useEffect(() => {
    const onScroll = () => {
      const passouHero = window.scrollY > 640;
      const pertoDoFim =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 160;
      setMostrarDesktop(passouHero && !pertoDoFim);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const resumo =
    montado && fase?.checkoutUrl
      ? fase.id === "comBonus"
        ? `${fase.priceLabel} · aula ao vivo de presente até 06/10`
        : `${fase.priceLabel} ou 12x de ${fase.parcela12x}`
      : "";

  return (
    <>
      <div
        data-fixed-bottom-bar="true"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
      >
        <p className="mb-2 min-h-[1.4em] text-center text-[12.5px] tracking-[0.02em] text-fg-soft">
          {resumo}
        </p>
        <CtaButton className="w-full justify-center" />
      </div>

      <div
        data-fixed-bottom-bar="true"
        aria-hidden={!mostrarDesktop}
        className={`fixed inset-x-0 bottom-0 z-40 hidden border-t border-line bg-bg/95 backdrop-blur-sm transition-all duration-300 ease-out sm:block ${
          mostrarDesktop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1060px] items-center justify-between gap-8 px-10 py-[18px] text-fg-soft">
          <span className="text-[0.98rem]">
            <span className="font-serif text-fg">Mapa das Intercorrências</span>
            {resumo && <span className="text-fg-faint"> · {resumo}</span>}
          </span>
          <CtaButton className="shrink-0" />
        </div>
      </div>
    </>
  );
}
