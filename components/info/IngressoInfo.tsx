"use client";

import { IngressoModal, type TextosIngresso } from "@/components/lp2/IngressoModal";
import { AncoraIngresso } from "@/components/info/AncoraIngresso";
import { useOfertaKit } from "@/lib/useOfertaKit";

// Ingresso da /info: o mesmo modal da /lp2 e da /fresh, com a oferta do
// Protocolo (lib/ofertaKit.ts) no lugar do lote da aula. Só existe enquanto a
// aula de presente faz parte da oferta: sem aula, não há ingresso, e o CTA vai
// direto ao checkout (components/info/CtaButton.tsx).
const TEXTOS: TextosIngresso = {
  formEyebrow: "Protocolo + aula ao vivo · 6 de outubro",
  formSubtitulo:
    "Preencha como você quer aparecer no seu ingresso da aula ao vivo. O Protocolo vem junto.",
  titulo: "Resgate Vascular",
  subtitulo: "Protocolo + aula ao vivo",
  selo: "Acesso imediato",
  detalhes: [
    ["Protocolo", "Na hora"],
    ["Aula", "06/10"],
    ["Horário", "20h"],
  ],
  reserva: "Sua vaga na aula de presente fica reservada por",
  contentName: "Protocolo de Resgate Vascular",
  rastreio: { produto: "kit-protocolo", fase: "comBonus" },
};

export function IngressoInfo() {
  const { fase, montado } = useOfertaKit();
  const dados =
    fase?.id === "comBonus" && fase.checkoutUrl
      ? {
          price: fase.price,
          priceLabel: fase.priceLabel,
          parcela12x: fase.parcela12x,
          checkoutUrl: fase.checkoutUrl,
        }
      : null;

  return (
    <IngressoModal
      mostrarDesconto={false}
      oferta={{ montado, dados }}
      textos={TEXTOS}
      ancora={<AncoraIngresso />}
    />
  );
}
