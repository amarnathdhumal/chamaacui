"use client";

import { motion, SVGMotionProps } from "motion/react";

interface LocationIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const LocationIcon = (props: LocationIconProps) => {
    const { size = 24, duration = 3, strokeWidth = 2, className, ...restProps } = props;

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
                d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: duration, repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: "12px", originY: "12px" }}
            />
        </motion.svg>
    )
}

export default LocationIcon;
