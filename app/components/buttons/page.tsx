"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SlideUpButton from "../slideup-button/slide-up-button";
import ShimmerButton from "../shimmer-button/shimmer-button";
import FocusButton from "./focus-button/focus-button";
import PremiumButton from "../premium-button/premium-button";

interface ButtonTypes {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.ComponentType<any>;
    href: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: any;
}

const buttons: ButtonTypes[] = [
    {
        name: "Premium Button",
        component: PremiumButton,
        href: "/components/premium-button",
        props: {
            text: "Premium Button",
        }
    },
    {
        name: "Shimmer Button",
        component: ShimmerButton,
        href: "/components/shimmer-button",
        props: {
            text: "Book a Free Call",
        }
    },
    {
        name: "Slide Up Button",
        component: SlideUpButton,
        href: "/components/slideup-button",
        props: {
            children: "Hover me",
            className: "bg-[#f73b20] text-white",
        }
    },
    {
        name: "Focus Button",
        component: FocusButton,
        href: "/components/focus-button",
        props: {
            children: "Contact us",
        }
    },

];

export default function ButtonsPage() {
    return (
        <div className="w-full mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-black dark:text-white mb-2">Buttons</h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                    A collection of interactive and animated buttons for your applications.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {buttons.map((button) => (
                    <Link key={button.name} href={button.href} className=" block">
                        <motion.div

                            className="flex flex-col items-center justify-center p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors h-[200px]"
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
