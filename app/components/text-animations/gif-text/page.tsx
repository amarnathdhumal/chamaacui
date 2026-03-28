import GifTextPreviewWrapper from "./gif-text-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Gif Text",
  description: "A stunning text effect that uses a GIF as the fill color.",
  image: "/components/text-animations/gif-text.png",
  pathname: "/components/text-animations/gif-text",
  category: "Text Animations",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/text-animations/gif-text/gif-text.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/text-animations/gif-text/gif-text-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./gif-text", "@/components/gif-text");

export default function GifTextPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Gif Text",
      description: "A stunning text effect that uses a GIF as the fill color.",
      pathname: "/components/text-animations/gif-text",
      image: "/components/text-animations/gif-text.png",
      category: "Text animation effect",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Text Animations", path: "/components" },
      { name: "Gif Text", path: "/components/text-animations/gif-text" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GifTextPreviewWrapper
        title="Gif Text"
        description="A stunning text effect that uses a GIF as the fill color."
        code={DemoSource}
        codeFilename="gif-text-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "text",
            type: "string",
            default: '"CHAMAAC"',
            description: "The text content to mask the video.",
            required: false,
          },
          {
            name: "gif",
            type: "string",
            default: "URL",
            description: "The source URL of the background image or GIF.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: "undefined",
            description: "Additional classes for the text element.",
            required: false,
          },
          {
            name: "containerClassName",
            type: "string",
            default: "undefined",
            description: "Additional classes for the container.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
