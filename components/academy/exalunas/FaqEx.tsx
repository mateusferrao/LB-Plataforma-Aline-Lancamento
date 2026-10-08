import { Container } from "@/components/Container";
import { ACADEMY, EXALUNAS, GARANTIA_ACADEMY } from "@/lib/ofertaAcademy";

// FAQ das ex-assinantes: as objeções de quem já assinou primeiro, depois as de sempre.
const FAQS = [
  {
    q: "Assinei e quase não usei. Por que agora seria diferente?",
    a: "Porque dessa vez você tem a mentoria: 3 meses de encontros ao vivo com a Aline, em grupo, com os seus casos. E o módulo novo de anatomia é o começo mais direto pra mão ficar segura.",
  },
  {
    q: "Por que é mais barato do que pra quem entra agora?",
    a: `Porque você já foi assinante. Quem entra pela primeira vez paga ${ACADEMY.precoCheioLabel}. A condição de volta é ${EXALUNAS.precoLabel}, só pra ex-assinantes.`,
  },
  {
    q: "Ainda tenho acesso à Academy. Serve pra mim?",
    a: `Essa condição é pra quem está sem acesso. Se o seu acesso está ativo, o curso de anatomia já entra nele, sem custo. Se ainda não apareceu, fale com o time no WhatsApp ${GARANTIA_ACADEMY.whatsapp}.`,
  },
  {
    q: "Quanto tempo de acesso eu tenho?",
    a: `${EXALUNAS.mesesAcesso} meses a partir da compra, com todos os cursos, o módulo de anatomia e os encontros ao vivo.`,
  },
  {
    q: "Como funciona a mentoria?",
    a: "São 3 meses de encontros ao vivo, online, em grupo, com a Aline. Você leva os seus casos. Depois da compra, a equipe te chama no WhatsApp pra te colocar na mentoria.",
  },
  {
    q: "E o certificado?",
    a: "É o certificado do curso de anatomia. A equipe combina a entrega com você pelo WhatsApp, depois da compra.",
  },
  {
    q: "Compro com o mesmo e-mail da assinatura antiga?",
    a: "De preferência, sim: fica mais fácil pra equipe achar o seu cadastro. O acesso chega no e-mail da compra logo depois da confirmação.",
  },
  {
    q: "O que é fresh frozen? O curso é presencial?",
    a: "Fresh frozen são peças anatômicas humanas preservadas por congelamento, sem formol, mais próximas do que você encontra na paciente. O curso é online, dentro da plataforma: você assiste no seu tempo, quantas vezes precisar.",
  },
  {
    q: "Como pago?",
    a: `Em até 12x de ${EXALUNAS.parcela12x} no cartão, ou ${EXALUNAS.precoLabel} à vista no Pix ou no cartão, direto no checkout.`,
  },
  {
    q: "Tem garantia?",
    a: `Tem a ${GARANTIA_ACADEMY.nome}. ${GARANTIA_ACADEMY.incondicional} ${GARANTIA_ACADEMY.condicional}`,
  },
] as const;

export function FaqEx() {
  return (
    <section className="border-t border-line py-16 sm:py-20">
      <Container narrow>
        <h2 className="text-center font-sans font-semibold text-[1.75rem] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          Perguntas frequentes
        </h2>
        <div className="mt-9 border-t border-line">
          {FAQS.map((item) => (
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
