import Image from "next/image";
import { Container } from "@/components/Container";
import { BonusCountdown } from "@/components/info/BonusCountdown";
import { CtaButton } from "@/components/info/CtaButton";
import { LinhaGarantia } from "@/components/info/LinhaGarantia";
import { SoAntesDoEnvio } from "@/components/info/SoAntesDoEnvio";
import { ENVIO_KIT_DATA } from "@/lib/ofertaKit";
import { SoComBonus } from "@/components/info/SoComBonus";
import { withBasePath } from "@/lib/basePath";

const CHIPS = ["Prancha de parede", "Ficha hora a hora", "Medicações com posologia", "Cards para a paciente"];

// H1 passa no teste "Now you can…" e é literal no produto: o protocolo é uma
// sequência minuto a minuto (parar → calor → hialuronidase → 1 frasco/hora →
// alta → dia seguinte → necrose). Vende preparo, não susto. Imagem = mockup do
// próprio produto (capa + prancha + card), prova de produto na primeira dobra.
// Compliance: nenhum nome de medicamento na LP (política da Meta).
export function Hero() {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-9 sm:gap-[54px] md:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-px w-[42px] bg-wine-ink" aria-hidden="true" />
              <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
                Protocolo clínico · Dra. Aline Filgueiras
              </span>
            </div>

            <h1 className="mt-5 text-balance font-serif font-semibold text-[2rem] leading-[1.12] tracking-[-0.012em] sm:text-[2.6rem] lg:text-[2.9rem]">
              <span className="titulo-grifo">
                O que fazer, minuto a minuto, se uma oclusão acontecer na sua cadeira.
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
              O <strong className="font-semibold text-fg">Protocolo de Resgate Vascular</strong>{" "}
              é o passo a passo de oclusão e necrose que a Dra. Aline usa: do primeiro gesto à
              hialuronidase hora a hora, as medicações e o cuidado até a cicatrização.
            </p>

            <SoComBonus>
              <p className="mt-4 max-w-[560px] border-l-2 border-wine pl-4 text-[1.02rem] leading-[1.55] text-fg">
                Quem garante até 6 de outubro leva de presente a aula ao vivo{" "}
                <em className="font-serif">Por Dentro da Face</em>.
              </p>
            </SoComBonus>

            <ul className="mt-6 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line px-3.5 py-1.5 text-[12.5px] text-fg-soft"
                >
                  {c}
                </li>
              ))}
            </ul>

            <BonusCountdown className="mt-8" />

            <div className="mt-8">
              <CtaButton className="w-full justify-center sm:w-auto sm:justify-start" />
            </div>
            <LinhaGarantia className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />
            <SoAntesDoEnvio>
              <p className="mt-2 text-[13.5px] font-semibold tracking-[0.02em] text-wine-ink">
                O Protocolo chega no seu WhatsApp no dia {ENVIO_KIT_DATA}.
              </p>
            </SoAntesDoEnvio>
          </div>

          <figure className="relative mx-auto w-full max-w-[460px] md:self-center">
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
        </div>
      </Container>
    </section>
  );
}
