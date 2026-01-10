"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface LocationIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const LocationIcon = (props: LocationIconProps) => {
    const { size = 28, duration = 3, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const pathAnimationProps = {
        animate: shouldAnimate ? { rotate: [0, 15, -10, 0] } : { rotate: 0 },
        transition: { duration: duration, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" as const },
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
            <motion.path
                d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                style={{ originX: "12px", originY: "12px" }}
                {...pathAnimationProps}
            />
        </motion.svg>
    )
}

export default LocationIcon;
