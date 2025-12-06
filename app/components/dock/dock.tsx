"use client";

import { cn } from "@/lib/utils";

import { easeIn, easeOut, motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useState, useRef, createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { X, Menu } from "lucide-react";

// Context to manage dock state
interface DockContextType {
    openDropdowns: Record<string, boolean>;
    hoveredLink: string | null;
    setHoveredLink: (href: string | null) => void;
    handleDropdownEnter: (id: string) => void;
    handleDropdownLeave: (id: string) => void;
    activePage?: string;
    isDark: boolean;
}

const DockContext = createContext<DockContextType | undefined>(undefined);

const useDock = () => {
    const context = useContext(DockContext);
    if (!context) {
        throw new Error("useDock must be used within a Dock component");
    }
    return context;
};

interface DockProps {
    children: React.ReactNode;
    closeDelay?: number;
    bottomOffset?: string;
    activePage?: string;
    className?: string;
}

export const Dock = ({
    children,
    closeDelay = 100,
    bottomOffset = "60px",
    activePage,
    className,
}: DockProps) => {
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const closeTimeoutsRef = useRef<Record<string, NodeJS.Timeout | null>>({});
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { theme } = useTheme();
    const isDark = theme === "dark";

    const handleDropdownEnter = (id: string): void => {
        if (closeTimeoutsRef.current[id]) {
            clearTimeout(closeTimeoutsRef.current[id]!);
        }
        setOpenDropdowns((prev) => ({ ...prev, [id]: true }));
    };

    const handleDropdownLeave = (id: string): void => {
        closeTimeoutsRef.current[id] = setTimeout(() => {
            setOpenDropdowns((prev) => ({ ...prev, [id]: false }));
            setHoveredLink(null);
        }, closeDelay);
    };

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <DockContext.Provider
            value={{
                openDropdowns,
                hoveredLink,
                setHoveredLink,
                handleDropdownEnter,
                handleDropdownLeave,
                activePage,
                isDark,
            }}
        >
            <div className="w-full">
                {/* Desktop Dock */}
                <motion.nav
                    className="fixed bottom-[60px] left-0 w-full z-50 hidden md:block"
                    style={{ bottom: bottomOffset }}
                >
                    <div className="px-4 flex justify-center">
                        <motion.div
                            className={cn(
                                "relative flex flex-col items-center justify-center overflow-hidden backdrop-blur-md bg-white dark:bg-black/50 border border-[#E0E0E0] dark:border-neutral-700 p-[3px] rounded-[25px]",
                                className
                            )}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Dropdown Contents */}
                            {React.Children.map(children, (child) => {
                                if (React.isValidElement(child) && (child.type as { displayName?: string }).displayName === "DockItem") {
                                    return React.cloneElement(child as React.ReactElement<DockItemProps>, { renderType: "content" });
                                }
                                return null;
                            })}

                            {/* Navigation Items */}
                            <div className="flex items-center gap-[3px] relative z-10">
                                {React.Children.map(children, (child) => {
                                    if (React.isValidElement(child)) {
                                        return React.cloneElement(child as React.ReactElement<DockItemProps | DockIconProps | DockLinkProps>, { renderType: "trigger" });
                                    }
                                    return null;
                                })}
                            </div>
                        </motion.div>
                    </div>
                </motion.nav>

                {/* Mobile Dock */}
                <div className="md:hidden fixed bottom-8 left-0 w-full z-50 flex justify-center pointer-events-none">
                    <div className="pointer-events-auto">
                        <AnimatePresence>
                            {isMobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.2 }}
                                    className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col pt-20 px-6 pb-32 overflow-y-auto"
                                >
                                    <div className="flex flex-col gap-6">
                                        {React.Children.map(children, (child) => {
                                            if (!React.isValidElement(child)) return null;

                                            // Handle DockLink (Top level links)
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            if ((child.type as any).displayName === "DockLink") {
                                                const props = child.props as DockLinkProps;
                                                return (
                                                    <Link
                                                        href={props.href}
                                                        className="text-black dark:text-white text-2xl font-medium"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {props.label}
                                                    </Link>
                                                );
                                            }

                                            // Handle DockItem (Sections with dropdowns)
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            if ((child.type as any).displayName === "DockItem") {
                                                const props = child.props as DockItemProps;
                                                return (
                                                    <div className="flex flex-col gap-4">
                                                        <span className="text-neutral-500 dark:text-neutral-400 text-lg">{props.label}</span>
                                                        <div className="flex flex-col gap-4 pl-4 border-l border-neutral-200 dark:border-neutral-800">
                                                            {React.Children.map(props.children, (subChild) => {
                                                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                                if (React.isValidElement(subChild) && (subChild.type as any).displayName === "DockDropdownItem") {
                                                                    const subProps = subChild.props as DockDropdownItemProps;
                                                                    return (
                                                                        <Link
                                                                            href={subProps.href}
                                                                            className="text-black dark:text-white text-xl font-medium flex items-center gap-3"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                        >
                                                                            {subProps.image && (
                                                                                <img src={subProps.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                                                                            )}
                                                                            {subProps.label}
                                                                        </Link>
                                                                    );
                                                                }
                                                                return null;
                                                            })}
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full shadow-lg transition-all duration-300 relative z-50",
                                isMobileMenuOpen
                                    ? "bg-transparent border border-black dark:border-white text-black dark:text-white"
                                    : "bg-white dark:bg-neutral-900 text-black dark:text-white border border-neutral-200 dark:border-neutral-800"
                            )}
                        >
                            <span className="font-medium text-lg">Menu</span>
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </DockContext.Provider>
    );
};

interface DockItemProps {
    children: React.ReactNode;
    label: string;
    id?: string;
    renderType?: "content" | "trigger";
    className?: string;
}

export const DockItem = ({ children, label, id, renderType, className }: DockItemProps) => {
    const { openDropdowns, handleDropdownEnter, handleDropdownLeave, isDark, activePage } = useDock();
    const pathname = usePathname();

    const itemId = id || label.toLowerCase().replace(/\s+/g, "-");
    const isOpen = openDropdowns[itemId] || false;

    const isAnyChildActive = React.Children.toArray(children).some((child) => {
        if (React.isValidElement<DockDropdownItemProps>(child) && (child.type as { displayName?: string }).displayName === "DockDropdownItem" && child.props.href) {
            const currentPath = activePage !== undefined ? activePage : pathname;
            return currentPath === child.props.href;
        }
        return false;
    });

    if (renderType === "content") {
        return (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className={`w-full overflow-hidden ${isOpen ? 'pointer-events-auto min-h-[100px]' : 'pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter(itemId)}
                onMouseLeave={() => handleDropdownLeave(itemId)}
            >
                <div className="px-[15px] pt-[15px] pb-[30px] flex justify-between items-start w-full min-w-[400px] bg-white dark:bg-transparent">
                    <div className="gap-[12.5px] flex flex-col">
                        {children}
                    </div>
                    <DockItemImagePreview>{children}</DockItemImagePreview>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            className={cn(
                "transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1 h-[42px] rounded-full cursor-pointer px-[18px]",
                isAnyChildActive ? "text-black dark:text-white font-medium" : "text-black dark:text-white",
                className
            )}
            onMouseEnter={() => handleDropdownEnter(itemId)}
            onMouseLeave={() => handleDropdownLeave(itemId)}
            animate={{
                backgroundColor: isOpen || isAnyChildActive ? (isDark ? "#262626" : "#F0F0F0") : "transparent"
            }}
            whileHover={{
                backgroundColor: isOpen || isAnyChildActive ? (isDark ? "#262626" : "#F0F0F0") : (isDark ? "#262626" : "#F0F0F0")
            }}
            transition={{ duration: 0.2 }}
        >
            {label}
            <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z" fill="currentColor"></path>
            </motion.svg>
        </motion.div>
    );
};
DockItem.displayName = "DockItem";

const DockItemImagePreview = ({ children }: { children: React.ReactNode }) => {
    const { hoveredLink, activePage } = useDock();
    const pathname = usePathname();

    const activeChild = React.Children.toArray(children).find((child) => {
        if (React.isValidElement<DockDropdownItemProps>(child) && (child.type as { displayName?: string }).displayName === "DockDropdownItem" && child.props.href) {
            const currentPath = activePage !== undefined ? activePage : pathname;
            return currentPath === child.props.href;
        }
        return false;
    }) as React.ReactElement<DockDropdownItemProps> | undefined;

    const hoveredChild = React.Children.toArray(children).find((child) => {
        return React.isValidElement<DockDropdownItemProps>(child) && (child.type as { displayName?: string }).displayName === "DockDropdownItem" && child.props.href === hoveredLink;
    }) as React.ReactElement<DockDropdownItemProps> | undefined;

    const displayImage = hoveredChild?.props.image || activeChild?.props.image;
    const shouldShowImage = hoveredLink || activeChild;

    if (!displayImage) return null;

    return (
        <div className="flex flex-col items-end gap-2">
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
                alt=""
            />
        </div>
    );
};

interface DockDropdownItemProps {
    href: string;
    label: string;
    image?: string;
    className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DockDropdownItem = ({ href, label, image: _image, className }: DockDropdownItemProps) => {
    const { hoveredLink, setHoveredLink, activePage } = useDock();
    const pathname = usePathname();

    const currentPath = activePage !== undefined ? activePage : pathname;
    const isMenuItemActive = currentPath === href;
    const isHovered = hoveredLink === href;

    return (
        <motion.a
            href={href}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.1 }}
            onMouseEnter={() => setHoveredLink(href)}
            className={cn(
                "block text-[14px] leading-[10px] transition-colors",
                isMenuItemActive || isHovered ? "text-black dark:text-white font-medium" : "text-neutral-500 dark:text-[#C1C1C1] hover:text-black dark:hover:text-white",
                className
            )}
        >
            {label}
        </motion.a>
    );
};
DockDropdownItem.displayName = "DockDropdownItem";

interface DockIconProps {
    icon: React.ReactNode;
    href: string;
    renderType?: "content" | "trigger";
    className?: string;
}

export const DockIcon = ({ icon, href, renderType, className }: DockIconProps) => {
    const { isDark, activePage } = useDock();
    const pathname = usePathname();

    if (renderType === "content") return null;

    const currentPath = activePage !== undefined ? activePage : pathname;
    const isActive = currentPath === href;

    return (
        <Link href={href}>
            <motion.div
                className={cn(
                    "flex items-center justify-center w-[56px] h-[42px] rounded-full cursor-pointer",
                    className
                )}
                animate={{
                    backgroundColor: isActive ? (isDark ? "#262626" : "#F0F0F0") : "transparent"
                }}
                whileHover={{
                    backgroundColor: isDark ? "#262626" : "#F0F0F0"
                }}
                transition={{ duration: 0.2 }}
            >
                {icon}
            </motion.div>
        </Link>
    );
};
DockIcon.displayName = "DockIcon";

interface DockLinkProps {
    label: string;
    href: string;
    icon?: React.ReactNode;
    external?: boolean;
    renderType?: "content" | "trigger";
    id?: string;
    className?: string;
}

export const DockLink = ({ label, href, icon, external, renderType, className }: DockLinkProps) => {
    const { isDark, activePage } = useDock();
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);

    if (renderType === "content") return null;

    const currentPath = activePage !== undefined ? activePage : pathname;
    const isActive = currentPath === href;

    const linkContent = (
        <>
            {label}
            {icon && (
                <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={{
                        x: isHovered ? 2 : 0,
                        y: isHovered ? -2 : 0
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {icon}
                </motion.div>
            )}
        </>
    );

    const baseClassName = cn(
        "transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1 h-[42px] rounded-full px-[18px]",
        isActive ? "text-black dark:text-white font-medium" : "text-black dark:text-white",
        className
    );

    if (external) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClassName}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                    backgroundColor: isActive ? (isDark ? "#404040" : "#E0E0E0") : (isDark ? "#262626" : "#F0F0F0")
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
                backgroundColor: isActive ? (isDark ? "#262626" : "#F0F0F0") : "transparent"
            }}
            whileHover={{
                backgroundColor: isDark ? "#262626" : "#F0F0F0"
            }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={href} className={baseClassName}>
                {linkContent}
            </Link>
        </motion.div>
    );
};
DockLink.displayName = "DockLink";

export default Dock;
