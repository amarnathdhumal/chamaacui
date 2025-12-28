"use client";

import Link from "next/link";
import { motion, SVGMotionProps } from "motion/react";
import CopyIcon from "./copy-icon/copy-icon";
import WavyIcon from "./wavy-icon/wavy-icon";
import AdjustmentsHorizontalIcon from "./adjustments-icon/adjustments-icon";

interface IconProps extends SVGMotionProps<SVGSVGElement> {
    size?: number;
}

interface IconTypes {
    name: string;
    component: React.ComponentType<IconProps>;
    href: string;
}

const icons: IconTypes[] = [
    {
        name: "Copy",
        component: CopyIcon,
        href: "/components/animated-icons/copy-icon",
    },
    {
        name: "Wavy",
        component: WavyIcon,
        href: "/components/animated-icons/wavy-icon",
    },
    {
        name: "Adjustments",
        component: AdjustmentsHorizontalIcon,
        href: "/components/animated-icons/adjustments-icon",
    },
];

export default function AnimatedIconsPage() {
    return (
        <div className="w-full  mx-auto ">
            <div className="mb-5 md:mb-10">
                <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-semibold tracking-tight text-black dark:text-white">Animated Icons</h1>
                <p className="text-base/5 md:text-lg/7 text-neutral-500 dark:text-gray-400 tracking-tight mt-4   max-w-[750px]">
                    A collection of smooth, micro-interaction animations for your icons.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ">
                {icons.map((icon) => (
                    <Link key={icon.name} href={icon.href} className="group block">
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center justify-center p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors h-[200px]"
                        >
                            <div className="mb-4 text-black dark:text-white group-hover:scale-110 transition-transform duration-300">
                                <icon.component size={48} />
                            </div>
                            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                {icon.name}
                            </span>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
