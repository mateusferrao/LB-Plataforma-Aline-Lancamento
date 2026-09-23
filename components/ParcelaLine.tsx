"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";

// Reforço do parcelamento abaixo dos CTAs (Hero, Solution, FinalCta) — lê o
// lote ativo (mesma fonte do card de oferta), nunca hardcoded, pra nunca
// ficar desalinhado quando o lote virar. Fica em branco fora da janela de
// lotes (aviso/encerrado), onde não há preço nem parcela pra mostrar.
export function ParcelaLine({ className = "" }: { className?: string }) {
  const { lote, montado } = useLoteAtivo();

  if (!montado || !lote) return null;

  return (
    <p className={`font-serif text-[1.05rem] text-wine-ink ${className}`}>
      ou 12x de {lote.parcela12x}
    </p>
  );
}
