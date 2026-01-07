"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CameraIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CameraIcon = (props: CameraIconProps) => {
    const { size = 28, duration = 2, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const lensProps = isHovered
        ? {
            whileHover: {
                scale: [1, 1.2, 1],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { scale: [1, 1.2, 1] },
            transition: { duration: duration, ease: "easeInOut" as const, repeat: Infinity },
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
            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
            {/* Lens with zoom animation */}
            <motion.circle cx="12" cy="13" r="3" style={{ transformOrigin: "12px 13px" }} {...lensProps} />
        </motion.svg>
    );
};

export default CameraIcon;
