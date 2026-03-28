import HowItWorksPreviewWrapper from "./how-it-works-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "How It Works",
  description: "A 5-step process flow with cards and connecting lines.",
  image: "/components/sections/how-it-works.png",
  pathname: "/components/sections/how-it-works",
  category: "Sections",
  keywords: [
    "Process flow component",
    "Connected cards animation",
    "Visual flow React",
  ],
});

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/how-it-works/how-it-works.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/sections/how-it-works/how-it-works-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace(
    "@/registry/chamaac/how-it-works/how-it-works",
    "@/components/how-it-works"
  );

export default function HowItWorksPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "How It Works",
      description: "A 5-step process flow with cards and connecting lines.",
      pathname: "/components/sections/how-it-works",
      image: "/components/sections/how-it-works.png",
      category: "Process flow component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Sections", path: "/components" },
      { name: "How It Works", path: "/components/sections/how-it-works" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HowItWorksPreviewWrapper
        title="How It Works"
        description={
          <>
            A visual flow component showing a step-by-step process with
            connected cards. Inspired by{" "}
            <a
              href="https://x.com/MarkKnd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              MarkKnd
            </a>
            .
          </>
        }
        code={DemoSource}
        codeFilename="how-it-works-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "features",
            type: "Step[]",
            default: "Default steps",
            description:
              "Array of step objects { title, description, colorTheme, colors }.",
            required: false,
          },
          {
            name: "stepPositions",
            type: "StepPosition[]",
            default: "Default positions",
            description: "Array of position objects { className, rotate }.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Optional className for styling.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
