import { Reveal } from "@/components/Reveal";
import { Secao } from "@/components/academy/Secao";

// A dor como cena concreta (molde da página de referência), com as palavras
// da pesquisa "Aline - 2025": o medo de errar, a mão que hesita, o "vou pensar",
// "fiz curso e continuo perdida".
const PERGUNTAS = [
  "Qual é a profundidade aqui?",
  "Tem vaso nesse ponto?",
  "E se der intercorrência?",
  "E se ela perceber que eu tô insegura?",
] as const;

const CONSEQUENCIAS = [
  ["Se a mão hesita,", "a paciente percebe."],
  ["Se você trava na consulta,", "ela diz “vou pensar” e não volta."],
  ["Se ela sai da consulta sem marcar,", "a sua agenda fica parada."],
  ["O curso ensinou o passo a passo,", "mas ninguém te mostrou a face por dentro."],
  ["E na hora da agulha", "não tem professora do seu lado pra perguntar."],
] as const;

export function Cena() {
  return (
    <Secao>
      <Reveal>
        <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">Você conhece essa cena</span>
        <h2 className="mt-4 text-balance font-sans font-semibold text-[1.75rem] leading-[1.18] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          A paciente está na maca. A seringa, na sua mão.
        </h2>
        <p className="mt-6 text-[1.1rem] text-fg-soft">E na sua cabeça começa a lista:</p>
      </Reveal>

      <Reveal as="ul" className="mt-4 list-none p-0">
        {PERGUNTAS.map((q) => (
          <li key={q} className="py-1 font-sans text-[1.35rem] font-semibold leading-[1.25] tracking-[-0.01em] text-fg uppercase sm:text-[1.6rem]">
            {q}
          </li>
        ))}
      </Reveal>

      <Reveal as="ul" className="mt-9 list-none border-l-2 border-wine-ink p-0 pl-5">
        {CONSEQUENCIAS.map(([b, r]) => (
          <li key={b} className="py-1.5 text-[1.05rem] leading-[1.55] text-fg-soft">
            <strong className="font-semibold text-fg">{b}</strong> {r}
          </li>
        ))}
      </Reveal>
    </Secao>
  );
}
