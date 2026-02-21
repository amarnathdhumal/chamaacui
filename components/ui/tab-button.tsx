import { TabButtonTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import { m } from "motion/react";

const TabButton = ({
  name,
  onClick,
  isActive,
  icon,
  layoutId = "activeTab",
}: TabButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-row gap-2 relative text-white px-4 py-2 rounded-[8px] text-base font-medium items-center cursor-pointer",
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      )}
    >
      {isActive && (
        <m.div
          layoutId={layoutId}
          className="absolute inset-0 bg-neutral-800 rounded-[8px]"
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {name}
      </span>
    </button>
  );
};

export default TabButton;
