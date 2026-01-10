import LocationIconPreviewWrapper from "./location-icon-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

const filePath = path.join(process.cwd(), "registry/chamaac/animated-icons/location-icon.tsx");
const demoFilePath = path.join(process.cwd(), "app/components/animated-icons/location-icon/location-icon-demo.tsx");
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8");

export const metadata = constructMetadata({
    title: "Location Icon",
    description: "An animated location pin icon with a bounce drop effect.",
    image: "/components/animated-icons.png",
});

export default function LocationIconPage() {
    return (
        <div className="flex flex-col w-full">
            <LocationIconPreviewWrapper
                title="Location Icon"
                description="An animated location pin icon with a bounce drop effect."
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4"><CopyButton text={DemoSource} /></div>
                        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines={true} customStyle={{ margin: 0, padding: "1rem", fontSize: "14px", lineHeight: "1.5", width: "100%", maxWidth: "100%", boxSizing: "border-box", overflow: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>{DemoSource}</SyntaxHighlighter>
                    </div>
                }
                installationSource={ComponentSource}
                props={[
                    { name: "className", type: "string", default: "-", description: "Custom class names for styling the SVG", required: false },
                    { name: "size", type: "number", default: "28", description: "Size of the icon in pixels", required: false },
                    { name: "duration", type: "number", default: "1", description: "Duration of the animation in seconds", required: false },
                    { name: "strokeWidth", type: "number", default: "2", description: "Stroke width of the icon", required: false },
                    {
                        name: "isHovered",
                        type: "boolean",
                        default: "false",
                        description: "When true, animation only plays on hover. When false, animation loops continuously.",
                        required: false,
                    },
                    {
                        name: "ease",
                        type: "Easing",
                        default: '"easeOut"',
                        description: "Animation easing function (e.g., 'linear', 'easeIn', 'easeOut', 'easeInOut')",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
