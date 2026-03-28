import TextLoopPreviewWrapper from "./text-loop-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Text Loop",
  description: "An animated text loop with typewriter and gradient effect.",
  image: "/components/text-animations/text-loop.png",
  pathname: "/components/text-animations/text-loop",
  category: "Text Animations",
  keywords: [
    "Typewriter effect React",
    "Rotating text component",
    "Framer Motion text loop",
  ],
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/text-animations/text-loop/text-loop.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/text-animations/text-loop/text-loop-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./text-loop", "@/components/text-loop");

export default function TextLoopPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Text Loop",
      description: "An animated text loop with typewriter and gradient effect.",
      pathname: "/components/text-animations/text-loop",
      image: "/components/text-animations/text-loop.png",
      category: "Text animation component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Text Animations", path: "/components" },
      { name: "Text Loop", path: "/components/text-animations/text-loop" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TextLoopPreviewWrapper
        title="Text Loop"
        description="An animated text loop that cycles through a list of words with a typewriter and gradient effect."
        code={DemoSource}
        codeFilename="text-loop-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "staticText",
            type: "string",
            default: '"Design"',
            description:
              "The static text that appears before the animating loop.",
            required: false,
          },
          {
            name: "rotatingTexts",
            type: "string[]",
            default: '["Limitless", "Timeless", "Flawless"]',
            description: "The list of words to cycle through.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container.",
            required: false,
          },
          {
            name: "interval",
            type: "number",
            default: "3000",
            description: "Time in milliseconds between word changes.",
            required: false,
          },
          {
            name: "transition",
            type: "Transition",
            default: '{ duration: 0.8, ease: "easeInOut" }',
            description: "Motion transition object for the animation.",
            required: false,
          },
          {
            name: "staticTextClassName",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the static text.",
            required: false,
          },
          {
            name: "rotatingTextClassName",
            type: "string",
            default: '""',
            description:
              "Additional CSS classes for the rotating text (use to override gradient).",
            required: false,
          },
          {
            name: "backgroundClassName",
            type: "string",
            default: '""',
            description:
              "Additional CSS classes for the background gradient box.",
            required: false,
          },
          {
            name: "cursorClassName",
            type: "string",
            default: '""',
            description:
              "Additional CSS classes for the cursor line (width, color).",
            required: false,
          },
        ]}
      />
    </div>
  );
}
