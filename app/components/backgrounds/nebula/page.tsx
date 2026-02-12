import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import NebulaPreviewWrapper from "./nebula-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Nebula",
  description:
    "A mesmerizing, shader-driven nebula animation using domain warping for a deep space effect.",
  image: "/components/backgrounds/nebula.png",
});

export default function NebulaPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/nebula/nebula.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  const demoPath = path.join(
    process.cwd(),
    "app/components/backgrounds/nebula/nebula-demo.tsx"
  );
  const demoSource = fs.readFileSync(demoPath, "utf8");

  return (
    <div>
      <NebulaPreviewWrapper
        title="Nebula"
        description="A mesmerizing, shader-driven nebula animation using domain warping for a deep space effect."
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
            default: "2.0",
            description: "Overall animation speed multiplier",
            required: false,
          },
          {
            name: "color1",
            type: "string",
            default: '"#5efff4"',
            description: "Highlight/fracture color",
            required: false,
          },
          {
            name: "color2",
            type: "string",
            default: '"#763b65"',
            description: "Main nebula cloud color",
            required: false,
          },
          {
            name: "color3",
            type: "string",
            default: '"#1a0b2e"',
            description: "Deep space background color",
            required: false,
          },
        ]}
      />
    </div>
  );
}
