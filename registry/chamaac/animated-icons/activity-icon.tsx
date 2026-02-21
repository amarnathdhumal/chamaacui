"use client";

import { useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  SVGMotionProps,
  Easing,
} from "motion/react";

interface ActivityIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
  ease?: Easing;
}

const ActivityIcon = (props: ActivityIconProps) => {
  const {
    size = 28, // Icon size in pixels
    duration = 2, // Animation duration in seconds
    strokeWidth = 2, // SVG stroke width
    isHovered = false, // When true, animate only on hover
    ease = "easeInOut", // Animation easing function
    className,
    ...restProps
  } = props;

  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const pathAnimationProps = {
    animate: shouldAnimate
      ? {
          pathLength: [0, 1, 1, 0],
          opacity: 1,
        }
      : { pathLength: 1, opacity: 1 },
    transition: {
      duration: duration,
      ease: ease,
      repeat: isHovered ? 0 : Infinity,
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
        onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
        onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <m.path
          d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"
          {...pathAnimationProps}
        />
      </m.svg>
    </LazyMotion>
  );
};

export default ActivityIcon;
