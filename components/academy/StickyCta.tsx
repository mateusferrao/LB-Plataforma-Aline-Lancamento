"use client";

import { useEffect, useState } from "react";
import { AteOFim } from "@/components/academy/AteOFim";
import { CtaButton, VerOfertaButton, type Modo } from "@/components/academy/CtaButton";
import { ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Barra fixa só no celular. Sem cronômetro de sessão. Na evergreen (tráfego frio)
// ela leva à oferta, sem preço, até a pessoa chegar no card da oferta; dali em
// diante vira o botão do checkout com o 12x (decisão de 06/10: valor antes do preço).
export function StickyCta({ modo }: { modo: Modo }) {
  const sala = modo === "sala";
  const [viuOferta, setViuOferta] = useState(false);
  useEffect(() => {
    if (sala) return;
    const tick = () => {
      const el = document.getElementById("oferta");
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) setViuOferta(true);
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, [sala]);

  return (
    <div
      data-fixed-bottom-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
    >
      <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase">
        <span className="text-wine-ink">Filgueiras Academy</span>
        <span className="text-fg-soft">
          {sala ? (
            <AteOFim depois="12x ou Pix">{`+3 meses até ${SALA.prazoCurto}`}</AteOFim>
          ) : viuOferta ? (
            `12x de ${ACADEMY.parcela12x}`
          ) : (
            "Garantia Mão Segura"
          )}
        </span>
      </div>
      {sala || viuOferta ? (
        <CtaButton modo={modo} showPrice={sala} className="w-full justify-center">
          Quero entrar
        </CtaButton>
      ) : (
        <VerOfertaButton className="w-full justify-center">Ver o que está incluso</VerOfertaButton>
      )}
    </div>
  );
}
