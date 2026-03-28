import AstralFlowPreviewWrapper from "./astral-flow-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";
import fs from "fs";
import path from "path";

export const metadata = buildComponentMetadata({
  title: "Astral Flow",
  description:
    "A majestic, constantly breathing radial shader with deep cosmic wisps and a beautiful flowing continuous animation.",
  image: "/components/backgrounds/astral-flow.png",
  pathname: "/components/backgrounds/astral-flow",
  category: "Backgrounds",
  keywords: [
    "Cosmic shader animation",
    "Radial flow effect",
    "React Three Fiber radial shader",
  ],
});

export default function AstralFlowPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Astral Flow",
      description:
        "A majestic, constantly breathing radial shader with deep cosmic wisps and a beautiful flowing continuous animation.",
      pathname: "/components/backgrounds/astral-flow",
      image: "/components/backgrounds/astral-flow.png",
      category: "Background shader",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Backgrounds", path: "/components" },
      { name: "Astral Flow", path: "/components/backgrounds/astral-flow" },
    ]),
  ];

  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/astral-flow/astral-flow.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AstralFlowPreviewWrapper
        title="Astral Flow"
        description="A majestic, constantly breathing radial shader with deep cosmic wisps and a beautiful flowing continuous animation."
        installationSource={componentSource}
        codeFilename="astral-flow-demo.tsx"
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes for the container",
            required: false,
          },
          {
            name: "color1",
            type: "string",
            default: '"#05070a"',
            description: "Deep void blue-black base color",
            required: false,
          },
          {
            name: "color2",
            type: "string",
            default: '"#2e1a38"',
            description: "Moody dark plum/purple mid-tones",
            required: false,
          },
          {
            name: "color3",
            type: "string",
            default: '"#a0769a"',
            description: "Glowing ethereal mauve/silver highlights",
            required: false,
          },
          {
            name: "speed",
            type: "number",
            default: "1.5",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "flowMin",
            type: "number",
            default: "3.0",
            description:
              "Minimum limit for the structural breathe oscillation.",
            required: false,
          },
          {
            name: "flowMax",
            type: "number",
            default: "7.0",
            description:
              "Maximum limit for the structural breathe oscillation.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
