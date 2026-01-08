"use client";

import { motion, SVGMotionProps } from "motion/react";

interface PinIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const PinIcon = (props: PinIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const bounceProps = isHovered
        ? {
            whileHover: {
                y: [0, -6, 0],
                transition: { duration: duration * 0.4, ease: "easeOut" as const, repeat: 2 }
            }
        }
        : {
            animate: {
                y: [0, -4, 0],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatDelay: 0.8
            }
        };

    const shadowProps = isHovered
        ? {
            whileHover: {
                scaleX: [1, 0.6, 1],
                opacity: [0.3, 0.1, 0.3],
                transition: { duration: duration * 0.4, ease: "easeOut" as const, repeat: 2 }
            }
        }
        : {
            animate: {
                scaleX: [1, 0.7, 1],
                opacity: [0.2, 0.1, 0.2],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatDelay: 0.8
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
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {/* Shadow ellipse */}
            <motion.ellipse
                cx="12"
                cy="21"
                rx="3"
                ry="1"
                fill="currentColor"
                stroke="none"
                style={{ transformOrigin: "center bottom" }}
                {...shadowProps}
            />
            {/* Pin */}
            <motion.g {...bounceProps}>
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </motion.g>
        </motion.svg>
    );
};

export default PinIcon;
