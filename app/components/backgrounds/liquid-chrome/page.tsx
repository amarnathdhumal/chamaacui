import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import LiquidChromePreviewWrapper from "./liquid-chrome-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

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

  const demoPath = path.join(
    process.cwd(),
    "app/components/backgrounds/liquid-chrome/liquid-chrome-demo.tsx"
  );
  const demoSource = fs.readFileSync(demoPath, "utf8");

  return (
    <div>
      <LiquidChromePreviewWrapper
        title="Liquid Chrome"
        description="A mesmerizing, shader-driven liquid chrome animation ideal for modern landing pages."
        code={
          <div className="relative">
            <div className="absolute top-4 right-4">
              <CopyButton text={demoSource} />
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              wrapLongLines={true}
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "14px",
                lineHeight: "1.5",
                width: "100%",
                maxWidth: "100%",
                boxSizing: "border-box",
                overflow: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {demoSource}
            </SyntaxHighlighter>
          </div>
        }
        installationSource={componentSource}
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
            default: "0.5",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "timeScale",
            type: "number",
            default: "0.1",
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
