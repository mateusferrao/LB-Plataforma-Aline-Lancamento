"use client";

import { TICTO_CHECKOUT_URL } from "@/lib/checkout";
import { track } from "@/lib/analytics";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "accent";
  className?: string;
};

export function CtaButton({ children, variant = "dark", className = "" }: Props) {
  const base =
    "inline-flex items-center gap-3 rounded-[2px] px-8 py-[19px] font-sans text-[1.02rem] font-semibold transition-transform duration-150 ease-out hover:-translate-y-0.5";
  const palette =
    variant === "dark"
      ? "bg-ink text-paper hover:bg-accent-deep"
      : "bg-on-accent text-accent-deep hover:bg-white";

  return (
    <a
      href={TICTO_CHECKOUT_URL}
      className={`${base} ${palette} ${className}`}
      onClick={() => track("InitiateCheckout", { value: 67, currency: "BRL" })}
      data-checkout
    >
      {children}
    </a>
  );
}
