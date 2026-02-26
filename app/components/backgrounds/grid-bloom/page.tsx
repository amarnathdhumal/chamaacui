import GridBloomPreviewWrapper from "./grid-bloom-preview-wrapper";
import { constructMetadata } from "@/lib/utils";
import fs from "fs";
import path from "path";

export const metadata = constructMetadata({
  title: "Grid Bloom",
  description:
    "A mesmerizing, shader-driven background with dual pulsing wave origins that create interference patterns across an animated rotating grid.",
  image: "/components/backgrounds/grid-bloom.png",
});

export default function GridBloomPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/grid-bloom/grid-bloom.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <GridBloomPreviewWrapper
        title="Grid Bloom"
        description="A mesmerizing, shader-driven background with dual pulsing wave origins that create interference patterns across an animated rotating grid."
        installationSource={componentSource}
        codeFilename="grid-bloom-demo.tsx"
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
            default: '"#e040fb"',
            description: "Color of the blooming pulse pattern",
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
            name: "gridScale",
            type: "number",
            default: "12.0",
            description:
              "Grid tile density — higher values create smaller, denser tiles",
            required: false,
          },
          {
            name: "rotationSpeed",
            type: "number",
            default: "0.0",
            description: "Speed of the slow continuous grid rotation",
            required: false,
          },
          {
            name: "fadeFalloff",
            type: "number",
            default: "10.0",
            description:
              "Controls how quickly the bloom fades out to the edges. Lower = sharper fade. Higher = softer/no fade.",
            required: false,
          },
          {
            name: "distortionAmount",
            type: "number",
            default: "0.05",
            description:
              "Amount of noise-based distortion applied to the grid lines. Setting to 0.0 gives rigid, straight lines.",
            required: false,
          },
          {
            name: "flowSpeedX",
            type: "number",
            default: "-0.2",
            description: "Horizontal scrolling speed of the grid.",
            required: false,
          },
          {
            name: "flowSpeedY",
            type: "number",
            default: "-0.4",
            description: "Vertical scrolling speed of the grid.",
            required: false,
          },
          {
            name: "hoverLightRadius",
            type: "number",
            default: "0.5",
            description:
              "Radius of the light illumination under the mouse. Higher = larger light aura.",
            required: false,
          },
          {
            name: "hoverRepulsionRadius",
            type: "number",
            default: "1.0",
            description: "Radius of the structural push effect from the mouse.",
            required: false,
          },
          {
            name: "hoverRepulsionStrength",
            type: "number",
            default: "0.6",
            description:
              "Strength of the geometric push effect from the mouse. Setting to 0.0 disables the warp.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
