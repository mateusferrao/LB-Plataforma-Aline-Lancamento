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

export default function Home() {
  return (
    <>
      <main>
        <Hero />
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
