import { buildPageMetadata, createCollectionPageJsonLd } from "@/lib/seo";
import ButtonsGrid from "./buttons-grid";

export const metadata = buildPageMetadata({
  title: "Buttons",
  description:
    "A collection of interactive and animated buttons for your applications.",
  image: "/components/buttons/buttons.png",
  pathname: "/components/buttons",
});

export default function ButtonsPage() {
  const jsonLd = createCollectionPageJsonLd({
    title: "Chamaac UI Buttons",
    description:
      "A collection of interactive and animated buttons for your applications.",
    pathname: "/components/buttons",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ButtonsGrid />
    </>
  );
}
