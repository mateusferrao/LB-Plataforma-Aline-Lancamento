import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { Secao } from "@/components/academy/Secao";
import { withBasePath } from "@/lib/basePath";

// Prova da Academy (revisão de 06/10): três prints fixos e legíveis no celular,
// um pra cada momento (agulha, consulta, segurança), em vez do carrossel da /fresh.
// O print da consulta é um comentário dentro da plataforma. A nota das avaliações
// vem da MemberKit (abril de 2026: preenchimento 24 promotoras e 1 neutra,
// bioestimuladores 24 promotoras). Sem print de faturamento.
const PROVAS = [
  {
    rotulo: "Na agulha",
    frase: "“Fiz cursos presenciais e nunca tinha feito uma boca tão linda.”",
    src: "/images/depoimento-1.jpg",
    w: 1290,
    h: 1484,
    alt: "Print de aluna: fiz cursos presenciais e nunca tinha feito uma boca tão linda. Assinei a plataforma e a boca da paciente ficou perfeita.",
  },
  {
    rotulo: "Na consulta",
    frase: "“Super esclarecedora e de fácil entendimento pra colocar em prática.”",
    src: "/images/depoimento-2.jpg",
    w: 464,
    h: 206,
    alt: "Comentário de aluna na aula 3 dos 5 passos da Consulta que Vende: amei as 3 aulas da consulta, super esclarecedora e de fácil entendimento.",
  },
  {
    rotulo: "Na segurança",
    frase: "“Profissionais mais humanos e seguros.”",
    src: "/images/depoimento-12.jpg",
    w: 1000,
    h: 1136,
    alt: "Print de aluna: saio desse curso com a certeza de estar aprendendo com a pessoa certa, que nos torna profissionais mais humanos e seguros.",
  },
] as const;

export function Prova() {
  return (
    <Secao>
      <Titulo eyebrow="Prints reais de alunas da Aline" destaque="mais seguras.">
        Elas voltaram pra cadeira
      </Titulo>
      <Reveal>
        <p className="mt-5 text-[1.05rem] leading-[1.6] text-fg-soft">
          Nas avaliações das aulas de preenchimento e de bioestimuladores em abril,{" "}
          <strong className="font-semibold text-fg">48 de 49 notas foram 9 ou 10</strong>.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-8">
        {PROVAS.map((p) => (
          <Reveal key={p.src} className="rounded-[6px] border border-line p-5">
            <span className="text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">{p.rotulo}</span>
            <p className="mt-2 font-serif text-[1.25rem] leading-[1.35] text-fg italic">{p.frase}</p>
            <div className="mt-4 overflow-hidden rounded-[4px] border border-line-soft bg-white">
              <Image
                src={withBasePath(p.src)}
                alt={p.alt}
                width={p.w}
                height={p.h}
                sizes="(min-width: 768px) 560px, 92vw"
                className="mx-auto h-auto max-h-[460px] w-auto max-w-full object-contain"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Secao>
  );
}
