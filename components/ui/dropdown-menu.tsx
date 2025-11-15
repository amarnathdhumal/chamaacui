// "use client";

// import { motion } from "motion/react";
// import Image from "next/image";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// export interface MenuItem {
//     href: string;
//     label: string;
//     image?: string;
//     subItems?: MenuItem[];
// }

// interface DropdownMenuProps {
//     label: string;
//     items: MenuItem[];
//     isOpen: boolean;
//     onMouseEnter: () => void;
//     onMouseLeave: () => void;
//     activePaths?: string[];
// }

// export const DropdownMenu = ({
//     label,
//     items,
//     isOpen,
//     onMouseEnter,
//     onMouseLeave,
//     activePaths = [],
// }: DropdownMenuProps) => {
//     const [hoveredLink, setHoveredLink] = useState<string | null>(null);
//     const [expandedItem, setExpandedItem] = useState<string | null>(null);
//     const pathname = usePathname();

//     // Get the current image to display (only when hovered)
//     const currentImage = hoveredLink
//         ? items.find((item) => item.href === hoveredLink)?.image
//         : null;

//     // Find expanded item's submenu
//     const expandedItemData = expandedItem
//         ? items.find((item) => item.href === expandedItem)
//         : null;



//     return (
//         <>
//             {/* Dropdown Content - Above nav items */}
//             <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{
//                     opacity: isOpen ? 1 : 0,
//                     height: isOpen ? "auto" : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className={`w-full absolute bottom-full left-0 mb-[3px] z-20 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
//                 style={{ overflow: isOpen ? "visible" : "hidden" }}
//                 onMouseEnter={onMouseEnter}
//                 onMouseLeave={onMouseLeave}
//             >
//                 <div className="bg-white px-[15px] pt-[15px] pb-[30px] flex justify-between items-start rounded-[15px]">
//                     <div
//                         className="gap-[12.5px] flex flex-col min-w-0"
//                         onMouseEnter={(e) => {
//                             // Keep hover state when moving between links or to the container
//                             e.stopPropagation();
//                         }}
//                         onMouseLeave={(e) => {
//                             // Only clear hover if leaving the entire container
//                             const relatedTarget = e.relatedTarget as HTMLElement | null;
//                             const isStillInDropdown = relatedTarget?.closest?.('.bg-white.px-\\[15px\\]');
//                             if (!isStillInDropdown) {
//                                 setHoveredLink(null);
//                             }
//                         }}
//                     >
//                         {items.map((item, index) => (
//                             <motion.a
//                                 key={item.href}
//                                 href={item.href}
//                                 onMouseEnter={() => {
//                                     setHoveredLink(item.href);
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     // Check if we're moving to the parent container (which causes shaking)
//                                     const relatedTarget = e.relatedTarget as HTMLElement | null;
//                                     const isMovingToParent = relatedTarget && (
//                                         relatedTarget.classList?.contains('bg-white') ||
//                                         relatedTarget.closest?.('.bg-white.px-\\[15px\\]') ||
//                                         relatedTarget.closest?.('.gap-\\[12\\.5px\\]')
//                                     );

//                                     // Only clear hover if we're not moving to the parent container
//                                     // This prevents the shaking when the link moves and cursor enters parent
//                                     if (!isMovingToParent) {
//                                         setHoveredLink(null);
//                                     }
//                                 }}
//                                 className={`block text-[14px] leading-[10px] transition-colors ${pathname === item.href
//                                     ? "text-black font-medium"
//                                     : "text-[#C1C1C1] hover:text-black"
//                                     }`}
//                                 whileHover={{
//                                     x: 5,
//                                 }}
//                                 transition={{
//                                     duration: 0.1,
//                                     ease: "easeInOut",
//                                 }}
//                                 style={{
//                                     display: "block",
//                                     paddingRight: "20px",
//                                     paddingTop: index === 0 ? "2px" : "0px",
//                                     width: "fit-content",
//                                     position: "relative",
//                                     zIndex: 1,
//                                 }}
//                             >
//                                 {item.label}
//                             </motion.a>
//                         ))}
//                     </div>

//                     {/* Image - Only show when hovered */}
//                     {currentImage && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.2 }}
//                             key={currentImage}
//                         >
//                             <Image
//                                 src={currentImage}
//                                 alt="link preview"
//                                 width={100}
//                                 height={100}
//                                 className="rounded-[15px] w-[80px] h-[80px] object-cover"
//                             />
//                         </motion.div>
//                     )}
//                 </div>
//             </motion.div>
//         </>
//     );
// };

// // Export a separate button component
// export const DropdownButton = ({
//     label,
//     isOpen,
//     onMouseEnter,
//     onMouseLeave,
//     activePaths = [],
//     items = [],
// }: {
//     label: string;
//     isOpen: boolean;
//     onMouseEnter: () => void;
//     onMouseLeave: () => void;
//     activePaths?: string[];
//     items?: MenuItem[];
// }) => {
//     const pathname = usePathname();

//     // Check if any of the menu items match the current pathname
//     const isActive = activePaths.length > 0
//         ? activePaths.some((path) => pathname === path)
//         : items.some((item) => pathname === item.href);

//     return (
//         <motion.div
//             className={`text-black transition-colors duration-200 text-[14px] leading-[10px] flex items-center gap-1 h-[42px] rounded-full cursor-pointer px-[18px]`}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             animate={{
//                 backgroundColor: isOpen || isActive ? "#F0F0F0" : "rgba(0, 0, 0, 0)",
//             }}
//             whileHover={{ backgroundColor: "#F0F0F0" }}
//             transition={{ duration: 0.2 }}
//         >
//             {label}
//             <motion.svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="#000000"
//                 xmlns="http://www.w3.org/2000/svg"
//                 animate={{
//                     rotate: isOpen ? 180 : 0,
//                 }}
//                 transition={{ duration: 0.2 }}
//             >
//                 <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z"
//                     data-mode="fill"
//                 />
//             </motion.svg>
//         </motion.div>
//     );
// };

