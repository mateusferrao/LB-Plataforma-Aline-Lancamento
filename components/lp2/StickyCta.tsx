"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/lp2/CtaButton";
import { ReservaTimer } from "@/components/ReservaTimer";
import { VagasBadge } from "@/components/VagasBadge";

// CTA fixo com urgência (vaga reservada + poucas vagas).
// - Mobile: sempre visível, layout enxuto.
// - Desktop: barra discreta que aparece só após rolar além do Hero e some perto
//   do rodapé; traz poucas vagas + reserva + CTA num bloco centralizado e arejado.
//   (A prova social "X pessoas vendo" fica no card de oferta, pra não poluir aqui.)
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
      {/* Mobile — sempre visível */}
      <div
        data-fixed-bottom-bar="true"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
      >
        <div className="mb-2 flex items-center justify-between gap-2">
          <VagasBadge>Poucas vagas</VagasBadge>
          <ReservaTimer />
        </div>
        <CtaButton className="w-full justify-center">
          Quero minha vaga
        </CtaButton>
      </div>

      {/* Desktop — aparece ao rolar além do Hero, some perto do rodapé */}
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
            <ReservaTimer />
          </div>
          <CtaButton className="shrink-0">
            Quero minha vaga
          </CtaButton>
        </div>
      </div>
    </>
  );
}
