import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MetaPixel } from "@/components/MetaPixel";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { TictoEcho } from "@/components/TictoEcho";
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
  title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras · 24/09",
  description:
    "Aula ao vivo de anatomia da dissecção aplicada à harmonização facial, com a Dra. Aline Filgueiras. 24 de setembro, 20h. Vagas limitadas, sem gravação.",
  metadataBase: new URL("https://alinefilgueiras.com.br"),
  openGraph: {
    title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras",
    description:
      "24 de setembro, 20h, ao vivo. A anatomia que só a dissecção revela, aplicada à sua conduta clínica.",
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
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        {/* Fallback sem JS: nunca esconder conteúdo se o reveal não puder rodar */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <MetaPixel />
        <GoogleAnalytics />
        <TictoEcho />
        {children}
        <ConsentNotice />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
