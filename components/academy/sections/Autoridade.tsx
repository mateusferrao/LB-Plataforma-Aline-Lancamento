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

// Mesma história da /fresh, contada pelos três momentos: a Aline viveu a
// insegurança na agulha (dissecção) e na consulta antes de ensinar as duas.
// Sem citar o curso presencial nos EUA como próxima oferta (decisão de 04/10).
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
              Antes de ensinar, a Aline passou pelas duas inseguranças. Na agulha, aplicava sem
              enxergar o que está embaixo da pele, até fazer o primeiro curso de dissecção, em 2018.
              Depois vieram os estudos em fresh frozen nos Estados Unidos e em Portugal.
            </p>
            <p className="mt-4 max-w-[520px] text-fg-soft">
              Na consulta, ouviu muito &ldquo;vou pensar&rdquo; até organizar o atendimento em passos
              claros. É essa soma que ela ensina na Filgueiras Academy. Fundou também a pós em
              Estética Avançada e Integrativa e atende em Belo Horizonte e Praia Grande.
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
