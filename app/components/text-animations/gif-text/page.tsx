import GifTextPreviewWrapper from "./gif-text-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "Gif Text",
    description: "A stunning text effect that uses a GIF as the fill color.",
    image: "/components/text-animations/gif-text.png",
});

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/text-animations/gif-text/gif-text.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/text-animations/gif-text/gif-text-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8").replace("./gif-text", "@/components/gif-text");

export default function GifTextPage() {
    return (
        <div className="flex flex-col w-full">
            <GifTextPreviewWrapper
                title="Gif Text"
                description="A stunning text effect that uses a GIF as the fill color."
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
                        default: '"CHAMAAC"',
                        description: "The text content to mask the video.",
                        required: false,
                    },
                    {
                        name: "gif",
                        type: "string",
                        default: "URL",
                        description: "The source URL of the background image or GIF.",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: "undefined",
                        description: "Additional classes for the text element.",
                        required: false,
                    },
                    {
                        name: "containerClassName",
                        type: "string",
                        default: "undefined",
                        description: "Additional classes for the container.",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}