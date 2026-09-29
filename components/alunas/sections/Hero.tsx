import Image from "next/image";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/alunas/CtaButton";
import { PrecoPresente } from "@/components/alunas/PrecoPresente";
import { withBasePath } from "@/lib/basePath";
import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

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

            <p className="mt-5 border-l-2 border-wine-ink pl-3 text-[1.02rem] leading-[1.45] font-medium text-fg-soft sm:text-[1.08rem]">
              Exclusivo para quem já estudou com a Aline
            </p>

            <h1 className="mt-3 text-balance font-sans font-semibold text-[1.85rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.2rem] lg:text-[2.35rem]">
              Você já aprendeu a técnica comigo.{" "}
              <span className="titulo-grifo">
                Agora vem ver a face por dentro, em cadáver fresh frozen.
              </span>
            </h1>

            <p className="mt-4 max-w-[560px] text-[1.05rem] leading-[1.55] text-fg-soft">
              Dia 6/10, às 20h, a Dra. Aline mostra ao vivo, nas imagens das dissecções dela,
              onde estão os riscos da face. E ex-aluna leva o Protocolo de Resgate Vascular de
              presente.
            </p>

            {/* Resumo do preço + CTA na 1ª dobra (desktop e celular). O detalhamento
                completo da ancoragem fica logo abaixo, depois dos bullets. */}
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <s className="font-serif text-[1.15rem] text-fg-faint">
                {OFERTA_ALUNAS.valorDeTotalLabel}
              </s>
              <span className="font-serif text-[2rem] leading-none font-semibold text-fg">
                {OFERTA_ALUNAS.priceLabel}
              </span>
              <span className="rounded-full bg-wine px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-on-wine uppercase">
                {OFERTA_ALUNAS.descontoPct}% off · Protocolo de presente
              </span>
            </div>

            <CtaButton className="mt-5 w-full justify-center text-center sm:w-auto sm:justify-start">
              Garantir meu ingresso de ex-aluna
            </CtaButton>
            <p className="mt-2.5 text-center text-[13.5px] tracking-[0.02em] text-fg-soft sm:text-left">
              Cupom <strong className="font-semibold text-wine-ink">{OFERTA_ALUNAS.cupom}</strong>{" "}
              já aplicado · ou 12x de {OFERTA_ALUNAS.parcela12x} · reembolso em 7 dias
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:col-start-2 md:row-span-2 md:row-start-1 md:mt-2 md:self-start">
            <Image
              src={withBasePath("/images/fresh/lab-luvas.webp")}
              alt="Dra. Aline Filgueiras calçando as luvas no laboratório de dissecção"
              fill
              priority
              sizes="(min-width: 768px) 400px, 90vw"
              className="object-cover object-top"
            />
            <span className="absolute bottom-3 left-3 rounded-[2px] bg-bg/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur-sm">
              Laboratório de dissecção · EUA
            </span>
          </div>

          <div className="md:col-start-1 md:row-start-2">
            <ul className="list-none p-0 md:mt-10">
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
            <p className="mt-3 text-[13.5px] tracking-[0.02em] text-fg-faint">
              O presente vale até a aula começar · sem gravação
            </p>

            <Countdown className="mt-8" />
          </div>
        </div>
      </Container>
    </section>
  );
}
