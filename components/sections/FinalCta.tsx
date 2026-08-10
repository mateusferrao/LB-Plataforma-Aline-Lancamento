import { Container } from "@/components/Container";
import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";

export function FinalCta() {
  return (
    <section className="bg-nude py-16 text-center sm:py-[92px]">
      <Container narrow className="mx-auto flex flex-col items-center">
        <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
          24 de setembro · 20h
        </span>
        <h2 className="mt-[18px] mb-6 max-w-[560px] text-balance font-serif text-[1.95rem] sm:text-[2.6rem]">
          Nesse dia, a mesa de dissecção vira a sua tela.
        </h2>

        <Countdown className="justify-center" />

        <CtaButton className="mt-8 w-full justify-center sm:w-auto">
          Quero minha vaga <span className="font-serif text-[1.16rem]">· R$67</span>
        </CtaButton>
        <p className="mt-3.5 text-[13.5px] tracking-[0.02em] text-ink-faint">
          Vagas ao vivo limitadas · sem gravação · reembolso garantido do ingresso
        </p>
      </Container>
    </section>
  );
}
