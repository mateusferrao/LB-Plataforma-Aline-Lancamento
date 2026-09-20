"use client";

import { useEffect, useState } from "react";
import { agora, loteAtivoEm, proximoLoteDe, type Lote } from "@/lib/lotes";

export type LoteState = {
  lote: Lote | null;
  proximo: Lote | null;
  montado: boolean;
};

/**
 * Retorna o lote ativo (e o próximo) resolvido no cliente, atualizando a cada
 * segundo. `montado` fica false até a primeira montagem — nesse meio-tempo os
 * componentes mostram placeholders neutros (sem piscar preço errado nem quebrar
 * a hidratação). A virada de lote acontece automaticamente na data, sem deploy.
 */
export function useLoteAtivo(): LoteState {
  const [state, setState] = useState<LoteState>({
    lote: null,
    proximo: null,
    montado: false,
  });

  useEffect(() => {
    const tick = () => {
      const lote = loteAtivoEm(agora());
      setState({ lote, proximo: proximoLoteDe(lote), montado: true });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
