// Linha fina abaixo dos CTAs. Sem valor em R$: o preço só aparece no ingresso
// emitido (components/IngressoModal.tsx). Mantém sempre reembolso + sem gravação.
export function UrgenciaFina({ className = "" }: { className?: string }) {
  return (
    <p className={className}>Vagas limitadas · reembolso em 7 dias · sem gravação</p>
  );
}
