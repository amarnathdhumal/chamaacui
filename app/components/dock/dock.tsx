"use client";

import { easeIn, easeOut, motion } from "motion/react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface DropdownMenuItem {
    label: string;
    href: string;
    image?: string;
    description?: string;
}

interface DropdownItem {
    type: "dropdown";
    id: string;
    label: string;
    items: DropdownMenuItem[];
}

interface IconButtonItem {
    type: "icon";
    id: string;
    icon: React.ReactNode;
    onClick?: () => void;
    href?: string;
}

interface LinkButtonItem {
    type: "link";
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    external?: boolean;
}

type DockItem = DropdownItem | IconButtonItem | LinkButtonItem;

interface DockProps {
    items: DockItem[];
    closeDelay?: number;
    bottomOffset?: string;
    activePage?: string;
}

const Dock = ({
    items,
    closeDelay = 100,
    bottomOffset = "60px",
    activePage,
}: DockProps) => {
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const closeTimeoutsRef = useRef<Record<string, NodeJS.Timeout | null>>({});
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [hoveredItems, setHoveredItems] = useState<Record<string, boolean>>({});

    const router = useRouter();
    const pathname = usePathname();
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const handleDropdownEnter = (id: string): void => {
        if (closeTimeoutsRef.current[id]) {
            clearTimeout(closeTimeoutsRef.current[id]!);
        }
        setOpenDropdowns((prev) => ({ ...prev, [id]: true }));
        setHoveredLink(pathname);
    };

    const handleDropdownLeave = (id: string): void => {
        closeTimeoutsRef.current[id] = setTimeout(() => {
            setOpenDropdowns((prev) => ({ ...prev, [id]: false }));
            setHoveredLink(null);
        }, closeDelay);
    };

    const isDropdownActive = (dropdownItem: DropdownItem): boolean => {
        const currentPath = activePage !== undefined ? activePage : pathname;
        return dropdownItem.items.some((item) => currentPath === item.href);
    };

    const isItemActive = (href: string): boolean => {
        const currentPath = activePage !== undefined ? activePage : pathname;
        return currentPath === href;
    };

    const renderDropdownContent = (item: DropdownItem) => {
        const isOpen = openDropdowns[item.id] || false;
        const activeMenuItem = item.items.find((menuItem) => isItemActive(menuItem.href));
        const hoveredMenuItem = item.items.find((menuItem) => menuItem.href === hoveredLink);
        const displayImage = hoveredMenuItem?.image || activeMenuItem?.image;
        const shouldShowImage = hoveredLink || activeMenuItem;

        return (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0
                }}
                transition={{ duration: 0.3 }}
                className={`w-full overflow-hidden ${isOpen ? 'pointer-events-auto min-h-[100px]' : 'pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter(item.id)}
                onMouseLeave={() => handleDropdownLeave(item.id)}
            >
                <div className="px-[15px] pt-[15px] pb-[30px] flex justify-between items-start w-full min-w-[400px] bg-white dark:bg-transparent  ">
                    <div className="gap-[12.5px] flex flex-col">
                        {item.items.map((menuItem) => {
                            const isMenuItemActive = isItemActive(menuItem.href);
                            const isHovered = hoveredLink === menuItem.href;
                            return (
                                <motion.a
                                    key={menuItem.href}
                                    whileHover={{
                                        x: 5,
                                    }}
                                    transition={{ duration: 0.1 }}
                                    onMouseEnter={() => setHoveredLink(menuItem.href)}
                                    href={menuItem.href}
                                    className={`block text-[14px] leading-[10px] transition-colors ${isMenuItemActive || isHovered ? "text-black dark:text-white font-medium" : "text-neutral-500 dark:text-[#C1C1C1] hover:text-black dark:hover:text-white"
                                        }`}
                                >
                                    {menuItem.label}
                                </motion.a>
                            );
                        })}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        {displayImage && (
                            <motion.img
                                key={displayImage}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: shouldShowImage ? 1 : 0.8,
                                    scale: shouldShowImage ? 1 : 0.9
                                }}
                                transition={{
                                    ease: shouldShowImage ? easeIn : easeOut,
                                    duration: 0.2,
                                }}
                                src={displayImage}
                                className="rounded-[15px] w-[80px] h-[80px] object-cover"
                                alt={hoveredLink || activeMenuItem?.href || ""}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    const renderDropdownTrigger = (item: DropdownItem) => {
        const isOpen = openDropdowns[item.id] || false;
        const isActive = isDropdownActive(item);

        return (
            <motion.div
                className={`transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1 h-[42px] rounded-full cursor-pointer px-[18px] ${isActive
                    ? "text-black dark:text-white font-medium"
                    : "text-black dark:text-white"
                    }`}
                onMouseEnter={() => handleDropdownEnter(item.id)}
                onMouseLeave={() => handleDropdownLeave(item.id)}
                animate={{
                    backgroundColor: isOpen || isActive
                        ? (isDark ? "#262626" : "#F0F0F0")
                        : "transparent"
                }}
                whileHover={{
                    backgroundColor: isOpen || isActive
                        ? (isDark ? "#262626" : "#F0F0F0")
                        : (isDark ? "#262626" : "#F0F0F0")
                }}
                transition={{ duration: 0.2 }}
            >
                {item.label}
                <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="text-black dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: isOpen ? 180 : 0
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z" fill="currentColor"></path>
                </motion.svg>
            </motion.div>
        );
    };

    const renderIconButton = (item: IconButtonItem) => {
        const handleClick = () => {
            if (item.onClick) {
                item.onClick();
            } else if (item.href) {
                router.push(item.href);
            }
        };

        const isActive = item.href ? isItemActive(item.href) : false;

        return (
            <motion.button
                onClick={handleClick}
                className={`flex items-center justify-center w-[56px] h-[42px] rounded-full  cursor-pointer ${isActive
                    ? "bg-[#F0F0F0] dark:bg-[#262626]"
                    : ""
                    }`}
                whileHover={{
                    backgroundColor: isActive
                        ? (isDark ? "#262626" : "#F0F0F0")
                        : (isDark ? "#262626" : "#F0F0F0")
                }}
            >
                {item.icon}
            </motion.button>
        );
    };

    const renderLinkButton = (item: LinkButtonItem) => {
        const isActive = isItemActive(item.href);
        const isHovered = hoveredItems[item.id] || false;

        const linkContent = (
            <>
                {item.label}
                {item.icon && (
                    <motion.div
                        initial={{ x: 0, y: 0 }}
                        animate={{
                            x: isHovered ? 2 : 0,
                            y: isHovered ? -2 : 0
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {item.icon}
                    </motion.div>
                )}
            </>
        );

        const className = `transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1 h-[42px] rounded-full px-[18px] ${isActive
            ? "text-black dark:text-white font-medium"
            : "text-black dark:text-white"
            }`;

        if (item.external) {
            return (
                <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    onMouseEnter={() => setHoveredItems((prev) => ({ ...prev, [item.id]: true }))}
                    onMouseLeave={() => setHoveredItems((prev) => ({ ...prev, [item.id]: false }))}
                    whileHover={{
                        backgroundColor: isActive
                            ? (isDark ? "#404040" : "#E0E0E0")
                            : (isDark ? "#262626" : "#F0F0F0")
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {linkContent}
                </motion.a>
            );
        }

        return (
            <motion.div
                className="inline-block rounded-full"
                animate={{
                    backgroundColor: isActive
                        ? (isDark ? "" : "#F0F0F0")
                        : "transparent"
                }}
                whileHover={{
                    backgroundColor: isActive
                        ? (isDark ? "#262626" : "#F0F0F0")
                        : (isDark ? "#262626" : "#F0F0F0")
                }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredItems((prev) => ({ ...prev, [item.id]: true }))}
                onMouseLeave={() => setHoveredItems((prev) => ({ ...prev, [item.id]: false }))}
            >
                <Link
                    href={item.href}
                    className={className}
                >
                    {linkContent}
                </Link>
            </motion.div>
        );
    };

    const renderItem = (item: DockItem) => {
        switch (item.type) {
            case "dropdown":
                return renderDropdownTrigger(item);
            case "icon":
                return renderIconButton(item);
            case "link":
                return renderLinkButton(item);
            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            <motion.nav
                className="fixed bottom-[60px] left-0 w-full z-50 hidden md:block "
                style={{ bottom: bottomOffset }}
            >
                <div className="px-4 flex justify-center">
                    <motion.div
                        className="relative flex flex-col items-center justify-center overflow-hidden backdrop-blur-md bg-white dark:bg-black/50 border border-[#E0E0E0] dark:border-neutral-700 p-[3px]"
                        initial={{ borderRadius: "25px" }}
                        animate={{
                            borderRadius: "25px"
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Dropdown Contents - rendered above navigation items */}
                        {items
                            .filter((item) => item.type === "dropdown")
                            .map((item) => (
                                <div key={item.id}>
                                    {renderDropdownContent(item as DropdownItem)}
                                </div>
                            ))}

                        {/* Navigation Items */}
                        <div className="flex items-center gap-[3px] relative z-10">
                            {items.map((item) => (
                                <div key={item.id}>
                                    {renderItem(item)}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Dock;
