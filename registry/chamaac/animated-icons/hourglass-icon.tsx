"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface HourglassIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const HourglassIcon = (props: HourglassIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const animationProps = {
        animate: shouldAnimate ? {
            rotate: 180,
        } : { rotate: 0 },
        transition: {
            duration: duration,
            repeat: isHovered ? 0 : Infinity,
            repeatDelay: 1,
            ease: "easeInOut" as const,
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
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
            {...animationProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1" />
            <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1" />
        </motion.svg>
    )
}

export default HourglassIcon;
