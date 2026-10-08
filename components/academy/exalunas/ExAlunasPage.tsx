import { Footer } from "@/components/Footer";
import { Autoridade } from "@/components/academy/sections/Autoridade";
import { Garantia } from "@/components/academy/sections/Garantia";
import { Prova } from "@/components/academy/sections/Prova";
import { BarraPrazoEx } from "@/components/academy/exalunas/BarraPrazoEx";
import { FaqEx } from "@/components/academy/exalunas/FaqEx";
import { FinalCtaEx } from "@/components/academy/exalunas/FinalCtaEx";
import { HeroEx } from "@/components/academy/exalunas/HeroEx";
import { MentoriaEx } from "@/components/academy/exalunas/MentoriaEx";
import { NovidadeEx } from "@/components/academy/exalunas/NovidadeEx";
import { OfertaEx } from "@/components/academy/exalunas/OfertaEx";
import { StickyCtaEx } from "@/components/academy/exalunas/StickyCtaEx";

// /academy/exalunas: volta das ex-assinantes (plano em docs/plataforma/exalunas.md).
// Público quente: página curta, o presente (módulo de anatomia) e o preço no hero,
// a oferta cedo e as objeções de quem já assinou depois. Reaproveita a prova, a
// autoridade e a garantia da Academy.
export function ExAlunasPage() {
  return (
    <>
      <BarraPrazoEx />
      <main>
        <HeroEx />
        <NovidadeEx />
        <OfertaEx />
        <Prova />
        <MentoriaEx />
        <Autoridade />
        <Garantia />
        <FaqEx />
        <FinalCtaEx />
      </main>
      <Footer />
      <div aria-hidden className="h-[110px] sm:hidden" />
      <StickyCtaEx />
    </>
  );
}
