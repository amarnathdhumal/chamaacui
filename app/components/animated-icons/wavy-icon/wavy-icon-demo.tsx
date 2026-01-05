"use client";

import WavyIcon from "@/registry/chamaac/animated-icons/wavy-icon";

export default function WavyIconDemo() {
    return (
        <WavyIcon
            className="text-black dark:text-white"
            size={48}
            duration={0.8}
            strokeWidth={2}
        />
    );
}
