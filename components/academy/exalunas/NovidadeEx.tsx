import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { Secao } from "@/components/academy/Secao";
import { withBasePath } from "@/lib/basePath";
import { EXALUNAS } from "@/lib/ofertaAcademy";

// "O que você perdeu desde que saiu": o motivo de voltar agora, em três blocos.
const NOVIDADES = [
  {
    tag: "Novo na Academy",
    t: "Curso online de Fresh Frozen + dissecção",
    d: "Peças anatômicas preservadas por congelamento, sem formol, mais próximas do que você encontra na paciente. Você vê os planos, os vasos e os limites de cada região antes de pôr a agulha.",
  },
  {
    tag: "Novo pra você",
    t: "Mentoria em grupo com a Aline, por 3 meses",
    d: "Encontros ao vivo, online, com a Aline, levando os seus casos. Até hoje, só os 10 primeiros da aula de 06/10 levaram essa mentoria junto com a Academy.",
  },
  {
    tag: "Só na sua volta",
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

      <Reveal className="relative mt-9 aspect-[16/10] w-full overflow-hidden rounded-[6px] border border-line-soft bg-surface">
        <Image
          src={withBasePath("/images/fresh/lab-bracos-abertos.webp")}
          alt="Dra. Aline Filgueiras no laboratório de dissecção"
          fill
          sizes="(min-width: 768px) 640px, 92vw"
          className="object-cover object-[50%_20%]"
        />
      </Reveal>

      <ol className="mt-9 grid list-none gap-4 p-0">
        {NOVIDADES.map((n, i) => (
          <Reveal key={n.t} className="grid grid-cols-[40px_1fr] gap-4 rounded-[6px] border border-line p-5">
            <span className="font-serif text-[1.6rem] leading-none text-wine-bright">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <span className="text-[10.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">{n.tag}</span>
              <h3 className="mt-1 font-sans text-[1.12rem] font-semibold text-fg">{n.t}</h3>
              <p className="mt-1.5 text-[0.98rem] leading-[1.55] text-fg-soft">{n.d}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <p className="mt-8 text-center text-[1.08rem] leading-[1.6] text-fg">
          Tudo isso entra na sua volta, por <strong className="font-semibold">{EXALUNAS.precoLabel}</strong>.
        </p>
      </Reveal>
    </Secao>
  );
}
