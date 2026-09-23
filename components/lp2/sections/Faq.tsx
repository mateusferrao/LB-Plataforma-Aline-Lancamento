import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// Perguntas enquadradas pra REFORÇAR o valor da noite (não só tirar dúvida).
// Regra Sugarman: nenhuma resposta introduz objeção nova.
const FAQS = [
  {
    q: "Já fiz curso de harmonização. Essa aula não vai repetir o que eu já sei?",
    a: "Não. Curso ensina a primeira das 3 camadas, a técnica: o protocolo, os pontos, o passo a passo. Essa aula entrega as outras duas: a anatomia, vista por dentro na dissecção, e o resultado, ou seja, por que cada rosto responde de um jeito.",
  },
  {
    q: "Por que a aula é ao vivo e sem gravação?",
    a: "Porque o valor está em estar presente. Ao vivo, você tira suas dúvidas na hora e sai com uma leitura nova da anatomia, não com mais um vídeo pra assistir um dia.",
  },
  {
    q: "O que eu vou levar pra minha cadeira já na próxima semana?",
    a: "Uma leitura nova da face: onde estão os planos e os limites que decidem entre o resultado bonito e a intercorrência. Você volta a aplicar com a mão mais firme.",
  },
  {
    q: "Por que ver a anatomia por dissecção muda o meu resultado?",
    a: "Porque atlas e boneco achatam o que é tridimensional. Ver por dentro é o que separa quem repete técnica de quem entende o que faz. E quem entende cobra mais por isso.",
  },
  {
    q: "É verdade que eu vejo a nova fase nascer antes de todo mundo?",
    a: "Sim. No fim da aula, em primeira mão, a Aline abre a nova fase pra quem esteve na sala. Quem não estava, fica sabendo depois.",
  },
  {
    q: "Ainda estou começando. Aproveito mesmo assim?",
    a: "Aproveita, e muito. Quanto antes você entende a anatomia por dentro, menos vícios carrega. A aula parte do que está embaixo da pele, então serve pra quem já aplica e pra quem quer começar no lugar certo.",
  },
  {
    q: "Como recebo o acesso à sala?",
    a: "Assim que a compra é confirmada, você recebe acesso ao grupo do WhatsApp. O link da sala é enviado por lá, junto com avisos importantes antes da aula.",
  },
  {
    q: "E se não for pra mim?",
    a: "Você tem 7 dias após a compra pra pedir reembolso do ingresso, por WhatsApp ou e-mail. Sem perguntas.",
  },
  {
    q: "Posso parcelar?",
    a: "Pode: no cartão em até 12x (com a taxa do gateway) ou à vista no Pix. As opções aparecem no checkout, direto no site.",
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Dúvidas
          </span>
          <h2 className="mt-[18px] font-serif font-semibold text-[1.95rem] sm:text-[2.6rem]">
            <span className="titulo-grifo">Perguntas honestas.</span>
          </h2>
        </Reveal>

        <div className="mt-9 border-t border-line">
          {FAQS.map((item, i) => (
            <details key={item.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-5 py-[22px] font-serif text-[1.24rem] text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="shrink-0 font-sans text-[1.4rem] text-wine-ink transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[620px] pb-6 text-[1.05rem] leading-[1.6] text-fg-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
