import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// "Isso é pra mim?" — tráfego frio de anúncio precisa se reconhecer antes da
// oferta. Perfis tirados da pesquisa de público: quem já fez curso e trava na
// decisão, quem aplica há anos, quem está começando (~1 em 4) e o sonho mais
// citado nas respostas abertas (ser referência/reconhecida).
const PERFIS = [
  "Já fez curso de harmonização e ainda trava na hora de escolher o ponto em cada rosto.",
  "Aplica há anos e quer entender por que um resultado fica lindo e o outro não.",
  "Está começando e quer aprender no lugar certo, antes de carregar vícios.",
  "Quer ser a profissional que as pacientes indicam pela segurança.",
];

export function ParaQuem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Pra quem é
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">Essa noite é pra você que…</span>
          </h2>
        </Reveal>

        <div className="mt-[38px] grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PERFIS.map((perfil, i) => (
            <Reveal
              key={perfil}
              delay={i * 90}
              className="rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
              <p className="mt-2.5 text-[1.02rem] leading-[1.5] text-fg">{perfil}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-[600px] text-[1.02rem] leading-[1.6] text-fg-soft">
            Biomédicas, dentistas, enfermeiras, farmacêuticas e esteticistas que já aplicam
            (ou vão aplicar) harmonização facial.
          </p>
          <p className="mt-4 max-w-[600px] border-l-2 border-wine pl-4 text-[1.02rem] leading-[1.6] text-fg-soft">
            <strong className="font-semibold text-fg">Não é pra você</strong> se procura um
            protocolo pronto pra copiar sem entender o porquê.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
