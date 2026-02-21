import WaterCausticPreviewWrapper from "./water-caustic-preview-wrapper";
import { constructMetadata } from "@/lib/utils";
import fs from "fs";
import path from "path";

export const metadata = constructMetadata({
  title: "Water Caustics",
  description:
    "A stunning, tileable water caustic shader component using mathematical wave interference for realistic light refraction on water surfaces.",
  image: "/components/backgrounds/water-caustic.png",
});

export default function WaterCausticPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/water-caustic/water-caustic.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <WaterCausticPreviewWrapper
        title="Water Caustics"
        description="A beautiful, procedurally generated water caustic animation that simulates the play of light on a surface underwater. Perfect for immersive backgrounds and premium UI sections."
        installationSource={componentSource}
        codeFilename="water-caustic-demo.tsx"
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
            default: '"#00d1ff"',
            description: "The primary color of the caustic highlights",
            required: false,
          },
        ]}
      />
    </div>
  );
}
