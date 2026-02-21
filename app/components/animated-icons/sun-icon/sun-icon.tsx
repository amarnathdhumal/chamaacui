"use client";

import { m, SVGMotionProps } from "motion/react";

interface SunIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const SunIcon = (props: SunIconProps) => {
  const { size = 24, className, ...restProps } = props;

  return (
    <m.svg
      {...restProps}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      animate={{ rotate: 360 }}
      transition={{
        duration: 6,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </m.svg>
  );
};

export default SunIcon;
