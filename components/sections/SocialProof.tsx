import { Container } from "@/components/Container";
import { Testimonial } from "@/components/Testimonial";

export function SocialProof() {
  return (
    <section className="py-14 sm:py-[72px]">
      <Container narrow>
        <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
          Quem já viveu isso
        </span>
      </Container>
      <Container>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Testimonial
            quote="Amei as 3 aulas da consulta, super esclarecedora e de fácil entendimento para colocarmos em prática. Obrigada, Aline!"
            author="Aluna · Filgueiras Academy"
          />
          <Testimonial
            quote="Aline, esse vídeo hoje foi tão importante, nossa! Não consegui controlar as lágrimas. Eu vou vencer essa batalha da mente, eu amo as pessoas que trabalham comigo, eu escolho seguir pessoas iluminadas… vou ter mais disciplina e vai dar certo."
            author="Aluna · Filgueiras Academy"
          />
        </div>
      </Container>
    </section>
  );
}
