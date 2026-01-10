"use client";

import SendIcon from "@/registry/chamaac/animated-icons/send-icon";

export default function SendIconDemo() {
    return (
        <SendIcon
            className="text-black dark:text-white"
            size={40}
            duration={1}
            strokeWidth={2}
            repeatDelay={1}
            ease="easeInOut"
        />
    );
}
