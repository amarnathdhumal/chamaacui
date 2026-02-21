import type { Metadata } from "next";
import RandomImageReveal from "./reveal-card";

export const metadata: Metadata = {
  title: "Random Image Reveal | Chamaac UI",
  description:
    "A card that reveals a random image on hover with smooth rotation and lift animations.",
};
import fs from "fs";
import path from "path";
import ViewArea from "@/components/ui/view-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import InstallationSection from "../../../components/ui/installation-section";
import PropsTable from "../../../components/ui/props-table";

// file paths
const filePath = path.join(
  process.cwd(),
  "app/in-progress/random-image-reveal/reveal-card.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/in-progress/random-image-reveal/reveal-card-demo.tsx"
);
const RevealCardSource = fs.readFileSync(filePath, "utf-8");
const RevealCardDemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function RandomImageRevealPage() {
  return (
    <div className="flex flex-col w-full">
      <ViewArea
        title="Random Image Reveal"
        description="A card component that reveals a random image on hover with smooth animations, as the image card rotates and moves upward."
        preview={
          <div className="w-full h-[600px] flex justify-center items-center">
            <RandomImageReveal
              images={[
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/5.jpg",
              ]}
            />
          </div>
        }
        code={
          <div className="relative">
            <div className="absolute top-4 right-4">
              <CopyButton text={RevealCardDemoSource} />
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
              {RevealCardDemoSource}
            </SyntaxHighlighter>
          </div>
        }
      />

      {/* Installation Section */}
      <InstallationSection componentSource={RevealCardSource} />

      {/* Props Section */}
      <PropsTable
        props={[
          {
            name: "images",
            type: "string[]",
            default: "-",
            description: "Array of image paths to randomly display on hover",
            required: true,
          },
          {
            name: "duration",
            type: "number",
            default: "0.2",
            description: "The duration of the animation transition in seconds",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Custom class names for styling the card container",
            required: false,
          },
          {
            name: "width",
            type: "string",
            default: '"350px"',
            description: "Width of the outer card container",
            required: false,
          },
          {
            name: "height",
            type: "string",
            default: '"270px"',
            description: "Height of the outer card container",
            required: false,
          },
          {
            name: "innerWidth",
            type: "string",
            default: '"200px"',
            description: "Width of the inner revealing image",
            required: false,
          },
          {
            name: "innerHeight",
            type: "string",
            default: '"135px"',
            description: "Height of the inner revealing image",
            required: false,
          },
        ]}
      />
    </div>
  );
}
