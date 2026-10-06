"use client";

import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { BONUS_10_ESGOTADO, SALA } from "@/lib/ofertaAcademy";
import { PrazoInline } from "@/components/academy/Prazo";

// Faixa fina no topo da sala: o prazo real dos bônus. Some quando acaba.
export function BarraPrazo() {
  const [fim, setFim] = useState(false);
  useEffect(() => {
    const tick = () => setFim(agora() >= Date.parse(SALA.endsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (fim) return null;
  return (
    <div className="border-b border-line bg-bg-2 px-4 py-2.5 text-center text-[13px] text-fg-soft">
      +3 meses de acesso pra todo mundo
      {BONUS_10_ESGOTADO ? "" : ` e bônus pros ${SALA.primeirosN} primeiros`} até {SALA.prazoCurto} · termina em{" "}
      <PrazoInline className="text-[14px] text-fg" />
    </div>
  );
}
