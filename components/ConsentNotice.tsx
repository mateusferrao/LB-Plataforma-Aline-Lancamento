"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "lp_consent_dismissed";

// Aviso discreto de cookies/pixel (LGPD, consentimento implícito ao continuar).
// Some após dispensar (localStorage). No mobile, fica acima do CTA fixo.
export function ConsentNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {
      /* noop */
    }
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-[126px] z-50 sm:bottom-0">
      <div className="mx-auto max-w-[1060px] px-4 pb-3">
        <div className="flex flex-col gap-3 rounded-[6px] border border-line bg-paper/95 px-4 py-3 shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-[1.5] text-ink-soft">
            Usamos cookies e o pixel da Meta pra medir e melhorar a divulgação. Ao
            continuar, você concorda.{" "}
            <Link
              href="/politica-de-privacidade"
              className="underline underline-offset-2 hover:text-accent-deep"
            >
              Política de Privacidade
            </Link>
            .
          </p>
          <button
            onClick={dismiss}
            className="shrink-0 rounded-[2px] bg-ink px-5 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-accent-deep"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
