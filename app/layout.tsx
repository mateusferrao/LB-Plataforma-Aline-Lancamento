import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { MetaPixel } from "@/components/MetaPixel";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { TictoEcho } from "@/components/TictoEcho";
import { ConsentNotice } from "@/components/ConsentNotice";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
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
      </body>
    </html>
  );
}
