"use client";

import Player from "@vimeo/player";
import { useEffect, useRef, useState } from "react";
import { gaEvent, trackCustom } from "@/lib/analytics";
import { markVslCompleted, setVslRemaining } from "@/lib/useVslGate";

// Iframe com src já pronto (em vez de deixar o SDK criar o iframe via
// options+url) — isso evita um round-trip extra ao oEmbed do Vimeo antes de
// começar a carregar o vídeo, que é o que fazia o player demorar a aparecer.
// O navegador já começa a baixar o iframe assim que o HTML é parseado.
//
// initial_quality=720p: sem isso o Vimeo tenta abrir direto numa qualidade
// mais alta (a "auto" inicial tende a mirar alto), e num vídeo vertical que
// aqui é exibido num box pequeno (~400px de largura), isso não faz
// diferença visual nenhuma — só aumenta a chance de travar pra
// rebufferizar logo nos primeiros segundos, mesmo em conexão boa. Depois
// que estabiliza, o player continua ajustando a qualidade sozinho (ABR)
// pra cima se sobrar banda.
const VIMEO_SRC =
  "https://player.vimeo.com/video/1225929589?h=5dcbd0a4f6&autoplay=1&muted=1&playsinline=1&background=0&controls=0&title=0&byline=0&portrait=0&dnt=1&preload=auto&initial_quality=720p";

// Se o player do Vimeo falhar (bloqueador de anúncio, instabilidade) ou o
// evento `ended` nunca chegar por algum motivo, libera o CTA de qualquer
// forma depois desse tempo. Sem essa salvaguarda, uma falha de terceiro
// travaria o botão de compra do Hero indefinidamente.
const SAFETY_TIMEOUT_MS = 3 * 60 * 1000;

// Autoplay mudo pode falhar silenciosamente em alguns celulares (Modo de
// Baixo Consumo no iOS, configuração de "Reprodução Automática" do Safari,
// navegador embutido do Instagram/Facebook) — sem isso, o visitante fica
// com um frame congelado e nenhuma forma de destravar o vídeo. Se o `play`
// não chegar nesse tempo depois do player ficar pronto, mostramos o botão
// de play manual. Checagem única, só pro início — depois disso quem decide
// é o `bufferstart`/`bufferend` (ver abaixo) e o `pause` real.
const AUTOPLAY_GRACE_MS = 2000;

// Se o handshake inicial do player nunca resolver NEM rejeitar (iframe
// bloqueado por extensão, rede instável), sem isso a caixa do vídeo fica
// vazia pra sempre sem nenhum feedback. Trata como falha de carregamento
// depois desse prazo, do mesmo jeito que uma rejeição real do ready().
const READY_TIMEOUT_MS = 6000;

// Sinal de travamento DURANTE a reprodução: usamos os eventos de buffer do
// player (`bufferstart`/`bufferend`), não ausência de `timeupdate` — um
// buffering curto e normal (a maioria dos casos) termina sozinho em menos
// de 1-2s e nunca deve mostrar nada. Só quando o buffering começa e NÃO
// termina dentro desse prazo é que tratamos como travado de verdade (o
// caso relatado: o vídeo mostra um frame real e fica parado nele).
const BUFFER_STUCK_MS = 7000;

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
  const [stuck, setStuck] = useState(false);

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
    let graceTimer: number | undefined;
    let bufferTimer: number | undefined;
    let readyTimedOut = false;

    function showStuck() {
      setStuck(true);
      trackCustom("VslPlaybackStuck", {});
      gaEvent("vsl_playback_stuck", {});
    }

    function clearBufferTimer() {
      window.clearTimeout(bufferTimer);
      bufferTimer = undefined;
    }

    function unlock(reason: "complete" | "load_error" | "player_error" | "timeout") {
      if (fired.current.complete) return;
      fired.current.complete = true;
      window.clearTimeout(safety);
      window.clearTimeout(graceTimer);
      clearBufferTimer();
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

    const readyTimeout = window.setTimeout(() => {
      readyTimedOut = true;
      unlock("load_error");
    }, READY_TIMEOUT_MS);

    player
      .ready()
      .then(() => {
        window.clearTimeout(readyTimeout);
        if (readyTimedOut) return; // já liberou pelo timeout, não inicia mais nada
        // Se o `play` (autoplay) não chegar nesse prazo, o navegador
        // provavelmente bloqueou — mostra o botão de play manual. Checagem
        // única, só pro início: depois disso quem decide é o `bufferstart`/
        // `bufferend` e o `pause` real (ver abaixo).
        graceTimer = window.setTimeout(() => {
          if (fired.current.play) return;
          showStuck();
        }, AUTOPLAY_GRACE_MS);
      })
      .catch(() => {
        window.clearTimeout(readyTimeout);
        unlock("load_error");
      });

    player.on("play", () => {
      window.clearTimeout(graceTimer);
      clearBufferTimer();
      setStuck(false);
      if (fired.current.play) return;
      fired.current.play = true;
      trackCustom("VslPlay", {});
      gaEvent("vsl_play", {});
    });

    // Pause real (nunca disparado por nós — não há controles de pausa
    // próprios, então qualquer pause é uma interrupção de verdade).
    player.on("pause", () => {
      if (fired.current.complete) return;
      showStuck();
    });

    // Buffering CURTO é normal e se resolve sozinho — só tratamos como
    // travado se o buffering começar e não terminar dentro do prazo.
    player.on("bufferstart", () => {
      if (fired.current.complete) return;
      clearBufferTimer();
      bufferTimer = window.setTimeout(() => {
        if (fired.current.complete) return;
        showStuck();
      }, BUFFER_STUCK_MS);
    });

    player.on("bufferend", () => {
      clearBufferTimer();
      setStuck(false);
    });

    player.on("timeupdate", ({ seconds, duration, percent }) => {
      clearBufferTimer();
      setStuck(false);
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
      window.clearTimeout(readyTimeout);
      window.clearTimeout(graceTimer);
      clearBufferTimer();
      player.destroy().catch(() => {});
    };
  }, []);

  function handleManualPlay() {
    const player = playerRef.current;
    if (!player) return;
    player.play().catch(() => {});
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

  function toggleMute() {
    const player = playerRef.current;
    if (!player) return;
    const next = !muted;
    player
      .setMuted(next)
      .then(() => {
        setMuted(next);
        if (!next && !fired.current.unmuted) {
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
      {stuck ? (
        // Vídeo travado: autoplay que não pegou no início, buffering que
        // começou e não terminou sozinho, ou um pause real (interrupção do
        // sistema — Modo de Baixo Consumo no iOS, navegador embutido do
        // Instagram/Facebook, etc.) — nunca por buffering curto e normal.
        <button
          type="button"
          onClick={handleManualPlay}
          aria-label="Tocar vídeo"
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <span className="flex items-center gap-2 rounded-2xl bg-black/70 px-5 py-3 text-white shadow-lg backdrop-blur-sm">
            <span className="text-[20px] leading-none" aria-hidden="true">
              ▶️
            </span>
            <span className="text-[13.5px] font-semibold">Toque para assistir</span>
          </span>
        </button>
      ) : (
        // Cobre o vídeo inteiro: clicar em qualquer ponto alterna mudo/com
        // som (clicar de novo depois de ativar o som volta a mutar). O
        // ícone só aparece enquanto o vídeo está mudo.
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Ativar som do vídeo" : "Silenciar vídeo"}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          {muted && (
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/70 text-[28px] shadow-lg backdrop-blur-sm">
              🔇
            </span>
          )}
        </button>
      )}
    </div>
  );
}
