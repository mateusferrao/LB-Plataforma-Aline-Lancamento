import type { Metadata } from "next";
import { Hero } from "@/components/info/sections/Hero";
import { Problem } from "@/components/info/sections/Problem";
import { Conteudo } from "@/components/info/sections/Conteudo";
import { ComoUsar } from "@/components/info/sections/ComoUsar";
import { CardPaciente } from "@/components/info/sections/CardPaciente";
import { BonusAula } from "@/components/info/sections/BonusAula";
import { Authority } from "@/components/sections/Authority";
import { SocialProof } from "@/components/lp2/sections/SocialProof";
import { ParaQuem } from "@/components/info/sections/ParaQuem";
import { Offer } from "@/components/info/sections/Offer";
import { Faq } from "@/components/info/sections/Faq";
import { FinalCta } from "@/components/info/sections/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/info/StickyCta";

// /info: LP do kit "Mapa das Intercorrências" como produto principal, com a
// aula ao vivo Por Dentro da Face de bônus até 06/10. Preço, checkout e fases
// da oferta vivem em lib/ofertaKit.ts. Estratégia e copy anotada em
// docs/info/README.md. Sem VSL: o kit não tem vídeo e a urgência real é a
// data da aula. Componentes próprios em components/info/; Authority e
// SocialProof são reaproveitados das outras LPs.
export const metadata: Metadata = {
  title: "Mapa das Intercorrências na Harmonização Facial · Dra. Aline Filgueiras",
  description:
    "4 pranchas para imprimir com as zonas de risco da face, os sinais de alerta e a conduta imediata. De bônus, a aula ao vivo Por Dentro da Face (06/10).",
  openGraph: {
    title: "Mapa das Intercorrências na Harmonização Facial · Dra. Aline Filgueiras",
    description:
      "Saiba em segundos se o que você vê na paciente é normal ou é alerta, e o que fazer nos primeiros minutos.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Info() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Conteudo />
        <ComoUsar />
        <CardPaciente />
        <BonusAula />
        <Authority />
        <SocialProof />
        <ParaQuem />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <div aria-hidden className="h-[122px] sm:hidden" />
      <StickyCta />
    </>
  );
}
