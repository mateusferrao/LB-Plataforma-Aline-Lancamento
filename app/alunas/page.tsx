import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { OQueVoceLeva } from "@/components/fresh/sections/OQueVoceLeva";
import { Hero } from "@/components/alunas/sections/Hero";
import { OQueMudou } from "@/components/alunas/sections/OQueMudou";
import { Presente } from "@/components/alunas/sections/Presente";
import { Ancora } from "@/components/alunas/sections/Ancora";
import { Oferta } from "@/components/alunas/sections/Oferta";
import { Faq } from "@/components/alunas/sections/Faq";
import { FinalCta } from "@/components/alunas/sections/FinalCta";
import { StickyCta } from "@/components/alunas/StickyCta";

// /alunas — oferta exclusiva das ex-alunas (lib/ofertaAlunas.ts, plano em
// docs/alunas/README.md). Link só pela mensagem de WhatsApp: fora do Google
// (noindex) e dos anúncios. Público quente: preço visível e CTA direto ao checkout.
export const metadata: Metadata = {
  title: "Ex-alunas · Aula ao vivo Por Dentro da Face + Protocolo de presente",
  description:
    "Exclusivo para quem já estudou com a Dra. Aline Filgueiras: a aula ao vivo de 06/10 e o Protocolo de Resgate Vascular de presente.",
  robots: { index: false, follow: false },
};

export default function Alunas() {
  return (
    <>
      <main>
        <Hero />
        <OQueMudou />
        <OQueVoceLeva />
        <Presente />
        <Ancora />
        <Oferta />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <div aria-hidden className="h-[110px] sm:hidden" />
      <StickyCta />
    </>
  );
}
