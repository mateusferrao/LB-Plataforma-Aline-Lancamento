import type { Modo } from "@/components/academy/CtaButton";
import { ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Bloco de preço. Evergreen: R$1.797. Sala: o cheio riscado (preço real da
// evergreen) e R$1.497 com o cupom até 08/10. A parcela só aparece quando
// estiver conferida no checkout (lib/ofertaAcademy.ts).
export function Preco({ modo, onWine = false }: { modo: Modo; onWine?: boolean }) {
  const soft = onWine ? "text-on-wine/80" : "text-fg-soft";
  const strong = onWine ? "text-on-wine" : "text-fg";
  const accent = onWine ? "text-on-wine" : "text-wine-ink";

  if (modo === "evergreen") {
    return (
      <div className={onWine ? "text-center" : ""}>
        <div className={`text-[12px] font-semibold tracking-[0.16em] uppercase ${accent}`}>
          {ACADEMY.mesesAcesso} meses de Filgueiras Academy
        </div>
        <div className={`mt-1.5 font-serif text-[2.4rem] leading-none ${strong}`}>
          {ACADEMY.precoCheioLabel}
        </div>
        <div className={`mt-2 text-[0.95rem] ${soft}`}>
          {ACADEMY.parcela12x ? `ou 12x de ${ACADEMY.parcela12x}` : "Em até 12x no cartão"} · ou Pix
        </div>
      </div>
    );
  }

  return (
    <div className={onWine ? "text-center" : ""}>
      <div className={`text-[12px] font-semibold tracking-[0.16em] uppercase ${accent}`}>
        Condição da sala · até {SALA.prazoCurto}
      </div>
      <div className={`mt-1.5 flex items-baseline gap-3 ${onWine ? "justify-center" : ""}`}>
        <span className={`text-[1.05rem] line-through ${soft}`}>{ACADEMY.precoCheioLabel}</span>
        <span className={`font-serif text-[2.4rem] leading-none ${strong}`}>{SALA.precoLabel}</span>
      </div>
      <div className={`mt-2 text-[0.95rem] ${soft}`}>
        {SALA.parcela12x ? `ou 12x de ${SALA.parcela12x}` : "Em até 12x no cartão"} · ou Pix ·{" "}
        {SALA.mesesAcesso} meses de acesso
      </div>
    </div>
  );
}
