"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SlideUpButton from "./slideup-button/slide-up-button";
import ShimmerButton from "./shimmer-button/shimmer-button";
import FocusButton from "./focus-button/focus-button";
import NeoBrutalistButton from "./neo-brutalist-button/neo-brutalist-button";
import PremiumButton from "./premium-button/premium-button";

interface ButtonTypes {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.ComponentType<any>;
    href: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: any;
    bgColor?: string;
}

const buttons: ButtonTypes[] = [
    {
        name: "Premium Button",
        component: PremiumButton,
        href: "/components/buttons/premium-button",
        props: {
            text: "Premium Button",
        },
        bgColor: "bg-white dark:bg-neutral-900"
    },
    {
        name: "Shimmer Button",
        component: ShimmerButton,
        href: "/components/buttons/shimmer-button",
        props: {
            text: "Book a Free Call",
        },
        bgColor: "bg-white dark:bg-neutral-900"
    },
    {
        name: "Neo Brutalist Button",
        component: NeoBrutalistButton,
        href: "/components/buttons/neo-brutalist-button",
        props: {
            text: "Neo Brutalist",
        },
        bgColor: "bg-white"
    },
    {
        name: "Slide Up Button",
        component: SlideUpButton,
        href: "/components/buttons/slideup-button",
        props: {
            children: "Hover me",
            className: "bg-[#f73b20] text-white",
        },
        bgColor: "bg-white dark:bg-neutral-900"
    },
    {
        name: "Focus Button",
        component: FocusButton,
        href: "/components/buttons/focus-button",
        props: {
            children: "Contact us",
        },
        bgColor: "bg-white dark:bg-neutral-900"
    },

];

export default function ButtonsGrid() {
    return (
        <div className="w-full mx-auto">
            <div className="mb-5 md:mb-10">
                <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-semibold tracking-tight text-black dark:text-white">Buttons</h1>
                <p className=" text-base/5 md:text-lg/7 text-neutral-500 dark:text-gray-400 tracking-tight mt-2 md:mt-4   max-w-[750px]">
                    A collection of interactive and animated buttons for your applications.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {buttons.map((button) => (
                    <Link key={button.name} href={button.href} className=" block">
                        <motion.div

                            className={`flex flex-col items-center justify-center p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 ${button.bgColor || "bg-white dark:bg-neutral-900"} hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors h-[200px]`}
                        >
                            <div className="mb-4 scale-90 transition-transform duration-300">
                                <button.component {...button.props} />
                            </div>
                            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                {button.name}
                            </span>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
