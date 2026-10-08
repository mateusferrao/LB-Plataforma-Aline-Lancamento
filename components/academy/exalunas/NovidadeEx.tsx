import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { Secao } from "@/components/academy/Secao";
import { withBasePath } from "@/lib/basePath";
import { ANATOMIA_EXALUNAS, brl } from "@/lib/ofertaAcademy";

// "O que você perdeu desde que saiu". O Fresh Frozen é a novidade e ganha o card
// grande, com foto (pedido de 08/10); a mentoria, o certificado e a preferência
// vêm depois, menores, como o que mais entra na volta. Diferencial (08/10): as
// imagens do curso são reais e autorais, das dissecções da Aline nos EUA.
const O_QUE_VE = [
  "Imagens reais e autorais: fotos e vídeos das dissecções da Aline nos EUA",
  "Os planos de cada região da face, camada por camada",
  "Os vasos e os limites que mudam a conduta",
  "Dissecção e aplicação em peças fresh frozen, sem formol",
];

const E_MAIS = [
  {
    t: "Mentoria em grupo com a Aline, por 3 meses",
    d: "Encontros ao vivo, online, levando os seus casos. Até hoje, só os 10 primeiros da aula de 06/10 levaram essa mentoria junto com a Academy.",
  },
  {
    t: "Certificado e preferência",
    d: "O certificado do curso de anatomia e a preferência nos próximos cursos online e presenciais: você fica sabendo antes e garante a vaga primeiro.",
  },
] as const;

export function NovidadeEx() {
  return (
    <Secao>
      <Titulo eyebrow="Enquanto você esteve fora" destaque="a face por dentro.">
        A Academy ganhou
      </Titulo>

      <Reveal className="mt-9 overflow-hidden rounded-[8px] border-2 border-wine">
        <div className="relative aspect-[16/10] w-full bg-surface">
          <Image
            src={withBasePath("/images/fresh/lab-bracos-abertos.webp")}
            alt="Dra. Aline Filgueiras no laboratório de dissecção"
            fill
            sizes="(min-width: 768px) 640px, 92vw"
            className="object-cover object-[50%_20%]"
          />
          <span className="absolute top-3 left-3 rounded-[2px] bg-wine px-2.5 py-1 text-[11px] font-semibold tracking-[0.16em] text-on-wine uppercase">
            Novo na Academy
          </span>
          <span className="absolute bottom-3 left-3 rounded-[2px] bg-bg/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-fg uppercase backdrop-blur-sm">
            Imagens autorais · direto dos EUA
          </span>
        </div>
        <div className="px-5 py-6 sm:px-7">
          <h3 className="font-sans text-[1.45rem] font-semibold leading-[1.2] tracking-[-0.01em] text-fg sm:text-[1.7rem]">
            Curso online de Fresh Frozen + dissecção
          </h3>
          <p className="mt-3 text-[1.03rem] leading-[1.6] text-fg-soft">
            Fresh frozen são peças anatômicas preservadas por congelamento, sem formol, mais próximas do que você
            encontra na paciente. Você estuda o que a Aline viu com os próprios olhos no laboratório, nos Estados
            Unidos, antes de pôr a agulha.
          </p>
          <ul className="mt-5 grid list-none gap-2.5 p-0">
            {O_QUE_VE.map((p) => (
              <li key={p} className="flex items-baseline gap-2.5 text-[1rem] text-fg">
                <span className="text-wine-ink" aria-hidden="true">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-dashed border-line pt-5 text-[0.98rem] leading-[1.55] text-fg-soft">
            Um curso de fresh frozen fora do Brasil passa de US$5.000, sem contar passagem e visto. Este é online, no
            seu tempo. Vale {brl(ANATOMIA_EXALUNAS.valor ?? 0)}, e{" "}
            <strong className="font-semibold text-fg">na sua volta ele é de presente.</strong>
          </p>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-10 text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
          E mais, só na sua volta
        </p>
      </Reveal>
      <ul className="mt-3 grid list-none gap-3 p-0">
        {E_MAIS.map((n) => (
          <Reveal key={n.t} className="rounded-[6px] border border-line p-5">
            <h3 className="font-sans text-[1.08rem] font-semibold text-fg">{n.t}</h3>
            <p className="mt-1.5 text-[0.98rem] leading-[1.55] text-fg-soft">{n.d}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="mt-8 text-center text-[1.08rem] leading-[1.6] text-fg">
          Tudo isso entra na sua volta. Veja abaixo quanto vale e quanto fica pra você.
        </p>
      </Reveal>
    </Secao>
  );
}
