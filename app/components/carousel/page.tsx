import CourselPreviewWrapper from "./coursel-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/carousel/coursel.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/carousel/coursel-demo.tsx"
);
const CourselSource = fs.readFileSync(filePath, "utf-8");
const CourselDemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function CourselPage() {
    return (
        <div className="flex flex-col w-full">
            <CourselPreviewWrapper
                title="Carousel"
                description="A smooth, auto-playing 3D carousel component with layout animations using Framer Motion."
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4">
                            <CopyButton text={CourselDemoSource} />
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
                            {CourselDemoSource}
                        </SyntaxHighlighter>
                    </div>
                }
                installationSource={CourselSource}
                props={[
                    {
                        name: "images",
                        type: "string[]",
                        default: "defaultImages",
                        description: "Array of image URLs to display in the carousel",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: '""',
                        description: "Custom class names for the carousel container",
                        required: false,
                    },
                    {
                        name: "cardWidth",
                        type: "string | number",
                        default: '"250px"',
                        description: "Width of each carousel card",
                        required: false,
                    },
                    {
                        name: "cardHeight",
                        type: "string | number",
                        default: '"284px"',
                        description: "Height of each carousel card",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}