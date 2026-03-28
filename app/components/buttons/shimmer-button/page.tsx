import fs from "fs";
import path from "path";
import ShimmerButtonPreviewWrapper from "./shimmer-button-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Shimmer Button",
  description: "A button with a shimmering text animation effect.",
  image: "/components/buttons/shimmer.png",
  pathname: "/components/buttons/shimmer-button",
  category: "Buttons",
});

export default function ShimmerButtonPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Shimmer Button",
      description: "A button with a shimmering text animation effect.",
      pathname: "/components/buttons/shimmer-button",
      image: "/components/buttons/shimmer.png",
      category: "Button UI component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Buttons", path: "/components" },
      { name: "Shimmer Button", path: "/components/buttons/shimmer-button" },
    ]),
  ];
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/shimmer-button/shimmer-button.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  const demoPath = path.join(
    process.cwd(),
    "app/components/buttons/shimmer-button/shimmer-button-demo.tsx"
  );
  const demoSource = fs
    .readFileSync(demoPath, "utf8")
    .replace(
      "@/registry/chamaac/shimmer-button/shimmer-button",
      "@/components/shimmer-button"
    );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShimmerButtonPreviewWrapper
        title="Shimmer Button"
        description="A button with a shimmering text animation effect."
        code={demoSource}
        codeFilename="demo.tsx"
        installationSource={componentSource}
        props={[
          {
            name: "text",
            type: "string",
            default: '"Book a Free Call"',
            description: "The text to display inside the button",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes for the button",
            required: false,
          },
          {
            name: "duration",
            type: "number",
            default: "1.2",
            description: "Duration of the animation cycle in seconds",
            required: false,
          },
          {
            name: "onClick",
            type: "() => void",
            default: "-",
            description: "Click handler function",
            required: false,
          },
        ]}
      />
    </div>
  );
}
