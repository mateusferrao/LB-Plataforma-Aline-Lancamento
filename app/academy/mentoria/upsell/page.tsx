import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MENTORIA, TICTO_UPSELL_ACADEMY, brl } from "@/lib/ofertaAcademy";

export const metadata: Metadata = {
  title: "Antes de começar · Mentoria em grupo com a Aline",
  description: "Mentoria em grupo com a Dra. Aline Filgueiras, por 3 meses.",
  robots: { index: false, follow: false },
};

// Upsell do Flow da Academy, só na oferta Evergreen (docs/plataforma/ticto-funil.md
// §2). Aparece logo depois da compra da Academy. Sem downsell depois (decisão de
// 05/10): o "não" leva ao obrigado da Academy. Os botões ganham o 1 clique quando o
// script do Flow da Academy for colado em TICTO_UPSELL_ACADEMY.
const OBRIGADO_ACADEMY = "/academy/obrigado";
const WHATS_URL =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent("Oi! Acabei de entrar na Academy e quero a mentoria em grupo com a Aline.");

const RECEBE = [
  [`${MENTORIA.meses} meses de mentoria em grupo com a Aline`, `${MENTORIA.encontros}, online.`],
  ["Os seus casos na mesa", "Você leva as dúvidas do consultório e a Aline responde junto com o grupo."],
  ["A mesma mentoria dos 10 primeiros da aula", "Na noite da aula, ela foi bônus só pra quem entrou primeiro."],
] as const;

const TEXTO_ACEITAR = `Sim, quero a mentoria por ${MENTORIA.precoLabel}`;
const TEXTO_RECUSAR = "Não, quero seguir só com a Academy";
const ACEITAR =
  "mt-7 inline-flex w-full cursor-pointer items-center justify-center rounded-[2px] bg-wine px-8 py-[18px] font-sans text-[1.02rem] font-semibold text-on-wine transition-transform duration-150 ease-out hover:-translate-y-0.5";
const RECUSAR =
  "mt-4 block w-full cursor-pointer bg-transparent text-center text-[0.95rem] text-fg-soft underline underline-offset-2 hover:text-wine-ink";

export default function MentoriaUpsell() {
  const umClique = Boolean(TICTO_UPSELL_ACADEMY.scriptSrc);
  return (
    <main className="py-14 sm:py-20">
      <Container narrow>
        {umClique && <script async src={TICTO_UPSELL_ACADEMY.scriptSrc} />}

        <div className="text-center">
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Sua compra foi confirmada · espera um minuto
          </span>
          <h1 className="mt-4 text-balance font-sans font-semibold text-[1.85rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.3rem]">
            Você entrou na Academy. Quer a Aline{" "}
            <span className="text-wine-bright">olhando os seus casos de perto?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[520px] text-[1.05rem] leading-[1.6] text-fg-soft">
            A Academy te dá o caminho. A mentoria te dá a Aline do seu lado enquanto você aplica, em grupo,
            por {MENTORIA.meses} meses.
          </p>
        </div>

        <section className="mt-10 rounded-[8px] border-2 border-wine px-5 py-7 sm:px-8">
          <ul className="list-none p-0">
            {RECEBE.map(([t, d]) => (
              <li key={t} className="border-b border-dashed border-line py-3">
                <span className="text-[1.03rem] font-semibold text-fg">{t}</span>
                <small className="mt-0.5 block text-[0.9rem] leading-[1.45] text-fg-soft">{d}</small>
              </li>
            ))}
          </ul>
          <div className="flex items-baseline justify-between gap-5 pt-5">
            <span className="text-[1rem] text-fg-soft">Valor da mentoria</span>
            <span className="shrink-0 font-serif text-[1.5rem] text-fg line-through decoration-wine-bright">
              {brl(MENTORIA.valor)}
            </span>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[1rem] text-fg-soft">Pra quem acabou de entrar na Academy</p>
            <p className="mt-1 font-serif text-[3.2rem] leading-none text-fg">{MENTORIA.precoLabel}</p>
            <p className="mt-2 text-[0.95rem] text-fg-soft">ou 12x de {MENTORIA.parcela12x} no cartão</p>

            {umClique ? (
              <>
                <button
                  type="button"
                  className={`ticto-upsell-button ${ACEITAR}`}
                  {...(TICTO_UPSELL_ACADEMY.fallbackOffer
                    ? { "data-fallback-offer": TICTO_UPSELL_ACADEMY.fallbackOffer }
                    : {})}
                >
                  {TEXTO_ACEITAR}
                </button>
                <button type="button" className={`ticto-refuse-button ${RECUSAR}`}>
                  {TEXTO_RECUSAR}
                </button>
                {MENTORIA.checkoutUrl && (
                  <p className="mt-5 text-[0.85rem] text-fg-faint">
                    O botão não respondeu?{" "}
                    <a href={MENTORIA.checkoutUrl} className="underline underline-offset-2 hover:text-wine-ink">
                      Abra o checkout da mentoria
                    </a>
                    .
                  </p>
                )}
              </>
            ) : (
              <>
                <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className={ACEITAR}>
                  {TEXTO_ACEITAR}
                </a>
                <a href={OBRIGADO_ACADEMY} className={RECUSAR}>
                  {TEXTO_RECUSAR}
                </a>
              </>
            )}
            <p className="mt-6 text-[0.9rem] leading-[1.5] text-fg-faint">Garantia de 7 dias: se não fizer sentido, você pede o dinheiro de volta.</p>
          </div>
        </section>
      </Container>
    </main>
  );
}
