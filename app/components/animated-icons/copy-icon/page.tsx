import CopyIconPreviewWrapper from "./copy-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/animated-icons/copy-icon/copy-icon.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/animated-icons/copy-icon/copy-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function CopyIconPage() {
    return (
        <div className="flex flex-col w-full">
            <CopyIconPreviewWrapper
                title="Copy Icon"
                description="An animated copy icon that simulates the action of copying."
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4">
                            <CopyButton text={DemoSource} />
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
                            {DemoSource}
                        </SyntaxHighlighter>
                    </div>
                }
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
                        default: "24",
                        description: "Size of the icon in pixels",
                        required: false,
                    },
                    {
                        name: "duration",
                        type: "number",
                        default: "1.5",
                        description: "Duration of the animation in seconds",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
