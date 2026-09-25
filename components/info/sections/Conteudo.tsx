import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

// "Show over tell": as páginas reais do kit (renderizadas do PDF), cada uma com
// o benefício na frente. Números só os do próprio kit, com a fonte citada.
const PAGINAS = [
  {
    src: "/images/info/prancha-01-zonas.webp",
    rotulo: "Prancha 01 · Mapa das zonas de risco",
    titulo: "Onde o risco se concentra",
    texto:
      "As 8 regiões de maior atenção, as artérias de cada uma e onde acontecem os casos publicados de perda visual: nariz 56%, glabela 27%, testa 19% e sulco nasogeniano 15%.",
    fonte:
      "48 casos publicados entre 2015 e 2018; um caso pode envolver mais de uma região. Beleznay et al., Aesthetic Surgery Journal, 2019.",
  },
  {
    src: "/images/info/tabela-zonas.webp",
    rotulo: "Complemento da prancha 01",
    titulo: "Cada zona em detalhe",
    texto:
      "Nível de risco, estruturas de atenção e o que pode acontecer em cada região, numa tabela só.",
  },
  {
    src: "/images/info/prancha-02-planos.webp",
    rotulo: "Prancha 02 · Profundidade e planos",
    titulo: "Onde o risco se esconde",
    texto:
      "Superficial não é sinônimo de seguro. Na têmpora, a artéria temporal superficial corre logo abaixo da pele. A prancha mostra os planos da face, da pele ao periósteo.",
  },
  {
    src: "/images/info/prancha-03-protocolo.webp",
    rotulo: "Prancha 03 · Protocolo de parede",
    titulo: "Se acontecer, faça assim",
    texto:
      "Os sinais de alerta, a linha do tempo das intercorrências, a conduta imediata em 5 passos e o checklist do kit de emergência. Feita pra ficar na parede do consultório.",
  },
  {
    src: "/images/info/prancha-04-normal-ou-alerta.webp",
    rotulo: "Prancha 04 · Diagnóstico rápido",
    titulo: "Normal ou alerta?",
    texto:
      "Cor, dor, inchaço, temperatura, enchimento capilar, pele e visão: o esperado e o sinal de alerta, lado a lado. Um minuto nela antes do primeiro atendimento deixa os sinais frescos na memória.",
  },
  {
    src: "/images/info/glossario.webp",
    rotulo: "Glossário e referências",
    titulo: "Os termos que importam, e de onde vem cada informação",
    texto:
      "Oclusão vascular, livedo, enchimento capilar, efeito Tyndall, biofilme e mais 7 termos-chave. No fim, as referências da literatura usadas no kit.",
  },
];

export function Conteudo() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            O que tem dentro
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">
              O que você precisa ter à vista, em pranchas para imprimir.
            </span>
          </h2>
          <p className="mt-[18px] max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
            São 10 páginas em PDF, no formato paisagem, mais o card da paciente em PNG. Veja
            por dentro:
          </p>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-12 grid grid-cols-1 gap-14 sm:gap-16">
          {PAGINAS.map((p, i) => (
            <Reveal
              key={p.src}
              className={`grid grid-cols-1 items-center gap-6 md:gap-10 ${
                i % 2 === 1 ? "md:grid-cols-[0.75fr_1.25fr]" : "md:grid-cols-[1.25fr_0.75fr]"
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-last" : ""}>
                <Image
                  src={withBasePath(p.src)}
                  alt={`${p.rotulo}: ${p.titulo}`}
                  width={1400}
                  height={989}
                  sizes="(min-width: 1060px) 600px, (min-width: 768px) 58vw, 92vw"
                  className="h-auto w-full rounded-[6px] border border-line-soft"
                />
              </div>
              <div>
                <span className="text-[12px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
                  {p.rotulo}
                </span>
                <h3 className="mt-3 font-serif text-[1.6rem] leading-[1.2] text-fg">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-[1.02rem] leading-[1.6] text-fg-soft">{p.texto}</p>
                {p.fonte && (
                  <p className="mt-3 text-[0.85rem] leading-[1.5] text-fg-faint italic">
                    {p.fonte}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
