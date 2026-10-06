"use client";

import { useSyncExternalStore } from "react";

// Faixa pra quem chegou na /academy vindo das páginas da aula depois das 20h de
// 06/10 (o RedirecionaAposAula põe ?de=aula). Sem ela, quem clicou num anúncio do
// ingresso cai numa página de R$1.797 sem entender por quê.
const semAssinatura = () => () => {};
const vemDaAula = () => new URLSearchParams(window.location.search).get("de") === "aula";

export function PonteAula() {
  const daAula = useSyncExternalStore(semAssinatura, vemDaAula, () => false);
  if (!daAula) return null;
  return (
    <div className="border-b border-line bg-bg-2 px-4 py-3 text-center text-[14px] leading-[1.5] text-fg-soft">
      A aula <em className="font-serif text-fg">Por Dentro da Face</em> foi ao vivo em 06/10 e não tem replay.{" "}
      <strong className="font-semibold text-fg">A anatomia completa, em fresh frozen, está aqui dentro da Filgueiras Academy.</strong>
    </div>
  );
}
