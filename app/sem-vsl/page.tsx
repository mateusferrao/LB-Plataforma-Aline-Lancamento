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

// Rota do teste A/B SEM VSL (foto estática no Hero).
// Estrutura idêntica a app/page.tsx (a rota padrão, COM VSL) — só muda o
// `comVsl` passado ao Hero.
export default function SemVslPage() {
  return (
    <>
      <main>
        <Hero comVsl={false} />
        <Problem />
        <Solution />
        <SocialProof />
        <Authority />
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
