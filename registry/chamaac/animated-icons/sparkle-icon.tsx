"use client";

import { motion, SVGMotionProps } from "motion/react";

interface SparkleIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const SparkleIcon = (props: SparkleIconProps) => {
    const { size = 24, duration = 2, strokeWidth = 2, className, ...restProps } = props;

    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            overflow="visible"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Main sparkle */}
            <motion.path
                d="M12 3l1.5 4.5l4.5 1.5l-4.5 1.5l-1.5 4.5l-1.5 -4.5l-4.5 -1.5l4.5 -1.5z"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ transformOrigin: "12px 9px" }}
            />
            {/* Small sparkles */}
            <motion.path
                d="M18 16l.5 1.5l1.5 .5l-1.5 .5l-.5 1.5l-.5 -1.5l-1.5 -.5l1.5 -.5z"
                animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: duration * 0.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: duration * 0.2,
                }}
                style={{ transformOrigin: "18px 18px" }}
            />
            <motion.path
                d="M5 18l.5 1l1 .5l-1 .5l-.5 1l-.5 -1l-1 -.5l1 -.5z"
                animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: duration * 0.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: duration * 0.5,
                }}
                style={{ transformOrigin: "5px 19px" }}
            />
        </motion.svg>
    );
};

export default SparkleIcon;
