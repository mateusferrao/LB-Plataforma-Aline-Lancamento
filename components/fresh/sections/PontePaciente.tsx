import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// Ponte com a dor nº 1 da pesquisa (captação/paciente) sem prometer agenda nem
// faturamento: a segurança de quem aplica é o que a paciente percebe.
export function PontePaciente() {
  return (
    <section className="py-16 sm:py-[80px]">
      <Container narrow>
        <Titulo eyebrow="Do outro lado da cadeira" destaque="percebe.">
          A paciente
        </Titulo>
        <Reveal>
          <p className="mt-6 max-w-[600px] text-[1.12rem] leading-[1.6] text-fg-soft">
            Quem sabe o que está embaixo da pele explica o procedimento com calma, responde
            a dúvida sem hesitar e passa segurança na consulta. É disso que a paciente
            lembra quando indica alguém.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
