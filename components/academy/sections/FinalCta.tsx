import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Prazo } from "@/components/academy/Prazo";
import { withBasePath } from "@/lib/basePath";
import { GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Fechamento do pitch (bloco 10).
const COPY = {
  sala: {
    eyebrow: `Até ${SALA.prazoCurto}`,
    h2: "Você viu a face por dentro.",
    destaque: "Daqui a um ano, a sua mão ainda vai hesitar?",
  },
  evergreen: {
    eyebrow: "Filgueiras Academy",
    h2: "Mão que não hesita. Consulta que não trava.",
    destaque: "A paciente sente as duas.",
  },
} as const;

export function FinalCta({ modo }: { modo: Modo }) {
  const c = COPY[modo];
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
        <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">{c.eyebrow}</span>
        <h2 className="mt-[18px] mb-6 max-w-[600px] text-balance font-sans font-semibold text-[1.75rem] leading-[1.18] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          {c.h2} <span className="text-wine-bright">{c.destaque}</span>
        </h2>
        {modo === "sala" && <Prazo align="center" />}
        <CtaButton modo={modo} showPrice className="mt-8 w-full justify-center sm:w-auto">
          Quero entrar na Academy
        </CtaButton>
        <p className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint">{GARANTIA_ACADEMY.linha}</p>
      </Container>
    </section>
  );
}
