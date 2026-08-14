// Destaque de trechos de título: palavra colorida no marsala do botão
// (--wine / #7e1e1c), a mesma cor que o sublinhado usava.
export function Mark({ children }: { children: React.ReactNode }) {
  return <em className="text-wine not-italic">{children}</em>;
}
