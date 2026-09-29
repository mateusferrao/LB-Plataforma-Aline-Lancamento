import { CtaButton } from "@/components/alunas/CtaButton";

// Barra fixa só no celular: data + CTA com preço. Sem cronômetro de sessão.
export function StickyCta() {
  return (
    <div
      data-fixed-bottom-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 py-2.5 backdrop-blur-sm sm:hidden"
    >
      <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase">
        <span className="text-wine-ink">Protocolo de presente</span>
        <span className="text-fg-soft">06/10 · 20h · ao vivo</span>
      </div>
      <CtaButton showPrice className="w-full justify-center">
        Garantir meu ingresso
      </CtaButton>
    </div>
  );
}
