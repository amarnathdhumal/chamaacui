import ThumbsUpIconPreviewWrapper from "./thumbs-up-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

// file paths
const filePath = path.join(
    process.cwd(),
    "registry/chamaac/animated-icons/thumbs-up-icon.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/animated-icons/thumbs-up-icon/thumbs-up-icon-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8").replace("@/registry/chamaac/animated-icons/", "@/components/");

export const metadata = constructMetadata({
    title: "Thumbs Up Icon",
    description: "An animated thumbs up icon with a fun bounce effect.",
    image: "/components/animated-icons.png",
});

export default function ThumbsUpIconPage() {
    return (
        <div className="flex flex-col w-full">
            <ThumbsUpIconPreviewWrapper
                title="Thumbs Up Icon"
                description="An animated thumbs up icon with a fun bounce effect."
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
                        default: "28",
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
                    {
                        name: "strokeWidth",
                        type: "number",
                        default: "2",
                        description: "Stroke width of the icon",
                        required: false
                    },
                    {
                        name: "isHovered",
                        type: "boolean",
                        default: "false",
                        description: "If true, animation only plays on hover",
                        required: false
                    },
                    {
                        name: "repeatDelay",
                        type: "number",
                        default: "1.2",
                        description: "Delay between animation loops in seconds",
                        required: false,
                    },
                    {
                        name: "ease",
                        type: "Easing",
                        default: '"easeInOut"',
                        description: "Animation easing function (e.g., 'linear', 'easeIn', 'easeOut', 'easeInOut')",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
