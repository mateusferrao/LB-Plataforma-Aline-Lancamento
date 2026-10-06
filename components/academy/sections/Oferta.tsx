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
  BONUS_PRIMEIROS,
  BONUS_TODOS,
  BONUS_TOPO,
  GARANTIA_ACADEMY,
  PILHA_ACADEMY,
  SALA,
  VALOR_TOTAL,
  brl,
} from "@/lib/ofertaAcademy";

// Oferta num card só (molde da referência), com a oferta ajustada de 05/10:
// o núcleo com o valor riscado por item e o total de todo mundo; na sala, os
// bônus dos 10 primeiros com o total deles e, à parte, os +6 meses dos 5
// primeiros (fora da soma). Um preço só: R$1.797. 06/10: na sala, +3 meses pra
// todo mundo até 23h59 (com total próprio); o bloco dos 10 primeiros some quando
// BONUS_10_ESGOTADO. O preço abre pelo 12x, com o Pix e o "menos de R$5 por dia"
// (R$1.797 / 365 = R$4,92, só vale pro Pix) embaixo.
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
      <Titulo eyebrow="Tudo o que você leva hoje" center>
        Menos do que um curso presencial de dois dias
      </Titulo>

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
              <ul className="mt-6 list-none rounded-[6px] bg-bg-2 px-4">
                <Linha {...BONUS_TOPO} tag={`E os ${SALA.primeirosTopo} primeiros`} />
              </ul>
            </div>
          </AteOFim>
        )}

        <div className="mt-9 text-center">
          <p className="text-[1rem] text-fg-soft">Hoje você leva tudo por</p>
          <p className="mt-2 font-serif text-fg">
            <span className="text-[1.5rem]">12x de </span>
            <span className="text-[3.2rem] leading-none">{ACADEMY.parcela12x}</span>
          </p>
          <p className="mt-2 text-[0.98rem] text-fg-soft">
            ou <strong className="font-semibold text-fg">{ACADEMY.precoCheioLabel}</strong> à vista no Pix
          </p>
          <p className="mt-1 text-[0.9rem] text-fg-faint">No Pix, dá menos de R$5 por dia ao longo do ano.</p>
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
                  : `Os primeiros contam pela ordem de confirmação do pagamento. Os +3 meses valem pra toda compra até 23h59. A equipe avisa no WhatsApp e aplica até ${SALA.extensaoAte}.`}
              </p>
            </AteOFim>
          )}
        </div>
      </Reveal>
    </Secao>
  );
}
