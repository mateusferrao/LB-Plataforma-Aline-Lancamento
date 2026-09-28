import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { VagasBadge } from "@/components/VagasBadge";
import { Titulo } from "@/components/fresh/Titulo";
import { ANCORA_SERINGA, ANCORA_SERINGA_SO_KIT } from "@/components/info/ancora";
import { BonusCountdown } from "@/components/info/BonusCountdown";
import { CtaButton } from "@/components/info/CtaButton";
import { OfertaItens } from "@/components/info/OfertaItens";
import { OfertaPrecoKit } from "@/components/info/OfertaPrecoKit";
import { SoComBonus } from "@/components/info/SoComBonus";

// Do clique ao kit. Tráfego frio compra sem conhecer o processo; os passos
// tiram o "e depois que eu pagar?". Com a aula de presente, começa pelo
// ingresso (padrão da /fresh) e o 3º passo é a sala; depois da aula, só o kit.
const PASSOS_COM_BONUS = [
  { t: "Emita seu ingresso", d: "Leva 10 segundos, direto no site." },
  {
    t: "Confirme no Pix ou no cartão",
    d: "Em até 12x. O PDF, a prancha, a ficha e os cards chegam no seu WhatsApp na hora.",
  },
  { t: "Dia 6, às 20h, entre na sala", d: "Pelo link privado enviado no grupo do WhatsApp." },
];
const PASSOS_SO_KIT = [
  { t: "Garanta no Pix ou no cartão", d: "Em até 12x, direto no checkout." },
  {
    t: "Receba o protocolo no WhatsApp",
    d: "O PDF, a prancha, a ficha e os cards chegam no seu WhatsApp logo após a confirmação do pagamento.",
  },
];

// Oferta da /info no padrão da /fresh: sem valor em R$ no card. O botão abre o
// ingresso, que revela o preço ao lado do valor da aula de presente.
export function Offer() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <SoComBonus
          senao={
            <Titulo eyebrow="O que você leva" destaque="da hora zero aos 60 dias.">
              O protocolo inteiro,
            </Titulo>
          }
        >
          <Titulo eyebrow="Seu ingresso" destaque="e a aula ao vivo de presente.">
            O Protocolo inteiro,
          </Titulo>
        </SoComBonus>
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid content-center">
            <OfertaItens />
            <p className="mt-6 max-w-[460px] font-serif text-[1.16rem] leading-[1.45] text-wine-ink italic">
              <SoComBonus senao={ANCORA_SERINGA_SO_KIT}>{ANCORA_SERINGA}</SoComBonus> E é o que
              você vai querer ter na mão se a cor mudar.
            </p>
            <BonusCountdown className="mt-8" />
          </Reveal>

          <Reveal
            delay={90}
            className="flex flex-col justify-center rounded-[6px] bg-wine px-8 py-9 text-center text-on-wine"
          >
            <OfertaPrecoKit />

            <SoComBonus>
              <div className="mt-6 flex flex-col items-center gap-3 border-t border-on-wine/15 pt-6">
                <VagasBadge tone="onAccent" />
              </div>
            </SoComBonus>

            <CtaButton variant="accent" className="mt-5 w-full justify-center" />

            <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
              <span className="font-serif text-[1.2rem] italic leading-none">✓</span>
              <span>Risco zero: você tem 7 dias pra pedir reembolso, sem perguntas.</span>
            </div>
            <SoComBonus>
              <div className="mt-3 text-left text-[0.92rem] opacity-80">
                A aula de presente vale pra quem garantir até 6 de outubro, às 20h. É uma vez
                só, sem replay.
              </div>
            </SoComBonus>
          </Reveal>
        </div>

        <SoComBonus senao={<Passos passos={PASSOS_SO_KIT} />}>
          <Passos passos={PASSOS_COM_BONUS} />
        </SoComBonus>

        <p className="mx-auto mt-10 max-w-[620px] text-center text-[0.9rem] leading-[1.55] text-fg-faint">
          Material educativo com o protocolo que a Dra. Aline Filgueiras utiliza. Não
          substitui formação, protocolos clínicos oficiais, orientações do seu conselho
          profissional ou avaliação individual. Medicações conforme a sua habilitação
          profissional.
        </p>
      </Container>
    </section>
  );
}

function Passos({ passos }: { passos: { t: string; d: string }[] }) {
  return (
    <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:auto-cols-fr sm:grid-flow-col">
      {passos.map((p, i) => (
        <div key={p.t} className="bg-bg-3 px-6 py-5">
          <span className="font-serif text-[1.05rem] text-wine-ink">{i + 1}.</span>
          <div className="mt-1.5 text-[1.02rem] text-fg">{p.t}</div>
          <div className="mt-1 text-[0.9rem] leading-[1.5] text-fg-faint">{p.d}</div>
        </div>
      ))}
    </Reveal>
  );
}
