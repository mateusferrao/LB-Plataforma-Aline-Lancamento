"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";

// Topo do card de oferta. Sem valor em R$: o card convida a emitir o ingresso,
// e o preço aparece no ingresso emitido (components/IngressoModal.tsx).
export function OfertaPreco() {
  const { lote, montado } = useLoteAtivo();

  if (montado && !lote) {
    return (
      <>
        <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
          Inscrições encerradas
        </div>
        <div className="my-1.5 font-serif text-[2.4rem] leading-tight">
          Próxima turma em breve
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
        Ao vivo · 6 de outubro · 20h
      </div>
      <div className="my-1.5 font-serif text-[2.4rem] leading-tight">Emita seu ingresso</div>
      <div className="text-[0.95rem] opacity-90">
        O valor aparece assim que você emitir. Leva 10 segundos.
      </div>
    </>
  );
}
