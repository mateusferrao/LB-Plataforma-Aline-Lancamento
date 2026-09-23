import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// Sustenta a headline ("Técnica todo curso ensina. Critério quase nenhum."):
// mostra, lado a lado, o que o curso de técnica entrega e o que só o critério
// dá. A maioria do público já fez curso — o contraste é com o que ela já tem.
const ROWS = [
  {
    tecnica: "O ponto de aplicação do protocolo.",
    criterio: "Saber se aquele ponto serve pra esse rosto.",
  },
  {
    tecnica: "O passo a passo que funciona no rosto padrão.",
    criterio: "Ler o rosto que foge do padrão antes de aplicar.",
  },
  {
    tecnica: "A anatomia desenhada no atlas.",
    criterio: "A anatomia vista por dentro, na dissecção.",
  },
  {
    tecnica: "Uma mão que segue o roteiro.",
    criterio: "Uma mão que sabe onde parar.",
  },
];

export function Criterio() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Técnica × critério
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">
              Técnica é o que fazer. Critério é saber onde, quando e até onde.
            </span>
          </h2>
        </Reveal>

        <Reveal className="mt-[38px] overflow-hidden rounded-[6px] border border-line">
          <div className="hidden grid-cols-2 border-b border-line bg-bg-3 text-[12px] font-semibold tracking-[0.16em] uppercase sm:grid">
            <span className="px-6 py-4 text-fg-faint">O curso de técnica te dá</span>
            <span className="border-l border-line px-6 py-4 text-wine-ink">
              O critério te dá
            </span>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={row.tecnica}
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                i < ROWS.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <p className="px-6 pt-5 pb-2 text-[1rem] leading-[1.5] text-fg-faint sm:py-5">
                <span className="mb-1 block text-[11px] font-semibold tracking-[0.16em] uppercase sm:hidden">
                  Técnica
                </span>
                {row.tecnica}
              </p>
              <p className="px-6 pt-2 pb-5 text-[1.05rem] leading-[1.5] text-fg sm:border-l sm:border-line sm:py-5">
                <span className="mb-1 block text-[11px] font-semibold tracking-[0.16em] text-wine-ink uppercase sm:hidden">
                  Critério
                </span>
                {row.criterio}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
