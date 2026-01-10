"use client";

import CloudIcon from "@/registry/chamaac/animated-icons/cloud-icon";

export default function CloudIconDemo() {
    return (
        <CloudIcon
            className="text-black dark:text-white"
            size={40}
            duration={1.5}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
