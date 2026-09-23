"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gaEvent, track, trackCustom } from "@/lib/analytics";
import {
  AREAS,
  TRATAMENTOS,
  corrigirIngresso,
  emitirIngresso,
  fecharIngresso,
  nomeNoIngresso,
  useIngresso,
  type Area,
  type Ingresso,
  type Tratamento,
} from "@/lib/ingresso";
import { useLoteAtivo } from "@/lib/useLoteAtivo";
import { RESERVA_DURACAO_MS, two, useReservaRestante } from "@/components/ReservaTimer";

// Modal do fluxo "emitir ingresso antes de ver o preço" (aberto pelo CtaButton).
// Etapa 1: tratamento + nome + área. Etapa 2: ingresso emitido com o nome da
// visitante, o preço do lote ativo e o botão que leva ao checkout da Ticto.
// Montado uma vez por página (app/page.tsx e app/sem-vsl/page.tsx).
export function IngressoModal() {
  const { aberto, etapa, ingresso } = useIngresso();
  const tituloId = useId();
  const painelRef = useRef<HTMLDivElement>(null);

  // Esc fecha, trava a rolagem do fundo e devolve o foco pra quem abriu.
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fecharIngresso();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      anterior?.focus?.();
    };
  }, [aberto]);

  // A cada troca de etapa, volta o painel pro topo e foca o primeiro campo/ação.
  useEffect(() => {
    if (!aberto) return;
    const painel = painelRef.current;
    if (!painel) return;
    painel.scrollTop = 0;
    painel.querySelector<HTMLElement>("[data-autofocus]")?.focus();
  }, [aberto, etapa]);

  if (!aberto) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) fecharIngresso();
      }}
    >
      <div
        ref={painelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        className="relative max-h-[100dvh] w-full max-w-[460px] overflow-y-auto rounded-t-[10px] border border-line bg-bg-2 px-6 pt-8 pb-7 sm:max-h-[calc(100dvh-48px)] sm:rounded-[8px] sm:px-8"
      >
        <button
          type="button"
          onClick={fecharIngresso}
          aria-label="Fechar"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center text-[1.6rem] leading-none text-fg-faint transition-colors hover:text-fg"
        >
          ×
        </button>

        {etapa === "ingresso" && ingresso ? (
          <IngressoEmitido ingresso={ingresso} tituloId={tituloId} />
        ) : (
          <FormIngresso inicial={ingresso} tituloId={tituloId} />
        )}
      </div>
    </div>
  );
}

function Chip({
  ativo,
  onClick,
  children,
}: {
  ativo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={`rounded-full border px-4 py-2 text-[0.98rem] transition-colors ${
        ativo
          ? "border-wine bg-wine text-on-wine"
          : "border-line bg-bg-3 text-fg-soft hover:border-wine-ink hover:text-fg"
      }`}
    >
      {children}
    </button>
  );
}

