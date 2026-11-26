import { mkdir, readdir } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";
import sizes from "../lib/cloudflare-image-sizes.json" with { type: "json" };

const publicDir = join(import.meta.dirname, "../public/components");
const exportDir = join(import.meta.dirname, "../out/_images/components");
const widths = [...sizes.imageSizes, ...sizes.deviceSizes];
let count = 0;

for (const file of await readdir(publicDir, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!file.isFile() || !file.name.endsWith(".png")) continue;

  const source = join(file.parentPath, file.name);
  const target = join(exportDir, relative(publicDir, source).slice(0, -4));

  await mkdir(dirname(target), { recursive: true });
  await Promise.all(
    widths.map((width) =>
      sharp(source)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(`${target}-${width}.webp`)
    )
  );
  count += widths.length;
}

console.log(`Generated ${count} WebP thumbnails for Cloudflare Pages.`);
