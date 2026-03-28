import ElectricMistDemoWrapper from "./electric-mist-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";
import fs from "fs";
import path from "path";

export const metadata = buildComponentMetadata({
  title: "Electric Mist",
  description:
    "A high-energy glowing lightning shader with waves and smoke effects.",
  image: "/components/backgrounds/electric-mist.png",
  pathname: "/components/backgrounds/electric-mist",
  category: "Backgrounds",
  keywords: [
    "Lightning background",
    "Glow effect React",
    "Interactive fog background",
  ],
});

export default function ElectricMistPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Electric Mist",
      description:
        "A high-energy glowing lightning shader with waves and smoke effects.",
      pathname: "/components/backgrounds/electric-mist",
      image: "/components/backgrounds/electric-mist.png",
      category: "Background shader",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Backgrounds", path: "/components" },
      { name: "Electric Mist", path: "/components/backgrounds/electric-mist" },
    ]),
  ];
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/electric-mist/electric-mist.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ElectricMistDemoWrapper
        title="Electric Mist"
        description="A high-energy glowing lightning shader with waves and smoke effects."
        installationSource={componentSource}
        codeFilename="electric-mist-demo.tsx"
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes for the container",
            required: false,
          },
          {
            name: "color",
            type: "string",
            default: '"#191970"',
            description: "Base color of the lighting effect",
            required: false,
          },
          {
            name: "speed",
            type: "number",
            default: "1.0",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "detail",
            type: "number",
            default: "1.5",
            description: "Frequency and detail of the smoke pattern",
            required: false,
          },
          {
            name: "distortion",
            type: "number",
            default: "3.0",
            description: "Intensity of the energy distortion",
            required: false,
          },
          {
            name: "brightness",
            type: "number",
            default: "1.0",
            description: "Glow intensity threshold",
            required: false,
          },
        ]}
      />
    </div>
  );
}
