"use client";

import { IconTypes } from "./types";
import CopyIcon from "@/registry/chamaac/animated-icons/copy-icon";
import WavyIcon from "@/registry/chamaac/animated-icons/wavy-icon";
import MenuIcon from "@/registry/chamaac/animated-icons/menu-icon";
import CartIcon from "@/registry/chamaac/animated-icons/cart-icon";
import AlertCircleIcon from "@/registry/chamaac/animated-icons/alert-circle-icon";
import ExternalLinkIcon from "@/registry/chamaac/animated-icons/external-link-icon";
import CloudIcon from "@/registry/chamaac/animated-icons/cloud-icon";
import CreditCardIcon from "@/registry/chamaac/animated-icons/credit-card-icon";
import AdjustmentsHorizontalIcon from "@/registry/chamaac/animated-icons/adjustments-icon";
import ScanIcon from "@/registry/chamaac/animated-icons/scan-icon";
import BellIcon from "@/registry/chamaac/animated-icons/bell-icon";
import SettingsIcon from "@/registry/chamaac/animated-icons/settings-icon";
import ActivityIcon from "@/registry/chamaac/animated-icons/activity-icon";
import RefreshIcon from "@/registry/chamaac/animated-icons/refresh-icon";
import WifiIcon from "@/registry/chamaac/animated-icons/wifi-icon";
import ArrowRightIcon from "@/registry/chamaac/animated-icons/arrow-right-icon";
import ArrowLeftIcon from "@/registry/chamaac/animated-icons/arrow-left-icon";
import ArrowUpIcon from "@/registry/chamaac/animated-icons/arrow-up-icon";
import ArrowDownIcon from "@/registry/chamaac/animated-icons/arrow-down-icon";
import ArrowUpRightIcon from "@/registry/chamaac/animated-icons/arrow-up-right-icon";
import ArrowUpLeftIcon from "@/registry/chamaac/animated-icons/arrow-up-left-icon";
import ArrowDownLeftIcon from "@/registry/chamaac/animated-icons/arrow-down-left-icon";
import ArrowDownRightIcon from "@/registry/chamaac/animated-icons/arrow-down-right-icon";
import ChevronRightIcon from "@/registry/chamaac/animated-icons/chevron-right-icon";
import ChevronLeftIcon from "@/registry/chamaac/animated-icons/chevron-left-icon";
import ChevronUpIcon from "@/registry/chamaac/animated-icons/chevron-up-icon";
import ChevronDownIcon from "@/registry/chamaac/animated-icons/chevron-down-icon";
import ChevronsRightIcon from "@/registry/chamaac/animated-icons/chevrons-right-icon";
import ChevronsLeftIcon from "@/registry/chamaac/animated-icons/chevrons-left-icon";
import ChevronsUpIcon from "@/registry/chamaac/animated-icons/chevrons-up-icon";
import ChevronsDownIcon from "@/registry/chamaac/animated-icons/chevrons-down-icon";
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
import ThumbsUpIcon from "@/registry/chamaac/animated-icons/thumbs-up-icon";

