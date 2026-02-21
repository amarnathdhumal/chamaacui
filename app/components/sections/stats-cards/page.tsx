import StatsCardsPreviewWrapper from "./stats-cards-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Stats Cards",
  description: "A set of animated statistic cards with hover effects.",
  image: "/components/sections/stats-cards.png",
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
  return (
    <div className="flex flex-col w-full">
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
