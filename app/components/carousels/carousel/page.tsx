import CourselPreviewWrapper from "./coursel-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Carousel",
  description:
    "A smooth, auto-playing 3D carousel component with layout animations using Framer Motion.",
  image: "/components/carousel.png",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/carousel/carousel.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/carousels/carousel/coursel-demo.tsx"
);
const CourselSource = fs.readFileSync(filePath, "utf-8");
const CourselDemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./coursel", "@/components/carousel");

export default function CourselPage() {
  return (
    <div className="flex flex-col w-full">
      <CourselPreviewWrapper
        title="Carousel"
        description="A smooth, auto-playing 3D carousel component with layout animations using Framer Motion."
        code={CourselDemoSource}
        codeFilename="coursel-demo.tsx"
        installationSource={CourselSource}
        props={[
          {
            name: "images",
            type: "string[]",
            default: "-",
            description: "Array of image URLs to display in the carousel",
            required: true,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Custom class names for the carousel container",
            required: false,
          },
          {
            name: "cardWidth",
            type: "string | number",
            default: '"250px"',
            description: "Width of each carousel card",
            required: false,
          },
          {
            name: "cardHeight",
            type: "string | number",
            default: '"284px"',
            description: "Height of each carousel card",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "0.5",
            description: "Animation duration in seconds for card transitions",
            required: false,
          },
          {
            name: "rotationAngle",
            type: "number",
            default: "45",
            description:
              "3D rotation angle in degrees for side cards (rotateY)",
            required: false,
          },
        ]}
      />
    </div>
  );
}
