"use client";

import { useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  SVGMotionProps,
  Easing,
} from "motion/react";

interface LocationIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
  ease?: Easing;
}

const LocationIcon = (props: LocationIconProps) => {
  const {
    size = 28, // Icon size in pixels
    duration = 1, // Animation duration in seconds
    strokeWidth = 2, // SVG stroke width
    isHovered = false, // When true, animate only on hover
    ease = "easeOut", // Animation easing function
    className,
    ...restProps
  } = props;

  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  // Shared transition properties
  const transition = {
    duration: duration,
    ease: ease,
    repeat: isHovered ? 0 : Infinity,
    repeatDelay: 1, // Reduced delay for smoother feel
  };

  // Pin bounce animation
  const pinVariants = {
    normal: { y: 0 },
    animate: {
      y: [0, -6, 0, -3, 0],
      transition: transition,
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
        {/* Location pin - animating group */}
        <m.g
          variants={pinVariants}
          initial="normal"
          animate={shouldAnimate ? "animate" : "normal"}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </m.g>
      </m.svg>
    </LazyMotion>
  );
};

export default LocationIcon;
