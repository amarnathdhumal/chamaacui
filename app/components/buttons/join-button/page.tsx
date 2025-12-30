import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import JoinButtonPreviewWrapper from "./join-button-preview-wrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "Join Button",
    description: "A stylish join button with a gradient border and glowing effects.",
    image: "/components/buttons.png",
});

export default function JoinButtonPage() {
    const componentPath = path.join(
        process.cwd(),
        "app/components/buttons/join-button/join-button.tsx"
    );
    const componentSource = fs.readFileSync(componentPath, "utf8");

    const demoPath = path.join(
        process.cwd(),
        "app/components/buttons/join-button/join-button-demo.tsx"
    );
    const demoSource = fs.readFileSync(demoPath, "utf8");

    return (
        <div className="">
            <JoinButtonPreviewWrapper
                title="Join Button"
                description="A stylish join button with a gradient border and glowing effects."
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
                props={[]}
            />
        </div>
    );
}
