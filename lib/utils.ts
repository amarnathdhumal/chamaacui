import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

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
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  const defaultKeywords = [
    "Chamaac UI",
    "Shaders & UI Components",
    "React Shader Components",
    "GLSL Components",
    "WebGL UI",
    "High-performance shaders",
    "React Three Fiber backgrounds",
    "Interactive UI components",
    "Modern web design",
    "Framer Motion components",
    "Next.js components",
  ];

  return {
    title: title
      ? `${title} | Chamaac UI`
      : "Chamaac UI | High-Performance Shaders & UI Components",
    description:
      description ||
      "Explore a premium collection of high-performance shader components, interactive backgrounds, and modern UI elements crafted with React and GLSL.",
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title: title
        ? `${title} | Chamaac UI`
        : "Chamaac UI | High-Performance Shaders & UI Components",
      description:
        description ||
        "Explore a premium collection of high-performance shader components, interactive backgrounds, and modern UI elements crafted with React and GLSL.",
      url: "https://chamaac.com",
      siteName: "Chamaac UI",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
            ? `${title} | Chamaac UI`
            : "Chamaac UI | Premium UI Components",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title
        ? `${title} | Chamaac UI`
        : "Chamaac UI | High-Performance Shaders & UI Components",
      description:
        description ||
        "Explore a premium collection of high-performance shader components, interactive backgrounds, and modern UI elements crafted with React and GLSL.",
      images: [image],
      creator: "@amarnath",
    },
    icons,
    metadataBase: new URL("https://chamaac.com"),
    alternates: {
      canonical: "/",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
