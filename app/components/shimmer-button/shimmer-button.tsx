"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
    text?: string;
    className?: string;
    duration?: number;
}

const ShimmerButton = ({
    text = "Book a Free Call",
    className,
    duration = 1.2
}: ShimmerButtonProps) => {
    return (
        <button className={cn("group relative border border-white/10 bg-neutral-950 px-8 py-3 rounded-full cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]", className)}>

            <motion.span
                className="relative block bg-clip-text text-transparent bg-[linear-gradient(110deg,#a1a1aa_0%,#a1a1aa_40%,#ffffff_50%,#a1a1aa_60%,#a1a1aa_100%)] bg-[length:200%_100%] font-medium text-base tracking-tight"
                animate={{
                    backgroundPosition: ["0% 0%", "-200% 0%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: duration,
                    ease: "linear",
                }}
            >
                {text}
            </motion.span>
        </button>
    );
};

export default ShimmerButton;
