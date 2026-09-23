"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";

// Bloco de preço do card de oferta: preço grande + aviso de urgência.
// Tudo do lote ativo (client). Larguras/alturas reservadas pra não dar layout shift.
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
        Ao vivo
      </div>
      <div className="my-1.5 font-serif text-[2.5rem] leading-none sm:text-[2.7rem]">
        {montado && lote ? `12x de ${lote.parcela12x}` : ""}
      </div>
      {montado && lote && (
        <div className="text-[0.95rem] opacity-90">
          ou {lote.priceLabel} à vista no Pix
        </div>
      )}
      <div className="mt-1 min-h-[1.2em] text-[0.95rem] opacity-90">
        {montado && lote ? "Vagas por tempo limitado" : ""}
      </div>
    </>
  );
}
