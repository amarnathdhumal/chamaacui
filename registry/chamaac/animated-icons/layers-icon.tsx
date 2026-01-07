"use client";

import { motion, SVGMotionProps } from "motion/react";

interface LayersIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const LayersIcon = (props: LayersIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const layer1Props = isHovered
        ? { whileHover: { y: [0, -3, 0], transition: { duration: duration, ease: "easeInOut" as const } } }
        : { animate: { y: [0, -3, 0] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity } };

    const layer2Props = isHovered
        ? { whileHover: { y: [0, -1.5, 0], transition: { duration: duration, ease: "easeInOut" as const, delay: 0.1 } } }
        : { animate: { y: [0, -1.5, 0] }, transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity, delay: 0.1 } };

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
            <motion.path d="M12 4l-8 4l8 4l8 -4l-8 -4" {...layer1Props} />
            <motion.path d="M4 12l8 4l8 -4" {...layer2Props} />
            <path d="M4 16l8 4l8 -4" />
        </motion.svg>
    );
};

export default LayersIcon;
