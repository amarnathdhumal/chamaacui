import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        // RSS/Feed paths that don't exist
        "/rss.rss",
        "/rss.xml",
        "/feed.rss",
        "/feed.xml",
        "/registry/feed.xml",
        "/ingest/", // Deprecated PostHog proxy
        // Common pages bots probe that don't exist
        "/contact",
        "/about",
        "/home",
        "/admin",
        "/login",
        "/wp-admin",
        "/wp-login",
      ],
    },
    sitemap: "https://www.chamaac.com/sitemap.xml",
  };
}
