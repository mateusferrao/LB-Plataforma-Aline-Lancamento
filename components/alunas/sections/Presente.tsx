import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { withBasePath } from "@/lib/basePath";
import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

// O presente de ex-aluna. Mesmos entregáveis e imagens da /info
// (docs/info/README.md, seção 2). Sem nome de medicamento na página (regra da
// Meta e do docs/info): as imagens são as versões ?lp=1, já desfocadas.
const ITENS = [
  ["Protocolo completo em PDF (22 páginas)", "Os 6 passos da oclusão e os 9 passos do cuidado da necrose, do primeiro minuto à cicatrização."],
  ["Prancha de parede", "A oclusão inteira em uma folha, pra imprimir e deixar na sala de atendimento."],
  ["Ficha de acompanhamento hora a hora", "Pra preencher em cada caso, sem depender da memória no meio da emergência."],
  ["2 cards pra enviar à paciente", "O que fazer em casa depois da oclusão e os cuidados até cicatrizar."],
  ["Calendário da recuperação e checklist da maleta", "Pra ter tudo à mão antes de precisar."],
];

export function Presente() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          <div>
            <Titulo eyebrow="Seu presente de ex-aluna" destaque="o Protocolo de Resgate Vascular.">
              Junto com o ingresso, você leva
            </Titulo>
            <Reveal>
              <p className="mt-6 max-w-[560px] text-[1.1rem] leading-[1.6] text-fg-soft">
                É o passo a passo de oclusão e necrose que a Aline usa na clínica. Separado, ele
                custa {OFERTA_ALUNAS.protocoloValorDeLabel}. Pra quem já estudou com ela, vai de
                presente, e chega no seu WhatsApp logo depois da confirmação do pagamento.
              </p>
              <ul className="mt-7 list-none border-t border-line p-0">
                {ITENS.map(([t, d]) => (
                  <li key={t} className="grid grid-cols-[22px_1fr] gap-3 border-b border-line py-4">
                    <span className="font-semibold text-wine-ink" aria-hidden="true">✓</span>
                    <span>
                      <span className="block text-[1.05rem] font-semibold text-fg">{t}</span>
                      <span className="mt-0.5 block text-[0.98rem] leading-[1.5] text-fg-soft">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mx-auto w-full max-w-[460px]">
            <Image
              src={withBasePath("/images/info/protocolo-mockup.webp")}
              alt="Protocolo de Resgate Vascular: o PDF, a prancha de parede e os cards da paciente"
              width={1200}
              height={1500}
              sizes="(min-width: 768px) 460px, 92vw"
              className="h-auto w-full rounded-[4px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
