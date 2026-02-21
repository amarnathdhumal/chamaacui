"use client";

import { m, SVGMotionProps } from "motion/react";

interface UserIconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const UserIcon = (props: UserIconProps) => {
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
        d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </m.svg>
  );
};

export default UserIcon;
