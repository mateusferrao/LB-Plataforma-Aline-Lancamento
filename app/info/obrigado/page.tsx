import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { SoComBonus } from "@/components/info/SoComBonus";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { googleCalendarUrl } from "@/lib/calendarLink";

export const metadata: Metadata = {
  title: "Compra confirmada · Mapa das Intercorrências",
  description: "Seu Mapa das Intercorrências está garantido.",
};

// Configurar esta URL (/info/obrigado) como redirecionamento pós-compra na
// oferta "Kit + aula" da Ticto. O grupo é o mesmo da aula (app/obrigado): só
// aparece enquanto a aula de bônus faz parte da oferta.
const GRUPO_WHATSAPP_URL = "https://chat.whatsapp.com/KmL36ic5sFGFYVCJL6vm7g?s=cl&p=i&mlu=4";

const TIME_WHATSAPP_URL =
  "https://wa.me/5531953491799?text=" +
  encodeURIComponent("Oi! Comprei o Mapa das Intercorrências e fiquei com uma dúvida.");

export default function ObrigadoInfo() {
  return (
    <>
      <main className="py-16 sm:py-24">
        <Container narrow className="text-center">
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Compra confirmada
          </span>

          <h1 className="mt-4 font-serif text-[2.1rem] leading-[1.15] text-fg sm:text-[2.6rem]">
            Seu Mapa das Intercorrências está garantido.
          </h1>

          <p className="mx-auto mt-5 max-w-[480px] text-[1.05rem] leading-[1.6] text-fg-soft">
            O acesso ao kit chega no seu WhatsApp em instantes. Imprima as pranchas 01 e 03 e
            deixe à vista no consultório, e coloque seu contato no card da paciente antes do
            próximo atendimento.
          </p>

          <SoComBonus>
            <div className="mt-11 rounded-[6px] border border-line bg-bg-2 px-6 py-8">
              <span className="text-[12px] font-semibold tracking-[0.2em] text-wine-ink uppercase">
                Seu presente
              </span>
              <p className="mx-auto mt-3 max-w-[460px] text-[1.05rem] leading-[1.6] text-fg-soft">
                A aula ao vivo <em className="font-serif text-fg">Por Dentro da Face</em> é no
                dia <span className="text-fg">6 de outubro, às 20h</span>. Entre no grupo do
                WhatsApp: o link da sala é enviado por lá. Ela não tem gravação.
              </p>

              <a
                href={GRUPO_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-[2px] bg-[#25D366] px-8 py-[19px] font-sans text-[1.02rem] font-semibold text-white transition-transform duration-150 ease-out hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Entrar no grupo da aula
              </a>

              <a
                href={googleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-[13.5px] tracking-[0.02em] text-fg-faint underline underline-offset-2 hover:text-wine-ink"
              >
                Adicionar a aula ao calendário
              </a>
            </div>
          </SoComBonus>

          <p className="mt-10 text-[13.5px] text-fg-faint">
            Não recebeu o kit no WhatsApp ou ficou com dúvida?{" "}
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
