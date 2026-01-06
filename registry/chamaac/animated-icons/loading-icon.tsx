"use client";

import { motion, SVGMotionProps } from "motion/react";

interface LoadingIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const LoadingIcon = (props: LoadingIconProps) => {
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
            animate={{ rotate: 360 }}
            transition={{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                d="M12 3a9 9 0 1 0 9 9"
                initial={{ pathLength: 0.25 }}
                animate={{ pathLength: [0.25, 0.75, 0.25] }}
                transition={{
                    duration: duration * 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </motion.svg>
    );
};

export default LoadingIcon;
