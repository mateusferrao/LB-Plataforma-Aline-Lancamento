import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

const STATS = [
  { target: 12, suffix: "+", l: "anos de clínica" },
  { target: 1000, suffix: "+", formatThousands: true, l: "alunas formadas" },
  { target: 30, suffix: "+", l: "certificações" },
  { target: 40, suffix: " mil+", l: "na comunidade" },
];

// História da Aline no próprio Human Action Model: ela tinha a mesma
// insegurança, a dissecção foi o caminho. Foto real do laboratório nos EUA.
export function Autoridade() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container>
        <Reveal className="grid grid-cols-1 items-stretch gap-9 rounded-[6px] border border-line-soft bg-bg-2 p-7 sm:gap-11 sm:p-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:aspect-auto md:h-full">
            <Image
              src={withBasePath("/images/fresh/lab-braco-erguido.webp")}
              alt="Dra. Aline Filgueiras sorrindo no laboratório de dissecção nos EUA"
              fill
              sizes="(min-width: 768px) 320px, 70vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
              Quem conduz
            </span>
            <h2 className="mt-3.5 mb-4 font-sans font-semibold text-[1.9rem] tracking-[-0.015em] text-fg sm:text-[2.1rem]">
              Dra. Aline Filgueiras
            </h2>
            <p className="max-w-[520px] text-fg-soft">
              Antes de ensinar, a Aline passou pela mesma insegurança que você sente:
              aplicar sem enxergar o que está embaixo da pele. Isso mudou em 2018, quando
              ela fez o primeiro curso de dissecção. Ver a face por dentro deu a ela uma
              segurança que nenhum atlas tinha dado, e foi o que destravou a carreira dela.
            </p>
            <p className="mt-4 max-w-[520px] text-fg-soft">
              Depois veio a temporada de dissecção em cadáver fresh frozen nos Estados
              Unidos. Hoje ela dá cursos internacionais de fresh frozen nos EUA e na Europa.
              Fundou a Filgueiras Academy e a pós em Estética Avançada e Integrativa, e atende
              em Belo Horizonte e Praia Grande.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line">
              {STATS.map((s) => (
                <div key={s.l} className="bg-bg-3 px-[18px] py-[19px]">
                  <AnimatedNumber
                    target={s.target}
                    suffix={s.suffix}
                    formatThousands={s.formatThousands}
                    className="block font-serif text-[1.75rem] text-fg"
                  />
                  <div className="text-[12px] tracking-[0.03em] text-fg-faint">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
