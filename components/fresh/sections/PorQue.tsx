import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// O "porquê" da promessa: a insegurança vem de aplicar sem saber o que está
// embaixo da pele. Comparação em termos gerais (vs. status quo). A coluna do
// fresh frozen é a única acesa.
const FORMAS = [
  {
    nome: "Atlas e slide",
    texto: "Desenho em 2D. Você decora onde as estruturas ficam, mas não vê como elas mudam de um rosto pro outro.",
    acesa: false,
  },
  {
    nome: "Peça em formol",
    texto: "O tecido fixado fica rígido e perde a cor. Ajuda a estudar, mas não se parece com o rosto que está na sua cadeira.",
    acesa: false,
  },
  {
    nome: "Cadáver fresh frozen",
    texto: "Congelado sem fixação, o tecido mantém cor, textura e mobilidade muito próximas às do rosto vivo. As camadas e os vasos aparecem como estão na paciente.",
    acesa: true,
  },
];

export function PorQue() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Por que desta vez é diferente" destaque="não tirou a sua insegurança.">
          Por que mais um curso
        </Titulo>
        <Reveal>
          <p className="mt-6 max-w-[600px] text-[1.1rem] leading-[1.6] text-fg-soft">
            Porque a insegurança não vem da técnica. Vem de aplicar sem saber o que está
            embaixo da pele. E atlas, slide e peça em formol não mostram isso como é no
            rosto vivo.
          </p>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-3">
          {FORMAS.map((f, i) => (
            <Reveal
              key={f.nome}
              delay={i * 90}
              className={`rounded-[6px] border p-7 ${
                f.acesa ? "border-wine/70 bg-bg" : "border-line bg-bg-3"
              }`}
            >
              <h3
                className={`font-serif text-[1.45rem] font-semibold ${
                  f.acesa ? "text-fg" : "text-fg-soft"
                }`}
              >
                {f.nome}
              </h3>
              <p
                className={`mt-3 text-[1rem] leading-[1.55] ${
                  f.acesa ? "text-fg-soft" : "text-fg-faint"
                }`}
              >
                {f.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
