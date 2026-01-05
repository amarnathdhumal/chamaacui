"use client";

import { motion, SVGMotionProps } from "motion/react";

interface WifiIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const WifiIcon = (props: WifiIconProps) => {
    const { size = 24, duration = 1.5, strokeWidth = 2, className, ...restProps } = props;

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
            <motion.path
                d="M12 18l.01 0"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: duration, repeat: Infinity, delay: 0 }}
            />
            <motion.path
                d="M9.172 15.172a4 4 0 0 1 5.656 0"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: duration, repeat: Infinity, delay: 0.2 }}
            />
            <motion.path
                d="M6.343 12.343a8 8 0 0 1 11.314 0"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: duration, repeat: Infinity, delay: 0.4 }}
            />
            <motion.path
                d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: duration, repeat: Infinity, delay: 0.6 }}
            />
        </motion.svg>
    )
}

export default WifiIcon;
