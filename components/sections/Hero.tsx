import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { ParcelaLine } from "@/components/ParcelaLine";
import { UrgenciaFina } from "@/components/UrgenciaFina";
import { VslPlayer } from "@/components/VslPlayer";
import { withBasePath } from "@/lib/basePath";

// `comVsl` decide a variante de teste A/B: com vídeo (Hero trava o CTA até o
// fim da VSL) ou sem vídeo (foto estática, CTA nunca travado — sem vídeo,
// não haveria como o gate liberar).
export function Hero({ comVsl }: { comVsl: boolean }) {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-9 sm:gap-[54px] md:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-px w-[42px] bg-wine-ink" aria-hidden="true" />
              <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
                Aula ao vivo · 6 de outubro · 20h · online
              </span>
            </div>

            <h1 className="mt-5 text-balance font-serif font-semibold text-[2.35rem] leading-[1.12] tracking-[-0.012em] sm:text-[3.1rem] lg:text-[3.7rem]">
              {/* Headline em dois níveis visuais pra não empurrar o CTA pra baixo
                  no mobile: a virada grifada e, no segundo nível, a decisão + o
                  que é e quem conduz (tráfego frio de anúncio lê só o H1). */}
              <span className="titulo-grifo">
                O erro na aplicação não acontece na agulha.
              </span>{" "}
              <span className="mt-5 block text-[1.45rem] leading-[1.3] font-medium tracking-normal text-fg sm:text-[1.8rem] lg:text-[2.05rem]">
                Acontece antes, na decisão que você toma sem enxergar o rosto por dentro.
                Em um evento ao vivo, direto da mesa de dissecção, a Dra. Aline mostra o que
                está embaixo da pele.
              </span>
            </h1>

            <Countdown className="mt-8 mb-8" />

            <CtaButton
              showPrice
              requireVsl={comVsl}
              className="w-full justify-center sm:w-auto sm:justify-start"
            >
              Quero minha vaga
            </CtaButton>
            <ParcelaLine className="mt-2 text-center sm:text-left" />
            <UrgenciaFina className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-7 sm:gap-7">
              <Stat target={11} suffix="+" l="anos de clínica" />
              <Stat target={1000} suffix="+" formatThousands l="alunas formadas" />
              <Stat target={40} suffix=" mil+" l="na comunidade" />
            </div>
          </div>

          {comVsl ? (
            // No mobile (1 coluna) o vídeo vem ANTES do texto/CTA — o botão diz
            // "assista o vídeo acima", então ele precisa estar acima de verdade.
            // No desktop (grid 2 colunas) volta pra direita, ordem natural.
            <div className="relative order-first mx-auto aspect-[9/16] w-full max-w-[420px] md:order-none md:self-center">
              <VslPlayer className="absolute inset-0" />
            </div>
          ) : (
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:aspect-auto md:h-full md:self-stretch">
              <Image
                src={withBasePath("/images/aline-hero-marsala-v2.jpg")}
                alt="Dra. Aline Filgueiras"
                fill
                priority
                sizes="(min-width: 768px) 420px, 90vw"
                className="foto-funde-fundo object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function Stat({
  target,
  suffix,
  formatThousands,
  l,
}: {
  target: number;
  suffix: string;
  formatThousands?: boolean;
  l: string;
}) {
  return (
    <div>
      <AnimatedNumber
        target={target}
        suffix={suffix}
        formatThousands={formatThousands}
        className="block font-serif text-[1.35rem] text-fg sm:text-[1.6rem]"
      />
      <div className="text-[11px] tracking-[0.05em] text-fg-faint uppercase sm:text-[12px]">
        {l}
      </div>
    </div>
  );
}
