"use client";

import { motion, SVGMotionProps } from "motion/react";

interface LockIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const LockIcon = (props: LockIconProps) => {
    const { size = 24, duration = 1, strokeWidth = 2, className, ...restProps } = props;

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
            <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <motion.path
                d="M8 11v-4a4 4 0 1 1 8 0v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: duration, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, repeatType: "reverse" }}
            />
        </motion.svg>
    )
}

export default LockIcon;
