"use client";

import { useEffect, useState } from "react";
import { agora, LOTE_TETO, type Lote } from "@/lib/lotes";
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

// Legenda acima dos tiles conforme o lote.
function legenda(lote: Lote | null, proximo: Lote | null): string {
  if (lote && !proximo) return "As inscrições encerram em";
  return "O preço sobe em";
}

// Subtexto padronizado com o próximo preço e o teto.
function subtexto(lote: Lote | null, proximo: Lote | null): string {
  if (!lote) return "";
  if (!proximo) return "Último lote. As inscrições encerram no início da aula.";
  const teto =
    proximo.price < LOTE_TETO.price ? `, e sobe até ${LOTE_TETO.priceLabel}` : "";
  return `${lote.priceLabel} agora. No próximo lote vira ${proximo.priceLabel}${teto}.`;
}

export function Countdown({
  className = "",
  align = "left",
}: {
  className?: string;
  align?: "left" | "center";
}) {
  const { lote, proximo, montado } = useLoteAtivo();
  // Alvo dos tiles = fim do lote ativo; "--" antes de montar (evita mismatch).
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    if (!lote) {
      setRemaining(null);
      return;
    }
    const tick = () => setRemaining(getRemaining(lote.endsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [lote]);

  const alignCls = align === "center" ? "items-center text-center" : "items-start";

  // Encerrado (montou e sem lote): sem tiles, só o aviso.
  if (montado && !lote) {
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
        {legenda(lote, proximo)}
      </span>

      <div
        className="flex gap-2.5"
        aria-label="Contagem regressiva para o fim do lote"
      >
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

      {/* Subtexto do preço; min-height reservada pra não pular na hidratação. */}
      <p className="min-h-[1.5em] max-w-[520px] text-[0.98rem] leading-[1.5] text-fg-soft">
        {montado ? subtexto(lote, proximo) : ""}
      </p>
    </div>
  );
}
