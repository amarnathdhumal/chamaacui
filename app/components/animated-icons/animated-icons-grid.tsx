"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, SVGMotionProps, AnimatePresence } from "motion/react";
import { IconCopy, IconCheck, IconTerminal2 } from "@tabler/icons-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyIcon from "@/registry/chamaac/animated-icons/copy-icon";
import WavyIcon from "@/registry/chamaac/animated-icons/wavy-icon";
import AdjustmentsHorizontalIcon from "@/registry/chamaac/animated-icons/adjustments-icon";
import ScanIcon from "@/registry/chamaac/animated-icons/scan-icon";
import BellIcon from "@/registry/chamaac/animated-icons/bell-icon";
import SettingsIcon from "@/registry/chamaac/animated-icons/settings-icon";
import ActivityIcon from "@/registry/chamaac/animated-icons/activity-icon";
import RefreshIcon from "@/registry/chamaac/animated-icons/refresh-icon";
import WifiIcon from "@/registry/chamaac/animated-icons/wifi-icon";
import ArrowRightIcon from "@/registry/chamaac/animated-icons/arrow-right-icon";
import DownloadIcon from "@/registry/chamaac/animated-icons/download-icon";
import GlobeIcon from "@/registry/chamaac/animated-icons/globe-icon";
import StarIcon from "@/registry/chamaac/animated-icons/star-icon";
import HourglassIcon from "@/registry/chamaac/animated-icons/hourglass-icon";
import LightbulbIcon from "@/registry/chamaac/animated-icons/lightbulb-icon";
import MusicIcon from "@/registry/chamaac/animated-icons/music-icon";
import HeartIcon from "@/registry/chamaac/animated-icons/heart-icon";
import MailIcon from "@/registry/chamaac/animated-icons/mail-icon";
import LocationIcon from "@/registry/chamaac/animated-icons/location-icon";
import LockIcon from "@/registry/chamaac/animated-icons/lock-icon";
import RocketIcon from "@/registry/chamaac/animated-icons/rocket-icon";
import ZapIcon from "@/registry/chamaac/animated-icons/zap-icon";
import EyeIcon from "@/registry/chamaac/animated-icons/eye-icon";
import SendIcon from "@/registry/chamaac/animated-icons/send-icon";
import VolumeIcon from "@/registry/chamaac/animated-icons/volume-icon";
import CheckIcon from "@/registry/chamaac/animated-icons/check-icon";
import SparkleIcon from "@/registry/chamaac/animated-icons/sparkle-icon";
import CalendarIcon from "@/registry/chamaac/animated-icons/calendar-icon";
import ShieldIcon from "@/registry/chamaac/animated-icons/shield-icon";
import UploadIcon from "@/registry/chamaac/animated-icons/upload-icon";
import MessageIcon from "@/registry/chamaac/animated-icons/message-icon";
import SearchIcon from "@/registry/chamaac/animated-icons/search-icon";
import CloseIcon from "@/registry/chamaac/animated-icons/close-icon";
import ClockIcon from "@/registry/chamaac/animated-icons/clock-icon";
import LayersIcon from "@/registry/chamaac/animated-icons/layers-icon";
import MoonIcon from "@/registry/chamaac/animated-icons/moon-icon";
import SunIcon from "@/registry/chamaac/animated-icons/sun-icon";
import TrashIcon from "@/registry/chamaac/animated-icons/trash-icon";
import BatteryIcon from "@/registry/chamaac/animated-icons/battery-icon";
import GiftIcon from "@/registry/chamaac/animated-icons/gift-icon";
import CrownIcon from "@/registry/chamaac/animated-icons/crown-icon";
import MagnetIcon from "@/registry/chamaac/animated-icons/magnet-icon";
import ThumbsUpIcon from "@/registry/chamaac/animated-icons/thumbs-up-icon";

interface IconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
    isHovered?: boolean;
}

interface IconTypes {
    name: string;
    slug: string;
    component: React.ComponentType<IconProps>;
    href: string;
}

