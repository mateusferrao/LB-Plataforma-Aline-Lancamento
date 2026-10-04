import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Preco } from "@/components/academy/Preco";
import { Prazo } from "@/components/academy/Prazo";
import { withBasePath } from "@/lib/basePath";
import { GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Hero no padrão da /fresh (pré-headline, H1 em Inter, grifo só no fim).
// Headline = dor + resultado, em segunda pessoa (revisão de 04/10: a versão
// anterior era uma tese indireta). Sala: continua o pitch ("uma noite não muda a
// mão") com resultado e prazo. Evergreen: a faixa repete o anúncio de aquisição e
// o H1 fala das duas inseguranças, a da agulha e a do "vou pensar".
// No celular a foto vai pro fim do hero: preço e botão na primeira rolagem.
const COPY = {
  sala: {
    faixa: `Condição da aula de 06/10 · até ${SALA.prazoCurto}`,
    pre: "Pra quem esteve na aula Por Dentro da Face",
    h1: "Uma noite te mostrou a face por dentro.",
    grifo: "18 meses fazem a sua mão parar de hesitar.",
    sub: "E a sua consulta parar de travar no \u201cvou pensar\u201d. Na Filgueiras Academy: o curso de fresh frozen, mais de 70 aulas de técnica, a Consulta que Vende e encontros ao vivo todo mês.",
    img: "/images/fresh/lab-bracos-abertos.webp",
    alt: "Dra. Aline Filgueiras no laboratório de dissecção",
    legenda: "Laboratório de dissecção · EUA",
  },
  evergreen: {
    faixa: "Novo: curso online de Fresh Frozen + dissecção, incluído",
    pre: "Pra quem aplica harmonização e ainda sente insegurança",
    h1: "Aplique sem a mão hesitar.",
    grifo: "Conduza a consulta sem travar no \u201cvou pensar\u201d.",
    sub: "Na Filgueiras Academy você vê a face por dentro em fresh frozen, domina a técnica em mais de 70 aulas e aprende os passos da consulta. Com a Dra. Aline e encontros ao vivo todo mês.",
    img: "/images/aline-hero-marsala-v2.jpg",
    alt: "Dra. Aline Filgueiras",
    legenda: "Dra. Aline Filgueiras",
  },
} as const;

const BULLETS = [
  ["Agulha", "O novo curso de Fresh Frozen e dissecção, mais intercorrências e anestesia"],
  ["Espelho", "Mais de 70 aulas práticas de toxina, preenchimento e bioestimuladores"],
  ["Consulta", "A Consulta que Vende e as ferramentas prontas: anamnese, termos e precificação"],
  ["Junto", "Encontros ao vivo todo mês na Sala de Lapidação"],
] as const;

export function Hero({ modo }: { modo: Modo }) {
  const c = COPY[modo];
  return (
    <section className="pt-10 pb-20 sm:pb-[78px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.12fr_0.88fr] md:gap-x-[54px] md:gap-y-0">
          <div className="md:col-start-1 md:row-start-1">
            <span className="inline-flex items-center rounded-full border border-wine-ink/50 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
              {c.faixa}
            </span>

            <p className="mt-6 border-l-2 border-wine-ink pl-3 text-[1.02rem] leading-[1.45] font-medium text-fg-soft sm:text-[1.08rem]">
              {c.pre}
            </p>

            <h1 className="mt-3 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem] lg:text-[2.6rem]">
              {c.h1} <span className="titulo-grifo">{c.grifo}</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">{c.sub}</p>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden max-md:order-last rounded-[4px] border border-line-soft bg-surface md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
            <Image
              src={withBasePath(c.img)}
              alt={c.alt}
              fill
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover object-top"
            />
            <span className="absolute bottom-3 left-3 rounded-[2px] bg-bg/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur-sm">
              {c.legenda}
            </span>
          </div>

          <div className="md:col-start-1 md:row-start-2">
            <ul className="list-none p-0 md:mt-6">
              {BULLETS.map(([k, b]) => (
                <li key={k} className="flex items-baseline gap-3 py-1.5 text-[1.02rem] leading-[1.5] text-fg">
                  <span className="w-[72px] shrink-0 text-[11px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
                    {k}
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 max-w-[460px] rounded-[6px] border border-line bg-bg-2 px-5 py-4">
              <Preco modo={modo} />
            </div>

            <CtaButton modo={modo} className="mt-5 w-full justify-center sm:w-auto sm:justify-start">
              Quero entrar na Academy
            </CtaButton>
            <p className="mt-3 text-center text-[13.5px] tracking-[0.02em] text-fg-faint sm:text-left">
              {GARANTIA_ACADEMY.linha}
            </p>
            {modo === "sala" && (
              <>
                <p className="mt-1.5 text-center text-[13.5px] tracking-[0.02em] text-fg-soft sm:text-left">
                  O cupom <strong className="font-semibold text-wine-ink">{SALA.cupom}</strong> já entra
                  aplicado pelo botão.
                </p>
                <Prazo className="mt-8" />
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
