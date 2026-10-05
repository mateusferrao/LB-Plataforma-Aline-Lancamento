"use client";

import { useEffect, useRef } from "react";

// Insere um trecho de HTML colado da Ticto (script do 1 clique ou botões de
// aceitar e recusar) e executa os <script> que vierem nele. createContextualFragment
// executa scripts; innerHTML não. Só para os trechos oficiais do Flow da Ticto,
// colados em lib/ofertaAcademy.ts (TICTO_UPSELL_ANATOMIA).
export function TictoSnippet({ html, className = "" }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !html) return;
    el.replaceChildren(document.createRange().createContextualFragment(html));
    return () => el.replaceChildren();
  }, [html]);
  return <div ref={ref} className={className} />;
}
