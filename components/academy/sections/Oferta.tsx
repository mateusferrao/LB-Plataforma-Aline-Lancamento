import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { PrazoInline } from "@/components/academy/Prazo";
import { Secao } from "@/components/academy/Secao";
import { Ticks } from "@/components/academy/Ticks";
import { ACADEMY, ANCORAS, NIVEIS_SALA, PILHA_ACADEMY, SALA, VALOR_TOTAL, brl } from "@/lib/ofertaAcademy";

// Oferta num card só (molde da referência): a pilha com o valor riscado por
// item, o total riscado, o preço, o botão e os selos. Na sala, os bônus de todas
// entram na pilha e na soma; os das mais rápidas vêm depois do botão, fora da
// soma. Embaixo, as âncoras reais (cursos presenciais da Aline).
function Linha({ nome, detalhe, valor, tag }: { nome: string; detalhe: string; valor: number; tag?: string }) {
  return (
    <li className="flex items-baseline justify-between gap-5 border-b border-dashed border-line py-4">
      <span>
        <span className="text-[1.03rem] font-semibold text-fg">
          {tag && <span className="mr-2 text-[10.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">{tag}</span>}
          {nome}
        </span>
        <small className="mt-1 block text-[0.9rem] leading-[1.45] text-fg-soft">{detalhe}</small>
      </span>
      <span className="shrink-0 text-[0.98rem] text-fg-soft line-through decoration-wine-bright">{brl(valor)}</span>
    </li>
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
          {sala &&
            NIVEIS_SALA[0].itens.map((i) => (
              <Linha key={i.nome} nome={i.nome} detalhe={i.porque} valor={i.valor} tag="Bônus" />
            ))}
        </ul>

        <div className="flex items-baseline justify-between gap-5 pt-5">
          <span className="text-[1rem] text-fg-soft">Valor total</span>
          <span className="font-serif text-[1.5rem] text-fg line-through decoration-wine-bright">{VALOR_TOTAL[modo]}</span>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[1rem] text-fg-soft">
            {sala ? "Hoje, na condição da sala, você leva tudo por" : "Hoje você leva tudo por"}
          </p>
          {sala && (
            <p className="mt-2 text-[1rem] text-fg-soft line-through decoration-wine-bright">{ACADEMY.precoCheioLabel}</p>
          )}
          <p className="mt-1 font-serif text-[3.4rem] leading-none text-fg">{sala ? SALA.precoLabel : ACADEMY.precoCheioLabel}</p>
          <p className="mt-2 text-[0.95rem] text-fg-soft">
            {(sala ? SALA.parcela12x : ACADEMY.parcela12x)
              ? `ou 12x de ${sala ? SALA.parcela12x : ACADEMY.parcela12x}`
              : "em até 12x no cartão"}{" "}
            · ou Pix
          </p>
          {sala && (
            <p className="mt-6 text-[0.98rem] text-fg-soft">
              A condição da sala termina em <PrazoInline className="text-[1.15rem] text-fg" />
            </p>
          )}

          <CtaButton modo={modo} className="mt-6 w-full justify-center">
            Quero entrar na Academy
          </CtaButton>
          {sala && (
            <p className="mt-3 text-[0.9rem] text-fg-soft">
              Cupom <strong className="font-semibold text-fg">{SALA.cupom}</strong> já aplicado pelo botão
            </p>
          )}
          <Ticks className="mt-4 justify-center" itens={["Compra segura", "Pix ou cartão", "Acesso imediato"]} />
        </div>

        {sala && (
          <div className="mt-8 border-t border-line pt-6">
            <p className="text-center text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
              E pras mais rápidas
            </p>
            <ul className="mt-2 list-none p-0">
              {NIVEIS_SALA.slice(1).flatMap((n) =>
                n.itens.map((it) => <Linha key={it.nome} nome={it.nome} detalhe={n.quem} valor={it.valor} />),
              )}
            </ul>
            <p className="mt-3 text-center text-[0.86rem] leading-[1.5] text-fg-faint">
              Pela ordem de confirmação do pagamento. A equipe avisa no WhatsApp.
            </p>
          </div>
        )}
      </Reveal>

      <Reveal className="mt-4 grid gap-4 sm:grid-cols-2">
        {ANCORAS.map((a) => (
          <div key={a.o} className="rounded-[6px] border border-line px-5 py-5 text-center">
            <p className="font-sans text-[1.3rem] font-semibold text-fg">{a.v}</p>
            <p className="mt-1 text-[0.92rem] leading-[1.45] text-fg-soft">{a.o}</p>
          </div>
        ))}
      </Reveal>
    </Secao>
  );
}
