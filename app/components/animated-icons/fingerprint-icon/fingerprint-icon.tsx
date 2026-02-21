"use client";

import { m, SVGMotionProps } from "motion/react";

interface FingerprintIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const FingerprintIcon = (props: FingerprintIconProps) => {
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
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <m.path
        d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 0.1,
        }}
      />
      <m.path
        d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 0.3,
        }}
      />
      <m.path
        d="M12 11v2a14 14 0 0 0 2.5 8"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 0.2,
        }}
      />
      <m.path
        d="M8 15a18 18 0 0 0 1.8 6"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 0.4,
        }}
      />
      <m.path
        d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      />
    </m.svg>
  );
};

export default FingerprintIcon;
