"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "@/lib/utils";

interface GaugeProps {
  value?: number;
  min?: number;
  max?: number;
  size?: number; // Diameter of the gauge
  gap?: number; // Gap between bars in degrees
  thickness?: number; // Thickness of the bars
  activeColor?: string;
  inactiveColor?: string;
  showValue?: boolean;
  label?: string;
  className?: string;
  delay?: number;
}

const Gauge = ({
  value = 70,
  min = 0,
  max = 100,
  size = 400,
  gap = 4,
  thickness = 10,
  activeColor = "bg-blue-600",
  inactiveColor = "bg-blue-100",
  showValue = true,
  label = "Performance",
  className,
  delay = 25,
}: GaugeProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const [dims, setDims] = useState({ size, thickness });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100); // Small delay to ensure initial render is processed
    return () => clearTimeout(timer);
  }, []);

  const { size: currentSize, thickness: currentThickness } = dims;
  const radius = currentSize / 2;
  // Calculate percentage for display
  const percentage = Math.round(((value - min) / (max - min)) * 100);

  const totalBars = Math.floor(180 / gap);

  useEffect(() => {
    if (isMounted) {
      const animation = animate(count, percentage, {
        duration: (totalBars * delay) / 1000,
      });
      return animation.stop;
    }
  }, [isMounted, percentage, totalBars, delay, count]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDims({ size: 280, thickness: 6 });
      } else {
        setDims({ size, thickness });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size, thickness]);

  return (
    <div
      className={cn("relative flex justify-center items-center", className)}
      style={{ width: currentSize, height: currentSize / 2 }}
    >
      <m.div className="absolute bottom-0 left-1/2">
        {Array.from({ length: totalBars }).map((_, index) => {
          const barRotation = index * gap - 90;
          const isActive = isMounted && index < (percentage / 100) * totalBars;

          return (
            <div
              key={index}
              className={cn(
                "absolute rounded-full transition-colors duration-300",
                isActive ? `${activeColor} ` : inactiveColor
              )}
              style={{
                width: currentThickness,
                height: currentSize / 8, // Proportional height
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(${barRotation}deg) translateY(-${radius}px)`,
                transitionDelay: `${index * delay}ms`,
              }}
            />
          );
        })}

        {showValue && (
          <div
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{
              bottom: 0, // Align to bottom of the container
            }}
          >
            <h2 className="flex text-black dark:text-white font-bold leading-none text-[32px] md:text-[48px]">
              <m.span>{rounded}</m.span>%
            </h2>
            {label && (
              <p className="text-black dark:text-white font-medium font-sm md:font-base">
                {label}
              </p>
            )}
          </div>
        )}
      </m.div>
    </div>
  );
};

export default Gauge;
