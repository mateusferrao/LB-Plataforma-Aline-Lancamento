import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// Dores na voz da pesquisa de público ("medo de errar", "receio de realizar
// alguns procedimentos"): o medo é de não saber o que fazer, não da técnica.
// Tom de preparo, nunca de pânico (ver docs/criativos/README.md, compliance).
const PAINS = [
  "A paciente manda uma foto à noite e você fica em dúvida: é o roxo esperado ou é o começo de um problema?",
  "Na glabela e no nariz, a mão hesita. Você sabe que ali o risco é maior, mas não tem o mapa à vista.",
  "O que fazer numa emergência está espalhado em anotações de curso e PDFs no celular. Na hora, ninguém procura arquivo.",
];

export function Problem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Na hora que importa
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">
              Você sabe que é raro. Também sabe que, se acontecer, vai ser na sua cadeira.
            </span>
          </h2>
        </Reveal>

        <div className="mt-[38px] grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PAINS.map((pain, i) => (
            <Reveal
              key={pain}
              delay={i * 90}
              className="rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
              <p className="mt-2.5 text-[1.02rem] leading-[1.5] text-fg-soft">{pain}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 max-w-[600px] font-serif text-[1.28rem] leading-[1.4] text-fg italic">
            Intercorrência não avisa. O que você controla é o quanto está preparada quando
            ela chega. Na dúvida, trate como alerta: tempo é tecido.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
