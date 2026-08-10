import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";

const INCLUDES = [
  {
    title: "Aula ao vivo de ~90 minutos com a Dra. Aline",
    detail: "Anatomia da dissecção aplicada à sua conduta",
  },
  {
    title: "Tira-dúvidas ao vivo, na hora",
    detail: "Sua pergunta respondida — só quem está na sala",
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
          Uma noite. Ao vivo. Sem repeteco.
        </h2>
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
          </div>

          <div className="flex flex-col justify-center rounded-[4px] bg-accent px-8 py-9 text-center text-on-accent">
            <div className="text-[14px] opacity-80">Pelo que você levaria de um presencial</div>
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
                Risco zero: se a aula não te entregar valor, devolvemos o seu ingresso.
              </span>
            </div>
            <div className="mt-3 text-left text-[0.92rem] opacity-80">
              Sala ao vivo com vagas limitadas. Não vai ter gravação.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
