import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

// Prints REAIS de alunas (enviados pela Aline). Usamos a imagem do print, mais
// crível que texto redigitado. `alt` guarda o teor pra acessibilidade/SEO.
// Ordem pensada pra intercalar prova técnica/clínica com transformação.
const PROOFS = [
  {
    src: "/images/depoimento-1.jpg",
    alt: "Aluna: fiz cursos presenciais e nunca tinha feito uma boca tão linda. Assinei a plataforma e a boca da paciente ficou perfeita.",
  },
  {
    src: "/images/depoimento-2.jpg",
    alt: "Aluna: amei as 3 aulas da consulta, super esclarecedora e de fácil entendimento para colocar em prática.",
  },
  {
    src: "/images/depoimento-9.jpg",
    alt: "Aluna iniciante: estou adorando as aulas, bem explicativas e objetivas. Quero renovar o meu acesso à plataforma.",
  },
  {
    src: "/images/depoimento-7.jpg",
    alt: "Aluna: que virada de chave essas aulas, amei demais, amanhã mesmo vou colocar em prática.",
  },
  {
    src: "/images/depoimento-6.jpg",
    alt: "Aluna: depois que eu mudei o posicionamento, até elogios eu recebo muito mais.",
  },
  {
    src: "/images/depoimento-3.jpg",
    alt: "Aluna: o melhor curso que já investi, você entregou muito além.",
  },
  {
    src: "/images/depoimento-8.jpg",
    alt: "Aluna: você conseguiu explicar de uma forma tão simples, agora passou a fazer mais sentido.",
  },
  {
    src: "/images/depoimento-5.jpg",
    alt: "Aluna: mal começou e eu já estou apaixonada por essa plataforma, sou muito grata.",
  },
  {
    src: "/images/depoimento-4.jpg",
    alt: "Aluna: essa aula foi tão importante, não consegui controlar as lágrimas.",
  },
];

export function SocialProof() {
  // Duplicado pra faixa correr em loop contínuo sem emenda (translateX -50%).
  const loop = [...PROOFS, ...PROOFS];

  return (
    <section className="overflow-hidden bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Quem já estuda com a Aline
          </span>
          <h2 className="mt-[18px] font-serif font-medium text-[1.95rem] text-fg sm:text-[2.6rem]">
            O que elas dizem depois de sentar nessa sala.
          </h2>
        </Reveal>
      </Container>

      <Container>
        <div className="marquee mt-10">
          <div className="marquee-track">
            {loop.map((p, i) => (
            <div
              key={i}
              aria-hidden={i >= PROOFS.length}
              className="mr-4 flex h-[210px] w-[300px] shrink-0 items-center justify-center rounded-[8px] border border-line-soft bg-bg-3 p-3 sm:h-[250px] sm:w-[360px]"
            >
                <Image
                  src={withBasePath(p.src)}
                  alt={i < PROOFS.length ? p.alt : ""}
                  width={460}
                  height={620}
                  className="max-h-full w-auto max-w-full rounded-[5px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
