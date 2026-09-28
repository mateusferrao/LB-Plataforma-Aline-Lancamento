import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/info/CtaButton";
import { LinhaGarantia } from "@/components/info/LinhaGarantia";
import { SoComBonus } from "@/components/info/SoComBonus";
import { formatBRL, ITEM_AULA } from "@/lib/ofertaKit";
import { withBasePath } from "@/lib/basePath";

// Hero da /info no padrão da /fresh (components/fresh/sections/Hero.tsx):
// pré-headline com a dor, H1 com o resultado (grifo só na parte final),
// subtítulo com a entrega, bullets que começam pelo que muda na cadeira, e o
// CTA que abre o ingresso. Sem valor em R$ da oferta: o preço só aparece no
// ingresso emitido. Imagem = mockup do próprio produto (prova na primeira dobra).
// Compliance: nenhum nome de medicamento na LP (política da Meta).
//
// Ordem no celular: texto → mockup → bullets/CTA (a headline nunca fica abaixo
// da imagem). No desktop o mockup vai pra coluna da direita, nas 2 linhas.
const BULLETS = [
  "Saiba o que fazer no primeiro minuto e aja com calma, sem decidir no susto",
  "Tenha o próximo passo à vista, na parede da sala, até a hora de liberar a paciente",
  "Mande a paciente pra casa com o cuidado por escrito e acompanhe até cicatrizar",
];

export function Hero() {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.12fr_0.88fr] md:gap-x-[54px] md:gap-y-0">
          <div className="md:col-start-1 md:row-start-1">
            <span className="inline-flex items-center rounded-full border border-wine-ink/50 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] text-wine-ink uppercase">
              Protocolo de oclusão e necrose
            </span>

            <p className="mt-6 border-l-2 border-wine-ink pl-3 text-[1.02rem] leading-[1.45] font-medium text-fg-soft sm:text-[1.08rem]">
              Pra quem já aplica ou quer aplicar e tem medo de não saber o que fazer se a
              cor mudar
            </p>

            <h1 className="mt-3 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem] lg:text-[2.6rem]">
              O passo a passo que a Dra. Aline usa numa oclusão,{" "}
              <span className="titulo-grifo">pra você aplicar sem medo e agir com calma se acontecer.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
              O <strong className="font-semibold text-fg">Protocolo de Resgate Vascular</strong>{" "}
              coloca na sua mão a conduta de oclusão e necrose da Dra. Aline, do primeiro
              gesto à cicatrização: a prancha de parede, a ficha hora a hora, as medicações e os
              cards da paciente.
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-[420px] md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[460px] md:self-center">
            <div className="relative aspect-[1200/1500] overflow-hidden rounded-[4px]">
              <Image
                src={withBasePath("/images/info/protocolo-mockup.webp")}
                alt="Protocolo de Resgate Vascular: capa, prancha de parede da oclusão e card da paciente no celular"
                fill
                priority
                sizes="(min-width: 768px) 460px, 90vw"
                className="foto-funde-fundo object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-[12px] tracking-[0.12em] text-fg-faint uppercase">
              PDF + prancha de parede + ficha + cards
            </figcaption>
          </figure>

          <div className="md:col-start-1 md:row-start-2">
            <ul className="list-none p-0 md:mt-6">
              {BULLETS.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
              <SoComBonus>
                <Bullet>
                  De presente até 06/10: a aula ao vivo Por Dentro da Face, que sozinha custa{" "}
                  {formatBRL(ITEM_AULA.valorDe ?? 0)}
                </Bullet>
              </SoComBonus>
            </ul>

            <CtaButton className="mt-7 w-full justify-center sm:w-auto sm:justify-start" />
            <LinhaGarantia className="mt-3 text-center text-[13.5px] tracking-[0.02em] text-fg-faint sm:text-left" />

            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-7 sm:gap-7">
              <Stat target={11} suffix="+" l="anos de clínica" />
              <Stat target={1000} suffix="+" formatThousands l="alunas formadas" />
              <Stat target={40} suffix=" mil+" l="na comunidade" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-3 py-1.5 text-[1.02rem] leading-[1.5] text-fg">
      <span className="shrink-0 font-semibold text-wine-ink" aria-hidden="true">
        ✓
      </span>
      <span>{children}</span>
    </li>
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
