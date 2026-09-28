"use client";

import { FASES, formatBRL, valorDeTotal } from "@/lib/ofertaKit";
import { useOfertaKit } from "@/lib/useOfertaKit";

// Lista do que a pessoa leva, com o valor "de" riscado ao lado de cada item e
// o total "de" embaixo (lib/ofertaKit.ts). O preço final não aparece aqui: com
// a aula de presente, ele só aparece no ingresso emitido. Antes de montar, usa
// a 1ª fase (a vigente na campanha), igual ao HTML estático, pra não haver
// salto nem erro de hidratação.
export function OfertaItens() {
  const { fase, montado } = useOfertaKit();
  const f = (montado ? fase : FASES[0]) ?? null;
  const itens = f?.itens ?? [];

  return (
    <div className="grid content-center">
      {itens.map((item) => (
        <div
          key={item.titulo}
          className="grid grid-cols-[22px_1fr_auto] gap-x-4 border-b border-line py-[19px]"
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
      {f && itens.length > 1 && (
        <div className="grid grid-cols-[22px_1fr_auto] gap-x-4 py-[19px]">
          <span />
          <span className="text-[1.1rem] text-fg">
            Valor total
            <small className="mt-1 block text-[0.87rem] text-fg-faint">
              Seu valor com desconto aparece no ingresso
            </small>
          </span>
          <s className="text-right font-serif text-[1.3rem] whitespace-nowrap text-fg-faint decoration-wine-bright decoration-2">
            {formatBRL(valorDeTotal(f))}
          </s>
        </div>
      )}
    </div>
  );
}
