"use client";

import { type Icon } from "@tabler/icons-react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface Feature {
  icon: Icon;
  title: string;
  description: string;
}

interface TiltCardProps {
  features: Feature[];
  initialRotate?: number;
  hoverRotate?: number;
  duration?: number;
  stiffness?: number;
  damping?: number;
  className?: string;
}

const TiltCard = ({
  features,
  initialRotate = 7.1,
  hoverRotate = 0,
  duration = 0.3,
  stiffness = 100,
  damping = 5,
  className,
}: TiltCardProps) => {
  return (
    <div
      className={cn("flex md:h-[500px] justify-center items-center", className)}
    >
      <div className="max-w-[280px] md:max-w-[325px] w-full  h-full max-h-[285px]  md:max-h-[325px]  border border-[#E8E8E8] dark:border-white/10 relative rounded-[20px] p-5 bg-white dark:bg-neutral-800">
        <motion.div
          initial={{ rotate: initialRotate }}
          whileHover={{ rotate: hoverRotate }}
          transition={{
            duration: duration,
            type: "spring",
            stiffness: stiffness,
            damping: damping,
          }}
          className="absolute inset-0 flex flex-col items- justify-center rounded-[15px] md:rounded-[20px] md:p-8 p-4 border border-[#E8E8E8] dark:border-white/10 bg-white dark:bg-neutral-800 md:gap-8 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-2 md:gap-3"
            >
              <div>
                <feature.icon className=" md:size-[24px] size-[16px] text-black dark:text-white" />
              </div>
              <div>
                <h2 className="md:text-[18px] text-[16px] leading-[15px] tracking-[0em] text-black dark:text-white mb-1 font-medium">
                  {feature.title}
                </h2>
                <p className="text-[14px] leading-[16px] tracking-[0em] text-[#9E9E9E] dark:text-white/50">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TiltCard;
