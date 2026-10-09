import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { Secao } from "@/components/academy/Secao";
import { CtaEx } from "@/components/academy/exalunas/CtaEx";
import { EXALUNAS } from "@/lib/ofertaAcademy";

// A objeção nº 1 de quem já assinou ("assinei e não usei"), respondida pela mentoria.
const PONTOS = [
  "Encontros ao vivo, online, com a Aline",
  "Você leva os seus casos e as suas dúvidas",
  `A mentoria em grupo junto com os seus ${EXALUNAS.mesesAcesso} meses de plataforma`,
];

export function MentoriaEx() {
  return (
    <Secao>
      <Titulo eyebrow="Se da outra vez faltou tempo" destaque="não estuda sozinha.">
        Dessa vez você
      </Titulo>
      <Reveal>
        <p className="mt-5 text-[1.08rem] leading-[1.6] text-fg-soft">
          Muita gente assina, assiste às primeiras aulas e deixa o resto pra depois, porque a rotina do consultório
          engole a semana. A mentoria em grupo muda isso: você tem encontro marcado com a Aline, em grupo, e chega
          com os casos da sua cadeira.
        </p>
      </Reveal>
      <Reveal>
        <ul className="mt-6 grid list-none gap-2.5 p-0">
          {PONTOS.map((p) => (
            <li key={p} className="flex items-baseline gap-2.5 text-[1.03rem] text-fg">
              <span className="text-wine-ink" aria-hidden="true">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal>
        <CtaEx className="mt-8 w-full sm:w-auto">Quero voltar com a mentoria</CtaEx>
      </Reveal>
    </Secao>
  );
}
