import { Container } from "@/components/Container";
import { AteOFim } from "@/components/academy/AteOFim";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Ticks } from "@/components/academy/Ticks";
import { ACADEMY, GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Fechamento: a cena resolvida, o resumo da oferta numa frase, botão e P.S.
const RESUMO =
  "Anatomia em fresh frozen, mais de 70 aulas de técnica, a Consulta que Vende e 6 encontros ao vivo no ano.";

const PS_GARANTIA = `Você tem ${GARANTIA_ACADEMY.prazoCondicionalDias} dias pra testar. Se assistir ao módulo de anatomia e a mão não ficar mais segura, a gente devolve.`;

export function FinalCta({ modo }: { modo: Modo }) {
  const sala = modo === "sala";
  return (
    <section className="border-t border-line py-16 text-center sm:py-24">
      <Container narrow className="flex flex-col items-center">
        <h2 className="max-w-[620px] text-balance font-sans font-semibold text-[1.75rem] leading-[1.18] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          Da próxima vez que a paciente deitar,{" "}
          <span className="text-wine-bright">você sabe o que tem embaixo da agulha.</span>
        </h2>
        <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.6] text-fg-soft">
          {RESUMO}{" "}
          {sala ? (
            <AteOFim depois={`Por ${ACADEMY.precoCheioLabel}, em até 12x ou no Pix.`}>
              {`Por ${SALA.precoLabel}, com os bônus dos ${SALA.primeirosN} primeiros só até ${SALA.prazoCurto}.`}
            </AteOFim>
          ) : (
            `Por ${ACADEMY.precoCheioLabel}, em até 12x ou no Pix.`
          )}
        </p>
        <CtaButton modo={modo} showPrice className="mt-8 w-full justify-center sm:w-auto">
          Quero entrar na Academy
        </CtaButton>
        <Ticks className="mt-4 justify-center" itens={["Acesso imediato", `Garantia de ${GARANTIA_ACADEMY.prazoCondicionalDias} dias`]} />

        <p className="mt-12 max-w-[560px] text-left text-[1rem] leading-[1.6] text-fg-soft">
          <strong className="font-semibold text-fg">P.S.</strong>{" "}
          {sala ? (
            <AteOFim depois={PS_GARANTIA}>
              {`Os bônus da sala saem hoje, às 23h59, ou antes, quando os ${SALA.primeirosN} primeiros entrarem.`}
            </AteOFim>
          ) : (
            PS_GARANTIA
          )}
        </p>
        <p className="mt-12 text-[0.85rem] text-fg-faint">
          Ensino online para profissionais da estética e da saúde. Não substitui a prática supervisionada.
        </p>
      </Container>
    </section>
  );
}
