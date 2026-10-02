import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

// Ancoragem da /alunas: o presente primeiro (Protocolo "de R$109,90"), depois
// o ingresso pelo preço de todo mundo e, por último, o total riscado e o %.
// Mesmos números de antes (lib/ofertaAlunas.ts); só a ordem e o peso mudaram
// (decisões de 01/10: o que vende pra ex-aluna é o presente, não o desconto).
export function PrecoPresente({ onWine = false }: { onWine?: boolean }) {
  const faint = onWine ? "opacity-75" : "text-fg-faint";
  const strong = onWine ? "" : "text-fg";
  const acento = onWine ? "" : "text-wine-ink";

  return (
    <div className="text-left">
      <div
        className={`rounded-[4px] border px-4 py-3 ${
          onWine ? "border-on-wine/30 bg-on-wine/10" : "border-wine/50 bg-bg-3"
        }`}
      >
        <div className={`text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${acento}`}>
          Seu presente de ex-aluna
        </div>
        <div className="mt-1 flex items-baseline justify-between gap-4">
          <span className={`text-[1.05rem] font-semibold ${strong}`}>
            Protocolo de Resgate Vascular
          </span>
          <span className="shrink-0 whitespace-nowrap">
            <s className={`font-serif text-[1rem] ${faint}`}>
              {OFERTA_ALUNAS.protocoloValorDeLabel}
            </s>{" "}
            <span className={`text-[0.95rem] font-semibold ${acento}`}>grátis</span>
          </span>
        </div>
      </div>

      <div className="mt-3.5 flex items-baseline justify-between gap-4">
        <span className={strong}>Ingresso da aula ao vivo</span>
        <s className={`shrink-0 font-serif text-[1.05rem] whitespace-nowrap ${faint}`}>
          {OFERTA_ALUNAS.aulaValorDeLabel}
        </s>
      </div>

      <div className={`my-3.5 border-t border-dashed ${onWine ? "border-on-wine/30" : "border-line"}`} />

      <div className="flex items-center justify-between gap-4">
        <span className={`font-semibold ${strong}`}>Pra você, ex-aluna</span>
        <span className={`font-serif text-[2.1rem] leading-none font-semibold whitespace-nowrap ${strong}`}>
          {OFERTA_ALUNAS.priceLabel}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <span className={`text-[0.88rem] ${faint}`}>
          Valor total <s>{OFERTA_ALUNAS.valorDeTotalLabel}</s> · {OFERTA_ALUNAS.descontoPct}% de
          desconto
        </span>
        <span className={`text-[0.88rem] ${faint}`}>
          ou 12x de {OFERTA_ALUNAS.parcela12x} · Pix à vista
        </span>
      </div>
    </div>
  );
}
