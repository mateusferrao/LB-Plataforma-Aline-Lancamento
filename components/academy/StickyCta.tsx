import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { SALA } from "@/lib/ofertaAcademy";

// Barra fixa só no celular. Sem cronômetro de sessão.
export function StickyCta({ modo }: { modo: Modo }) {
  return (
    <div
      data-fixed-bottom-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
    >
      <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase">
        <span className="text-wine-ink">{modo === "sala" ? "Condição da sala" : "Filgueiras Academy"}</span>
        <span className="text-fg-soft">{modo === "sala" ? `Até ${SALA.prazoCurto}` : "12x ou Pix"}</span>
      </div>
      <CtaButton modo={modo} showPrice className="w-full justify-center">
        Quero entrar
      </CtaButton>
    </div>
  );
}
