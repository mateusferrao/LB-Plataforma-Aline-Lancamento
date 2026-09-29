import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// "Isso é pra mim?" + o "não é pra você", que filtra pela atitude e reforça o
// valor de quem fica. Perfis e frases da pesquisa de público.
const E = [
  "Já fez curso e ainda hesita em algumas regiões.",
  "Está começando e quer aprender no lugar certo, antes de pegar vício.",
  "Sonha em estudar em cadáver fresh frozen e ainda não pôde ir.",
  "Quer explicar pra paciente o que está fazendo, com segurança.",
];

// O "não é pra você" filtra pela atitude, não pelo formato: valoriza a aula
// (quem entra quer ir além do protocolo) e mantém só o aviso honesto da data.
const NAO = [
  "Acha que mais um protocolo decorado vai resolver a insegurança.",
  "Prefere continuar evitando algumas regiões a entender o que existe nelas.",
  "Está satisfeita em aplicar só o básico, do mesmo jeito em todo rosto.",
  "Não pode estar ao vivo no dia 6, às 20h. É uma noite só, sem gravação.",
];

export function ParaQuem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Pra quem é" destaque="é pra você que…">
          Essa noite
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
