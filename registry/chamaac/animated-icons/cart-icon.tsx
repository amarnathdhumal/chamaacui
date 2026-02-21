"use client";

import { useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  SVGMotionProps,
  Easing,
} from "motion/react";

interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
  repeatDelay?: number;
  ease?: Easing;
}

const CartIcon = (props: IconProps) => {
  const {
    size = 28,
    duration = 1,
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
        overflow="visible"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <m.g
          animate={shouldAnimate ? { x: [0, 5, 0] } : { x: 0 }}
          transition={transition}
        >
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </m.g>
      </m.svg>
    </LazyMotion>
  );
};

export default CartIcon;
