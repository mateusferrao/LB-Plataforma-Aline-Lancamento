// Gera os PNGs dos estáticos da Academy a partir de estaticos.html, com o Chrome
// headless do sistema (sem Playwright), como em docs/kit-protocolo/render.mjs.
// Feed 1080x1350 (4:5) e story 1080x1920 (9:16) em out/estaticos/ (fora do git).
// Uso: node docs/criativos/academy/render.mjs
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(dir, "out", "estaticos");
mkdirSync(out, { recursive: true });

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);
if (!CHROME) throw new Error("Chrome/Edge não encontrado");

const PECAS = [
  ["1", "E1-embaixo-da-agulha"],
  ["2", "E2-vou-pensar"],
  ["3", "E3-tudo-num-lugar-so"],
  ["4", "E4-agenda-parada"],
];

function screenshot(only, destino, w, h) {
  const u = pathToFileURL(path.join(dir, "estaticos.html"));
  u.search = `?only=${only}`;
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--allow-file-access-from-files",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=6000",
    `--screenshot=${destino}`,
    `--window-size=${w},${h}`,
    "--force-device-scale-factor=1",
    u.href,
  ], { stdio: "pipe" });
  console.log(path.relative(dir, destino));
}

for (const [n, nome] of PECAS) {
  screenshot(`c${n}`, path.join(out, `${nome}-feed.png`), 1080, 1350);
  screenshot(`s${n}`, path.join(out, `${nome}-story.png`), 1080, 1920);
}
