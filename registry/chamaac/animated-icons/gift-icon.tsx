"use client";

import { motion, SVGMotionProps } from "motion/react";

interface GiftIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const GiftIcon = (props: GiftIconProps) => {
    const { size = 28, duration = 0.8, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const shakeProps = isHovered
        ? {
            whileHover: {
                rotate: [0, -8, 8, -6, 6, -3, 3, 0],
                y: [0, -2, 0, -1, 0],
                transition: { duration: duration, ease: "easeInOut" as const }
            }
        }
        : {
            animate: {
                rotate: [0, -8, 8, -6, 6, -3, 3, 0],
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
            style={{ transformOrigin: "center bottom" }}
            {...shakeProps}
        >
            <motion.g >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                {/* Gift lid */}
                <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
                {/* Ribbon center */}
                <path d="M12 8l0 13" />

                <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
            </motion.g>
            {/* Bow */}

            {/* Gift body */}
            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />

        </motion.svg>
    );
};

export default GiftIcon;
