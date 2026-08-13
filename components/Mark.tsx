// Destaque de trechos de título: marsala + itálico. Herda a serifa (Cormorant)
// do título, então fica um itálico editorial e elegante, sem ar de marca-texto.
export function Mark({ children }: { children: React.ReactNode }) {
  return <em className="text-wine-ink italic">{children}</em>;
}
