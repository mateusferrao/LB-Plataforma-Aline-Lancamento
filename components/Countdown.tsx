"use client";

import { useEffect, useState } from "react";
import { agora, LIVE_DATE_ISO } from "@/lib/lotes";
import { useLoteAtivo } from "@/lib/useLoteAtivo";

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

export function Countdown({
  className = "",
  align = "left",
}: {
  className?: string;
  align?: "left" | "center";
}) {
  const { lote, montado } = useLoteAtivo();
  // Alvo dos tiles = chegada da aula ao vivo, fixo (não depende do lote ativo).
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(LIVE_DATE_ISO));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  // Menos de 24h restantes (days === 0): dígitos no vermelho do botão pra reforçar urgência.
  const urgente = remaining !== null && remaining.days === 0;
  // Fora da janela de inscrições: antes de abrir ou depois da aula já ter chegado.
  const encerrado = montado && !lote && agora() >= Date.parse(LIVE_DATE_ISO);

  if (montado && !lote && !encerrado) {
    return (
      <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
        <p className="font-serif text-[1.5rem] leading-snug text-fg">
          As inscrições desta turma começarão em breve.
        </p>
      </div>
    );
  }

  if (encerrado) {
    return (
      <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
        <p className="font-serif text-[1.5rem] leading-snug text-fg">
          As inscrições desta turma foram encerradas.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
      <span className="text-[12px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
        A aula ao vivo começa em
      </span>

      <div
        className="flex gap-2.5"
        aria-label="Contagem regressiva para a aula ao vivo"
      >
        {UNITS.map(({ key, label }) => (
          <div
            key={key}
            className="min-w-[74px] rounded-[4px] border border-line-soft bg-bg-3 px-1 py-3 text-center"
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

      {/* Subtexto sem valor em R$ (o preço só aparece no ingresso emitido);
          min-height reservada pra não pular na hidratação. */}
      <p className="min-h-[1.5em] max-w-[520px] text-[0.98rem] leading-[1.5] text-fg-soft">
        {montado && lote ? "Preço único até a aula. Vagas por tempo limitado." : ""}
      </p>
    </div>
  );
}
