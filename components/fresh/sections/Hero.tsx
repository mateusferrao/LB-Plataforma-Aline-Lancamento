import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { VslPlayer } from "@/components/VslPlayer";
import { withBasePath } from "@/lib/basePath";
import { LOTES } from "@/lib/lotes";
import { GARANTIA } from "@/lib/ofertaFresh";
import { ANCORA_CURSO } from "@/components/fresh/ancora";

// Hero da /fresh (decisões de 01 e 02/10, docs/fresh/README.md). A primeira
// dobra espelha o criativo que mais vende ("Por dentro da face · uma aula ao
// vivo de anatomia em fresh frozen"): abre no fresh frozen com tempo e esforço
// a zero ("numa noite e sem viajar") e deságua na dor (aplicar no escuro) e no
// status visto pela paciente. Preço visível e CTA direto ao checkout.
// Na variante sem VSL, a mídia é a própria arte do criativo (mesmo visual do
// anúncio). É ilustração sobre a Aline, não imagem de peça (docs/fresh §8).
//
// Ordem no celular: texto → mídia → bullets/CTA (a headline nunca fica abaixo
// do vídeo). No desktop a mídia vai pra coluna da direita, ocupando as 2 linhas.
const LOTE = LOTES[0];

const BULLETS = [
  "Saiba onde está o risco antes de a agulha chegar lá",
  "Passe na consulta a segurança que a paciente percebe, e é disso que ela lembra quando indica",
  "Tenha um diferencial caro e difícil de ter, e cobre pelo que entrega",
];

export function Hero({ comVsl }: { comVsl: boolean }) {
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.12fr_0.88fr] md:gap-x-[54px] md:gap-y-0">
          <div className="md:col-start-1 md:row-start-1">
            <span className="inline-flex items-center rounded-full border border-wine-ink/50 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] text-wine-ink uppercase">
              Aula ao vivo de anatomia em fresh frozen · 06/10 · 20h
            </span>

            <p className="mt-6 border-l-2 border-wine-ink pl-3 text-[1.02rem] leading-[1.45] font-medium text-fg-soft sm:text-[1.08rem]">
              Pra quem aplica (ou vai aplicar) harmonização
            </p>

            <h1 className="mt-3 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem] lg:text-[2.6rem]">
              A face por dentro, em cadáver fresh frozen, numa noite e sem viajar.{" "}
              <span className="titulo-grifo">
                Pra você parar de aplicar no escuro e a paciente sentir a sua segurança.
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
              A Dra. Aline Filgueiras estuda e dá cursos de fresh frozen nos EUA e na Europa.
              Um curso internacional desses chega a custar {ANCORA_CURSO}. Ao vivo, por{" "}
              {LOTE.priceLabel}, ela mostra nas imagens das dissecções dela a artéria que fica a
              milímetros da sua agulha e por que cada rosto responde de um jeito.
            </p>
          </div>

          {comVsl ? (
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[420px] md:self-center">
              <VslPlayer className="absolute inset-0" />
            </div>
          ) : (
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-[4px] border border-line-soft bg-surface md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[400px] md:self-center">
              <Image
                src={withBasePath("/images/fresh/criativo-por-dentro-da-face.webp")}
                alt="Dra. Aline Filgueiras com uma ilustração da anatomia da face sobre metade do rosto. Por dentro da face: uma aula ao vivo de anatomia em fresh frozen, 6 de outubro, às 20h"
                fill
                priority
                sizes="(min-width: 768px) 400px, 80vw"
                className="object-cover"
              />
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

            <CtaButton showPrice className="mt-7 w-full justify-center sm:w-auto sm:justify-start">
              Garantir meu ingresso
            </CtaButton>
            <p className="mt-3 text-center text-[13.5px] tracking-[0.02em] text-fg-faint sm:text-left">
              {LOTE.priceLabel} até a aula · {GARANTIA.nome} · ao vivo, 06/10 às 20h
            </p>

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
