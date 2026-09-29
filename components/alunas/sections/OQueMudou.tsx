import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { withBasePath } from "@/lib/basePath";

// Ela conhece a Aline de antes. Esta seção mostra a Aline de agora: a temporada
// de dissecção em fresh frozen e os cursos internacionais (autoridade nova).
export function OQueMudou() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-[54px] md:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-[4px] border border-line-soft bg-surface">
            <Image
              src={withBasePath("/images/fresh/lab-braco-erguido.webp")}
              alt="Dra. Aline Filgueiras no laboratório de dissecção nos EUA"
              fill
              sizes="(min-width: 768px) 360px, 80vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            <Titulo eyebrow="Desde o seu curso" destaque="a Aline foi mais fundo.">
              Enquanto você aplicava,
            </Titulo>
            <Reveal>
              <p className="mt-6 max-w-[600px] text-[1.1rem] leading-[1.6] text-fg-soft">
                Depois da sua turma, a Aline passou uma temporada dissecando a face em cadáver
                fresh frozen nos Estados Unidos, o material mais próximo do rosto vivo que existe
                pra estudar anatomia. Hoje ela dá cursos internacionais de fresh frozen nos EUA e
                na Europa.
              </p>
              <p className="mt-4 max-w-[600px] text-[1.1rem] leading-[1.6] text-fg-soft">
                No dia 6, ela traz pra você, ao vivo, o que viu lá: as camadas, os vasos e os
                limites que mudam a segurança de quem aplica.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
