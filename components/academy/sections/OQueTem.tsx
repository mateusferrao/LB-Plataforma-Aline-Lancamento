import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import type { Modo } from "@/components/academy/CtaButton";
import { withBasePath } from "@/lib/basePath";
import { ACADEMY, SALA } from "@/lib/ofertaAcademy";

// O que o plano libera, por pilar. Cursos e contagem de aulas conferidos no
// Memberkit em 04/10/2026 (plano = Filgueiras Academy Anual + Anatomia + Sala
// de Lapidação). Full Face e Análise de casos NÃO entram. Fios não existe.
type Curso = { nome: string; aulas?: string; d: string; novo?: boolean };

const PILARES: { pilar: string; titulo: string; cursos: Curso[] }[] = [
  {
    pilar: "Agulha",
    titulo: "Pra mão parar de hesitar",
    cursos: [
      {
        nome: "Anatomia · Por Dentro da Face",
        d: "Dissecção e aplicação em fresh frozen: a face como ela é por dentro.",
        novo: true,
      },
      { nome: "Intercorrência na Harmonização", aulas: "6 aulas", d: "O que fazer quando algo sai do esperado." },
      { nome: "Anestesia na Harmonização Facial", aulas: "3 aulas", d: "Montagem do material e anestesia extraoral." },
    ],
  },
  {
    pilar: "Espelho",
    titulo: "Pro resultado que faz ela voltar",
    cursos: [
      {
        nome: "Preenchimento Facial",
        aulas: "35 aulas",
        d: "Malar, nariz, olheiras, lábios, mento, mandíbula, canto de boca, orelha e preenchedores.",
      },
      { nome: "Bioestimuladores de Colágeno", aulas: "24 aulas", d: "Diluição, planejamento e aplicação." },
      { nome: "Toxina Botulínica", aulas: "9 aulas", d: "Os procedimentos, aula a aula." },
    ],
  },
  {
    pilar: "Consulta",
    titulo: "Pra ela decidir com você",
    cursos: [
      { nome: "Vendas: a Consulta que Vende", aulas: "7 aulas", d: "Estratégias de consultório e campanhas comerciais." },
      { nome: "Marketing nas Redes Sociais", aulas: "8 aulas", d: "Produção de conteúdo pra quem atende estética." },
      { nome: "Posicionamento de Imagem", aulas: "4 aulas", d: "Como você é percebida antes de abrir a boca." },
      { nome: "Dicas Jurídicas", aulas: "4 aulas", d: "Com Juk Cattani Advogados Associados." },
      { nome: "Material de Apoio", d: "Ferramentas prontas: anamnese, termos, precificação e scripts." },
    ],
  },
  {
    pilar: "Junto",
    titulo: "Pra não estudar sozinha",
    cursos: [
      { nome: "Sala de Lapidação", d: "Encontros ao vivo todo mês, com as gravações lá dentro." },
      { nome: "Alfa Ômega · Fé, identidade e propósito", aulas: "4 aulas", d: "De onde tudo começou pra Aline." },
      { nome: "Comece por aqui", d: "Boas-vindas e o mapa da plataforma." },
    ],
  },
];

export function OQueTem({ modo }: { modo: Modo }) {
  const meses = modo === "sala" ? SALA.mesesAcesso : ACADEMY.mesesAcesso;
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="O que tem dentro" destaque={`por ${meses} meses.`}>
          Tudo o que a Academy libera,
        </Titulo>
      </Container>

      <Container>
        <Reveal className="mt-10 grid grid-cols-1 items-center gap-7 rounded-[6px] border border-wine/60 bg-bg-2 p-7 sm:p-9 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[4px] border border-line-soft bg-surface">
            <Image
              src={withBasePath("/images/fresh/lab-luvas.webp")}
              alt="Dra. Aline Filgueiras calçando as luvas no laboratório de dissecção"
              fill
              sizes="(min-width: 768px) 300px, 80vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-[11.5px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
              Novo na Academy
            </span>
            <h3 className="mt-2 font-sans font-semibold text-[1.6rem] leading-[1.2] tracking-[-0.01em] text-fg">
              Curso online de Fresh Frozen + dissecção
            </h3>
            <p className="mt-3 text-[1.02rem] leading-[1.6] text-fg-soft">
              Fresh frozen são peças anatômicas humanas preservadas por congelamento, sem formol. O
              tecido fica mais próximo do que você encontra na paciente: os planos, os vasos, a
              textura. Foi assim que a Aline estudou, nos Estados Unidos e em Portugal, e é isso que
              ela reuniu num curso online, sem visto e sem passagem.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PILARES.map((p, i) => (
            <Reveal key={p.pilar} delay={(i % 2) * 80} className="rounded-[6px] border border-line-soft bg-bg-3 p-7">
              <span className="text-[11.5px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
                {p.pilar}
              </span>
              <h3 className="mt-1.5 font-serif text-[1.35rem] text-fg">{p.titulo}</h3>
              <ul className="mt-4 list-none border-t border-line p-0">
                {p.cursos.map((c) => (
                  <li key={c.nome} className="border-b border-line py-3.5 last:border-b-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 text-[1rem] text-fg">
                      {c.nome}
                      {c.novo && (
                        <span className="rounded-[2px] bg-wine px-1.5 py-0.5 text-[10.5px] font-semibold tracking-[0.12em] text-on-wine uppercase">
                          Novo
                        </span>
                      )}
                      {c.aulas && <span className="text-[0.85rem] text-fg-faint">· {c.aulas}</span>}
                    </div>
                    <div className="mt-0.5 text-[0.9rem] leading-[1.5] text-fg-faint">{c.d}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
