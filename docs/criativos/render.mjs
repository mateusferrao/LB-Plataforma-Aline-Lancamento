// Gera os PNGs dos criativos a partir de um HTML desta pasta.
// Feed 1080x1350 (4:5) em png/feed/ e story 1080x1920 (9:16) em png/story/.
// Uso:
//   node docs/criativos/render.mjs                                   (criativos.html → criativo-NN)
//   node docs/criativos/render.mjs criativos-academy.html academy    (→ academy-NN)
// Cada feed é uma <section class="ad" id="cN"> e a story dela tem id="sN".
// Precisa do Playwright com Chromium disponível (global ou no projeto).
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { mkdirSync } from "node:fs";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const arquivo = process.argv[2] ?? "criativos.html";
const prefixo = process.argv[3] ?? "criativo";

mkdirSync(path.join(dir, "png", "feed"), { recursive: true });
mkdirSync(path.join(dir, "png", "story"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 2000 } });
await page.goto(`file://${path.join(dir, arquivo)}`);
await page.evaluate(() => document.fonts.ready);
// Peças com etiquetas ligadas à foto (ex.: A6 da Academy) avisam quando terminam de desenhar.
await page.waitForFunction(() => !document.querySelector(".ilu") || document.body.dataset.pronto === "1");

const total = await page.locator('section.ad[id^="c"]').count();
for (let n = 1; n <= total; n++) {
  const nn = String(n).padStart(2, "0");
  const feed = path.join(dir, "png", "feed", `${prefixo}-${nn}.png`);
  const story = path.join(dir, "png", "story", `${prefixo}-${nn}-story.png`);
  await page.locator(`#c${n}`).screenshot({ path: feed });
  await page.locator(`#s${n}`).screenshot({ path: story });
  console.log(feed);
  console.log(story);
}

await browser.close();
