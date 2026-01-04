"use client";

import { AIInput } from "@/registry/chamaac/ai-input/ai-input";
import { Sparkles, Globe, Video, Image as ImageIcon, Layout, BookOpen, Paperclip } from "lucide-react";

// Custom models example
const customModels = [
    { id: "gpt-4o", name: "GPT-4o", label: "GPT-4o", icon: Sparkles },
    { id: "gpt-4-turbo", name: "GPT-4 Turbo", label: "GPT-4 Turbo", icon: Sparkles },
    { id: "claude-3-5", name: "Claude 3.5", label: "Claude 3.5", icon: Sparkles },
    { id: "gemini-pro", name: "Gemini Pro", label: "Gemini Pro", icon: Sparkles },
];

// Custom tools example
const customTools = [
    { icon: Globe, label: "Deep Research" },
    { icon: Video, label: "Create videos" },
    { icon: ImageIcon, label: "Create images" },
    { icon: Layout, label: "Canvas" },
    { icon: BookOpen, label: "Guided Learning" },
];

// Custom plus menu items example
const customPlusMenu = [
    { id: "files", icon: Paperclip, label: "Upload photos & files" },
    { id: "videos", icon: Video, label: "Upload Videos" },
];

export default function AIInputDemo() {
    return (
        <AIInput
            // Custom AI models for the model selector dropdown
            models={customModels}

            // Custom tools for the tools dropdown
            tools={customTools}

            // Custom items for the plus (+) button menu
            plusMenuItems={customPlusMenu}

            // Placeholder text for the input
            placeholder="Ask anything..."

            // Callback when user submits a message
            onSubmit={(message, attachments) => {
                console.log("Message:", message);
                console.log("Attachments:", attachments);
                // Handle the submission - e.g., send to API
            }}

            // Optional: Custom className for styling
            className=""
        />
    );
}
