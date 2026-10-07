import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ACADEMY, ANATOMIA } from "@/lib/ofertaAcademy";

export const metadata: Metadata = {
  title: "Bem-vinda ao curso de anatomia · Filgueiras Academy",
  description: "Compra confirmada. Veja os seus primeiros passos no curso de Fresh Frozen + dissecção.",
  robots: { index: false, follow: false },
};

// Redirecionamento pós-compra do downsell (docs/plataforma/ticto.md §11). Primeiro
// a vitória rápida (a primeira aula, o que reduz reembolso). Depois o upgrade pela
// diferença (rollover do Hormozi): o que ela pagou vira crédito na Academy. Sem o
// link da oferta oculta, o upgrade vai pelo WhatsApp da equipe.
const WHATS = "https://wa.me/5531953491799?text=";
const TIME_WHATSAPP_URL =
  WHATS + encodeURIComponent("Oi! Acabei de entrar no curso de anatomia e fiquei com uma dúvida.");
const UPGRADE_WHATSAPP_URL =
  WHATS +
  encodeURIComponent(
    `Oi! Comprei o curso de anatomia e quero trocar pela Filgueiras Academy pagando a diferença (${ANATOMIA.upgradePrecoLabel}).`,
  );

const PASSOS = [
  {
    t: "Abra o e-mail de acesso",
    d: "A plataforma envia o seu login no e-mail da compra em poucos minutos. Confira também o spam e as promoções.",
  },
  {
    t: "Assista à primeira aula hoje",
    d: "Comece pela primeira aula do curso de Fresh Frozen + dissecção. É por ela que tudo começa.",
  },
  {
    t: "Salve o número da equipe",
    d: "Qualquer dúvida sobre o acesso, é por ele que a gente responde.",
  },
] as const;

const A_MAIS = [
  "Mais de 70 aulas de toxina, preenchimento e bioestimuladores",
  "A Consulta que Vende e as ferramentas prontas",
  "6 encontros ao vivo no ano e uma aula de casos com a Aline",
  `${ACADEMY.mesesAcesso} meses de acesso, em vez de ${ANATOMIA.mesesAcesso}`,
] as const;

export default function AnatomiaObrigado() {
  const upgradeHref = ANATOMIA.upgradeUrl || UPGRADE_WHATSAPP_URL;
  return (
    <>
      <main className="py-16 sm:py-24">
        <Container narrow>
          <div className="text-center">
            <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
              Compra confirmada
            </span>
            <h1 className="mt-4 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem]">
              Bem-vinda ao curso de anatomia.
            </h1>
            <p className="mx-auto mt-5 max-w-[480px] text-[1.05rem] leading-[1.6] text-fg-soft">
              Você tem {ANATOMIA.mesesAcesso} meses pra ver a face por dentro, no seu ritmo. Faça os três
              passos abaixo hoje.
            </p>
          </div>

          <ol className="mt-10 list-none border-t border-line p-0">
            {PASSOS.map((p, i) => (
              <li key={p.t} className="grid grid-cols-[36px_1fr] gap-3 border-b border-line py-5">
                <span className="font-serif text-[1.5rem] leading-none text-wine-ink">{i + 1}</span>
                <div>
                  <h2 className="font-sans text-[1.1rem] font-semibold text-fg">{p.t}</h2>
                  <p className="mt-1 text-[1rem] leading-[1.55] text-fg-soft">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <section className="mt-12 rounded-[8px] border-2 border-wine px-5 py-7 sm:px-8">
            <span className="text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
              Quando quiser o caminho completo
            </span>
            <h2 className="mt-2 font-sans text-[1.4rem] font-semibold leading-[1.25] tracking-[-0.01em] text-fg">
              Troque pela {ACADEMY.nome} pagando só a diferença: {ANATOMIA.upgradePrecoLabel}.
            </h2>
            <p className="mt-3 text-[1rem] leading-[1.55] text-fg-soft">
              O que você pagou hoje vira crédito. Vale por {ANATOMIA.upgradeDias} dias a partir da compra.
              Além da anatomia, você leva:
            </p>
            <ul className="mt-3 list-none p-0">
              {A_MAIS.map((x) => (
                <li key={x} className="flex gap-2.5 py-1 text-[1rem] leading-[1.5] text-fg">
                  <span className="text-wine-ink" aria-hidden="true">✓</span>
                  {x}
                </li>
              ))}
            </ul>
            <a
              href={upgradeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-[2px] bg-wine px-8 py-[17px] font-sans text-[1rem] font-semibold text-on-wine transition-transform duration-150 ease-out hover:-translate-y-0.5 sm:w-auto"
            >
              Quero trocar pela Academy
            </a>
          </section>

          <div className="mt-10 text-center">
            <a
              href={TIME_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[0.98rem] text-fg-soft underline underline-offset-2 hover:text-wine-ink"
            >
              <WhatsAppIcon />
              Falar com a equipe
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
