import DancingLettersPreviewWrapper from "./dancing-letters-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/dancing-letters/dancing-letters.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/dancing-letters/dancing-letters-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function DancingLettersPage() {
    return (
        <div className="flex flex-col w-full">
            <DancingLettersPreviewWrapper
                title="Dancing Letters"
                description="Physics-based interactive text animations."
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
                        name: "text",
                        type: "string",
                        default: '"ANIMATE"',
                        description:
                            "The text to display and animate. Each letter gets a unique animation.",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: '""',
                        description: "Additional CSS classes for the container",
                        required: false,
                    },
                    {
                        name: "letterClassName",
                        type: "string",
                        default: '""',
                        description:
                            "Additional CSS classes applied to each letter",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
