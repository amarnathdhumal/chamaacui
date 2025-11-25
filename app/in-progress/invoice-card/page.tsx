import InvoiceCardPreviewWrapper from "./invoice-card-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";

// file paths
const filePath = path.join(
    process.cwd(),
    "app/in-progress/invoice-card/invoice-card.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/in-progress/invoice-card/invoice-card-demo.tsx"
);
const InvoiceCardSource = fs.readFileSync(filePath, "utf-8");
const InvoiceCardDemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function InvoiceCardPage() {
    return (
        <div className="flex flex-col w-full">
            <InvoiceCardPreviewWrapper
                title="Invoice Card"
                description="An animated invoice card component with a slide-up animation and staggered content reveal, featuring a dotted border background and skeleton loading placeholders."
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4">
                            <CopyButton text={InvoiceCardDemoSource} />
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
                            {InvoiceCardDemoSource}
                        </SyntaxHighlighter>
                    </div>
                }
                installationSource={InvoiceCardSource}
                props={[
                    {
                        name: "title",
                        type: "string",
                        default: '"Invoice"',
                        description: "The title displayed at the top of the invoice card",
                        required: false,
                    },
                    {
                        name: "total",
                        type: "number",
                        default: "-",
                        description: "The total amount to be displayed prominently at the top of the invoice",
                        required: true,
                    },
                    {
                        name: "originalAmount",
                        type: "number",
                        default: "-",
                        description: "Optional original amount to show a crossed-out price (for discounts)",
                        required: false,
                    },
                    {
                        name: "items",
                        type: "Item[]",
                        default: "-",
                        description: "Array of invoice items. Each item should have name (string), description (string), and price (number)",
                        required: true,
                    },
                    {
                        name: "taxRate",
                        type: "number",
                        default: "0",
                        description: "Tax rate as a percentage (e.g., 10 for 10%). If 0, tax line will not be displayed",
                        required: false,
                    },
                    {
                        name: "taxLabel",
                        type: "string",
                        default: '"Tax"',
                        description: "Label for the tax line item",
                        required: false,
                    },
                    {
                        name: "delay",
                        type: "number",
                        default: "0.1",
                        description: "Delay in seconds between each animation. Line items animate with staggered delays (index * delay), summary items appear after all line items",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: '""',
                        description: "Custom class names for styling the card container",
                        required: false,
                    },
                ]}
            />
        </div>
    );
}
