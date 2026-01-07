"use client";

import { motion, SVGMotionProps } from "motion/react";

interface SendIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const SendIcon = (props: SendIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const groupAnimationProps = isHovered
        ? {
            whileHover: {
                x: [0, 3, 0],
                y: [0, -2, 0],
                transition: {
                    duration: duration,
                    ease: "easeInOut" as const,
                },
            },
        }
        : {
            animate: {
                x: [0, 3, 0],
                y: [0, -2, 0],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
            },
        };

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
            <motion.g {...groupAnimationProps}>
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </motion.g>
        </motion.svg>
    );
};

export default SendIcon;
