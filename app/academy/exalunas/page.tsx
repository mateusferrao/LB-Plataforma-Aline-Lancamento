import type { Metadata } from "next";
import { ExAlunasPage } from "@/components/academy/exalunas/ExAlunasPage";

// /academy/exalunas — volta das ex-assinantes da Academy (R$797 + módulo de anatomia
// de brinde até sexta, 09/10, 23h59). Link só no disparo: fora do Google e dos anúncios.
export const metadata: Metadata = {
  title: "Filgueiras Academy · Volta das ex-assinantes",
  description:
    "Pra quem já foi assinante da Filgueiras Academy: volte por R$797 e leve de presente o novo módulo de anatomia em fresh frozen e a mentoria em grupo com a Aline.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Filgueiras Academy · Volta das ex-assinantes",
    description: "R$797 + o novo módulo de anatomia de presente, só até sexta, 09/10, 23h59.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AcademyExAlunas() {
  return <ExAlunasPage />;
}
