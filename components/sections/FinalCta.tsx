import Image from "next/image";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { ParcelaLine } from "@/components/ParcelaLine";
import { UrgenciaFina } from "@/components/UrgenciaFina";
import { withBasePath } from "@/lib/basePath";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 text-center sm:py-[112px]">
      {/* FOTO: aline-final-branco-bw.jpg — vestido branco, olhar direto (P&B via grayscale).
          (arquivo atual é stand-in; sobrescreva com a foto real de mesmo nome) */}
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
        <h2 className="mt-[18px] mb-6 max-w-[560px] text-balance font-serif font-semibold text-[1.95rem] sm:text-[2.6rem]">
          <span className="titulo-grifo">Nesse dia, a mesa de dissecção vira a sua tela.</span>
        </h2>

        <Countdown align="center" />

        <CtaButton showPrice requireVsl className="mt-8 w-full justify-center sm:w-auto">
          Quero minha vaga
        </CtaButton>
        <ParcelaLine className="mt-2" />
        <UrgenciaFina className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />
      </Container>
    </section>
  );
}
