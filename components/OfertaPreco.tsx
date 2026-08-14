"use client";

import { TOTAL_LOTES, LOTE_TETO } from "@/lib/lotes";
import { useLoteAtivo } from "@/lib/useLoteAtivo";

// Bloco de preço do card de oferta: rótulo do lote + preço grande + próximo preço.
// Tudo do lote ativo (client). Larguras/alturas reservadas pra não dar layout shift.
export function OfertaPreco() {
  const { lote, proximo, montado } = useLoteAtivo();

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
        {montado && lote ? `Lote ${lote.n} · ao vivo` : "Ao vivo"}
      </div>
      <div className="my-1.5 font-serif text-[3.5rem] leading-none sm:text-[3.7rem]">
        {montado && lote ? lote.priceLabel : " "}
      </div>
      <div className="min-h-[1.2em] text-[0.95rem] opacity-90">
        {montado && lote
          ? proximo
            ? `Sobe até ${LOTE_TETO.priceLabel}`
            : "Último lote"
          : ""}
      </div>
    </>
  );
}
