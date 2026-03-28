import fs from "fs";
import path from "path";
import WavesPreviewWrapper from "./waves-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Waves",
  description: "A smooth, shader-based wave animation component.",
  image: "/components/backgrounds/waves.png",
  pathname: "/components/backgrounds/waves",
  category: "Backgrounds",
  keywords: ["Animated Waves", "SVG Wave background", "Fluid Wave effect"],
});

export default function WavesPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Waves",
      description: "A smooth, shader-based wave animation component.",
      pathname: "/components/backgrounds/waves",
      image: "/components/backgrounds/waves.png",
      category: "Background shader",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Backgrounds", path: "/components" },
      { name: "Waves", path: "/components/backgrounds/waves" },
    ]),
  ];

  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/waves/waves.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WavesPreviewWrapper
        title="Waves"
        description="A mesmerizing, shader-driven wave animation ideal for modern landing pages."
        installationSource={componentSource}
        codeFilename="waves-demo.tsx"
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes for the container",
            required: false,
          },
          {
            name: "backgroundColor",
            type: "string",
            default: '"#000000"',
            description: "Background color of the canvas",
            required: false,
          },
          {
            name: "waveColor1",
            type: "string",
            default: '"#071697"',
            description: "Primary wave color (Teal/Blue)",
            required: false,
          },
          {
            name: "waveColor2",
            type: "string",
            default: '"#00d4ff"',
            description: "Highlight wave color (Cyan)",
            required: false,
          },
          {
            name: "waveColor3",
            type: "string",
            default: '"#000000"',
            description: "Deep/Valley wave color (Black)",
            required: false,
          },
          {
            name: "waveSpeedX",
            type: "number",
            default: "0.0125",
            description: "Speed on X axis",
            required: false,
          },
          {
            name: "waveSpeedY",
            type: "number",
            default: "0.005",
            description: "Speed on Y axis",
            required: false,
          },
          {
            name: "waveAmpX",
            type: "number",
            default: "32",
            description: "Amplitude on X axis",
            required: false,
          },
        ]}
      />
    </div>
  );
}
