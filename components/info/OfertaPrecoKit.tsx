"use client";

import { useOfertaKit } from "@/lib/useOfertaKit";

// Topo do card de oferta da /info (par do components/lp2/OfertaPreco). Com a
// aula de presente, sem valor em R$: o card nomeia o Protocolo como produto e
// avisa que o valor aparece ao emitir o ingresso da aula (onde fica a ancoragem). Depois da aula (sem ingresso), mostra o
// preço da fase; sem checkout, "em breve".
export function OfertaPrecoKit() {
  const { fase, montado } = useOfertaKit();

  if (montado && !fase?.checkoutUrl) {
    return (
      <>
        <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
          Protocolo de Resgate Vascular
        </div>
        <div className="my-1.5 font-serif text-[1.9rem] leading-tight sm:text-[2.1rem]">Nova oferta em breve</div>
      </>
    );
  }

  if (montado && fase && fase.id !== "comBonus") {
    return (
      <>
        <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
          Protocolo de Resgate Vascular
        </div>
        <div className="my-1.5 font-serif text-[2.5rem] leading-none sm:text-[2.7rem]">
          12x de {fase.parcela12x}
        </div>
        <div className="text-[0.95rem] opacity-90">ou {fase.priceLabel} à vista no Pix</div>
      </>
    );
  }

  return (
    <>
      <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
        + aula ao vivo de presente
      </div>
      <div className="my-1.5 font-serif text-[1.9rem] leading-tight sm:text-[2.1rem]">
        Protocolo de Resgate Vascular
      </div>
      <div className="text-[0.95rem] opacity-90">
        O valor aparece quando você emite o ingresso da aula. Leva 10 segundos.
      </div>
    </>
  );
}
