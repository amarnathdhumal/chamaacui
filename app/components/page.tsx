import { buildPageMetadata, createCollectionPageJsonLd } from "@/lib/seo";
import ComponentsGrid from "./components-grid";

export const metadata = buildPageMetadata({
  title: "Components",
  description:
    "A collection of high-performance shader components and interactive animated elements.",
  image: "/images/og-image.png",
  pathname: "/components",
});

export default function ComponentsPage() {
  const jsonLd = createCollectionPageJsonLd({
    title: "Chamaac UI Components",
    description:
      "Explore our collection of high-performance shader components, background animations, and interactive UI elements.",
    pathname: "/components",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComponentsGrid />
    </>
  );
}
