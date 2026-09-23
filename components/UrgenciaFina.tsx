"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";

// Linha fina abaixo dos CTAs. Preço único até a aula (sem virada de lote no
// meio do caminho). Mantém sempre reembolso + sem gravação.
export function UrgenciaFina({ className = "" }: { className?: string }) {
  const { lote, montado } = useLoteAtivo();
  const prefixo =
    montado && lote ? `${lote.priceLabel} até a aula` : "Vagas por tempo limitado";
  return (
    <p className={className}>
      {prefixo} · reembolso em 7 dias · sem gravação
    </p>
  );
}
