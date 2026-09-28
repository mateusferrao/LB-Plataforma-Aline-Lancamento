import Image from "next/image";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/lp2/CtaButton";
import { ParcelaLine } from "@/components/ParcelaLine";
import { UrgenciaFina } from "@/components/UrgenciaFina";
import { withBasePath } from "@/lib/basePath";

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
        <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
          6 de outubro · 20h
        </span>
        <h2 className="mt-[18px] mb-6 max-w-[580px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.2] text-fg sm:text-[2.5rem]">
          Na próxima vez que chegar perto de uma área de risco,{" "}
          <span className="titulo-grifo">aplique com calma.</span>
        </h2>

        <Countdown align="center" />

        <CtaButton showPrice className="mt-8 w-full justify-center sm:w-auto">
          Quero meu ingresso
        </CtaButton>
        <ParcelaLine className="mt-2" />
        <UrgenciaFina className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />
      </Container>
    </section>
  );
}
