"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CloseIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CloseIcon = (props: CloseIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const rotateProps = isHovered
        ? {
            whileHover: {
                rotate: 180,
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { rotate: 180 },
            transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, repeatDelay: 1 },
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
            {...rotateProps}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

export default CloseIcon;
