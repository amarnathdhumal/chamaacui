import DockPreviewWrapper from "./dock-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/dock/dock.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/dock/dock-demo.tsx"
);
const DockSource = fs.readFileSync(filePath, "utf-8");
const DockDemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function DockPage() {
    return (
        <div className="flex flex-col w-full">
            <DockPreviewWrapper
                title="Dock"
                description="A macOS-style dock navigation component with animated dropdown menus, hover effects, and image previews. Features smooth transitions and interactive menu items."
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4">
                            <CopyButton text={DockDemoSource} />
                        </div>
                        <SyntaxHighlighter
                            language="tsx"
                            style={oneDark}
                            wrapLongLines={true}
                            customStyle={{
                                margin: 0,
                                padding: "1rem",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                width: "100%",
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                overflow: "auto",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {DockDemoSource}
                        </SyntaxHighlighter>
                    </div>
                }
                installationSource={DockSource}
                props={[
                    {
                        name: "homeHref",
                        type: "string",
                        default: '"/"',
                        description: "URL path for the home button",
                        required: false,
                    },
                    {
                        name: "personalMenu",
                        type: "MenuGroup",
                        default: "-",
                        description: "Menu group configuration for personal menu items. Each MenuGroup has a label and items array. Each MenuItem has label, href, and optional image.",
                        required: false,
                    },
                    {
                        name: "companyMenu",
                        type: "MenuGroup",
                        default: "-",
                        description: "Menu group configuration for company menu items. Each MenuGroup has a label and items array. Each MenuItem has label, href, and optional image.",
                        required: false,
                    },
                    {
                        name: "businessHref",
                        type: "string",
                        default: '"/company"',
                        description: "URL path for the business link",
                        required: false,
                    },
                    {
                        name: "linkImages",
                        type: "Record<string, string>",
                        default: "{}",
                        description: "Object mapping menu item hrefs to image paths. Used to display preview images when hovering over menu items.",
                        required: false,
                    },
                    {
                        name: "closeDelay",
                        type: "number",
                        default: "100",
                        description: "Delay in milliseconds before closing dropdown menus when mouse leaves",
                        required: false,
                    },
                    {
                        name: "bottomOffset",
                        type: "string",
                        default: '"60px"',
                        description: "CSS value for the bottom offset of the dock navigation",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}

