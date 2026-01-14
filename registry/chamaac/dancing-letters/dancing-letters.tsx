"use client";

import { motion } from "motion/react";
import { useState, useCallback, useEffect } from "react";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";

export const dancingFont = Outfit({
  subsets: ["latin"],
  variable: "--font-dancing",
});

interface DancingLettersProps {
  text?: string;
  className?: string;
  letterClassName?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// Sleek, physics-based animations
const letterAnimations = [
  // 1. Rubber Band (Snap)
  {
    active: {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
    },
    transition: { duration: 0.8, ease: "easeInOut" },
    transformOrigin: "center center",
  },
  // 2. The Hinge (Falling effect)
  {
    active: {
      rotate: [0, 80, 60, 80, 60, 0],
      y: [0, 10, -5, 5, -2, 0],
      originX: 0,
      originY: 1,
    },
    transition: { duration: 1.2, ease: [0.175, 0.885, 0.32, 1.275] },
    transformOrigin: "bottom left",
  },
  // 3. Squash and Jump
  {
    active: {
      scaleY: [1, 0.6, 1.2, 1],
      y: [0, 20, -40, 0],
    },
    transition: { duration: 0.6, ease: "easeOut" },
    transformOrigin: "bottom center",
  },
  // 4. Falling (Requests)
  {
    active: {
      rotateX: [0, 240, 150, 200, 175, 180, 180, 0],
      scale: [1, 1.1, 1],
    },
    transition: {
      duration: 2,
      ease: "easeOut",
      times: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.85, 1],
    },
    transformOrigin: "50% 80%",
  },
  // 5. Elastic Slide
  {
    active: {
      x: [0, -20, 15, -10, 5, 0],
    },
    transition: { duration: 0.8, ease: "easeInOut" },
    transformOrigin: "center center",
  },
  // 6. Impact Shake
  {
    active: {
      x: [0, -5, 5, -5, 5, -2, 2, 0],
      y: [0, -2, 2, -1, 1, 0],
      rotate: [0, -1, 1, -0.5, 0.5, 0],
    },
    transition: { duration: 0.5, ease: "linear" },
    transformOrigin: "center center",
  },
  // 7. Pop (Scale)
  {
    active: {
      scale: [1, 1.4, 1],
    },
    transition: { duration: 0.5, ease: "easeInOut" },
    transformOrigin: "center center",
  },
  // 8. Levitate
  {
    active: {
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      textShadow: [
        "0px 0px 0px rgba(0,0,0,0)",
        "0px 20px 20px rgba(0,0,0,0.2)",
        "0px 0px 0px rgba(0,0,0,0)",
      ],
    },
    transition: { duration: 1.2, ease: "easeInOut" },
    transformOrigin: "center center",
  },
];

const DancingLetters = ({
  text = "ANIMATE",
  className = "",
  letterClassName = "",
}: DancingLettersProps) => {
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());
  const letters = text.split("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = useCallback((index: number) => {
    setActiveIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      }
      // Small timeout to allow state clear if double clicking rapidly
      setTimeout(() => {
        setActiveIndices((prev) => {
          const next = new Set(prev);
          next.add(index);
          return next;
        });
      }, 10);
      return next;
    });
  }, []);

  const handleAnimationComplete = useCallback((index: number) => {
    setActiveIndices((prev) => {
      if (!prev.has(index)) return prev;
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  }, []);

  return (
    <motion.div
      className={cn(
        "flex items-center justify-center select-none",
        dancingFont.variable,
        className
      )}
      style={{ perspective: "1000px" }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {letters.map((letter, idx) => {
        const animIndex = idx % letterAnimations.length;
        const anim = letterAnimations[animIndex];
        const isActive = activeIndices.has(idx);

        return (
          <motion.span
            key={`${letter}-${idx}`}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                rotateX: 0,
                rotateY: 0,
                scaleX: 1,
                scaleY: 1,
                textShadow: "0px 0px 0px rgba(0,0,0,0)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              },
              active: {
                ...anim.active,
                opacity: 1,
                // @ts-expect-error transition type mismatch
                transition: anim.transition,
              },
            }}
            animate={isActive ? "active" : isLoaded ? "visible" : undefined}
            onHoverStart={() => {
              if (!isActive) handleClick(idx);
            }}
            onClick={() => handleClick(idx)}
            onAnimationComplete={(definition) => {
              if (definition === "active") handleAnimationComplete(idx);
            }}
            className={cn(
              "relative inline-block text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-neutral-100 cursor-pointer",
              letterClassName,
              isActive ? "z-10" : "z-0"
            )}
            style={{
              transformOrigin: anim.transformOrigin,
              transformStyle: "preserve-3d",
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default DancingLetters;
