import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// Dores na linguagem da pesquisa de público: a maioria já fez curso de HOF e
// trava na DECISÃO (ponto certo pra cada caso, resultado que muda de rosto pra
// rosto, medo de intercorrência) — não na técnica em si.
const PAINS = [
  "Você sabe a técnica, mas trava na hora de escolher o ponto certo para aquele rosto.",
  "A mesma técnica que ficou linda numa paciente fica sem graça na outra, e você não sabe explicar por quê.",
  "O medo da intercorrência vascular faz a sua mão hesitar a milímetros de estruturas que você só viu desenhadas.",
];

export function Problem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            O ponto cego
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">
              Você aprendeu o protocolo. Ninguém te ensinou a decidir quando o rosto foge dele.
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
              <span className="font-serif text-[1.05rem] text-wine-ink">
                0{i + 1}
              </span>
              <p className="mt-2.5 text-[1.02rem] leading-[1.5] text-fg-soft">{pain}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 max-w-[600px] font-serif text-[1.28rem] leading-[1.4] text-fg italic">
            Isso não se resolve com mais um curso de técnica. Técnica é só a primeira das 3
            camadas. Faltam as outras duas: anatomia e resultado.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
