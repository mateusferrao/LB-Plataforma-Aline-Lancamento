"use client";

import { useEffect, useState } from "react";
import { agora, LIVE_DATE_ISO } from "@/lib/lotes";
import { useOfertaKit } from "@/lib/useOfertaKit";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(targetIso: string): Remaining {
  const diff = Math.max(0, new Date(targetIso).getTime() - agora());
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

// Contador até a aula ao vivo, que é quando o bônus acaba (a aula não tem
// gravação). Mesmo visual do components/lp2/Countdown.tsx. Fora da fase
// "comBonus" não renderiza nada: sem bônus, não há prazo a mostrar.
export function BonusCountdown({
  className = "",
  align = "left",
}: {
  className?: string;
  align?: "left" | "center";
}) {
  const { fase, montado } = useOfertaKit();
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(LIVE_DATE_ISO));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (montado && fase?.id !== "comBonus") return null;

  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  const urgente = remaining !== null && remaining.days === 0;

  return (
    <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
      <span className="text-[12px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
        O bônus ao vivo acontece em
      </span>

      <div className="flex gap-2.5" aria-label="Contagem regressiva para a aula ao vivo de bônus">
        {UNITS.map(({ key, label }) => (
          <div
            key={key}
            className="min-w-[68px] rounded-[4px] border border-line-soft bg-bg-3 px-1 py-3 text-center sm:min-w-[74px]"
          >
            <div
              className={`font-serif text-[2rem] leading-none tabular-nums transition-colors ${
                urgente ? "text-wine" : "text-fg"
              }`}
            >
              {remaining ? two(remaining[key]) : "--"}
            </div>
            <div className="mt-2 text-[10.5px] tracking-[0.16em] text-fg-faint uppercase">
              {label}
            </div>
          </div>
        ))}
      </div>

      <p className="min-h-[1.5em] max-w-[520px] text-[0.98rem] leading-[1.5] text-fg-soft">
        A aula não tem gravação. Depois dela, o bônus sai da oferta.
      </p>
    </div>
  );
}
