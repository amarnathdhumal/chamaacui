"use client";

import { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { CopyProps } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyButton = ({ text }: CopyProps) => {
  const [copy, setCopy] = useState<boolean>(false);

  // handle copy
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="bg-neutral-900 hover:bg-neutral-800 cursor-pointer rounded-md transition shadow-sm border border-white/15">
      {copy ? (
        <IconCheck className="text-white size-8 p-2" />
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <IconCopy onClick={handleCopy} className="text-white size-8 p-2" />
          </TooltipTrigger>
          <TooltipContent side="top">
            <p className="text-xs">Copy</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export default CopyButton;
