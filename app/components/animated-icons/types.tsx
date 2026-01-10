"use client";

import { SVGMotionProps } from "motion/react";

export interface IconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

export interface IconTypes {
    name: string;
    slug: string;
    component: React.ComponentType<IconProps>;
    href: string;
}
