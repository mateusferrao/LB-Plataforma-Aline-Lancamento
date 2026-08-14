"use client";

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

  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5";
  // dark = CTA marsala padrão (único elemento colorido da página).
  // accent = botão claro/creme, usado DENTRO do card de oferta (fundo marsala).
  const palette =
    variant === "dark"
      ? "bg-wine text-on-wine hover:bg-wine-hover"
      : "bg-fg text-wine hover:bg-white";

  // Estado encerrado: já montou e não há lote ativo → CTA pro Instagram.
  if (montado && !lote) {
    return (
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${palette} ${className}`}
        onClick={() => {
          trackCustom("ClickProximaTurma", { content_name: "Proxima turma (Instagram)" });
          gaEvent("click_proxima_turma", {});
        }}
      >
        Quero saber da próxima turma
      </a>
    );
  }

  return (
    <a
      href={lote?.checkoutUrl ?? "#"}
      className={`${base} ${palette} ${className}`}
      onClick={() => {
        if (!lote) return;
        trackCustom("ClickCheckout", {
          content_name: "Ingresso Por Dentro da Face",
          value: lote.price,
          currency: "BRL",
        });
        gaEvent("click_checkout", { value: lote.price, currency: "BRL" });
      }}
      data-checkout
    >
      {children}
      {showPrice && (
        // Largura mínima reservada pra não dar "pop-in" antes de montar.
        <span className="inline-block min-w-[3.6em] font-serif text-[1.16rem]">
          {montado && lote ? `· ${lote.priceLabel}` : " "}
        </span>
      )}
    </a>
  );
}
