"use client";

import Link from "next/link";
import { motion, SVGMotionProps } from "motion/react";
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

interface IconProps extends Omit<SVGMotionProps<SVGSVGElement>, "strokeWidth"> {
    size?: number;
    duration?: number;
    strokeWidth?: number;
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
    {
        name: "Scan",
        component: ScanIcon,
        href: "/components/animated-icons/scan-icon",
    },
    {
        name: "Bell",
        component: BellIcon,
        href: "/components/animated-icons/bell-icon",
    },
    {
        name: "Settings",
        component: SettingsIcon,
        href: "/components/animated-icons/settings-icon",
    },
    {
        name: "Activity",
        component: ActivityIcon,
        href: "/components/animated-icons/activity-icon",
    },
    {
        name: "Refresh",
        component: RefreshIcon,
        href: "/components/animated-icons/refresh-icon",
    },
    {
        name: "Wifi",
        component: WifiIcon,
        href: "/components/animated-icons/wifi-icon",
    },
    {
        name: "Arrow Right",
        component: ArrowRightIcon,
        href: "/components/animated-icons/arrow-right-icon",
    },
    {
        name: "Download",
        component: DownloadIcon,
        href: "/components/animated-icons/download-icon",
    },
    {
        name: "Globe",
        component: GlobeIcon,
        href: "/components/animated-icons/globe-icon",
    },
    {
        name: "Star",
        component: StarIcon,
        href: "/components/animated-icons/star-icon",
    },
    {
        name: "Hourglass",
        component: HourglassIcon,
        href: "/components/animated-icons/hourglass-icon",
    },
    {
        name: "Lightbulb",
        component: LightbulbIcon,
        href: "/components/animated-icons/lightbulb-icon",
    },
    {
        name: "Music",
        component: MusicIcon,
        href: "/components/animated-icons/music-icon",
    },
    {
        name: "Heart",
        component: HeartIcon,
        href: "/components/animated-icons/heart-icon",
    },
    {
        name: "Mail",
        component: MailIcon,
        href: "/components/animated-icons/mail-icon",
    },
    {
        name: "Location",
        component: LocationIcon,
        href: "/components/animated-icons/location-icon",
    },
    {
        name: "Lock",
        component: LockIcon,
        href: "/components/animated-icons/lock-icon",
    },
];

export default function AnimatedIconsGrid() {
    return (
        <div className="w-full  mx-auto mb-20">
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
                            className="flex flex-col items-center justify-center p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black  transition-colors h-[200px]"
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
