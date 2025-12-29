import FeatureStepsPreviewWrapper from "./feature-steps-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "Feature Steps",
    description: "A dynamic feature showcase component with auto-playing steps and synchronized image transitions.",
    image: "/components/features-step.png",
});

// file paths
const filePath = path.join(
    process.cwd(),
    "app/components/feature-steps/feature-steps.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/feature-steps/feature-steps-demo.tsx"
);
const ComponentSource = fs.readFileSync(filePath, "utf-8");
const DemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function FeatureStepsPage() {
    return (
        <div className="flex flex-col w-full">
            <FeatureStepsPreviewWrapper
                title="Feature Steps"
                description={
                    <>
                        A dynamic feature showcase component with auto-playing steps and synchronized image transitions. Inspired from{" "}
                        <a
                            href="https://opensox.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            Opensox
                        </a>
                        .
                    </>
                }
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
                        name: "features",
                        type: "Feature[]",
                        default: "-",
                        description: "Array of feature objects containing title, content, and image.",
                        required: true,
                    },
                    {
                        name: "autoPlayInterval",
                        type: "number",
                        default: "6000",
                        description: "Interval in milliseconds for auto-playing steps.",
                        required: false,
                    },
                    {
                        name: "imageClassName",
                        type: "string",
                        default: '"h-[400px]"',
                        description: "Tailwind class for the height of the image container, useful for mobile responsiveness.",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: '""',
                        description: "Additional classes for the container.",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
