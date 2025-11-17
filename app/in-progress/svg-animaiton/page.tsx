import SvgAnimationPreviewWrapper from "./svg-animation-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/svg-animaiton/svg-animation.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/svg-animaiton/svg-animation-demo.tsx"
);
const SvgAnimationSource = fs.readFileSync(filePath, "utf-8");
const SvgAnimationDemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function SvgAnimationPage() {
    return (
        <div className="flex flex-col w-full">
            <SvgAnimationPreviewWrapper
                title="SVG Animation"
                description="An animated SVG component with gradient animations flowing along curved paths, featuring interactive trend items with icons and a profile image."
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4">
                            <CopyButton text={SvgAnimationDemoSource} />
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
                            {SvgAnimationDemoSource}
                        </SyntaxHighlighter>
                    </div>
                }
                installationSource={SvgAnimationSource}
                props={[
                    {
                        name: "trends",
                        type: "Trend[]",
                        default: "-",
                        description: "Array of trend objects. Each trend should have id (string), name (string), and icon (Icon component from @tabler/icons-react)",
                        required: true,
                    },
                    {
                        name: "imageSrc",
                        type: "string",
                        default: '"/gpt.jpg"',
                        description: "Source path for the profile image displayed on the right side",
                        required: false,
                    },
                    {
                        name: "imageAlt",
                        type: "string",
                        default: '"Trends"',
                        description: "Alt text for the profile image",
                        required: false,
                    },
                    {
                        name: "backgroundColor",
                        type: "string",
                        default: '"bg-black"',
                        description: "Background color class for the component container",
                        required: false,
                    },
                    {
                        name: "delay",
                        type: "number",
                        default: "0.1",
                        description: "Delay in seconds between each trend item animation. Items animate with staggered delays (index * delay)",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
