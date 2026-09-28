"use client";

import { useEnvioKitPendente } from "@/lib/useOfertaKit";

// Mostra `children` enquanto o kit ainda não foi enviado (até o fim de
// ENVIO_KIT_DATA, lib/ofertaKit.ts); depois, mostra `senao` (ou nada). Antes de
// montar, mostra `children`: é o estado esperado agora, e assim o HTML estático
// e a primeira renderização do cliente batem (mesmo critério do SoComBonus).
export function SoAntesDoEnvio({
  children,
  senao = null,
}: {
  children: React.ReactNode;
  senao?: React.ReactNode;
}) {
  const { pendente, montado } = useEnvioKitPendente();
  if (montado && !pendente) return <>{senao}</>;
  return <>{children}</>;
}
