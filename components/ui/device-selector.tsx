"use client";

import {
  IconDeviceDesktop,
  IconDeviceTablet,
  IconDeviceMobile,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type DeviceType = "desktop" | "tablet" | "mobile";

interface DeviceSelectorProps {
  device: DeviceType;
  setDevice: (device: DeviceType) => void;
}

export default function DeviceSelector({
  device,
  setDevice,
}: DeviceSelectorProps) {
  const devices = [
    { id: "desktop" as const, icon: IconDeviceDesktop },
    { id: "tablet" as const, icon: IconDeviceTablet },
    { id: "mobile" as const, icon: IconDeviceMobile },
  ];

  return (
    <div className="hidden md:flex border border-border rounded-[8px] overflow-hidden  dark:bg-neutral-900 bg-gray-50  items-center">
      {devices.map((config) => (
        <Tooltip key={config.id}>
          <TooltipTrigger asChild>
            <button
              onClick={() => setDevice(config.id)}
              className={cn(
                "size-8 flex items-center justify-center transition border-border",
                config.id !== "mobile" && "border-r",
                device === config.id
                  ? "bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
                  : "dark:text-neutral-400 text-neutral-500 hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-neutral-800/50"
              )}
            >
              <config.icon className="size-[18px]" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p className="text-xs capitalize">{config.id}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
