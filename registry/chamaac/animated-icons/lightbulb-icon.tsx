"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, SVGMotionProps } from "motion/react";

interface LightbulbIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
  duration?: number;
  strokeWidth?: number;
  isHovered?: boolean;
}

const LightbulbIcon = (props: LightbulbIconProps) => {
  const {
    size = 28,
    duration = 2,
    strokeWidth = 2,
    isHovered = false,
    className,
    ...restProps
  } = props;
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);

  const shouldAnimate = isHovered ? isHoveredInternal : true;

  const pathAnimationProps = {
    animate: shouldAnimate ? { opacity: [0.2, 1, 0.2] } : { opacity: 1 },
    transition: {
      duration: duration,
      repeat: isHovered ? 0 : Infinity,
      ease: "easeInOut" as const,
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
          d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"
          {...pathAnimationProps}
        />
        <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
        <path d="M9.7 17l4.6 0" />
      </m.svg>
    </LazyMotion>
  );
};

export default LightbulbIcon;
