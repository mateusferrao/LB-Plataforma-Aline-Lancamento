import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ACADEMY, MENTORIA } from "@/lib/ofertaAcademy";

export const metadata: Metadata = {
  title: "Bem-vinda à mentoria · Filgueiras Academy",
  description: "Compra confirmada: Filgueiras Academy e mentoria em grupo com a Aline.",
  robots: { index: false, follow: false },
};

// "Aceitou" do Flow da Academy (docs/plataforma/ticto-funil.md §2): comprou a
// Academy e a mentoria. Primeiro a vitória rápida (a anatomia), depois a mentoria.
const TIME_WHATSAPP_URL =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent("Oi! Entrei na Academy e na mentoria em grupo com a Aline.");

const PASSOS = [
  {
    t: "Abra o e-mail de acesso",
    d: "A plataforma envia o seu login no e-mail da compra em poucos minutos. Confira também o spam e as promoções.",
  },
  {
    t: "Comece pela anatomia",
    d: "Assista à primeira aula do curso de Fresh Frozen + dissecção ainda hoje. É por ela que tudo começa.",
  },
  {
    t: "Fale com a equipe sobre a mentoria",
    d: `A equipe te chama no WhatsApp com as datas dos encontros (${MENTORIA.encontros.toLowerCase()}, por ${MENTORIA.meses} meses). Salve o número.`,
  },
] as const;

export default function MentoriaObrigado() {
  return (
    <>
      <main className="py-16 sm:py-24">
        <Container narrow>
          <div className="text-center">
            <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
              Compra confirmada
            </span>
            <h1 className="mt-4 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem]">
              Bem-vinda à {ACADEMY.nome} e à mentoria.
            </h1>
            <p className="mx-auto mt-5 max-w-[480px] text-[1.05rem] leading-[1.6] text-fg-soft">
              Você tem {ACADEMY.mesesAcesso} meses de Academy e {MENTORIA.meses} meses de mentoria em grupo com a
              Aline. Faça os três passos abaixo hoje.
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

          <div className="mt-10 text-center">
            <a
              href={TIME_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[2px] bg-[#25D366] px-8 py-[19px] font-sans text-[1.02rem] font-semibold text-white transition-transform duration-150 ease-out hover:-translate-y-0.5"
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
