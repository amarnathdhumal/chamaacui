import FocusButtonPreviewWrapper from "./focus-button-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "Focus Button",
    description: "A minimal button with corner dash accents that expand on hover.",
    image: "/components/buttons/focus-button.png",
});

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/buttons/focus-button/focus-button.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/buttons/focus-button/focus-button-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8");



export default function FocusButtonPage() {
    return (
        <div className="flex flex-col w-full">
            <FocusButtonPreviewWrapper
                title="Focus Button"
                description="A minimal button with corner dash accents that expand on hover. Perfect for technical or brutalist designs."
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
                        name: "children",
                        type: "React.ReactNode",
                        default: "-",
                        description: "Button content",
                        required: true,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: '""',
                        description: "Custom class names for styling",
                        required: false,
                    },
                    {
                        name: "dashColor",
                        type: "string",
                        default: '"black" | "white"',
                        description: "Custom color for the corner dashes",
                        required: false,
                    },
                    {
                        name: "onClick",
                        type: "() => void",
                        default: "-",
                        description: "Click handler function",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
