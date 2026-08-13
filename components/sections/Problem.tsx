import { Container } from "@/components/Container";
import { Mark } from "@/components/Mark";
import { Reveal } from "@/components/Reveal";

const PAINS = [
  "A insegurança de aplicar a milímetros de estruturas que você só viu desenhadas.",
  "Fazer a técnica certinha e mesmo assim não enxergar o que tem logo abaixo da pele.",
  "O medo da intercorrência vascular que ninguém quer viver na própria cadeira.",
];

export function Problem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            O ponto cego
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-medium text-[1.95rem] leading-[1.12] text-fg sm:text-[2.6rem]">
            Você estudou em atlas, slide e boneco. O rosto na sua cadeira{" "}
            <Mark>não é nenhum dos três</Mark>.
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
      </Container>
    </section>
  );
}
