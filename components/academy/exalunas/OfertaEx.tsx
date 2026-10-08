import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { AteOFim } from "@/components/academy/AteOFim";
import { PrazoInline } from "@/components/academy/Prazo";
import { Secao } from "@/components/academy/Secao";
import { Ticks } from "@/components/academy/Ticks";
import { CtaEx } from "@/components/academy/exalunas/CtaEx";
import {
  ACADEMY,
  ANATOMIA_EXALUNAS,
  BONUS_EXALUNAS,
  ENTREGA_EXALUNAS,
  EXALUNAS,
  GARANTIA_ACADEMY,
  RENOVACAO_EXALUNAS,
  VALOR_EXALUNAS,
  brl,
} from "@/lib/ofertaAcademy";

// Card da oferta das ex-assinantes, no molde da Oferta da Academy: a pilha com o
// valor riscado por item, as duas âncoras pedidas (plataforma + anatomia), o
// total com os bônus e, por fim, o preço grande (aqui o argumento é a distância
// entre R$1.797 e R$797, então o à vista vem antes do 12x).
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

export function OfertaEx() {
  return (
    <Secao id="oferta">
      <Titulo eyebrow="Sua volta à Academy" destaque="por menos da metade do preço." center>
        Tudo o que você leva,
      </Titulo>
      <Reveal>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-[1.02rem] leading-[1.6] text-fg-soft">
          Quem entra hoje pela primeira vez paga {ACADEMY.precoCheioLabel}. Você já esteve aqui e já confiou na Aline,
          então a sua volta custa {EXALUNAS.precoLabel}, com o módulo de anatomia de presente.
        </p>
      </Reveal>

      <Reveal className="mt-10 rounded-[8px] border-2 border-wine px-5 py-7 sm:px-8">
        <h3 className="text-center font-sans text-[1.1rem] font-semibold tracking-[0.08em] text-fg uppercase">
          Volta das ex-assinantes
        </h3>

        <ul className="mt-4 list-none p-0">
          <Linha {...RENOVACAO_EXALUNAS} />
          <Linha {...ANATOMIA_EXALUNAS} tag="Presente" />
        </ul>
        <Total rotulo="A plataforma e o módulo" valor={VALOR_EXALUNAS.ancoras} />

        <ul className="mt-6 list-none p-0">
          {BONUS_EXALUNAS.map((i) => (
            <Linha key={i.nome} {...i} tag="Bônus" />
          ))}
        </ul>
        <Total rotulo="Valor total" valor={VALOR_EXALUNAS.total} />

        <div className="mt-9 text-center">
          <p className="text-[1rem] text-fg-soft">Pra ex-assinante, você leva tudo por</p>
          <p className="mt-2 font-serif text-[3.4rem] leading-none text-fg">{EXALUNAS.precoLabel}</p>
          <p className="mt-2 text-[0.98rem] text-fg-soft">
            à vista · ou <strong className="font-semibold text-fg">12x de {EXALUNAS.parcela12x}</strong> no cartão
          </p>
          <p className="mt-1 text-[0.9rem] text-fg-faint">Dá {EXALUNAS.porDia} por dia ao longo do ano.</p>
          <AteOFim fim={EXALUNAS.endsAt}>
            <p className="mt-6 text-[0.98rem] text-fg-soft">
              A condição de ex-assinante termina em{" "}
              <PrazoInline fim={EXALUNAS.endsAt} className="text-[1.15rem] text-fg" />
            </p>
          </AteOFim>

          <CtaEx className="mt-6 w-full">Quero voltar com o presente</CtaEx>
          <Ticks className="mt-4 justify-center" itens={["Acesso imediato", "Pix ou cartão", GARANTIA_ACADEMY.nome]} />
          <p className="mt-4 text-[0.88rem] leading-[1.5] text-fg-soft">{ENTREGA_EXALUNAS}</p>
        </div>
      </Reveal>
    </Secao>
  );
}
