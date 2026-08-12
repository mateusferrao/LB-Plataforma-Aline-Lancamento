// Selo qualitativo de escassez — SEM número (decisão de produto: "poucas vagas").
// Reforça a copy real de "sala ao vivo com lugar limitado de verdade" sem inventar
// uma quantidade que o site estático não teria como sustentar.
type Tone = "light" | "onAccent";

export function VagasBadge({
  className = "",
  children = "Poucas vagas para a sala ao vivo",
  tone = "light",
}: {
  className?: string;
  children?: React.ReactNode;
  tone?: Tone;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase";
  const cls =
    tone === "onAccent"
      ? "bg-on-accent/15 text-on-accent"
      : "bg-accent/10 text-accent-deep";
  return (
    <span className={`${base} ${cls} ${className}`}>
      <span
        className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-70"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
