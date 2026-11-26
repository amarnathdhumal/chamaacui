import type { NextConfig } from "next";
import cloudflareImageSizes from "./lib/cloudflare-image-sizes.json";

const nextConfig: NextConfig = {
  ...(process.env.CF_PAGES === "1" && { output: "export" }),
  images:
    process.env.CF_PAGES === "1"
      ? {
          loader: "custom",
          loaderFile: "./lib/cloudflare-image-loader.ts",
          ...cloudflareImageSizes,
        }
      : {
          domains: ["images.unsplash.com", "unavatar.io", "api.dicebear.com"],
        },

  // Remove all console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
