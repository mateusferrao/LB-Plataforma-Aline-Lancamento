"use client";

import Player from "@vimeo/player";
import { useEffect, useRef, useState } from "react";
import { gaEvent, trackCustom } from "@/lib/analytics";
import { markVslCompleted, setVslRemaining } from "@/lib/useVslGate";

// Iframe com src já pronto (em vez de deixar o SDK criar o iframe via
// options+url) — isso evita um round-trip extra ao oEmbed do Vimeo antes de
// começar a carregar o vídeo, que é o que fazia o player demorar a aparecer.
// O navegador já começa a baixar o iframe assim que o HTML é parseado.
const VIMEO_SRC =
  "https://player.vimeo.com/video/1225929589?h=5dcbd0a4f6&autoplay=1&muted=1&playsinline=1&background=0&controls=0&title=0&byline=0&portrait=0&dnt=1";

// Se o player do Vimeo falhar (bloqueador de anúncio, instabilidade) ou o
// evento `ended` nunca chegar por algum motivo, libera o CTA de qualquer
// forma depois desse tempo. Sem essa salvaguarda, uma falha de terceiro
// travaria o botão de compra do Hero indefinidamente.
const SAFETY_TIMEOUT_MS = 3 * 60 * 1000;

export function VslPlayer({ className = "" }: { className?: string }) {
  // O container é um <div> persistente; o <iframe> em si é criado à mão
  // dentro do efeito (em vez de JSX fixo) porque o destroy() do SDK do
  // Vimeo REMOVE o elemento iframe do DOM ao desmontar. Se o iframe fosse
  // o próprio nó referenciado, um remount (StrictMode no dev, ou qualquer
  // remontagem em produção) apagaria o vídeo pra sempre, já que o efeito
  // seguinte reusaria a mesma ref já destacada do DOM. Recriando o iframe
  // a cada execução do efeito, o container sempre volta a ter vídeo.
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const fired = useRef({
    play: false,
    unmuted: false,
    p25: false,
    p50: false,
    p75: false,
    complete: false,
  });
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const el = document.createElement("iframe");
    el.src = VIMEO_SRC;
    el.title = "Vídeo: Dra. Aline Filgueiras";
    el.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    el.allowFullscreen = true;
    el.className = "absolute inset-0 h-full w-full border-0";
    container.appendChild(el);

    const player = new Player(el);
    playerRef.current = player;

    function unlock(reason: "complete" | "load_error" | "player_error" | "timeout") {
      if (fired.current.complete) return;
      fired.current.complete = true;
      window.clearTimeout(safety);
      if (reason === "complete") {
        trackCustom("VslComplete", {});
        gaEvent("vsl_complete", {});
      } else {
        trackCustom("VslSafetyUnlock", { reason });
        gaEvent("vsl_safety_unlock", { reason });
      }
      trackCustom("VslCtaUnlocked", {});
      gaEvent("vsl_cta_unlocked", {});
      markVslCompleted();
    }

    const safety = window.setTimeout(() => unlock("timeout"), SAFETY_TIMEOUT_MS);

    player.ready().catch(() => unlock("load_error"));

    player.on("play", () => {
      if (fired.current.play) return;
      fired.current.play = true;
      trackCustom("VslPlay", {});
      gaEvent("vsl_play", {});
    });

    player.on("timeupdate", ({ seconds, duration, percent }) => {
      if (duration > 0) setVslRemaining(duration - seconds);
      if (percent >= 0.25 && !fired.current.p25) {
        fired.current.p25 = true;
        trackCustom("VslProgress25", {});
        gaEvent("vsl_progress_25", {});
      }
      if (percent >= 0.5 && !fired.current.p50) {
        fired.current.p50 = true;
        trackCustom("VslProgress50", {});
        gaEvent("vsl_progress_50", {});
      }
      if (percent >= 0.75 && !fired.current.p75) {
        fired.current.p75 = true;
        trackCustom("VslProgress75", {});
        gaEvent("vsl_progress_75", {});
      }
    });

    player.on("ended", () => unlock("complete"));
    player.on("error", () => unlock("player_error"));

    return () => {
      window.clearTimeout(safety);
      player.destroy().catch(() => {});
    };
  }, []);

  function handleUnmute() {
    const player = playerRef.current;
    if (!player) return;
    player
      .setMuted(false)
      .then(() => {
        setMuted(false);
        if (!fired.current.unmuted) {
          fired.current.unmuted = true;
          trackCustom("VslUnmuted", {});
          gaEvent("vsl_unmuted", {});
        }
      })
      .catch(() => {});
  }

  return (
    <div
      className={`overflow-hidden rounded-[4px] border border-line-soft bg-surface ${className}`}
    >
      <div ref={containerRef} className="absolute inset-0" />
      {muted && (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute inset-x-0 bottom-4 z-10 mx-auto flex w-fit items-center gap-2.5 rounded-full bg-wine px-5 py-3 text-[13.5px] font-semibold text-on-wine shadow-lg transition-transform duration-150 hover:scale-105"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-on-wine opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-on-wine" />
          </span>
          🔊 Toque para ativar o som
        </button>
      )}
    </div>
  );
}
