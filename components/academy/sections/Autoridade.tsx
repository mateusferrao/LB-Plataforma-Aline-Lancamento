import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Reveal } from "@/components/Reveal";
import { Secao } from "@/components/academy/Secao";
import { withBasePath } from "@/lib/basePath";

const STATS = [
  { target: 1000, suffix: "+", formatThousands: true, l: "alunas formadas" },
  { target: 12, suffix: "+", l: "anos de clínica" },
  { target: 30, suffix: "+", l: "certificações" },
  { target: 40, suffix: " mil+", l: "na comunidade" },
];

// Números primeiro, depois quem conduz em um parágrafo e a frase do criativo 08.
// Sem citar o curso presencial nos EUA como próxima oferta (decisão de 04/10).
export function Autoridade() {
  return (
    <Secao>
      <Reveal className="grid grid-cols-2 gap-x-6 gap-y-7 rounded-[6px] border border-line p-7">
        {STATS.map((s) => (
          <div key={s.l}>
            <AnimatedNumber
              target={s.target}
              suffix={s.suffix}
              formatThousands={s.formatThousands}
              className="block font-sans text-[2rem] font-semibold leading-none tracking-[-0.02em] text-fg sm:text-[2.4rem]"
            />
            <div className="mt-1.5 text-[0.92rem] text-fg-soft">{s.l}</div>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-12 grid grid-cols-[88px_1fr] items-center gap-5 sm:grid-cols-[110px_1fr]">
        <div className="relative aspect-square w-full overflow-hidden rounded-full border border-line-soft bg-surface">
          <Image
            src={withBasePath("/images/fresh/lab-braco-erguido.webp")}
            alt="Dra. Aline Filgueiras no laboratório de dissecção nos EUA"
            fill
            sizes="110px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">Quem conduz</span>
          <h2 className="mt-1.5 font-sans font-semibold text-[1.6rem] tracking-[-0.015em] text-fg sm:text-[1.9rem]">
            Dra. Aline Filgueiras
          </h2>
        </div>
      </Reveal>
      <Reveal>
        <p className="mt-5 text-[1.08rem] leading-[1.6] text-fg-soft">
          Professora internacional de anatomia em fresh frozen. Antes de ensinar, passou pelas duas
          inseguranças: aplicava sem enxergar o que tem embaixo da pele e ouvia muito &ldquo;vou
          pensar&rdquo; na consulta. Estudou dissecção nos Estados Unidos e em Portugal, organizou a
          consulta em passos claros e hoje ensina as duas coisas.
        </p>
        <blockquote className="mt-6 border-l-2 border-wine-ink pl-4 font-serif text-[1.15rem] leading-[1.5] text-fg italic">
          &ldquo;O que tira o medo de aplicar é método.&rdquo;
        </blockquote>
      </Reveal>
    </Secao>
  );
}
