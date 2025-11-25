import WavyIconPreviewWrapper from "./wavy-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/animated-icons/wavy-icon/wavy-icon.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/animated-icons/wavy-icon/wavy-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function WavyIconPage() {
    return (
        <div className="flex flex-col w-full">
            <WavyIconPreviewWrapper
                title="Wavy Icon"
                description="An animated wavy icon that simulates a wave effect."
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
                        default: "0.8",
                        description: "Duration of the animation in seconds",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
