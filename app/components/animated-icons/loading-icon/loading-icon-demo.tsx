"use client";

import LoadingIcon from "@/registry/chamaac/animated-icons/loading-icon";

export default function LoadingIconDemo() {
    return (
        <LoadingIcon
            className="text-black dark:text-white"
            size={48}
            duration={1.5}
            strokeWidth={2}
        />
    );
}
