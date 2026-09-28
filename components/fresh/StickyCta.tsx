"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/lp2/CtaButton";
import { VagasBadge } from "@/components/VagasBadge";

// CTA fixo da /fresh. Diferente da /lp2, SEM o cronômetro de reserva: aqui a
// urgência é só a real (poucas vagas + a data da aula). A reserva aparece
// dentro do ingresso emitido (components/lp2/IngressoModal.tsx).
// - Mobile: sempre visível.
// - Desktop: aparece depois do Hero e some perto do rodapé.
export function StickyCta() {
  const [mostrarDesktop, setMostrarDesktop] = useState(false);

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

  return (
    <>
      <div
        data-fixed-bottom-bar="true"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
      >
        <div className="mb-2 flex items-center justify-between gap-2">
          <VagasBadge>Poucas vagas</VagasBadge>
          <span className="text-[11px] font-semibold tracking-[0.12em] text-fg-soft uppercase">
            06/10 · 20h · ao vivo
          </span>
        </div>
        <CtaButton className="w-full justify-center">
          Emitir meu ingresso
        </CtaButton>
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
          <div className="flex items-center gap-7">
            <VagasBadge plain>Poucas vagas</VagasBadge>
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase">
              6 de outubro · 20h · ao vivo
            </span>
          </div>
          <CtaButton className="shrink-0">
            Emitir meu ingresso
          </CtaButton>
        </div>
      </div>
    </>
  );
}
