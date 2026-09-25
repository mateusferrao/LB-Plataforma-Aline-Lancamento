import type { Metadata } from "next";
import { Hero } from "@/components/lp2/sections/Hero";
import { Problem } from "@/components/lp2/sections/Problem";
import { TresCamadas } from "@/components/lp2/sections/TresCamadas";
import { ParaQuem } from "@/components/lp2/sections/ParaQuem";
import { Solution } from "@/components/lp2/sections/Solution";
import { SocialProof } from "@/components/lp2/sections/SocialProof";
import { Authority } from "@/components/sections/Authority";
import { Offer } from "@/components/lp2/sections/Offer";
import { Faq } from "@/components/lp2/sections/Faq";
import { FinalCta } from "@/components/lp2/sections/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/lp2/StickyCta";
import { IngressoModal } from "@/components/lp2/IngressoModal";

// /lp2/sem-vsl — versão B do teste de LP na variante SEM VSL (foto estática
// no Hero). Estrutura idêntica a app/lp2/page.tsx (COM VSL); só muda o
// `comVsl` do Hero. Par da /sem-vsl da versão A.
export const metadata: Metadata = {
  title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras · 06/10",
  description:
    "Entenda as 3 camadas que ninguém te mostrou e pare de ter resultado diferente em cada rosto. Aula ao vivo com a Dra. Aline Filgueiras, direto da mesa de dissecção. 6 de outubro, 20h.",
  openGraph: {
    title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras",
    description:
      "Entenda as 3 camadas que ninguém te mostrou e pare de ter resultado diferente em cada rosto. 6 de outubro, 20h, ao vivo.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Lp2SemVsl() {
  return (
    <>
      <main>
        <Hero comVsl={false} />
        <Problem />
        <TresCamadas />
        <Solution />
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
      <IngressoModal />
    </>
  );
}
