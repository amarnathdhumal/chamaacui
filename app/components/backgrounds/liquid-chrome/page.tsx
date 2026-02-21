import LiquidChromePreviewWrapper from "./liquid-chrome-preview-wrapper";
import { constructMetadata } from "@/lib/utils";
import fs from "fs";
import path from "path";

export const metadata = constructMetadata({
  title: "Liquid Chrome",
  description: "A smooth, liquid metal shader effect.",
  image: "/components/backgrounds/liquid-chrome.png",
});

export default function LiquidChromePage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/liquid-chrome/liquid-chrome.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  return (
    <div>
      <LiquidChromePreviewWrapper
        title="Liquid Chrome"
        description="A mesmerizing, shader-driven liquid chrome animation ideal for modern landing pages."
        installationSource={componentSource}
        codeFilename="liquid-chrome-demo.tsx"
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
            default: "0.35",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "timeScale",
            type: "number",
            default: "0.225",
            description: "Intensity of the liquid warping",
            required: false,
          },
          {
            name: "color",
            type: "string",
            default: '"#C0C0C0"',
            description: "Color 1 (Silver/Chrome)",
            required: false,
          },
          {
            name: "color2",
            type: "string",
            default: '"#4A4A4A"',
            description: "Color 2 (Dark Gray)",
            required: false,
          },
        ]}
      />
    </div>
  );
}
