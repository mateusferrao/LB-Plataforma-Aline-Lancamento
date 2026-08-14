// Destaque de trechos de título: palavra colorida num marsala um pouco mais
// claro que o botão (#902826), meio-termo para ganhar leitura sobre o fundo.
export function Mark({ children }: { children: React.ReactNode }) {
  return <em className="text-[#902826] not-italic">{children}</em>;
}
