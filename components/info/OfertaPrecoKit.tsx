"use client";

import { descontoPct, formatBRL, valorDeTotal } from "@/lib/ofertaKit";
import { useOfertaKit } from "@/lib/useOfertaKit";

// Bloco de preço do card de oferta da /info (fundo marsala): "de" riscado,
// parcela grande, à vista no Pix e o desconto calculado da fase ativa.
// Alturas reservadas pra não dar layout shift antes de montar.
export function OfertaPrecoKit() {
  const { fase, montado } = useOfertaKit();

  // Sem checkout na fase (ex.: "soKit" antes de existir o checkout só do kit),
  // não mostra preço: o botão também fica bloqueado.
  if (montado && !fase?.checkoutUrl) {
    return (
      <>
        <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
          Mapa das Intercorrências
        </div>
        <div className="my-1.5 font-serif text-[2.2rem] leading-tight">Nova oferta em breve</div>
      </>
    );
  }

  const pct = fase ? descontoPct(fase) : 0;

  return (
    <>
      <div className="min-h-[1.4em] text-[0.98rem] opacity-90">
        {montado && fase && pct > 0 ? (
          <>
            De <s>{formatBRL(valorDeTotal(fase))}</s> por
          </>
        ) : (
          ""
        )}
      </div>
      <div className="my-1.5 min-h-[1em] font-serif text-[2.5rem] leading-none sm:text-[2.7rem]">
        {montado && fase ? `12x de ${fase.parcela12x}` : ""}
      </div>
      <div className="min-h-[1.4em] text-[0.95rem] opacity-90">
        {montado && fase ? `ou ${fase.priceLabel} à vista no Pix` : ""}
      </div>
      {montado && fase && pct > 0 && (
        <div className="mx-auto mt-3 inline-block rounded-[2px] bg-on-wine/12 px-3 py-1 text-[12px] font-semibold tracking-[0.14em] uppercase">
          {pct}% de desconto
        </div>
      )}
    </>
  );
}
