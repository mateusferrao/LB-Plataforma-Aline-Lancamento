"use client";

import { useEffect, useState } from "react";

// ⚠️ PROVA SOCIAL SIMULADA — o número é gerado no navegador. O site é estático
// (Next.js output: export), não há backend nem audiência real pra medir, então
// este valor NÃO é dado verdadeiro. Mantido numa faixa modesta e plausível.
//
// Todas as instâncias montadas compartilham o MESMO valor (singleton abaixo),
// pra não divergirem quando aparecem juntas na tela (ex.: card de oferta + barra
// de rolagem no desktop).
//
// Para usar dado REAL no futuro, troque o gerador por uma fonte de verdade
// (GA Realtime API ou webhook de vendas da Ticto) e remova o data-simulado.
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

// --- Fonte única compartilhada por todas as instâncias ---
let valorAtual: number | null = null;
let timer: ReturnType<typeof setTimeout> | null = null;
const inscritos = new Set<(n: number) => void>();

function agendar() {
  // intervalo irregular (8-15s) pra não parecer um relógio mecânico
  timer = setTimeout(() => {
    // caminhada aleatória suave: -1, 0 ou +1 (sem saltos)
    valorAtual = clamp((valorAtual ?? valorInicial()) + (Math.floor(Math.random() * 3) - 1));
    try {
      window.sessionStorage.setItem(KEY, String(valorAtual));
    } catch {
      /* noop */
    }
    inscritos.forEach((fn) => fn(valorAtual as number));
    agendar();
  }, 8000 + Math.random() * 7000);
}

function inscrever(fn: (n: number) => void) {
  if (valorAtual === null) valorAtual = valorInicial();
  inscritos.add(fn);
  fn(valorAtual);
  if (timer === null) agendar();
  return () => {
    inscritos.delete(fn);
    if (inscritos.size === 0 && timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  };
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

  useEffect(() => inscrever(setN), []);

  const texto = variant === "garantiram" ? "garantiram vaga hoje" : "vendo esta página agora";

  const dotCls = tone === "onAccent" ? "bg-on-accent" : "bg-accent";
  const wrapCls = tone === "onAccent" ? "opacity-90" : "text-ink-soft";
  const numCls = tone === "onAccent" ? "text-on-accent" : "text-ink";

  return (
    <div
      className={`flex items-center gap-2 whitespace-nowrap text-[13px] ${wrapCls} ${className}`}
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
