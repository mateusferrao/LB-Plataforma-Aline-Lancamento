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

// Rota do teste A/B SEM VSL (foto estática no Hero, CTAs nunca travados).
// Estrutura idêntica a app/page.tsx (a rota padrão, COM VSL) — só muda o
// `comVsl` passado às seções.
export default function SemVslPage() {
  return (
    <>
      <main>
        <Hero comVsl={false} />
        <Problem />
        <Criterio />
        <Solution comVsl={false} />
        <Authority />
        <SocialProof />
        <ParaQuem />
        <Offer comVsl={false} />
        <Faq />
        <FinalCta comVsl={false} />
      </main>
      <Footer />
      <div aria-hidden className="h-[122px] sm:hidden" />
      <StickyCta comVsl={false} />
      <IngressoModal />
    </>
  );
}
