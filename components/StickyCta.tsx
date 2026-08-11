import { CtaButton } from "@/components/CtaButton";

// CTA fixo, só no mobile. Acesso persistente ao checkout sem barra de navegação
// (o único elemento clicável continua sendo o CTA). Label suave — não incisivo.
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur-sm sm:hidden">
      <CtaButton className="w-full justify-center">
        Quero minha vaga <span className="font-serif text-[1.16rem]">· R$67</span>
      </CtaButton>
    </div>
  );
}
