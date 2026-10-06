import Image from "next/image";
import { Container } from "@/components/Container";
import { AteOFim } from "@/components/academy/AteOFim";
import { VerOfertaButton, type Modo } from "@/components/academy/CtaButton";
import { Ticks } from "@/components/academy/Ticks";
import { withBasePath } from "@/lib/basePath";
import { BONUS_10_ESGOTADO, GARANTIA_ACADEMY, SALA } from "@/lib/ofertaAcademy";

// Hero enxuto (revisão de 05/10, no molde da página do Mapa de Intercorrência):
// chamada do público, H1 com a dor final, uma frase de apoio, botão com o preço
// e selos. Os pilares e o card de preço saíram daqui: estão na oferta.
// No celular a foto vai pro fim do hero. Revisão de 06/10: o H1 da evergreen é o
// resultado (não a dor) e sai "agenda" (soava como promessa de agenda); a foto da
// evergreen é a do laboratório (o mecanismo); e o botão leva à oferta, sem preço
// (na sala também, desde 06/10). Mais venda/agenda no H1 (pedido de 06/10).
const COPY = {
  sala: {
    pre: "Pra quem esteve na aula Por Dentro da Face",
    h1: "Você não fez tanto curso pra continuar",
    grifo: "com medo de aplicar e com a agenda vazia.",
    sub: "Faltava ver a face por dentro e ter um roteiro pra consulta. Na Filgueiras Academy você estuda a anatomia em fresh frozen, treina a técnica e aprende a Consulta que Vende, com encontros ao vivo com a Aline e o time dela.",
    img: "/images/fresh/lab-bracos-abertos.webp",
    alt: "Dra. Aline Filgueiras no laboratório de dissecção",
    legenda: "Laboratório de dissecção · EUA",
  },
  evergreen: {
    pre: "Pra quem aplica ou vai começar a aplicar harmonização",
    h1: "Saiba o que tem embaixo da agulha",
    grifo: "e o que dizer pra paciente fechar na consulta.",
    sub: "Na Filgueiras Academy você estuda a face por dentro em fresh frozen, treina a técnica em mais de 70 aulas e aprende o roteiro da Consulta que Vende. Com encontros ao vivo com a Dra. Aline e o time dela ao longo do ano.",
    img: "/images/fresh/lab-luvas.webp",
    alt: "Dra. Aline Filgueiras calçando as luvas no laboratório de dissecção",
    legenda: "Laboratório de dissecção · EUA",
  },
} as const;

export function Hero({ modo }: { modo: Modo }) {
  const c = COPY[modo];
  const garantia = GARANTIA_ACADEMY.nome;
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

            <VerOfertaButton className="mt-8 w-full justify-center sm:w-auto">
              Ver tudo o que está incluso
            </VerOfertaButton>
            {modo === "sala" && (
              <AteOFim>
                <p className="mt-3 text-[13.5px] text-fg-soft">
                  Até {SALA.prazoCurto}:{" "}
                  <strong className="font-semibold text-fg">+3 meses de acesso pra todo mundo</strong>
                  {BONUS_10_ESGOTADO ? "." : <> e bônus pros primeiros.</>}
                </p>
              </AteOFim>
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
