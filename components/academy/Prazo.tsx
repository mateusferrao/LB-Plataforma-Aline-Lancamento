"use client";

import { useEffect, useState } from "react";
import { agora } from "@/lib/lotes";
import { SALA } from "@/lib/ofertaAcademy";

type Restante = { dias: number; horas: number; min: number; seg: number };

function restante(alvoIso: string): Restante {
  const diff = Math.max(0, Date.parse(alvoIso) - agora());
  return {
    dias: Math.floor(diff / 86_400_000),
    horas: Math.floor((diff % 86_400_000) / 3_600_000),
    min: Math.floor((diff % 3_600_000) / 60_000),
    seg: Math.floor((diff % 60_000) / 1_000),
  };
}

const UNIDADES: { key: keyof Restante; label: string }[] = [
  { key: "dias", label: "dias" },
  { key: "horas", label: "horas" },
  { key: "min", label: "min" },
  { key: "seg", label: "seg" },
];

// Contador real até o fim dos bônus da sala (06/10 23h59, a noite da aula). Nada de cronômetro de sessão.
export function Prazo({ className = "", align = "left" }: { className?: string; align?: "left" | "center" }) {
  const [r, setR] = useState<Restante | null>(null);
  const [fim, setFim] = useState(false);

  useEffect(() => {
    const tick = () => {
      setR(restante(SALA.endsAt));
      setFim(agora() >= Date.parse(SALA.endsAt));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const alignCls = align === "center" ? "items-center text-center" : "items-start";

  if (fim) {
    return (
      <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
        <p className="font-serif text-[1.4rem] leading-snug text-fg">
          Os bônus da sala terminaram em {SALA.prazoCurto}.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
      <span className="text-[12px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
        Os bônus da sala terminam em
      </span>
      <div className="flex gap-2.5" aria-label="Contagem regressiva até o fim da condição da sala">
        {UNIDADES.map(({ key, label }) => (
          <div
            key={key}
            className="min-w-[70px] rounded-[4px] border border-line-soft bg-bg-3 px-1 py-3 text-center"
          >
            <div
              className={`font-serif text-[1.9rem] leading-none tabular-nums ${
                r && r.dias === 0 ? "text-wine-bright" : "text-fg"
              }`}
            >
              {r ? String(r[key]).padStart(2, "0") : "--"}
            </div>
            <div className="mt-2 text-[10.5px] tracking-[0.16em] text-fg-faint uppercase">{label}</div>
          </div>
        ))}
      </div>
      <p className="text-[0.95rem] leading-[1.5] text-fg-soft">
        Depois disso, os bônus da sala saem.
      </p>
    </div>
  );
}

// Versão em linha ("02d 04h 31m 12s"), pra barra do topo e o card da oferta.
export function PrazoInline({ className = "" }: { className?: string }) {
  const [r, setR] = useState<Restante | null>(null);
  useEffect(() => {
    const tick = () => setR(restante(SALA.endsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    <span className={`font-serif tabular-nums ${className}`}>
      {r ? `${p(r.dias)}d ${p(r.horas)}h ${p(r.min)}m ${p(r.seg)}s` : "--d --h --m --s"}
    </span>
  );
}
