import { Container } from "@/components/Container";
import { Titulo } from "@/components/Titulo";
import type { Modo } from "@/components/academy/CtaButton";
import { ACADEMY, GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

type Item = { q: string; a: string };

// Respostas do pitch (bloco 9) e da FAQ do agente. Certificado fica de fora até
// a confirmação (pendência em docs/plataforma/README.md).
const COMUNS: Item[] = [
  {
    q: "O curso de fresh frozen é presencial?",
    a: "Não. É um curso online, dentro da plataforma, com o que a Aline estudou em fresh frozen e dissecção. Você assiste no seu tempo, quantas vezes precisar.",
  },
  {
    q: "Como funcionam os encontros mensais?",
    a: "São ao vivo e online, uma vez por mês, na Sala de Lapidação. As gravações ficam lá dentro pra quem não puder estar no dia.",
  },
  {
    q: "Sou iniciante. Serve pra mim?",
    a: "É o melhor momento: você começa pela consulta e pela anatomia, sem criar vício, e usa as aulas de técnica como guia.",
  },
  {
    q: "Sou esteticista. Serve pra mim?",
    a: "Serve. Consulta, posicionamento, marketing e anatomia são a base de quem atende estética. E se você está migrando pra harmonização, já começa pelo lugar certo.",
  },
  {
    q: "Já fiz outros cursos e continuo insegura. Por que seria diferente?",
    a: "Porque quase nunca falta conteúdo. Falta ver por dentro, ter consulta, agulha e espelho no mesmo lugar e não estudar sozinha. E se a mão não ficar mais segura, a Garantia Mão Segura cobre.",
  },
  {
    q: "Online não substitui a prática, né?",
    a: "Não substitui o hands-on, e a Aline não promete isso. É o que faz o hands-on render: você chega na paciente sabendo o que tem embaixo e o que vai dizer.",
  },
  {
    q: "Como eu pago?",
    a: "No Pix ou no cartão em até 12x (com a taxa do gateway), direto no checkout.",
  },
  {
    q: "Como recebo o acesso?",
    a: "No e-mail usado na compra, logo depois da confirmação do pagamento. Qualquer dúvida, o time responde no WhatsApp.",
  },
  {
    q: "Já sou aluna anual da Filgueiras Academy.",
    a: "Você recebe o novo curso de anatomia sem custo, dentro do seu acesso. Se ele ainda não apareceu pra você, fale com o time no WhatsApp.",
  },
  {
    q: `Como funciona a ${GARANTIA_ACADEMY.nome}?`,
    a: `${GARANTIA_ACADEMY.incondicional} ${GARANTIA_ACADEMY.condicional} O pedido é pelo WhatsApp ${GARANTIA_ACADEMY.whatsapp} ou pelo e-mail ${GARANTIA_ACADEMY.email}.`,
  },
];

const SO_SALA: Item[] = [
  {
    q: "Quanto tempo de acesso eu tenho?",
    a: `${SALA.mesesAcesso} meses pra quem entra até ${SALA.prazoCurto}: os ${ACADEMY.mesesAcesso} meses da Academy mais 6 de bônus. A equipe aplica a extensão até ${SALA.extensaoAte}.`,
  },
  {
    q: `Como sei se entrei nas primeiras ${SALA.primeirasN} ou nas primeiras ${SALA.primeirasTopo}?`,
    a: "A ordem é a da confirmação do pagamento. A equipe avisa pelo WhatsApp quem entrou em cada nível e combina a data do encontro de casos, o envio da prancheta e o agendamento do diagnóstico.",
  },
  {
    q: "Como recebo a prancheta?",
    a: "Pelo correio, no endereço que a equipe pedir pelo WhatsApp. Vale pras primeiras compras, enquanto houver prancheta.",
  },
  {
    q: "E depois de 08/10?",
    a: `A condição da sala acaba às 23h59 de 08/10. Depois disso a Academy volta a ${ACADEMY.precoCheioLabel}, sem os bônus da sala.`,
  },
];

const SO_EVERGREEN: Item[] = [
  {
    q: "Quanto tempo de acesso eu tenho?",
    a: `${ACADEMY.mesesAcesso} meses a partir da compra, com todos os cursos e os encontros mensais.`,
  },
];

export function Faq({ modo }: { modo: Modo }) {
  const faqs = modo === "sala" ? [...SO_SALA, ...COMUNS] : [...SO_EVERGREEN, ...COMUNS];
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Dúvidas" destaque="honestas.">
          Perguntas
        </Titulo>
        <div className="mt-9 border-t border-line">
          {faqs.map((item, i) => (
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
