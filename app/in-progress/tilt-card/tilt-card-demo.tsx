"use client";

import TiltCard from "./tilt-card";
import {
    IconTrendingUp,
    IconCpu,
    IconUsers,
    IconSparkles,
} from "@tabler/icons-react";

export default function TiltCardDemo() {
    return (
        <TiltCard
            features={[
                {
                    icon: IconSparkles,
                    title: "Automate Intelligence",
                    description: "AI-driven workflow automation.",
                },
                {
                    icon: IconTrendingUp,
                    title: "Adaptive Learning",
                    description: "Improves with every interaction.",
                },
                {
                    icon: IconCpu,
                    title: "Context-Aware Decisions",
                    description: "Understands context before acting.",
                },
                {
                    icon: IconUsers,
                    title: "Collaborative Agents",
                    description: "Coordinates multiple AI agents.",
                },
            ]}
        />
    );
}

