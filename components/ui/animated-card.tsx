"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

const Button = ({ text }: { text: string }) => {
  return (
    <div
      className={cn(
        "relative py-2 px-4 text-sm text-gray-200 rounded-full border border-solid",
        "shadow-[inset_0px_0px_60px_0px_#4a5568]",
        "bg-white/20 backdrop-blur-md", // <-- Glassy background and blur
        "border-white/30", // <-- Soft translucent border
        "hover:bg-white/30 transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r",
        "before:from-transparent before:via-white/10 before:to-transparent before:opacity-70 before:blur-sm"
      )}
    >
      {text}
    </div>
  );
};

const AnimatedCard = () => {
  return (
    <m.div className="flex w-full h-screen justify-center items-center ">
      <div
        className="flex flex-col items-center justify-center gap-5  w-[350px] h-[350px] rounded-2xl relative overflow-hidden bg-neutral-900
shadow-[inset_0px_0px_100px_0px_#353934]

      "
      >
        {/* Generate Ideas */}
        <m.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-5 top-5"
        >
          <Button text="Generate Ideas" />
        </m.div>

        {/* Upload Dataset */}
        <m.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 right-5"
        >
          <Button text="Upload Dataset" />
        </m.div>

        {/* Start Chat */}
        <m.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-40 left-1/2 transform -translate-x-1/2"
        >
          <Button text="Start Chat" />
        </m.div>

        {/* View Analytics */}
        <m.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-5 bottom-20"
        >
          <Button text="View Analytics" />
        </m.div>

        {/* Export Results */}
        <m.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-5 bottom-5"
        >
          <Button text="Export Results" />
        </m.div>
      </div>
    </m.div>
  );
};

export default AnimatedCard;
