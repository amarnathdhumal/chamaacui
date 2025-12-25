"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface InstallationSectionProps {
    componentSource: string;
    dependencies?: string[];
}

type PackageManager = "bun" | "npm" | "pnpm" | "yarn";

export default function InstallationSection({
    componentSource,
    dependencies = ["motion"],
}: InstallationSectionProps) {
    const [activePm, setActivePm] = useState<PackageManager>("npm");

    const getInstallCommand = (pm: PackageManager, deps: string[]) => {
        const depString = deps.join(" ");
        switch (pm) {
            case "npm": return `npm install ${depString}`;
            case "yarn": return `yarn add ${depString}`;
            case "pnpm": return `pnpm add ${depString}`;
            case "bun": return `bun add ${depString}`;
        }
    };

    const activeCommand = getInstallCommand(activePm, dependencies);

    return (
        <div className="mb-5 md:mb-10">
            <h2 className="text-2xl/7 md:text-3xl/7 tracking-tight text-black dark:text-white mb-4 font-semibold">
                Installation
            </h2>

            {/* Install Dependencies Section */}
            {dependencies.length > 0 && (
                <div className="mb-5 md:mb-10">
                    <h3 className="text-base/7 md:text-xl/7 text-black dark:text-white mb-4 font-medium">
                        Install Dependencies
                    </h3>
                    <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden">
                        <div className="bg-gray-50 dark:bg-neutral-900 p-2 border-b border-gray-200 dark:border-neutral-800">
                            <div className="flex flex-wrap gap-1 relative">
                                {(["npm", "yarn", "pnpm", "bun"] as PackageManager[]).map((pm) => (
                                    <button
                                        key={pm}
                                        onClick={() => setActivePm(pm)}
                                        className={cn(
                                            "px-4 py-2 rounded-[8px] text-sm/5  transition-colors leading-none relative z-10",
                                            activePm === pm
                                                ? "text-neutral-700 dark:text-white"
                                                : "text-neutral-500 dark:text-gray-400 hover:text-neutral-700 dark:hover:text-gray-300"
                                        )}
                                    >
                                        {activePm === pm && (
                                            <motion.div
                                                layoutId="activeBackground"
                                                className="absolute inset-0 bg-gray-200 dark:bg-neutral-800 rounded-[8px]"
                                                transition={{
                                                    duration: 0.3
                                                }}
                                            />
                                        )}
                                        <span className="relative z-10">{pm}</span>
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div className="relative bg-white dark:bg-neutral-950">
                            <div className="absolute top-4 right-4 ">
                                <CopyButton text={activeCommand} />
                            </div>
                            <div className="p-4">
                                <code className="text-sm font-mono text-neutral-500 dark:text-neutral-200">
                                    {activeCommand}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Component Code Section */}
            <div>
                <h3 className="text-base/7 md:text-xl/7 text-black dark:text-white mb-4 font-medium">
                    Component Code
                </h3>
                <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden">
                    <div className="bg-gray-50 dark:bg-neutral-900 p-4 border-b border-gray-200 dark:border-neutral-800">
                        <p className="text-sm/5 text-neutral-500 dark:text-gray-400">
                            Copy and paste the component code into your project.
                        </p>
                    </div>
                    <div className=" bg-white dark:bg-neutral-950 max-h-[350px] overflow-auto hide-scrollbar">
                        <div className="relative">
                            <div className="absolute top-4 right-4">
                                <CopyButton text={componentSource} />
                            </div>
                            <SyntaxHighlighter
                                language="tsx"
                                style={oneDark}
                                wrapLongLines={true}
                                customStyle={{
                                    margin: 0,
                                    padding: "1rem",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    width: "100%",
                                    maxWidth: "100%",
                                    boxSizing: "border-box",
                                    overflow: "auto",
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                    borderRadius: "0px",
                                }}
                            >
                                {componentSource}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

