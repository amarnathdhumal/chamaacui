import LightbulbIconPreviewWrapper from "./lightbulb-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

const filePath = path.join(
  process.cwd(),
  "registry/chamaac/animated-icons/lightbulb-icon.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/animated-icons/lightbulb-icon/lightbulb-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = constructMetadata({
  title: "Lightbulb Icon",
  description: "An animated lightbulb icon with pulsing rays.",
  image: "/components/animated-icons.png",
});

export default function LightbulbIconPage() {
  return (
    <div className="flex flex-col w-full">
      <LightbulbIconPreviewWrapper
        title="Lightbulb Icon"
        description="An animated lightbulb icon with pulsing rays."
        code={DemoSource}
        codeFilename="lightbulb-icon-demo.tsx"
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
            default: "2",
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
        ]}
      />
    </div>
  );
}
