import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
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
        <Reveal className="grid grid-cols-1 items-stretch gap-9 rounded-[6px] border border-line-soft bg-bg-2 p-7 sm:gap-11 sm:p-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:aspect-auto md:h-full">
            {/* FOTO: aline-authority-marsala.jpg — blazer marsala, sentada, COLORIDA.
                (arquivo atual é stand-in; sobrescreva com a foto real de mesmo nome) */}
            <Image
              src={withBasePath("/images/aline-authority-marsala-v2.jpg")}
              alt="Dra. Aline Filgueiras"
              fill
              sizes="(min-width: 768px) 320px, 70vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
              Quem conduz
            </span>
            <h2 className="mt-3.5 mb-4 font-serif font-semibold text-[2.1rem] text-fg">Dra. Aline Filgueiras</h2>
            <p className="max-w-[520px] text-fg-soft">
              Antes de ensinar, a Aline passou pela mesma insegurança que você sente:
              aplicar sem enxergar o que está embaixo da pele. Isso mudou em 2018, quando
              ela fez o primeiro curso de dissecção. Ver a face por dentro deu a ela uma
              segurança que nenhum atlas tinha dado, e foi o que destravou a carreira dela.
              Depois vieram uma temporada de dissecção nos Estados Unidos e os cursos
              internacionais de anatomia que ela dá hoje na Europa. São onze anos resolvendo
              os casos mais complexos da estética. Ela fundou a Filgueiras Academy e a pós em
              Estética Avançada e Integrativa, e atende em Belo Horizonte e Praia Grande.
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
