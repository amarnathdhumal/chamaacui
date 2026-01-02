"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Transition } from "motion/react";
import { cn } from "@/lib/utils";

interface TextLoopProps {
    staticText?: string;
    rotatingTexts?: string[];
    className?: string;
    interval?: number;
    transition?: Transition;
    staticTextClassName?: string;
    rotatingTextClassName?: string;
    backgroundClassName?: string;
    cursorClassName?: string;
}

export default function TextLoop({
    staticText = "Design",
    rotatingTexts = ["Limitless", "Timeless", "Flawless"],
    className,
    interval = 3000,
    transition = { duration: 0.8, ease: "easeInOut" },
    staticTextClassName,
    rotatingTextClassName,
    backgroundClassName,
    cursorClassName,
}: TextLoopProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, interval);
        return () => clearInterval(timer);
    }, [rotatingTexts.length, interval]);

    return (
        <div className={cn("flex flex-row items-center justify-start w-fit text-4xl md:text-7xl font-medium tracking-tight", className)}>
            <span className={cn("mr-3 whitespace-nowrap", staticTextClassName)}>{staticText}</span>
            <div className="relative flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={rotatingTexts[index]}
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={transition}
                        className="overflow-hidden whitespace-nowrap relative"
                    >
                        {/* Background gradient box */}
                        <div className={cn("absolute inset-0",
                            "bg-gradient-to-r from-transparent via-purple-200/30 to-purple-200",
                            "dark:from-transparent dark:via-violet-950/30 dark:to-violet-950/60",
                            backgroundClassName
                        )} />

                        <span className={cn(
                            "relative bg-clip-text text-transparent",
                            "bg-gradient-to-r from-violet-400 to-violet-800",
                            "dark:bg-gradient-to-r from-violet-400 to-violet-600 pr-1",
                            rotatingTextClassName
                        )}>
                            {rotatingTexts[index]}
                        </span>
                    </motion.div>
                </AnimatePresence>

                {/* Cursor Line */}
                <motion.div
                    className={cn(
                        "w-[3px] md:w-[4px] bg-violet-500",
                        cursorClassName
                    )}
                    style={{ height: "1em" }}
                    animate={{ opacity: [1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
            </div>
        </div>
    );
}
