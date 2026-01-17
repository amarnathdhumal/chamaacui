import HoverArrowButtonPreviewWrapper from "./hover-arrow-button-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/hover-arrow-button/hover-arrow-button.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/buttons/hover-arrow-button/hover-arrow-button-demo.tsx"
);
const HoverArrowButtonSource = fs.readFileSync(filePath, "utf-8");
const HoverArrowButtonDemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace(
    "@/registry/chamaac/hover-arrow-button/hover-arrow-button",
    "@/components/hover-arrow-button"
  );

export const metadata = constructMetadata({
  title: "Hover Arrow Button",
  description: "A button with a smooth hover arrow swap animation.",
  image: "/components/buttons/hover-arrow-button.png",
});

export default function HoverArrowButtonPage() {
  return (
    <div className="flex flex-col w-full">
      <HoverArrowButtonPreviewWrapper
        title="Hover Arrow Button"
        description="A button that swaps arrows on hover with a smooth sliding animation. The text stays centered while arrows appear and disappear seamlessly."
        code={
          <div className="relative">
            <div className="absolute top-4 right-4">
              <CopyButton text={HoverArrowButtonDemoSource} />
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
              {HoverArrowButtonDemoSource}
            </SyntaxHighlighter>
          </div>
        }
        installationSource={HoverArrowButtonSource}
        props={[
          {
            name: "text",
            type: "string",
            default: '"Get Started"',
            description: "The text to be displayed inside the button",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "0.3",
            description: "Duration of the arrow swap animation in seconds",
            required: false,
          },
          {
            name: "iconSize",
            type: "number",
            default: "24",
            description: "Size of the arrow icon in pixels",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Custom class names for styling",
            required: false,
          },
          {
            name: "onClick",
            type: "() => void",
            default: "-",
            description: "Click handler function",
            required: false,
          },
        ]}
      />
    </div>
  );
}
