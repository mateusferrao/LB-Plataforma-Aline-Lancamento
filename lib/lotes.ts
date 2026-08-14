// ============================================================================
//  LOTES DO EVENTO — FONTE ÚNICA DA VERDADE
//  Para mudar datas, preços ou links do checkout, edite SÓ o array LOTES abaixo.
//  Depois é só dar commit no GitHub: o deploy roda sozinho (~1-2 min).
//
//  Regras:
//   - As datas são no fuso de Brasília (o "-03:00" no final garante isso).
//   - `endsAt` de um lote deve ser igual ao `startsAt` do próximo (sem buraco).
//   - `price` é só número (usado no tracking); `priceLabel` é o texto exibido.
//   - `checkoutUrl` é o link do checkout Ticto daquele lote.
//   - Fora de qualquer lote (antes do 1º ou depois do último), o botão bloqueia.
// ============================================================================

export type Lote = {
  n: number;
  price: number;
  priceLabel: string;
  startsAt: string; // ISO com fuso de Brasília, ex: "2026-08-12T00:00:00-03:00"
  endsAt: string;
  checkoutUrl: string;
};

export const LOTES: Lote[] = [
  {
    n: 1,
    price: 67,
    priceLabel: "R$67",
    startsAt: "2026-08-12T00:00:00-03:00",
    endsAt: "2026-08-28T00:00:00-03:00",
    checkoutUrl: "https://payment.ticto.app/O26600803",
  },
  {
    n: 2,
    price: 77,
    priceLabel: "R$77",
    startsAt: "2026-08-28T00:00:00-03:00",
    endsAt: "2026-09-04T00:00:00-03:00",
    checkoutUrl: "https://payment.ticto.app/OD322CA54",
  },
  {
    n: 3,
    price: 87,
    priceLabel: "R$87",
    startsAt: "2026-09-04T00:00:00-03:00",
    endsAt: "2026-09-11T00:00:00-03:00",
    checkoutUrl: "https://payment.ticto.app/O47BB1FA1",
  },
  {
    n: 4,
    price: 97,
    priceLabel: "R$97",
    startsAt: "2026-09-11T00:00:00-03:00",
    endsAt: "2026-09-24T20:00:00-03:00", // encerra no início da aula (24/09, 20h)
    checkoutUrl: "https://payment.ticto.app/OA516687A",
  },
];

// Data/hora da aula ao vivo (= fim do último lote). Usada em textos e no fim do
// contador no último lote. Se mudar a data da aula, ajuste também o endsAt do L4.
export const LIVE_DATE_ISO = "2026-09-24T20:00:00-03:00";

// Total de lotes, para o rótulo "Lote X de N".
export const TOTAL_LOTES = LOTES.length;

// Último lote (preço-teto). Usado no "sobe até R$97".
export const LOTE_TETO = LOTES[LOTES.length - 1];

// ---------------------------------------------------------------------------
//  Resolvers puros (testáveis, sem estado)
// ---------------------------------------------------------------------------

/** Lote ativo para um instante (ms). null se estiver fora de todos os lotes. */
export function loteAtivoEm(ts: number): Lote | null {
  return (
    LOTES.find(
      (l) => ts >= Date.parse(l.startsAt) && ts < Date.parse(l.endsAt),
    ) ?? null
  );
}

/** Próximo lote depois de um dado lote (por número). null se for o último. */
export function proximoLoteDe(lote: Lote | null): Lote | null {
  if (!lote) return null;
  return LOTES.find((l) => l.n === lote.n + 1) ?? null;
}

/** Formata a data de início de um lote como "dd/mm" (fuso de Brasília). */
export function formatDiaMes(iso: string): string {
  const d = new Date(iso);
  // Usa o fuso de São Paulo para casar com as datas dos lotes.
  const parts = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).formatToParts(d);
  const dia = parts.find((p) => p.type === "day")?.value ?? "";
  const mes = parts.find((p) => p.type === "month")?.value ?? "";
  return `${dia}/${mes}`;
}

// "Agora" em ms, com override de QA: ?preview=<ISO> força um instante fixo
// (ex.: ?preview=2026-08-29T10:00:00-03:00) para pré-visualizar qualquer lote/estado
// sem mexer no relógio. No servidor (sem window) e sem o parâmetro, é só Date.now().
export function agora(): number {
  if (typeof window !== "undefined") {
    const p = new URLSearchParams(window.location.search).get("preview");
    if (p) {
      const t = Date.parse(p);
      if (Number.isFinite(t)) return t;
    }
  }
  return Date.now();
}

// O hook client useLoteAtivo() vive em lib/useLoteAtivo.ts (este arquivo é puro,
// para poder ser importado também por Server Components como o MetaPixel).
