// Gera os PNGs dos criativos a partir de criativos.html (1080x1350, feed 4:5).
// Uso: node docs/criativos/render.mjs
// Precisa do Playwright com Chromium disponível (global ou no projeto).
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const IDS = ["c1", "c2", "c3", "c4", "c5"];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1400 } });
await page.goto(`file://${path.join(dir, "criativos.html")}`);
await page.evaluate(() => document.fonts.ready);

for (const [i, id] of IDS.entries()) {
  const out = path.join(dir, "png", `criativo-0${i + 1}.png`);
  await page.locator(`#${id}`).screenshot({ path: out });
  console.log(out);
}

await browser.close();
