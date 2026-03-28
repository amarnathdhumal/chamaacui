import { buildPageMetadata, createCollectionPageJsonLd } from "@/lib/seo";
import AnimatedIconsGrid from "./animated-icons-grid";

export const metadata = buildPageMetadata({
  title: "Animated Icons",
  description:
    "A collection of smooth, micro-interaction animations for your icons.",
  image: "/components/animated-icons.png",
  pathname: "/components/animated-icons",
});

export default function AnimatedIconsPage() {
  const jsonLd = createCollectionPageJsonLd({
    title: "Chamaac UI Animated Icons",
    description:
      "Explore our collection of smooth, micro-interaction animations for your icons.",
    pathname: "/components/animated-icons",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedIconsGrid />
    </>
  );
}
