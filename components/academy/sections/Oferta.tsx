import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Prazo } from "@/components/academy/Prazo";
import { Preco } from "@/components/academy/Preco";
import {
  ACADEMY,
  GARANTIA_ACADEMY,
  NIVEIS_SALA,
  PILHA_ACADEMY,
  SALA,
  VALOR_TOTAL,
  brl,
} from "@/lib/ofertaAcademy";

// Pilha de valor (Hormozi): cada item com o valor riscado, o total riscado e,
// ao lado, o preço. Na sala, os bônus de todas entram na pilha e na soma; os
// níveis das mais rápidas vêm abaixo, com valor, fora da soma.
function Linha({ nome, detalhe, valor, bonus = false }: { nome: string; detalhe: string; valor: number; bonus?: boolean }) {
  return (
    <li className="flex items-baseline justify-between gap-5 border-b border-line py-4">
      <span className="text-[1.05rem] text-fg">
        {bonus && (
          <span className="mr-2 text-[11px] font-semibold tracking-[0.16em] text-wine-ink uppercase">Bônus</span>
        )}
        {nome}
        <small className="mt-1 block text-[0.87rem] leading-[1.45] text-fg-faint">{detalhe}</small>
      </span>
      <span className="shrink-0 text-[0.98rem] text-fg-soft line-through decoration-wine-bright">{brl(valor)}</span>
    </li>
  );
}

function Pilha({ modo }: { modo: Modo }) {
  return (
    <Reveal className="grid content-start">
      <ul className="list-none border-t border-line p-0">
        {PILHA_ACADEMY.map((i) => (
          <Linha key={i.nome} {...i} />
        ))}
        {modo === "sala" &&
          NIVEIS_SALA[0].itens.map((i) => <Linha key={i.nome} nome={i.nome} detalhe={i.porque} valor={i.valor} bonus />)}
      </ul>
      <div className="flex items-baseline justify-between gap-5 pt-5">
        <span className="text-[12px] font-semibold tracking-[0.16em] text-fg-soft uppercase">Valor total</span>
        <span className="font-serif text-[1.5rem] text-fg line-through decoration-wine-bright">{VALOR_TOTAL[modo]}</span>
      </div>
    </Reveal>
  );
}

function CardPreco({ modo }: { modo: Modo }) {
  return (
    <Reveal delay={90} className="flex flex-col justify-center rounded-[6px] bg-wine px-8 py-9 text-on-wine md:sticky md:top-8">
      <Preco modo={modo} onWine />
      <CtaButton modo={modo} variant="accent" className="mt-7 w-full justify-center">
        Quero entrar na Academy
      </CtaButton>
      {modo === "sala" && (
        <div className="mt-3 text-center text-[0.9rem] opacity-90">
          Cupom <strong className="font-semibold">{SALA.cupom}</strong> já aplicado pelo botão
        </div>
      )}
      <div className="mt-6 flex items-start gap-2.5 text-left text-[0.94rem] opacity-90">
        <span className="font-serif text-[1.2rem] leading-none italic">✓</span>
        <span>{GARANTIA_ACADEMY.linha}</span>
      </div>
    </Reveal>
  );
}

function MaisRapidas() {
  return (
    <Reveal className="mt-12 rounded-[6px] border border-wine/60 bg-bg-3 p-6 sm:p-7">
      <span className="text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">E pras mais rápidas</span>
      <ul className="mt-2 list-none p-0">
        {NIVEIS_SALA.slice(1).flatMap((n) =>
          n.itens.map((it) => (
            <li key={it.nome} className="flex items-baseline justify-between gap-5 border-b border-line py-3 last:border-b-0">
              <span className="text-[1.02rem] text-fg">
                {it.nome}
                <small className="mt-0.5 block text-[0.85rem] text-wine-ink">{n.quem}</small>
              </span>
              <span className="shrink-0 text-[0.95rem] text-fg-soft line-through decoration-wine-bright">{brl(it.valor)}</span>
            </li>
          )),
        )}
      </ul>
      <p className="mt-3 text-[0.88rem] leading-[1.55] text-fg-faint">
        Conta pela ordem de confirmação do pagamento. A equipe avisa no WhatsApp quem entrou em cada nível
        {SALA.encontroCasosData ? ` · encontro de casos em ${SALA.encontroCasosData}` : ""}
        {SALA.diagnosticoAte ? ` · diagnóstico agendado até ${SALA.diagnosticoAte}` : ""}.
      </p>
    </Reveal>
  );
}

export function Oferta({ modo }: { modo: Modo }) {
  const sala = modo === "sala";
  return (
    <section id="oferta" className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        {sala ? (
          <Titulo eyebrow="Condição de quem esteve na aula" destaque={`${SALA.precoLabel} e os bônus da sala.`}>
            Até {SALA.prazoCurto}:
          </Titulo>
        ) : (
          <Titulo eyebrow={ACADEMY.nomeCompleto} destaque="no mesmo lugar.">
            Consulta, agulha e espelho
          </Titulo>
        )}
      </Container>

      <Container>
        <div className="mt-11 grid grid-cols-1 items-start gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Pilha modo={modo} />
          <CardPreco modo={modo} />
        </div>
        {sala && (
          <>
            <MaisRapidas />
            <Prazo className="mt-10" />
          </>
        )}
      </Container>
    </section>
  );
}
