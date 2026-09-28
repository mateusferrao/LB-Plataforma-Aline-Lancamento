import { SoComBonus } from "@/components/info/SoComBonus";

// Linha fina abaixo dos CTAs da /info (par do components/lp2/UrgenciaFina).
// Sem valor em R$: o preço só aparece no ingresso emitido. O bônus some sozinho
// depois da aula.
export function LinhaGarantia({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      Protocolo na hora no WhatsApp ·{" "}
      <SoComBonus>aula de presente até 06/10 · </SoComBonus>
      reembolso em 7 dias
    </p>
  );
}
