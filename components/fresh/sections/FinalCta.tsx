import Image from "next/image";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { Titulo } from "@/components/Titulo";
import { withBasePath } from "@/lib/basePath";
import { ANCORA_REFAZER } from "@/components/fresh/ancora";
import { GARANTIA } from "@/lib/ofertaFresh";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 text-center sm:py-[112px]">
      <Image
        src={withBasePath("/images/aline-final-branco-bw.jpg")}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-top opacity-25 grayscale"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/80 to-bg"
      />

      <Container narrow className="relative mx-auto flex flex-col items-center">
        <Titulo eyebrow="6 de outubro · 20h" destaque="aplique com calma." center>
          Na próxima vez que chegar perto de uma área de risco,
        </Titulo>
        <p className="mt-6 mb-8 max-w-[520px] text-[1.08rem] leading-[1.55] text-fg-soft">
          {ANCORA_REFAZER}
        </p>

        <Countdown align="center" />

        <CtaButton showPrice className="mt-8 w-full justify-center sm:w-auto">
          Garantir meu ingresso
        </CtaButton>
        <p className="mt-3.5 max-w-[460px] text-[13.5px] tracking-[0.02em] text-fg-faint">
          {GARANTIA.linha}
        </p>
      </Container>
    </section>
  );
}
