import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { ParcelaLine } from "@/components/ParcelaLine";
import { UrgenciaFina } from "@/components/UrgenciaFina";
import { VslPlayer } from "@/components/VslPlayer";
import { withBasePath } from "@/lib/basePath";

// `comVsl` decide a variante de teste A/B: com vídeo (VSL no Hero) ou sem
// vídeo (foto estática). Nas duas o CTA fica liberado desde o início — a
// compra não depende de assistir o vídeo.
export function Hero({ comVsl }: { comVsl: boolean }) {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-9 sm:gap-[54px] md:grid-cols-[1.12fr_0.88fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-wine-ink/50 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] text-wine-ink uppercase">
              Ao vivo · 06/10 · 20h · online
            </span>

            <p className="mt-6 border-l-2 border-wine-ink pl-3 text-[1.02rem] leading-[1.45] font-medium text-fg-soft sm:text-[1.08rem]">
              Pra quem já aplica ou quer aplicar e ainda sente insegurança em alguns
              procedimentos
            </p>

            <h1 className="mt-3 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem] lg:text-[2.6rem]">
              Aplique com a segurança de quem já viu, por dentro,{" "}
              <span className="titulo-grifo">onde estão os riscos da face.</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[1.2rem] leading-[1.6] text-fg-soft">
              No dia 6, ao vivo, a Dra. Aline mostra a face por dentro, direto da mesa
              de dissecção. Você sai da aula com a mão mais firme e a leitura de anatomia
              que faltava.
            </p>
            <p className="mt-4 max-w-[560px] text-[1.05rem] leading-[1.55] text-fg-soft">
              É a bagagem de quem estudou anatomia em peças fresh frozen nos Estados Unidos e
              hoje dá cursos internacionais de anatomia na Europa.
            </p>

            <Countdown className="mt-8 mb-8" />

            <CtaButton
              showPrice
              className="w-full justify-center sm:w-auto sm:justify-start"
            >
              Quero minha vaga
            </CtaButton>
            <ParcelaLine className="mt-2 text-center sm:text-left" />
            <UrgenciaFina className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-7 sm:gap-7">
              <Stat target={12} suffix="+" l="anos de clínica" />
              <Stat target={1000} suffix="+" formatThousands l="alunas formadas" />
              <Stat target={40} suffix=" mil+" l="na comunidade" />
            </div>
          </div>

          {comVsl ? (
            // No mobile (1 coluna) o vídeo vem ANTES do texto/CTA, logo no
            // topo. No desktop (grid 2 colunas) volta pra direita, ordem natural.
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
