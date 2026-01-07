"use client";

import { motion, SVGMotionProps } from "motion/react";

interface GlobeIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const GlobeIcon = (props: GlobeIconProps) => {
    const { size = 28, duration = 8, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const animationProps = isHovered
        ? {
            whileHover: {
                rotate: 360,
                transition: {
                    duration: duration,
                    ease: "linear" as const,
                },
            },
        }
        : {
            animate: {
                rotate: 360,
            },
            transition: {
                duration: duration,
                ease: "linear" as const,
                repeat: Infinity,
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
            {...animationProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
        </motion.svg>
    )
}

export default GlobeIcon;
