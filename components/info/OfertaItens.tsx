"use client";

import { FASES, formatBRL } from "@/lib/ofertaKit";
import { useOfertaKit } from "@/lib/useOfertaKit";

// Lista do que a pessoa leva, com o valor "de" riscado ao lado de cada item
// (lib/ofertaKit.ts). Antes de montar, usa a 1ª fase (a vigente na campanha),
// igual ao HTML estático, pra não haver salto nem erro de hidratação.
export function OfertaItens() {
  const { fase, montado } = useOfertaKit();
  const itens = (montado ? fase : FASES[0])?.itens ?? [];

  return (
    <div className="grid content-center">
      {itens.map((item, i) => (
        <div
          key={item.titulo}
          className={`grid grid-cols-[22px_1fr_auto] gap-x-4 py-[19px] ${
            i < itens.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <span
            className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-wine-ink"
            aria-hidden="true"
          />
          <span className="text-[1.1rem] text-fg">
            {item.bonus && (
              <span className="mr-2 inline-block rounded-[2px] bg-wine px-2 py-0.5 align-middle text-[10.5px] font-semibold tracking-[0.16em] text-on-wine uppercase">
                Bônus
              </span>
            )}
            {item.titulo}
            <small className="mt-1 block text-[0.87rem] text-fg-faint">{item.detalhe}</small>
          </span>
          <span className="text-right text-[0.95rem] whitespace-nowrap">
            <s className="text-fg-faint">{formatBRL(item.valorDe)}</s>
            {item.bonus && (
              <span className="mt-0.5 block text-[0.85rem] font-semibold text-wine-ink">
                de presente
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
