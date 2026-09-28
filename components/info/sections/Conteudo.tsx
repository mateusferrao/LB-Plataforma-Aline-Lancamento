import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

// "Show over tell": páginas reais do protocolo (render de docs/kit-protocolo,
// versão ?lp=1 com os nomes de medicamentos desfocados — política da Meta).
// Fotos do caso real de necrose NUNCA entram aqui (compliance: sem antes/depois).
const PAGINAS = [
  {
    src: "/images/info/protocolo-p06.webp",
    rotulo: "Prancha de parede · Oclusão",
    titulo: "Se a cor mudar, siga esta ordem",
    texto:
      "O protocolo de oclusão inteiro em uma folha: os 6 passos, as decisões de sim ou não, a régua das 5 horas, as medicações imediatas e o que precisa estar à mão. Feita pra imprimir e deixar na sala de atendimento.",
  },
  {
    src: "/images/info/protocolo-p08.webp",
    rotulo: "Oclusão · Passo 3",
    titulo: "Hialuronidase por encharcamento",
    texto:
      "Quanto aplicar, em quais regiões e por onde começar: o ponto que você preencheu por último. Depois, como avaliar a coloração e fazer o teste de pressão.",
  },
  {
    src: "/images/info/protocolo-p09.webp",
    rotulo: "Oclusão · Passos 4 a 6",
    titulo: "Se não reverter na primeira aplicação",
    texto:
      "O que repetir a cada hora, quando entrar o ozônio, quando liberar a paciente para casa, o que ela faz lá e o que avaliar no dia seguinte.",
  },
  {
    src: "/images/info/protocolo-p11.webp",
    rotulo: "Ficha de acompanhamento",
    titulo: "Registro hora a hora",
    texto:
      "Uma ficha pra imprimir e preencher em cada caso: horário, frascos, coloração, teste de pressão, liberação e dia seguinte. Você não depende da memória no meio da emergência.",
  },
  {
    src: "/images/info/protocolo-p14.webp",
    rotulo: "Necrose · Passos 3 e 4",
    titulo: "Da oclusão revertida à cicatrização",
    texto:
      "Os 9 passos do cuidado da necrose: garantir o fluxo, evitar a infecção, o que proibir à paciente, a limpeza, o laser, a alimentação e o filtro solar dos 60 dias. Com o calendário da recuperação.",
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
              Tudo o que você precisa ter na mão, da hora zero aos 60 dias.
            </span>
          </h2>
          <p className="mt-[18px] max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
            Um PDF de 22 páginas em A4, a prancha de parede e a ficha em arquivos separados
            pra imprimir, e dois cards em PNG pra mandar à paciente. Veja por dentro:
          </p>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-12 grid grid-cols-1 gap-14 sm:gap-16">
          {PAGINAS.map((p, i) => (
            <Reveal
              key={p.src}
              className={`grid grid-cols-1 items-center gap-6 md:gap-12 ${
                i % 2 === 1 ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
              }`}
            >
              <div className={`mx-auto w-full max-w-[440px] ${i % 2 === 1 ? "md:order-last" : ""}`}>
                <Image
                  src={withBasePath(p.src)}
                  alt={`${p.rotulo}: ${p.titulo}`}
                  width={1100}
                  height={1556}
                  sizes="(min-width: 768px) 440px, 92vw"
                  className="h-auto w-full rounded-[4px] border border-line-soft"
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
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
