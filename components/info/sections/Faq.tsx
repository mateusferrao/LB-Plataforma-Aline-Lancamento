"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { useOfertaKit } from "@/lib/useOfertaKit";

// WhatsApp do time (mesmo número do botão flutuante), com contexto de quem já
// tem o ingresso da aula e quer o Mapa sem pagar a aula duas vezes.
const WHATSAPP_JA_COMPREI =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent("Oi! Já comprei o ingresso da aula Por Dentro da Face e quero o Mapa das Intercorrências.");

type Item = { q: string; a: React.ReactNode; soComBonus?: boolean };

const FAQS: Item[] = [
  {
    q: "É um curso?",
    a: "Não. É um kit de referência clínica para consulta rápida: pranchas para imprimir, tabela de zonas, glossário, card da paciente e referências. Ele organiza o que a literatura publicou sobre zonas de risco, sinais de alerta e conduta, pra você ter à vista na hora que precisa.",
  },
  {
    q: "Como recebo o kit?",
    a: "Pelo WhatsApp. Depois da confirmação do pagamento, você recebe no seu WhatsApp o acesso ao PDF de 10 páginas, em formato paisagem, e ao card da paciente em PNG, no formato de tela do celular.",
  },
  {
    q: "Posso imprimir?",
    a: "Pode e deve. As pranchas 01 e 03 foram feitas pra parede do consultório. O PDF é em formato paisagem: em A4 já fica legível, e em A3 dá pra ler de longe.",
  },
  {
    q: "Ainda estou começando. Serve pra mim?",
    a: "Serve. Quanto antes você souber onde o risco se concentra e quais sinais pedem ação, mais segura fica cada aplicação. O Mapa não ensina técnica: ele te ajuda a reconhecer o sinal e saber o que fazer primeiro.",
  },
  {
    q: "O Mapa substitui protocolo ou formação?",
    a: "Não. É material educativo. Doses, medicamentos e condutas de tratamento seguem os consensos atualizados e a sua formação. O Mapa deixa o essencial à vista, pra você não depender só da memória numa emergência.",
  },
  {
    q: "Como funciona a aula de presente?",
    soComBonus: true,
    a: "É a aula ao vivo Por Dentro da Face, no dia 6 de outubro, às 20h (Brasília), online, com cerca de 90 minutos. O acesso é pelo grupo do WhatsApp, que você recebe depois da compra. A aula é ao vivo e não tem gravação.",
  },
  {
    q: "Já comprei o ingresso da aula. E agora?",
    soComBonus: true,
    a: (
      <>
        Sua vaga na aula continua garantida. Se você quer o Mapa também,{" "}
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
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Dúvidas
          </span>
          <h2 className="mt-[18px] font-serif font-semibold text-[1.95rem] sm:text-[2.6rem]">
            <span className="titulo-grifo">Perguntas honestas.</span>
          </h2>
        </Reveal>

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
