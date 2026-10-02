"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";

// Topo do card de oferta da /fresh: preço à vista em destaque (o "de" riscado
// é o AULA_VALOR_DE do lote), parcela como alternativa. Tudo do lote ativo
// (client); alturas reservadas pra não dar layout shift.
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

  const temDe = !!(lote?.precoDe && lote.precoDeLabel && lote.precoDe > lote.price);

  return (
    <>
      <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
        Ao vivo · 6 de outubro · 20h
      </div>
      <div className="my-1.5 flex min-h-[3.2rem] items-baseline justify-center gap-3">
        {montado && lote && temDe && (
          <s className="font-serif text-[1.25rem] opacity-70">de {lote.precoDeLabel}</s>
        )}
        <span className="font-serif text-[2.9rem] leading-none sm:text-[3.1rem]">
          {montado && lote ? lote.priceLabel : ""}
        </span>
      </div>
      <div className="min-h-[1.4em] text-[0.95rem] opacity-90">
        {montado && lote ? `à vista no Pix · ou 12x de ${lote.parcela12x} no cartão` : ""}
      </div>
    </>
  );
}
