import { Container } from "@/components/Container";
import { CaixinhaProof } from "@/components/CaixinhaProof";

const PAINS = [
  "A insegurança de aplicar a milímetros de estruturas que você nunca viu de verdade — só desenhadas.",
  "A sensação de executar bem a técnica, mas sem enxergar o que está logo abaixo da pele.",
  "O medo, legítimo, da intercorrência vascular que ninguém quer viver na própria cadeira.",
];

export function Problem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
          O ponto cego
        </span>
        <h2 className="mt-[18px] text-balance font-serif text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
          Você estudou em atlas, slide e boneco. O rosto na sua cadeira não é nenhum dos
          três.
        </h2>
        <div className="mt-[38px] border-t border-line">
          {PAINS.map((pain) => (
            <p
              key={pain}
              className="max-w-[640px] border-b border-line py-6 text-[1.12rem] leading-[1.5]"
            >
              {pain}
            </p>
          ))}
        </div>

        <CaixinhaProof />
      </Container>
    </section>
  );
}
