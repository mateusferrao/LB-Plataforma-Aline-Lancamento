import { Container } from "@/components/Container";
import { Titulo } from "@/components/Titulo";
import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

// Perguntas da /alunas. Quem já comprou a aula NÃO ganha o presente
// (decisão de 29/09); a resposta é honesta e oferece o Protocolo pelo mesmo
// preço do order bump, quando o link existir.
const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Fiz curso online com a Aline. Vale pra mim?",
    a: "Vale. A condição é pra todas as ex-alunas, de cursos presenciais e online.",
  },
  {
    q: "Como recebo o Protocolo?",
    a: "Pelo WhatsApp, logo depois da confirmação do pagamento. São 5 arquivos: o PDF completo, a prancha de parede, a ficha de acompanhamento e os 2 cards da paciente.",
  },
  {
    q: "Já comprei o ingresso da aula. Ganho o presente?",
    a: OFERTA_ALUNAS.protocoloAvulsoUrl ? (
      <>
        O presente vale para ingressos comprados por esta página. Se você já tem o ingresso, pode
        levar o Protocolo por {OFERTA_ALUNAS.protocoloAvulsoPriceLabel}, o mesmo valor do checkout:{" "}
        <a
          href={OFERTA_ALUNAS.protocoloAvulsoUrl}
          className="text-wine-ink underline underline-offset-2 hover:text-fg"
        >
          quero o Protocolo
        </a>
        .
      </>
    ) : (
      `O presente vale para ingressos comprados por esta página. Se você já tem o ingresso, fale com o nosso time no WhatsApp: o Protocolo sai pelo mesmo valor do checkout, ${OFERTA_ALUNAS.protocoloAvulsoPriceLabel}.`
    ),
  },
  {
    q: "Como eu vejo a face por dentro numa aula online?",
    a: "Ao vivo, a Aline mostra as fotos e os vídeos das dissecções que ela fez em cadáver fresh frozen e explica, estrutura por estrutura, o que muda a sua segurança na aplicação.",
  },
  {
    q: "Tem gravação?",
    a: "Não. A aula acontece ao vivo, uma noite só, pra quem estiver na sala no dia 6, às 20h. Por isso as vagas são limitadas.",
  },
  {
    q: "Posso parcelar?",
    a: "Pode: no cartão em até 12x (com a taxa do gateway) ou à vista no Pix.",
  },
  {
    q: "E se não for pra mim?",
    a: "Você tem 7 dias após a compra pra pedir reembolso, por WhatsApp ou e-mail. Sem perguntas.",
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Dúvidas" destaque="honestas.">
          Perguntas
        </Titulo>
        <div className="mt-9 border-t border-line">
          {FAQS.map((item, i) => (
            <details key={item.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-5 py-[22px] font-serif text-[1.24rem] text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="shrink-0 font-sans text-[1.4rem] text-wine-ink transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[620px] pb-6 text-[1.05rem] leading-[1.6] text-fg-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
