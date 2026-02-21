"use client";

import { m } from "motion/react";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const RoleAnimationClient = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex flex-row items-center justify-center">
        <svg
          width="471"
          height="171"
          viewBox="0 0 471 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            d="M163 67.7762L198.961 27.1921C206.153 20 206.153 20 221.051 20H247.251"
            stroke="url(#paint1_upper)"
          />
          <m.path
            d="M163 103L198.961 143.584C206.153 150.776 206.153 150.776 221.051 150.776H247.251"
            stroke="url(#paint2_upper)"
          />
          <m.line
            x1="165"
            y1="84.5"
            x2="288.293"
            y2="84.5"
            stroke="url(#paint3_upper)"
          />
          <rect
            x="0.5"
            y="65.5"
            width="164"
            height="39"
            rx="4.5"
            fill="white"
            stroke="#E8E8E8"
          />
          <m.path
            d="M 5 65.5 L 164 65.5 V 104.5"
            stroke="url(#paint4_upper)"
            strokeWidth="1"
            fill="none"
          />
          <text
            x="82.5"
            y="85"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#000000"
            fontSize="14"
            style={{
              fontFamily: geistMono.style.fontFamily,
              letterSpacing: "-0.04em", // tracking
              lineHeight: "20px", // leading
            }}
          >
            Amarnath Dhumal
          </text>
          <rect
            x="247.5"
            y="131.5"
            width="141"
            height="39"
            rx="4.5"
            stroke="#E8E8E8"
          />
          <text
            x="318"
            y="151"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#000000"
            fontSize="14"
            style={{
              fontFamily: geistMono.style.fontFamily,
              letterSpacing: "-0.04em", // tracking
              lineHeight: "20px", // leading
            }}
          >
            App Developer
          </text>
          <rect
            x="288.5"
            y="63.5"
            width="182"
            height="39"
            rx="4.5"
            stroke="#E8E8E8"
          />
          <text
            x="379.5"
            y="83"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#000000"
            fontSize="14"
            style={{
              fontFamily: geistMono.style.fontFamily,
              letterSpacing: "-0.04em", // tracking
              lineHeight: "20px", // leading
            }}
          >
            Full Stack Developer
          </text>
          <rect
            x="247.5"
            y="0.5"
            width="153"
            height="39"
            rx="4.5"
            stroke="#E8E8E8"
          />
          <text
            x="324"
            y="20"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#000000"
            fontSize="14"
            style={{
              fontFamily: geistMono.style.fontFamily,
              letterSpacing: "-0.04em", // tracking
              lineHeight: "20px", // leading
            }}
          >
            Design Engineer
          </text>

          {/* Gradients */}
          <defs>
            <m.linearGradient
              id="paint1_upper"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [
                  153, // Start before path: M163 67.7762
                  163, // Start of path
                  181, // 25% through (interpolated)
                  198.961, // 50% through: L198.961 27.1921
                  210, // 75% through (interpolated)
                  247.251, // End of path: H247.251
                  257.251, // End after path
                ],
                y1: [
                  77.7762, // Start before path
                  67.7762, // Start of path: M163 67.7762
                  47, // 25% through (interpolated)
                  27.1921, // 50% through: L198.961 27.1921
                  23.5, // 75% through (interpolated)
                  20, // End of path: y=20
                  20, // End after path
                ],
                x2: [
                  163, // Gradient end at path start
                  183, // Gradient end offset from start (doubled)
                  201, // 25% through + offset (doubled)
                  218.961, // 50% through + offset (doubled)
                  230, // 75% through + offset (doubled)
                  267.251, // End + offset (doubled)
                  277.251, // End after path + offset (doubled)
                ],
                y2: [
                  77.7762, // Before path
                  67.7762, // Same y as start
                  47, // Moving along path
                  27.1921, // Following path
                  23.5, // Following path
                  20, // Same y as end
                  20, // After path
                ],
              }}
              transition={{
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#e8e8e8" />
              <stop offset="0.3" stopColor="#e8e8e8" />
              <stop offset="0.5" stopColor="#FFEA00" />
              <stop offset="0.7" stopColor="#0096FF" />
              <stop offset="1" stopColor="#e8e8e8" />
            </m.linearGradient>

            {/* 2nd Gradient - Bottom Path */}
            <m.linearGradient
              id="paint2_upper"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [
                  153, // Start before path: M163 103
                  163, // Start of path
                  181, // 25% through (interpolated)
                  198.961, // 50% through: L198.961 143.584
                  210, // 75% through (interpolated)
                  247.251, // End of path: H247.251
                  257.251, // End after path
                ],
                y1: [
                  113, // Start before path
                  103, // Start of path: M163 103
                  123, // 25% through (interpolated)
                  143.584, // 50% through: L198.961 143.584
                  147, // 75% through (interpolated)
                  150.776, // End of path: y=150.776
                  150.776, // End after path
                ],
                x2: [
                  163, // Gradient end at path start
                  183, // Gradient end offset from start (doubled)
                  201, // 25% through + offset (doubled)
                  218.961, // 50% through + offset (doubled)
                  230, // 75% through + offset (doubled)
                  267.251, // End + offset (doubled)
                  277.251, // End after path + offset (doubled)
                ],
                y2: [
                  113, // Before path
                  103, // Same y as start
                  123, // Moving along path
                  143.584, // Following path
                  147, // Following path
                  150.776, // Same y as end
                  150.776, // After path
                ],
              }}
              transition={{
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#e8e8e8" />
              <stop offset="0.3" stopColor="#e8e8e8" />
              <stop offset="0.5" stopColor="#FF6B6B" />
              <stop offset="0.7" stopColor="#4ECDC4" />
              <stop offset="1" stopColor="#e8e8e8" />
            </m.linearGradient>

            {/* 3rd Gradient - Horizontal Line */}
            <m.linearGradient
              id="paint3_upper"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [
                  155, // Start before line: x1="165"
                  165, // Start of line
                  199, // 25% through
                  226.646, // 50% through (middle)
                  254, // 75% through
                  288.293, // End of line: x2="288.293"
                  298.293, // End after line
                ],
                y1: [
                  84.5, // Before line
                  84.5, // Start of line: y1="84.5"
                  84.5, // Horizontal line stays at y=84.5
                  84.5, // Middle
                  84.5, // 75% through
                  84.5, // End of line: y2="84.5"
                  84.5, // After line
                ],
                x2: [
                  165, // Gradient end at line start
                  185, // Gradient end offset from start (doubled)
                  219, // 25% through + offset (doubled)
                  246.646, // 50% through + offset (doubled)
                  274, // 75% through + offset (doubled)
                  308.293, // End + offset (doubled)
                  318.293, // End after line + offset (doubled)
                ],
                y2: [
                  84.5, // Before line
                  84.5, // Same y as start
                  84.5, // Horizontal line
                  84.5, // Following path
                  84.5, // Following path
                  84.5, // Same y as end
                  84.5, // After line
                ],
              }}
              transition={{
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#e8e8e8" />
              <stop offset="0.3" stopColor="#e8e8e8" />
              <stop offset="0.5" stopColor="#9B59B6" />
              <stop offset="0.7" stopColor="#E67E22" />
              <stop offset="1" stopColor="#e8e8e8" />
            </m.linearGradient>

            {/* 4th Gradient - Rectangle Border */}
            <m.linearGradient
              id="paint4_upper"
              gradientUnits="userSpaceOnUse"
              animate={{
                x1: [
                  -5, // Start before rectangle
                  5, // Top edge start
                  82.5, // Top edge middle
                  160, // Top edge end (before corner)
                  164.5, // Top-right corner end
                  164.5, // Right edge middle
                  164.5, // Right edge end (before corner)
                  160, // Bottom-right corner end
                  82.5, // Bottom edge middle
                  5, // Bottom edge end (before corner)
                  0.5, // Bottom-left corner end
                  0.5, // Left edge middle
                  0.5, // Left edge end (before corner)
                  5, // Top-left corner end (back to start)
                ],
                y1: [
                  65.5, // Before rectangle
                  65.5, // Top edge
                  65.5, // Top edge
                  65.5, // Top edge end
                  70, // Top-right corner end
                  85, // Right edge middle
                  100, // Right edge end
                  104.5, // Bottom-right corner end
                  104.5, // Bottom edge
                  104.5, // Bottom edge end
                  100, // Bottom-left corner end
                  85, // Left edge middle
                  70, // Left edge end
                  65.5, // Top-left corner end (back to start)
                ],
                x2: [
                  5, // Gradient end at rectangle start
                  25, // Top start + offset (20px horizontal)
                  102.5, // Top middle + offset
                  180, // Top end + offset
                  184.5, // Top-right corner (vertical segment starts)
                  184.5, // Right middle (vertical)
                  184.5, // Right end (vertical)
                  180, // Bottom-right corner (horizontal segment starts)
                  102.5, // Bottom middle + offset
                  25, // Bottom end + offset
                  0.5, // Bottom-left corner (vertical segment starts)
                  0.5, // Left middle (vertical)
                  0.5, // Left end (vertical)
                  25, // Top-left corner (horizontal segment starts)
                ],
                y2: [
                  65.5, // Before rectangle
                  65.5, // Top edge (horizontal)
                  65.5, // Top edge (horizontal)
                  65.5, // Top edge end (horizontal)
                  90, // Top-right corner (70 + 20px vertical offset)
                  95, // Right middle (85 + 10px vertical offset)
                  120, // Right end (100 + 20px vertical offset)
                  104.5, // Bottom-right corner (horizontal)
                  104.5, // Bottom edge (horizontal)
                  104.5, // Bottom edge end (horizontal)
                  80, // Bottom-left corner (100 - 20px vertical offset)
                  75, // Left middle (85 - 10px vertical offset)
                  50, // Left end (70 - 20px vertical offset)
                  65.5, // Top-left corner (horizontal)
                ],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <stop offset="0" stopColor="#e8e8e8" />
              <stop offset="0.3" stopColor="#e8e8e8" />
              <stop offset="0.5" stopColor="#9B59B6" />
              <stop offset="0.7" stopColor="#E67E22" />
              <stop offset="1" stopColor="#e8e8e8" />
            </m.linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default RoleAnimationClient;
