import { Metadata } from "next";
import GetStartedClient from "./get-started-client";
import { buildPageMetadata, createBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Get Started",
  description:
    "Learn how to install and configure Chamaac UI components in your Next.js application.",
  pathname: "/components/get-started",
});

export default function GetStartedPage() {
  const jsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Components", path: "/components" },
    { name: "Get Started", path: "/components/get-started" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GetStartedClient />
    </>
  );
}
