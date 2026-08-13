// Selo qualitativo de escassez — SEM número (decisão de produto: "poucas vagas").
// Reforça a copy real de "sala ao vivo com lugar limitado de verdade" sem inventar
// uma quantidade que o site estático não teria como sustentar.
//
// - pill (padrão): selo com fundo suave, pra destacar dentro do card de oferta.
// - plain: só ponto + texto, sem fundo — mais leve e editorial na barra de rolagem.
type Tone = "light" | "onAccent";

export function VagasBadge({
  className = "",
  children = "Poucas vagas para a sala ao vivo",
  tone = "light",
  plain = false,
}: {
  className?: string;
  children?: React.ReactNode;
  tone?: Tone;
  plain?: boolean;
}) {
  const base = plain
    ? "inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[11px] font-semibold tracking-[0.12em] uppercase"
    : "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[2px] px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase";

  const cor = tone === "onAccent" ? "text-on-wine" : "text-wine-ink";
  const cls = plain
    ? cor
    : `${cor} ${tone === "onAccent" ? "bg-on-wine/15" : "bg-wine-ink/15"}`;

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
