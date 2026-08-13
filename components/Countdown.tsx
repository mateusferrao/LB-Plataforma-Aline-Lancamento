"use client";

import { useEffect, useState } from "react";
import { LIVE_DATE_ISO } from "@/lib/checkout";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(): Remaining {
  const diff = Math.max(0, new Date(LIVE_DATE_ISO).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function two(n: number) {
  return String(n).padStart(2, "0");
}

const UNITS: { key: keyof Remaining; label: string }[] = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "seg" },
];

export function Countdown({ className = "" }: { className?: string }) {
  // Renderiza "--" no servidor/primeira pintura pra evitar mismatch de hidratação
  // (o valor real depende do relógio do visitante); atualiza a cada segundo no cliente.
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`flex gap-2.5 ${className}`} aria-label="Contagem regressiva para a live">
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="min-w-[74px] rounded-[4px] border border-line-soft bg-bg-3 px-1 py-3 text-center"
        >
          <div className="font-serif text-[2rem] leading-none tabular-nums text-fg">
            {remaining ? two(remaining[key]) : "--"}
          </div>
          <div className="mt-2 text-[10.5px] tracking-[0.16em] text-fg-faint uppercase">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
