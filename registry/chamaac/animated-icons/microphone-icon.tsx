"use client";

import { motion, SVGMotionProps } from "motion/react";

interface MicrophoneIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const MicrophoneIcon = (props: MicrophoneIconProps) => {
    const { size = 28, duration = 0.8, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const pulseProps = isHovered
        ? {
            whileHover: {
                scale: [1, 1.1, 1],
                transition: { duration: duration, ease: "easeInOut" as const },
            },
        }
        : {
            animate: { scale: [1, 1.1, 1] },
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
            overflow="visible"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Mic body with pulse */}
            <motion.path
                d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"
                style={{ transformOrigin: "12px 7px" }}
                {...pulseProps}
            />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
        </motion.svg>
    );
};

export default MicrophoneIcon;
