"use client";

import { useEffect, useState } from "react";
import {
  agora,
  estaAntesDoPrimeiroLote,
  loteAtivoEm,
  proximoLoteDe,
  type Lote,
} from "@/lib/lotes";

export type LoteState = {
  lote: Lote | null;
  proximo: Lote | null;
  // Só relevante quando `lote` é null: true se ainda não abriu o (único)
  // lote, false se o evento já passou. Distingue os dois estados "fora de
  // lote" sem depender de `proximo` (que não serve pra isso).
  antes: boolean;
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
    antes: true,
    montado: false,
  });

  useEffect(() => {
    const tick = () => {
      const ts = agora();
      const lote = loteAtivoEm(ts);
      setState({
        lote,
        proximo: proximoLoteDe(lote),
        antes: !lote && estaAntesDoPrimeiroLote(ts),
        montado: true,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
