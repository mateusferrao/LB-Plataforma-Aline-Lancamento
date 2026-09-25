import Image from "next/image";
import { Container } from "@/components/Container";
import { BonusCountdown } from "@/components/info/BonusCountdown";
import { CtaButton } from "@/components/info/CtaButton";
import { LinhaGarantia } from "@/components/info/LinhaGarantia";
import { SoComBonus } from "@/components/info/SoComBonus";
import { withBasePath } from "@/lib/basePath";

const CHIPS = ["4 pranchas", "Tabela de zonas", "Glossário", "Card para a paciente"];

// H1 = headline A do plano (docs/info/README.md): passa no teste "Now you can…"
// e vende a calma de saber o que fazer, não o susto. Imagem = recorte real da
// capa do kit (rosto com as 8 zonas), prova de produto já na primeira dobra.
export function Hero() {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-9 sm:gap-[54px] md:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-px w-[42px] bg-wine-ink" aria-hidden="true" />
              <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
                Kit de referência clínica · Dra. Aline Filgueiras
              </span>
            </div>

            <h1 className="mt-5 text-balance font-serif font-semibold text-[2rem] leading-[1.12] tracking-[-0.012em] sm:text-[2.6rem] lg:text-[2.9rem]">
              <span className="titulo-grifo">
                Saiba em segundos se o que você vê na paciente é normal ou é alerta, e o que
                fazer nos primeiros minutos.
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
              O <strong className="font-semibold text-fg">Mapa das Intercorrências</strong>{" "}
              reúne em 4 pranchas para imprimir as 8 zonas de risco da face, os sinais de
              alerta e a conduta imediata. Tudo à vista antes, durante e depois de cada
              aplicação.
            </p>

            <SoComBonus>
              <p className="mt-4 max-w-[560px] border-l-2 border-wine pl-4 text-[1.02rem] leading-[1.55] text-fg">
                Quem garante até 6 de outubro leva de presente a aula ao vivo{" "}
                <em className="font-serif">Por Dentro da Face</em>.
              </p>
            </SoComBonus>

            <ul className="mt-6 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line px-3.5 py-1.5 text-[12.5px] text-fg-soft"
                >
                  {c}
                </li>
              ))}
            </ul>

            <BonusCountdown className="mt-8" />

            <div className="mt-8">
              <CtaButton className="w-full justify-center sm:w-auto sm:justify-start" />
            </div>
            <LinhaGarantia className="mt-3.5 text-[13.5px] tracking-[0.02em] text-fg-faint" />
          </div>

          <figure className="relative mx-auto w-full max-w-[420px] md:self-center">
            <div className="relative aspect-[760/1159] overflow-hidden rounded-[4px]">
              <Image
                src={withBasePath("/images/info/hero-mapa.webp")}
                alt="Prancha 01 do Mapa das Intercorrências: rosto com as 8 zonas de risco numeradas e as artérias da face"
                fill
                priority
                sizes="(min-width: 768px) 420px, 90vw"
                className="foto-funde-fundo object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-[12px] tracking-[0.12em] text-fg-faint uppercase">
              Prancha 01 · Mapa das zonas de risco
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
