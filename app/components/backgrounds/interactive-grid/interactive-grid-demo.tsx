"use client";

import { InteractiveGridBackground } from "@/registry/chamaac/backgrounds/interactive-grid-background";
import { motion } from "motion/react";

export default function InteractiveGridDemo() {
  return (
    <InteractiveGridBackground className="h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-1.5 rounded-full text-sm text-white font-medium mb-8">
            New Release
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Interactive Grid.
          </h1>
          <p className="mt-6 text-sm md:text-lg text-white/70 max-w-xl text-center leading-relaxed">
            A high-performance, reactive canvas grid system. Use your mouse to
            interact with the data points.
          </p>

          <div className="mt-10 flex gap-4 pointer-events-auto">
            <button className="bg-white text-black px-6 py-3 text-sm rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </InteractiveGridBackground>
  );
}
