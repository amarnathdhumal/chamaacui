"use client";

import { useState } from "react";
import { motion, SVGMotionProps, Easing } from "motion/react";

interface GiftIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
    repeatDelay?: number;
    ease?: Easing;
}

const GiftIcon = (props: GiftIconProps) => {
    const {
        size = 28,              // Icon size in pixels
        duration = 0.8,         // Animation duration in seconds
        strokeWidth = 2,        // SVG stroke width
        isHovered = false,      // When true, animate only on hover
        repeatDelay = 1.5,      // Delay between animation loops (seconds)
        ease = "easeInOut",     // Animation easing function
        className,
        ...restProps
    } = props;

    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const shakeProps = {
        animate: shouldAnimate ? {
            rotate: [0, -8, 8, -6, 6, -3, 3, 0],
            y: [0, -2, 0, -1, 0],
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
            {...shakeProps}
        >
            <motion.g >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
                <path d="M12 8l0 13" />
                <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
            </motion.g>
            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
        </motion.svg>
    );
};

export default GiftIcon;
