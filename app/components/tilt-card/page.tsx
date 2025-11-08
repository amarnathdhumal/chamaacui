"use client";

import {
  IconTrendingUp,
  IconCpu,
  IconUsers,
  IconSparkles,
} from "@tabler/icons-react";
import { type Icon } from "@tabler/icons-react";

import { motion } from "motion/react";

interface AiFeature {
  icon: Icon;
  title: string;
  description: string;
}

export const aiFeatures: AiFeature[] = [
  {
    icon: IconSparkles,
    title: "Automate Intelligence",
    description: "AI-driven workflow automation.",
  },
  {
    icon: IconTrendingUp,
    title: "Adaptive Learning",
    description: "Improves with every interaction.",
  },
  {
    icon: IconCpu,
    title: "Context-Aware Decisions",
    description: "Understands context before acting.",
  },
  {
    icon: IconUsers,
    title: "Collaborative Agents",
    description: "Coordinates multiple AI agents.",
  },
];

const TiltCard = () => {
  return (

    <div className="w-[350px] h-[350px] border border-[#E8E8E8] relative rounded-[20px] p-5 bg-white">
      <motion.div
        initial={{ rotate: 7.1 }}
        whileHover={{ rotate: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 5,
        }}
        className="absolute inset-0 flex flex-col items- justify-center rounded-[20px] p-8 border border-[#E8E8E8] bg-white gap-8"
      >
        {aiFeatures.map((feature, index) => (
          <div key={index} className="flex flex-row items-start gap-3">
            <div>
              <feature.icon className=" size-[24px] text-[#DBB25A]" />
            </div>
            <div>
              <h2 className="text-[18px] leading-[15px] tracking-[0em] text-black mb-2 font-medium">
                {feature.title}
              </h2>
              <p className="text-[14px] leading-[16px] tracking-[0em] text-[#9E9E9E]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>

  );
};

export default TiltCard;