const icons: IconTypes[] = [
    { name: "Copy", slug: "copy-icon", component: CopyIcon, href: "/components/animated-icons/copy-icon" },
    { name: "Wavy", slug: "wavy-icon", component: WavyIcon, href: "/components/animated-icons/wavy-icon" },
    { name: "Adjustments", slug: "adjustments-icon", component: AdjustmentsHorizontalIcon, href: "/components/animated-icons/adjustments-icon" },
    { name: "Scan", slug: "scan-icon", component: ScanIcon, href: "/components/animated-icons/scan-icon" },
    { name: "Bell", slug: "bell-icon", component: BellIcon, href: "/components/animated-icons/bell-icon" },
    { name: "Settings", slug: "settings-icon", component: SettingsIcon, href: "/components/animated-icons/settings-icon" },
    { name: "Activity", slug: "activity-icon", component: ActivityIcon, href: "/components/animated-icons/activity-icon" },
    { name: "Refresh", slug: "refresh-icon", component: RefreshIcon, href: "/components/animated-icons/refresh-icon" },
    { name: "Wifi", slug: "wifi-icon", component: WifiIcon, href: "/components/animated-icons/wifi-icon" },
    { name: "Arrow Right", slug: "arrow-right-icon", component: ArrowRightIcon, href: "/components/animated-icons/arrow-right-icon" },
    { name: "Download", slug: "download-icon", component: DownloadIcon, href: "/components/animated-icons/download-icon" },
    { name: "Globe", slug: "globe-icon", component: GlobeIcon, href: "/components/animated-icons/globe-icon" },
    { name: "Star", slug: "star-icon", component: StarIcon, href: "/components/animated-icons/star-icon" },
    { name: "Hourglass", slug: "hourglass-icon", component: HourglassIcon, href: "/components/animated-icons/hourglass-icon" },
    { name: "Lightbulb", slug: "lightbulb-icon", component: LightbulbIcon, href: "/components/animated-icons/lightbulb-icon" },
    { name: "Music", slug: "music-icon", component: MusicIcon, href: "/components/animated-icons/music-icon" },
    { name: "Heart", slug: "heart-icon", component: HeartIcon, href: "/components/animated-icons/heart-icon" },
    { name: "Mail", slug: "mail-icon", component: MailIcon, href: "/components/animated-icons/mail-icon" },
    { name: "Location", slug: "location-icon", component: LocationIcon, href: "/components/animated-icons/location-icon" },
    { name: "Lock", slug: "lock-icon", component: LockIcon, href: "/components/animated-icons/lock-icon" },
    { name: "Rocket", slug: "rocket-icon", component: RocketIcon, href: "/components/animated-icons/rocket-icon" },
    { name: "Zap", slug: "zap-icon", component: ZapIcon, href: "/components/animated-icons/zap-icon" },
    { name: "Eye", slug: "eye-icon", component: EyeIcon, href: "/components/animated-icons/eye-icon" },
    { name: "Send", slug: "send-icon", component: SendIcon, href: "/components/animated-icons/send-icon" },
    { name: "Volume", slug: "volume-icon", component: VolumeIcon, href: "/components/animated-icons/volume-icon" },
    { name: "Check", slug: "check-icon", component: CheckIcon, href: "/components/animated-icons/check-icon" },
    { name: "Sparkle", slug: "sparkle-icon", component: SparkleIcon, href: "/components/animated-icons/sparkle-icon" },
    { name: "Calendar", slug: "calendar-icon", component: CalendarIcon, href: "/components/animated-icons/calendar-icon" },
    { name: "Shield", slug: "shield-icon", component: ShieldIcon, href: "/components/animated-icons/shield-icon" },
    { name: "Upload", slug: "upload-icon", component: UploadIcon, href: "/components/animated-icons/upload-icon" },
    { name: "Message", slug: "message-icon", component: MessageIcon, href: "/components/animated-icons/message-icon" },
    { name: "Search", slug: "search-icon", component: SearchIcon, href: "/components/animated-icons/search-icon" },
    { name: "Close", slug: "close-icon", component: CloseIcon, href: "/components/animated-icons/close-icon" },
    { name: "Clock", slug: "clock-icon", component: ClockIcon, href: "/components/animated-icons/clock-icon" },
    { name: "Layers", slug: "layers-icon", component: LayersIcon, href: "/components/animated-icons/layers-icon" },
    { name: "Moon", slug: "moon-icon", component: MoonIcon, href: "/components/animated-icons/moon-icon" },
    { name: "Sun", slug: "sun-icon", component: SunIcon, href: "/components/animated-icons/sun-icon" },
    { name: "Trash", slug: "trash-icon", component: TrashIcon, href: "/components/animated-icons/trash-icon" },
    { name: "Battery", slug: "battery-icon", component: BatteryIcon, href: "/components/animated-icons/battery-icon" },
    { name: "Gift", slug: "gift-icon", component: GiftIcon, href: "/components/animated-icons/gift-icon" },
    { name: "Crown", slug: "crown-icon", component: CrownIcon, href: "/components/animated-icons/crown-icon" },
    { name: "Magnet", slug: "magnet-icon", component: MagnetIcon, href: "/components/animated-icons/magnet-icon" },
    { name: "Thumbs Up", slug: "thumbs-up-icon", component: ThumbsUpIcon, href: "/components/animated-icons/thumbs-up-icon" },
];

interface IconCardProps {
    icon: IconTypes;
}

function IconCard({ icon }: IconCardProps) {
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
                className="relative flex flex-col items-center justify-center  rounded-[16px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black transition-colors h-[150px]"
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
                                        className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                    >
                                        {codeCopied ? (
                                            <IconCheck className="size-4 text-green-500" />
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
                                        className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                    >
                                        {cliCopied ? (
                                            <IconCheck className="size-4 text-green-500" />
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
                    <icon.component size={40} />
                </div>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {icon.name}
                </span>
            </motion.div>
        </Link>
    );
}

export default function AnimatedIconsGrid() {
    return (
        <div className="w-full mx-auto mb-20">
            <div className="mb-5 md:mb-10">
                <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-semibold tracking-tight text-black dark:text-white">Animated Icons</h1>
                <p className="text-base/5 md:text-lg/7 text-neutral-500 dark:text-gray-400 tracking-tight mt-4 max-w-[750px]">
                    A collection of smooth, micro-interaction animations for your icons.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {icons.map((icon) => (
                    <IconCard key={icon.name} icon={icon} />
                ))}
            </div>
        </div>
    );
}
