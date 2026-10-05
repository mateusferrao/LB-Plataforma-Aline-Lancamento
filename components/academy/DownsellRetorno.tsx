"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { deveOferecerDownsell, fecharDownsell } from "@/lib/funilAcademy";
import { ANATOMIA, SALA } from "@/lib/ofertaAcademy";

// Downsell de quem não quis a Academy (docs/plataforma/ticto-funil.md §3): só
// aparece na /academy (evergreen), depois da noite da aula, pra quem clicou no
// checkout há 20 min ou mais, não comprou e voltou. Quem nunca foi ao checkout
// não vê: o downsell não pode competir com a oferta principal (Hormozi).
export function DownsellRetorno() {
  const [aberto, setAberto] = useState(false);
  useEffect(() => {
    if (agora() < Date.parse(SALA.endsAt)) return;
    const id = setTimeout(() => setAberto(deveOferecerDownsell()), 4000);
    return () => clearTimeout(id);
  }, []);

  if (!aberto) return null;
  const fechar = () => {
    fecharDownsell();
    setAberto(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Uma porta menor"
      className="fixed inset-x-3 top-3 z-50 mx-auto max-w-[460px] rounded-[8px] border-2 border-wine bg-bg-2 p-5 shadow-2xl sm:top-auto sm:bottom-6"
    >
      <button
        type="button"
        onClick={fechar}
        aria-label="Fechar"
        className="absolute top-2 right-3 cursor-pointer text-[1.3rem] text-fg-faint hover:text-fg"
      >
        ×
      </button>
      <p className="text-[11px] font-semibold tracking-[0.16em] text-wine-ink uppercase">Voltou?</p>
      <p className="mt-1.5 pr-5 text-[1.02rem] font-semibold leading-[1.35] text-fg">
        Se a Academy inteira não cabe agora, comece pela parte que muda a sua mão.
      </p>
      <p className="mt-1.5 text-[0.92rem] leading-[1.5] text-fg-soft">
        O curso de Fresh Frozen + dissecção, separado: {ANATOMIA.precoLabel} ou 12x de {ANATOMIA.parcela12x}.
      </p>
      <Link
        href="/academy/anatomia"
        onClick={fecharDownsell}
        className="mt-3 inline-flex w-full items-center justify-center rounded-[2px] bg-wine px-5 py-3 font-sans text-[0.95rem] font-semibold text-on-wine"
      >
        Ver o curso de anatomia
      </Link>
    </div>
  );
}
