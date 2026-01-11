import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import NeoBrutalistButtonPreviewWrapper from "./neo-brutalist-button-preview-wrapper";

import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "Neo Brutalist Button",
    description: "A bold, retro-styled button with skewed design, offset shadow, and shimmer effect.",
    image: "/components/buttons/ne0-brutalist.png",
});

export default function NeoBrutalistButtonPage() {
    const componentPath = path.join(
        process.cwd(),
        "registry/chamaac/neo-brutalist-button/neo-brutalist-button.tsx"
    );
    const componentSource = fs.readFileSync(componentPath, "utf8");

    const demoPath = path.join(
        process.cwd(),
        "app/components/buttons/neo-brutalist-button/neo-brutalist-button-demo.tsx"
    );
    const demoSource = fs.readFileSync(demoPath, "utf8");

    return (
        <div className="pb-20">
            <NeoBrutalistButtonPreviewWrapper
                title="Neo Brutalist Button"
                description="A bold, retro-styled button with skewed design, offset shadow, and shimmer effect."
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
                        default: '"Neo Brutalist"',
                        description: "The text to display inside the button",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: "-",
                        description: "Additional CSS classes for styling (colors, shadows, borders, etc.)",
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
