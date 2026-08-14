"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";

// Linha fina abaixo dos CTAs. Lote-aware: no último lote troca a subida de preço
// por "Último lote". Mantém sempre reembolso + sem gravação.
export function UrgenciaFina({ className = "" }: { className?: string }) {
  const { lote, proximo, montado } = useLoteAtivo();
  const prefixo =
    montado && lote && !proximo ? "Último lote" : "Preço sobe no próximo lote";
  return (
    <p className={className}>
      {prefixo} · reembolso em 7 dias · sem gravação
    </p>
  );
}
