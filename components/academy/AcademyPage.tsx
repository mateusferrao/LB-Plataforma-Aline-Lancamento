import { Footer } from "@/components/Footer";
import { BarraPrazo } from "@/components/academy/BarraPrazo";
import type { Modo } from "@/components/academy/CtaButton";
import { StickyCta } from "@/components/academy/StickyCta";
import { Autoridade } from "@/components/academy/sections/Autoridade";
import { Cena } from "@/components/academy/sections/Cena";
import { Faq } from "@/components/academy/sections/Faq";
import { FinalCta } from "@/components/academy/sections/FinalCta";
import { Garantia } from "@/components/academy/sections/Garantia";
import { Hero } from "@/components/academy/sections/Hero";
import { Oferta } from "@/components/academy/sections/Oferta";
import { ParaQuem } from "@/components/academy/sections/ParaQuem";
import { Prova } from "@/components/academy/sections/Prova";
import { PonteAula } from "@/components/academy/PonteAula";
import { Recebe } from "@/components/academy/sections/Recebe";
import { Virada } from "@/components/academy/sections/Virada";

// Página da Filgueiras Academy · Consulta, Agulha e Espelho, nas duas versões:
// "sala" (/academy/sala) e "evergreen" (/academy). Revisão de 05/10, no molde
// da página do Mapa de Intercorrência: coluna única, uma ideia por seção, a dor
// como cena e a oferta num card só (docs/plataforma/README.md).
// A prova (06/10) são três prints fixos, com o rótulo honesto "alunas da Aline"
// (não são todos da plataforma). A faixa PonteAula aparece só pra quem veio das
// páginas da aula (?de=aula, posto pelo RedirecionaAposAula).
export function AcademyPage({ modo }: { modo: Modo }) {
  return (
    <>
      {modo === "sala" && <BarraPrazo />}
      {modo === "evergreen" && <PonteAula />}
      <main>
        <Hero modo={modo} />
        <Cena />
        <Virada />
        <Recebe />
        <ParaQuem />
        <Autoridade />
        <Prova />
        <Oferta modo={modo} />
        <Garantia />
        <Faq modo={modo} />
        <FinalCta modo={modo} />
      </main>
      <Footer />
      <div aria-hidden className="h-[110px] sm:hidden" />
      <StickyCta modo={modo} />
    </>
  );
}
