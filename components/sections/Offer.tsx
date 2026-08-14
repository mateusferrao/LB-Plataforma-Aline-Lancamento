import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { Mark } from "@/components/Mark";
import { OfertaPreco } from "@/components/OfertaPreco";
import { Reveal } from "@/components/Reveal";
import { VagasBadge } from "@/components/VagasBadge";

const INCLUDES = [
  {
    title: "Aula ao vivo de ~90 minutos com a Dra. Aline",
    detail: "Anatomia da dissecção aplicada à sua conduta",
  },
  {
    title: "Tira-dúvidas ao vivo, na hora",
    detail: "Sua pergunta respondida, só quem está na sala",
  },
  {
    title: "Link privado, exclusivo pra inscritos",
    detail: "Enviado por e-mail e WhatsApp após a compra",
  },
];

export function Offer() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Seu ingresso
          </span>
          <h2 className="mt-[18px] font-serif font-semibold text-[1.95rem] text-fg sm:text-[2.6rem]">
            É uma noite ao vivo, e <Mark>não vai ter repeteco</Mark>.
          </h2>
          <p className="mt-[18px] max-w-[560px] text-[1.12rem] leading-[1.55] text-fg-soft">
            O rigor de uma temporada de dissecção lá fora, numa noite ao vivo com você.
          </p>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid content-center">
            {INCLUDES.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-[22px_1fr] gap-4 py-[19px] ${
                  i < INCLUDES.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span
                  className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-wine-ink"
                  aria-hidden="true"
                />
                <span className="text-[1.1rem] text-fg">
                  {item.title}
                  <small className="mt-1 block text-[0.87rem] text-fg-faint">
                    {item.detail}
                  </small>
                </span>
              </div>
            ))}
            <p className="mt-6 max-w-[440px] font-serif text-[1.16rem] leading-[1.45] text-wine-ink italic">
              Uma intercorrência custa muito mais que o ingresso. Custa dinheiro,
              reputação e noites de sono.
            </p>
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
              Garantir minha vaga
            </CtaButton>

            <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
              <span className="font-serif text-[1.2rem] italic leading-none">✓</span>
              <span>
                Risco zero: você tem 7 dias pra pedir reembolso, sem perguntas.
              </span>
            </div>
            <div className="mt-3 text-left text-[0.92rem] opacity-80">
              A sala tem lugar limitado. É uma vez só, sem replay.
            </div>
          </Reveal>
        </div>

        {/* Semente leve da plataforma (produto principal por trás do tripwire) */}
        <p className="mx-auto mt-10 max-w-[560px] text-center text-[0.98rem] leading-[1.55] text-fg-faint italic">
          Essa aula é a sua porta de entrada na Filgueiras Academy. Mas fica tranquila, ela
          entrega sozinha. Você não precisa comprar nada além pra sair com resultado.
        </p>
      </Container>
    </section>
  );
}
