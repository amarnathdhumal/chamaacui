"use client";

import { useState } from "react";
import { motion, SVGMotionProps } from "motion/react";

interface MailIconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

const MailIcon = (props: MailIconProps) => {
    const { size = 28, duration = 4, strokeWidth = 2, isHovered = false, className, ...restProps } = props;
    const [isHoveredInternal, setIsHoveredInternal] = useState(false);

    const shouldAnimate = isHovered ? isHoveredInternal : true;

    const envelopeProps = {
        animate: shouldAnimate ? { y: [0, -2, 0] } : { y: 0 },
        transition: { duration: duration, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" as const }
    };

    const flapProps = {
        animate: shouldAnimate ? { pathLength: [0, 1, 1, 0], opacity: 1 } : { pathLength: 1, opacity: 1 },
        transition: { duration: duration / 2, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" as const, repeatDelay: 1 },
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
            onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
            onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                {...envelopeProps}
            />
            <motion.path d="M3 7l9 6l9 -6" {...flapProps} />
        </motion.svg>
    )
}

export default MailIcon;
