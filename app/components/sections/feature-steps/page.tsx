import FeatureStepsPreviewWrapper from "./feature-steps-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Feature Steps",
  description:
    "A dynamic feature showcase component with auto-playing steps and synchronized image transitions.",
  image: "/components/features-step.png",
  pathname: "/components/sections/feature-steps",
  category: "Sections",
  keywords: [
    "Feature showcase component",
    "Animated steps UI",
    "Sync image transitions",
    "React feature section",
  ],
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/sections/feature-steps/feature-steps.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/sections/feature-steps/feature-steps-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./feature-steps", "@/components/feature-steps");

export default function FeatureStepsPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Feature Steps",
      description:
        "A dynamic feature showcase component with auto-playing steps and synchronized image transitions.",
      pathname: "/components/sections/feature-steps",
      image: "/components/features-step.png",
      category: "Feature section",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Sections", path: "/components" },
      { name: "Feature Steps", path: "/components/sections/feature-steps" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FeatureStepsPreviewWrapper
        title="Feature Steps"
        description={
          <>
            A dynamic feature showcase component with auto-playing steps and
            synchronized image transitions. Inspired from{" "}
            <a
              href="https://opensox.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Opensox
            </a>
            .
          </>
        }
        code={DemoSource}
        codeFilename="feature-steps-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "features",
            type: "Feature[]",
            default: "-",
            description:
              "Array of feature objects containing title, content, and image.",
            required: true,
          },
          {
            name: "autoPlayInterval",
            type: "number",
            default: "6000",
            description: "Interval in milliseconds for auto-playing steps.",
            required: false,
          },
          {
            name: "imageClassName",
            type: "string",
            default: '"h-[400px]"',
            description:
              "Tailwind class for the height of the image container, useful for mobile responsiveness.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional classes for the container.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
