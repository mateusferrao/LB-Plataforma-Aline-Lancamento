import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/lp2/CtaButton";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/fresh/Titulo";
import { ANCORA_CURSO, ANCORA_ROTULO } from "@/components/fresh/ancora";
import { withBasePath } from "@/lib/basePath";

// Âncora de valor: um curso internacional em cadáver fresh frozen, como
// referência genérica de mercado (sem atribuir o valor ao curso da Aline).
// Sem o valor da aula na página (igual à /lp2): o R$67 só aparece no ingresso
// emitido, no comparativo com o preço riscado (components/fresh/AncoraIngresso).
// O aviso de que não substitui o hands-on fica na FAQ ("Substitui um curso presencial?").
export function Ancora() {
  return (
    <>
      <hr className="border-line" />
      <section className="py-16 sm:py-[92px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-9 sm:gap-[54px] md:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-[4px] border border-line-soft bg-surface">
              <Image
                src={withBasePath("/images/fresh/lab-bracos-abertos.webp")}
                alt="Dra. Aline Filgueiras no laboratório de dissecção"
                fill
                sizes="(min-width: 768px) 360px, 80vw"
                className="object-cover"
              />
            </Reveal>

            <div>
              <Titulo eyebrow="Quanto vale" destaque="sem sair do Brasil.">
                O que a Aline ensina lá fora, numa noite,
              </Titulo>

              <Reveal>
                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line">
                  <div className="bg-bg-3 px-5 py-5">
                    <div className="text-[11.5px] tracking-[0.12em] text-fg-faint uppercase">
                      {ANCORA_ROTULO}
                    </div>
                    <div className="mt-1.5 font-serif text-[1.7rem] leading-tight text-fg-soft">
                      {ANCORA_CURSO}
                    </div>
                  </div>
                  <div className="bg-bg px-5 py-5">
                    <div className="text-[11.5px] tracking-[0.12em] text-wine-ink uppercase">
                      Esta aula ao vivo
                    </div>
                    <div className="mt-1.5 font-serif text-[1.7rem] leading-tight text-fg">
                      Uma fração disso
                    </div>
                    <div className="mt-1 text-[0.85rem] text-fg-faint">
                      Emita seu ingresso pra ver o valor
                    </div>
                  </div>
                </div>

                <p className="mt-7 max-w-[600px] text-[1.1rem] leading-[1.6] text-fg-soft">
                  É quanto um curso internacional presencial chega a custar. A Aline estudou
                  em cadáver fresh frozen nos EUA e hoje dá cursos internacionais. No dia 6, ela traz pra sua tela, nas imagens das dissecções
                  dela, o que muda a segurança de quem aplica. Sem passagem, sem visto e sem
                  pagar em dólar ou euro.
                </p>

                <CtaButton className="mt-8 w-full justify-center sm:w-auto sm:justify-start">
                  Emitir meu ingresso
                </CtaButton>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
