"use client";

import { Container } from "@/components/Container";
import { Titulo } from "@/components/Titulo";
import { useOfertaKit } from "@/lib/useOfertaKit";

// WhatsApp do time (mesmo número do botão flutuante), com contexto de quem já
// tem o ingresso da aula e quer o Protocolo sem pagar a aula duas vezes.
const WHATSAPP_JA_COMPREI =
  "https://wa.me/5531936184139?text=" +
  encodeURIComponent("Oi! Já comprei o ingresso da aula Por Dentro da Face e quero o Protocolo de Resgate Vascular.");

type Item = { q: string; a: React.ReactNode; soComBonus?: boolean };

const FAQS: Item[] = [
  {
    q: "É um curso?",
    a: "Não. É o protocolo de conduta que a Dra. Aline utiliza para oclusão e necrose, organizado pra você consultar na hora: um PDF com o passo a passo, a prancha de parede, a ficha de acompanhamento hora a hora e dois cards para a paciente.",
  },
  {
    q: "Tem as medicações?",
    a: "Tem. Para cada fase, as medicações que a Dra. Aline utiliza, com a posologia e o momento de começar. A prescrição segue a sua habilitação profissional e a avaliação de cada paciente.",
  },
  {
    q: "Como recebo?",
    a: "Na hora, pelo WhatsApp. Logo após a confirmação do pagamento, você recebe o PDF do protocolo, a prancha de parede e a ficha em arquivos separados pra imprimir, e os dois cards da paciente em PNG, no formato de tela do celular.",
  },
  {
    q: "Posso imprimir?",
    a: "Pode e deve. A prancha de parede foi feita pra ficar na sala de atendimento, e a ficha é pra imprimir e preencher em cada caso. Tudo em A4, em impressora comum.",
  },
  {
    q: "Ainda estou começando. Serve pra mim?",
    a: "Serve. O melhor momento pra saber o que fazer numa oclusão é antes de precisar. O protocolo não ensina técnica de aplicação: ele te diz o que fazer, e em que ordem, se a cor mudar.",
  },
  {
    q: "O protocolo substitui formação?",
    a: "Não. É material educativo com a conduta que a Dra. Aline utiliza. Ele não substitui formação, protocolos oficiais nem a orientação do seu conselho. O que ele faz é deixar o passo a passo na sua mão, pra você não depender só da memória numa emergência.",
  },
  {
    q: "Por que eu emito um ingresso se estou comprando o Protocolo?",
    soComBonus: true,
    a: "Porque, até 6 de outubro, o Protocolo vem com uma vaga na aula ao vivo de presente, e o ingresso é dessa vaga. Você escreve como quer aparecer, vê o valor do Protocolo com a aula e confirma no checkout. Leva 10 segundos, e seus dados ficam só no seu navegador."
  },
  {
    q: "Como funciona a aula de presente?",
    soComBonus: true,
    a: "É a aula ao vivo Por Dentro da Face, no dia 6 de outubro, às 20h (Brasília), online, com cerca de 90 minutos. A Dra. Aline mostra as imagens das dissecções que ela fez em cadáver fresh frozen e explica o que muda a segurança de quem aplica. O acesso é pelo grupo do WhatsApp, que você recebe depois da compra. É ao vivo, uma noite só, sem gravação.",
  },
  {
    q: "Já comprei o ingresso da aula. E agora?",
    soComBonus: true,
    a: (
      <>
        Sua vaga na aula continua garantida. Se você quer o Protocolo também,{" "}
        <a
          href={WHATSAPP_JA_COMPREI}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg underline underline-offset-2 hover:text-wine-ink"
        >
          fale com o nosso time no WhatsApp
        </a>{" "}
        antes de comprar aqui, pra não pagar a aula duas vezes.
      </>
    ),
  },
  {
    q: "E se não for pra mim?",
    a: "Você tem 7 dias após a compra pra pedir reembolso, por WhatsApp ou e-mail. Sem perguntas.",
  },
  {
    q: "Posso parcelar?",
    a: "Pode: no cartão em até 12x ou à vista no Pix. As opções aparecem no checkout.",
  },
];

export function Faq() {
  const { fase, montado } = useOfertaKit();
  // Antes de montar, mostra as perguntas da aula (fase vigente na campanha),
  // igual ao HTML estático. Depois da aula, elas saem.
  const comBonus = !montado || fase?.id === "comBonus";
  const itens = FAQS.filter((f) => comBonus || !f.soComBonus);

  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Dúvidas" destaque="honestas.">
          Perguntas
        </Titulo>

        <div className="mt-9 border-t border-line">
          {itens.map((item, i) => (
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
