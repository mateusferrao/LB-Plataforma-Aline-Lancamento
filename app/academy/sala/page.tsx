import type { Metadata } from "next";
import { AcademyPage } from "@/components/academy/AcademyPage";

// /academy/sala — condição de quem esteve na aula de 06/10 (R$1.497 com cupom
// até 08/10 23h59 + bônus em níveis). Link só na sala e no grupo: fora do
// Google e dos anúncios.
export const metadata: Metadata = {
  title: "Filgueiras Academy · Condição da aula Por Dentro da Face",
  description:
    "Você não fez tanto curso pra continuar com medo de aplicar e com a agenda vazia. Condição de quem esteve na aula de 06/10, até 08/10 às 23h59.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Filgueiras Academy · Condição da aula de 06/10",
    description: "Até 08/10, 23h59: R$1.497, a gravação da aula e 18 meses de acesso.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AcademySala() {
  return <AcademyPage modo="sala" />;
}
