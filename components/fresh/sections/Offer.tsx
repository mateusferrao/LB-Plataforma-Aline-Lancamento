import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/lp2/CtaButton";
import { Reveal } from "@/components/Reveal";
import { VagasBadge } from "@/components/VagasBadge";
import { Titulo } from "@/components/Titulo";
import { ANCORA_SERINGA } from "@/components/fresh/ancora";
import { OfertaPreco } from "@/components/lp2/OfertaPreco";

const INCLUI = [
  {
    t: "Aula ao vivo de ~90 minutos com a Dra. Aline",
    d: "Com as imagens das dissecções dela em cadáver fresh frozen",
  },
  { t: "Link privado, exclusivo pra inscritos", d: "Enviado no grupo do WhatsApp antes da aula" },
];

// Como funciona do clique à sala: tira o "e depois que eu pagar?".
const PASSOS = [
  { t: "Emita seu ingresso", d: "Leva 10 segundos, direto no site." },
  { t: "Confirme no Pix ou no cartão", d: "Em até 12x. O acesso ao grupo do WhatsApp chega na hora." },
  { t: "Dia 6, às 20h, entre na sala", d: "Pelo link privado enviado no grupo." },
];

// Oferta da /fresh: igual à /lp2, sem valor em R$ no card. O botão abre o
// ingresso, que revela o preço ao lado da âncora do curso internacional.
export function Offer() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Seu ingresso" destaque="uma vez só.">
          É uma noite ao vivo,
        </Titulo>
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid content-center">
            {INCLUI.map((item, i) => (
              <div
                key={item.t}
                className={`grid grid-cols-[22px_1fr] gap-4 py-[19px] ${
                  i < INCLUI.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span
                  className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-wine-ink"
                  aria-hidden="true"
                />
                <span className="text-[1.1rem] text-fg">
                  {item.t}
                  <small className="mt-1 block text-[0.87rem] text-fg-faint">{item.d}</small>
                </span>
              </div>
            ))}
            <p className="mt-6 max-w-[440px] font-serif text-[1.16rem] leading-[1.45] text-wine-ink italic">
              {ANCORA_SERINGA} E é o que decide se as próximas vão dar resultado.
            </p>
            <Countdown semPreco className="mt-8" />
          </Reveal>

          <Reveal
            delay={90}
            className="flex flex-col justify-center rounded-[6px] bg-wine px-8 py-9 text-center text-on-wine"
          >
            <OfertaPreco />

            <div className="mt-6 flex flex-col items-center gap-3 border-t border-on-wine/15 pt-6">
              <VagasBadge tone="onAccent" />
            </div>

            <CtaButton variant="accent" className="mt-4 w-full justify-center">
              Emitir meu ingresso
            </CtaButton>

            <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
              <span className="font-serif text-[1.2rem] italic leading-none">✓</span>
              <span>Risco zero: você tem 7 dias pra pedir reembolso, sem perguntas.</span>
            </div>
            <div className="mt-3 text-left text-[0.92rem] opacity-80">
              As inscrições encerram às 20h do dia 6. É uma vez só, sem replay.
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
          {PASSOS.map((p, i) => (
            <div key={p.t} className="bg-bg-3 px-6 py-5">
              <span className="font-serif text-[1.05rem] text-wine-ink">{i + 1}.</span>
              <div className="mt-1.5 text-[1.02rem] text-fg">{p.t}</div>
              <div className="mt-1 text-[0.9rem] leading-[1.5] text-fg-faint">{p.d}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
