import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { VagasBadge } from "@/components/VagasBadge";
import { Titulo } from "@/components/Titulo";
import { ANCORA_SERINGA } from "@/components/fresh/ancora";
import { OfertaPreco } from "@/components/fresh/OfertaPreco";
import { BUMP, GARANTIA, PLATAFORMA_LINHA } from "@/lib/ofertaFresh";

const INCLUI = [
  {
    t: "Aula ao vivo de ~90 minutos com a Dra. Aline",
    d: "Com as imagens das dissecções dela em cadáver fresh frozen",
  },
  { t: "Link privado, exclusivo pra inscritos", d: "Enviado no grupo do WhatsApp antes da aula" },
];

// Como funciona do clique à sala: tira o "e depois que eu pagar?". O passo 2
// pré-vende o order bump, que continua no checkout (decisão de 01/10).
const PASSOS = [
  { t: "Garanta o seu ingresso", d: "Direto no site, leva um minuto." },
  {
    t: "Confirme no Pix ou no cartão",
    d: `Em até 12x. Se quiser, leve o ${BUMP.nome} por ${BUMP.priceLabel} no mesmo checkout.`,
  },
  { t: "Dia 6, às 20h, entre na sala", d: "Pelo link privado enviado no grupo." },
];

// Oferta da /fresh: preço na página, CTA direto ao checkout (tráfego frio
// entende preço antes de valor). Um ingresso só; o Protocolo segue como bump.
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
            {INCLUI.map((item) => (
              <div
                key={item.t}
                className="grid grid-cols-[22px_1fr] gap-4 border-b border-line py-[19px]"
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

            <div className="grid grid-cols-[22px_1fr] gap-4 py-[19px]">
              <span
                className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-[1px] border border-wine-ink"
                aria-hidden="true"
              />
              <span className="text-[1.1rem] text-fg">
                {BUMP.titulo}
                <small className="mt-1 block text-[0.87rem] leading-[1.5] text-fg-faint">
                  {BUMP.descricao}
                </small>
              </span>
            </div>

            <p className="mt-4 max-w-[440px] font-serif text-[1.16rem] leading-[1.45] text-wine-ink italic">
              {ANCORA_SERINGA} E é o que decide se as próximas vão dar resultado.
            </p>
            <Countdown className="mt-8" />
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
              Garantir meu ingresso
            </CtaButton>

            <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
              <span className="font-serif text-[1.2rem] italic leading-none">✓</span>
              <span>
                <strong className="font-semibold">{GARANTIA.nome}:</strong> {GARANTIA.curta}
              </span>
            </div>
            <div className="mt-3 text-left text-[0.92rem] opacity-80">
              As inscrições encerram às 20h do dia 6. É uma vez só.
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-[560px] text-center font-serif text-[1.08rem] leading-[1.5] text-fg-soft italic">
            {PLATAFORMA_LINHA}
          </p>
        </Reveal>

        <Reveal className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
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
