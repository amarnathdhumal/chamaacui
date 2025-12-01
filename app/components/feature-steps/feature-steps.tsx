"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
    step?: string;
    title: string;
    content: string;
    image: string;
}

interface FeatureStepsProps {
    features: Feature[];
    className?: string;
    autoPlayInterval?: number;
    imageClassName?: string;
}

export default function FeatureSteps({
    features,
    className,
    autoPlayInterval = 3000,
    imageClassName = "h-[400px]",
}: FeatureStepsProps) {
    const [currentFeature, setCurrentFeature] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % features.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlayInterval]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={cn("flex flex-col md:flex-row w-full md:items-stretch max-w-[1440px] mx-auto", className)}>
            {/* Left Column: Feature List */}
            <div className="flex flex-col w-full md:w-1/2 border border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        layoutId={feature.title}
                        onClick={() => setCurrentFeature(index)}
                        className="p-4 md:p-10 relative cursor-pointer"
                    >
                        <h3 className="text-base md:text-lg leading-none text-black dark:text-white">
                            {feature.title}
                        </h3>
                        <p className="mt-2 text-sm  text-neutral-500">
                            {feature.content}
                        </p>
                        {index === currentFeature && (
                            <motion.div

                                className="absolute h-[1px] bottom-0 left-0 bg-black dark:bg-white"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: autoPlayInterval / 1000, ease: "easeIn" }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Right Column: Image Display */}
            <div className={cn(
                "w-full md:w-1/2 border border-black/10 dark:border-white/10 md:border-l-0 border-t-0 md:border-t relative p-4 md:p-5 overflow-hidden",
                imageClassName
            )}>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentFeature}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={features[currentFeature].image}
                            alt={features[currentFeature].title}
                            fill
                            className="rounded object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
