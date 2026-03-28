import fs from "fs";
import path from "path";
import PremiumButtonPreviewWrapper from "./premium-button-preview-wrapper";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Premium Button",
  description: "A high-quality button with a dynamic arrow animation.",
  image: "/components/buttons/premium-button.png",
  pathname: "/components/buttons/premium-button",
  category: "Buttons",
  keywords: [
    "Premium React buttons",
    "Animated button components",
    "Interactive UI buttons",
    "Tailwind CSS buttons",
  ],
});

export default function PremiumButtonPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Premium Button",
      description: "A high-quality button with a dynamic arrow animation.",
      pathname: "/components/buttons/premium-button",
      image: "/components/buttons/premium-button.png",
      category: "Button component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Buttons", path: "/components/buttons" },
      { name: "Premium Button", path: "/components/buttons/premium-button" },
    ]),
  ];

  const componentPath = path.join(
    process.cwd(),
    "registry/chamaac/premium-button/premium-button.tsx"
  );
  const componentSource = fs.readFileSync(componentPath, "utf8");

  const demoPath = path.join(
    process.cwd(),
    "app/components/buttons/premium-button/premium-button-demo.tsx"
  );
  const demoSource = fs
    .readFileSync(demoPath, "utf8")
    .replace(
      "@/registry/chamaac/premium-button/premium-button",
      "@/components/premium-button"
    );

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PremiumButtonPreviewWrapper
        title="Premium Button"
        description={
          <>
            A high-quality button with a dynamic arrow animation. Inspired by{" "}
            <a
              href="https://x.com/rolledpipe/status/1981067656473301194"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Roshan
            </a>
            .
          </>
        }
        code={demoSource}
        codeFilename="demo.tsx"
        installationSource={componentSource}
        props={[
          {
            name: "text",
            type: "string",
            default: '"Premium Button"',
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
