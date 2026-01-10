"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface ClockIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const ClockIcon = (props: ClockIconProps) => {
    const { size = 28, duration = 0.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const shakeProps = {
        animate: shouldAnimate ? {
            rotate: [0, -10, 10, -10, 10, 0],
            scale: [1, 1.1, 1.1, 1],
        } : { rotate: 0, scale: 1 },
        transition: {
            duration: duration,
            ease: "easeInOut" as const,
            repeat: isHovered ? 0 : Infinity,
            repeatDelay: 1,
        },
    };

    return (
        <motion.svg
            {...shakeProps}
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 13a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M7 4l-2.75 2" />
            <path d="M17 4l2.75 2" />
            <path d="M12 10l0 3l2 0" />
        </motion.svg>
    );
};

export default ClockIcon;
