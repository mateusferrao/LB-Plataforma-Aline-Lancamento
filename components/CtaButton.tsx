"use client";

import { agora, LIVE_DATE_ISO } from "@/lib/lotes";
import { useLoteAtivo } from "@/lib/useLoteAtivo";
import { trackCustom, gaEvent } from "@/lib/analytics";

const INSTAGRAM_URL = "https://www.instagram.com/draaline_filgueiras";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
  // Quando true, anexa " · R$XX" do lote ativo ao final do texto.
  showPrice?: boolean;
};

// O repasse de UTM/params para o checkout é feito pelo script oficial da Ticto
// (ticto-echo), montado no layout. Aqui apontamos pra URL do LOTE ATIVO e
// disparamos o evento de intenção (ClickCheckout) com o preço do lote.
// Fora dos lotes (encerrado), o botão vira um CTA pro Instagram da Aline.
export function CtaButton({
  children,
  variant = "dark",
  className = "",
  showPrice = false,
}: Props) {
  const { lote, montado } = useLoteAtivo();
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

  // Resolve o estado do botão: destino, se é link externo, rótulo e o que
  // rastrear no clique.
  let href: string;
  let external = false;
  let isCheckout = false;
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

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${palette} ${className}`}
      onClick={track}
      data-checkout={isCheckout || undefined}
    >
      {label}
    </a>
  );
}
