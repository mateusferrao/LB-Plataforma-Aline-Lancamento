import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/lp2/CtaButton";
import { ParcelaLine } from "@/components/ParcelaLine";
import { UrgenciaFina } from "@/components/UrgenciaFina";
import { VslPlayer } from "@/components/VslPlayer";
import { withBasePath } from "@/lib/basePath";
import { LOTE_TETO } from "@/lib/lotes";
import { ANCORA_CURSO } from "@/components/fresh/ancora";

// Hero da /fresh. Headline no padrão de página de vendas (sem o bloco grifado):
// pré-headline com a dor, H1 com o resultado, subtítulo com a entrega e o
// porquê (fresh frozen), bullets com o valor.
//
// Ordem no celular: texto → mídia → bullets/CTA (a headline nunca fica abaixo
// do vídeo). No desktop a mídia vai pra coluna da direita, ocupando as 2 linhas.
const BULLETS = [
  "Saiba até onde ir perto das áreas de risco e aplique sem hesitar",
  "Entenda por que a mesma técnica fica linda numa paciente e sem graça na outra",
  `O curso internacional de fresh frozen da Aline custa ${ANCORA_CURSO}. Esta aula, ${LOTE_TETO.priceLabel}, sem viajar`,
];

export function Hero({ comVsl }: { comVsl: boolean }) {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.12fr_0.88fr] md:gap-x-[54px] md:gap-y-0">
          <div className="md:col-start-1 md:row-start-1">
            <span className="inline-flex items-center rounded-full border border-wine-ink/50 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] text-wine-ink uppercase">
              Ao vivo · 06/10 · 20h · online
            </span>

            <p className="mt-6 border-l-2 border-wine-ink pl-3 text-[1.02rem] leading-[1.45] font-medium text-fg-soft sm:text-[1.08rem]">
              Pra quem já aplica harmonização e ainda sente insegurança em alguns
              procedimentos
            </p>

            <h1 className="mt-3 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem] lg:text-[2.6rem]">
              A segurança de um curso internacional em cadáver fresh frozen,{" "}
              <span className="text-wine-ink">pra você aplicar sem medo de intercorrência.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
              Numa aula ao vivo, a Dra. Aline Filgueiras, que estudou e dá cursos
              internacionais de fresh frozen nos EUA e na Europa, mostra nas imagens das
              dissecções dela onde estão os riscos da face e por que cada rosto responde de
              um jeito.
            </p>
          </div>

          {comVsl ? (
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[420px] md:self-center">
              <VslPlayer className="absolute inset-0" />
            </div>
          ) : (
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
              <Image
                src={withBasePath("/images/fresh/lab-luvas.webp")}
                alt="Dra. Aline Filgueiras calçando as luvas no laboratório de dissecção"
                fill
                priority
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-[2px] bg-bg/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur-sm">
                Laboratório de dissecção · EUA
              </span>
            </div>
          )}

          <div className="md:col-start-1 md:row-start-2">
            <ul className="list-none p-0 md:mt-6">
              {BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-baseline gap-3 py-1.5 text-[1.02rem] leading-[1.5] text-fg"
                >
                  <span className="shrink-0 font-semibold text-wine-ink" aria-hidden="true">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <CtaButton
              showPrice
              className="mt-7 w-full justify-center sm:w-auto sm:justify-start"
            >
              Quero meu ingresso
            </CtaButton>
            <ParcelaLine className="mt-2 text-center sm:text-left" />
            <UrgenciaFina className="mt-3 text-center text-[13.5px] tracking-[0.02em] text-fg-faint sm:text-left" />

            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-7 sm:gap-7">
              <Stat target={11} suffix="+" l="anos de clínica" />
              <Stat target={1000} suffix="+" formatThousands l="alunas formadas" />
              <Stat target={40} suffix=" mil+" l="na comunidade" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({
  target,
  suffix,
  formatThousands,
  l,
}: {
  target: number;
  suffix: string;
  formatThousands?: boolean;
  l: string;
}) {
  return (
    <div>
      <AnimatedNumber
        target={target}
        suffix={suffix}
        formatThousands={formatThousands}
        className="block font-serif text-[1.35rem] text-fg sm:text-[1.6rem]"
      />
      <div className="text-[11px] tracking-[0.05em] text-fg-faint uppercase sm:text-[12px]">
        {l}
      </div>
    </div>
  );
}
