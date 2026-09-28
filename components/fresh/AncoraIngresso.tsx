"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";
import {
  ANCORA_CURTA,
  ANCORA_ROTULO,
  ANCORA_SERINGA,
  ANCORA_VALOR,
} from "@/components/fresh/ancora";

// Comparativo visual do ingresso emitido da /fresh. Duas âncoras, cada uma no
// seu lugar: o curso internacional presencial (referência de mercado, nunca
// atribuída à aula) e o "de" da própria aula (precoDe do lote, o mesmo "De
// R$197 por R$67" da /lp2, fonte AULA_VALOR_DE em lib/lotes.ts). O percentual
// do selo sai do preço do lote ativo, então acompanha qualquer mudança lá.
export function AncoraIngresso() {
  const { lote, montado } = useLoteAtivo();
  if (!montado || !lote) return null;

  const pct = (lote.price / ANCORA_VALOR) * 100;
  const temDe = !!(lote.precoDe && lote.precoDeLabel && lote.precoDe > lote.price);
  const selo = pct < 1 ? "Menos de 1% do valor" : `Cerca de ${Math.ceil(pct)}% do valor`;

  return (
    <div className="text-left">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[0.92rem] leading-snug text-fg-faint">{ANCORA_ROTULO}</div>
          <div className="mt-0.5 text-[0.78rem] text-fg-faint/80">
            presencial, fora do país · valor aproximado
          </div>
        </div>
        <s className="shrink-0 font-serif text-[1.3rem] leading-none whitespace-nowrap text-fg-faint decoration-wine-bright decoration-2">
          {ANCORA_CURTA}
        </s>
      </div>

      <div className="my-3.5 border-t border-dashed border-line" aria-hidden="true" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[1rem] font-semibold text-fg">Seu ingresso · aula ao vivo</div>
          <div className="mt-0.5 text-[0.82rem] text-fg-soft">
            com as imagens das dissecções da Aline
          </div>
        </div>
        <div className="shrink-0 text-right">
          {temDe && (
            <s className="block text-[0.95rem] whitespace-nowrap text-fg-faint">
              de {lote.precoDeLabel}
            </s>
          )}
          <div className="font-serif text-[2rem] leading-none font-semibold whitespace-nowrap text-fg">
            {lote.priceLabel}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <span className="rounded-full bg-wine px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-on-wine uppercase">
          {selo} · sem viajar
        </span>
      </div>
      <p className="mt-3 text-center font-serif text-[1.02rem] leading-snug text-fg italic">
        {ANCORA_SERINGA}
      </p>
    </div>
  );
}
