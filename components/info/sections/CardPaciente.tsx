import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { withBasePath } from "@/lib/basePath";

// Ponte com a dor nº1 da pesquisa (a paciente, a confiança), sem prometer mais
// pacientes: os cards mostram o cuidado por escrito. Conteúdo dos cards vem só
// dos protocolos (compressa quente de 1 em 1 hora, fotos, retorno cedo; e os
// cuidados de casa da necrose).
export function CardPaciente() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          <div>
            <Titulo eyebrow="Do outro lado da cadeira" destaque="sabendo o que fazer.">
              Sua paciente vai pra casa
            </Titulo>
            <Reveal>
              <p className="mt-6 max-w-[520px] text-[1.06rem] leading-[1.6] text-fg-soft">
                <strong className="font-semibold text-fg">Card de oclusão:</strong> compressa
                quente a cada hora, fotos pra você acompanhar e retorno no dia seguinte, cedo.
              </p>
              <p className="mt-3 max-w-[520px] text-[1.06rem] leading-[1.6] text-fg-soft">
                <strong className="font-semibold text-fg">Card de necrose:</strong> os cuidados
                de casa até cicatrizar, do que não pode encostar na região ao filtro solar dos 60
                dias.
              </p>
              <p className="mt-4 max-w-[520px] text-[1.06rem] leading-[1.6] text-fg-soft">
                Vêm em PNG, no formato de tela do celular. Você escreve seu nome e WhatsApp e
                envia. Ela vê, por escrito, o cuidado que você teve com ela. É disso que a
                paciente lembra quando indica alguém.
              </p>
            </Reveal>
          </div>

          <Reveal delay={90} className="mx-auto grid w-full max-w-[440px] grid-cols-2 gap-4">
            <Image
              src={withBasePath("/images/info/card-oclusao.webp")}
              alt="Card da paciente para a oclusão: compressa quente a cada 1 hora, nunca gelo, fotos e retorno no dia seguinte"
              width={560}
              height={996}
              sizes="220px"
              className="h-auto w-full rounded-[10px] border border-line-soft"
            />
            <Image
              src={withBasePath("/images/info/card-necrose.webp")}
              alt="Card da paciente para a necrose: cuidados de casa até cicatrizar"
              width={560}
              height={996}
              sizes="220px"
              className="mt-10 h-auto w-full rounded-[10px] border border-line-soft"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
