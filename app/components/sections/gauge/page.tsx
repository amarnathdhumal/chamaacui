import GaugePreviewWrapper from "./gauge-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Gauge",
  description:
    "A customizable semi-circular gauge component for visualizing metrics and performance scores.",
  image: "/components/gauge.png",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/sections/gauge/gauge.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/sections/gauge/gauge-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./gauge", "@/components/gauge");

export default function GaugePage() {
  return (
    <div className="flex flex-col w-full">
      <GaugePreviewWrapper
        title="Gauge"
        description="A customizable semi-circular gauge component for visualizing metrics and performance scores."
        code={
          <div className="relative">
            <div className="absolute top-4 right-4">
              <CopyButton text={DemoSource} />
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              wrapLongLines={true}
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "14px",
                lineHeight: "1.5",
                width: "100%",
                maxWidth: "100%",
                boxSizing: "border-box",
                overflow: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {DemoSource}
            </SyntaxHighlighter>
          </div>
        }
        installationSource={ComponentSource}
        props={[
          {
            name: "value",
            type: "number",
            default: "70",
            description: "The current value to display (0-100 by default)",
            required: false,
          },
          {
            name: "min",
            type: "number",
            default: "0",
            description: "Minimum value of the gauge",
            required: false,
          },
          {
            name: "max",
            type: "number",
            default: "100",
            description: "Maximum value of the gauge",
            required: false,
          },
          {
            name: "size",
            type: "number",
            default: "400",
            description: "Diameter of the gauge in pixels",
            required: false,
          },
          {
            name: "gap",
            type: "number",
            default: "4",
            description: "Gap between bars in degrees",
            required: false,
          },
          {
            name: "thickness",
            type: "number",
            default: "10",
            description: "Thickness of the gauge bars in pixels",
            required: false,
          },
          {
            name: "activeColor",
            type: "string",
            default: '"bg-blue-600"',
            description: "Tailwind class for the active bar color",
            required: false,
          },
          {
            name: "inactiveColor",
            type: "string",
            default: '"bg-blue-100"',
            description: "Tailwind class for the inactive bar color",
            required: false,
          },
          {
            name: "showValue",
            type: "boolean",
            default: "true",
            description: "Whether to display the value text",
            required: false,
          },
          {
            name: "label",
            type: "string",
            default: '"Performance"',
            description: "Label text displayed below the value",
            required: false,
          },
          {
            name: "delay",
            type: "number",
            default: "25",
            description: "Delay in milliseconds between each bar's animation",
            required: false,
          },
        ]}
      />
    </div>
  );
}
