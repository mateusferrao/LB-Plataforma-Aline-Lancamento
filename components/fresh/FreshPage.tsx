import { Footer } from "@/components/Footer";
import { IngressoModal } from "@/components/lp2/IngressoModal";
import { AncoraIngresso } from "@/components/fresh/AncoraIngresso";
import { StickyCta } from "@/components/fresh/StickyCta";
import { Hero } from "@/components/fresh/sections/Hero";
import { Problema } from "@/components/fresh/sections/Problema";
import { PorQue } from "@/components/fresh/sections/PorQue";
import { Ancora } from "@/components/fresh/sections/Ancora";
import { OQueVoceLeva } from "@/components/fresh/sections/OQueVoceLeva";
import { Autoridade } from "@/components/fresh/sections/Autoridade";
import { PontePaciente } from "@/components/fresh/sections/PontePaciente";
import { SocialProof } from "@/components/fresh/sections/SocialProof";
import { ParaQuem } from "@/components/fresh/sections/ParaQuem";
import { Offer } from "@/components/fresh/sections/Offer";
import { Faq } from "@/components/fresh/sections/Faq";
import { FinalCta } from "@/components/fresh/sections/FinalCta";

// LP /fresh (plano em docs/fresh/README.md). Vende segurança e resultado; o
// cadáver fresh frozen é o porquê e a âncora de valor. As duas rotas
// (app/fresh e app/fresh/sem-vsl) usam esta página e só mudam o `comVsl`.
// O ingresso é o da /lp2 com o comparativo AncoraIngresso (curso internacional
// + o "de R$197" da aula), sem o bloco de desconto da /lp2 pra não empilhar.
export function FreshPage({ comVsl }: { comVsl: boolean }) {
  return (
    <>
      <main>
        <Hero comVsl={comVsl} />
        <Problema />
        <PorQue />
        <Ancora />
        <OQueVoceLeva />
        <Autoridade />
        <PontePaciente />
        <SocialProof />
        <ParaQuem />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <div aria-hidden className="h-[122px] sm:hidden" />
      <StickyCta />
      <IngressoModal
        mostrarDesconto={false}
        ancora={<AncoraIngresso />}
      />
    </>
  );
}
