import { Container } from "@/components/Container";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Ticks } from "@/components/academy/Ticks";
import { ACADEMY, GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Fechamento: a cena resolvida, o resumo da oferta numa frase, botão e P.S.
const RESUMO =
  "Anatomia em fresh frozen, mais de 70 aulas de técnica, a Consulta que Vende e encontro ao vivo todo mês.";

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
          {sala
            ? `Por ${SALA.precoLabel} até ${SALA.prazoCurto}, com ${SALA.mesesAcesso} meses de acesso.`
            : `Por ${ACADEMY.precoCheioLabel}, em até 12x ou no Pix.`}
        </p>
        <CtaButton modo={modo} showPrice className="mt-8 w-full justify-center sm:w-auto">
          Quero entrar na Academy
        </CtaButton>
        <Ticks className="mt-4 justify-center" itens={["Acesso imediato", `Garantia de ${GARANTIA_ACADEMY.prazoCondicionalDias} dias`]} />

        <p className="mt-12 max-w-[560px] text-left text-[1rem] leading-[1.6] text-fg-soft">
          <strong className="font-semibold text-fg">P.S.</strong>{" "}
          {sala
            ? `A condição da sala acaba em ${SALA.prazoCurto}. Depois disso, o valor volta a ${ACADEMY.precoCheioLabel} e os bônus saem.`
            : `Você tem ${GARANTIA_ACADEMY.prazoCondicionalDias} dias pra testar. Se assistir ao módulo de anatomia e a mão não ficar mais segura, a gente devolve.`}
        </p>
        <p className="mt-12 text-[0.85rem] text-fg-faint">
          Ensino online para profissionais da estética e da saúde. Não substitui a prática supervisionada.
        </p>
      </Container>
    </section>
  );
}
