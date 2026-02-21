import DancingLettersPreviewWrapper from "./dancing-letters-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Dancing Letters",
  description: "Physics-based interactive text animations.",
  image: "/components/text-animations/dancing-letters.png",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/text-animations/dancing-letters/dancing-letters.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/text-animations/dancing-letters/dancing-letters-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./dancing-letters", "@/components/dancing-letters");

export default function DancingLettersPage() {
  return (
    <div className="flex flex-col w-full">
      <DancingLettersPreviewWrapper
        title="Dancing Letters"
        description="Physics-based interactive text animations."
        code={DemoSource}
        codeFilename="dancing-letters-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "text",
            type: "string",
            default: '"ANIMATE"',
            description:
              "The text to display and animate. Each letter gets a unique animation.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container",
            required: false,
          },
          {
            name: "letterClassName",
            type: "string",
            default: '""',
            description: "Additional CSS classes applied to each letter",
            required: false,
          },
        ]}
      />
    </div>
  );
}
