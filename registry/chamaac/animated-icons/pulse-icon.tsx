"use client";

import { motion, SVGMotionProps } from "motion/react";

interface PulseIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const PulseIcon = (props: PulseIconProps) => {
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
            {/* Center dot */}
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            {/* Pulse rings */}
            <motion.circle
                cx="12"
                cy="12"
                r="6"
                fill="none"
                animate={{
                    r: [4, 8],
                    opacity: [0.8, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeOut",
                    repeat: Infinity,
                }}
            />
            <motion.circle
                cx="12"
                cy="12"
                r="6"
                fill="none"
                animate={{
                    r: [4, 8],
                    opacity: [0.8, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeOut",
                    repeat: Infinity,
                    delay: duration * 0.5,
                }}
            />
            <motion.circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                animate={{
                    r: [6, 11],
                    opacity: [0.5, 0],
                }}
                transition={{
                    duration: duration,
                    ease: "easeOut",
                    repeat: Infinity,
                    delay: duration * 0.25,
                }}
            />
        </motion.svg>
    );
};

export default PulseIcon;
