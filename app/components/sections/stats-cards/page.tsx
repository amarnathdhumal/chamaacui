import StatsCardsPreviewWrapper from "./stats-cards-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Stats Cards",
  description: "A set of animated statistic cards with hover effects.",
  image: "/components/sections/stats-cards.png",
  pathname: "/components/sections/stats-cards",
  category: "Sections",
  keywords: ["Animated statistics", "Dashboard cards", "Hover effect cards"],
});

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/stats-cards/stats-cards.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/sections/stats-cards/stats-cards-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace(
    "@/registry/chamaac/stats-cards/stats-cards",
    "@/components/stats-cards"
  );

export default function StatsCardsPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Stats Cards",
      description: "A set of animated statistic cards with hover effects.",
      pathname: "/components/sections/stats-cards",
      image: "/components/sections/stats-cards.png",
      category: "Dashboard UI component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Sections", path: "/components" },
      { name: "Stats Cards", path: "/components/sections/stats-cards" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StatsCardsPreviewWrapper
        title="Stats Cards"
        description={
          <>
            A set of animated statistic cards with hover effects. Inspired by{" "}
            <a
              href="https://x.com/areebadesigns/status/2004953343991710060"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Areeba
            </a>
            .
          </>
        }
        code={DemoSource}
        codeFilename="stats-cards-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional classes for the container.",
            required: false,
          },
          {
            name: "width",
            type: "string",
            default: '"w-70"',
            description: "Width class for the cards.",
            required: false,
          },
          {
            name: "height",
            type: "string",
            default: '"h-84"',
            description: "Height class for the cards.",
            required: false,
          },
          {
            name: "images",
            type: "string[]",
            default: '["/images/models/1.png", "/images/models/2.png"]',
            description: "Array of image paths for the cards.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
