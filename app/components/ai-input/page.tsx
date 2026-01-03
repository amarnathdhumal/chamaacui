import AIInputPreviewWrapper from "./ai-input-preview-wrapper";
import fs from "fs";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
    title: "AI Input",
    description: "A polished AI input component with model selection, tools, file uploads, and smooth animations.",
    image: "/components/ai-input.svg",
});

// file paths
const filePath = path.join(
    process.cwd(),
    "registry/chamaac/ai-input/ai-input.tsx"
);
const demoFilePath = path.join(
    process.cwd(),
    "app/components/ai-input/ai-input-demo.tsx"
);
const AIInputSource = fs.readFileSync(filePath, "utf-8");
const AIInputDemoSource = fs.readFileSync(demoFilePath, "utf-8");

export default function AIInputPage() {
    return (
        <div className="flex flex-col w-full">
            <AIInputPreviewWrapper
                title="AI Input"
                description={
                    <>
                        A polished AI input component with model selection, tools dropdown, file uploads, and smooth animations. Inspired from Google Gemini.
                    </>
                }
                code={
                    <div className="relative">
                        <div className="absolute top-4 right-4">
                            <CopyButton text={AIInputDemoSource} />
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
                            {AIInputDemoSource}
                        </SyntaxHighlighter>
                    </div>
                }
                installationSource={AIInputSource}
                props={[
                    {
                        name: "models",
                        type: "Model[]",
                        default: "DEFAULT_MODELS",
                        description: "Array of AI models to display in the model selector dropdown. Each model has id, name, label, and icon.",
                        required: false,
                    },
                    {
                        name: "tools",
                        type: "ToolItem[]",
                        default: "DEFAULT_TOOLS",
                        description: "Array of tools to display in the tools dropdown. Each tool has an icon and label.",
                        required: false,
                    },
                    {
                        name: "plusMenuItems",
                        type: "MenuItem[]",
                        default: "DEFAULT_PLUS_MENU",
                        description: "Array of items for the plus button menu. Each item has id, icon, and label.",
                        required: false,
                    },
                    {
                        name: "onSubmit",
                        type: "(message: string, attachments: Attachment[]) => void",
                        default: "-",
                        description: "Callback function called when user submits a message. Receives the message text and array of attachments.",
                        required: false,
                    },
                    {
                        name: "placeholder",
                        type: "string",
                        default: '"Ask anything..."',
                        description: "Placeholder text for the input textarea.",
                        required: false,
                    },
                    {
                        name: "className",
                        type: "string",
                        default: '""',
                        description: "Custom class names for styling the container.",
                        required: false,
                    },
                ]}
                subComponents={[
                    {
                        name: "AIInputDropdown",
                        description: "Generic dropdown component used for plus menu, tools, and model selection.",
                        props: [
                            {
                                name: "isOpen",
                                type: "boolean",
                                default: "-",
                                description: "Whether the dropdown is open",
                                required: true,
                            },
                            {
                                name: "onClose",
                                type: "() => void",
                                default: "-",
                                description: "Callback when dropdown should close",
                                required: true,
                            },
                            {
                                name: "items",
                                type: "T[]",
                                default: "-",
                                description: "Array of items to display in the dropdown",
                                required: true,
                            },
                            {
                                name: "renderItem",
                                type: "(item: T, index: number) => ReactNode",
                                default: "-",
                                description: "Custom render function for dropdown items",
                                required: false,
                            },
                            {
                                name: "className",
                                type: "string",
                                default: '""',
                                description: "Custom class names for styling",
                                required: false,
                            },
                        ],
                    },
                    {
                        name: "AIInputPillButton",
                        description: "Styled pill button with optional chevron and close button, used for tools and model selectors.",
                        props: [
                            {
                                name: "children",
                                type: "React.ReactNode",
                                default: "-",
                                description: "Content to display inside the pill",
                                required: true,
                            },
                            {
                                name: "isActive",
                                type: "boolean",
                                default: "false",
                                description: "Whether the pill is in active state",
                                required: false,
                            },
                            {
                                name: "showChevron",
                                type: "boolean",
                                default: "false",
                                description: "Whether to show chevron indicator",
                                required: false,
                            },
                            {
                                name: "chevronRotated",
                                type: "boolean",
                                default: "false",
                                description: "Whether chevron should be rotated (for open state)",
                                required: false,
                            },
                            {
                                name: "showClose",
                                type: "boolean",
                                default: "false",
                                description: "Whether to show close (X) button",
                                required: false,
                            },
                            {
                                name: "onClose",
                                type: "() => void",
                                default: "-",
                                description: "Callback when close button is clicked",
                                required: false,
                            },
                            {
                                name: "onClick",
                                type: "() => void",
                                default: "-",
                                description: "Callback when pill is clicked",
                                required: false,
                            },
                            {
                                name: "layoutId",
                                type: "string",
                                default: "-",
                                description: "Framer Motion layoutId for shared animations",
                                required: false,
                            },
                            {
                                name: "icon",
                                type: "React.ComponentType",
                                default: "-",
                                description: "Icon component to display before children",
                                required: false,
                            },
                        ],
                    },
                    {
                        name: "AIInputMessages",
                        description: "Message display area with auto-scroll and attachment previews.",
                        props: [
                            {
                                name: "messages",
                                type: "Message[]",
                                default: "-",
                                description: "Array of messages to display",
                                required: true,
                            },
                            {
                                name: "hasSubmitted",
                                type: "boolean",
                                default: "-",
                                description: "Whether user has submitted at least one message",
                                required: true,
                            },
                            {
                                name: "messagesEndRef",
                                type: "React.RefObject<HTMLDivElement>",
                                default: "-",
                                description: "Ref for auto-scrolling to bottom",
                                required: true,
                            },
                        ],
                    },
                    {
                        name: "AIInputFilePreview",
                        description: "Preview area for uploaded files with remove functionality.",
                        props: [
                            {
                                name: "files",
                                type: "UploadedFile[]",
                                default: "-",
                                description: "Array of uploaded files to preview",
                                required: true,
                            },
                            {
                                name: "onRemove",
                                type: "(id: string) => void",
                                default: "-",
                                description: "Callback when remove button is clicked",
                                required: true,
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}
