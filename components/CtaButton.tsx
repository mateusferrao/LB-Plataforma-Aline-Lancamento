"use client";

import { agora, LIVE_DATE_ISO } from "@/lib/lotes";
import { abrirIngresso } from "@/lib/ingresso";
import { useLoteAtivo } from "@/lib/useLoteAtivo";
import { useVslGate } from "@/lib/useVslGate";
import { trackCustom, gaEvent } from "@/lib/analytics";

const INSTAGRAM_URL = "https://www.instagram.com/draaline_filgueiras";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
  // Quando true, o botão fica travado (aria-disabled, sem navegar) até a
  // VSL do Hero terminar — em qualquer estado (checkout, aviso ou
  // encerrado). Passado em todas as instâncias do CtaButton na página.
  requireVsl?: boolean;
};

function two(n: number) {
  return String(n).padStart(2, "0");
}

function formatRemaining(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${two(s)}`;
}

// Com inscrições abertas, o botão NÃO vai direto pro checkout: abre o modal de
// emitir ingresso (components/IngressoModal.tsx), que só mostra o preço e o
// link do checkout depois que a visitante emite o ingresso. O ClickCheckout
// agora dispara lá, no "Confirmar meu ingresso".
// Fora dos lotes (antes de abrir ou encerrado), vira um CTA pro Instagram.
export function CtaButton({
  children,
  variant = "dark",
  className = "",
  requireVsl = false,
}: Props) {
  const { lote, montado } = useLoteAtivo();
  const { completed: vslCompleted, remainingSeconds } = useVslGate();
  const locked = requireVsl && !vslCompleted;
  // Fora da janela de inscrições: antes de abrir ou depois da aula já ter
  // chegado. Não dá pra usar só "!lote" pra isso (mesmo teste em ambos os
  // casos) — precisa comparar com a chegada da aula (mesmo critério do
  // Countdown, ver components/Countdown.tsx).
  const encerrado = montado && !lote && agora() >= Date.parse(LIVE_DATE_ISO);

  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5";
  // dark = CTA marsala padrão (único elemento colorido da página).
  // accent = botão claro/creme, usado DENTRO do card de oferta (fundo marsala).
  const palette =
    variant === "dark"
      ? "bg-wine text-on-wine hover:bg-wine-hover"
      : "bg-fg text-wine hover:bg-white";

  // Resolve o estado "normal" (fora do gate da VSL): destino, se é link
  // externo, rótulo e o que rastrear no clique. O gate é aplicado por cima,
  // igual pra qualquer um desses três estados.
  let href: string;
  let external = false;
  let abreIngresso = false;
  let label: React.ReactNode = children;
  let track: () => void = () => {};

  if (montado && !lote && !encerrado) {
    href = INSTAGRAM_URL;
    external = true;
    label = "Quero ser avisado quando abrir";
    track = () => {
      trackCustom("ClickProximaTurma", { content_name: "Proxima turma (Instagram)" });
      gaEvent("click_proxima_turma", {});
    };
  } else if (encerrado) {
    // Estado encerrado: já montou, sem lote ativo e a aula já chegou → CTA pro Instagram.
    href = INSTAGRAM_URL;
    external = true;
    label = "Quero saber da próxima turma";
    track = () => {
      trackCustom("ClickProximaTurma", { content_name: "Proxima turma (Instagram)" });
      gaEvent("click_proxima_turma", {});
    };
  } else {
    href = "#ingresso";
    abreIngresso = true;
    track = () => {
      trackCustom("AbrirIngresso", { content_name: "Ingresso Por Dentro da Face" });
      gaEvent("open_ingresso", {});
    };
  }

  if (locked) {
    label = (
      <>
        Assista o vídeo acima
        {remainingSeconds !== null && (
          <span className="font-serif text-[1.02rem] tabular-nums">
            · libera em {formatRemaining(remainingSeconds)}
          </span>
        )}
      </>
    );
  }

  return (
    <>
      <a
        href={href}
        target={external && !locked ? "_blank" : undefined}
        rel={external && !locked ? "noopener noreferrer" : undefined}
        className={`${base} ${palette} ${
          locked ? "cursor-not-allowed opacity-55 hover:translate-y-0" : ""
        } ${className}`}
        aria-disabled={locked || undefined}
        onClick={(e) => {
          if (locked) {
            e.preventDefault();
            return;
          }
          track();
          if (abreIngresso) {
            e.preventDefault();
            abrirIngresso();
          }
        }}
        aria-haspopup={abreIngresso ? "dialog" : undefined}
      >
        {label}
      </a>
      {requireVsl && (
        <span role="status" aria-live="polite" className="sr-only">
          {vslCompleted ? "Vídeo concluído. Você já pode continuar." : ""}
        </span>
      )}
    </>
  );
}
