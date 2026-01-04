"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SlideUpButtonProps {
    children: React.ReactNode;
    className?: string;
    textDuration?: number;
    cloneDuration?: number;
    cloneDelay?: number;
    buttonScale?: number;
    buttonOpacity?: number;
    onClick?: () => void;
}

const SlideUpButton = ({
    children,
    className = "",
    textDuration = 0.25,
    cloneDuration = 0.5,
    cloneDelay = 0.12,
    buttonScale = 0.98,
    buttonOpacity = 0.8,
    onClick,
}: SlideUpButtonProps) => {
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: buttonScale, opacity: buttonOpacity },
    };

    const textVariants = {
        initial: { y: 0 },
        hover: { y: "-190%" },
    };

    const cloneVariants = {
        initial: { y: "190%", rotate: 20 },
        hover: { y: 0, rotate: 0 },
    };

    return (
        <motion.button
            onClick={onClick}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className={cn(
                "relative overflow-hidden px-6 py-3 rounded-[12px] text-[16px] leading-[1.5] cursor-pointer",
                className
            )}
        >
            {/* container for stacked text */}
            <motion.div className="relative overflow-hidden">
                {/* ORIGINAL TEXT */}
                <motion.span
                    variants={textVariants}
                    transition={{
                        duration: textDuration,
                        ease: [0.55, 0.085, 0.68, 0.53],
                    }}
                    className="block"
                >
                    {children}
                </motion.span>

                {/* CLONE TEXT */}
                <motion.span
                    variants={cloneVariants}
                    transition={{
                        duration: cloneDuration,
                        ease: [0.165, 0.84, 0.44, 1],
                        delay: cloneDelay,
                    }}
                    className="block absolute top-0 left-0"
                >
                    {children}
                </motion.span>
            </motion.div>
        </motion.button>
    );
};

export default SlideUpButton;

