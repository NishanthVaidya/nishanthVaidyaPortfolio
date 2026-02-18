/**
 * Resizes Experience_2.png through Experience_5.png to match Experience_1.png
 * resolution (384×364): fit inside, then center on transparent canvas.
 * Run: node scripts/resize-experience-thumbnails.mjs
 * Requires: sharp (devDependency)
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const TARGET_WIDTH = 384;
const TARGET_HEIGHT = 364;
const SOURCE_FILES = ["Experience_2.png", "Experience_3.png", "Experience_4.png", "Experience_5.png"];

async function resizeToMatch(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: "inside" })
    .png()
    .toBuffer({ resolveWithObject: true });

  const { width: w, height: h } = info;
  const left = Math.round((TARGET_WIDTH - w) / 2);
  const top = Math.round((TARGET_HEIGHT - h) / 2);

  await sharp({
    create: {
      width: TARGET_WIDTH,
      height: TARGET_HEIGHT,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: data, left, top }])
    .png()
    .toFile(outputPath);
}

async function main() {
  console.log(`Resizing experience thumbnails to ${TARGET_WIDTH}×${TARGET_HEIGHT} (match Experience_1.png)...`);
  for (const name of SOURCE_FILES) {
    const inputPath = path.join(publicDir, name);
    const outputPath = path.join(publicDir, name);
    await resizeToMatch(inputPath, outputPath);
    console.log(`  ${name} -> ${TARGET_WIDTH}×${TARGET_HEIGHT}`);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
