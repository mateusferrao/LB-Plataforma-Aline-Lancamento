import Image from "next/image";
import { Container } from "@/components/Container";
import { withBasePath } from "@/lib/basePath";

const STATS = [
  { n: "11+", l: "anos de clínica" },
  { n: "1.000+", l: "alunas formadas" },
  { n: "30+", l: "certificações" },
  { n: "40 mil+", l: "na comunidade" },
];

export function Authority() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 rounded-[4px] border border-line-soft bg-nude p-7 sm:gap-11 sm:p-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[3px] border border-line-soft bg-nude-3">
            <Image
              src={withBasePath("/images/authority-aline.jpg")}
              alt="Dra. Aline Filgueiras"
              fill
              sizes="(min-width: 768px) 320px, 70vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3.5 rounded-[2px] bg-nude/95 px-[9px] py-[2px] font-serif text-[12px] italic text-accent-deep">
              Retrato · Aline Filgueiras
            </span>
          </div>

          <div>
            <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
              Quem conduz
            </span>
            <h2 className="mt-3.5 mb-4 font-serif text-[2.1rem]">Dra. Aline Filgueiras</h2>
            <p className="max-w-[520px] text-ink-soft">
              Biomédica, especialista em harmonização facial e estética avançada. Onze anos
              resolvendo os casos mais complexos, com certificação internacional em
              anatomia. Fundadora da Filgueiras Academy e da pós-graduação em Estética
              Avançada e Integrativa, com selo MEC. Atende em Belo Horizonte e Praia Grande.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-line bg-line">
              {STATS.map((s) => (
                <div key={s.l} className="bg-nude px-[18px] py-[19px]">
                  <div className="font-serif text-[1.75rem] text-ink">{s.n}</div>
                  <div className="text-[12px] tracking-[0.03em] text-ink-faint">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
