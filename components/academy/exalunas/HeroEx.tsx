import Image from "next/image";
import { Container } from "@/components/Container";
import { AteOFim } from "@/components/academy/AteOFim";
import { Ticks } from "@/components/academy/Ticks";
import { VerOfertaButton } from "@/components/academy/CtaButton";
import { withBasePath } from "@/lib/basePath";
import { EXALUNAS, GARANTIA_ACADEMY } from "@/lib/ofertaAcademy";

// Hero das ex-assinantes: o presente (o módulo de anatomia) e a mentoria, sem preço.
// Como na /academy, o botão leva à oferta (valor antes do preço, pedido de 08/10).
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

            {/* Selo da novidade (pedido de 08/10: o Fresh Frozen em destaque). */}
            <p className="mt-5 flex items-center gap-2.5 text-[0.95rem] font-semibold text-fg">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-wine-bright opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2.5 rounded-full bg-wine-bright" />
              </span>
              <span>
                <span className="mr-1.5 rounded-[2px] bg-wine px-1.5 py-0.5 text-[10.5px] tracking-[0.14em] text-on-wine uppercase">
                  Novo
                </span>
                Curso online de Fresh Frozen + dissecção
              </span>
            </p>

            <h1 className="mt-4 text-balance font-sans font-semibold text-[1.95rem] leading-[1.14] tracking-[-0.015em] text-fg sm:text-[2.5rem] lg:text-[2.7rem]">
              Volte pra Academy e{" "}
              <span className="titulo-grifo">leve de presente o novo curso de Fresh Frozen.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.1rem] leading-[1.55] text-fg-soft">
              A face por dentro, camada por camada, em peças fresh frozen, com a Dra. Aline. É a maior novidade da
              Academy desde que você saiu, e na sua volta ele vem de brinde, junto com 3 meses de mentoria ao vivo
              com ela.
            </p>

            <VerOfertaButton produto="academy-exalunas" className="mt-8 w-full justify-center sm:w-auto">
              Ver o presente e os bônus
            </VerOfertaButton>
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
