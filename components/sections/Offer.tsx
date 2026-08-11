import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";

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
    <section className="bg-nude-2 py-16 sm:py-[92px]">
      <Container narrow>
        <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
          Seu ingresso
        </span>
        <h2 className="mt-[18px] font-serif text-[1.95rem] sm:text-[2.6rem]">
          É uma noite ao vivo, e não vai ter repeteco.
        </h2>
        <p className="mt-[18px] max-w-[560px] text-[1.12rem] leading-[1.55] text-ink-soft">
          O rigor de uma temporada de dissecção lá fora, destilado em uma noite ao vivo.
        </p>
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <div className="grid content-center">
            {INCLUDES.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-[22px_1fr] gap-4 py-[19px] ${
                  i < INCLUDES.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="pt-0.5 text-accent">—</span>
                <span className="text-[1.1rem]">
                  {item.title}
                  <small className="mt-1 block text-[0.87rem] text-ink-faint">
                    {item.detail}
                  </small>
                </span>
              </div>
            ))}
            <p className="mt-6 max-w-[440px] font-serif text-[1.16rem] leading-[1.45] text-accent-deep italic">
              Uma intercorrência sozinha custa muito mais que o ingresso, e não só em
              dinheiro: também na sua reputação e no seu sono.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-[4px] bg-accent px-8 py-9 text-center text-on-accent">
            <div className="text-[14px] opacity-80">Exclusivo pra quem está na sala</div>
            <div className="my-1.5 font-serif text-[3.5rem] leading-none sm:text-[3.7rem]">
              R$67
            </div>
            <div className="text-[12px] tracking-[0.16em] uppercase opacity-90">
              Ingresso único · ao vivo
            </div>

            <CtaButton variant="accent" className="mt-6 w-full justify-center">
              Garantir minha vaga
            </CtaButton>

            <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
              <span className="font-serif text-[1.2rem] italic leading-none">✓</span>
              <span>
                Risco zero: assista até o fim e, se não fizer sentido pra você, devolvemos o
                seu ingresso. É só pedir, sem prazo fixo.
              </span>
            </div>
            <div className="mt-3 text-left text-[0.92rem] opacity-80">
              A sala ao vivo tem lugar limitado de verdade. É uma vez só, sem replay.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
