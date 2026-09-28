import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/fresh/Titulo";

// Percepção de resultado (par do components/fresh/sections/OQueVoceLeva): o que
// muda na cadeira, sempre começando pelo resultado, antes de mostrar o material.
// Cada item vem do que está no protocolo da Aline (calor e nunca gelo; decisões
// de sim ou não e a régua das 5 horas; card, fotos e retorno no dia seguinte).
// Sem promessa de "zero intercorrência".
const MUDA = [
  {
    t: "Aplicar sem aquele medo de fundo",
    d: "Saber o que fazer se acontecer tira o peso de cada aplicação. A mão fica mais tranquila.",
  },
  {
    t: "Calma no primeiro minuto",
    d: "Você já sabe o primeiro gesto antes de a dúvida chegar: parar, aquecer e massagear. Sem gelo.",
  },
  {
    t: "Nenhuma decisão no susto",
    d: "Cada passo diz o que avaliar e o que fazer se sim ou se não, até a hora de liberar a paciente.",
  },
  {
    t: "A paciente acompanhada até cicatrizar",
    d: "Ela vai pra casa com o card, te manda as fotos e volta cedo no dia seguinte. Você sabe o que avaliar.",
  },
];

export function OQueMuda() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="O que você leva" destaque="a partir de hoje.">
          O que muda na sua cadeira
        </Titulo>

        <ul className="mt-9 list-none border-t border-line p-0">
          {MUDA.map((item, i) => (
            <Reveal
              as="li"
              key={item.t}
              delay={i * 60}
              className="grid grid-cols-[34px_1fr] gap-3 border-b border-line py-[19px]"
            >
              <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
              <span>
                <span className="block text-[1.12rem] font-semibold text-fg">{item.t}</span>
                <span className="mt-1 block text-[1rem] leading-[1.5] text-fg-soft">
                  {item.d}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
