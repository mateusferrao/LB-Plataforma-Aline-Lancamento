import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MetaPixel } from "@/components/MetaPixel";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { TictoEcho } from "@/components/TictoEcho";
import { UtmifyPixel } from "@/components/UtmifyPixel";
import { ConsentNotice } from "@/components/ConsentNotice";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

// Fontes auto-hospedadas (next/font/local) para o build não depender de baixar
// do Google em CI. Arquivos variáveis (latin) em app/fonts/.
const fraunces = localFont({
  variable: "--font-fraunces",
  display: "swap",
  src: [
    {
      path: "./fonts/fraunces-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "./fonts/fraunces-latin-italic.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    {
      path: "./fonts/inter-latin.woff2",
      weight: "400 600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras · 06/10",
  description:
    "Quem entende onde o produto se acomoda usa menos seringa, entrega mais resultado e não precisa corrigir depois. Aula ao vivo com a Dra. Aline Filgueiras, direto da mesa de dissecção. 6 de outubro, 20h.",
  metadataBase: new URL("https://alinefilgueiras.com.br"),
  openGraph: {
    title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras",
    description:
      "Quem entende onde o produto se acomoda usa menos seringa, entrega mais resultado e não precisa corrigir depois. 6 de outubro, 20h, ao vivo.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        {/* Aquece a conexão com o Vimeo antes do Hero montar o iframe da
            VSL, pra não perder tempo com DNS/TLS quando o vídeo começa. */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        {/* Fallback sem JS: nunca esconder conteúdo se o reveal não puder rodar */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <MetaPixel />
        <GoogleAnalytics />
        <TictoEcho />
        <UtmifyPixel />
        {children}
        <ConsentNotice />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
