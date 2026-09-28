import type { Metadata } from "next";
import { Hero } from "@/components/info/sections/Hero";
import { Problem } from "@/components/info/sections/Problem";
import { NuncaGelo } from "@/components/info/sections/NuncaGelo";
import { Conteudo } from "@/components/info/sections/Conteudo";
import { OQueMuda } from "@/components/info/sections/OQueMuda";
import { ComoUsar } from "@/components/info/sections/ComoUsar";
import { CardPaciente } from "@/components/info/sections/CardPaciente";
import { BonusAula } from "@/components/info/sections/BonusAula";
import { Autoridade } from "@/components/fresh/sections/Autoridade";
import { SocialProof } from "@/components/fresh/sections/SocialProof";
import { ParaQuem } from "@/components/info/sections/ParaQuem";
import { Offer } from "@/components/info/sections/Offer";
import { Faq } from "@/components/info/sections/Faq";
import { FinalCta } from "@/components/info/sections/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/info/StickyCta";
import { IngressoInfo } from "@/components/info/IngressoInfo";

// /info: LP do "Protocolo de Resgate Vascular" (oclusão e necrose, conteúdo da
// Dra. Aline) como produto principal, com a aula ao vivo Por Dentro da Face de
// bônus até 06/10. Substituiu o kit "Mapa das Intercorrências" em 28/09/2026.
// Segue o padrão da /fresh (28/09): headline de resultado, títulos com destaque
// só em cor, preço só no ingresso emitido (IngressoInfo) e âncoras sem "de/por"
// do próprio Protocolo. Preço, checkout e fases em lib/ofertaKit.ts; estratégia
// e copy anotada em docs/info/README.md. Sem nomes de medicamento nem fotos de
// paciente na LP (política da Meta / compliance). Autoridade e SocialProof são
// os da /fresh.
export const metadata: Metadata = {
  title: "Protocolo de Resgate Vascular: oclusão e necrose · Dra. Aline Filgueiras",
  description:
    "O passo a passo que a Dra. Aline usa numa oclusão, pra você aplicar sem medo e agir com calma se acontecer. Prancha de parede, ficha hora a hora, medicações e cards para a paciente. De presente, a aula ao vivo Por Dentro da Face (06/10).",
  openGraph: {
    title: "Protocolo de Resgate Vascular · Dra. Aline Filgueiras",
    description:
      "O passo a passo que a Dra. Aline usa numa oclusão, pra você aplicar sem medo e agir com calma se acontecer. Do primeiro gesto à cicatrização.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Info() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <NuncaGelo />
        <OQueMuda />
        <Conteudo />
        <ComoUsar />
        <CardPaciente />
        <BonusAula />
        <Autoridade />
        <SocialProof />
        <ParaQuem />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <div aria-hidden className="h-[122px] sm:hidden" />
      <StickyCta />
      <IngressoInfo />
    </>
  );
}
