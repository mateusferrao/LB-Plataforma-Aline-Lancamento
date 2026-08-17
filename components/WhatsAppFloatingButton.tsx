"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { trackCustom, gaEvent } from "@/lib/analytics";

// Número do time (suporte + conversão de dúvidas pré-compra), formato E.164 do wa.me.
const NUMERO_WHATSAPP = "5531953491799";
const MENSAGEM = "Oi! Fiquei com uma dúvida antes de comprar a aula Por Dentro da Face.";
const WHATSAPP_URL = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;

const MARGEM_PADRAO = 20; // canto puro, sem nada mais ocupando o rodapé
const GAP = 14; // respiro acima do elemento fixo mais alto

// Mede em tempo real o que está ocupando o rodapé (barra de checkout, aviso de
// cookies) via [data-fixed-bottom-bar] e retorna o quanto o botão deve subir pra
// não sobrepor nada. Sem números mágicos por breakpoint/página: generaliza sozinho
// pra qualquer combinação (mobile/desktop, com/sem cookie, com/sem sticky bar).
function calcularBottom(): number {
  const barras = document.querySelectorAll<HTMLElement>('[data-fixed-bottom-bar="true"]');
  let maiorIntrusao = 0;
  barras.forEach((el) => {
    // Elementos com display:none (ex.: a barra desktop do StickyCta é `hidden` no
    // mobile) continuam no DOM mas com rect zerado — teriam top=0 e pareceriam
    // "ocupar a tela inteira desde o topo". Ignorar o que não está de fato
    // renderizado (diferente de só estar fora da tela via transform, que deve
    // contar normalmente).
    if (getComputedStyle(el).display === "none") return;
    const rect = el.getBoundingClientRect();
    const intrusao = window.innerHeight - rect.top;
    if (intrusao > maiorIntrusao) maiorIntrusao = intrusao;
  });
  return maiorIntrusao > 0 ? maiorIntrusao + GAP : MARGEM_PADRAO;
}

export function WhatsAppFloatingButton() {
  // Antes de montar, usa a margem padrão do canto (evita mismatch de hidratação —
  // mesmo padrão do Countdown/useLoteAtivo/ObrigadoSaudacao nesta sessão).
  const [bottom, setBottom] = useState(MARGEM_PADRAO);

  useEffect(() => {
    const recalcular = () => setBottom(calcularBottom());
    recalcular();
    window.addEventListener("scroll", recalcular, { passive: true });
    window.addEventListener("resize", recalcular);
    window.addEventListener("consent-dismissed", recalcular);
    return () => {
      window.removeEventListener("scroll", recalcular);
      window.removeEventListener("resize", recalcular);
      window.removeEventListener("consent-dismissed", recalcular);
    };
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com nosso time no WhatsApp"
      onClick={() => {
        trackCustom("ClickWhatsAppSuporte", { content_name: "Suporte WhatsApp" });
        gaEvent("click_whatsapp_suporte", {});
      }}
      style={{ bottom }}
      className="group fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-[bottom,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1ebe5d] sm:right-6"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 w-[200px] rounded-[6px] border border-line bg-bg-2 px-3 py-2 text-left text-[13px] leading-[1.4] text-fg opacity-0 shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        Ficou com dúvida ou precisa de ajuda? Fala com a gente!
      </span>
      <WhatsAppIcon size={28} />
    </a>
  );
}
