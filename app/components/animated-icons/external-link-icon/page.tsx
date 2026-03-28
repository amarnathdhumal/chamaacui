import ExternalLinkIconPreviewWrapper from "./external-link-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildAnimatedIconMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

const filePath = path.join(
  process.cwd(),
  "registry/chamaac/animated-icons/external-link-icon.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/animated-icons/external-link-icon/external-link-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = buildAnimatedIconMetadata(
  "External Link Icon",
  "/components/animated-icons/external-link-icon"
);

export default function ExternalLinkIconPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "External Link Icon",
      description: "An animated external link icon.",
      pathname: "/components/animated-icons/external-link-icon",
      image: "/components/animated-icons.png",
      category: "Animated Icon",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Animated Icons", path: "/components" },
      {
        name: "External Link Icon",
        path: "/components/animated-icons/external-link-icon",
      },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExternalLinkIconPreviewWrapper
        title="External Link Icon"
        description="An animated external link icon."
        code={DemoSource}
        codeFilename="external-link-icon-demo.tsx"
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
            default: "28",
            description: "Size of the icon in pixels",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "1.5",
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
            description: "If true, animation only plays on hover",
            required: false,
          },
          {
            name: "repeatDelay",
            type: "number",
            default: "1",
            description: "Delay between animation loops in seconds",
            required: false,
          },
          {
            name: "ease",
            type: "Easing",
            default: '"easeInOut"',
            description: "Animation easing function",
            required: false,
          },
        ]}
      />
    </div>
  );
}
