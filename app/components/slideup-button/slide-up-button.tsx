"use client";

import { motion } from "motion/react";

interface SlideUpButtonProps {
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    paddingX?: string;
    paddingY?: string;
    borderRadius?: string;
    fontSize?: string;
    textDuration?: number;
    cloneDuration?: number;
    cloneDelay?: number;
    buttonScale?: number;
    buttonOpacity?: number;
    onClick?: () => void;
}

const SlideUpButton = ({
    text = "Learn More",
    backgroundColor = "bg-[#f73b20]",
    textColor = "text-white",
    paddingX = "px-6",
    paddingY = "py-3",
    borderRadius = "rounded-[12px]",
    fontSize = "text-[16px]",
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
        hover: { y: "-130%" },
    };

    const cloneVariants = {
        initial: { y: "130%", rotate: 20 },
        hover: { y: 0, rotate: 0 },
    };

    return (
        <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            onClick={onClick}
            className={`relative overflow-hidden ${backgroundColor} ${textColor} ${paddingX} ${paddingY} ${borderRadius} ${fontSize} leading-[1.5] cursor-pointer`}
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
                    {text}
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
                    {text}
                </motion.span>
            </motion.div>
        </motion.button>
    );
};

export default SlideUpButton;

