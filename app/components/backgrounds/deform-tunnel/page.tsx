import DeformTunnelPreviewWrapper from "./deform-tunnel-preview-wrapper";
import { constructMetadata } from "@/lib/utils";
import fs from "fs";
import path from "path";

export const metadata = constructMetadata({
  title: "Deform Tunnel",
  description:
    "A high-speed, customizable tunnel effect using texture deformation and iterative ray-marched glows.",
  image: "/components/backgrounds/deform-tunnel.png",
});

export default function DeformTunnelPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/deform-tunnel/deform-tunnel.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <DeformTunnelPreviewWrapper
        title="Deform Tunnel"
        description="A high-speed, customizable tunnel effect using texture deformation and iterative ray-marched glows."
        installationSource={componentSource}
        codeFilename="deform-tunnel-demo.tsx"
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
            default: "1.0",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "wobble",
            type: "[number, number]",
            default: "[3.0, 1.5]",
            description: "Wobble intensity in X and Y directions",
            required: false,
          },
          {
            name: "depth",
            type: "number",
            default: "5.0",
            description: "Intensity of the tunnel depth/curvature",
            required: false,
          },
          {
            name: "scale",
            type: "number",
            default: "0.3",
            description: "Scale of the tunnel texture",
            required: false,
          },
          {
            name: "decay",
            type: "number",
            default: "0.80",
            description: "How quickly the glow fades out (0.0 to 1.0)",
            required: false,
          },
          {
            name: "exposure",
            type: "number",
            default: "8.5",
            description: "Overall brightness/exposure multiplier",
            required: false,
          },
          {
            name: "imageSrc",
            type: "string",
            default: "Unsplash texture",
            description: "URL for the tunnel texture",
            required: false,
          },
        ]}
      />
    </div>
  );
}
