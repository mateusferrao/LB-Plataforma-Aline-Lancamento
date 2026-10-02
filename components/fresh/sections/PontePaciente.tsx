import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// Ponte com a dor nº 1 da pesquisa (captação/paciente) sem prometer agenda nem
// faturamento (decisões de 02/10): a segurança de quem aplica é o que a
// paciente percebe, é o que ela lembra quando indica, e ter visto a face em
// fresh frozen é um diferencial caro e difícil de ter. "Cobrar pelo que
// entrega" é a frase já aprovada no playbook (FAQ 13). Nenhum número de ganho.
const PASSOS = [
  {
    t: "Ela percebe a sua segurança",
    d: "Quem sabe o que está embaixo da pele explica o procedimento com calma e responde a dúvida sem hesitar.",
  },
  {
    t: "Ela volta e indica",
    d: "É dessa calma que a paciente lembra quando alguém pergunta com quem ela faz.",
  },
  {
    t: "Você cobra pelo que entrega",
    d: "Ter visto a face em cadáver fresh frozen é um diferencial caro e difícil de ter. E quem entende o que faz não precisa disputar preço.",
  },
];

export function PontePaciente() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Do outro lado da cadeira" destaque="percebe.">
          A paciente
        </Titulo>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PASSOS.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 90}
              className="rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
              <h3 className="mt-2 text-[1.08rem] font-semibold text-fg">{p.t}</h3>
              <p className="mt-1.5 text-[1rem] leading-[1.5] text-fg-soft">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
