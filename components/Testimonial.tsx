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
      className={`flex h-full flex-col rounded-[4px] border bg-card p-8 sm:p-10 ${
        isPlaceholder ? "border-dashed border-line" : "border-line-soft"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="block font-serif text-[3.4rem] leading-[0.5] text-accent"
      >
        “
      </span>
      <blockquote
        className={`mt-3 font-serif text-[1.28rem] leading-[1.5] italic ${
          isPlaceholder ? "text-ink-faint" : "text-ink"
        }`}
      >
        {isPlaceholder ? "depoimento real de aluna aqui" : quote}
      </blockquote>
      <figcaption className="mt-auto pt-6 text-[12px] tracking-[0.03em] text-ink-faint uppercase">
        {author}
      </figcaption>
    </figure>
  );
}
