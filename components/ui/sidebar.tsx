"use client";

import { sidebarData } from "@/lib/data";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // Group items by category
  const groupedData = sidebarData.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof sidebarData>);

  return (
    <div className="min-w-40 h-full flex flex-col sticky top-[114px]">
      <ul className="flex flex-col gap-4" onMouseLeave={() => setHoveredItem(null)}>
        {Object.entries(groupedData).map(([category, items]) => (
          <li key={category} className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-black dark:text-white leading-none tracking-tight">
              {category}
            </h3>
            <ul className="flex flex-col gap-4">
              {items.map((item) => {
                const href = item.link === "" ? "/components" : `/components${item.link}`;
                const isActive = item.link === ""
                  ? pathname === "/components"
                  : `/components${item.link}` === pathname;
                const itemId = item.link || "introduction";
                const isHovered = hoveredItem === itemId;
                // Show dot if this item is hovered, OR if it's active and nothing else is hovered
                const showDot = isHovered || (isActive && hoveredItem === null);

                return (
                  <li key={itemId}>
                    <motion.a
                      href={href}
                      className={cn(
                        "cursor-pointer font-normal text-sm flex flex-row items-center gap-[5px] leading-none",
                        `${isActive ? "text-black dark:text-white  font-medium" : "text-gray-500 dark:text-gray-400 "}`
                      )}
                      onMouseEnter={() => setHoveredItem(itemId)}
                      animate={{
                        x: isHovered ? "5px" : "0px",
                      }}
                      transition={{
                        duration: 0.1,
                        ease: "easeInOut",
                      }}
                    >
                      {showDot && (
                        <motion.div
                          layoutId="sidebar-dot"
                          className="w-[5px] h-[5px] rounded-full bg-black dark:bg-white"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                          }}
                        />
                      )}
                      {item.componentName}
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
