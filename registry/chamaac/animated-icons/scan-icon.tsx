"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ScanIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const ScanIcon = (props: ScanIconProps) => {
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
            <path d="M4 17v1a2 2 0 0 0 2 2h2" />
            <path d="M16 4h2a2 2 0 0 1 2 2v1" />
            <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
            <motion.line
                strokeWidth={1}
                x1="5" y1="12" x2="19" y2="12"
                animate={{
                    y: [-8, 8, -8]
                }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
        </motion.svg>
    )
}

export default ScanIcon;
