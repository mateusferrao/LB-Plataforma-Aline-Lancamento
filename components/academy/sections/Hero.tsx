import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Ticks } from "@/components/academy/Ticks";
import { withBasePath } from "@/lib/basePath";
import { GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Hero enxuto (revisão de 05/10, no molde da página do Mapa de Intercorrência):
// chamada do público, H1 com a dor final, uma frase de apoio, botão com o preço
// e selos. Os pilares e o card de preço saíram daqui: estão na oferta.
// No celular a foto vai pro fim do hero.
const COPY = {
  sala: {
    pre: "Pra quem esteve na aula Por Dentro da Face",
    h1: "Você não fez tanto curso pra continuar",
    grifo: "com medo de aplicar e com a agenda vazia.",
    sub: "A culpa nunca foi sua. Faltava ver a face por dentro e ter um caminho. A Filgueiras Academy junta anatomia em fresh frozen, técnica e consulta, com encontros ao vivo com a Aline e o time dela.",
    img: "/images/fresh/lab-bracos-abertos.webp",
    alt: "Dra. Aline Filgueiras no laboratório de dissecção",
    legenda: "Laboratório de dissecção · EUA",
  },
  evergreen: {
    pre: "Pra quem aplica ou vai começar a aplicar harmonização",
    h1: "Você não estudou tanto pra continuar",
    grifo: "insegura na agulha e com a agenda parada.",
    sub: "A culpa nunca foi sua. Faltava ver a face por dentro e ter um caminho. A Filgueiras Academy junta anatomia em fresh frozen, técnica e consulta, com encontros ao vivo com a Dra. Aline e o time dela.",
    img: "/images/aline-hero-marsala-v2.jpg",
    alt: "Dra. Aline Filgueiras",
    legenda: "Dra. Aline Filgueiras",
  },
} as const;

export function Hero({ modo }: { modo: Modo }) {
  const c = COPY[modo];
  const garantia = `Garantia de ${GARANTIA_ACADEMY.prazoCondicionalDias} dias`;
  return (
    <section className="pt-10 pb-16 sm:pt-14 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-[54px]">
          <div>
            <span className="inline-flex rounded-[3px] border border-wine-ink/60 px-3 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-wine-ink uppercase">
              {c.pre}
            </span>

            <h1 className="mt-6 text-balance font-sans font-semibold text-[1.95rem] leading-[1.14] tracking-[-0.015em] text-fg sm:text-[2.5rem] lg:text-[2.7rem]">
              {c.h1} <span className="titulo-grifo">{c.grifo}</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[1.1rem] leading-[1.55] text-fg-soft">{c.sub}</p>

            <CtaButton modo={modo} showPrice className="mt-8 w-full justify-center sm:w-auto">
              Quero entrar na Academy
            </CtaButton>
            {modo === "sala" && (
              <p className="mt-3 text-[13.5px] text-fg-soft">
                Bônus pros <strong className="font-semibold text-fg">{SALA.primeirosN} primeiros</strong> até{" "}
                {SALA.prazoCurto}.
              </p>
            )}
            <Ticks className="mt-4" itens={["Acesso imediato", "12x ou Pix", garantia]} />
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[4px] border border-line-soft bg-surface">
            <Image
              src={withBasePath(c.img)}
              alt={c.alt}
              fill
              priority
              sizes="(min-width: 768px) 400px, 90vw"
              className="object-cover object-top"
            />
            <span className="absolute bottom-3 left-3 rounded-[2px] bg-bg/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur-sm">
              {c.legenda}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
