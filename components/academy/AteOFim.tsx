"use client";

import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { SALA } from "@/lib/ofertaAcademy";

// Mostra `children` enquanto os bônus da sala valem (até SALA.endsAt) e
// `depois` quando acabam. Testar com ?preview=2026-10-07T10:00:00-03:00.
// `fim` troca o prazo (a /academy/exalunas usa o dela).
export function AteOFim({
  children,
  depois = null,
  apos = 0,
  fim: fimIso = SALA.endsAt,
}: {
  children: React.ReactNode;
  depois?: React.ReactNode;
  // Horas a mais depois do fim dos bônus (ex.: o aviso do obrigado vale até o dia seguinte).
  apos?: number;
  fim?: string;
}) {
  const [fim, setFim] = useState(false);
  useEffect(() => {
    const tick = () => setFim(agora() >= Date.parse(fimIso) + apos * 3_600_000);
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [apos, fimIso]);
  return <>{fim ? depois : children}</>;
}
