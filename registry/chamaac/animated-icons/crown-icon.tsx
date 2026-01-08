"use client";

import { motion, SVGMotionProps } from "motion/react";

interface CrownIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const CrownIcon = (props: CrownIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;


    const sparkle1Props = isHovered
        ? {
            whileHover: {
                rotate: [0, -8, 8, -6, 6, -3, 3, 0],
                y: [0, -2, 0, -1, 0],
                transition: { duration: duration, ease: "easeInOut" as const }
            }
        }
        : {
            animate: {
                rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                y: [0, -2, 0, -1, 0],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
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
            {...sparkle1Props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />

            {/* Crown */}
            <motion.g style={{ transformOrigin: "center" }} >
                <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
            </motion.g>
        </motion.svg>
    );
};

export default CrownIcon;
