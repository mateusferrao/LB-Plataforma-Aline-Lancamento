import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/fresh/StickyCta";
import { Hero } from "@/components/fresh/sections/Hero";
import { Problema } from "@/components/fresh/sections/Problema";
import { PorQue } from "@/components/fresh/sections/PorQue";
import { OQueVoceLeva } from "@/components/fresh/sections/OQueVoceLeva";
import { Offer } from "@/components/fresh/sections/Offer";
import { Garantia } from "@/components/fresh/sections/Garantia";
import { Ancora } from "@/components/fresh/sections/Ancora";
import { Autoridade } from "@/components/fresh/sections/Autoridade";
import { PontePaciente } from "@/components/fresh/sections/PontePaciente";
import { SocialProof } from "@/components/fresh/sections/SocialProof";
import { ParaQuem } from "@/components/fresh/sections/ParaQuem";
import { Faq } from "@/components/fresh/sections/Faq";
import { FinalCta } from "@/components/fresh/sections/FinalCta";

// LP /fresh (plano em docs/fresh/README.md, decisões de 01/10). Vende segurança
// e resultado; o cadáver fresh frozen é o porquê e a âncora de valor. As duas
// rotas (app/fresh e app/fresh/sem-vsl) usam esta página e só mudam o `comVsl`.
// Preço na página e CTA direto ao checkout do lote (components/CtaButton.tsx);
// o ingresso emitido ficou só na /lp2, que é o controle do teste. A oferta e a
// garantia vêm logo depois de "o que muda na sua cadeira": tráfego frio vê
// preço e risco zero antes de rolar o resto. A ponte com a paciente (status,
// indicação, cobrar pelo que entrega) sobe pra logo depois do porquê (02/10).
export function FreshPage({ comVsl }: { comVsl: boolean }) {
  return (
    <>
      <main>
        <Hero comVsl={comVsl} />
        <Problema />
        <PorQue />
        <PontePaciente />
        <OQueVoceLeva comDiferencial />
        <Offer />
        <Garantia />
        <Ancora />
        <Autoridade />
        <SocialProof />
        <ParaQuem />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <div aria-hidden className="h-[122px] sm:hidden" />
      <StickyCta />
    </>
  );
}
