"use client";

import { useEffect, useState } from "react";

// Cronômetro de RESERVA da vaga — urgência ligada à sessão do visitante.
// NÃO confundir com Countdown.tsx (esse conta até a data da live, 24/09).
// Ancorado em sessionStorage: começa na primeira visita e NÃO reinicia a cada
// refresh dentro da mesma sessão (mais crível e menos manipulador que resetar
// pra 15:00 toda hora). Ao zerar, não bloqueia nada — só reforça o CTA.
const KEY = "lp_reserva_inicio";
const DURACAO_MS = 15 * 60 * 1000; // 15 minutos

function getInicio(): number {
  try {
    const salvo = window.sessionStorage.getItem(KEY);
    if (salvo) {
      const n = Number(salvo);
      if (Number.isFinite(n) && n > 0) return n;
    }
    const agora = Date.now();
    window.sessionStorage.setItem(KEY, String(agora));
    return agora;
  } catch {
    return Date.now();
  }
}

function two(n: number) {
  return String(n).padStart(2, "0");
}

type Tone = "light" | "onAccent";

export function ReservaTimer({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: Tone;
}) {
  // null = ainda não montou no cliente → placeholder neutro pra evitar mismatch
  // de hidratação (o valor depende do relógio/armazenamento do visitante).
  const [restanteMs, setRestanteMs] = useState<number | null>(null);

  useEffect(() => {
    const inicio = getInicio();
    const tick = () => setRestanteMs(Math.max(0, inicio + DURACAO_MS - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const expirado = restanteMs !== null && restanteMs <= 0;
  const minutos = restanteMs === null ? 0 : Math.floor(restanteMs / 60000);
  const segundos = restanteMs === null ? 0 : Math.floor((restanteMs % 60000) / 1000);

  const labelCls = tone === "onAccent" ? "opacity-90" : "text-ink-faint";
  const destaqueCls = tone === "onAccent" ? "text-on-accent" : "text-accent-deep";

  return (
    <div
      className={`flex items-center justify-center gap-2 whitespace-nowrap ${className}`}
      aria-live="polite"
    >
      {expirado ? (
        // Estado expirado curto — só um nudge, não implica perda (o CTA continua
        // funcionando e o preço não muda). Texto longo aqui quebrava o layout.
        <span className={`text-[12px] font-semibold ${destaqueCls}`}>
          Garanta sua vaga agora
        </span>
      ) : (
        <>
          <span className={`text-[12px] tracking-[0.02em] ${labelCls}`}>
            Sua vaga está reservada por
          </span>
          <span
            className={`font-serif text-[1.15rem] leading-none tabular-nums ${destaqueCls}`}
          >
            {restanteMs === null ? "--:--" : `${two(minutos)}:${two(segundos)}`}
          </span>
        </>
      )}
    </div>
  );
}
