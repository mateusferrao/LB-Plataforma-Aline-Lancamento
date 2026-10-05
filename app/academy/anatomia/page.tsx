import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Ticks } from "@/components/academy/Ticks";
import { ACADEMY, ANATOMIA, GARANTIA_ACADEMY } from "@/lib/ofertaAcademy";

export const metadata: Metadata = {
  title: "Curso de Fresh Frozen + dissecção · Dra. Aline Filgueiras",
  description: "O curso online de anatomia em fresh frozen, separado da Filgueiras Academy.",
  robots: { index: false, follow: false },
};

// Downsell de quem não quis a Academy (docs/plataforma/ticto-funil.md §3). Página
// fechada: sem link na LP, fora do Google. Chega por três caminhos: o aviso de
// retorno na /academy, o WhatsApp da recuperação e o remarketing. Hormozi: o
// downsell tira coisas (só a anatomia, 6 meses), não baixa o preço da Academy.
const WHATS_URL =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent("Oi! Quero o curso de anatomia separado (Fresh Frozen + dissecção).");

const RECEBE = [
  ["Curso online de Fresh Frozen + dissecção", "A face por dentro, camada por camada. Sem visto e sem passagem.", "R$1.297"],
  [`${ANATOMIA.mesesAcesso} meses de acesso`, "No celular ou no computador, no seu ritmo.", ""],
] as const;

export default function AnatomiaDownsell() {
  const href = ANATOMIA.checkoutUrl || WHATS_URL;
  return (
    <>
      <main className="py-14 sm:py-20">
        <Container narrow>
          <span className="inline-flex rounded-[3px] border border-wine-ink/60 px-3 py-1.5 text-[11.5px] font-semibold tracking-[0.14em] text-wine-ink uppercase">
            Uma porta menor pra começar
          </span>
          <h1 className="mt-5 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem]">
            Se a Academy inteira não cabe agora,{" "}
            <span className="titulo-grifo">comece pela parte que muda a sua mão.</span>
          </h1>
          <p className="mt-5 text-[1.08rem] leading-[1.6] text-fg-soft">
            A paciente sente quando a mão hesita perto do nariz, da glabela, do sulco. O que faz a mão parar
            de hesitar é saber o que tem embaixo da pele. É isso que a Dra. Aline reúne neste curso online.
          </p>

          <section className="mt-10 rounded-[8px] border-2 border-wine px-5 py-7 sm:px-8">
            <ul className="list-none p-0">
              {RECEBE.map(([t, d, v]) => (
                <li key={t} className="flex items-baseline justify-between gap-5 border-b border-dashed border-line py-3">
                  <span>
                    <span className="text-[1.03rem] font-semibold text-fg">{t}</span>
                    <small className="mt-0.5 block text-[0.9rem] leading-[1.45] text-fg-soft">{d}</small>
                  </span>
                  {v ? (
                    <span className="shrink-0 text-[0.98rem] text-fg-soft line-through decoration-wine-bright">{v}</span>
                  ) : (
                    <span className="shrink-0 text-[0.9rem] text-wine-ink">Incluso</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <p className="text-[1rem] text-fg-soft">Hoje</p>
              <p className="mt-1 font-serif text-[3.2rem] leading-none text-fg">{ANATOMIA.precoLabel}</p>
              <p className="mt-2 text-[0.95rem] text-fg-soft">
                à vista no Pix · ou 12x de {ANATOMIA.parcela12x} no cartão
              </p>
              <a
                href={href}
                data-checkout={ANATOMIA.checkoutUrl ? "" : undefined}
                target={ANATOMIA.checkoutUrl ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-[2px] bg-wine px-8 py-[18px] font-sans text-[1.02rem] font-semibold text-on-wine transition-transform duration-150 ease-out hover:-translate-y-0.5"
              >
                Quero o curso de anatomia
              </a>
              <Ticks
                className="mt-4 justify-center"
                itens={["Acesso imediato", "Pix ou cartão", `Garantia de ${GARANTIA_ACADEMY.prazoCondicionalDias} dias`]}
              />
            </div>
          </section>

          <p className="mt-8 rounded-[6px] border border-line px-5 py-4 text-[0.98rem] leading-[1.55] text-fg-soft">
            <strong className="font-semibold text-fg">E se depois quiser a Academy completa?</strong> Em até{" "}
            {ANATOMIA.upgradeDias} dias da compra, você troca pagando só a diferença ({ANATOMIA.upgradePrecoLabel}) e
            leva a plataforma inteira, os encontros ao vivo e {ACADEMY.mesesAcesso} meses de acesso.
          </p>
          <p className="mt-6 text-center text-[0.9rem] leading-[1.5] text-fg-faint">{GARANTIA_ACADEMY.linha}</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
