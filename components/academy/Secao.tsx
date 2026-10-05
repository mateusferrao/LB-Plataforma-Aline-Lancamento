import { Container } from "@/components/Container";

// Seção de coluna única, com fio entre as seções em vez de troca de fundo.
export function Secao({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`border-t border-line py-16 sm:py-20 ${className}`}>
      <Container narrow>{children}</Container>
    </section>
  );
}
