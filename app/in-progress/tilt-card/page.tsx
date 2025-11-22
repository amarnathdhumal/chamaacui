import TiltCardDemo from "./tilt-card-demo";
import fs from "fs";
import path from "path";
import ViewArea from "@/components/ui/view-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import InstallationSection from "@/components/ui/installation-section";
import PropsTable from "@/components/ui/props-table";

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/tilt-card/tilt-card.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/tilt-card/tilt-card-demo.tsx"
);
const TiltCardSource = fs.readFileSync(filePath, "utf-8");
const TiltCardDemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function TiltCardPage() {
  return (
    <div className="flex flex-col w-full">
      <ViewArea
        title="Tilt Card"
        description="A card component with a smooth tilt animation on hover that rotates from an initial angle to straight, creating an engaging interactive effect."
        preview={<TiltCardDemo />}
        code={
          <div className="relative">
            <div className="absolute top-4 right-4">
              <CopyButton text={TiltCardDemoSource} />
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
              {TiltCardDemoSource}
            </SyntaxHighlighter>
          </div>
        }
      />

      {/* Installation Section */}
      <InstallationSection componentSource={TiltCardSource} />

      {/* Props Section */}
      <PropsTable
        props={[
          {
            name: "features",
            type: "Feature[]",
            default: "-",
            description: "Array of feature objects with icon, title, and description. Each feature should have an icon (Icon component), title (string), and description (string)",
            required: true,
          },
          {
            name: "initialRotate",
            type: "number",
            default: "7.1",
            description: "Initial rotation angle in degrees. The card starts at this angle and rotates to hoverRotate on hover",
            required: false,
          },
          {
            name: "hoverRotate",
            type: "number",
            default: "0",
            description: "Rotation angle in degrees when hovering over the card",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "0.3",
            description: "Duration of the animation transition in seconds",
            required: false,
          },
          {
            name: "stiffness",
            type: "number",
            default: "100",
            description: "Spring stiffness value. Higher values create a stiffer spring",
            required: false,
          },
          {
            name: "damping",
            type: "number",
            default: "5",
            description: "Spring damping value. Higher values reduce oscillation",
            required: false,
          },
        ]}
      />
    </div>
  );
}

