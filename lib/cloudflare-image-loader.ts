import type { ImageLoaderProps } from "next/image";

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  if (src.startsWith("/components/") && src.endsWith(".png")) {
    return `/_images${src.slice(0, -4)}-${width}.webp`;
  }

  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    return url.href;
  }

  return src;
}
