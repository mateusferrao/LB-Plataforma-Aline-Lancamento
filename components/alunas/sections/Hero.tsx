import Image from "next/image";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/alunas/CtaButton";
import { PrecoPresente } from "@/components/alunas/PrecoPresente";
import { withBasePath } from "@/lib/basePath";

// Hero da /alunas (padrão da /fresh: pré-headline, H1 em Inter com o grifo só
// na parte final). Público quente: a pré-headline reconhece quem ela é
// (princípio de unidade) e o preço já aparece, com o presente riscado.
const BULLETS = [
  "Veja onde estão os riscos da face e até onde ir em cada região",
  "Entenda por que a mesma técnica dá resultados diferentes em cada rosto",
  "Leve de presente o Protocolo de Resgate Vascular: oclusão e necrose, do primeiro minuto à cicatrização",
];

export function Hero() {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.12fr_0.88fr] md:gap-x-[54px] md:gap-y-0">
          <div className="md:col-start-1 md:row-start-1">
            <span className="inline-flex items-center rounded-full border border-wine-ink/50 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] text-wine-ink uppercase">
              Ao vivo · 06/10 · 20h · online
            </span>

            <p className="mt-6 border-l-2 border-wine-ink pl-3 text-[1.02rem] leading-[1.45] font-medium text-fg-soft sm:text-[1.08rem]">
              Exclusivo para quem já estudou com a Aline
            </p>

            <h1 className="mt-3 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem] lg:text-[2.6rem]">
              Você já aprendeu a técnica comigo.{" "}
              <span className="titulo-grifo">
                Agora vem ver a face por dentro, em cadáver fresh frozen.
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
              No dia 6 de outubro, às 20h, a Dra. Aline mostra ao vivo, nas imagens das
              dissecções que ela fez em cadáver fresh frozen, onde estão os riscos da face. E
              quem já foi aluna leva de presente o Protocolo de Resgate Vascular.
            </p>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
            <Image
              src={withBasePath("/images/fresh/lab-luvas.webp")}
              alt="Dra. Aline Filgueiras calçando as luvas no laboratório de dissecção"
              fill
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-[2px] bg-bg/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur-sm">
              Laboratório de dissecção · EUA
            </span>
          </div>

          <div className="md:col-start-1 md:row-start-2">
            <ul className="list-none p-0 md:mt-6">
              {BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-baseline gap-3 py-1.5 text-[1.02rem] leading-[1.5] text-fg"
                >
                  <span className="shrink-0 font-semibold text-wine-ink" aria-hidden="true">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 max-w-[460px] rounded-[6px] border border-line bg-bg-2 px-5 py-4">
              <PrecoPresente />
            </div>

            <CtaButton className="mt-5 w-full justify-center sm:w-auto sm:justify-start">
              Garantir meu ingresso de ex-aluna
            </CtaButton>
            <p className="mt-3 text-center text-[13.5px] tracking-[0.02em] text-fg-faint sm:text-left">
              O presente vale até a aula começar · reembolso em 7 dias · sem gravação
            </p>

            <Countdown className="mt-8" />
          </div>
        </div>
      </Container>
    </section>
  );
}
