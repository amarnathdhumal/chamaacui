import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import ShimmerButtonPreviewWrapper from "./shimmer-button-preview-wrapper";

export default function ShimmerButtonPage() {
    const componentPath = path.join(
        process.cwd(),
        "app/components/buttons/shimmer-button/shimmer-button.tsx"
    );
    const componentSource = fs.readFileSync(componentPath, "utf8");

    const demoPath = path.join(
        process.cwd(),
        "app/components/buttons/shimmer-button/shimmer-button-demo.tsx"
    );
    const demoSource = fs.readFileSync(demoPath, "utf8");

    return (
        <div className="pb-20">
            <ShimmerButtonPreviewWrapper
                title="Shimmer Button"
                description="A button with a shimmering text animation effect."
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
                        name: "text",
                        type: "string",
                        default: '"Book a Free Call"',
                        description: "The text to display inside the button",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: "-",
                        description: "Additional CSS classes for the button",
                        required: false,
                    },
                    {
                        name: "duration",
                        type: "number",
                        default: "1.2",
                        description: "Duration of the animation cycle in seconds",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}