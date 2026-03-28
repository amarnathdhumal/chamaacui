import fs from "fs";
import path from "path";
import GlowingBorderButtonPreviewWrapper from "./glowing-border-button-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Glowing Border Button",
  description:
    "A stylish glowing border button with a gradient border and glowing effects.",
  image: "/components/buttons/glowing-border.png",
  pathname: "/components/buttons/glowing-border-button",
  category: "Buttons",
});

export default function GlowingBorderButtonPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Glowing Border Button",
      description:
        "A stylish glowing border button with a gradient border and glowing effects.",
      pathname: "/components/buttons/glowing-border-button",
      image: "/components/buttons/glowing-border.png",
      category: "Button UI component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Buttons", path: "/components" },
      {
        name: "Glowing Border Button",
        path: "/components/buttons/glowing-border-button",
      },
    ]),
  ];
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/glowing-border-button/glowing-border-button.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  const demoPath = path.join(
    process.cwd(),
    "app/components/buttons/glowing-border-button/glowing-border-button-demo.tsx"
  );
  const demoSource = fs
    .readFileSync(demoPath, "utf8")
    .replace(
      "@/registry/chamaac/glowing-border-button/glowing-border-button",
      "@/components/glowing-border-button"
    );

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlowingBorderButtonPreviewWrapper
        title="Glowing Border Button"
        description="A stylish glowing border button with a gradient border and glowing effects."
        code={demoSource}
        codeFilename="demo.tsx"
        installationSource={componentSource}
        props={[
          {
            name: "className",
            type: "string",
            default: "-",
            description: "Additional CSS classes to style the button",
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
