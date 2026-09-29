import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// "Isso é pra mim?" com os perfis da pesquisa de público (quem já aplica,
// quem está começando e quem quer passar mais segurança à paciente).
const E = [
  "Já aplica e quer o passo a passo de uma oclusão na mão, não só na memória.",
  "Está começando e quer saber, antes de precisar, o que fazer se a cor mudar.",
  "Quer saber o que fazer depois: quando liberar a paciente, o que ela faz em casa, o que avaliar no dia seguinte.",
  "Quer passar mais segurança pra paciente, com orientações por escrito até a cicatrização.",
];

// Como na /fresh, o "não é pra você" filtra pela atitude e valoriza o material.
// Mantém o aviso honesto de compliance: é o protocolo de conduta da Aline, não
// formação, e as medicações seguem a habilitação profissional.
const NAO = [
  "Prefere confiar na memória a ter o passo a passo à vista na sala.",
  "Acha que, se acontecer, dá pra pesquisar o que fazer na hora.",
  "Procura um curso de técnica de aplicação. É o protocolo de conduta da Aline, pra consulta na hora.",
  "Quer um material que substitua formação. Ele não substitui, e as medicações seguem a sua habilitação.",
];

export function ParaQuem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Pra quem é" destaque="é pra você que…">
          O Protocolo
        </Titulo>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {E.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 70}
              className="rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span className="font-semibold text-wine-ink" aria-hidden="true">
                ✓
              </span>
              <p className="mt-2 text-[1.02rem] leading-[1.5] text-fg">{item}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-7 max-w-[600px] text-[1.02rem] leading-[1.6] text-fg-soft">
            Biomédicas, dentistas, enfermeiras, farmacêuticas, fisioterapeutas e
            esteticistas que já aplicam (ou vão aplicar) harmonização facial.
          </p>
        </Reveal>

        <Reveal className="mt-10 rounded-[6px] border border-line-soft bg-bg-3 p-6 sm:p-7">
          <h3 className="font-serif text-[1.35rem] font-semibold text-fg-soft">
            Não é pra você se…
          </h3>
          <ul className="mt-4 list-none p-0">
            {NAO.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 py-1.5 text-[1rem] leading-[1.5] text-fg-faint"
              >
                <span aria-hidden="true">×</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
