"use client";

import HeartIcon from "@/registry/chamaac/animated-icons/heart-icon";

export default function HeartIconDemo() {
    return (
        <HeartIcon
            className="text-black dark:text-white"
            size={40}
            duration={0.8}
            strokeWidth={2}
        />
    );
}
