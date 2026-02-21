import OrbitingIconsPreviewWrapper from "./orbiting-icons-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Orbiting Icons",
  description:
    "A dynamic, rotating card component that displays a circular array of icons with smooth animations.",
  image: "/components/orbiting-icons.png",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/orbiting-icons/orbiting-icons.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/orbiting-icons/orbiting-icons-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./orbiting-icons", "@/components/orbiting-icons");

export default function OrbitingIconsPage() {
  return (
    <div className="flex flex-col w-full">
      <OrbitingIconsPreviewWrapper
        title="Orbiting Icons"
        description="A dynamic, rotating card component that displays a circular array of icons with smooth animations."
        code={DemoSource}
        codeFilename="orbiting-icons-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "icons",
            type: "string[]",
            default: "-",
            description: "Array of icon URLs to display in the rotating circle",
            required: true,
          },
          {
            name: "radius",
            type: "number",
            default: "300",
            description: "Radius of the circular path in pixels",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "40",
            description: "Duration of the full rotation in seconds",
            required: false,
          },
          {
            name: "title",
            type: "string",
            default: '"Automate Your Workflow"',
            description: "Title text to display at the bottom of the card",
            required: false,
          },
          {
            name: "description",
            type: "string",
            default: '"Connect your favorite tools..."',
            description: "Description text to display below the title",
            required: false,
          },
        ]}
      />
    </div>
  );
}
