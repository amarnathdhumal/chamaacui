import SynthesisDemoWrapper from "./synthesis-preview-wrapper";
import { constructMetadata } from "@/lib/utils";
import fs from "fs";
import path from "path";

export const metadata = constructMetadata({
  title: "Synthesis",
  description:
    "A professional, multi-layered cosmic flow background with extensive warping customization.",
  image: "/components/backgrounds/synthesis.png",
  keywords: [
    "Synthesis background",
    "Cosmic flow shader",
    "WebGL background",
    "Domain warping animation",
  ],
});

export default function SynthesisPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/backgrounds/synthesis.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <SynthesisDemoWrapper
        title="Synthesis"
        description="A professional, multi-layered cosmic flow background with extensive warping customization."
        installationSource={componentSource}
        codeFilename="synthesis-demo.tsx"
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
            default: "0.4",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "color1",
            type: "string",
            default: '"#0f172a"',
            description: "First background color theme",
            required: false,
          },
          {
            name: "color2",
            type: "string",
            default: '"#3b0764"',
            description: "Second color theme",
            required: false,
          },
          {
            name: "color3",
            type: "string",
            default: '"#0ea5e9"',
            description: "Third color theme / Accent highlight",
            required: false,
          },
          {
            name: "scale",
            type: "number",
            default: "1.0",
            description: "Internal mapping scale multiplier (zoom)",
            required: false,
          },
          {
            name: "complexity",
            type: "number",
            default: "6.0",
            description: "Number of domain warping iterations (1.0 - 20.0)",
            required: false,
          },
          {
            name: "distortion",
            type: "number",
            default: "0.6",
            description: "Magnitude of the warp displacement field",
            required: false,
          },
          {
            name: "glowIntensity",
            type: "number",
            default: "0.4",
            description: "Final core glow additive mix factor",
            required: false,
          },
          {
            name: "flowFrequency",
            type: "number",
            default: "3.0",
            description: "Spatial frequency of the interference pattern",
            required: false,
          },
          {
            name: "contrast",
            type: "number",
            default: "1.2",
            description: "Final smoothstep contrast threshold",
            required: false,
          },
        ]}
      />
    </div>
  );
}
