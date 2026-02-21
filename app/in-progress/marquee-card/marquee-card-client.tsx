"use client";

import {
  IconTrendingUp,
  IconCpu,
  IconUsers,
  IconSparkles,
  IconBrain,
  IconRocket,
  IconShield,
  IconLock,
  IconDatabase,
  IconChartBar,
  IconNetwork,
  IconCloud,
  IconBolt,
  IconEye,
  IconWand,
  IconCode,
  IconSettings,
  IconSearch,
  IconBook,
  IconStar,
  IconCheck,
  IconGift,
  IconTarget,
  IconFlame,
} from "@tabler/icons-react";
import { type Icon } from "@tabler/icons-react";

import { m } from "motion/react";

interface AiFeature {
  icon: Icon;
}

export const aiFeatures: AiFeature[] = [
  {
    icon: IconSparkles,
  },
  {
    icon: IconTrendingUp,
  },
  {
    icon: IconCpu,
  },
  {
    icon: IconUsers,
  },
  {
    icon: IconBrain,
  },
  {
    icon: IconRocket,
  },
  {
    icon: IconShield,
  },
  {
    icon: IconLock,
  },
  {
    icon: IconDatabase,
  },
  {
    icon: IconChartBar,
  },
  {
    icon: IconNetwork,
  },
  {
    icon: IconCloud,
  },
  {
    icon: IconBolt,
  },
  {
    icon: IconEye,
  },
  {
    icon: IconWand,
  },
  {
    icon: IconCode,
  },
  {
    icon: IconSettings,
  },
  {
    icon: IconSearch,
  },
  {
    icon: IconBook,
  },
  {
    icon: IconStar,
  },
  {
    icon: IconCheck,
  },
  {
    icon: IconGift,
  },
  {
    icon: IconTarget,
  },
  {
    icon: IconFlame,
  },
];

const firstRow = aiFeatures.slice(0, aiFeatures.length / 2);
const secondRow = aiFeatures.slice(aiFeatures.length / 2);

const MarqueeCard = () => {
  return (
    <m.div
      className="
    flex flex-col
    rounded-[20px] p-8 border border-[#E8E8E8] bg-white gap-4
    w-[350px] h-auto overflow-hidden relative"
    >
      {/* Row 1 */}
      <m.div
        animate={{ x: ["0%", "-400%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="flex gap-2 whitespace-nowrap"
      >
        {Array(4) // repeat count here
          .fill(0)
          .map((_, i) => (
            <div key={`group-${i}`} className="flex gap-2">
              {firstRow.map((feature, index) => (
                <div
                  key={`${i}-${index}`}
                  className="size-full border border-[#e8e8e8] rounded-[10px] flex items-center justify-center p-4"
                >
                  <feature.icon className="size-[30px] text-gray-700" />
                </div>
              ))}
            </div>
          ))}
      </m.div>

      {/* Row 2 */}
      <m.div
        animate={{ x: ["-400%", "0%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="flex gap-2 whitespace-nowrap"
      >
        {Array(4) // repeat count here
          .fill(0)
          .map((_, i) => (
            <div key={`group-${i}`} className="flex gap-2">
              {secondRow.map((feature, index) => (
                <div
                  key={`${i}-${index}`}
                  className="size-full border border-[#e8e8e8] rounded-[10px] flex items-center justify-center p-3"
                >
                  <feature.icon className="size-[30px] text-gray-700" />
                </div>
              ))}
            </div>
          ))}
      </m.div>

      <div className="from-white to-transparent pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-white to-transparent pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>

      <div>
        <h2 className="text-xl font-semibold text-neutral-500 text-center mt-2 ">
          The Future of AI is Here
        </h2>

        <p
          className=" text-gray-500 text-center max-w-[250px] mx-auto 
  text-[14px] leading-[16px] tracking-[0em] mt-1
  "
        >
          AI is transforming the way we work and live.
        </p>
      </div>
    </m.div>
  );
};

export default MarqueeCard;
