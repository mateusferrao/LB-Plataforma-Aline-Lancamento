import { Container } from "@/components/Container";
import type { Modo } from "@/components/academy/CtaButton";
import { ACADEMY, SALA } from "@/lib/ofertaAcademy";

type Item = { q: string; a: string };

// Respostas do pitch (bloco 9) e da FAQ do agente. Certificado fica de fora até
// a confirmação (pendência em docs/plataforma/README.md).
const COMUNS: Item[] = [
  {
    q: "O que é fresh frozen? O curso é presencial?",
    a: "Fresh frozen são peças anatômicas humanas preservadas por congelamento, sem formol, mais próximas do que você encontra na paciente. O curso é online, dentro da plataforma: você assiste no seu tempo, quantas vezes precisar.",
  },
  {
    q: "Sou iniciante, ou esteticista. Serve pra mim?",
    a: "Serve. Você começa pela consulta e pela anatomia, sem criar vício, e usa as aulas de técnica como guia.",
  },
  {
    q: "Online não substitui a prática, né?",
    a: "Não substitui o hands-on, e a Aline não promete isso. É o que faz o hands-on render: você chega na paciente sabendo o que tem embaixo e o que vai dizer.",
  },
  {
    q: "Como funcionam os encontros ao vivo?",
    a: "São 6 no ano, online, com a Aline ou com o time dela. As gravações ficam na plataforma. E tem uma aula ao vivo com a Aline pra discussão de casos.",
  },
  {
    q: "Como pago e como recebo o acesso?",
    a: "Pix ou cartão em até 12x, direto no checkout. O acesso chega no e-mail da compra logo depois da confirmação.",
  },
  {
    q: "Já sou aluna anual da Filgueiras Academy.",
    a: "Você recebe o novo curso de anatomia sem custo, dentro do seu acesso. Se ele ainda não apareceu, fale com o time no WhatsApp.",
  },
];

const SO_SALA: Item[] = [
  {
    q: "Quanto tempo de acesso eu tenho?",
    a: `${ACADEMY.mesesAcesso} meses a partir da compra. Os ${SALA.primeirosTopo} primeiros ganham mais 6, e a equipe aplica a extensão até ${SALA.extensaoAte}.`,
  },
  {
    q: `Como sei se estou entre os ${SALA.primeirosN} primeiros?`,
    a: "Pela ordem de confirmação do pagamento. A equipe avisa no WhatsApp e combina o certificado, o envio da prancheta pelo correio e a entrada na Sala VIP.",
  },
  {
    q: "E depois de 08/10?",
    a: `Os bônus da sala acabam às 23h59 de 08/10, ou antes, quando os ${SALA.primeirosN} primeiros entrarem. A Academy continua por ${ACADEMY.precoCheioLabel}, com o núcleo.`,
  },
];

const SO_EVERGREEN: Item[] = [
  {
    q: "Quanto tempo de acesso eu tenho?",
    a: `${ACADEMY.mesesAcesso} meses a partir da compra, com todos os cursos e os encontros ao vivo.`,
  },
];

export function Faq({ modo }: { modo: Modo }) {
  const faqs = modo === "sala" ? [...SO_SALA, ...COMUNS] : [...SO_EVERGREEN, ...COMUNS];
  return (
    <section className="border-t border-line py-16 sm:py-20">
      <Container narrow>
        <h2 className="text-center font-sans font-semibold text-[1.75rem] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          Perguntas frequentes
        </h2>
        <div className="mt-9 border-t border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-5 py-[22px] font-sans text-[1.08rem] font-semibold text-fg marker:content-none [&::-webkit-details-marker]:hidden">
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
