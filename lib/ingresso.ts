"use client";

import { useSyncExternalStore } from "react";

// Estado do fluxo "emitir ingresso antes de ver o preço": o CTA da página abre
// o modal, a visitante preenche nome/área, vê o ingresso emitido com o preço e
// só então vai pro checkout. Singleton de módulo + useSyncExternalStore, sem
// Context (o projeto não usa Context em lugar nenhum).
//
// Os dados ficam SÓ no navegador (localStorage) — é o que a microcopy do modal
// promete. Nada é enviado pra servidor nem pro pixel (o evento Lead vai sem
// dados pessoais). Quem volta à página reencontra o próprio ingresso.
const KEY = "lp_ingresso";

export const TRATAMENTOS = ["Dra.", "Dr.", "Só o nome"] as const;
export type Tratamento = (typeof TRATAMENTOS)[number];

// Ordem pelo peso de cada profissão na pesquisa de público.
export const AREAS = [
  "Biomedicina",
  "Odontologia",
  "Enfermagem",
  "Farmácia",
  "Estética",
  "Outra",
] as const;
export type Area = (typeof AREAS)[number];

export type Ingresso = {
  tratamento: Tratamento;
  nome: string;
  area: Area;
};

type State = {
  aberto: boolean;
  // "form" = emitindo/corrigindo; "ingresso" = ingresso emitido + preço.
  etapa: "form" | "ingresso";
  ingresso: Ingresso | null;
};

let state: State = { aberto: false, etapa: "form", ingresso: null };
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function isIngresso(v: unknown): v is Ingresso {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return (
    TRATAMENTOS.includes(o.tratamento as Tratamento) &&
    typeof o.nome === "string" &&
    o.nome.trim().length > 0 &&
    AREAS.includes(o.area as Area)
  );
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const salvo = window.localStorage.getItem(KEY);
    if (!salvo) return;
    const parsed: unknown = JSON.parse(salvo);
    if (isIngresso(parsed)) state = { ...state, ingresso: parsed };
  } catch {
    // localStorage indisponível ou valor corrompido — segue sem ingresso salvo.
  }
}

// Abre o modal direto no ingresso se já foi emitido; senão, no formulário.
export function abrirIngresso() {
  hydrate();
  state = { ...state, aberto: true, etapa: state.ingresso ? "ingresso" : "form" };
  emit();
}

export function fecharIngresso() {
  state = { ...state, aberto: false };
  emit();
}

export function corrigirIngresso() {
  state = { ...state, etapa: "form" };
  emit();
}

export function emitirIngresso(ingresso: Ingresso) {
  const limpo = { ...ingresso, nome: ingresso.nome.trim().replace(/\s+/g, " ") };
  state = { ...state, etapa: "ingresso", ingresso: limpo };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(limpo));
  } catch {}
  emit();
}

// Nome como aparece no ingresso: tratamento + primeiro nome ("Dra. Ana").
export function nomeNoIngresso({ tratamento, nome }: Ingresso): string {
  const primeiro = nome.trim().split(/\s+/)[0] ?? "";
  return tratamento === "Só o nome" ? primeiro : `${tratamento} ${primeiro}`;
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
const SERVER_SNAPSHOT: State = { aberto: false, etapa: "form", ingresso: null };

function getServerSnapshot(): State {
  return SERVER_SNAPSHOT;
}

export function useIngresso(): State {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
