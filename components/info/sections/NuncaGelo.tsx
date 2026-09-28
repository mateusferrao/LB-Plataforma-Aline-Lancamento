import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// O gancho contraintuitivo do próprio protocolo (Protocolo Intercorrências,
// passo 2): "NUNCA USAR GELO! Precisamos de vasodilatação a todo momento".
// Entrega uma regra útil de graça, gera confiança e mostra o tipo de detalhe
// que o protocolo inteiro tem. Nada além do que está no documento da Aline.
export function NuncaGelo() {
  return (
    <section className="py-16 sm:py-[80px]">
      <Container>
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-[6px] border border-line md:grid-cols-[1fr_1fr]">
          <div className="bg-wine px-8 py-10 text-on-wine sm:px-12 sm:py-14">
            <span className="text-[12px] font-semibold tracking-[0.24em] uppercase opacity-80">
              Passo 2 do protocolo
            </span>
            <h2 className="mt-4 text-balance font-sans font-semibold text-[1.75rem] leading-[1.15] tracking-[-0.015em] sm:text-[2.25rem]">
              O primeiro impulso é pegar gelo. É o que a Aline proíbe.
            </h2>
          </div>
          <div className="bg-bg-2 px-8 py-10 sm:px-12 sm:py-14">
            <p className="text-[1.08rem] leading-[1.6] text-fg-soft">
              Na oclusão, precisamos de <strong className="font-semibold text-fg">vasodilatação a todo momento</strong>.
              Por isso, o segundo passo é massagem vigorosa com gaze morna ou fonte de calor.
              Às vezes, a oclusão é por uma compressão lateral e a massagem resolve na hora.
            </p>
            <p className="mt-4 text-[1.08rem] leading-[1.6] text-fg-soft">
              É esse tipo de detalhe, na ordem certa, que o protocolo coloca na sua mão. Do
              primeiro gesto até o filtro solar dos 60 dias.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
