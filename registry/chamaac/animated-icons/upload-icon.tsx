"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, SVGMotionProps } from "motion/react";

interface UploadIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const UploadIcon = (props: UploadIconProps) => {
  const {
    size = 28,
    duration = 1.5,
    strokeWidth = 2,
    isHovered = false,
    className,
    ...restProps
  } = props;
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const groupAnimationProps = {
    animate: shouldAnimate ? { y: [0, -3, 0] } : { y: 0 },
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
        overflow="visible"
        onMouseEnter={() => isHovered && setIsHoveredInternal(true)}
        onMouseLeave={() => isHovered && setIsHoveredInternal(false)}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <m.g {...groupAnimationProps}>
          <path d="M7 9l5 -5l5 5" />
          <path d="M12 4l0 12" />
        </m.g>
      </m.svg>
    </LazyMotion>
  );
};

export default UploadIcon;
