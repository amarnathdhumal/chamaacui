import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import GlowingBorderButtonPreviewWrapper from "./glowing-border-button-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Glowing Border Button",
  description:
    "A stylish glowing border button with a gradient border and glowing effects.",
  image: "/components/buttons/glowing-border.png",
});

export default function GlowingBorderButtonPage() {
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/glowing-border-button/glowing-border-button.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  const demoPath = path.join(
    process.cwd(),
    "app/components/buttons/glowing-border-button/glowing-border-button-demo.tsx"
  );
  const demoSource = fs
    .readFileSync(demoPath, "utf8")
    .replace(
      "@/registry/chamaac/glowing-border-button/glowing-border-button",
      "@/components/glowing-border-button"
    );

  return (
    <div className="">
      <GlowingBorderButtonPreviewWrapper
        title="Glowing Border Button"
        description="A stylish glowing border button with a gradient border and glowing effects."
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
            name: "children",
            type: "React.ReactNode",
            default: '"Book a Call"',
            description: "The content to display inside the button.",
            required: true,
          },
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes to style the button.",
            required: false,
          },
          {
            name: "...props",
            type: "React.ButtonHTMLAttributes",
            default: "-",
            description:
              "Standard HTML button attributes (onClick, type, etc).",
            required: false,
          },
        ]}
      />
    </div>
  );
}
