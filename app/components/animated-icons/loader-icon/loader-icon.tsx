"use client";

import { motion, SVGMotionProps } from "motion/react";

interface LoaderIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
}

const LoaderIcon = (props: LoaderIconProps) => {
    const { size = 24, className, ...restProps } = props;

    return (
        <motion.svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            animate={{ rotate: 360 }}
            transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
    )
}

export default LoaderIcon;
