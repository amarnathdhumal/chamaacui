"use client";

import { useState } from "react";
import { motion, SVGMotionProps, Easing } from "motion/react";

interface ThumbsUpIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
    repeatDelay?: number;
    ease?: Easing;
}

const ThumbsUpIcon = (props: ThumbsUpIconProps) => {
    const {
        size = 28,              // Icon size in pixels
        duration = 0.8,         // Animation duration in seconds
        strokeWidth = 2,        // SVG stroke width
        isHovered = false,      // When true, animate only on hover
        repeatDelay = 1.2,      // Delay between animation loops (seconds)
        ease = "easeInOut",     // Animation easing function
        className,
        ...restProps
    } = props;

    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const thumbProps = {
        animate: shouldAnimate ? {
            rotate: [0, -15, 5, -10, 0],
            y: [0, -2, 0],
        } : { rotate: 0, y: 0 },
        transition: {
            duration: duration,
            ease: ease,
            repeat: isHovered ? 0 : Infinity,
            repeatDelay: repeatDelay,
        }
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
            style={{ transformOrigin: "center bottom" }}
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
            {...thumbProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
        </motion.svg>
    );
};

export default ThumbsUpIcon;
