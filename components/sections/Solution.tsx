import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";

const SEE = [
  "Onde mora o risco real — e como a anatomia muda a sua mão antes da agulha.",
  "Por que alguns resultados ficam naturais e outros não? A resposta mora nos planos anatômicos, não na técnica.",
  "O que a dissecção revela e o atlas nunca mostrou.",
  "Se você souber onde estão os limites de verdade, sua mão nunca mais hesita na agulha.",
];

export function Solution() {
  return (
    <>
      <hr className="border-line" />
      <section className="py-16 sm:py-[92px]">
        <Container narrow>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
            Por dentro da face
          </span>
          <h2 className="mt-[18px] text-balance font-serif text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            Eu fui até a mesa de dissecção pra te trazer o que o superficial esconde.
          </h2>
          <p className="mt-[22px] max-w-[600px] text-[1.2rem] leading-[1.6] text-ink-soft">
            Na aula ao vivo, a Aline abre — de verdade — o caminho por baixo da pele: os
            planos, as estruturas e os limites que transformam a sua conduta. É o rigor do
            curso internacional presencial, traduzido pra uma noite ao vivo.
          </p>

          <ul className="mt-9 list-none p-0">
            {SEE.map((item) => (
              <li
                key={item}
                className="max-w-[660px] border-b border-line-soft py-[18px] text-[1.08rem]"
              >
                {item}
              </li>
            ))}
            <li className="max-w-[660px] pt-[26px] font-serif text-[1.28rem] text-accent-deep italic">
              No fim, em primeira mão: a nova fase que só quem está na sala vê nascer.
            </li>
          </ul>

          <CtaButton className="mt-9 w-full justify-center sm:w-auto sm:justify-start">
            Quero minha vaga <span className="font-serif text-[1.16rem]">· R$67</span>
          </CtaButton>
        </Container>
      </section>
    </>
  );
}
