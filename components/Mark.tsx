// Destaque de trechos de título: texto normal + sublinhado no marsala do botão
// (--wine / #7e1e1c). Traço um pouco mais grosso e afastado para não sumir no
// fundo escuro — substitui o antigo destaque em vermelho-claro itálico.
export function Mark({ children }: { children: React.ReactNode }) {
  return (
    <em className="text-fg not-italic underline decoration-wine decoration-2 underline-offset-[6px]">
      {children}
    </em>
  );
}
