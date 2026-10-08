"use client";

import { useEffect, useState } from "react";
import { AteOFim } from "@/components/academy/AteOFim";
import { VerOfertaButton } from "@/components/academy/CtaButton";
import { CtaEx } from "@/components/academy/exalunas/CtaEx";
import { EXALUNAS } from "@/lib/ofertaAcademy";

// Barra fixa só no celular, como a da /academy: leva à oferta, sem preço, até a
// pessoa chegar no card; dali em diante vira o botão do checkout com o 12x.
export function StickyCtaEx() {
  const [viuOferta, setViuOferta] = useState(false);
  useEffect(() => {
    const tick = () => {
      const el = document.getElementById("oferta");
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) setViuOferta(true);
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <div
      data-fixed-bottom-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
    >
      <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase">
        <span className="text-wine-ink">Fresh Frozen de presente</span>
        <span className="text-fg-soft">
          {viuOferta ? (
            `12x de ${EXALUNAS.parcela12x}`
          ) : (
            <AteOFim fim={EXALUNAS.endsAt} depois="Garantia Mão Segura">
              {`Até ${EXALUNAS.prazoDia}`}
            </AteOFim>
          )}
        </span>
      </div>
      {viuOferta ? (
        <CtaEx className="w-full">Quero voltar com o presente</CtaEx>
      ) : (
        <VerOfertaButton produto="academy-exalunas" className="w-full justify-center">
          Ver o presente e os bônus
        </VerOfertaButton>
      )}
    </div>
  );
}
