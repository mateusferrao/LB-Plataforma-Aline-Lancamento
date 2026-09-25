import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// Os 3 passos saem da página "Como usar este kit" (p. 2 do PDF). Reduz a
// complexidade percebida: o kit não é mais um curso pra assistir, é um hábito.
const PASSOS = [
  {
    t: "Imprima e deixe à vista",
    d: "As pranchas 01 e 03 foram feitas pra parede do consultório. Numa emergência, ninguém procura arquivo no celular.",
  },
  {
    t: "Revise antes de atender",
    d: "Um minuto na prancha 04 antes do primeiro atendimento do dia deixa os sinais de alerta frescos na memória.",
  },
  {
    t: "Envie o card à paciente",
    d: "Coloque seu contato no card e envie por WhatsApp depois do procedimento. Ela sabe quando te chamar, e você é avisada cedo.",
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
