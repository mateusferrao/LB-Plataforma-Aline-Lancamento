import { AteOFim } from "@/components/academy/AteOFim";
import { CtaEx } from "@/components/academy/exalunas/CtaEx";
import { EXALUNAS } from "@/lib/ofertaAcademy";

// Barra fixa só no celular: preço e prazo sempre à vista (público quente, sem
// "ver oferta" antes). Depois do prazo, fica só o preço.
export function StickyCtaEx() {
  return (
    <div
      data-fixed-bottom-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
    >
      <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase">
        <span className="text-wine-ink">Volta das ex-assinantes</span>
        <span className="text-fg-soft">
          <AteOFim fim={EXALUNAS.endsAt} depois={`${EXALUNAS.precoLabel} ou 12x`}>
            {`${EXALUNAS.precoLabel} até ${EXALUNAS.prazoDia}`}
          </AteOFim>
        </span>
      </div>
      <CtaEx className="w-full">Quero voltar com o presente</CtaEx>
    </div>
  );
}
