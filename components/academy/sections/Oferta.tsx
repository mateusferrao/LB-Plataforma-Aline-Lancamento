import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { AteOFim } from "@/components/academy/AteOFim";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { PrazoInline } from "@/components/academy/Prazo";
import { Secao } from "@/components/academy/Secao";
import { Ticks } from "@/components/academy/Ticks";
import {
  ACADEMY,
  BONUS_10_ESGOTADO,
  BONUS_CINCO,
  BONUS_PRIMEIRA,
  BONUS_PRIMEIROS,
  ENTREGA_BONUS,
  BONUS_TODOS,
  GARANTIA_ACADEMY,
  PILHA_ACADEMY,
  SALA,
  VALOR_TOTAL,
  brl,
} from "@/lib/ofertaAcademy";
import { withBasePath } from "@/lib/basePath";

// Fotos do Manual do Envelhecimento (bônus das 5 primeiras), do Drive da equipe em 06/10.
const FOTOS_MANUAL = [
  { src: "/images/manual/manual-rostos.webp", w: 1200, h: 1013, alt: "Manual do Envelhecimento aberto na página do processo de envelhecimento da pele da face, aos 30, 45 e 60 anos" },
  { src: "/images/manual/manual-pele.webp", w: 800, h: 800, alt: "Página do Manual do Envelhecimento com as camadas da pele aos 30 e aos 60 anos" },
  { src: "/images/manual/manual-abas.webp", w: 800, h: 800, alt: "Capa do Manual do Envelhecimento com as abas Face, Gordura e Ossos" },
];

// Oferta num card só (molde da referência), com a oferta ajustada de 05/10:
// o núcleo com o valor riscado por item e o total de todo mundo; na sala, os
// bônus dos 10 primeiros com o total deles. Um preço só: R$1.797. 06/10: na sala, +3 meses pra
// todo mundo até 23h59 (com total próprio); o bloco dos 10 primeiros some quando
// BONUS_10_ESGOTADO. O preço abre pelo 12x, com o Pix e o "menos de R$5 por dia"
// (R$1.797 / 365 = R$4,92, à vista) embaixo.
function Linha({ nome, detalhe, valor, tag }: { nome: string; detalhe: string; valor?: number; tag?: string }) {
  return (
    <li className="flex items-baseline justify-between gap-5 border-b border-dashed border-line py-3">
      <span>
        <span className="text-[1.03rem] font-semibold text-fg">
          {tag && <span className="mr-2 text-[10.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">{tag}</span>}
          {nome}
        </span>
        <small className="mt-0.5 block text-[0.9rem] leading-[1.45] text-fg-soft">{detalhe}</small>
      </span>
      {valor ? (
        <span className="shrink-0 text-[0.98rem] text-fg-soft line-through decoration-wine-bright">{brl(valor)}</span>
      ) : (
        <span className="shrink-0 text-[0.9rem] text-wine-ink">Incluso</span>
      )}
    </li>
  );
}

function Total({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <div className="flex items-baseline justify-between gap-5 pt-5">
      <span className="text-[1rem] text-fg-soft">{rotulo}</span>
      <span className="shrink-0 font-serif text-[1.5rem] text-fg line-through decoration-wine-bright">{valor}</span>
    </div>
  );
}

