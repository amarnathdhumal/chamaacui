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
import { m, LazyMotion, domMax } from "motion/react";

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
    <LazyMotion features={domMax}>
      <div className="hidden md:flex border border-border rounded-[8px] overflow-hidden bg-bg-secondary items-center">
        {devices.map((config) => (
          <Tooltip key={config.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => setDevice(config.id)}
                className={cn(
                  "size-8 flex items-center justify-center transition relative cursor-pointer",
                  device === config.id
                    ? "text-text-primary"
                    : "text-text-tertiary hover:text-text-primary hover:bg-bg-tertiary"
                )}
              >
                {device === config.id && (
                  <m.div
                    layoutId="activeDevice"
                    className="absolute inset-0 bg-bg-tertiary"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">
                  <config.icon className="size-[16px]" />
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-xs capitalize">{config.id}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </LazyMotion>
  );
}
