"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface AdjustmentsHorizontalIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const AdjustmentsHorizontalIcon = (
    props: AdjustmentsHorizontalIconProps
) => {
    const { size = 28, duration = 1.2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const path1Props = {
        animate: shouldAnimate ? { x: [0, -10, 0] } : { x: 0 },
        transition: { duration: duration, ease: "easeInOut" as const, repeat: isHovered ? 0 : Infinity, repeatType: "loop" as const }
    };

    const path2Props = {
        animate: shouldAnimate ? { x: [0, 10, 0] } : { x: 0 },
        transition: { duration: duration, ease: "easeInOut" as const, repeat: isHovered ? 0 : Infinity, repeatType: "loop" as const }
    };

    const path3Props = {
        animate: shouldAnimate ? { x: [0, -10, 0] } : { x: 0 },
        transition: { duration: duration, ease: "easeInOut" as const, repeat: isHovered ? 0 : Infinity, repeatType: "loop" as const }
    };

    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l15 0" />
            <motion.path
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                {...path1Props}
            />

            <path d="M4 12l15 0" />
            <motion.path
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                {...path2Props}
            />

            <path d="M4 18l15 0" />
            <motion.path
                className="fill-white dark:fill-black"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                {...path3Props}
            />
        </motion.svg>
    );
};

export default AdjustmentsHorizontalIcon;
