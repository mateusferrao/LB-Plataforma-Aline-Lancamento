type Props = {
  quote?: string;
  author?: string;
  className?: string;
};

// Depoimento de ENSINO — sobre a didática/segurança que a Aline transmite,
// NUNCA sobre esta live (que ainda não aconteceu). Rótulo honesto obrigatório.
//
// PLACEHOLDER: enquanto `quote` não for preenchido com um depoimento REAL de
// aluna da Filgueiras Academy, o card renderiza como espaço reservado.
// Não inventar depoimento.
export function Testimonial({
  quote,
  author = "Aluna · Filgueiras Academy",
  className = "",
}: Props) {
  const isPlaceholder = !quote;
  return (
    <figure
      className={`rounded-[4px] border bg-nude/60 p-6 ${
        isPlaceholder ? "border-dashed border-line" : "border-line-soft"
      } ${className}`}
    >
      <blockquote
        className={`font-serif text-[1.18rem] leading-[1.5] italic ${
          isPlaceholder ? "text-ink-faint" : "text-ink"
        }`}
      >
        {isPlaceholder ? "depoimento real de aluna aqui" : `“${quote}”`}
      </blockquote>
      <figcaption className="mt-4 text-[12px] tracking-[0.03em] text-ink-faint uppercase">
        {author}
      </figcaption>
    </figure>
  );
}
