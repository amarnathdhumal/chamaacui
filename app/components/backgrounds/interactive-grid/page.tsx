import InteractiveGridPreviewWrapper from "./interactive-grid-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";
import fs from "fs";
import path from "path";

export const metadata = buildComponentMetadata({
  title: "Interactive Grid Background",
  description: "A highly interactive, mouse-sensitive grid background.",
  image: "/components/backgrounds/interactive-grid.png",
  pathname: "/components/backgrounds/interactive-grid",
  category: "Backgrounds",
  keywords: [
    "Mouse-sensitive grid",
    "Canvas grid animation",
    "Interactive background",
  ],
});

export default function InteractiveGridPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Interactive Grid Background",
      description: "A highly interactive, mouse-sensitive grid background.",
      pathname: "/components/backgrounds/interactive-grid",
      image: "/components/backgrounds/interactive-grid.png",
      category: "Interactive background",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Backgrounds", path: "/components" },
      {
        name: "Interactive Grid",
        path: "/components/backgrounds/interactive-grid",
      },
    ]),
  ];
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/interactive-grid/interactive-grid-background.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
