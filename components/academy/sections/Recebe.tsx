import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { Secao } from "@/components/academy/Secao";
import { ACADEMY } from "@/lib/ofertaAcademy";

// O mapa da plataforma (revisão de 06/10): antes eram 4 linhas genéricas ("mais
// de 70 aulas"); agora cada trilha mostra o que tem dentro, com os números de
// aulas conferidos na MemberKit em 06/10. Full Face, Análise de casos e Fios não
// entram na Academy (conferido em 04/10). O curso de anatomia vai sem número de
// aulas (estava sendo publicado em 06/10).
type Curso = { t: string; n?: number; d: string; novo?: boolean };

const TRILHAS: { nome: string; titulo: string; cursos: Curso[] }[] = [
  {
    nome: "Agulha",
    titulo: "A face por dentro e a técnica, região por região",
    cursos: [
      {
        t: "Anatomia em Fresh Frozen",
        novo: true,
        d: "Dissecção e aplicação em peças fresh frozen: os planos, os vasos e os limites que mudam a conduta. Sem visto e sem passagem.",
      },
      { t: "Preenchimento facial", n: 40, d: "Malar, nariz, olheiras, mandíbula, lábio, mento, têmporas, canto de boca e orelha." },
      { t: "Bioestimuladores de colágeno", n: 24, d: "Da diluição ao planejamento e à aplicação." },
      { t: "Toxina botulínica", n: 14, d: "Da introdução às demonstrações práticas." },
      { t: "Intercorrências", n: 6, d: "Pra saber o que fazer se a cor mudar." },
      { t: "Anestesia", n: 3, d: "Montagem do material e anestesia extraoral." },
    ],
  },
  {
    nome: "Consulta",
    titulo: "Pra paciente dizer sim na consulta e voltar",
    cursos: [
      { t: "A Consulta que Vende", d: "O roteiro da consulta, pra ela não sair com um “vou pensar”." },
      { t: "Vendas", n: 6, d: "Campanhas comerciais e estratégias de consultório." },
      { t: "Marketing nas redes", n: 8, d: "Produção de conteúdo pro seu perfil." },
      { t: "Posicionamento de imagem", n: 4, d: "Como você se apresenta antes de a paciente chegar." },
      { t: "Dicas jurídicas", n: 4, d: "Com o escritório Juk Cattani Advogados Associados." },
      { t: "Material de apoio", n: 6, d: "Anamnese, termos e precificação prontos pra usar." },
    ],
  },
  {
    nome: "Espelho",
    titulo: "A Aline perto, enquanto você aplica",
    cursos: [
      { t: "6 encontros ao vivo no ano", d: "Com a Aline ou o time dela. Você leva as dúvidas do consultório; as gravações ficam na plataforma." },
      { t: "1 aula ao vivo de casos com a Aline", d: "Pra ver como ela pensa a conduta, caso a caso." },
      { t: "Preferência nos cursos presenciais", d: "Pra garantir a vaga quando quiser o hands-on." },
    ],
  },
];

export function Recebe() {
  return (
    <Secao>
      <Titulo eyebrow="Por dentro da Filgueiras Academy" destaque="da anatomia ao fechamento na consulta.">
        Três trilhas, mais de 80 aulas,
      </Titulo>
      <Reveal>
        <p className="mt-4 text-[1.1rem] leading-[1.6] text-fg-soft">
          {ACADEMY.mesesAcesso} meses de acesso a tudo, no celular ou no computador. Uma trilha pra cada
          momento em que a paciente decide se confia em você.
        </p>
      </Reveal>

      {TRILHAS.map((tr, i) => (
        <Reveal key={tr.nome} className="mt-10">
          <div className="flex items-baseline gap-3 border-b border-line pb-3">
            <span className="font-serif text-[1.5rem] leading-none text-wine-ink">{i + 1}</span>
            <div>
              <h3 className="font-sans text-[1.2rem] font-semibold tracking-[-0.005em] text-fg uppercase">{tr.nome}</h3>
              <p className="text-[0.95rem] text-fg-soft">{tr.titulo}</p>
            </div>
          </div>
          <ul className="list-none p-0">
            {tr.cursos.map((c) => (
              <li key={c.t} className="flex items-baseline justify-between gap-4 border-b border-dashed border-line py-3">
                <span>
                  <span className="flex flex-wrap items-center gap-2 text-[1.02rem] font-semibold text-fg">
                    {c.t}
                    {c.novo && (
                      <span className="rounded-[2px] bg-wine px-1.5 py-0.5 text-[10.5px] font-semibold tracking-[0.12em] text-on-wine">
                        NOVO
                      </span>
                    )}
                  </span>
                  <small className="mt-0.5 block text-[0.92rem] leading-[1.45] text-fg-soft">{c.d}</small>
                </span>
                {c.n ? <span className="shrink-0 text-[0.9rem] text-wine-ink tabular-nums">{c.n} aulas</span> : null}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </Secao>
  );
}
