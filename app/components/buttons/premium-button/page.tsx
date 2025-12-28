import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import PremiumButtonPreviewWrapper from "./premium-button-preview-wrapper";

export default function PremiumButtonPage() {
    const componentPath = path.join(
        process.cwd(),
        "app/components/buttons/premium-button/premium-button.tsx"
    );
    const componentSource = fs.readFileSync(componentPath, "utf8");

    const demoPath = path.join(
        process.cwd(),
        "app/components/buttons/premium-button/premium-button-demo.tsx"
    );
    const demoSource = fs.readFileSync(demoPath, "utf8");

    return (
        <div className="">
            <PremiumButtonPreviewWrapper
                title="Premium Button"
                description={
                    <>
                        A high-quality button with a dynamic arrow animation. Inspired by{" "}
                        <a
                            href="https://x.com/rolledpipe/status/1981067656473301194"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            Roshan
                        </a>
                        .
                    </>
                }
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
                        default: '"Premium Button"',
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
                ]}
            />
        </div>
    );
}