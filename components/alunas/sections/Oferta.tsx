import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/alunas/CtaButton";
import { PrecoPresente } from "@/components/alunas/PrecoPresente";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { VagasBadge } from "@/components/VagasBadge";

const INCLUI = [
  ["Aula ao vivo de ~90 minutos com a Dra. Aline", "Com as imagens das dissecções dela em cadáver fresh frozen"],
  ["Protocolo de Resgate Vascular, de presente", "PDF, prancha de parede, ficha hora a hora e 2 cards da paciente"],
  ["Link privado da sala", "Enviado no grupo do WhatsApp antes da aula"],
];

const PASSOS = [
  ["Garanta o seu ingresso", "No Pix ou no cartão em até 12x."],
  ["Receba o Protocolo no WhatsApp", "Logo depois da confirmação do pagamento."],
  ["Dia 6, às 20h, entre na sala", "Pelo link privado enviado no grupo."],
];

export function Oferta() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Seu ingresso de ex-aluna" destaque="até a aula começar.">
          O presente vale
        </Titulo>
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid content-center">
            {INCLUI.map(([t, d], i) => (
              <div
                key={t}
                className={`grid grid-cols-[22px_1fr] gap-4 py-[19px] ${i < INCLUI.length - 1 ? "border-b border-line" : ""}`}
              >
                <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-wine-ink" aria-hidden="true" />
                <span className="text-[1.1rem] text-fg">
                  {t}
                  <small className="mt-1 block text-[0.87rem] text-fg-faint">{d}</small>
                </span>
              </div>
            ))}
            <Countdown className="mt-8" />
          </Reveal>

          <Reveal delay={90} className="flex flex-col justify-center rounded-[6px] bg-wine px-8 py-9 text-on-wine">
            <div className="text-center text-[12px] tracking-[0.16em] uppercase opacity-90">
              Ao vivo · 6 de outubro · 20h
            </div>
            <div className="mt-5">
              <PrecoPresente onWine />
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 border-t border-on-wine/15 pt-6">
              <VagasBadge tone="onAccent" />
            </div>
            <CtaButton variant="accent" className="mt-4 w-full justify-center">
              Garantir meu ingresso de ex-aluna
            </CtaButton>
            <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
              <span className="font-serif text-[1.2rem] italic leading-none">✓</span>
              <span>Risco zero: você tem 7 dias pra pedir reembolso, sem perguntas.</span>
            </div>
            <div className="mt-3 text-left text-[0.92rem] opacity-80">
              O presente vale até às 20h do dia 6. É uma noite só, sem gravação.
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
          {PASSOS.map(([t, d], i) => (
            <div key={t} className="bg-bg-3 px-6 py-5">
              <span className="font-serif text-[1.05rem] text-wine-ink">{i + 1}.</span>
              <div className="mt-1.5 text-[1.02rem] text-fg">{t}</div>
              <div className="mt-1 text-[0.9rem] leading-[1.5] text-fg-faint">{d}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
