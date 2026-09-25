import Image from "next/image";
import { Container } from "@/components/Container";
import { BonusCountdown } from "@/components/info/BonusCountdown";
import { CtaButton } from "@/components/info/CtaButton";
import { LinhaGarantia } from "@/components/info/LinhaGarantia";
import { SoComBonus } from "@/components/info/SoComBonus";
import { withBasePath } from "@/lib/basePath";

// Recapitula a ideia central ("o mapa mostra onde, a aula mostra por quê"),
// repete o CTA e a garantia. Fundo: a prancha 03 (protocolo de parede) bem
// apagada, o mesmo objeto que a aluna vai ter na parede.
export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 text-center sm:py-[112px]">
      <Image
        src={withBasePath("/images/info/prancha-03-protocolo.webp")}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/80 to-bg"
      />

      <Container narrow className="relative mx-auto flex flex-col items-center">
        <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
          <SoComBonus senao="Mapa das Intercorrências">
            Mapa das Intercorrências + aula ao vivo
          </SoComBonus>
        </span>
        <h2 className="mt-[18px] mb-6 max-w-[580px] text-balance font-serif font-semibold text-[1.95rem] sm:text-[2.6rem]">
          <span className="titulo-grifo">
            <SoComBonus senao="Na dúvida, trate como alerta. Com o Mapa à vista, você sabe o que fazer.">
              O mapa mostra onde e o que fazer. A aula mostra por quê.
            </SoComBonus>
          </span>
        </h2>

        <BonusCountdown align="center" />

        <CtaButton className="mt-8 w-full justify-center sm:w-auto" />
        <LinhaGarantia className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />
      </Container>
    </section>
  );
}
