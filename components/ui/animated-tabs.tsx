"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
    label: string;
    value: string;
};

interface AnimatedTabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (value: string) => void;
    layoutId?: string;
    className?: string;
}

export default function AnimatedTabs({
    tabs,
    activeTab,
    onTabChange,
    layoutId = "activeTab",
    className,
}: AnimatedTabsProps) {
    return (
        <div className={cn("flex flex-row gap-4 border-b border-gray-200 dark:border-neutral-800", className)}>
            {tabs.map((tab) => (
                <motion.button
                    key={tab.value}
                    onClick={() => onTabChange(tab.value)}
                    className={cn(
                        "relative text-base/10 font-medium px-4 transition-colors cursor-pointer",
                        activeTab === tab.value
                            ? "text-neutral-700 dark:text-white"
                            : "text-neutral-500 dark:text-gray-400 hover:text-neutral-700 dark:hover:text-gray-300"
                    )}
                    whileHover={{ scale: 1.05 }}

                >
                    {tab.label}
                    {activeTab === tab.value && (
                        <motion.div
                            layoutId={layoutId}
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white"
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </motion.button>
            ))}
        </div>
    );
}
