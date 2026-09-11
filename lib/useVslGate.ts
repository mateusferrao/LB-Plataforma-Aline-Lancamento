"use client";

import { useSyncExternalStore } from "react";

// Trava só o CTA do Hero até a VSL terminar. Estado compartilhado como
// singleton de módulo (não Context — o projeto não usa Context em lugar
// nenhum, o padrão daqui é hook standalone em lib/, como useLoteAtivo).
// Persiste em sessionStorage (mesmo padrão do ReservaTimer) pra quem já
// assistiu não ser re-bloqueado em refresh/scroll na mesma sessão.
const KEY = "lp_vsl_completed";

type State = {
  completed: boolean;
  remainingSeconds: number | null;
};

let state: State = { completed: false, remainingSeconds: null };
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    if (window.sessionStorage.getItem(KEY) === "1") {
      state = { completed: true, remainingSeconds: 0 };
    }
  } catch {
    // sessionStorage indisponível (modo privado etc.) — segue sem persistir.
  }
}

export function markVslCompleted() {
  if (state.completed) return;
  state = { completed: true, remainingSeconds: 0 };
  try {
    window.sessionStorage.setItem(KEY, "1");
  } catch {}
  emit();
}

export function setVslRemaining(seconds: number) {
  if (state.completed) return;
  const next = Math.max(0, Math.ceil(seconds));
  if (next === state.remainingSeconds) return;
  state = { ...state, remainingSeconds: next };
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): State {
  hydrate();
  return state;
}

// Referência estável (mesmo objeto sempre) — getServerSnapshot precisa
// devolver sempre a mesma referência, senão o useSyncExternalStore entende
// que o snapshot mudou a cada chamada e entra em loop de re-render.
const SERVER_SNAPSHOT: State = { completed: false, remainingSeconds: null };

function getServerSnapshot(): State {
  return SERVER_SNAPSHOT;
}

export function useVslGate(): State {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
