"use client";

import { motion, SVGMotionProps } from "motion/react";

interface HeartIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const HeartIcon = (props: HeartIconProps) => {
    const { size = 24, duration = 0.8, strokeWidth = 2, className, ...restProps } = props;

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
            <motion.path
                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: duration, repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: "12px", originY: "12px" }}
            />
        </motion.svg>
    )
}

export default HeartIcon;
