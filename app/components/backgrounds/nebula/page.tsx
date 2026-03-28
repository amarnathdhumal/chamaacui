import NebulaPreviewWrapper from "./nebula-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";
import fs from "fs";
import path from "path";

export const metadata = buildComponentMetadata({
  title: "Nebula",
  description:
    "A mesmerizing, shader-driven nebula animation using domain warping for a deep space effect.",
  image: "/components/backgrounds/nebula.png",
  pathname: "/components/backgrounds/nebula",
  category: "Backgrounds",
  keywords: ["Space background", "Domain warping animation", "GLSL nebula"],
});

export default function NebulaPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Nebula",
      description:
        "A mesmerizing, shader-driven nebula animation using domain warping for a deep space effect.",
      pathname: "/components/backgrounds/nebula",
      image: "/components/backgrounds/nebula.png",
      category: "Background shader",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Backgrounds", path: "/components" },
      { name: "Nebula", path: "/components/backgrounds/nebula" },
    ]),
  ];
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/nebula/nebula.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NebulaPreviewWrapper
        title="Nebula"
        description="A mesmerizing, shader-driven nebula animation using domain warping for a deep space effect."
        installationSource={componentSource}
        codeFilename="nebula-demo.tsx"
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes for the container",
            required: false,
          },
          {
            name: "speed",
            type: "number",
            default: "2.0",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "color1",
            type: "string",
            default: '"#5efff4"',
            description: "Highlight/fracture color",
            required: false,
          },
          {
            name: "color2",
            type: "string",
            default: '"#763b65"',
            description: "Main nebula cloud color",
            required: false,
          },
          {
            name: "color3",
            type: "string",
            default: '"#1a0b2e"',
            description: "Deep space background color",
            required: false,
          },
        ]}
      />
    </div>
  );
}
