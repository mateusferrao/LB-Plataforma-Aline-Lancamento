import { AteOFim } from "@/components/academy/AteOFim";
import { PrazoInline } from "@/components/academy/Prazo";
import { EXALUNAS } from "@/lib/ofertaAcademy";

// Faixa do topo com o prazo real da condição. Some no fim (o botão segue).
export function BarraPrazoEx() {
  return (
    <AteOFim fim={EXALUNAS.endsAt}>
      <div className="border-b border-line bg-bg-2 px-4 py-2.5 text-center text-[13px] text-fg-soft">
        Condição de ex-assinante até {EXALUNAS.prazoCurto} · termina em{" "}
        <PrazoInline fim={EXALUNAS.endsAt} className="text-[14px] text-fg" />
      </div>
    </AteOFim>
  );
}
