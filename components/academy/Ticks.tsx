// Linha de selos curtos embaixo dos botões (padrão da página de referência).
export function Ticks({ itens, className = "" }: { itens: readonly string[]; className?: string }) {
  return (
    <ul className={`flex list-none flex-wrap gap-x-5 gap-y-1.5 p-0 text-[13.5px] text-fg-soft ${className}`}>
      {itens.map((t) => (
        <li key={t} className="flex items-center gap-1.5">
          <span className="text-wine-ink" aria-hidden="true">✓</span>
          {t}
        </li>
      ))}
    </ul>
  );
}
