"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { ProvaSocialViva } from "@/components/ProvaSocialViva";
import { ReservaTimer } from "@/components/ReservaTimer";
import { VagasBadge } from "@/components/VagasBadge";

function Divisor() {
  return <span className="h-4 w-px bg-line" aria-hidden="true" />;
}

// CTA fixo com urgência (vaga reservada + poucas vagas).
// - Mobile: sempre visível, layout enxuto (sem "pessoas vendo" — não cabe).
// - Desktop: barra discreta que aparece só após rolar além do Hero e some perto
//   do rodapé; traz prova social + poucas vagas + reserva + CTA, centralizados.
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-2.5 backdrop-blur-sm sm:hidden">
        <div className="mb-2 flex items-center justify-between gap-2">
          <VagasBadge>Poucas vagas</VagasBadge>
          <ReservaTimer />
        </div>
        <CtaButton className="w-full justify-center">
          Quero minha vaga <span className="font-serif text-[1.16rem]">· R$77</span>
        </CtaButton>
      </div>

      {/* Desktop — aparece ao rolar além do Hero, some perto do rodapé */}
      <div
        aria-hidden={!mostrarDesktop}
        className={`fixed inset-x-0 bottom-0 z-40 hidden border-t border-line bg-paper/95 backdrop-blur-sm transition-all duration-300 ease-out sm:block ${
          mostrarDesktop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1060px] items-center justify-center gap-7 px-[30px] py-3">
          <div className="flex items-center gap-4">
            <ProvaSocialViva />
            <Divisor />
            <VagasBadge>Poucas vagas</VagasBadge>
            <Divisor />
            <ReservaTimer />
          </div>
          <CtaButton className="shrink-0">
            Quero minha vaga <span className="font-serif text-[1.16rem]">· R$77</span>
          </CtaButton>
        </div>
      </div>
    </>
  );
}
