type Props = {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
};

// narrow = coluna de leitura (~680px), usada em blocos de texto corrido.
// Sem narrow = largura total do wrap (~1060px), usada em grids de duas colunas.
export function Container({ children, narrow = false, className = "" }: Props) {
  return (
    <div
      className={`mx-auto px-[30px] ${narrow ? "max-w-[680px]" : "max-w-[1060px]"} ${className}`}
    >
      {children}
    </div>
  );
}
