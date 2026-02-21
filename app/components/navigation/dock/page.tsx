import DockPreviewWrapper from "./dock-preview-wrapper";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Dock",
  description:
    "A dock navigation component with animated dropdown menus, hover effects, and image previews.",
  image: "/components/navigation/dock.png",
});

// file paths
const filePath = path.join(
  process.cwd(),
  "app/components/navigation/dock/dock.tsx"
);
const demoFilePath = path.join(
  process.cwd(),
  "app/components/navigation/dock/dock-demo.tsx"
);
const DockSource = fs.readFileSync(filePath, "utf-8");
const DockDemoSource = fs
  .readFileSync(demoFilePath, "utf-8")
  .replace("./dock", "@/components/dock");

export default function DockPage() {
  return (
    <div className="flex flex-col w-full">
      <DockPreviewWrapper
        title="Dock"
        description={
          <>
            A dock navigation component with animated dropdown menus, hover
            effects, and image previews. Features smooth transitions and
            interactive menu items. Inspired by{" "}
            <a
              href="https://jeton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              jeton.com
            </a>
            .
          </>
        }
        code={DockDemoSource}
        codeFilename="dock-demo.tsx"
        installationSource={DockSource}
        props={[
          {
            name: "children",
            type: "React.ReactNode",
            default: "-",
            description:
              "Dock items as children. Use DockIcon, DockItem (for dropdowns), and DockLink components to compose the dock navigation.",
            required: true,
          },
          {
            name: "closeDelay",
            type: "number",
            default: "100",
            description:
              "Delay in milliseconds before closing dropdown menus when mouse leaves",
            required: false,
          },
          {
            name: "bottomOffset",
            type: "string",
            default: '"60px"',
            description:
              "CSS value for the bottom offset of the dock navigation",
            required: false,
          },
          {
            name: "activePage",
            type: "string",
            default: "-",
            description:
              "Optional path to determine which menu items should be marked as active. If not provided, uses the current pathname from Next.js router.",
            required: false,
          },
          {
            name: "className",
            type: "string",
            default: '""',
            description: "Custom class names for styling the dock container",
            required: false,
          },
        ]}
        subComponents={[
          {
            name: "DockIcon",
            description: "Icon button component for the dock",
            props: [
              {
                name: "icon",
                type: "React.ReactNode",
                default: "-",
                description: "SVG icon or React element to display",
                required: true,
              },
              {
                name: "href",
                type: "string",
                default: "-",
                description: "URL to navigate to when clicked",
                required: true,
              },
              {
                name: "className",
                type: "string",
                default: '""',
                description: "Custom class names for styling",
                required: false,
              },
            ],
          },
          {
            name: "DockItem",
            description: "Dropdown menu component for the dock",
            props: [
              {
                name: "label",
                type: "string",
                default: "-",
                description: "Label text for the dropdown trigger",
                required: true,
              },
              {
                name: "children",
                type: "React.ReactNode",
                default: "-",
                description:
                  "DockDropdownItem components to display in the dropdown menu",
                required: true,
              },
              {
                name: "id",
                type: "string",
                default: "-",
                description:
                  "Optional unique identifier. If not provided, generated from label.",
                required: false,
              },
              {
                name: "className",
                type: "string",
                default: '""',
                description: "Custom class names for styling",
                required: false,
              },
            ],
          },
          {
            name: "DockDropdownItem",
            description: "Individual item within a DockItem dropdown",
            props: [
              {
                name: "label",
                type: "string",
                default: "-",
                description: "Label text for the menu item",
                required: true,
              },
              {
                name: "href",
                type: "string",
                default: "-",
                description: "URL to navigate to when clicked",
                required: true,
              },
              {
                name: "image",
                type: "string",
                default: "-",
                description:
                  "Optional image URL to display as preview when hovering or when active",
                required: false,
              },
              {
                name: "className",
                type: "string",
                default: '""',
                description: "Custom class names for styling",
                required: false,
              },
            ],
          },
          {
            name: "DockLink",
            description: "Link button component for the dock",
            props: [
              {
                name: "label",
                type: "string",
                default: "-",
                description: "Label text for the link",
                required: true,
              },
              {
                name: "href",
                type: "string",
                default: "-",
                description: "URL to navigate to when clicked",
                required: true,
              },
              {
                name: "icon",
                type: "React.ReactNode",
                default: "-",
                description: "Optional icon to display next to the label",
                required: false,
              },
              {
                name: "external",
                type: "boolean",
                default: "false",
                description: "Whether the link opens in a new tab",
                required: false,
              },
              {
                name: "className",
                type: "string",
                default: '""',
                description: "Custom class names for styling",
                required: false,
              },
            ],
          },
        ]}
      />
    </div>
  );
}
