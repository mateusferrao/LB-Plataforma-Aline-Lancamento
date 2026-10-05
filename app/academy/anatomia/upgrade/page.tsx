import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MarcaCompra } from "@/components/academy/MarcaCompra";
import { ACADEMY, ANATOMIA, GARANTIA_ACADEMY, PILHA_ACADEMY, TICTO_UPSELL_ANATOMIA, brl } from "@/lib/ofertaAcademy";

export const metadata: Metadata = {
  title: "Antes de começar · Filgueiras Academy",
  description: "Leve a Filgueiras Academy completa pagando só a diferença.",
  robots: { index: false, follow: false },
};

// Página de upsell do Flow da Ticto (docs/plataforma/ticto-funil.md): aparece logo
// depois da compra da anatomia. Rollover do Hormozi: o que ela acabou de pagar vira
// crédito e a Academy sai pela diferença, num clique. Cada item que ela ganha a mais
// aparece com o valor da pilha. Sem desconto e sem contador: a única condição real
// é a do momento (1 clique, sem preencher dados de novo).
const OBRIGADO = "/academy/anatomia/obrigado";
const UPGRADE_WHATSAPP_URL =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent(
    `Oi! Comprei o curso de anatomia e quero trocar pela Filgueiras Academy pagando a diferença (${ANATOMIA.upgradePrecoLabel}).`,
  );

// O que a Academy soma à anatomia (todo o núcleo menos o próprio curso de anatomia).
const A_MAIS = PILHA_ACADEMY.slice(1);
const VALOR_A_MAIS = brl(A_MAIS.reduce((t, i) => t + (i.valor ?? 0), 0) + Math.round(ACADEMY.precoCheio / 2));

const TEXTO_ACEITAR = `Sim, quero a Academy completa por mais ${ANATOMIA.upgradePrecoLabel}`;
const TEXTO_RECUSAR = "Não, quero ficar só com o curso de anatomia";
const ACEITAR =
  "mt-7 inline-flex w-full cursor-pointer items-center justify-center rounded-[2px] bg-wine px-8 py-[18px] font-sans text-[1.02rem] font-semibold text-on-wine transition-transform duration-150 ease-out hover:-translate-y-0.5";
const RECUSAR =
  "mt-4 block w-full cursor-pointer bg-transparent text-center text-[0.95rem] text-fg-soft underline underline-offset-2 hover:text-wine-ink";

export default function AnatomiaUpgrade() {
  const umClique = Boolean(TICTO_UPSELL_ANATOMIA.scriptSrc);
  return (
    <main className="py-14 sm:py-20">
      <MarcaCompra />
      <Container narrow>
        {/* Script do 1 clique da Ticto. O React 19 leva <script async src> pro <head>. */}
        {umClique && <script async src={TICTO_UPSELL_ANATOMIA.scriptSrc} />}

        <div className="text-center">
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Sua compra foi confirmada · espera um minuto
          </span>
          <h1 className="mt-4 text-balance font-sans font-semibold text-[1.85rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.3rem]">
            Você já tem a anatomia. Leve a Academy inteira pagando só{" "}
            <span className="text-wine-bright">{ANATOMIA.upgradePrecoLabel} a mais.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[520px] text-[1.05rem] leading-[1.6] text-fg-soft">
            O que você acabou de pagar vira crédito. Num clique, sem preencher nada de novo, você leva o
            caminho completo da agulha, da consulta e do espelho.
          </p>
        </div>

        <section className="mt-10 rounded-[8px] border-2 border-wine px-5 py-7 sm:px-8">
          <h2 className="text-center font-sans text-[1rem] font-semibold tracking-[0.08em] text-fg uppercase">
            Além da anatomia, você leva
          </h2>
          <ul className="mt-4 list-none p-0">
            {A_MAIS.map((i) => (
              <li key={i.nome} className="flex items-baseline justify-between gap-5 border-b border-dashed border-line py-3">
                <span>
                  <span className="text-[1.02rem] font-semibold text-fg">{i.nome}</span>
                  <small className="mt-0.5 block text-[0.9rem] leading-[1.45] text-fg-soft">{i.detalhe}</small>
                </span>
                {i.valor ? (
                  <span className="shrink-0 text-[0.98rem] text-fg-soft line-through decoration-wine-bright">{brl(i.valor)}</span>
                ) : (
                  <span className="shrink-0 text-[0.9rem] text-wine-ink">Incluso</span>
                )}
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-5 border-b border-dashed border-line py-3">
              <span>
                <span className="text-[1.02rem] font-semibold text-fg">
                  {ACADEMY.mesesAcesso} meses de acesso, em vez de {ANATOMIA.mesesAcesso}
                </span>
                <small className="mt-0.5 block text-[0.9rem] leading-[1.45] text-fg-soft">Pra estudar no seu ritmo.</small>
              </span>
              <span className="shrink-0 text-[0.98rem] text-fg-soft line-through decoration-wine-bright">
                {brl(Math.round(ACADEMY.precoCheio / 2))}
              </span>
            </li>
          </ul>
          <div className="flex items-baseline justify-between gap-5 pt-5">
            <span className="text-[1rem] text-fg-soft">Valor do que entra a mais</span>
            <span className="shrink-0 font-serif text-[1.5rem] text-fg line-through decoration-wine-bright">{VALOR_A_MAIS}</span>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[1rem] text-fg-soft">Agora, só a diferença</p>
            <p className="mt-1 font-serif text-[3.2rem] leading-none text-fg">{ANATOMIA.upgradePrecoLabel}</p>

            {umClique ? (
              <>
                {/* Botões ligados pelo script da Ticto (classes oficiais do Flow). */}
                <button
                  type="button"
                  className={`ticto-upsell-button ${ACEITAR}`}
                  {...(TICTO_UPSELL_ANATOMIA.fallbackOffer
                    ? { "data-fallback-offer": TICTO_UPSELL_ANATOMIA.fallbackOffer }
                    : {})}
                >
                  {TEXTO_ACEITAR}
                </button>
                <button type="button" className={`ticto-refuse-button ${RECUSAR}`}>
                  {TEXTO_RECUSAR}
                </button>
                <p className="mt-5 text-[0.85rem] text-fg-faint">
                  O botão não respondeu?{" "}
                  <a href={ANATOMIA.upgradeUrl} className="underline underline-offset-2 hover:text-wine-ink">
                    Abra o checkout do upgrade
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <a
                  href={ANATOMIA.upgradeUrl || UPGRADE_WHATSAPP_URL}
                  target={ANATOMIA.upgradeUrl ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={ACEITAR}
                >
                  {TEXTO_ACEITAR}
                </a>
                <a href={OBRIGADO} className={RECUSAR}>
                  {TEXTO_RECUSAR}
                </a>
              </>
            )}
            <p className="mt-6 text-[0.9rem] leading-[1.5] text-fg-faint">{GARANTIA_ACADEMY.linha}</p>
          </div>
        </section>
      </Container>
    </main>
  );
}
