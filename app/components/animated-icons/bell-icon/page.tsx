import BellIconPreviewWrapper from "./bell-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/animated-icons/bell-icon.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/animated-icons/bell-icon/bell-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = constructMetadata({
  title: "Bell Icon",
  description: "An animated bell icon that rings.",
  image: "/components/animated-icons.png",
});

export default function BellIconPage() {
  return (
    <div className="flex flex-col w-full">
      <BellIconPreviewWrapper
        title="Bell Icon"
        description="An animated bell icon that rings."
        code={DemoSource}
        codeFilename="bell-icon-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Custom class names for styling the SVG",
            required: false,
          },
          {
            name: "size",
            type: "number",
            default: "24",
            description: "Size of the icon in pixels",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "1.3",
            description: "Duration of the animation in seconds",
            required: false,
          },
          {
            name: "strokeWidth",
            type: "number",
            default: "2",
            description: "Stroke width of the icon",
            required: false,
          },
          {
            name: "isHovered",
            type: "boolean",
            default: "false",
            description:
              "When true, animation only plays on hover. When false, animation loops continuously.",
            required: false,
          },
          {
            name: "repeatDelay",
            type: "number",
            default: "1",
            description: "Delay between animation loops in seconds",
            required: false,
          },
          {
            name: "ease",
            type: "Easing",
            default: '"easeInOut"',
            description:
              "Animation easing function (e.g., 'linear', 'easeIn', 'easeOut', 'easeInOut')",
            required: false,
          },
        ]}
      />
    </div>
  );
}
