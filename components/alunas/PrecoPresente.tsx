import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

// Bloco de preço da /alunas: aula pelo preço de todo mundo + Protocolo riscado
// "de presente". Sem "de/por" da aula: o benefício é o presente, não desconto.
export function PrecoPresente({ onWine = false }: { onWine?: boolean }) {
  const faint = onWine ? "opacity-80" : "text-fg-faint";
  return (
    <div className="text-left">
      <div className="flex items-baseline justify-between gap-4">
        <span className={onWine ? "" : "text-fg"}>Ingresso da aula ao vivo</span>
        <span
          className={`font-serif text-[1.6rem] leading-none font-semibold whitespace-nowrap ${onWine ? "" : "text-fg"}`}
        >
          {OFERTA_ALUNAS.priceLabel}
        </span>
      </div>
      <div className="mt-2.5 flex items-baseline justify-between gap-4">
        <span className={onWine ? "" : "text-fg"}>Protocolo de Resgate Vascular</span>
        <span className="whitespace-nowrap">
          <s className={`mr-2 font-serif text-[1.05rem] ${faint}`}>
            {OFERTA_ALUNAS.protocoloValorDeLabel}
          </s>
          <span className="text-[0.82rem] font-semibold tracking-[0.12em] uppercase">
            de presente
          </span>
        </span>
      </div>
      <div className={`mt-3 text-[0.9rem] ${faint}`}>
        ou 12x de {OFERTA_ALUNAS.parcela12x} no cartão · Pix à vista
      </div>
    </div>
  );
}
