"use client";

import SvgAnimation from "./svg-animation";
import {
    IconWriting,
    IconCode,
    IconLanguage,
    IconMessageCircle,
    IconFileText,
    IconBrain,
} from "@tabler/icons-react";

export default function SvgAnimationDemo() {
    return (
        <SvgAnimation
            trends={[
                {
                    id: "textgeneration",
                    name: "Text Generation",
                    icon: IconWriting,
                },
                {
                    id: "codegeneration",
                    name: "Code Generation",
                    icon: IconCode,
                },
                {
                    id: "translation",
                    name: "Translation",
                    icon: IconLanguage,
                },
                {
                    id: "chat",
                    name: "Chat & Conversation",
                    icon: IconMessageCircle,
                },
                {
                    id: "contentcreation",
                    name: "Content Creation",
                    icon: IconFileText,
                },
                {
                    id: "reasoning",
                    name: "Reasoning & Analysis",
                    icon: IconBrain,
                },
            ]}
            imageSrc="/gpt.jpg"
            imageAlt="Trends"
        />
    );
}

