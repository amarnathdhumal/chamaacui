"use client";

import { m } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { type Icon } from "@tabler/icons-react";
import Image from "next/image";

interface Trend {
  id: string;
  name: string;
  icon: Icon;
}

interface SvgAnimationProps {
  trends: Trend[];
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  delay?: number;
}

const SvgAnimation = ({
  trends,
  imageSrc = "/gpt.jpg",
  imageAlt = "Trends",
  backgroundColor = "bg-black",
  delay = 0.1,
}: SvgAnimationProps) => {
  const [, setActive] = useState<string>(trends[0]?.id || "");

  return (
    <div
      className={`${backgroundColor} h-[600px] flex items-center justify-center`}
    >
      <div className="flex flex-row justify-between items-center">
        {/* Left Side - Tech Trends List */}
        <div className="space-y-[10px]">
          {trends.map((trend, index) => (
            <m.div
              key={trend.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * delay }}
              onClick={() => setActive(trend.id)}
              className={cn(
                "rounded-[10px] flex items-center bg-white/5 border border-white/10 transition-colors cursor-pointer group min-w-[423px] h-[74px]"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="pl-[25px] rounded-lg flex items-center justify-center group-hover:bg-custom-blue transition-colors">
                  <trend.icon size={20} className="text-white" />
                </div>
                <h3 className="text-[16px] leading-[14px] text-white font-mono">
                  {trend.name}
                </h3>
              </div>
            </m.div>
          ))}
        </div>
        <m.svg
          width="309"
          height="422"
          viewBox="0 0 309 422"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            d="M0 84.5C155 84.5 155 208.5 308.5 208.5"
            stroke="url(#paint0)"
          />
          <m.path
            d="M0.5 0.5C154.5 0.5 155.5 206.5 308.5 206.5"
            stroke="url(#paint1)"
          />
          <m.path
            d="M0.5 168.5C155 168.5 155 210.5 308.5 210.5"
            stroke="url(#paint2)"
          />
          <m.path d="M0 337C155 337 155 213 308.5 213" stroke="url(#paint4)" />
          <m.path
            d="M0.5 421C154.5 421 155.5 215 308.5 215"
            stroke="url(#paint3)"
          />
          <m.path
            d="M0.5 253C155 253 155 211 308.5 211"
            stroke="url(#paint5)"
          />
          <defs>
            {/* 1st Gradient */}
            <m.linearGradient
              id="paint0"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [-60, 60, 120, 180, 240],
                y1: [0, 50, 103, 150, 206],
                x2: [0, 120, 180, 250, 350],
                y2: [0, 50, 103, 150, 206],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#313131" />
              <stop offset="0.3" stopColor="#313131" />
              <stop offset="0.5" stopColor="#FFEA00" />
              <stop offset="0.7" stopColor="#0096FF" />
              <stop offset="1" stopColor="#313131" />
            </m.linearGradient>

            {/* 2nd Gradient */}
            <m.linearGradient
              id="paint1"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [-60, 60, 120, 180, 240],
                y1: [0, 50, 103, 150, 206],
                x2: [0, 120, 180, 250, 350],
                y2: [0, 50, 103, 150, 206],
              }}
              transition={{
                duration: 2.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#313131" />
              <stop offset="0.25" stopColor="#313131" />
              <stop offset="0.5" stopColor="#FFEA00" />
              <stop offset="0.75" stopColor="#00FF8D" />
              <stop offset="1" stopColor="#313131" />
            </m.linearGradient>

            {/* 3rd Gradient */}
            <m.linearGradient
              id="paint2"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [-60, 60, 120, 180, 240],
                y1: [0, 50, 103, 150, 206],
                x2: [0, 120, 180, 250, 350],
                y2: [0, 50, 103, 150, 206],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#313131" />
              <stop offset="0.25" stopColor="#313131" />
              <stop offset="0.5" stopColor="#BF40BF" />
              <stop offset="0.75" stopColor="#FFEA00" />
              <stop offset="1" stopColor="#313131" />
            </m.linearGradient>

            {/* 4th Gradient */}
            <m.linearGradient
              id="paint3"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [-60, 60, 120, 180, 240],
                y1: [0, 50, 103, 150, 206],
                x2: [0, 120, 180, 250, 350],
                y2: [0, 50, 103, 150, 206],
              }}
              transition={{
                duration: 2.2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#313131" />
              <stop offset="0.25" stopColor="#313131" />
              <stop offset="0.5" stopColor="#EE4B2B" />
              <stop offset="0.75" stopColor="#FFEA00" />
              <stop offset="1" stopColor="#313131" />
            </m.linearGradient>

            {/* 5th Gradient */}
            <m.linearGradient
              id="paint4"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [-60, 60, 120, 180, 240],
                y1: [0, 50, 103, 150, 206],
                x2: [0, 120, 180, 250, 350],
                y2: [0, 50, 103, 150, 206],
              }}
              transition={{
                duration: 2.8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#313131" />
              <stop offset="0.25" stopColor="#313131" />
              <stop offset="0.5" stopColor="#465491" />
              <stop offset="0.75" stopColor="#FFB8FF" />
              <stop offset="1" stopColor="#313131" />
            </m.linearGradient>

            {/* 6th Gradient */}
            <m.linearGradient
              id="paint5"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [-60, 60, 120, 180, 240],
                y1: [0, 50, 103, 150, 206],
                x2: [0, 120, 180, 250, 350],
                y2: [0, 50, 103, 150, 206],
              }}
              transition={{
                duration: 2.6,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#313131" />
              <stop offset="0.25" stopColor="#313131" />
              <stop offset="0.5" stopColor="#FAD5A5" />
              <stop offset="0.75" stopColor="#FFEA00" />
              <stop offset="1" stopColor="#313131" />
            </m.linearGradient>
          </defs>
        </m.svg>

        {/* Right Side - Detail Panel */}
        <m.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-full"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={100}
            height={100}
            className="rounded-full"
          />
        </m.div>
      </div>
    </div>
  );
};

export default SvgAnimation;
