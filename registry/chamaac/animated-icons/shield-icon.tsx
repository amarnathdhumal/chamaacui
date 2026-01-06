"use client";

import { motion, SVGMotionProps } from "motion/react";

interface ShieldIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
}

const ShieldIcon = (props: ShieldIconProps) => {
    const { size = 24, duration = 2.5, strokeWidth = 2, className, ...restProps } = props;

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
            {/* Shield outline */}
            <motion.path
                d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
                animate={{
                    scale: [1, 1.03, 1],
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                style={{ transformOrigin: "12px 12px" }}
            />
            {/* Checkmark inside */}
            <motion.path
                d="M9 12l2 2l4 -4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [0, 0.4, 0.8, 1],
                }}
            />
        </motion.svg>
    );
};

export default ShieldIcon;
