import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { GARANTIA } from "@/lib/ofertaFresh";

// A garantia com nome e estrutura, logo abaixo da oferta. Duas camadas: a de
// sempre (7 dias após a compra) e a nova, pra quem esteve ao vivo (até 24h
// depois da aula). Termos em lib/ofertaFresh.ts; como confirmar presença fica
// em docs/agente-ia/03-politicas.md.
const CAMADAS = [
  {
    prazo: `Até ${GARANTIA.prazoCompraDias} dias depois da compra`,
    texto: "Sem perguntas. Você pede e a gente devolve o valor do ingresso.",
  },
  {
    prazo: `Até ${GARANTIA.prazoPosAulaH}h depois da aula`,
    texto:
      "Esteve ao vivo e achou que não valeu? Pede e devolvemos. Vale mesmo se os 7 dias da compra já passaram.",
  },
];

export function Garantia() {
  return (
    <section className="py-16 sm:py-[80px]">
      <Container narrow>
        <Titulo eyebrow={GARANTIA.nome} destaque="a gente devolve.">
          Se não valer a noite,
        </Titulo>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CAMADAS.map((c, i) => (
            <Reveal
              key={c.prazo}
              delay={i * 80}
              className="rounded-[6px] border border-wine/60 bg-bg-2 p-6"
            >
              <span className="text-[11.5px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
                {c.prazo}
              </span>
              <p className="mt-2.5 text-[1.05rem] leading-[1.5] text-fg">{c.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 max-w-[600px] text-[0.98rem] leading-[1.6] text-fg-soft">
            Pra pedir, é só falar com a gente no WhatsApp{" "}
            <span className="text-fg">{GARANTIA.whatsapp}</span> ou no e-mail{" "}
            <span className="text-fg">{GARANTIA.email}</span>.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
