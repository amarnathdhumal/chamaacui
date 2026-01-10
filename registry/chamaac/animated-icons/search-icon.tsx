"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface SearchIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const SearchIcon = (props: SearchIconProps) => {
    const { size = 28, duration = 1.2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const groupAnimationProps = {
        animate: shouldAnimate ? { rotate: [0, -25, 15, 0] } : { rotate: 0 },
        transition: {
            duration: duration,
            ease: "easeInOut" as const,
            repeat: isHovered ? 0 : Infinity,
            repeatDelay: 1,
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
            <motion.g
                {...groupAnimationProps}
                style={{ originX: "21px", originY: "21px" }}
            >
                <motion.circle cx="10" cy="10" r="7" />
                <motion.path d="M21 21l-6 -6" />
            </motion.g>
        </motion.svg>
    );
};

export default SearchIcon;
