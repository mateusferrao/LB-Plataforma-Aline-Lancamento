import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/info/CtaButton";
import { OfertaItens } from "@/components/info/OfertaItens";
import { OfertaPrecoKit } from "@/components/info/OfertaPrecoKit";
import { SoComBonus } from "@/components/info/SoComBonus";

// Do clique ao kit. Tráfego frio compra sem conhecer o processo; os passos
// tiram o "e depois que eu pagar?". O 3º passo só existe enquanto há aula.
const PASSOS = [
  { t: "Garanta no Pix ou no cartão", d: "Em até 12x, direto no checkout." },
  { t: "Receba o kit", d: "O acesso ao PDF e ao card da paciente é liberado após a confirmação do pagamento." },
];
const PASSO_AULA = {
  t: "Entre no grupo da aula",
  d: "O link da sala do dia 6 é enviado no grupo do WhatsApp.",
};

export function Offer() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            O que você leva
          </span>
          <h2 className="mt-[18px] font-serif font-semibold text-[1.95rem] sm:text-[2.6rem]">
            <span className="titulo-grifo">
              <SoComBonus senao="O que você precisa ter à vista, num kit só.">
                O Mapa inteiro, e a aula ao vivo de presente.
              </SoComBonus>
            </span>
          </h2>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid content-center">
            <OfertaItens />
            <p className="mt-6 max-w-[460px] font-serif text-[1.16rem] leading-[1.45] text-wine-ink italic">
              Na dúvida, trate como alerta. Com o Mapa na parede, você sabe o que olhar e o que
              fazer primeiro.
            </p>
          </Reveal>

          <Reveal
            delay={90}
            className="flex flex-col justify-center rounded-[6px] bg-wine px-8 py-9 text-center text-on-wine"
          >
            <OfertaPrecoKit />

            <CtaButton variant="accent" className="mt-7 w-full justify-center" />

            <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
              <span className="font-serif text-[1.2rem] italic leading-none">✓</span>
              <span>Risco zero: você tem 7 dias pra pedir reembolso, sem perguntas.</span>
            </div>
            <SoComBonus>
              <div className="mt-3 text-left text-[0.92rem] opacity-80">
                A aula de presente vale pra quem garantir até 6 de outubro, às 20h.
              </div>
            </SoComBonus>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:auto-cols-fr sm:grid-flow-col">
          {PASSOS.map((p, i) => (
            <div key={p.t} className="bg-bg-3 px-6 py-5">
              <span className="font-serif text-[1.05rem] text-wine-ink">{i + 1}.</span>
              <div className="mt-1.5 text-[1.02rem] text-fg">{p.t}</div>
              <div className="mt-1 text-[0.9rem] leading-[1.5] text-fg-faint">{p.d}</div>
            </div>
          ))}
          <SoComBonus>
            <div className="bg-bg-3 px-6 py-5">
              <span className="font-serif text-[1.05rem] text-wine-ink">3.</span>
              <div className="mt-1.5 text-[1.02rem] text-fg">{PASSO_AULA.t}</div>
              <div className="mt-1 text-[0.9rem] leading-[1.5] text-fg-faint">{PASSO_AULA.d}</div>
            </div>
          </SoComBonus>
        </Reveal>

        <p className="mx-auto mt-10 max-w-[620px] text-center text-[0.9rem] leading-[1.55] text-fg-faint">
          Material educativo. Organiza informações publicadas na literatura para consulta
          rápida e não substitui formação, protocolos clínicos oficiais, orientações do seu
          conselho profissional ou avaliação individual.
        </p>
      </Container>
    </section>
  );
}
