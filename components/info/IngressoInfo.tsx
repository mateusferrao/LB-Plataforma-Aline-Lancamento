"use client";

import { IngressoModal, type TextosIngresso } from "@/components/lp2/IngressoModal";
import { AncoraIngresso } from "@/components/info/AncoraIngresso";
import { useOfertaKit } from "@/lib/useOfertaKit";

// Ingresso da /info: o mesmo modal da /lp2 e da /fresh, com a oferta do
// Protocolo (lib/ofertaKit.ts) no lugar do lote da aula. O Protocolo é o
// produto principal em todos os textos; o ingresso é o da aula de presente,
// anunciado antes do clique (LinhaGarantia, card e passos da oferta). Só existe
// enquanto a aula faz parte da oferta: sem aula, não há ingresso, e o CTA vai
// direto ao checkout (components/info/CtaButton.tsx).
const TEXTOS: TextosIngresso = {
  formEyebrow: "Protocolo + aula de presente",
  formTitulo: "Seu Protocolo está separado",
  formSubtitulo:
    "Falta só o ingresso da aula ao vivo que vem de presente. Preencha como você quer aparecer nele.",
  formBotao: "Emitir ingresso e ver o valor",
  emitido: "Seu Protocolo + ingresso",
  titulo: "Protocolo de Resgate Vascular",
  subtitulo: "+ ingresso da aula ao vivo de presente",
  confirmar: "Garantir meu Protocolo + ingresso",
  detalhes: [
    ["Protocolo", "Na hora"],
    ["Aula", "06/10"],
    ["Horário", "20h"],
  ],
  reserva: "Sua vaga na aula fica reservada por",
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
