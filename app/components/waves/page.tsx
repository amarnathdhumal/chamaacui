import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import WavesPreviewWrapper from "./waves-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Waves",
  description: "A smooth, shader-based wave animation component.",
  image: "/components/backgrounds/waves.png",
});

export default function WavesPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/waves/waves.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  const demoPath = path.join(
    process.cwd(),
    "app/components/waves/waves-demo.tsx"
  );
  const demoSource = fs
    .readFileSync(demoPath, "utf8")
    .replace("@/registry/chamaac/waves/waves", "@/components/ui/waves");

  return (
    <div className="pb-20">
      <WavesPreviewWrapper
        title="Waves"
        description="A mesmerizing, shader-driven wave animation ideal for modern landing pages."
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
