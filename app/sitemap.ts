import { MetadataRoute } from "next";
import { sidebarData } from "@/lib/data";
import { iconSlugs } from "@/lib/icon-slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.chamaac.com";

  // Base pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/components`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Add all components from sidebarData
  sidebarData.forEach((item) => {
    const path = item.link === "" ? "/components" : `/components${item.link}`;
    // Sidebar items specifically related to components
    if (item.componentName !== "Components") {
      routes.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  });

  // Add all individual icons
  iconSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/components/animated-icons/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  // Remove duplicates and ensure URLs are unique
  const uniqueRoutesMap = new Map<string, MetadataRoute.Sitemap[number]>();
  routes.forEach((route) => {
    // Normalize URL by removing trailing slashes if any
    const normalizedUrl = route.url.replace(/\/$/, "");
    if (!uniqueRoutesMap.has(normalizedUrl)) {
      uniqueRoutesMap.set(normalizedUrl, route);
    }
  });

  return Array.from(uniqueRoutesMap.values());
}
