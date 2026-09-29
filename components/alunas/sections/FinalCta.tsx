import Image from "next/image";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/alunas/CtaButton";
import { withBasePath } from "@/lib/basePath";
import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

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
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/80 to-bg" />
      <Container narrow className="relative mx-auto flex flex-col items-center">
        <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
          6 de outubro · 20h
        </span>
        <h2 className="mt-[18px] mb-6 max-w-[580px] text-balance font-sans font-semibold text-[1.75rem] leading-[1.18] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          Você começou comigo.{" "}
          <span className="text-wine-bright">Vem ver o que eu vi por dentro.</span>
        </h2>
        <Countdown align="center" />
        <CtaButton showPrice className="mt-8 w-full justify-center sm:w-auto">
          Garantir meu ingresso de ex-aluna
        </CtaButton>
        <p className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint">
          Cupom {OFERTA_ALUNAS.cupom} já aplicado · Protocolo de presente · reembolso em 7 dias
        </p>
      </Container>
    </section>
  );
}
