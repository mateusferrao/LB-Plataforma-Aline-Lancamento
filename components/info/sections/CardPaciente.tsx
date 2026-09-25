import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

// Ponte com a dor nº1 da pesquisa (paciente, confiança, "passar segurança à
// paciente"), sem prometer mais pacientes: o card mostra o cuidado por escrito.
export function CardPaciente() {
  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <Reveal>
            <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
              Incluso no kit · card da paciente
            </span>
            <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.4rem]">
              <span className="titulo-grifo">
                Sua paciente sai sabendo o que é normal e quando te chamar.
              </span>
            </h2>
            <p className="mt-6 max-w-[520px] text-[1.06rem] leading-[1.6] text-fg-soft">
              O card de cuidados vem em PNG, no formato de tela do celular. Você escreve seu
              nome e WhatsApp, envia logo depois do procedimento e ela salva a imagem.
            </p>
            <p className="mt-4 max-w-[520px] text-[1.06rem] leading-[1.6] text-fg-soft">
              Você fica sabendo cedo de qualquer alteração, que é quando ainda dá pra agir. E
              ela vê, por escrito, o cuidado que você teve com ela.
            </p>
          </Reveal>

          <Reveal delay={90} className="mx-auto w-full max-w-[320px]">
            <Image
              src={withBasePath("/images/info/card-paciente.webp")}
              alt="Card de cuidados para a paciente: o que é normal depois do procedimento e quando chamar a profissional imediatamente"
              width={560}
              height={996}
              sizes="320px"
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
