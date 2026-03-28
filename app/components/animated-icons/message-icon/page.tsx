import MessageIconPreviewWrapper from "./message-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildAnimatedIconMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/animated-icons/message-icon.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/animated-icons/message-icon/message-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = buildAnimatedIconMetadata(
  "Message Icon",
  "/components/animated-icons/message-icon"
);

export default function MessageIconPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Message Icon",
      description:
        "An animated message bubble icon with typing indicator dots.",
      pathname: "/components/animated-icons/message-icon",
      image: "/components/animated-icons.png",
      category: "Animated Icon",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Animated Icons", path: "/components" },
      { name: "Message Icon", path: "/components/animated-icons/message-icon" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MessageIconPreviewWrapper
        title="Message Icon"
        description="An animated message bubble icon with typing indicator dots."
        code={DemoSource}
        codeFilename="message-icon-demo.tsx"
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
            description: "Duration of the typing animation in seconds",
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
        ]}
      />
    </div>
  );
}
