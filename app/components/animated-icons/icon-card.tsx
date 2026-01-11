"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconCopy, IconCheck, IconTerminal2 } from "@tabler/icons-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconTypes } from "./types";

interface IconCardProps {
    icon: IconTypes;
    isHoveredMode: boolean;
}

export default function IconCard({ icon, isHoveredMode }: IconCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [codeCopied, setCodeCopied] = useState(false);
    const [cliCopied, setCliCopied] = useState(false);

    const cliCommand = `npx shadcn@latest add "https://chamaac.com/r/${icon.slug}.json"`;

    const handleCopyCode = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const response = await fetch(`/r/${icon.slug}.json`);
            const data = await response.json();
            if (data.files && data.files[0]?.content) {
                await navigator.clipboard.writeText(data.files[0].content);
                setCodeCopied(true);
                setTimeout(() => setCodeCopied(false), 2000);
            }
        } catch (error) {
            console.error("Failed to copy code:", error);
        }
    };


    const handleCopyCli = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        await navigator.clipboard.writeText(cliCommand);
        setCliCopied(true);
        setTimeout(() => setCliCopied(false), 2000);
    };

    return (
        <Link href={icon.href} className="group block">
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative flex flex-col items-center justify-center  rounded-[16px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black transition-colors h-[180px]"
            >
                {/* Hover action buttons */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-3 right-3 flex gap-1.5"
                        >
                            {/* Copy Code Button */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={handleCopyCode}
                                        className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                                    >
                                        {codeCopied ? (
                                            <IconCheck className="size-4 dark:text-white text-black" />
                                        ) : (
                                            <IconCopy className="size-4 text-neutral-600 dark:text-neutral-400" />
                                        )}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{codeCopied ? "Copied!" : "Copy Code"}</p>
                                </TooltipContent>
                            </Tooltip>

                            {/* Copy CLI Command Button */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        onClick={handleCopyCli}
                                        className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                                    >
                                        {cliCopied ? (
                                            <IconCheck className="size-4 dark:text-white text-black" />
                                        ) : (
                                            <IconTerminal2 className="size-4 text-neutral-600 dark:text-neutral-400" />
                                        )}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{cliCopied ? "Copied!" : "Copy CLI Command"}</p>
                                </TooltipContent>
                            </Tooltip>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mb-4 text-black dark:text-white  transition-transform duration-300">
                    <icon.component size={40} isHovered={isHoveredMode} />
                </div>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {icon.name}
                </span>
            </motion.div>
        </Link>
    );
}
