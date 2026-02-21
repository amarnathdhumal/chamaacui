import fs from "fs";
import path from "path";
import GlowingBorderButtonPreviewWrapper from "./glowing-border-button-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Glowing Border Button",
  description:
    "A stylish glowing border button with a gradient border and glowing effects.",
  image: "/components/buttons/glowing-border.png",
});

export default function GlowingBorderButtonPage() {
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
