import type { Metadata } from "next";
import { Cormorant_Garamond, Roboto } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Por Dentro da Face — Aula ao vivo com Dra. Aline Filgueiras · 24/09",
  description:
    "Aula ao vivo de anatomia da dissecção aplicada à harmonização facial, com a Dra. Aline Filgueiras. 24 de setembro, 20h. Vagas limitadas, sem gravação.",
  metadataBase: new URL("https://alinefilgueiras.com.br"),
  openGraph: {
    title: "Por Dentro da Face — Aula ao vivo com Dra. Aline Filgueiras",
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
      className={`${cormorant.variable} ${roboto.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
