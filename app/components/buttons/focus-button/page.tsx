import FocusButtonPreviewWrapper from "./focus-button-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

export const metadata = buildComponentMetadata({
  title: "Focus Button",
  description:
    "A minimal button with corner dash accents that expand on hover.",
  image: "/components/buttons/focus-button.png",
  pathname: "/components/buttons/focus-button",
  category: "Buttons",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/buttons/focus-button/focus-button.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/buttons/focus-button/focus-button-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./focus-button", "@/components/focus-button");

export default function FocusButtonPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Focus Button",
      description:
        "A minimal button with corner dash accents that expand on hover.",
      pathname: "/components/buttons/focus-button",
      image: "/components/buttons/focus-button.png",
      category: "Button UI component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Buttons", path: "/components" },
      { name: "Focus Button", path: "/components/buttons/focus-button" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FocusButtonPreviewWrapper
        title="Focus Button"
        description="A minimal button with corner dash accents that expand on hover. Perfect for technical or brutalist designs."
        code={DemoSource}
        codeFilename="focus-button-demo.tsx"
        installationSource={ComponentSource}
        props={[
          {
            name: "children",
            type: "React.ReactNode",
            default: "-",
            description: "Button content",
            required: true,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Custom class names for styling",
            required: false,
          },
          {
            name: "dashColor",
            type: "string",
            default: '"black" | "white"',
            description: "Custom color for the corner dashes",
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
