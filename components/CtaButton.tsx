"use client";

import { useLoteAtivo } from "@/lib/useLoteAtivo";
import { useVslGate } from "@/lib/useVslGate";
import { trackCustom, gaEvent } from "@/lib/analytics";

const INSTAGRAM_URL = "https://www.instagram.com/draaline_filgueiras";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
  // Quando true, anexa " · R$XX" do lote ativo ao final do texto.
  showPrice?: boolean;
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

// O repasse de UTM/params para o checkout é feito pelo script oficial da Ticto
// (ticto-echo), montado no layout. Aqui apontamos pra URL do LOTE ATIVO e
// disparamos o evento de intenção (ClickCheckout) com o preço do lote.
// Fora dos lotes (encerrado), o botão vira um CTA pro Instagram da Aline.
export function CtaButton({
  children,
  variant = "dark",
  className = "",
  showPrice = false,
  requireVsl = false,
}: Props) {
  const { lote, montado, antes } = useLoteAtivo();
  const { completed: vslCompleted, remainingSeconds } = useVslGate();
  const locked = requireVsl && !vslCompleted;

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
  let isCheckout = false;
  let label: React.ReactNode = children;
  let track: () => void = () => {};

  if (montado && !lote && antes) {
    href = INSTAGRAM_URL;
    external = true;
    label = "Quero ser avisado quando abrir";
    track = () => {
      trackCustom("ClickProximaTurma", { content_name: "Proxima turma (Instagram)" });
      gaEvent("click_proxima_turma", {});
    };
  } else if (montado && !lote) {
    // Estado encerrado: já montou e não há lote ativo → CTA pro Instagram.
    href = INSTAGRAM_URL;
    external = true;
    label = "Quero saber da próxima turma";
    track = () => {
      trackCustom("ClickProximaTurma", { content_name: "Proxima turma (Instagram)" });
      gaEvent("click_proxima_turma", {});
    };
  } else {
    href = lote?.checkoutUrl ?? "#";
    isCheckout = true;
    label = (
      <>
        {children}
        {showPrice && montado && lote && (
          <span className="font-serif text-[1.16rem]">· {lote.priceLabel}</span>
        )}
      </>
    );
    track = () => {
      if (!lote) return;
      trackCustom("ClickCheckout", {
        content_name: "Ingresso Por Dentro da Face",
        value: lote.price,
        currency: "BRL",
      });
      gaEvent("click_checkout", { value: lote.price, currency: "BRL" });
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
        }}
        data-checkout={isCheckout || undefined}
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
