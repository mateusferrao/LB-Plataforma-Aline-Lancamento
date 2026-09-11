"use client";

import Player from "@vimeo/player";
import { useEffect, useRef, useState } from "react";
import { gaEvent, trackCustom } from "@/lib/analytics";
import { markVslCompleted, setVslRemaining } from "@/lib/useVslGate";

// Vídeo privado/não listado: o hash de acesso (h) só é aceito pelo SDK via
// `url`, não como opção separada junto de `id`.
const VIMEO_URL = "https://player.vimeo.com/video/1225929589?h=5dcbd0a4f6" as const;

// Se o player do Vimeo falhar (bloqueador de anúncio, instabilidade) ou o
// evento `ended` nunca chegar por algum motivo, libera o CTA de qualquer
// forma depois desse tempo. Sem essa salvaguarda, uma falha de terceiro
// travaria o botão de compra do Hero indefinidamente.
const SAFETY_TIMEOUT_MS = 3 * 60 * 1000;

export function VslPlayer({ className = "" }: { className?: string }) {
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
    const el = containerRef.current;
    if (!el) return;

    const player = new Player(el, {
      url: VIMEO_URL,
      autoplay: true,
      muted: true,
      playsinline: true,
      background: false,
      controls: false,
      title: false,
      byline: false,
      portrait: false,
      dnt: true,
    });
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
      <div
        ref={containerRef}
        className="absolute inset-0 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full"
      />
      {muted && (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute right-3 bottom-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-bg/90 px-3 py-1.5 text-[12px] font-semibold text-fg shadow-sm backdrop-blur-sm transition-colors hover:bg-bg"
        >
          <span aria-hidden="true">🔈</span>
          Ativar som
        </button>
      )}
    </div>
  );
}
