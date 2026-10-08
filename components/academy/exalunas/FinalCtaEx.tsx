import { Container } from "@/components/Container";
import { AteOFim } from "@/components/academy/AteOFim";
import { Ticks } from "@/components/academy/Ticks";
import { CtaEx } from "@/components/academy/exalunas/CtaEx";
import { EXALUNAS, GARANTIA_ACADEMY } from "@/lib/ofertaAcademy";

const PS_GARANTIA = `Você tem ${GARANTIA_ACADEMY.prazoCondicionalDias} dias pra testar. Se assistir ao módulo de anatomia e a mão não ficar mais segura, a gente devolve.`;

export function FinalCtaEx() {
  return (
    <section className="border-t border-line py-16 text-center sm:py-24">
      <Container narrow className="flex flex-col items-center">
        <h2 className="max-w-[620px] text-balance font-sans font-semibold text-[1.75rem] leading-[1.18] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          Você já começou. <span className="text-wine-bright">Volta pra terminar com a mão firme.</span>
        </h2>
        <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.6] text-fg-soft">
          A plataforma inteira por {EXALUNAS.mesesAcesso} meses, o novo curso de Fresh Frozen de presente e 3 meses de
          mentoria com a Aline. Em 12x de {EXALUNAS.parcela12x}, ou {EXALUNAS.precoLabel} à vista.
        </p>
        <CtaEx className="mt-8 w-full sm:w-auto">
          Quero voltar com o presente
        </CtaEx>
        <Ticks className="mt-4 justify-center" itens={["Acesso imediato", GARANTIA_ACADEMY.nome]} />

        <p className="mt-12 max-w-[560px] text-left text-[1rem] leading-[1.6] text-fg-soft">
          <strong className="font-semibold text-fg">P.S.</strong>{" "}
          <AteOFim fim={EXALUNAS.endsAt} depois={PS_GARANTIA}>
            {`A condição de ex-assinante vai até ${EXALUNAS.prazoCurto}. Depois da compra, a equipe te chama no WhatsApp pra te colocar na mentoria.`}
          </AteOFim>
        </p>
      </Container>
    </section>
  );
}
