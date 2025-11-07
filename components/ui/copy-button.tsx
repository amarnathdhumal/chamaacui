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
    <div className="bg-gray-200 dark:bg-neutral-900 cursor-pointer rounded-sm transition">
      {copy ? (
        <IconCheck className="text-black dark:text-white size-8 p-2" />
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <IconCopy
              onClick={handleCopy}
              className="text-black dark:text-white size-8 p-2"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export default CopyButton;
