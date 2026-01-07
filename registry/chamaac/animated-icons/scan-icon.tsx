"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ScanIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const ScanIcon = (props: ScanIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const lineAnimationProps = isHovered
        ? {
            whileHover: {
                y: [-8, 8, -8],
                transition: {
                    duration: duration,
                    ease: "linear" as const,
                },
            },
        }
        : {
            animate: {
                y: [-8, 8, -8],
            },
            transition: {
                duration: duration,
                ease: "linear" as const,
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
            <path d="M4 17v1a2 2 0 0 0 2 2h2" />
            <path d="M16 4h2a2 2 0 0 1 2 2v1" />
            <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
            <motion.line
                strokeWidth={1}
                x1="5" y1="12" x2="19" y2="12"
                {...lineAnimationProps}
            />
        </motion.svg>
    )
}

export default ScanIcon;
