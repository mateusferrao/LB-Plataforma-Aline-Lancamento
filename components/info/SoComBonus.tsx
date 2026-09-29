"use client";

import { useOfertaKit } from "@/lib/useOfertaKit";

// Mostra `children` só enquanto a aula de bônus faz parte da oferta (fase
// "comBonus"); depois dela, mostra `senao` (ou nada). Antes de montar, mostra
// `children`: é o estado esperado na maior parte da campanha, e assim o HTML
// estático e a primeira renderização do cliente batem (sem erro de hidratação).
export function SoComBonus({
  children,
  senao = null,
}: {
  children: React.ReactNode;
  senao?: React.ReactNode;
}) {
  const { fase, montado } = useOfertaKit();
  if (montado && fase?.id !== "comBonus") return <>{senao}</>;
  return <>{children}</>;
}