export const icons: IconTypes[] = [
    { name: "Copy", slug: "copy-icon", component: CopyIcon, href: "/components/animated-icons/copy-icon" },
    { name: "Menu", slug: "menu-icon", component: MenuIcon, href: "/components/animated-icons/menu-icon" },
    { name: "Alert", slug: "alert-circle-icon", component: AlertCircleIcon, href: "/components/animated-icons/alert-circle-icon" },
    { name: "External Link", slug: "external-link-icon", component: ExternalLinkIcon, href: "/components/animated-icons/external-link-icon" },
    { name: "Cloud", slug: "cloud-icon", component: CloudIcon, href: "/components/animated-icons/cloud-icon" },
    { name: "Credit Card", slug: "credit-card-icon", component: CreditCardIcon, href: "/components/animated-icons/credit-card-icon" },
    { name: "Cart", slug: "cart-icon", component: CartIcon, href: "/components/animated-icons/cart-icon" },
    { name: "Wavy", slug: "wavy-icon", component: WavyIcon, href: "/components/animated-icons/wavy-icon" },
    { name: "Adjustments", slug: "adjustments-icon", component: AdjustmentsHorizontalIcon, href: "/components/animated-icons/adjustments-icon" },
    { name: "Scan", slug: "scan-icon", component: ScanIcon, href: "/components/animated-icons/scan-icon" },
    { name: "Bell", slug: "bell-icon", component: BellIcon, href: "/components/animated-icons/bell-icon" },
    { name: "Settings", slug: "settings-icon", component: SettingsIcon, href: "/components/animated-icons/settings-icon" },
    { name: "Activity", slug: "activity-icon", component: ActivityIcon, href: "/components/animated-icons/activity-icon" },
    { name: "Refresh", slug: "refresh-icon", component: RefreshIcon, href: "/components/animated-icons/refresh-icon" },
    { name: "Wifi", slug: "wifi-icon", component: WifiIcon, href: "/components/animated-icons/wifi-icon" },
    { name: "Arrow Right", slug: "arrow-right-icon", component: ArrowRightIcon, href: "/components/animated-icons/arrow-right-icon" },
    { name: "Arrow Left", slug: "arrow-left-icon", component: ArrowLeftIcon, href: "/components/animated-icons/arrow-left-icon" },
    { name: "Arrow Up", slug: "arrow-up-icon", component: ArrowUpIcon, href: "/components/animated-icons/arrow-up-icon" },
    { name: "Arrow Down", slug: "arrow-down-icon", component: ArrowDownIcon, href: "/components/animated-icons/arrow-down-icon" },
    { name: "Arrow Up Right", slug: "arrow-up-right-icon", component: ArrowUpRightIcon, href: "/components/animated-icons/arrow-up-right-icon" },
    { name: "Arrow Up Left", slug: "arrow-up-left-icon", component: ArrowUpLeftIcon, href: "/components/animated-icons/arrow-up-left-icon" },
    { name: "Arrow Down Left", slug: "arrow-down-left-icon", component: ArrowDownLeftIcon, href: "/components/animated-icons/arrow-down-left-icon" },
    { name: "Arrow Down Right", slug: "arrow-down-right-icon", component: ArrowDownRightIcon, href: "/components/animated-icons/arrow-down-right-icon" },
    { name: "Chevron Right", slug: "chevron-right-icon", component: ChevronRightIcon, href: "/components/animated-icons/chevron-right-icon" },
    { name: "Chevron Left", slug: "chevron-left-icon", component: ChevronLeftIcon, href: "/components/animated-icons/chevron-left-icon" },
    { name: "Chevron Up", slug: "chevron-up-icon", component: ChevronUpIcon, href: "/components/animated-icons/chevron-up-icon" },
    { name: "Chevron Down", slug: "chevron-down-icon", component: ChevronDownIcon, href: "/components/animated-icons/chevron-down-icon" },
    { name: "Chevrons Right", slug: "chevrons-right-icon", component: ChevronsRightIcon, href: "/components/animated-icons/chevrons-right-icon" },
    { name: "Chevrons Left", slug: "chevrons-left-icon", component: ChevronsLeftIcon, href: "/components/animated-icons/chevrons-left-icon" },
    { name: "Chevrons Up", slug: "chevrons-up-icon", component: ChevronsUpIcon, href: "/components/animated-icons/chevrons-up-icon" },
    { name: "Chevrons Down", slug: "chevrons-down-icon", component: ChevronsDownIcon, href: "/components/animated-icons/chevrons-down-icon" },
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

    { name: "Thumbs Up", slug: "thumbs-up-icon", component: ThumbsUpIcon, href: "/components/animated-icons/thumbs-up-icon" },
];