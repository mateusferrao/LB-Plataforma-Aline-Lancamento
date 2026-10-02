import { Container } from "@/components/Container";
import { Titulo } from "@/components/Titulo";
import { BUMP, GARANTIA } from "@/lib/ofertaFresh";

// Perguntas da /fresh. Só fatos confirmados (playbook + decisões de 28/09 e
// 01/10): aula online com imagens das dissecções da Aline, sem replay avulso
// (a gravação entra só na condição da plataforma, apresentada na sala), o
// Protocolo como opcional no checkout e a Garantia de Presença. Enquadradas
// pra reforçar o valor da noite, nunca pra diminuí-la.
const FAQS = [
  {
    q: "O que é cadáver fresh frozen?",
    a: "É um cadáver congelado sem passar por fixação química, como o formol. Por isso o tecido mantém cor, textura e mobilidade muito próximas às do rosto vivo. É o material que os cursos internacionais de anatomia facial usam, e é onde a Aline estudou e hoje ensina.",
  },
  {
    q: "Como eu vejo a face por dentro numa aula online?",
    a: "Ao vivo, a Aline mostra as fotos e os vídeos das dissecções que ela fez em cadáver fresh frozen e explica, estrutura por estrutura, o que muda a sua segurança na aplicação. É o olhar de quem esteve na mesa de dissecção, trazido pra sua tela.",
  },
  {
    q: "Vou ver imagens de dissecção?",
    a: "Sim. A aula usa imagens reais das dissecções da Aline, porque é assim que você enxerga como a face é por dentro. São imagens de estudo, mostradas com respeito e com a explicação de cada estrutura.",
  },
  {
    q: "Já fiz curso de harmonização. Vai repetir o que eu sei?",
    a: "Não. Curso de técnica ensina o protocolo. Esta aula mostra o que está embaixo da pele, que é de onde vem a insegurança que o protocolo sozinho não resolve.",
  },
  {
    q: "Ainda estou começando. Aproveito mesmo assim?",
    a: "Aproveita, e muito. Quanto antes você entende a face por dentro, menos vícios carrega. Serve pra quem já aplica e pra quem quer começar no lugar certo.",
  },
  {
    q: "Tem gravação?",
    a: "A aula ao vivo não tem replay avulso: ela acontece uma noite só, pra quem estiver na sala no dia 6, às 20h. Quem estiver lá conhece a condição especial da Filgueiras Academy, e a gravação entra por lá.",
  },
  {
    q: `Posso levar o ${BUMP.nome} junto?`,
    a: `Pode. No checkout do ingresso você adiciona o ${BUMP.nome} por ${BUMP.priceLabel}: ${BUMP.descricao}`,
  },
  {
    q: "Como recebo o acesso à sala?",
    a: "Assim que a compra é confirmada, você recebe acesso ao grupo do WhatsApp. O link da sala é enviado por lá, junto com os avisos antes da aula.",
  },
  {
    q: "Posso parcelar?",
    a: "Pode: no cartão em até 12x (com a taxa do gateway) ou à vista no Pix. As opções aparecem no checkout.",
  },
  {
    q: `Como funciona a ${GARANTIA.nome}?`,
    a: `${GARANTIA.curta} É só pedir pelo WhatsApp ${GARANTIA.whatsapp} ou pelo e-mail ${GARANTIA.email}.`,
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
