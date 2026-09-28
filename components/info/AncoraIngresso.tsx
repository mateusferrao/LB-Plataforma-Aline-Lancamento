"use client";

import { descontoPct, formatBRL, valorDeTotal } from "@/lib/ofertaKit";
import { useOfertaKit } from "@/lib/useOfertaKit";
import { ANCORA_SERINGA } from "@/components/info/ancora";

// Comparativo do ingresso emitido da /info (par do components/fresh/AncoraIngresso):
// cada item com o valor "de" riscado, o total "de" riscado e o preço da fase
// em destaque, com o % de desconto calculado. Tudo sai de lib/ofertaKit.ts.
export function AncoraIngresso() {
  const { fase, montado } = useOfertaKit();
  if (!montado || fase?.id !== "comBonus") return null;

  const pct = descontoPct(fase);

  return (
    <div className="text-left">
      {fase.itens.map((item) => (
        <div key={item.titulo} className="mt-3 flex items-start justify-between gap-4 first:mt-0">
          <div>
            <div className="text-[0.92rem] leading-snug text-fg-soft">
              {item.bonus ? "Aula ao vivo Por Dentro da Face" : "Protocolo de Resgate Vascular"}
            </div>
            <div className="mt-0.5 text-[0.78rem] text-fg-faint">
              {item.bonus ? "ingresso vendido sozinho · 06/10" : "PDF, prancha, ficha e 2 cards · na hora"}
            </div>
          </div>
          <div className="shrink-0 text-right">
            <s className="text-[0.95rem] whitespace-nowrap text-fg-faint">{formatBRL(item.valorDe)}</s>
            {item.bonus && (
              <div className="mt-0.5 text-[0.78rem] font-semibold text-wine-ink">de presente</div>
            )}
          </div>
        </div>
      ))}

      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div className="text-[0.92rem] text-fg-soft">Valor total</div>
        <s className="font-serif text-[1.3rem] leading-none whitespace-nowrap text-fg-faint decoration-wine-bright decoration-2">
          {formatBRL(valorDeTotal(fase))}
        </s>
      </div>

      <div className="my-3.5 border-t border-dashed border-line" aria-hidden="true" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[1rem] font-semibold text-fg">No seu ingresso, por</div>
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
          {pct > 0 ? `${pct}% de desconto · ` : ""}só até 06/10
        </span>
      </div>
      <p className="mt-3 text-center font-serif text-[1.02rem] leading-snug text-fg italic">
        {ANCORA_SERINGA}
      </p>
    </div>
  );
}
