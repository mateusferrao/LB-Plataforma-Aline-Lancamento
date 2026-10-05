import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import type { Modo } from "@/components/academy/CtaButton";
import { Secao } from "@/components/academy/Secao";
import { withBasePath } from "@/lib/basePath";
import { ACADEMY, SALA } from "@/lib/ofertaAcademy";

// O que tem dentro, em quatro linhas (antes: 4 cards com 15 cursos). Cursos
// conferidos no Memberkit em 04/10: Full Face, Análise de casos e Fios não entram.
const ITENS = [
  {
    t: "Anatomia em fresh frozen",
    novo: true,
    d: "O curso online de dissecção: a face por dentro, camada por camada. Sem visto e sem passagem.",
  },
  { t: "Técnica", d: "Mais de 70 aulas de toxina, preenchimento e bioestimuladores, com intercorrências e anestesia." },
  { t: "Consulta", d: "A Consulta que Vende, marketing, posicionamento e as ferramentas prontas: anamnese, termos e precificação." },
  { t: "Encontros ao vivo", d: "Todo mês na Sala de Lapidação, com as gravações dentro da plataforma." },
] as const;

export function Recebe({ modo }: { modo: Modo }) {
  const meses = modo === "sala" ? SALA.mesesAcesso : ACADEMY.mesesAcesso;
  return (
    <Secao>
      <Titulo eyebrow="O que você recebe">{ACADEMY.nome}</Titulo>
      <Reveal>
        <p className="mt-4 text-[1.1rem] leading-[1.6] text-fg-soft">
          {meses} meses de acesso a tudo, no celular ou no computador.
        </p>
        <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-[4px] border border-line-soft bg-surface">
          <Image
            src={withBasePath("/images/fresh/lab-luvas.webp")}
            alt="Dra. Aline Filgueiras calçando as luvas no laboratório de dissecção"
            fill
            sizes="(min-width: 768px) 620px, 90vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </Reveal>

      <Reveal as="ol" className="mt-9 list-none p-0">
        {ITENS.map((it, i) => (
          <li key={it.t} className="grid grid-cols-[36px_1fr] gap-3 py-3.5">
            <span className="font-serif text-[1.5rem] leading-none text-wine-ink">{i + 1}</span>
            <div>
              <h3 className="flex flex-wrap items-center gap-2 font-sans text-[1.15rem] font-semibold tracking-[-0.005em] text-fg uppercase">
                {it.t}
                {"novo" in it && it.novo && (
                  <span className="rounded-[2px] bg-wine px-1.5 py-0.5 text-[10.5px] font-semibold tracking-[0.12em] text-on-wine">
                    NOVO
                  </span>
                )}
              </h3>
              <p className="mt-1 text-[1rem] leading-[1.55] text-fg-soft">{it.d}</p>
            </div>
          </li>
        ))}
      </Reveal>
    </Secao>
  );
}
