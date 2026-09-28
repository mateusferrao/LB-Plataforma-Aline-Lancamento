import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// As 3 peças de uso (pág. 3 do protocolo). Reduz a complexidade percebida: não
// é um curso pra assistir, são ferramentas prontas pro dia em que precisar.
const PASSOS = [
  {
    t: "Imprima a prancha de parede",
    d: "O protocolo de oclusão inteiro em uma folha, na sala de atendimento. Numa emergência, ninguém procura arquivo no celular.",
  },
  {
    t: "Deixe fichas impressas",
    d: "Em cada caso, você anota hora a hora: frascos, coloração e teste de pressão. Sem depender da memória no meio do susto.",
  },
  {
    t: "Envie os cards à paciente",
    d: "Coloque seu nome e WhatsApp e mande ao liberar a paciente. Ela sabe o que fazer em casa e te manda as fotos.",
  },
];

export function ComoUsar() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Como usar
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">Feito pra ficar à vista, não guardado numa pasta.</span>
          </h2>
        </Reveal>
      </Container>

      <Container>
        <Reveal className="mt-11 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
          {PASSOS.map((p, i) => (
            <div key={p.t} className="bg-bg-3 px-6 py-6">
              <span className="font-serif text-[1.6rem] text-wine-ink">0{i + 1}</span>
              <div className="mt-2 text-[1.08rem] text-fg">{p.t}</div>
              <div className="mt-1.5 text-[0.95rem] leading-[1.55] text-fg-soft">{p.d}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
