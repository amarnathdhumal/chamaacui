"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, SVGMotionProps } from "motion/react";

interface ArrowRightIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const ArrowRightIcon = (props: ArrowRightIconProps) => {
  const {
    size = 28,
    duration = 1,
    strokeWidth = 2,
    isHovered = false,
    className,
    ...restProps
  } = props;
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const pathAnimationProps = {
    animate: shouldAnimate ? { x: [0, 4, 0] } : { x: 0 },
    transition: {
      duration: duration,
      ease: "easeInOut" as const,
      repeat: isHovered ? 0 : Infinity,
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
        <m.path d="M5 12l14 0" {...pathAnimationProps} />
        <m.path d="M13 18l6 -6" {...pathAnimationProps} />
        <m.path d="M13 6l6 6" {...pathAnimationProps} />
      </m.svg>
    </LazyMotion>
  );
};

export default ArrowRightIcon;
