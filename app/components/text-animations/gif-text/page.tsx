import GifTextPreviewWrapper from "./gif-text-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Gif Text",
  description: "A stunning text effect that uses a GIF as the fill color.",
  image: "/components/text-animations/gif-text.png",
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
  return (
    <div className="flex flex-col w-full">
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
