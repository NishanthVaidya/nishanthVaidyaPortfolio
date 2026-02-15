/**
 * Makes white (and near-white) background transparent in Experience_*.png images.
 * Run: node scripts/make-experience-transparent.mjs
 * Requires: npm install sharp --save-dev
 */

import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

// Pixels with R,G,B all above this value (0-255) are made transparent
const WHITE_THRESHOLD = 248;
// Softer edge: pixels between THRESHOLD and this get partial transparency
const SOFT_THRESHOLD = 240;

async function makeWhiteTransparent(inputPath, outputPath) {
  const start = performance.now();
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const n = width * height * channels;

  for (let i = 0; i < n; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const isNearWhite = r >= SOFT_THRESHOLD && g >= SOFT_THRESHOLD && b >= SOFT_THRESHOLD;
    if (isNearWhite) {
      // Full white -> fully transparent
      if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
        data[i + 3] = 0;
      } else {
        // Soft edge: partial transparency
        const t = (r + g + b) / 3;
        data[i + 3] = Math.round(255 * (1 - (t - SOFT_THRESHOLD) / (WHITE_THRESHOLD - SOFT_THRESHOLD)));
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  const elapsed = performance.now() - start;
  console.log(`[make-transparent] Processed ${path.basename(inputPath)} in ${elapsed.toFixed(0)}ms`);
}

async function main() {
  const start = performance.now();
  console.log("[make-transparent] Making white backgrounds transparent for Experience_*.png");

  const files = await readdir(publicDir).catch(() => []);
  const experiencePngs = files.filter((f) => /^Experience_\d\.png$/i.test(f));

  if (experiencePngs.length === 0) {
    console.warn("[make-transparent] No Experience_1.png … Experience_5.png found in public/. Add the images and run again.");
    process.exit(1);
  }

  for (const name of experiencePngs.sort()) {
    const inputPath = path.join(publicDir, name);
    await makeWhiteTransparent(inputPath, inputPath);
  }

  const total = performance.now() - start;
  console.log(`[make-transparent] Done. Processed ${experiencePngs.length} image(s) in ${total.toFixed(0)}ms`);
}

main().catch((err) => {
  console.error("[make-transparent]", err);
  process.exit(1);
});
