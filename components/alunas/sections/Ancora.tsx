import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { ANCORA_CURSO, ANCORA_ROTULO, ANCORA_SERINGA } from "@/components/fresh/ancora";
import { OFERTA_ALUNAS } from "@/lib/ofertaAlunas";

// Âncora de valor (mesma fonte da /fresh, referência genérica de mercado).
export function Ancora() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Quanto vale" destaque="sem sair do Brasil.">
          O que a Aline ensina lá fora, numa noite,
        </Titulo>
        <Reveal>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line">
            <div className="bg-bg-3 px-5 py-5">
              <div className="text-[11.5px] tracking-[0.12em] text-fg-faint uppercase">{ANCORA_ROTULO}</div>
              <div className="mt-1.5 font-serif text-[1.6rem] leading-tight text-fg-soft">{ANCORA_CURSO}</div>
            </div>
            <div className="bg-bg px-5 py-5">
              <div className="text-[11.5px] tracking-[0.12em] text-wine-ink uppercase">Sua aula ao vivo + o Protocolo</div>
              <div className="mt-1.5 font-serif text-[1.6rem] leading-tight text-fg">{OFERTA_ALUNAS.priceLabel}</div>
            </div>
          </div>
          <p className="mt-6 max-w-[600px] text-[1.1rem] leading-[1.6] text-fg-soft">
            É quanto um curso internacional presencial chega a custar. No dia 6, a Aline traz pra
            sua tela, nas imagens das dissecções dela, o que muda a segurança de quem aplica. Sem
            passagem, sem visto e sem pagar em dólar ou euro.
          </p>
          <p className="mt-5 font-serif text-[1.16rem] leading-[1.45] text-wine-ink italic">
            {ANCORA_SERINGA}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
