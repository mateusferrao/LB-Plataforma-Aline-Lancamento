import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

// Ancoragem da /alunas: aula "de R$197" + Protocolo "de R$109,90" (presente de
// ex-aluna) = "de R$306,90 por R$67". Valores e % vêm de lib/ofertaAlunas.ts.
export function PrecoPresente({ onWine = false }: { onWine?: boolean }) {
  const faint = onWine ? "opacity-75" : "text-fg-faint";
  const strong = onWine ? "" : "text-fg";
  const item = (rotulo: string, valor: string, extra?: string) => (
    <div className="flex items-baseline justify-between gap-4">
      <span className={strong}>
        {rotulo}
        {extra && (
          <span className="ml-2 text-[0.72rem] font-semibold tracking-[0.12em] uppercase opacity-90">
            {extra}
          </span>
        )}
      </span>
      <s className={`shrink-0 font-serif text-[1.05rem] whitespace-nowrap ${faint}`}>{valor}</s>
    </div>
  );

  return (
    <div className="text-left">
      <div className="grid gap-2">
        {item("Aula ao vivo Por Dentro da Face", OFERTA_ALUNAS.aulaValorDeLabel)}
        {item("Protocolo de Resgate Vascular", OFERTA_ALUNAS.protocoloValorDeLabel, "de presente")}
      </div>

      <div className={`my-3.5 border-t border-dashed ${onWine ? "border-on-wine/30" : "border-line"}`} />

      <div className="flex items-baseline justify-between gap-4">
        <span className={faint}>Valor total</span>
        <s className={`font-serif text-[1.1rem] whitespace-nowrap ${faint}`}>
          {OFERTA_ALUNAS.valorDeTotalLabel}
        </s>
      </div>
      <div className="mt-1.5 flex items-center justify-between gap-4">
        <span className={`font-semibold ${strong}`}>Pra você, ex-aluna</span>
        <span className={`font-serif text-[2.1rem] leading-none font-semibold whitespace-nowrap ${strong}`}>
          {OFERTA_ALUNAS.priceLabel}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase ${
            onWine ? "bg-on-wine/15" : "bg-wine text-on-wine"
          }`}
        >
          {OFERTA_ALUNAS.descontoPct}% de desconto
        </span>
        <span className={`text-[0.88rem] ${faint}`}>
          ou 12x de {OFERTA_ALUNAS.parcela12x} · Pix à vista
        </span>
      </div>
    </div>
  );
}
