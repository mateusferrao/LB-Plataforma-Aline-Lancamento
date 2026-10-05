"use client";

import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { SALA } from "@/lib/ofertaAcademy";

// Mostra `children` enquanto os bônus da sala valem (até SALA.endsAt) e
// `depois` quando acabam. Testar com ?preview=2026-10-07T10:00:00-03:00.
export function AteOFim({ children, depois = null }: { children: React.ReactNode; depois?: React.ReactNode }) {
  const [fim, setFim] = useState(false);
  useEffect(() => {
    const tick = () => setFim(agora() >= Date.parse(SALA.endsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{fim ? depois : children}</>;
}
