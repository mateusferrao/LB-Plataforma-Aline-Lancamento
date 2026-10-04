import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// Objeção nº 1 da pesquisa (abr/2025): 36% já tinham feito curso ou mentoria e
// continuavam travadas. As frases entre aspas são das respostas, sem identificação.
const DIFERENCAS = [
  {
    t: "Você vê por dentro",
    d: "A anatomia que a Aline estudou em fresh frozen, e não só o desenho do atlas. É o que faz a técnica deixar de ser decoreba.",
  },
  {
    t: "Os três momentos no mesmo lugar",
    d: "Consulta, agulha e espelho na mesma plataforma, na mesma linguagem. Sem juntar pedaço de curso de um lado e mentoria do outro.",
  },
  {
    t: "Você não estuda sozinha",
    d: "Encontros ao vivo todo mês na Sala de Lapidação, com as gravações lá dentro pra quem não puder estar no dia.",
  },
] as const;

export function PorQueDiferente() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Se você já fez curso e continua travada" destaque="Nem de coragem.">
          Não é falta de conteúdo.
        </Titulo>
        <Reveal>
          <p className="mt-5 text-[1.08rem] leading-[1.6] text-fg-soft">
            Quando a Aline perguntou à audiência dela o que já tinham tentado, a resposta se repetiu:
            &ldquo;curso cheio de mil passos&rdquo;, &ldquo;cursos muito vazios&rdquo;,
            &ldquo;mentoria que não me levou a lugar nenhum&rdquo;. Quase nunca faltou informação.
            Faltou ver por dentro, ter tudo num lugar só e ter alguém junto.
          </p>
        </Reveal>

        <div className="mt-9 border-t border-line">
          {DIFERENCAS.map((x, i) => (
            <Reveal key={x.t} delay={i * 60} className="grid grid-cols-[34px_1fr] gap-3 border-b border-line py-6">
              <span className="font-serif text-[1.3rem] text-wine-ink">{i + 1}.</span>
              <div>
                <h3 className="font-serif text-[1.3rem] text-fg">{x.t}</h3>
                <p className="mt-1.5 text-[1.02rem] leading-[1.6] text-fg-soft">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
