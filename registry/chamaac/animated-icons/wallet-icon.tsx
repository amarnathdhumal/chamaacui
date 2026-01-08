"use client";

import { motion, SVGMotionProps } from "motion/react";

interface WalletIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const WalletIcon = (props: WalletIconProps) => {
    const { size = 28, duration = 1, strokeWidth = 2, isHovered = false, className, ...restProps } = props;

    const coinProps = isHovered
        ? {
            whileHover: {
                y: [0, -5, 0],
                opacity: [1, 1, 0, 1],
                transition: { duration: duration * 0.6, ease: "easeOut" as const }
            }
        }
        : {
            animate: {
                y: [0, -3, 0],
                opacity: [1, 1, 0.5, 1],
            },
            transition: {
                duration: duration,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatDelay: 1
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
            {/* Wallet body */}
            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            {/* Coin popping */}
            <motion.circle
                cx="9"
                cy="6"
                r="1.5"
                fill="currentColor"
                stroke="none"
                {...coinProps}
            />
        </motion.svg>
    );
};

export default WalletIcon;