function FormIngresso({
  inicial,
  tituloId,
}: {
  inicial: Ingresso | null;
  tituloId: string;
}) {
  const [tratamento, setTratamento] = useState<Tratamento>(
    inicial?.tratamento ?? "Só o nome",
  );
  const [nome, setNome] = useState(inicial?.nome ?? "");
  const [area, setArea] = useState<Area | null>(inicial?.area ?? null);
  const [tentou, setTentou] = useState(false);
  const nomeId = useId();

  const nomeValido = nome.trim().length >= 2;
  const valido = nomeValido && area !== null;

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setTentou(true);
        if (!valido || !area) return;
        emitirIngresso({ tratamento, nome, area });
        // Sem dados pessoais no pixel — só a área, que ajuda a segmentar.
        track("Lead", { content_name: "Ingresso Por Dentro da Face", area });
        gaEvent("generate_lead", { area });
      }}
    >
      <div className="text-center">
        <span className="text-[11.5px] font-semibold tracking-[0.2em] text-wine-ink uppercase">
          Ao vivo · 6 de outubro · vagas limitadas
        </span>
        <h2
          id={tituloId}
          className="mt-3 font-serif font-semibold text-[1.9rem] leading-tight text-fg"
        >
          Emita seu ingresso
        </h2>
        <p className="mx-auto mt-2 max-w-[340px] text-[1rem] leading-[1.5] text-fg-soft">
          Preencha como você quer aparecer no seu ingresso da aula ao vivo.
        </p>
      </div>

      <fieldset className="mt-7">
        <legend className="text-[11.5px] font-semibold tracking-[0.18em] text-fg-faint uppercase">
          Tratamento
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TRATAMENTOS.map((t) => (
            <Chip key={t} ativo={tratamento === t} onClick={() => setTratamento(t)}>
              {t}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label
          htmlFor={nomeId}
          className="text-[11.5px] font-semibold tracking-[0.18em] text-fg-faint uppercase"
        >
          Seu nome
        </label>
        <input
          id={nomeId}
          data-autofocus
          type="text"
          autoComplete="name"
          placeholder="Ex.: Ana Souza"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          aria-invalid={tentou && !nomeValido}
          className="mt-3 block w-full rounded-[4px] border border-line bg-bg px-4 py-3.5 text-[1.05rem] text-fg placeholder:text-fg-faint focus:border-wine-ink focus:outline-none"
        />
        {tentou && !nomeValido && (
          <p className="mt-2 text-[0.88rem] text-wine-ink">Escreva seu nome.</p>
        )}
      </div>

      <fieldset className="mt-6">
        <legend className="text-[11.5px] font-semibold tracking-[0.18em] text-fg-faint uppercase">
          Sua área
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <Chip key={a} ativo={area === a} onClick={() => setArea(a)}>
              {a}
            </Chip>
          ))}
        </div>
        {tentou && area === null && (
          <p className="mt-2 text-[0.88rem] text-wine-ink">Escolha sua área.</p>
        )}
      </fieldset>

      <button
        type="submit"
        className="mt-8 w-full rounded-[2px] bg-wine px-6 py-[18px] font-sans text-[1.02rem] font-semibold text-on-wine transition-colors hover:bg-wine-hover"
      >
        Emitir meu ingresso
      </button>
      <p className="mt-3 text-center text-[11.5px] tracking-[0.08em] text-fg-faint uppercase">
        Leva 10 segundos · seus dados ficam só no seu navegador
      </p>
    </form>
  );
}

// Código de barras decorativo (larguras fixas, sem significado).
const BARRAS = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 2];

