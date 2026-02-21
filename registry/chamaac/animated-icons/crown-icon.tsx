"use client";

import { useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  SVGMotionProps,
  Easing,
} from "motion/react";

interface CrownIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
  repeatDelay?: number;
  ease?: Easing;
}

const CrownIcon = (props: CrownIconProps) => {
  const {
    size = 28, // Icon size in pixels
    duration = 1, // Animation duration in seconds
    strokeWidth = 2, // SVG stroke width
    isHovered = false, // When true, animate only on hover
    repeatDelay = 1.5, // Delay between animation loops (seconds)
    ease = "easeInOut", // Animation easing function
    className,
    ...restProps
  } = props;

  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const sparkle1Props = {
    animate: shouldAnimate
      ? {
          rotate: [0, -15, 15, -10, 10, -5, 5, 0],
          y: [0, -2, 0, -1, 0],
        }
      : { rotate: 0, y: 0 },
    transition: {
      duration: duration,
      ease: ease,
      repeat: isHovered ? 0 : Infinity,
      repeatDelay: repeatDelay,
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
        {...sparkle1Props}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <m.g style={{ transformOrigin: "center" }}>
          <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
        </m.g>
      </m.svg>
    </LazyMotion>
  );
};

export default CrownIcon;
