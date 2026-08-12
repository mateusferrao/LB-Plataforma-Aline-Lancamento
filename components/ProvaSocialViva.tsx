"use client";

import { useEffect, useRef, useState } from "react";

// ⚠️ PROVA SOCIAL SIMULADA — o número é gerado no navegador. O site é estático
// (Next.js output: export), não há backend nem audiência real pra medir, então
// este valor NÃO é dado verdadeiro. Mantido numa faixa modesta e plausível pra
// não contradizer a realidade nem soar como "esquema".
//
// Para usar dado REAL no futuro, troque o gerador abaixo por uma fonte de
// verdade (ex.: GA Realtime API ou webhook de vendas da Ticto) e remova o
// data-simulado. Segue a mesma convenção de conteúdo provisório do projeto
// (ver data-mock em CaixinhaProof.tsx).
const MIN = 8;
const MAX = 23;
const KEY = "lp_prova_social";

function clamp(n: number) {
  return Math.min(MAX, Math.max(MIN, n));
}

function valorInicial(): number {
  try {
    const salvo = Number(window.sessionStorage.getItem(KEY));
    if (Number.isFinite(salvo) && salvo >= MIN && salvo <= MAX) return salvo;
  } catch {
    /* noop */
  }
  return MIN + Math.floor(Math.random() * (MAX - MIN + 1));
}

type Variant = "vendo" | "garantiram";
type Tone = "light" | "onAccent";

export function ProvaSocialViva({
  className = "",
  variant = "vendo",
  tone = "light",
}: {
  className?: string;
  variant?: Variant;
  tone?: Tone;
}) {
  // null = ainda não montou → placeholder neutro (anti-hidratação).
  const [n, setN] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let atual = valorInicial();
    setN(atual);

    const passo = () => {
      // caminhada aleatória suave: -1, 0 ou +1 (variação orgânica, sem saltos)
      atual = clamp(atual + (Math.floor(Math.random() * 3) - 1));
      setN(atual);
      try {
        window.sessionStorage.setItem(KEY, String(atual));
      } catch {
        /* noop */
      }
      agendar();
    };

    // intervalo irregular (8-15s) pra não parecer um relógio mecânico
    const agendar = () => {
      timeoutRef.current = setTimeout(passo, 8000 + Math.random() * 7000);
    };
    agendar();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const texto = variant === "garantiram" ? "garantiram vaga hoje" : "vendo esta página agora";

  const dotCls = tone === "onAccent" ? "bg-on-accent" : "bg-accent";
  const wrapCls = tone === "onAccent" ? "opacity-90" : "text-ink-soft";
  const numCls = tone === "onAccent" ? "text-on-accent" : "text-ink";

  return (
    <div
      className={`flex items-center gap-2 text-[13px] ${wrapCls} ${className}`}
      data-simulado="prova-social"
      aria-live="polite"
    >
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotCls}`} aria-hidden="true" />
      <span>
        <span className={`font-semibold ${numCls}`}>{n ?? "—"}</span> pessoas {texto}
      </span>
    </div>
  );
}
