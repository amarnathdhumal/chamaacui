"use client";

import ActivityIcon from "@/registry/chamaac/animated-icons/activity-icon";

export default function ActivityIconDemo() {
    return (
        <ActivityIcon
            className="text-black dark:text-white"
            size={48}
            duration={2}
            strokeWidth={2}
        />
    );
}
