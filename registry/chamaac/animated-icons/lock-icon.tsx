"use client";

import { useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  SVGMotionProps,
  Easing,
} from "motion/react";

interface LockIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
  repeatDelay?: number;
  ease?: Easing;
}

const LockIcon = (props: LockIconProps) => {
  const {
    size = 28, // Icon size in pixels
    duration = 1.2, // Animation duration in seconds
    strokeWidth = 2, // SVG stroke width
    isHovered = false, // When true, animate only on hover
    repeatDelay = 1, // Delay between animation loops (seconds)
    ease = "easeInOut", // Animation easing function
    className,
    ...restProps
  } = props;

  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const pathAnimationProps = {
    animate: shouldAnimate
      ? { pathLength: [0, 1, 1, 0], opacity: 1 }
      : { pathLength: 1, opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      ease: ease,
      repeatDelay: repeatDelay,
      repeatType: "reverse" as const,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.svg
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
        <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <m.path d="M8 11v-4a4 4 0 1 1 8 0v4" {...pathAnimationProps} />
      </m.svg>
    </LazyMotion>
  );
};

export default LockIcon;
