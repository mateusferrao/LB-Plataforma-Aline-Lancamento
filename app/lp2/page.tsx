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

// /lp2 — versão B do teste A/B de LP (a versão A é a rota /, em app/page.tsx).
// Copy nova, seções As 3 camadas e Pra quem é, e emissão de ingresso
// antes do preço (components/lp2/IngressoModal.tsx). Mesma variante de vídeo
// da / (COM VSL), pra que o teste compare só a LP. Os componentes que mudaram
// em relação à / vivem em components/lp2/; o resto é compartilhado. A variante
// SEM VSL é app/lp2/sem-vsl/page.tsx.
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

export default function Lp2() {
  return (
    <>
      <main>
        <Hero comVsl={true} />
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
