import { Container } from "@/components/Container";
import { Testimonial } from "@/components/Testimonial";

export function SocialProof() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
          Quem já viveu isso
        </span>
        <h2 className="mt-[18px] font-serif font-medium text-[1.95rem] sm:text-[2.6rem]">
          O que já dizem sobre estudar com ela.
        </h2>

        <div className="mt-9">
          <Testimonial
            quote="Amei as 3 aulas da consulta, super esclarecedora e de fácil entendimento para colocarmos em prática. Obrigada, Aline!"
            author="Aluna · Filgueiras Academy"
          />
        </div>
      </Container>
    </section>
  );
}
