import type { Metadata } from "next";
import { AcademyPage } from "@/components/academy/AcademyPage";

// /academy/sala — condição de quem esteve na aula de 06/10 (R$1.797 + bônus dos
// 10 primeiros só até 06/10 23h59, a noite da aula). Link só na sala e no grupo: fora do
// Google e dos anúncios.
export const metadata: Metadata = {
  title: "Filgueiras Academy · Condição da aula Por Dentro da Face",
  description:
    "Você não fez tanto curso pra continuar com medo de aplicar. Condição de quem esteve na aula de 06/10: +3 meses de acesso pra todo mundo e bônus pros 10 primeiros, só até 23h59.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Filgueiras Academy · Condição da aula de 06/10",
    description: "Só até 06/10, 23h59: R$1.797, +3 meses de acesso e os bônus dos 10 primeiros.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AcademySala() {
  return <AcademyPage modo="sala" />;
}
