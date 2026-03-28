import fs from "fs";
import path from "path";
import NeoBrutalistButtonPreviewWrapper from "./neo-brutalist-button-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Neo Brutalist Button",
  description:
    "A bold, retro-styled button with skewed design, offset shadow, and shimmer effect.",
  image: "/components/buttons/ne0-brutalist.png",
  pathname: "/components/buttons/neo-brutalist-button",
  category: "Buttons",
});

export default function NeoBrutalistButtonPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Neo Brutalist Button",
      description:
        "A bold, retro-styled button with skewed design, offset shadow, and shimmer effect.",
      pathname: "/components/buttons/neo-brutalist-button",
      image: "/components/buttons/ne0-brutalist.png",
      category: "Button UI component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Buttons", path: "/components" },
      {
        name: "Neo Brutalist Button",
        path: "/components/buttons/neo-brutalist-button",
      },
    ]),
  ];
  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/neo-brutalist-button/neo-brutalist-button.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  const demoPath = path.join(
    process.cwd(),
    "app/components/buttons/neo-brutalist-button/neo-brutalist-button-demo.tsx"
  );
  const demoSource = fs
    .readFileSync(demoPath, "utf8")
    .replace(
      "@/registry/chamaac/neo-brutalist-button/neo-brutalist-button",
      "@/components/neo-brutalist-button"
    );

  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NeoBrutalistButtonPreviewWrapper
        title="Neo Brutalist Button"
        description="A bold, retro-styled button with skewed design, offset shadow, and shimmer effect."
        code={demoSource}
        codeFilename="demo.tsx"
        installationSource={componentSource}
        props={[
          {
            name: "text",
            type: "string",
            default: '"Neo Brutalist"',
            description: "The text to display inside the button",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: "-",
            description:
              "Additional CSS classes for styling (colors, shadows, borders, etc.)",
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
