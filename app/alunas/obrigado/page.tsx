import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { ObrigadoSaudacao } from "@/components/ObrigadoSaudacao";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { googleCalendarUrl } from "@/lib/calendarLink";

export const metadata: Metadata = {
  title: "Compra confirmada · Ex-alunas · Aline Filgueiras",
  description: "Seu ingresso e o seu Protocolo de Resgate Vascular estão garantidos.",
  robots: { index: false, follow: false },
};

// Redirecionamento pós-compra da oferta "Aula + Protocolo (ex-alunas)" na Ticto.
// O grupo é o mesmo da aula (app/obrigado).
const GRUPO_WHATSAPP_URL = "https://chat.whatsapp.com/KmL36ic5sFGFYVCJL6vm7g?s=cl&p=i&mlu=4";
const TIME_WHATSAPP_URL =
  "https://wa.me/5531936184139?text=" +
  encodeURIComponent("Oi! Sou ex-aluna, comprei a aula com o Protocolo de presente e fiquei com uma dúvida.");

export default function ObrigadoAlunas() {
  return (
    <>
      <main className="py-16 sm:py-24">
        <Container narrow className="text-center">
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Compra confirmada
          </span>

          <ObrigadoSaudacao />

          <p className="mx-auto mt-5 max-w-[480px] text-[1.05rem] leading-[1.6] text-fg-soft">
            O seu Protocolo de Resgate Vascular chega no seu WhatsApp em instantes. Pra aula, entre
            no grupo do WhatsApp: o link da sala é enviado por lá.
          </p>

          <a
            href={GRUPO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-[2px] bg-[#25D366] px-8 py-[19px] font-sans text-[1.02rem] font-semibold text-white transition-transform duration-150 ease-out hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Entrar no grupo do WhatsApp
          </a>

          <a
            href={googleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-[13.5px] tracking-[0.02em] text-fg-faint underline underline-offset-2 hover:text-wine-ink"
          >
            Adicionar ao calendário
          </a>

          <p className="mt-11 text-[1rem] text-fg-soft">
            Guarde a data: <span className="text-fg">6 de outubro, 20h, ao vivo.</span>
          </p>

          <p className="mt-6 text-[13.5px] text-fg-faint">
            Não recebeu o Protocolo ou ficou com dúvida?{" "}
            <a
              href={TIME_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-wine-ink"
            >
              Fala com nosso time.
            </a>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
