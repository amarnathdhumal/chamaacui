import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/rss.rss",
        "/rss.xml",
        "/feed.rss",
        "/feed.xml",
        "/registry/feed.xml",
        "/ingest/", // Block PostHog proxy path (deprecated)
      ],
    },
    sitemap: "https://www.chamaac.com/sitemap.xml",
  };
}
