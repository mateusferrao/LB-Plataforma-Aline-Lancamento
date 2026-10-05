"use client";

import { gaEvent, trackCustom } from "@/lib/analytics";

// Link de checkout fora do CtaButton (downsell da anatomia): mesmo rastreamento
// (ClickCheckout no Meta, click_checkout no GA4) e data-checkout pro ticto-echo
// repassar as UTMs.
export function CheckoutLink({
  href,
  produto,
  contentName,
  valor,
  className = "",
  children,
}: {
  href: string;
  produto: string;
  contentName: string;
  valor: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      data-checkout
      className={className}
      onClick={() => {
        trackCustom("ClickCheckout", { content_name: contentName, value: valor, currency: "BRL" });
        gaEvent("click_checkout", { value: valor, currency: "BRL", produto });
      }}
    >
      {children}
    </a>
  );
}
