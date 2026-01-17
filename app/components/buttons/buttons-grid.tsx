"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SlideUpButton from "@/registry/chamaac/slideup-button/slideup-button";
import ShimmerButton from "@/registry/chamaac/shimmer-button/shimmer-button";
import HoverArrowButton from "@/registry/chamaac/hover-arrow-button/hover-arrow-button";
import FocusButton from "./focus-button/focus-button";
import NeoBrutalistButton from "@/registry/chamaac/neo-brutalist-button/neo-brutalist-button";
import PremiumButton from "@/registry/chamaac/premium-button/premium-button";
import GlowingBorderButton from "@/registry/chamaac/glowing-border-button/glowing-border-button";
import { ArrowRight } from "lucide-react";

interface ButtonTypes {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
  bgColor?: string;
}

const buttons: ButtonTypes[] = [
  {
    name: "Premium Button",
    component: PremiumButton,
    href: "/components/buttons/premium-button",
    props: {
      text: "Premium Button",
    },
  },
  {
    name: "Glowing Border Button",
    component: GlowingBorderButton,
    href: "/components/buttons/glowing-border-button",
    props: {
      text: "Glowing Border Button",
    },
  },
  {
    name: "Shimmer Button",
    component: ShimmerButton,
    href: "/components/buttons/shimmer-button",
    props: {
      text: "Book a Free Call",
    },
  },
  {
    name: "Neo Brutalist Button",
    component: NeoBrutalistButton,
    href: "/components/buttons/neo-brutalist-button",
    props: {
      text: "Neo Brutalist",
    },
  },
  {
    name: "Slide Up Button",
    component: SlideUpButton,
    href: "/components/buttons/slideup-button",
    props: {
      children: "Hover me",
      className: "bg-[#f73b20] text-white",
    },
  },
  {
    name: "Focus Button",
    component: FocusButton,
    href: "/components/buttons/focus-button",
    props: {
      children: "Contact us",
    },
  },
  {
    name: "Hover Arrow Button",
    component: HoverArrowButton,
    href: "/components/buttons/hover-arrow-button",
    props: {
      text: "Get Started",
    },
  },
];

export default function ButtonsGrid() {
  return (
    <div className="w-full mx-auto">
      <div className="mb-5 md:mb-10">
        <h1 className="text-[2rem]/10 md:text-[2.5rem]/10 font-semibold tracking-tight text-black dark:text-white">
          Buttons
        </h1>
        <p className=" text-base/5 md:text-lg/7 text-neutral-500 dark:text-gray-400 tracking-tight mt-2 md:mt-4   max-w-[750px]">
          A collection of interactive and animated buttons for your
          applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {buttons.map((button) => (
          <motion.div
            key={button.name}
            className={`relative flex flex-col items-center justify-center p-8 rounded-xl border border-neutral-200 dark:border-[#3B3B3B] bg-white dark:bg-neutral-800   transition-colors h-[200px] `}
          >
            <div className="mb-4 scale-90 transition-transform duration-300">
              <button.component {...button.props} />
            </div>

            <Link
              href={button.href}
              className="absolute bottom-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
