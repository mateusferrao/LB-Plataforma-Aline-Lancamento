"use client";

import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { ENVIO_KIT_ATE_ISO, faseKitEm, type FaseKit } from "@/lib/ofertaKit";

export type FaseKitState = {
  fase: FaseKit | null;
  montado: boolean;
};

/**
 * Fase ativa da oferta do kit (/info), resolvida no cliente e atualizada a
 * cada segundo — mesmo padrão do useLoteAtivo. `montado` fica false até a
 * primeira montagem, pra não piscar preço errado nem quebrar a hidratação.
 * A troca "comBonus" → "soKit" acontece sozinha na chegada da aula.
 */
export function useOfertaKit(): FaseKitState {
  const [state, setState] = useState<FaseKitState>({ fase: null, montado: false });

  useEffect(() => {
    const tick = () => setState({ fase: faseKitEm(agora()), montado: true });
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}

/**
 * true enquanto o kit ainda não foi enviado (antes de ENVIO_KIT_ATE_ISO).
 * `montado` false até a 1ª montagem. Respeita o ?preview= do agora().
 */
export function useEnvioKitPendente(): { pendente: boolean; montado: boolean } {
  const [state, setState] = useState({ pendente: true, montado: false });

  useEffect(() => {
    const tick = () =>
      setState({ pendente: agora() < Date.parse(ENVIO_KIT_ATE_ISO), montado: true });
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
