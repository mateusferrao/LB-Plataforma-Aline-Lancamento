"use client";

import { useEffect, useState } from "react";
import { VagasBadge } from "@/components/VagasBadge";
import { CtaButton } from "@/components/info/CtaButton";
import { SoComBonus } from "@/components/info/SoComBonus";

// CTA fixo da /info, no padrão da /fresh (components/fresh/StickyCta.tsx): sem
// preço e sem cronômetro de reserva (a reserva aparece dentro do ingresso
// emitido). A urgência é só a real: a data da aula de presente.
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
          <SoComBonus senao={<VagasBadge>Garantia de 7 dias</VagasBadge>}>
            <VagasBadge>Aula de presente até 06/10</VagasBadge>
          </SoComBonus>
          <span className="text-[11px] font-semibold tracking-[0.12em] text-fg-soft uppercase">
            Protocolo na hora
          </span>
        </div>
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
          <div className="flex items-center gap-7">
            <SoComBonus>
              <VagasBadge plain>Aula de presente até 06/10</VagasBadge>
            </SoComBonus>
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase">
              Protocolo de Resgate Vascular · acesso imediato
            </span>
          </div>
          <CtaButton className="shrink-0" />
        </div>
      </div>
    </>
  );
}
