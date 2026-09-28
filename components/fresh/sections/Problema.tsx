import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// Dor na voz da pesquisa de público (abr/2025, 340 respostas): as frases entre
// aspas são reais. A palavra que elas usam é "insegurança", não "intercorrência".
const DORES = [
  "Você sabe o protocolo, mas em algumas regiões a mão hesita.",
  "Você fica no básico porque ainda não tem segurança pra ir além.",
  "Você sente que a paciente percebe quando você está insegura.",
];

export function Problema() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Se isso é você" destaque="E a mão ainda trava.">
          Você já fez curso. Talvez mais de um.
        </Titulo>

        <Reveal>
          <p className="mt-6 max-w-[600px] text-[1.1rem] leading-[1.6] text-fg-soft">
            Quando a Aline perguntou a mais de 300 profissionais da estética o que as impede
            de crescer, as mesmas frases voltaram muitas vezes: <em className="text-fg">“medo
            de errar”</em>, <em className="text-fg">“receio de realizar alguns
            procedimentos”</em>, <em className="text-fg">“cursos muito vazios”</em>,{" "}
            <em className="text-fg">“faltou a parte prática”</em>.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {DORES.map((dor, i) => (
            <Reveal
              key={dor}
              delay={i * 90}
              className="rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
              <p className="mt-2.5 text-[1.02rem] leading-[1.5] text-fg-soft">{dor}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 max-w-[600px] font-serif text-[1.28rem] leading-[1.4] text-fg italic">
            Não é falta de curso. É que quase todo curso ensina o protocolo em cima de um
            desenho.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
