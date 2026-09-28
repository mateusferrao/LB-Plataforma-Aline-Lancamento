import Image from "next/image";
import { Container } from "@/components/Container";
import { ANCORA_REFAZER } from "@/components/info/ancora";
import { BonusCountdown } from "@/components/info/BonusCountdown";
import { CtaButton } from "@/components/info/CtaButton";
import { LinhaGarantia } from "@/components/info/LinhaGarantia";
import { SoComBonus } from "@/components/info/SoComBonus";
import { withBasePath } from "@/lib/basePath";

// Fechamento no padrão da /fresh: H2 com o resultado (destaque só em cor), a
// âncora do custo de não ter o protocolo, contador e CTA. Fundo: a prancha de
// parede bem apagada, o mesmo objeto que a aluna vai ter na sala.
export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 text-center sm:py-[112px]">
      <Image
        src={withBasePath("/images/info/protocolo-p06.webp")}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/80 to-bg"
      />

      <Container narrow className="relative mx-auto flex flex-col items-center">
        <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
          <SoComBonus senao="Protocolo de Resgate Vascular">
            Protocolo + aula · 6 de outubro · 20h
          </SoComBonus>
        </span>
        <h2 className="mt-[18px] mb-6 max-w-[580px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.2] text-fg sm:text-[2.5rem]">
          Se a cor mudar na sua cadeira,{" "}
          <span className="text-wine-bright">você já sabe o próximo passo.</span>
        </h2>
        <p className="mb-8 max-w-[520px] text-[1.08rem] leading-[1.55] text-fg-soft">
          {ANCORA_REFAZER}
        </p>

        <BonusCountdown align="center" />

        <CtaButton className="mt-8 w-full justify-center sm:w-auto" />
        <LinhaGarantia className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />
      </Container>
    </section>
  );
}
