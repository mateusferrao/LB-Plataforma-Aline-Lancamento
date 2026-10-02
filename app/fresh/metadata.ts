import type { Metadata } from "next";

// Metadata compartilhada pelas duas variantes da /fresh (com e sem VSL).
// Alinhada ao H1 e ao criativo que mais vende (decisões de 02/10): fresh frozen
// na frente, desaguando em segurança e na paciente.
export const freshMetadata: Metadata = {
  title: "Por Dentro da Face · Aula ao vivo de anatomia em fresh frozen · Dra. Aline Filgueiras · 06/10",
  description:
    "A face por dentro, em cadáver fresh frozen, numa noite e sem viajar. Aula ao vivo com a Dra. Aline Filgueiras pra você parar de aplicar no escuro e a paciente sentir a sua segurança. 6 de outubro, 20h. R$67.",
  openGraph: {
    title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras",
    description:
      "A face por dentro, em cadáver fresh frozen, numa noite e sem viajar. Aula ao vivo, 6 de outubro, 20h. R$67, com Garantia de Presença.",
    locale: "pt_BR",
    type: "website",
  },
};
