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
        <button className={cn("border border-white/10 px-5 py-[10px] text-[18px] rounded-[8px] cursor-pointer font-bold tracking-tight bg-black", className)}>
            <motion.span
                className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#ffffff_0%,#ffffff_40%,#00c6ff_40%,#0072ff_55%,#ffffff_55%,#ffffff_100%)] bg-[length:200%_100%]"
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
