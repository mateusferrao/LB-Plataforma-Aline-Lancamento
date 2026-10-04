import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { GARANTIA_ACADEMY } from "@/lib/ofertaAcademy";

// Garantia nomeada, em duas camadas (pitch, bloco 6). A condicional ataca o
// "não vou executar" da pesquisa e é verificável pelo progresso no Memberkit.
const CAMADAS = [
  { prazo: `Até ${GARANTIA_ACADEMY.prazoIncondicionalDias} dias depois da compra`, texto: "Sem perguntas. Você pede e a gente devolve." },
  {
    prazo: `Até ${GARANTIA_ACADEMY.prazoCondicionalDias} dias depois da compra`,
    texto: "Assistiu ao módulo de anatomia e não sentiu a mão mais segura? Escreve pra gente que devolvemos.",
  },
];

export function Garantia() {
  return (
    <section className="py-16 sm:py-[80px]">
      <Container narrow>
        <Titulo eyebrow={GARANTIA_ACADEMY.nome} destaque="o risco fica com a Aline.">
          Se a mão não ficar mais segura,
        </Titulo>
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CAMADAS.map((c, i) => (
            <Reveal key={c.prazo} delay={i * 80} className="rounded-[6px] border border-wine/60 bg-bg-2 p-6">
              <span className="text-[11.5px] font-semibold tracking-[0.18em] text-wine-ink uppercase">{c.prazo}</span>
              <p className="mt-2.5 text-[1.05rem] leading-[1.5] text-fg">{c.texto}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-[600px] text-[0.98rem] leading-[1.6] text-fg-soft">
            Pra pedir, é só falar com a gente no WhatsApp{" "}
            <span className="text-fg">{GARANTIA_ACADEMY.whatsapp}</span> ou no e-mail{" "}
            <span className="text-fg">{GARANTIA_ACADEMY.email}</span>.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
