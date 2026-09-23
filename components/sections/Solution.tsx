import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

const SEE = [
  "Onde está o risco que os atlas não mostram, a milímetros da sua agulha.",
  "Por que a mesma técnica dá resultados diferentes em cada rosto, e como ler isso antes de aplicar.",
  "Como os planos da face mudam a escolha do ponto de aplicação em cada caso.",
  "Até onde ir: os limites que fazem a sua mão parar de hesitar.",
  "Como o preenchedor se acomoda na face depois de aplicado, e não o que promete o rótulo.",
];

export function Solution({ comVsl }: { comVsl: boolean }) {
  return (
    <>
      <section className="py-16 sm:py-[92px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-9 sm:gap-[54px] md:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:aspect-auto md:h-full md:self-stretch">
              {/* FOTO: aline-solution-grafite-bw.jpg — blazer grafite, movimento/energia (P&B via grayscale).
                  (arquivo atual é stand-in; sobrescreva com a foto real de mesmo nome) */}
              <Image
                src={withBasePath("/images/aline-solution-grafite-bw.jpg")}
                alt="Dra. Aline Filgueiras"
                fill
                sizes="(min-width: 768px) 360px, 80vw"
                className="object-cover grayscale"
              />
            </Reveal>

            <Reveal>
              <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
                Por dentro da face
              </span>
              <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
                <span className="titulo-grifo">
                  Anatomia e resultado se aprendem vendo o que a pele esconde.
                </span>
              </h2>
              <p className="mt-[22px] max-w-[600px] text-[1.12rem] leading-[1.6] text-fg-soft">
                Na aula ao vivo, a Aline abre a face por dentro, direto da mesa de dissecção:
                os planos, as estruturas e os limites que decidem o resultado antes da agulha
                entrar. É o mesmo rigor do curso internacional que ela dá presencialmente,
                numa noite só.
              </p>

              <ul className="mt-7 list-none p-0">
                {SEE.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-b border-line-soft py-[16px] text-[1.02rem] leading-[1.5] text-fg"
                  >
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-wine-ink"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-l-2 border-wine pl-4 font-serif text-[1.28rem] leading-[1.4] text-fg italic">
                No fim, quem está na sala vê a nova fase nascer em primeira mão.
              </p>

              <CtaButton
                requireVsl={comVsl}
                className="mt-8 w-full justify-center sm:w-auto sm:justify-start"
              >
                Quero minha vaga
              </CtaButton>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
