"use client";

import { formatBRL, ITEM_AULA } from "@/lib/ofertaKit";
import { useOfertaKit } from "@/lib/useOfertaKit";
import { ANCORA_SERINGA } from "@/components/info/ancora";

// Comparativo do ingresso emitido da /info (par do components/fresh/AncoraIngresso).
// O riscado fica só na aula, pelo preço real dela vendida sozinha; o Protocolo
// não tem "de/por". O preço sai da fase ativa (lib/ofertaKit.ts).
export function AncoraIngresso() {
  const { fase, montado } = useOfertaKit();
  if (!montado || fase?.id !== "comBonus" || !ITEM_AULA.valorDe) return null;

  const aula = formatBRL(ITEM_AULA.valorDe);

  return (
    <div className="text-left">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[0.92rem] leading-snug text-fg-soft">Protocolo de Resgate Vascular</div>
          <div className="mt-0.5 text-[0.78rem] text-fg-faint">
            PDF, prancha, ficha e 2 cards · na hora
          </div>
        </div>
        <span className="shrink-0 text-[0.85rem] font-semibold text-fg-soft">incluso</span>
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <div className="text-[0.92rem] leading-snug text-fg-soft">Aula ao vivo Por Dentro da Face</div>
          <div className="mt-0.5 text-[0.78rem] text-fg-faint">
            valor do ingresso vendido sozinho
          </div>
        </div>
        <div className="shrink-0 text-right">
          <s className="font-serif text-[1.3rem] leading-none whitespace-nowrap text-fg-faint decoration-wine-bright decoration-2">
            {aula}
          </s>
          <div className="mt-1 text-[0.78rem] font-semibold text-wine-ink">de presente</div>
        </div>
      </div>

      <div className="my-3.5 border-t border-dashed border-line" aria-hidden="true" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[1rem] font-semibold text-fg">Você leva os dois por</div>
          <div className="mt-0.5 text-[0.82rem] text-fg-soft">
            ou 12x de {fase.parcela12x} no cartão
          </div>
        </div>
        <div className="shrink-0 font-serif text-[2rem] leading-none font-semibold whitespace-nowrap text-fg">
          {fase.priceLabel}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <span className="rounded-full bg-wine px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-on-wine uppercase">
          Aula de {aula} de presente · só até 06/10
        </span>
      </div>
      <p className="mt-3 text-center font-serif text-[1.02rem] leading-snug text-fg italic">
        {ANCORA_SERINGA}
      </p>
    </div>
  );
}
