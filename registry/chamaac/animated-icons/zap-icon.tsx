"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ZapIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const ZapIcon = (props: ZapIconProps) => {
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
                d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
                animate={{
                    opacity: [1, 0.4, 1, 0.6, 1],
                    scale: [1, 1.02, 0.98, 1.01, 1],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [0, 0.2, 0.4, 0.7, 1],
                }}
                style={{ transformOrigin: "center" }}
            />
        </motion.svg>
    );
};

export default ZapIcon;
