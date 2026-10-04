import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// A grande ideia (pitch, blocos 1 e 2): a paciente decide se confia em você na
// consulta, na agulha e no espelho. As dores vêm das palavras da pesquisa e dos
// anúncios de 2025 ("vou pensar", a mão que hesita).
const MOMENTOS = [
  {
    n: "1",
    titulo: "Na consulta",
    cena: "Quando ela pergunta “você já fez isso?”. Quando fala de preço. Quando diz “vou pensar”… e some. Muitas vezes não foi o preço: ela não sentiu segurança.",
    academy: "A Consulta que Vende, marketing, posicionamento e as ferramentas prontas.",
  },
  {
    n: "2",
    titulo: "Na agulha",
    cena: "Quando você chega perto do nariz, da glabela, do sulco. Se a sua mão hesita, ela percebe. O que faz a mão parar de hesitar é saber o que tem embaixo.",
    academy: "O novo curso de Fresh Frozen e dissecção, intercorrências e anestesia.",
  },
  {
    n: "3",
    titulo: "No espelho",
    cena: "Quando ela se olha depois. É ali que decide se volta e se indica. Resultado natural é técnica, planejamento e entender por que a mesma técnica muda em cada rosto.",
    academy: "Mais de 70 aulas práticas de toxina, preenchimento e bioestimuladores.",
  },
] as const;

export function TresMomentos() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Consulta · Agulha · Espelho" destaque="três vezes.">
          A paciente decide se confia em você
        </Titulo>
        <Reveal>
          <p className="mt-5 max-w-[600px] text-[1.08rem] leading-[1.6] text-fg-soft">
            Ela não vê a sua anatomia nem o seu certificado. Ela sente a sua segurança, em três
            momentos.
          </p>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {MOMENTOS.map((m, i) => (
            <Reveal key={m.titulo} delay={i * 80} className="flex flex-col rounded-[6px] border border-line-soft bg-bg-3 p-7">
              <span className="font-serif text-[2.2rem] leading-none text-wine-ink">{m.n}</span>
              <h3 className="mt-3 font-serif text-[1.45rem] text-fg">{m.titulo}</h3>
              <p className="mt-3 text-[1rem] leading-[1.6] text-fg-soft">{m.cena}</p>
              <p className="mt-auto border-t border-line pt-4 text-[0.95rem] leading-[1.5] text-fg">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
                  Na Academy ·{" "}
                </span>
                {m.academy}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-[620px] text-center font-serif text-[1.15rem] leading-[1.5] text-fg-soft italic">
            Quase todo curso cuida de um desses momentos só. Aí você sai com a técnica e trava na
            consulta. Ou vende bem, e a mão não acompanha.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
