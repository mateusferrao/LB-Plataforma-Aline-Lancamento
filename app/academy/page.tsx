import type { Metadata } from "next";
import { AcademyPage } from "@/components/academy/AcademyPage";

// /academy — evergreen da Filgueiras Academy (R$1.797, sem bônus). Destino dos
// anúncios de aquisição em teste A/B contra a oferta de entrada.
export const metadata: Metadata = {
  title: "Filgueiras Academy · Consulta, Agulha e Espelho · Dra. Aline Filgueiras",
  description:
    "Você não estudou tanto pra continuar insegura na agulha e com a agenda parada. O novo curso online de Fresh Frozen e dissecção, mais de 70 aulas práticas e a Consulta que Vende, com 6 encontros ao vivo no ano.",
  openGraph: {
    title: "Filgueiras Academy · Consulta, Agulha e Espelho",
    description:
      "Novo: curso online de Fresh Frozen + dissecção, incluído. Mais de 70 aulas práticas, a Consulta que Vende e 6 encontros ao vivo no ano.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Academy() {
  return <AcademyPage modo="evergreen" />;
}
