import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/fresh/Titulo";
import { BonusCountdown } from "@/components/info/BonusCountdown";
import { SoComBonus } from "@/components/info/SoComBonus";
import { formatBRL, ITEM_AULA } from "@/lib/ofertaKit";
import { withBasePath } from "@/lib/basePath";

const DETALHES = [
  "6 de outubro, às 20h (Brasília)",
  "Ao vivo e online, cerca de 90 minutos",
  "Sem gravação: só quem está na sala",
  "Acesso pelo grupo do WhatsApp",
];

// Overdelivery: a aula entra de presente, pelo valor real do ingresso vendido
// sozinho (ITEM_AULA.valorDe), sem âncora inventada. O protocolo mostra o que
// fazer; a aula mostra, por dentro, onde tudo acontece. Formato como na /fresh:
// aula de estúdio com as imagens das dissecções da Aline (nunca "direto da mesa
// de dissecção"). Some sozinha depois da aula. (Sem "tira-dúvidas": a aula não tem.)
export function BonusAula() {
  return (
    <SoComBonus>
      <section className="py-16 sm:py-[92px]">
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-10 rounded-[6px] border border-line-soft bg-bg-2 p-7 sm:p-12 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
            <Reveal className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:aspect-auto md:h-full">
              <Image
                src={withBasePath("/images/info/aula-lab-luvas.webp")}
                alt="Dra. Aline Filgueiras calçando as luvas no laboratório de dissecção, nos Estados Unidos"
                fill
                sizes="(min-width: 768px) 320px, 80vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-[2px] bg-bg/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur-sm">
                Laboratório de dissecção · EUA
              </span>
            </Reveal>

            <div>
              <Titulo eyebrow="De presente até 6 de outubro" destaque="A aula ao vivo vem de presente.">
                Você leva o Protocolo.
              </Titulo>
              <Reveal delay={90}>
                <p className="mt-6 max-w-[540px] text-[1.06rem] leading-[1.6] text-fg-soft">
                  O protocolo mostra o que fazer se acontecer. A aula mostra, por dentro, onde
                  tudo acontece. Na <em className="font-serif text-fg">Por Dentro da Face</em>, a
                  Dra. Aline, que estudou e dá cursos internacionais em cadáver fresh frozen nos
                  EUA e na Europa, mostra nas imagens das dissecções dela os planos, as
                  estruturas e os limites que mudam a conduta na cadeira.
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {DETALHES.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-[0.98rem] text-fg">
                      <span
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-wine-ink"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[1rem] text-fg-soft">
                  Valor do ingresso vendido sozinho:{" "}
                  <s className="text-fg-faint">{formatBRL(ITEM_AULA.valorDe ?? 0)}</s>{" "}
                  <span className="font-semibold text-fg">· pra você, de presente</span>
                </p>

                <BonusCountdown className="mt-7" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </SoComBonus>
  );
}
