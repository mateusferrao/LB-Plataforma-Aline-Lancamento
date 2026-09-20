import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { ObrigadoSaudacao } from "@/components/ObrigadoSaudacao";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { googleCalendarUrl } from "@/lib/calendarLink";

export const metadata: Metadata = {
  title: "Compra confirmada · Aline Filgueiras",
  description: "Sua vaga na aula Por Dentro da Face está garantida.",
};

// Configurar esta URL como redirecionamento pós-compra na oferta do Ticto.
// Sem urgência/garantia aqui: quem chega nesta página já comprou.
const GRUPO_WHATSAPP_URL = "https://chat.whatsapp.com/KmL36ic5sFGFYVCJL6vm7g?s=cl&p=i&mlu=4";

// Número do time (mesmo do botão flutuante), com mensagem de contexto pós-compra.
const TIME_WHATSAPP_URL =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent("Oi! Comprei a aula Por Dentro da Face e fiquei com uma dúvida.");

export default function Obrigado() {
  return (
    <>
      <main className="py-16 sm:py-24">
        <Container narrow className="text-center">
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Compra confirmada
          </span>

          <ObrigadoSaudacao />

          <p className="mx-auto mt-5 max-w-[480px] text-[1.05rem] leading-[1.6] text-fg-soft">
            Você recebe a confirmação por e-mail em instantes. Agora é só entrar no grupo do
            WhatsApp pra não perder nenhum aviso antes da aula, o link será enviado por lá. 
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
            Ficou com dúvida?{" "}
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
