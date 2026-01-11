import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import InteractiveGridPreviewWrapper from "./interactive-grid-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "Interactive Grid Background",
    description: "A highly interactive, mouse-sensitive grid background.",
    image: "/components/backgrounds.png",
});

export default function InteractiveGridPage() {
    const componentPath = path.join(
        process.cwd(),
        "registry/chamaac/backgrounds/interactive-grid-background.tsx"
    );
    const componentSource = fs.readFileSync(componentPath, "utf8");

    const demoPath = path.join(
        process.cwd(),
        "app/components/backgrounds/interactive-grid/interactive-grid-demo.tsx"
    );
    const demoSource = fs.readFileSync(demoPath, "utf8");

    return (
        <div className="pb-20">
            <InteractiveGridPreviewWrapper
                title="Interactive Grid Background"
                description="A highly interactive, mouse-sensitive grid background rendered on HTML5 Canvas."
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4">
                            <CopyButton text={demoSource} />
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
                            {demoSource}
                        </SyntaxHighlighter>
                    </div>
                }
                installationSource={componentSource}
                props={[
                    {
                        name: "gridGap",
                        type: "number",
                        default: "40",
                        description: "Distance between grid dots in pixels",
                        required: false,
                    },
                    {
                        name: "dotSize",
                        type: "number",
                        default: "1.5",
                        description: "Radius of the dots",
                        required: false,
                    },
                    {
                        name: "radius",
                        type: "number",
                        default: "300",
                        description: "Radius of the mouse interaction zone",
                        required: false,
                    },
                    {
                        name: "color",
                        type: "string",
                        default: '"#737373"',
                        description: "Base color of the dots",
                        required: false,
                    },
                    {
                        name: "highlightColor",
                        type: "string",
                        default: '"#FFFF00"',
                        description: "Color of the dots active hover",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
