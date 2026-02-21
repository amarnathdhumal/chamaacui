import fs from "fs";
import path from "path";
import InteractiveGridPreviewWrapper from "./interactive-grid-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Interactive Grid Background",
  description: "A highly interactive, mouse-sensitive grid background.",
  image: "/components/backgrounds/interactive-grid.png",
});

export default function InteractiveGridPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/backgrounds/interactive-grid-background.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <InteractiveGridPreviewWrapper
        title="Interactive Grid Background"
        description="A highly interactive, mouse-sensitive grid background."
        installationSource={componentSource}
        codeFilename="interactive-grid-demo.tsx"
        props={[
          {
            name: "gridGap",
            type: "number",
            default: "40",
            description: "Distance between grid dots in pixels",
            required: false,
          },
          {
            name: "dotSize",
            type: "number",
            default: "1.5",
            description: "Radius of the dots",
            required: false,
          },
          {
            name: "radius",
            type: "number",
            default: "300",
            description: "Radius of the mouse interaction zone",
            required: false,
          },
          {
            name: "color",
            type: "string",
            default: '"#737373"',
            description: "Base color of the dots",
            required: false,
          },
          {
            name: "highlightColor",
            type: "string",
            default: '"#FFFF00"',
            description: "Color of the dots active hover",
            required: false,
          },
        ]}
      />
    </div>
  );
}
