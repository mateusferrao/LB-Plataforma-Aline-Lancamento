"use client";

import Image from "next/image";
import { useRef } from "react";
import { withBasePath } from "@/lib/basePath";

// Fotos do Manual do Envelhecimento (bônus das 5 primeiras), do Drive da equipe em 06/10.
// No card da oferta entram só as miniaturas, pra não quebrar a soma até o preço; tocando,
// abre as 3 fotos em tela cheia (dialog nativo: Esc e o botão fecham).
const FOTOS = [
  { src: "/images/manual/manual-rostos.webp", w: 1200, h: 1013, alt: "Manual do Envelhecimento aberto na página do processo de envelhecimento da pele da face, aos 30, 45 e 60 anos" },
  { src: "/images/manual/manual-pele.webp", w: 800, h: 800, alt: "Página do Manual do Envelhecimento com as camadas da pele aos 30 e aos 60 anos" },
  { src: "/images/manual/manual-abas.webp", w: 800, h: 800, alt: "Capa do Manual do Envelhecimento com as abas Face, Gordura e Ossos" },
];

export function FotosManual() {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="mt-2.5 block cursor-pointer text-left"
        aria-label="Ver as fotos do Manual do Envelhecimento"
      >
        <span className="flex gap-1.5">
          {FOTOS.map((f) => (
            <Image
              key={f.src}
              src={withBasePath(f.src)}
              alt=""
              width={f.w}
              height={f.h}
              sizes="52px"
              className="size-[52px] shrink-0 rounded-[4px] object-cover"
            />
          ))}
        </span>
        <span className="mt-1 block text-[0.82rem] text-wine-ink underline underline-offset-2">Ver as fotos</span>
      </button>

      <dialog
        ref={ref}
        onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
        className="m-auto max-h-[92vh] w-[min(640px,94vw)] overflow-y-auto rounded-[8px] bg-bg p-3 text-fg backdrop:bg-black/80"
      >
        <div className="flex items-center justify-between gap-3 px-1 pb-3">
          <p className="text-[0.95rem] font-semibold">Manual do Envelhecimento</p>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="cursor-pointer rounded-[4px] px-2 py-1 text-[0.95rem] text-fg-soft"
            aria-label="Fechar"
          >
            Fechar ✕
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {FOTOS.map((f) => (
            <Image
              key={f.src}
              src={withBasePath(f.src)}
              alt={f.alt}
              width={f.w}
              height={f.h}
              sizes="(min-width: 700px) 640px, 94vw"
              className="h-auto w-full rounded-[6px]"
            />
          ))}
        </div>
      </dialog>
    </>
  );
}
