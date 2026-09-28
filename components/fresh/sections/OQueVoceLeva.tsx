import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// O que ela leva da noite, sempre começando pelo resultado. Base: o que a aula
// mostra segundo o playbook (docs/agente-ia/01-playbook-vendas.md, seção 6).
// Sem roteiro em blocos até a Aline confirmar.
const LEVA = [
  {
    t: "Segurança perto das áreas de risco",
    d: "Você vê onde está o risco que o atlas não mostra, a milímetros da agulha.",
  },
  {
    t: "A mão que para de hesitar",
    d: "Você sai sabendo onde ficam os limites de cada região e até onde ir.",
  },
  {
    t: "Resultado que se repete em cada rosto",
    d: "Você entende por que a mesma técnica dá resultados diferentes em rostos diferentes.",
  },
  {
    t: "Previsibilidade no preenchimento",
    d: "Você vê em que plano o produto se acomoda depois de aplicado, não a expectativa do rótulo.",
  },
];

export function OQueVoceLeva() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="O que você leva" destaque="na semana seguinte.">
          O que muda na sua cadeira
        </Titulo>

        <ul className="mt-9 list-none border-t border-line p-0">
          {LEVA.map((item, i) => (
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
