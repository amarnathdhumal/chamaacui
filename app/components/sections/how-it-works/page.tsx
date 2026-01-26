import HowItWorksPreviewWrapper from "./how-it-works-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "How It Works",
  description: "A 5-step process flow with cards and connecting lines.",
  image: "/components/sections/how-it-works.png",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/how-it-works/how-it-works.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/sections/how-it-works/how-it-works-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace(
    "@/registry/chamaac/how-it-works/how-it-works",
    "@/components/how-it-works"
  );

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full">
      <HowItWorksPreviewWrapper
        title="How It Works"
        description={
          <>
            A visual flow component showing a step-by-step process with
            connected cards. Inspired by{" "}
            <a
              href="https://x.com/MarkKnd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              MarkKnd
            </a>
            .
          </>
        }
        code={
          <div className="relative">
            <div className="absolute top-4 right-4">
              <CopyButton text={DemoSource} />
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
              {DemoSource}
            </SyntaxHighlighter>
          </div>
        }
        installationSource={ComponentSource}
        props={[
          {
            name: "features",
            type: "Step[]",
            default: "Default steps",
            description:
              "Array of step objects { title, description, colorTheme, colors }.",
            required: false,
          },
          {
            name: "stepPositions",
            type: "StepPosition[]",
            default: "Default positions",
            description: "Array of position objects { className, rotate }.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Optional className for styling.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
