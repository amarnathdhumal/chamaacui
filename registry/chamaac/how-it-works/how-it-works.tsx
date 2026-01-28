"use client";

import React from "react";
import { motion } from "motion/react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple";
  className?: string;
  rotate?: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  colorTheme = "blue",
  className,
  rotate,
  colors: customColors,
}: CardProps) => {
  const defaultBgColors = {
    orange: "bg-orange-50 dark:bg-orange-500/10",
    blue: "bg-blue-50 dark:bg-blue-500/10",
    purple: "bg-purple-50 dark:bg-purple-500/10",
  };
  const defaultTextColors = {
    orange: "text-orange-500 dark:text-orange-400",
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
  };
  const defaultBorderColors = {
    orange: "border-orange-100 dark:border-orange-500/20",
    blue: "border-blue-100 dark:border-blue-500/20",
    purple: "border-purple-100 dark:border-purple-500/20",
  };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme];
  const textColor = customColors?.text || defaultTextColors[colorTheme];
  const borderColor = customColors?.border || defaultBorderColors[colorTheme];

  return (
    <div
      className={`relative w-full md:w-[280px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-white dark:bg-neutral-900 p-2 rounded-[25px] shadow-[0px_10px_20px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
        <Pin className={`w-8 h-8 ${textColor} z-20 mb-6 mx-auto`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[15px] p-[15px] h-full flex flex-col relative overflow-hidden`}
        >
          <span
            className={`${textColor} text-4xl font-handwriting mb-5`}
            style={{
              fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
            }}
          >
            {number}
          </span>
          <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 leading-none mb-[10px]">
            {title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm/5 tracking-tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[120px] md:right-[15%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[570px] md:right-[10%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-8" },
];

export default function HowItWorks({
  features,
  className,
  stepPositions,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: "Create Account",
      description:
        "Sign up in minutes. Enter your details and verify your email to get started.",
      colorTheme: "orange",
    },
    {
      title: "Verify Identity",
      description:
        "Complete your profile verification to ensure secure transactions and compliance.",
      colorTheme: "blue",
    },
    {
      title: "Select Plan",
      description:
        "Choose from a variety of investment plans tailored to your financial goals.",
      colorTheme: "purple",
    },
    {
      title: "Analyze & Invest",
      description:
        "Review returns and make your first investment with confidence.",
      colorTheme: "orange",
    },
    {
      title: "Track Growth",
      description:
        "Monitor your portfolio in real-time and watch your wealth grow over time.",
      colorTheme: "blue",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 1130;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;
  else height = 1130;

  return (
    <div
      className={`min-h-screen bg-white dark:bg-black py-20 px-6 relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
          backgroundSize: "100% 32px",
          marginTop: "4px",
        }}
      ></div>
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.1]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "100% 32px",
          marginTop: "4px",
        }}
      ></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="relative w-full max-w-[1000px] mx-auto flex flex-col md:block"
          style={{ height: `${height}px` }}
        >
          {data.length > 1 && (
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
              viewBox={`0 0 1000 ${height}`}
              preserveAspectRatio="none"
            >
              {(() => {
                const pathD = data.reduce((acc, _, index) => {
                  if (index >= data.length - 1) return acc;
                  if (index === 0)
                    return "M 290 150 C 500 150, 550 270, 710 270"; // 1 -> 2
                  if (index === 1) return acc + " C 850 270, 500 350, 290 450"; // 2 -> 3
                  if (index === 2) return acc + " C 290 600, 550 720, 750 720"; // 3 -> 4
                  if (index === 3) return acc + " C 950 720, 500 800, 290 850"; // 4 -> 5
                  return acc;
                }, "");
                return (
                  <motion.path
                    d={pathD}
                    stroke="currentColor"
                    className="text-neutral-300 dark:text-neutral-700"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    fill="none"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{
                      strokeDashoffset: -140, // Multiple of 14 (8+6) for seamless loop
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })()}
            </svg>
          )}

          {data.map((step, index) => {
            const position = positions[index % positions.length];

            return (
              <Card
                key={index}
                number={`0${index + 1}`}
                title={step.title}
                description={step.description}
                colorTheme={step.colorTheme || "blue"}
                colors={step.colors}
                rotate={position.rotate}
                className={position.className}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
