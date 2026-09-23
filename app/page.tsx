import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Criterio } from "@/components/sections/Criterio";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Solution } from "@/components/sections/Solution";
import { SocialProof } from "@/components/sections/SocialProof";
import { Authority } from "@/components/sections/Authority";
import { Offer } from "@/components/sections/Offer";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { IngressoModal } from "@/components/IngressoModal";

// Rota padrão: variante COM VSL do teste A/B (vídeo no Hero, CTAs travados
// até o fim do vídeo). A variante SEM VSL vive em app/sem-vsl/page.tsx.
export default function Home() {
  return (
    <>
      <main>
        <Hero comVsl={true} />
        <Problem />
        <Criterio />
        <Solution comVsl={true} />
        <Authority />
        <SocialProof />
        <ParaQuem />
        <Offer comVsl={true} />
        <Faq />
        <FinalCta comVsl={true} />
      </main>
      <Footer />
      <div aria-hidden className="h-[122px] sm:hidden" />
      <StickyCta comVsl={true} />
      <IngressoModal />
    </>
  );
}
