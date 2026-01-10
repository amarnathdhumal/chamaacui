"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface CrownIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CrownIcon = (props: CrownIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const sparkle1Props = {
        animate: shouldAnimate ? {
            rotate: [0, -15, 15, -10, 10, -5, 5, 0],
            y: [0, -2, 0, -1, 0],
        } : { rotate: 0, y: 0 },
        transition: {
            duration: duration,
            ease: "easeInOut" as const,
            repeat: isHovered ? 0 : Infinity,
            repeatDelay: 1.5
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
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
            {...sparkle1Props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.g style={{ transformOrigin: "center" }} >
                <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
            </motion.g>
        </motion.svg>
    );
};

export default CrownIcon;
