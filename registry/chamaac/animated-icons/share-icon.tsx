"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ShareIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const ShareIcon = (props: ShareIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const topNodeProps = isHovered
        ? { whileHover: { scale: [1, 1.15, 1], transition: { duration: duration * 0.5, ease: "easeInOut" as const } } }
        : { animate: { scale: [1, 1.15, 1] }, transition: { duration: duration * 0.5, ease: "easeInOut" as const, repeat: Infinity } };

    const bottomNodeProps = isHovered
        ? { whileHover: { scale: [1, 1.15, 1], transition: { duration: duration * 0.5, ease: "easeInOut" as const, delay: duration * 0.25 } } }
        : { animate: { scale: [1, 1.15, 1] }, transition: { duration: duration * 0.5, ease: "easeInOut" as const, repeat: Infinity, delay: duration * 0.25 } };

    const line1Props = isHovered
        ? { whileHover: { pathLength: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5], transition: { duration: duration, ease: "easeInOut" as const } } }
        : { animate: { pathLength: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity } };

    const line2Props = isHovered
        ? { whileHover: { pathLength: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5], transition: { duration: duration, ease: "easeInOut" as const, delay: duration * 0.25 } } }
        : { animate: { pathLength: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, delay: duration * 0.25 } };

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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="12" r="3" />
            <motion.circle cx="18" cy="6" r="3" {...topNodeProps} />
            <motion.circle cx="18" cy="18" r="3" {...bottomNodeProps} />
            <motion.path d="M8.7 10.7l6.6 -3.4" {...line1Props} />
            <motion.path d="M8.7 13.3l6.6 3.4" {...line2Props} />
        </motion.svg>
    );
};

export default ShareIcon;
