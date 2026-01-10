"use client";

import { useState, useId } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface EyeIconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const EyeIcon = (props: EyeIconProps) => {
    const { size = 28, duration = 3, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);
    const clipId = useId();

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const eyeAnimation = {
        d: [
            "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
            "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
            "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
            "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z",
        ],
    };

    const lidAnimation = {
        d: [
            "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
            "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6",
            "M3 12c2.4 4 5.4 6 9 6c3.6 0 6.6 -2 9 -6",
            "M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
        ],
    };

    const clipAnimationProps = {
        animate: shouldAnimate ? eyeAnimation : undefined,
        transition: { duration: duration, ease: "easeInOut" as const, repeat: isHovered ? 0 : Infinity, times: [0, 0.4, 0.6, 1] }
    };

    const lidAnimationProps = {
        animate: shouldAnimate ? lidAnimation : undefined,
        transition: { duration: duration, ease: "easeInOut" as const, repeat: isHovered ? 0 : Infinity, times: [0, 0.4, 0.6, 1] }
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
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
        >
            <defs>
                <clipPath id={clipId}>
                    <motion.path
                        d="M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6z"
                        {...clipAnimationProps}
                    />
                </clipPath>
            </defs>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <g clipPath={`url(#${clipId})`}>
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            </g>
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6" />
            <motion.path
                d="M3 12c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                {...lidAnimationProps}
            />
        </motion.svg>
    );
};

export default EyeIcon;
