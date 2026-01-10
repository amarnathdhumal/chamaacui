"use client";

import { useState } from "react";
import { motion, SVGMotionProps, Easing } from "motion/react";

interface ArrowUpRightIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
    repeatDelay?: number;
    ease?: Easing;
}

const ArrowUpRightIcon = (props: ArrowUpRightIconProps) => {
    const {
        size = 28,              // Icon size in pixels
        duration = 1.5,         // Animation duration in seconds
        strokeWidth = 2,        // SVG stroke width
        isHovered = false,      // When true, animate only on hover
        repeatDelay = 1,        // Delay between animation loops (seconds)
        ease = "easeInOut",     // Animation easing function
        className,
        ...restProps
    } = props;

    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const pathAnimationProps = {
        animate: shouldAnimate ? {
            x: [0, 2, 0],
            y: [0, -2, 0]
        } : { x: 0, y: 0 },
        transition: {
            duration: duration,
            ease: ease,
            repeat: isHovered ? 0 : Infinity,
            repeatDelay: repeatDelay,
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
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path d="M17 7l-10 10" {...pathAnimationProps} />
            <motion.path d="M8 7l9 0l0 9" {...pathAnimationProps} />
        </motion.svg>
    )
}

export default ArrowUpRightIcon;
