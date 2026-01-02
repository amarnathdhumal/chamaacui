import TextLoopPreviewWrapper from "./text-loop-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "Text Loop",
    description: "An animated text loop with typewriter and gradient effect.",
    image: "/components/text-loop.svg",
});

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/text-loop/text-loop.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/text-loop/text-loop-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function TextLoopPage() {
    return (
        <div className="flex flex-col w-full">
            <TextLoopPreviewWrapper
                title="Text Loop"
                description="An animated text loop that cycles through a list of words with a typewriter and gradient effect."
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
                        name: "staticText",
                        type: "string",
                        default: '"Design"',
                        description: "The static text that appears before the animating loop.",
                        required: false,
                    },
                    {
                        name: "rotatingTexts",
                        type: "string[]",
                        default: '["Limitless", "Timeless", "Flawless"]',
                        description: "The list of words to cycle through.",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: '""',
                        description: "Additional CSS classes for the container.",
                        required: false,
                    },
                    {
                        name: "interval",
                        type: "number",
                        default: "3000",
                        description: "Time in milliseconds between word changes.",
                        required: false,
                    },
                    {
                        name: "transition",
                        type: "Transition",
                        default: '{ duration: 0.8, ease: "easeInOut" }',
                        description: "Motion transition object for the animation.",
                        required: false,
                    },
                    {
                        name: "staticTextClassName",
                        type: "string",
                        default: '""',
                        description: "Additional CSS classes for the static text.",
                        required: false,
                    },
                    {
                        name: "rotatingTextClassName",
                        type: "string",
                        default: '""',
                        description: "Additional CSS classes for the rotating text (use to override gradient).",
                        required: false,
                    },
                    {
                        name: "backgroundClassName",
                        type: "string",
                        default: '""',
                        description: "Additional CSS classes for the background gradient box.",
                        required: false,
                    },
                    {
                        name: "cursorClassName",
                        type: "string",
                        default: '""',
                        description: "Additional CSS classes for the cursor line (width, color).",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
