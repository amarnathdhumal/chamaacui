import HeartIconPreviewWrapper from "./heart-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildAnimatedIconMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

const filePath = path.join(
  process.cwd(),
  "registry/chamaac/animated-icons/heart-icon.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/animated-icons/heart-icon/heart-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = buildAnimatedIconMetadata(
  "Heart Icon",
  "/components/animated-icons/heart-icon"
);

export default function HeartIconPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Heart Icon",
      description: "An animated heart icon that beats.",
      pathname: "/components/animated-icons/heart-icon",
      image: "/components/animated-icons.png",
      category: "Animated Icon",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Animated Icons", path: "/components" },
      { name: "Heart Icon", path: "/components/animated-icons/heart-icon" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeartIconPreviewWrapper
        title="Heart Icon"
        description="An animated heart icon that beats."
        code={DemoSource}
        codeFilename="heart-icon-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Custom class names for styling the SVG",
            required: false,
          },
          {
            name: "size",
            type: "number",
            default: "24",
            description: "Size of the icon in pixels",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "0.8",
            description: "Duration of the animation in seconds",
            required: false,
          },
          {
            name: "strokeWidth",
            type: "number",
            default: "2",
            description: "Stroke width of the icon",
            required: false,
          },
          {
            name: "isHovered",
            type: "boolean",
            default: "false",
            description:
              "When true, animation only plays on hover. When false, animation loops continuously.",
            required: false,
          },
        ]}
      />
    </div>
  );
}
