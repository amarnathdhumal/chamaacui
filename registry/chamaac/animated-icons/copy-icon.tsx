"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CopyIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CopyIcon = (
    props: CopyIconProps
) => {
    const { size = 28, duration = 1.5, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const rectAnimationProps = isHovered
        ? {
            whileHover: {
                x: [8, 4, 8],
                y: [8, 4, 8],
                transition: {
                    duration: duration,
                    ease: "easeInOut" as const,
                },
            },
        }
        : {
            animate: {
                x: [8, 4, 8],
                y: [8, 4, 8],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />

            <motion.rect
                width="12" height="12" rx="2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                {...rectAnimationProps}
            />

            <rect
                x="8" y="8" width="12" height="12" rx="2"
                className="fill-gray-100 dark:fill-[#111111]"
                stroke="currentColor"
                strokeWidth={strokeWidth}
            />
        </motion.svg>
    )
}

export default CopyIcon;