export function Oferta({ modo }: { modo: Modo }) {
  const sala = modo === "sala";
  return (
    <Secao id="oferta">
      <Titulo eyebrow={sala ? "Tudo o que você leva hoje" : "Tudo o que você leva"} center>
        Menos do que um curso presencial de dois dias
      </Titulo>
      {/* Âncora genérica (06/10: sem citar o curso da Aline e sem número sem fonte). */}
      <Reveal>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-[1.02rem] leading-[1.6] text-fg-soft">
          Um hands-on de técnica de dois dias custa milhares de reais, fora deslocamento e hospedagem. Um curso de
          fresh frozen fora do Brasil passa de US$5.000, sem contar passagem e visto.
        </p>
      </Reveal>

      <Reveal className="mt-10 rounded-[8px] border-2 border-wine px-5 py-7 sm:px-8">
        <h3 className="text-center font-sans text-[1.1rem] font-semibold tracking-[0.08em] text-fg uppercase">
          {ACADEMY.nome}
        </h3>

        <ul className="mt-4 list-none p-0">
          {PILHA_ACADEMY.map((i) => (
            <Linha key={i.nome} {...i} />
          ))}
        </ul>
        {sala ? (
          <AteOFim depois={<Total rotulo="Valor total" valor={VALOR_TOTAL.nucleo} />}>
            <ul className="list-none p-0">
              <Linha {...BONUS_TODOS} tag="Hoje" />
            </ul>
            <Total rotulo="Valor total pra todo mundo que entrar hoje" valor={VALOR_TOTAL.sala} />
          </AteOFim>
        ) : (
          <Total rotulo="Valor total" valor={VALOR_TOTAL.nucleo} />
        )}

        {sala && !BONUS_10_ESGOTADO && (
          <AteOFim>
            <div className="mt-9">
              <p className="text-center text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
                + Só pros {SALA.primeirosN} primeiros, até {SALA.prazoCurto}
              </p>
              <ul className="mt-2 list-none p-0">
                {BONUS_PRIMEIROS.map((i) => (
                  <Linha key={i.nome} {...i} tag="Bônus" />
                ))}
              </ul>
              <Total rotulo={`Valor total pros ${SALA.primeirosN} primeiros`} valor={VALOR_TOTAL.primeiros} />
              <div className="mt-6 rounded-[6px] bg-bg-2 px-4 pb-1">
                <ul className="list-none p-0">
                  <Linha {...BONUS_CINCO} tag={`E as ${SALA.primeirosCinco} primeiras`} />
                </ul>
                <figure className="mt-3 mb-1">
                  <div className="grid grid-cols-2 gap-2">
                    {FOTOS_MANUAL.map((f, i) => (
                      <Image
                        key={f.src}
                        src={withBasePath(f.src)}
                        alt={f.alt}
                        width={f.w}
                        height={f.h}
                        sizes={i === 0 ? "(min-width: 768px) 600px, 92vw" : "(min-width: 768px) 300px, 46vw"}
                        className={`h-auto w-full rounded-[6px] object-cover ${i === 0 ? "col-span-2" : "aspect-square"}`}
                      />
                    ))}
                  </div>
                </figure>
                <ul className="list-none p-0">
                  <Linha {...BONUS_PRIMEIRA} tag="E a primeira" />
                </ul>
              </div>
              <p className="mt-4 text-center text-[0.88rem] leading-[1.5] text-fg-soft">{ENTREGA_BONUS}</p>
            </div>
          </AteOFim>
        )}

        <div className="mt-9 text-center">
          <p className="text-[1rem] text-fg-soft">{sala ? "Hoje você leva tudo por" : "Você leva tudo por"}</p>
          <p className="mt-2 font-serif text-fg">
            <span className="text-[1.5rem]">12x de </span>
            <span className="text-[3.2rem] leading-none">{ACADEMY.parcela12x}</span>
          </p>
          <p className="mt-2 text-[0.98rem] text-fg-soft">
            ou <strong className="font-semibold text-fg">{ACADEMY.precoCheioLabel}</strong> à vista
          </p>
          <p className="mt-1 text-[0.9rem] text-fg-faint">Dá menos de R$5 por dia ao longo do ano.</p>
          {sala && (
            <AteOFim>
              <p className="mt-6 text-[0.98rem] text-fg-soft">
                {BONUS_10_ESGOTADO ? "Os +3 meses saem em" : "Os bônus da sala saem em"}{" "}
                <PrazoInline className="text-[1.15rem] text-fg" />
              </p>
            </AteOFim>
          )}

          <CtaButton modo={modo} className="mt-6 w-full justify-center">
            Quero entrar na Academy
          </CtaButton>
          <Ticks
            className="mt-4 justify-center"
            itens={["Acesso imediato", "Pix ou cartão", GARANTIA_ACADEMY.nome]}
          />
          {sala && (
            <AteOFim>
              <p className="mt-4 text-[0.86rem] leading-[1.5] text-fg-faint">
                {BONUS_10_ESGOTADO
                  ? `Os ${SALA.primeirosN} primeiros já entraram. Os +3 meses valem pra toda compra confirmada até 23h59; a equipe aplica até ${SALA.extensaoAte}.`
                  : `Os primeiros contam pela ordem de confirmação do pagamento. Os +3 meses valem pra toda compra até 23h59 e a equipe aplica até ${SALA.extensaoAte}.`}
              </p>
            </AteOFim>
          )}
        </div>
      </Reveal>
    </Secao>
  );
}
