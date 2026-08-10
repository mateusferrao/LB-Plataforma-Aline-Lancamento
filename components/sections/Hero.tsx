import Image from "next/image";
import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-[54px] md:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-px w-[42px] bg-accent" aria-hidden="true" />
              <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
                Aula ao vivo · 24 de setembro · 20h · online
              </span>
            </div>

            <h1 className="mt-5 text-balance font-serif text-[2.55rem] leading-[1.09] tracking-[-0.012em] sm:text-[3.4rem] lg:text-[4.1rem]">
              A aula que muda a sua mão antes da próxima agulha.
            </h1>

            <p className="mt-6 max-w-[560px] text-[1.2rem] leading-[1.6] text-ink-soft">
              Dia 24 de setembro, ao vivo, a Dra. Aline Filgueiras traz da mesa de dissecção
              o que atlas e curso gravado não mostram — pra você aplicar harmonização com a
              segurança de quem já viu por dentro.
            </p>

            <Countdown className="mt-8 mb-8" />

            <CtaButton>
              Quero minha vaga <span className="font-serif text-[1.16rem]">· R$67</span>
            </CtaButton>
            <p className="mt-3.5 text-[13.5px] tracking-[0.02em] text-ink-faint">
              Vagas ao vivo limitadas · sem gravação · reembolso garantido do ingresso
            </p>

            <div className="mt-10 flex flex-wrap gap-7 border-t border-line pt-7">
              <Stat n="11+" l="anos de clínica" />
              <Stat n="1.000+" l="alunas formadas" />
              <Stat n="40 mil+" l="na comunidade" />
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[4px] border border-line-soft bg-nude-2">
            <Image
              src={withBasePath("/images/hero-aline.jpg")}
              alt="Dra. Aline Filgueiras"
              fill
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
            <span className="absolute bottom-3.5 left-4 rounded-[2px] bg-paper/95 px-[11px] py-[3px] font-serif text-[13px] italic text-accent-deep">
              Dra. Aline Filgueiras
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-[1.6rem] text-ink">{n}</div>
      <div className="text-[12px] tracking-[0.05em] text-ink-faint uppercase">{l}</div>
    </div>
  );
}
