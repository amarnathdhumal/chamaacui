"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ShareIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const ShareIcon = (props: ShareIconProps) => {
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
            {/* Center node */}
            <circle cx="6" cy="12" r="3" />
            {/* Top right node */}
            <motion.circle
                cx="18"
                cy="6"
                r="3"
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: duration * 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            {/* Bottom right node */}
            <motion.circle
                cx="18"
                cy="18"
                r="3"
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: duration * 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: duration * 0.25,
                }}
            />
            {/* Lines */}
            <motion.path
                d="M8.7 10.7l6.6 -3.4"
                animate={{
                    pathLength: [0.5, 1, 0.5],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <motion.path
                d="M8.7 13.3l6.6 3.4"
                animate={{
                    pathLength: [0.5, 1, 0.5],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: duration * 0.25,
                }}
            />
        </motion.svg>
    );
};

export default ShareIcon;
