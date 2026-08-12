import { CtaButton } from "@/components/CtaButton";
import { ReservaTimer } from "@/components/ReservaTimer";
import { VagasBadge } from "@/components/VagasBadge";

// CTA fixo, só no mobile. Acesso persistente ao checkout sem barra de navegação.
// Acima do botão, uma linha discreta de urgência (vaga reservada + poucas vagas)
// pra manter a pressão de escassez enquanto o visitante rola a página.
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-2.5 backdrop-blur-sm sm:hidden">
      <div className="mb-2 flex items-center justify-between gap-2">
        <VagasBadge className="scale-[0.92]" />
        <ReservaTimer />
      </div>
      <CtaButton className="w-full justify-center">
        Quero minha vaga <span className="font-serif text-[1.16rem]">· R$77</span>
      </CtaButton>
    </div>
  );
}
