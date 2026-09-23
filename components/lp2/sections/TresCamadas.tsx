import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// As "3 camadas" da headline do Hero: técnica, anatomia e resultado. A maioria
// do público já fez curso (já tem a técnica); a aula entrega as outras duas,
// vistas direto da mesa de dissecção. A 1ª camada fica visualmente apagada
// pra marcar o contraste com o que a visitante ainda não tem.
const CAMADAS = [
  {
    nome: "Técnica",
    selo: "Você já tem",
    texto:
      "O que todo curso ensina: pontos, protocolo, passo a passo. É necessária, mas sozinha não explica por que cada rosto responde de um jeito.",
    apagada: true,
  },
  {
    nome: "Anatomia",
    selo: "A Aline te mostra",
    texto:
      "O que está embaixo da pele: planos, estruturas e limites, vistos direto da mesa de dissecção. É onde ficam os riscos que os atlas não mostram.",
    apagada: false,
  },
  {
    nome: "Resultado",
    selo: "A Aline te mostra",
    texto:
      "Como o produto se acomoda em cada plano e por que a mesma técnica dá resultados diferentes em cada rosto. É o que liga as duas primeiras camadas.",
    apagada: false,
  },
];

export function TresCamadas() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            As 3 camadas
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">
              Técnica todo curso ensina. Anatomia e resultado, quase nenhum.
            </span>
          </h2>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-[38px] grid grid-cols-1 gap-4 md:grid-cols-3">
          {CAMADAS.map((c, i) => (
            <Reveal
              key={c.nome}
              delay={i * 90}
              className={`rounded-[6px] border p-6 ${
                c.apagada ? "border-line bg-bg-3" : "border-wine/70 bg-bg"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
                <span
                  className={`text-[10.5px] font-semibold tracking-[0.16em] uppercase ${
                    c.apagada ? "text-fg-faint" : "text-wine-ink"
                  }`}
                >
                  {c.selo}
                </span>
              </div>
              <h3
                className={`mt-2 font-serif text-[1.6rem] font-semibold ${
                  c.apagada ? "text-fg-soft" : "text-fg"
                }`}
              >
                {c.nome}
              </h3>
              <p
                className={`mt-2 text-[1rem] leading-[1.55] ${
                  c.apagada ? "text-fg-faint" : "text-fg-soft"
                }`}
              >
                {c.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
