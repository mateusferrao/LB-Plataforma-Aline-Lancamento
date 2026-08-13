"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

// Prints REAIS de alunas (enviados pela Aline). Usamos a imagem do print, mais
// crível que texto redigitado. `alt` guarda o teor pra acessibilidade/SEO.
// Ordenados pra sustentar a promessa da aula: resultado clínico e clareza primeiro.
const PROOFS = [
  {
    src: "/images/depoimento-1.jpg",
    alt: "Aluna: fiz cursos presenciais e nunca tinha feito uma boca tão linda. Assinei a plataforma e a boca da paciente ficou perfeita.",
  },
  {
    src: "/images/depoimento-2.jpg",
    alt: "Aluna: amei as 3 aulas da consulta, super esclarecedora e de fácil entendimento para colocar em prática.",
  },
  {
    src: "/images/depoimento-3.jpg",
    alt: "Aluna: o melhor curso que já investi, você entregou muito além.",
  },
  {
    src: "/images/depoimento-4.jpg",
    alt: "Aluna: essa aula foi tão importante, não consegui controlar as lágrimas.",
  },
];

const AUTOPLAY_MS = 5000;

export function SocialProof() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = PROOFS.length;

  const go = (i: number) => setIndex(((i % n) + n) % n);

  useEffect(() => {
    if (paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, n]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <section className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Quem já estuda com a Aline
          </span>
          <h2 className="mt-[18px] font-serif font-medium text-[1.95rem] text-fg sm:text-[2.6rem]">
            O que elas dizem depois de sentar nessa sala.
          </h2>
        </Reveal>
      </Container>

      <Container narrow>
        <Reveal className="mt-9">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Janela do carrossel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {PROOFS.map((p) => (
                  <div key={p.src} className="w-full shrink-0 px-1">
                    <div className="mx-auto flex h-[360px] max-w-[460px] items-center justify-center rounded-[8px] border border-line-soft bg-bg-3 p-3 sm:h-[430px]">
                      <Image
                        src={withBasePath(p.src)}
                        alt={p.alt}
                        width={440}
                        height={620}
                        className="max-h-full w-auto rounded-[5px] object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Setas */}
            <button
              onClick={() => go(index - 1)}
              aria-label="Depoimento anterior"
              className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full border border-line bg-bg/70 px-3 py-2 text-fg backdrop-blur-sm transition-colors hover:border-wine-ink hover:text-wine-ink sm:-left-3"
            >
              ‹
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label="Próximo depoimento"
              className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border border-line bg-bg/70 px-3 py-2 text-fg backdrop-blur-sm transition-colors hover:border-wine-ink hover:text-wine-ink sm:-right-3"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2.5">
            {PROOFS.map((p, i) => (
              <button
                key={p.src}
                onClick={() => go(i)}
                aria-label={`Ir para o depoimento ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-wine" : "w-2 bg-fg-faint/40 hover:bg-fg-faint"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
