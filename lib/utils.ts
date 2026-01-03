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
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title ? `${title} | Chamaac` : "Chamaac | Premium UI Components",
    description:
      description ||
      "Explore a collection of stunning and interactive UI components crafted with Next.js and Motion.",
    openGraph: {
      title: title ? `${title} | Chamaac` : "Chamaac | Premium UI Components",
      description:
        description ||
        "Explore a collection of stunning and interactive UI components crafted with Next.js and Motion.",
      url: "https://www.chamaac.com",
      siteName: "Chamaac",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title ? `${title} | Chamaac` : "Chamaac | Premium UI Components",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | Chamaac` : "Chamaac | Premium UI Components",
      description:
        description ||
        "Explore a collection of stunning and interactive UI components crafted with Next.js and Motion.",
      images: [image],
      creator: "@amarnath",
    },
    icons,
    metadataBase: new URL("https://www.chamaac.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
