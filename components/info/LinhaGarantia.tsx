import { SoComBonus } from "@/components/info/SoComBonus";

// Linha fina abaixo dos CTAs da /info (par do components/lp2/UrgenciaFina).
// Sem valor em R$: o preço só aparece no ingresso emitido. Com a aula de
// presente, avisa antes do clique que o próximo passo é emitir o ingresso
// dela (a emissão nunca é surpresa). Depois da aula, fica só a garantia.
export function LinhaGarantia({ className = "" }: { className?: string }) {
  return (
    <SoComBonus senao={<p className={className}>Protocolo na hora no WhatsApp · reembolso em 7 dias</p>}>
      <p className={className}>
        No próximo passo, você emite o ingresso da aula de presente e vê o valor.
        <br />
        Protocolo na hora no WhatsApp · reembolso em 7 dias
      </p>
    </SoComBonus>
  );
}
