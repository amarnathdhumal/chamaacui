import SendIconPreviewWrapper from "./send-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildAnimatedIconMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

const filePath = path.join(
  process.cwd(),
  "registry/chamaac/animated-icons/send-icon.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/animated-icons/send-icon/send-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = buildAnimatedIconMetadata(
  "Send Icon",
  "/components/animated-icons/send-icon"
);

export default function SendIconPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Send Icon",
      description:
        "An animated send icon with a launch-ready rotation and scale effect.",
      pathname: "/components/animated-icons/send-icon",
      image: "/components/animated-icons.png",
      category: "Animated Icon",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Animated Icons", path: "/components" },
      { name: "Send Icon", path: "/components/animated-icons/send-icon" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SendIconPreviewWrapper
        title="Send Icon"
        description="An animated send icon with a launch-ready rotation and scale effect."
        code={DemoSource}
        codeFilename="send-icon-demo.tsx"
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
            default: "1",
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
            description:
              "Animation easing function (e.g., 'linear', 'easeIn', 'easeOut', 'easeInOut')",
            required: false,
          },
        ]}
      />
    </div>
  );
}
