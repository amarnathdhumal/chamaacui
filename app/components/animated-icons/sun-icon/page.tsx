import SunIconPreviewWrapper from "./sun-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/animated-icons/sun-icon.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/animated-icons/sun-icon/sun-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = constructMetadata({
  title: "Sun Icon",
  description: "An animated sun icon with a continuous rotation effect.",
  image: "/components/animated-icons.png",
});

export default function SunIconPage() {
  return (
    <div className="flex flex-col w-full">
      <SunIconPreviewWrapper
        title="Sun Icon"
        description="An animated sun icon with a continuous rotation effect."
        code={DemoSource}
        codeFilename="sun-icon-demo.tsx"
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
            default: "28",
            description: "Size of the icon in pixels",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "4",
            description: "Duration of one full rotation in seconds",
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
            description: "If true, animation only plays on hover",
            required: false,
          },
        ]}
      />
    </div>
  );
}
