import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { Secao } from "@/components/academy/Secao";

// O mecanismo em uma tela: os três momentos em que a paciente decide confiar.
export function Virada() {
  return (
    <Secao>
      <Titulo eyebrow="O que muda o jogo" destaque="três vezes.">
        A paciente decide se confia em você
      </Titulo>
      <Reveal>
        <p className="mt-5 text-[1.1rem] leading-[1.6] text-fg-soft">
          Na consulta, na agulha e no espelho. Ela não vê o seu certificado. Ela sente se você sabe o
          que está fazendo.
        </p>
        <p className="mt-4 text-[1.1rem] leading-[1.6] text-fg-soft">
          Segurança vem de saber o que tem embaixo da pele e de ter um roteiro pra consulta. Foi isso
          que a Dra. Aline organizou na Filgueiras Academy, a partir do que estudou dissecando a face
          em fresh frozen.
        </p>
        <p className="mt-8 font-sans text-[1.35rem] font-semibold tracking-[-0.01em] text-fg uppercase sm:text-[1.6rem]">
          Consulta. Agulha. <span className="text-wine-bright">Espelho.</span>
        </p>
      </Reveal>
    </Secao>
  );
}
