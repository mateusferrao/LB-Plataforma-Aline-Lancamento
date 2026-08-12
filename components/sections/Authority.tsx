import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { withBasePath } from "@/lib/basePath";

const STATS = [
  { target: 11, suffix: "+", l: "anos de clínica" },
  { target: 1000, suffix: "+", formatThousands: true, l: "alunas formadas" },
  { target: 30, suffix: "+", l: "certificações" },
  { target: 40, suffix: " mil+", l: "na comunidade" },
];

export function Authority() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-9 rounded-[4px] border border-line-soft bg-nude p-7 sm:gap-11 sm:p-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[3px] border border-line-soft bg-nude-3 md:aspect-auto md:h-full">
            <Image
              src={withBasePath("/images/authority-aline.jpg")}
              alt="Dra. Aline Filgueiras"
              fill
              sizes="(min-width: 768px) 320px, 70vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3.5 rounded-[2px] bg-nude/95 px-[9px] py-[2px] font-serif text-[12px] italic text-accent-deep">
              Retrato · Aline Filgueiras
            </span>
          </div>

          <div>
            <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
              Quem conduz
            </span>
            <h2 className="mt-3.5 mb-4 font-serif text-[2.1rem]">Dra. Aline Filgueiras</h2>
            <p className="max-w-[520px] text-ink-soft">
              Antes de ensinar, a Dra. Aline sentiu a mesma insegurança que você sente:
              aplicar sem enxergar de verdade o que está por baixo da pele. Foi atrás disso
              a fundo, numa temporada de dissecção nos Estados Unidos, e hoje ministra ela
              mesma vários cursos internacionais de anatomia na Europa. Soma a isso onze
              anos resolvendo os casos mais complexos da estética, a Filgueiras Academy que
              fundou e a pós-graduação em Estética Avançada e Integrativa, com selo MEC.
              Atende em Belo Horizonte e Praia Grande.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-line bg-line">
              {STATS.map((s) => (
                <div key={s.l} className="bg-nude px-[18px] py-[19px]">
                  <AnimatedNumber
                    target={s.target}
                    suffix={s.suffix}
                    formatThousands={s.formatThousands}
                    className="block font-serif text-[1.75rem] text-ink"
                  />
                  <div className="text-[12px] tracking-[0.03em] text-ink-faint">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
