import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ACADEMY, SALA } from "@/lib/ofertaAcademy";

export const metadata: Metadata = {
  title: "Bem-vinda à Filgueiras Academy",
  description: "Compra confirmada. Veja os seus primeiros passos na Filgueiras Academy.",
  robots: { index: false, follow: false },
};

// Redirecionamento pós-compra das duas ofertas da Academy na Ticto
// (docs/plataforma/ticto.md). Sem urgência aqui: quem chega já comprou. O
// objetivo é a primeira vitória rápida (a primeira aula de anatomia), o que
// reduz pedido de reembolso, e avisar os 10 primeiros sobre os bônus.
const TIME_WHATSAPP_URL =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent("Oi! Acabei de entrar na Filgueiras Academy e fiquei com uma dúvida.");

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
    t: "Salve o número da equipe",
    d: "É por ele que avisamos os encontros ao vivo e a aula de discussão de casos com a Aline.",
  },
] as const;

export default function AcademyObrigado() {
  return (
    <>
      <main className="py-16 sm:py-24">
        <Container narrow>
          <div className="text-center">
            <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
              Compra confirmada
            </span>
            <h1 className="mt-4 text-balance font-sans font-semibold text-[1.9rem] leading-[1.15] tracking-[-0.015em] text-fg sm:text-[2.4rem]">
              Bem-vinda à {ACADEMY.nome}.
            </h1>
            <p className="mx-auto mt-5 max-w-[480px] text-[1.05rem] leading-[1.6] text-fg-soft">
              Você tem {ACADEMY.mesesAcesso} meses pra estudar no seu ritmo. Faça os três passos abaixo
              hoje.
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

          <p className="mt-8 rounded-[6px] border border-line px-5 py-4 text-[0.98rem] leading-[1.55] text-fg-soft">
            <strong className="font-semibold text-fg">Comprou na noite da aula?</strong> Se você está entre
            os {SALA.primeirosN} primeiros, a equipe te chama no WhatsApp pra combinar o certificado, a
            prancheta, a toxina e a mentoria em grupo com a Aline.
          </p>

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
