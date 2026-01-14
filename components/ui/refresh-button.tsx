"use client";

import { IconRefresh } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RefreshButtonProps {
  onRefresh: () => void;
}

const RefreshButton = ({ onRefresh }: RefreshButtonProps) => {
  return (
    <div className="bg-gray-200 dark:bg-neutral-900 cursor-pointer rounded-sm transition">
      <Tooltip>
        <TooltipTrigger asChild>
          <IconRefresh
            onClick={onRefresh}
            className="text-black dark:text-white size-8 p-2"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Refresh</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default RefreshButton;
