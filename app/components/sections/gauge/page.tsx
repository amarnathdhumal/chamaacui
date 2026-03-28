import GaugePreviewWrapper from "./gauge-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Gauge",
  description:
    "A customizable semi-circular gauge component for visualizing metrics and performance scores.",
  image: "/components/gauge.png",
  pathname: "/components/sections/gauge",
  category: "Sections",
  keywords: [
    "Animated radial gauge",
    "Performance score UI",
    "Metric visualization",
  ],
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
  const jsonLd = [
    createComponentJsonLd({
      name: "Gauge",
      description:
        "A customizable semi-circular gauge component for visualizing metrics and performance scores.",
      pathname: "/components/sections/gauge",
      image: "/components/gauge.png",
      category: "Graphic UI component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Sections", path: "/components" },
      { name: "Gauge", path: "/components/sections/gauge" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GaugePreviewWrapper
        title="Gauge"
        description="A customizable semi-circular gauge component for visualizing metrics and performance scores."
        code={DemoSource}
        codeFilename="gauge-demo.tsx"
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
