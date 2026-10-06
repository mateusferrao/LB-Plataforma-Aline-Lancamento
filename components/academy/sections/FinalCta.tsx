import { Container } from "@/components/Container";
import { AteOFim } from "@/components/academy/AteOFim";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Ticks } from "@/components/academy/Ticks";
import { ACADEMY, BONUS_10_ESGOTADO, GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Fechamento: a cena resolvida, o resumo da oferta numa frase, botão e P.S.
const RESUMO =
  "Anatomia em fresh frozen, mais de 70 aulas de técnica, a Consulta que Vende, o material de apoio pronto e 6 encontros ao vivo no ano.";

const PS_GARANTIA = `Você tem ${GARANTIA_ACADEMY.prazoCondicionalDias} dias pra testar. Se assistir ao módulo de anatomia e a mão não ficar mais segura, a gente devolve.`;

export function FinalCta({ modo }: { modo: Modo }) {
  const sala = modo === "sala";
  return (
    <section className="border-t border-line py-16 text-center sm:py-24">
      <Container narrow className="flex flex-col items-center">
        <h2 className="max-w-[620px] text-balance font-sans font-semibold text-[1.75rem] leading-[1.18] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          A paciente sente quando você sabe{" "}
          <span className="text-wine-bright">o que está fazendo.</span>
        </h2>
        <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.6] text-fg-soft">
          {RESUMO}{" "}
          {sala ? (
            <AteOFim depois={`Em 12x de ${ACADEMY.parcela12x} ou ${ACADEMY.precoCheioLabel} no Pix.`}>
              {`Por ${SALA.precoLabel}, com +3 meses de acesso pra todo mundo${BONUS_10_ESGOTADO ? "" : ` e os bônus dos ${SALA.primeirosN} primeiros`} só até ${SALA.prazoCurto}.`}
            </AteOFim>
          ) : (
            `Em 12x de ${ACADEMY.parcela12x} ou ${ACADEMY.precoCheioLabel} no Pix.`
          )}
        </p>
        <CtaButton modo={modo} showPrice={sala} className="mt-8 w-full justify-center sm:w-auto">
          Quero entrar na Academy
        </CtaButton>
        <Ticks className="mt-4 justify-center" itens={["Acesso imediato", GARANTIA_ACADEMY.nome]} />

        <p className="mt-12 max-w-[560px] text-left text-[1rem] leading-[1.6] text-fg-soft">
          <strong className="font-semibold text-fg">P.S.</strong>{" "}
          {sala ? (
            <AteOFim depois={PS_GARANTIA}>
              {BONUS_10_ESGOTADO
                ? "Os +3 meses de acesso saem hoje, às 23h59. Amanhã a Academy volta a ter 12 meses."
                : `Os +3 meses saem hoje, às 23h59. Os bônus dos ${SALA.primeirosN} primeiros podem sair antes, quando eles entrarem.`}
            </AteOFim>
          ) : (
            PS_GARANTIA
          )}
        </p>
      </Container>
    </section>
  );
}
