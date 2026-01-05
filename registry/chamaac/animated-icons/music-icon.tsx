"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MusicIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const MusicIcon = (props: MusicIconProps) => {
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
            <motion.g
                animate={{ y: [0, -4, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: duration, repeat: Infinity, ease: "easeInOut" }}
            >
                <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M9 17v-13h10v9.5" />
                <path d="M9 8h10" />
            </motion.g>
        </motion.svg>
    )
}

export default MusicIcon;
