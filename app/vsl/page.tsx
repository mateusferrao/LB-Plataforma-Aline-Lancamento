import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { SocialProof } from "@/components/sections/SocialProof";
import { Authority } from "@/components/sections/Authority";
import { Offer } from "@/components/sections/Offer";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

// Rota do teste A/B COM VSL (vídeo no Hero, CTAs travados até o fim do
// vídeo). Estrutura idêntica a app/page.tsx (a rota SEM VSL) — só muda o
// `comVsl` passado às seções.
export default function VslPage() {
  return (
    <>
      <main>
        <Hero comVsl={true} />
        <Problem />
        <Solution comVsl={true} />
        <SocialProof />
        <Authority />
        <Offer comVsl={true} />
        <Faq />
        <FinalCta comVsl={true} />
      </main>
      <Footer />
      <div aria-hidden className="h-[122px] sm:hidden" />
      <StickyCta comVsl={true} />
    </>
  );
}
