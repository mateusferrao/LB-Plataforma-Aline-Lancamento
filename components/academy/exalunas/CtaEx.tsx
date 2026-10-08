import { CheckoutLink } from "@/components/academy/CheckoutLink";
import { EXALUNAS } from "@/lib/ofertaAcademy";

// Botão da /academy/exalunas: direto ao checkout da oferta das ex-assinantes
// (público quente, sem "ver oferta" antes). Não trava depois do prazo.
export function CtaEx({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <CheckoutLink
      href={EXALUNAS.checkoutUrl}
      produto="academy-exalunas"
      contentName={EXALUNAS.contentName}
      valor={EXALUNAS.preco}
      className={`inline-flex items-center justify-center gap-3 rounded-[2px] bg-wine px-8 py-[19px] font-sans text-[1.02rem] font-semibold text-on-wine transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-wine-hover ${className}`}
    >
      {children}
    </CheckoutLink>
  );
}
