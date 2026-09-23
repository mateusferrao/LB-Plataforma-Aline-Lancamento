// Gera os PNGs dos criativos a partir de criativos.html.
// Feed 1080x1350 (4:5) em png/feed/ e story 1080x1920 (9:16) em png/story/.
// Uso: node docs/criativos/render.mjs
// Precisa do Playwright com Chromium disponível (global ou no projeto).
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { mkdirSync } from "node:fs";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const TOTAL = 7;

mkdirSync(path.join(dir, "png", "feed"), { recursive: true });
mkdirSync(path.join(dir, "png", "story"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 2000 } });
await page.goto(`file://${path.join(dir, "criativos.html")}`);
await page.evaluate(() => document.fonts.ready);

for (let n = 1; n <= TOTAL; n++) {
  const nn = String(n).padStart(2, "0");
  const feed = path.join(dir, "png", "feed", `criativo-${nn}.png`);
  const story = path.join(dir, "png", "story", `criativo-${nn}-story.png`);
  await page.locator(`#c${n}`).screenshot({ path: feed });
  await page.locator(`#s${n}`).screenshot({ path: story });
  console.log(feed);
  console.log(story);
}

await browser.close();
