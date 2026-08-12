import { Container } from "@/components/Container";

const FAQS = [
  {
    q: "Vai ter gravação?",
    a: "Não. É ao vivo, uma vez só, e por isso a sua vaga garante a sua presença. O que a Aline mostrar fica com quem esteve na sala.",
  },
  {
    q: "Por que pagar, se você já ensina tanto de graça?",
    a: "Porque de graça você recebe conteúdo. Aqui você recebe acesso: a Aline ao vivo, respondendo a sua dúvida na hora e ensinando o que ela nunca gravou pra ninguém. Isso não cabe num story.",
  },
  {
    q: "Preciso estar ao vivo mesmo?",
    a: "Sim. O tira-dúvidas e a revelação da nova fase acontecem na hora, sem replay. Reserve o dia 24, às 20h.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Assim que a compra é confirmada, você recebe o link privado da live por e-mail e WhatsApp, com lembretes antes de começar.",
  },
  {
    q: "Pra quem é essa aula?",
    a: "Biomédicas, dentistas, enfermeiras, farmacêuticas e esteticistas que já aplicam (ou vão aplicar) harmonização facial e querem mais segurança e resultado.",
  },
  {
    q: "Ainda não aplico / estou começando. Essa aula é pra mim?",
    a: "É. Quanto antes você entende a anatomia por dentro, menos vícios você carrega. A aula parte do que está embaixo da pele e por que isso muda a conduta. Serve pra quem já aplica e pra quem quer começar com o pé no lugar certo.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias após a compra pra pedir reembolso do ingresso, por WhatsApp ou e-mail. Sem perguntas.",
  },
  {
    q: "Vou ser obrigada a comprar algo na live?",
    a: "Não. A aula entrega sozinha. Se você quiser continuar depois, vai existir uma condição especial, só se fizer sentido pra você.",
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
          Dúvidas
        </span>
        <h2 className="mt-[18px] font-serif text-[1.95rem] sm:text-[2.6rem]">
          Perguntas honestas.
        </h2>

        <div className="mt-9 border-t border-line">
          {FAQS.map((item, i) => (
            <details key={item.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-5 py-[22px] font-serif text-[1.24rem] marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="shrink-0 font-sans text-[1.4rem] text-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[620px] pb-6 text-[1.05rem] leading-[1.6] text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
