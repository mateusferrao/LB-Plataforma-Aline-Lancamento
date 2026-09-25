"use client";

import { useOfertaKit } from "@/lib/useOfertaKit";

// Linha fina abaixo dos CTAs da /info: preço + garantia, e o bônus enquanto
// ele existir. Placeholder neutro antes de montar (sem piscar preço).
export function LinhaGarantia({ className = "" }: { className?: string }) {
  const { fase, montado } = useOfertaKit();
  if (!montado || !fase?.checkoutUrl) return <p className={`min-h-[1.5em] ${className}`} />;

  return (
    <p className={`min-h-[1.5em] ${className}`}>
      {fase.id === "comBonus"
        ? `${fase.priceLabel} com a aula ao vivo de presente · garantia de 7 dias`
        : `${fase.priceLabel} ou 12x de ${fase.parcela12x} · garantia de 7 dias`}
    </p>
  );
}
