"use client";

import { useState } from "react";
import { motion, SVGMotionProps, Easing } from "motion/react";

interface IconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
    repeatDelay?: number;
    ease?: Easing;
}


const EditIcon = (props: IconProps) => {
    const {
        size = 28,
        duration = 1.5,
        strokeWidth = 2,
        isHovered = false,
        repeatDelay = 1,
        ease = "easeInOut",
        className,
        ...restProps
    } = props;

    const [isHoveredInternal, setIsHoveredInternal] = useState(false);
    const shouldAnimate = isHovered ? isHoveredInternal : true;

    
    const transition = {
        duration: duration,
        ease: ease,
        repeat: isHovered ? 0 : Infinity,
        repeatDelay: repeatDelay,
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path 
                d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" 
                animate={shouldAnimate ? { rotate: [0, -5, 5, 0], x: [0, 1, 0] } : { rotate: 0, x: 0 }}
                transition={transition}
                style={{ originX: "50%", originY: "50%" }}
            />
            <motion.line 
                x1="13.5" y1="6.5" x2="17.5" y2="10.5" 
                animate={shouldAnimate ? { rotate: [0, -5, 5, 0], x: [0, 1, 0] } : { rotate: 0, x: 0 }}
                transition={transition}
                style={{ originX: "50%", originY: "50%" }}
            />
        </motion.svg>
    )
    
}

export default EditIcon;
