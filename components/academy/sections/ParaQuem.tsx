import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// Pitch, bloco 7. Esteticistas entram (decisão de 04/10). O "não é" filtra quem
// procura promessa de agenda, que a página não faz.
const E = [
  "Você aplica harmonização, ou está se preparando pra aplicar, e quer mais segurança na mão",
  "Você ouve “vou pensar” mais do que gostaria e quer conduzir a consulta com clareza",
  "Você já fez curso e quer, enfim, juntar técnica, anatomia e consulta num lugar só",
  "Você é biomédica, dentista, enfermeira, farmacêutica, fisioterapeuta ou esteticista",
];
const NAO = [
  "Você procura fórmula de agenda cheia em sete dias. Isso a Aline não promete",
  "Você quer só um certificado, sem estudar nem aplicar o que aprendeu",
];

export function ParaQuem() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Pra quem é" destaque="e pra quem não é.">
          A Academy é pra você,
        </Titulo>
        <Reveal className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[6px] border border-line-soft bg-bg-3 p-6">
            <span className="text-[11.5px] font-semibold tracking-[0.18em] text-wine-ink uppercase">É pra você se</span>
            <ul className="mt-3 list-none p-0">
              {E.map((x) => (
                <li key={x} className="flex gap-2.5 py-2 text-[1rem] leading-[1.5] text-fg">
                  <span className="text-wine-ink" aria-hidden="true">✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[6px] border border-line-soft bg-bg-3 p-6">
            <span className="text-[11.5px] font-semibold tracking-[0.18em] text-fg-faint uppercase">Não é pra você se</span>
            <ul className="mt-3 list-none p-0">
              {NAO.map((x) => (
                <li key={x} className="flex gap-2.5 py-2 text-[1rem] leading-[1.5] text-fg-soft">
                  <span className="text-fg-faint" aria-hidden="true">×</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
