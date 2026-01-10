"use client";

import ThumbsUpIcon from "@/registry/chamaac/animated-icons/thumbs-up-icon";

export default function ThumbsUpIconDemo() {
    return (
        <ThumbsUpIcon
            className="text-black dark:text-white"
            size={40}
            duration={0.8}
            strokeWidth={2}
            repeatDelay={1.2}
            ease="easeInOut"
        />
    );
}
