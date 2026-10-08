import Image from "next/image";
import { Container } from "@/components/Container";
import { AteOFim } from "@/components/academy/AteOFim";
import { Ticks } from "@/components/academy/Ticks";
import { CtaEx } from "@/components/academy/exalunas/CtaEx";
import { withBasePath } from "@/lib/basePath";
import { ANATOMIA_EXALUNAS, EXALUNAS, GARANTIA_ACADEMY, RENOVACAO_EXALUNAS, brl } from "@/lib/ofertaAcademy";

// Hero das ex-assinantes: o presente primeiro (o módulo de anatomia), depois o
// preço com as duas âncoras. Público quente: o botão vai direto ao checkout.
// No celular a foto sai daqui (a seção seguinte abre com a foto do laboratório).
export function HeroEx() {
  return (
    <section className="pt-10 pb-16 sm:pt-14 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-[54px]">
          <div>
            <span className="inline-flex rounded-[3px] border border-wine-ink/60 px-3 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-wine-ink uppercase">
              Só pra quem já foi assinante da Academy
            </span>

            <h1 className="mt-6 text-balance font-sans font-semibold text-[1.95rem] leading-[1.14] tracking-[-0.015em] text-fg sm:text-[2.5rem] lg:text-[2.7rem]">
              Volte pra Academy e{" "}
              <span className="titulo-grifo">leve o novo módulo de anatomia de presente.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.1rem] leading-[1.55] text-fg-soft">
              Desde que você saiu, a Filgueiras Academy ganhou o curso online de Fresh Frozen + dissecção. Na sua
              volta ele vem de brinde, junto com 3 meses de mentoria ao vivo com a Aline.
            </p>

            <div className="mt-7 max-w-[460px] rounded-[6px] border-2 border-wine px-5 py-4">
              <span className="block text-[10.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
                Seu presente de volta
              </span>
              <p className="mt-1 flex items-baseline justify-between gap-4 text-[1rem] text-fg">
                <span>Módulo de anatomia</span>
                <span className="shrink-0">
                  <span className="mr-2 text-fg-soft line-through decoration-wine-bright">
                    {brl(ANATOMIA_EXALUNAS.valor ?? 0)}
                  </span>
                  <strong className="font-semibold text-wine-ink">grátis</strong>
                </span>
              </p>
              <p className="mt-3 flex items-baseline justify-between gap-4 border-t border-dashed border-line pt-3 text-[1rem] text-fg">
                <span>Sua volta à Academy</span>
                <span className="shrink-0">
                  <span className="mr-2 text-fg-soft line-through decoration-wine-bright">
                    {brl(RENOVACAO_EXALUNAS.valor ?? 0)}
                  </span>
                  <strong className="font-serif text-[1.6rem] font-normal">{EXALUNAS.precoLabel}</strong>
                </span>
              </p>
              <p className="mt-1 text-right text-[0.88rem] text-fg-soft">ou 12x de {EXALUNAS.parcela12x}</p>
            </div>

            <CtaEx className="mt-7 w-full sm:w-auto">Quero voltar com o presente</CtaEx>
            <AteOFim fim={EXALUNAS.endsAt}>
              <p className="mt-3 text-[13.5px] text-fg-soft">
                Condição de ex-assinante só até <strong className="font-semibold text-fg">{EXALUNAS.prazoCurto}</strong>.
              </p>
            </AteOFim>
            <Ticks className="mt-4" itens={["Acesso imediato", "12x ou Pix", GARANTIA_ACADEMY.nome]} />
          </div>

          <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-[400px] overflow-hidden md:block rounded-[4px] border border-line-soft bg-surface">
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
        </div>
      </Container>
    </section>
  );
}
