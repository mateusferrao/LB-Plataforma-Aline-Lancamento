import { Footer } from "@/components/Footer";
import { SocialProof } from "@/components/fresh/sections/SocialProof";
import type { Modo } from "@/components/academy/CtaButton";
import { StickyCta } from "@/components/academy/StickyCta";
import { Autoridade } from "@/components/academy/sections/Autoridade";
import { Faq } from "@/components/academy/sections/Faq";
import { FinalCta } from "@/components/academy/sections/FinalCta";
import { Garantia } from "@/components/academy/sections/Garantia";
import { Hero } from "@/components/academy/sections/Hero";
import { Oferta } from "@/components/academy/sections/Oferta";
import { OQueTem } from "@/components/academy/sections/OQueTem";
import { ParaQuem } from "@/components/academy/sections/ParaQuem";
import { PorQueDiferente } from "@/components/academy/sections/PorQueDiferente";
import { TresMomentos } from "@/components/academy/sections/TresMomentos";

// Página da Filgueiras Academy · Consulta, Agulha e Espelho. A mesma sequência
// do pitch de 06/10 (docs/plataforma/README.md), nas duas versões:
// "sala" (/academy/sala) e "evergreen" (/academy).
// A prova social reaproveita os prints da /fresh, com o rótulo honesto
// "alunas da Aline" (não são todos da plataforma).
export function AcademyPage({ modo }: { modo: Modo }) {
  return (
    <>
      <main>
        <Hero modo={modo} />
        <TresMomentos />
        <PorQueDiferente />
        <OQueTem modo={modo} />
        <Oferta modo={modo} />
        <Garantia />
        <Autoridade />
        <SocialProof />
        <ParaQuem />
        <Faq modo={modo} />
        <FinalCta modo={modo} />
      </main>
      <Footer />
      <div aria-hidden className="h-[110px] sm:hidden" />
      <StickyCta modo={modo} />
    </>
  );
}
