import DancingLettersPreviewWrapper from "./dancing-letters-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Dancing Letters",
  description: "Physics-based interactive text animations.",
  image: "/components/text-animations/dancing-letters.png",
  pathname: "/components/text-animations/dancing-letters",
  category: "Text Animations",
  keywords: [
    "Physics text effect",
    "Interactive typography",
    "Letter animation React",
  ],
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/text-animations/dancing-letters/dancing-letters.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/text-animations/dancing-letters/dancing-letters-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./dancing-letters", "@/components/dancing-letters");

export default function DancingLettersPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Dancing Letters",
      description: "Physics-based interactive text animations.",
      pathname: "/components/text-animations/dancing-letters",
      image: "/components/text-animations/dancing-letters.png",
      category: "Text animation component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Text Animations", path: "/components" },
      {
        name: "Dancing Letters",
        path: "/components/text-animations/dancing-letters",
      },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DancingLettersPreviewWrapper
        title="Dancing Letters"
        description="Physics-based interactive text animations."
        code={DemoSource}
        codeFilename="dancing-letters-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "text",
            type: "string",
            default: '"ANIMATE"',
            description:
              "The text to display and animate. Each letter gets a unique animation.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container",
            required: false,
          },
          {
            name: "letterClassName",
            type: "string",
            default: '""',
            description: "Additional CSS classes applied to each letter",
            required: false,
          },
        ]}
      />
    </div>
  );
}
