import SlideUpButtonPreviewWrapper from "./slide-up-button-preview-wrapper";
import fs from "fs";
import path from "path";
import {
  buildComponentMetadata,
  createBreadcrumbJsonLd,
  createComponentJsonLd,
} from "@/lib/seo";

// file paths
const filePath = path.join(
  process.cwd(),
  "registry/chamaac/slideup-button/slideup-button.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/buttons/slideup-button/slide-up-button-demo.tsx"
);
const SlideUpButtonSource = fs.readFileSync(filePath, "utf-8");
const SlideUpButtonDemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace(
    "@/registry/chamaac/slideup-button/slideup-button",
    "@/components/slideup-button"
  );

export const metadata = buildComponentMetadata({
  title: "Slide Up Button",
  description: "An animated button with a slide-up text effect on hover.",
  image: "/components/slide-up-button.png",
  pathname: "/components/buttons/slideup-button",
  category: "Buttons",
});

export default function SlideUpButtonPage() {
  const jsonLd = [
    createComponentJsonLd({
      name: "Slide Up Button",
      description: "An animated button with a slide-up text effect on hover.",
      pathname: "/components/buttons/slideup-button",
      image: "/components/slide-up-button.png",
      category: "Button UI component",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Components", path: "/components" },
      { name: "Buttons", path: "/components" },
      { name: "Slide Up Button", path: "/components/buttons/slideup-button" },
    ]),
  ];
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SlideUpButtonPreviewWrapper
        title="Slide Up Button"
        description={
          <>
            An animated button with a slide-up text effect on hover, inspired by{" "}
            <a
              href="https://jeton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              jeton.com
            </a>
            . The original text slides up while a clone slides in from below
            with a rotation effect.
          </>
        }
        code={SlideUpButtonDemoSource}
        codeFilename="slide-up-button-demo.tsx"
        installationSource={SlideUpButtonSource}
        props={[
          {
            name: "children",
            type: "React.ReactNode",
            default: "-",
            description: "The content to be displayed inside the button",
            required: true,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Custom class names for styling ",
            required: false,
          },
          {
            name: "textDuration",
            type: "number",
            default: "0.25",
            description:
              "Duration in seconds for the original text slide-up animation",
            required: false,
          },
          {
            name: "cloneDuration",
            type: "number",
            default: "0.5",
            description:
              "Duration in seconds for the clone text slide-in animation",
            required: false,
          },
          {
            name: "cloneDelay",
            type: "number",
            default: "0.12",
            description:
              "Delay in seconds before the clone text animation starts",
            required: false,
          },
          {
            name: "buttonScale",
            type: "number",
            default: "0.98",
            description: "Scale value for the button on hover (1 = no scale)",
            required: false,
          },
          {
            name: "buttonOpacity",
            type: "number",
            default: "0.8",
            description: "Opacity value for the button on hover (0-1)",
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
