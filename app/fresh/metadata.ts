import type { Metadata } from "next";

// Metadata compartilhada pelas duas variantes da /fresh (com e sem VSL).
export const freshMetadata: Metadata = {
  title: "Por Dentro da Face · Aplique sem medo de intercorrência · Dra. Aline Filgueiras · 06/10",
  description:
    "A segurança de um curso internacional em cadáver fresh frozen, numa aula ao vivo de R$67 com a Dra. Aline Filgueiras. 6 de outubro, 20h.",
  openGraph: {
    title: "Por Dentro da Face · Aula ao vivo com Dra. Aline Filgueiras",
    description:
      "A segurança de um curso internacional em cadáver fresh frozen, pra você aplicar sem medo de intercorrência. 6 de outubro, 20h, ao vivo.",
    locale: "pt_BR",
    type: "website",
  },
};
