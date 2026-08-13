// Destaque de trechos de título: sublinhado duplo tom (barra grossa no marsala
// do botão + fio fino no marsala claro). O estilo vive em .mark-underline
// (globals.css) para lidar com quebra de linha e escala responsiva.
export function Mark({ children }: { children: React.ReactNode }) {
  return <em className="mark-underline text-fg not-italic">{children}</em>;
}