function IngressoEmitido({
  ingresso,
  tituloId,
}: {
  ingresso: Ingresso;
  tituloId: string;
}) {
  const { lote, montado } = useLoteAtivo();
  const restanteMs = useReservaRestante();
  const expirado = restanteMs !== null && restanteMs <= 0;
  const progresso = restanteMs === null ? 1 : restanteMs / RESERVA_DURACAO_MS;
  const temDesconto = !!(lote?.precoDe && lote.precoDeLabel && lote.precoDe > lote.price);
  const pctDesconto =
    lote?.precoDe && temDesconto ? Math.round((1 - lote.price / lote.precoDe) * 100) : 0;

  return (
    <div>
      <h2
        id={tituloId}
        className="text-center text-[11.5px] font-semibold tracking-[0.2em] text-wine-ink uppercase"
      >
        Seu ingresso foi emitido
      </h2>

      {/* Ingresso: cartão creme sobre o modal escuro, com "picote" no meio. */}
      <div className="relative mt-5 overflow-hidden rounded-[10px] bg-fg text-bg">
        <div className="px-6 pt-6 pb-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-serif text-[1.35rem] leading-tight font-semibold">
                Por Dentro da Face
              </div>
              <div className="mt-1 text-[10.5px] font-semibold tracking-[0.18em] text-bg/60 uppercase">
                Aula online e ao vivo
              </div>
            </div>
            <span className="shrink-0 rounded-[3px] border border-wine px-2 py-1 text-[10px] font-semibold tracking-[0.14em] text-wine uppercase">
              Vagas limitadas
            </span>
          </div>

          <div className="mt-5 text-[10.5px] font-semibold tracking-[0.18em] text-bg/60 uppercase">
            Participante
          </div>
          <div className="mt-1 font-serif text-[2rem] leading-tight font-semibold break-words uppercase">
            {nomeNoIngresso(ingresso)}
          </div>
          <div className="mt-0.5 text-[1rem] font-medium text-wine">{ingresso.area}</div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["Data", "06/10"],
              ["Horário", "20h"],
              ["Formato", "Ao vivo"],
            ].map(([rotulo, valor]) => (
              <div key={rotulo}>
                <div className="text-[10px] font-semibold tracking-[0.16em] text-bg/60 uppercase">
                  {rotulo}
                </div>
                <div className="mt-1 font-serif text-[1.2rem] font-semibold">{valor}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Picote: linha tracejada com os dois "furos" da cor do modal. */}
        <div className="relative h-0 border-t-2 border-dashed border-bg/20" aria-hidden="true">
          <span className="absolute -top-[11px] -left-[11px] h-5 w-5 rounded-full bg-bg-2" />
          <span className="absolute -top-[11px] -right-[11px] h-5 w-5 rounded-full bg-bg-2" />
        </div>

        <div className="flex items-end justify-between gap-4 px-6 pt-5 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-wine uppercase">
              <span className="h-2 w-2 rounded-full bg-wine" aria-hidden="true" />
              Aguardando confirmação
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[0.9rem] text-bg/70">Investimento</span>
              <span className="font-serif text-[1.7rem] leading-none font-semibold">
                {montado && lote ? lote.priceLabel : "—"}
              </span>
            </div>
            {montado && lote && (
              <div className="mt-1 text-[0.85rem] text-bg/70">
                ou 12x de {lote.parcela12x} no cartão
              </div>
            )}
          </div>
          <div className="flex h-12 shrink-0 items-stretch gap-[2px]" aria-hidden="true">
            {BARRAS.map((w, i) => (
              <span key={i} className="bg-bg" style={{ width: `${w}px` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Desconto da emissão — mesmo cronômetro da reserva da barra fixa
          (sessionStorage, não reinicia no refresh). Sem precoDe no lote, vira
          só a reserva da vaga. */}
      <div className="mt-5 rounded-[8px] border border-line bg-bg-3 px-5 py-5 text-center">
        {montado && lote && temDesconto && (
          <div className="mb-4">
            <p className="text-[1.05rem] text-fg">Você emitiu seu ingresso e ganhou</p>
            <p className="mt-0.5 font-serif text-[1.6rem] leading-tight font-semibold text-wine-ink">
              {pctDesconto}% de desconto
            </p>
            <p className="mt-1 text-[1rem] text-fg-soft">
              De <s className="text-fg-faint">{lote.precoDeLabel}</s> por{" "}
              <strong className="font-semibold text-fg">{lote.priceLabel}</strong>
            </p>
          </div>
        )}
        {expirado ? (
          <p className="font-serif text-[1.15rem] text-fg">
            Confirme agora para garantir seu ingresso por{" "}
            {montado && lote ? lote.priceLabel : "este valor"}.
          </p>
        ) : (
          <>
            <p className="text-[1rem] text-fg-soft">
              {temDesconto ? "Desconto válido por" : "Seu lugar na sala fica reservado por"}
            </p>
            <div
              className="mt-1 font-serif text-[2.2rem] leading-none text-wine-ink tabular-nums"
              aria-live="off"
            >
              {restanteMs === null
                ? "--:--"
                : `${two(Math.floor(restanteMs / 60000))}:${two(
                    Math.floor((restanteMs % 60000) / 1000),
                  )}`}
            </div>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
              <div
                className="h-full rounded-full bg-wine-ink transition-[width] duration-1000 ease-linear"
                style={{ width: `${Math.max(0, Math.min(1, progresso)) * 100}%` }}
              />
            </div>
          </>
        )}
        <p className="mt-4 text-[0.9rem] text-fg-faint">
          Reembolso em 7 dias, sem perguntas.
        </p>
      </div>

      {montado && lote ? (
        <a
          href={lote.checkoutUrl}
          data-autofocus
          data-checkout
          onClick={() => {
            trackCustom("ClickCheckout", {
              content_name: "Ingresso Por Dentro da Face",
              value: lote.price,
              currency: "BRL",
            });
            gaEvent("click_checkout", { value: lote.price, currency: "BRL" });
          }}
          className="mt-5 block w-full rounded-[2px] bg-wine px-6 py-[18px] text-center font-sans text-[1.02rem] font-semibold text-on-wine transition-colors hover:bg-wine-hover"
        >
          Confirmar meu ingresso
        </a>
      ) : (
        montado && (
          <p className="mt-5 text-center text-fg-soft">As inscrições desta turma foram encerradas.</p>
        )
      )}

      <button
        type="button"
        onClick={corrigirIngresso}
        className="mx-auto mt-4 block text-[0.9rem] text-fg-faint underline underline-offset-4 hover:text-fg"
      >
        Corrigir meus dados
      </button>
    </div>
  );
}
