import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";
import { buildPageMetadata } from "./seo";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title,
  description,
  image = "/images/og-image.png",
  icons = "/favicon.png",
  noIndex = false,
  keywords = [],
  pathname,
  type = "website",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  keywords?: string[];
  pathname?: string;
  type?: "website" | "article";
} = {}): Metadata {
  return buildPageMetadata({
    title,
    description,
    image,
    icons,
    noIndex,
    keywords,
    pathname,
    type,
  });
}
