"use client";
import { m } from "motion/react";
import Image from "next/image";

interface IconProps {
  img: string;
  index: number;
}

interface OrbitingIconsProps {
  /**
   * Array of icon URLs to display
   */
  icons: string[];
  /**
   * Radius of the circular path
   */
  radius?: number;
  /**
   * Duration of the full rotation in seconds
   */
  duration?: number;
  /**
   * Title text to display
   */
  title?: string;
  /**
   * Description text to display
   */
  description?: string;
}

const OrbitingIcons = ({
  icons,
  radius = 250,
  duration = 40,
  title = "Automate Your Workflow",
  description = "Connect your favorite tools and boost productivity effortlessly.",
}: OrbitingIconsProps) => {
  const iconSize = 80; // Size of each icon box

  // Calculate how many icons fit around the circle with gap
  const circumference = 2 * Math.PI * radius;
  // Use larger spacing to create gaps (1.2 factor)
  const iconsNeeded = Math.floor(circumference / (iconSize * 0.9));

  // Distribute icons ensuring no back-to-back duplicates
  const repeatedIcons: string[] = [];

  // If we have enough unique icons, use them in a pattern that avoids adjacency
  if (icons.length >= 2) {
    for (let i = 0; i < iconsNeeded; i++) {
      // Get the previous icon to avoid duplication
      const prevIcon = repeatedIcons[i - 1];

      // Find a suitable icon that's different from the previous one
      let iconIndex = i % icons.length;

      // If this icon would be the same as the previous, shift to the next one
      if (icons[iconIndex] === prevIcon) {
        iconIndex = (iconIndex + 1) % icons.length;
      }

      // Also check if this is the last icon and it would match the first (circular check)
      if (
        i === iconsNeeded - 1 &&
        icons[iconIndex] === repeatedIcons[0] &&
        icons.length > 2
      ) {
        // Find an icon that's different from both the previous and the first
        for (let j = 0; j < icons.length; j++) {
          const candidateIndex = (iconIndex + j) % icons.length;
          if (
            icons[candidateIndex] !== prevIcon &&
            icons[candidateIndex] !== repeatedIcons[0]
          ) {
            iconIndex = candidateIndex;
            break;
          }
        }
      }

      repeatedIcons.push(icons[iconIndex]);
    }
  } else {
    // If only 1 unique icon, just repeat it
    for (let i = 0; i < iconsNeeded; i++) {
      repeatedIcons.push(icons[0]);
    }
  }

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-[32px] w-[300px] h-[300px] md:w-[375px] md:h-[350px] overflow-hidden relative flex flex-col items-center shadow-2xl">
      {/* Rotating Icons Centered */}
      <m.div
        className="absolute"
        style={{
          width: radius * 2,
          height: radius * 2,
          top: "70px",
          left: "50%",
          marginLeft: -radius, // Center horizontally by offsetting half the width
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
        }}
      >
        {repeatedIcons.map((item, index) => {
          const angle = (index / repeatedIcons.length) * 2 * Math.PI;
          const x = radius + Math.cos(angle) * radius - 40; // -40 to center the icon (80px/2)
          const y = radius + Math.sin(angle) * radius - 40;
          // Convert angle to degrees and add 90° to face the direction of travel (tangent)
          const rotationDeg = (angle * 180) / Math.PI + 90;

          return (
            <div
              key={angle.toFixed(6)}
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                transform: `rotate(${rotationDeg}deg)`,
              }}
            >
              <IconCard img={item} index={index} />
            </div>
          );
        })}
      </m.div>

      {/* Text Content Aligned to Bottom */}
      <div className="absolute bottom-6 md:bottom-12 z-20 flex flex-col items-center text-center gap-[5px] px-5">
        <h2 className="text-neutral-900 dark:text-white text-[20px] md:text-[24px] font-medium leading-[1.1]">
          {title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-[14px] leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

const IconCard = ({ img }: IconProps) => {
  return (
    <m.div className="size-[50px] md:size-[65px] flex items-center justify-center relative rounded-full bg-white dark:bg-neutral-700 ">
      <Image
        alt="image"
        src={img}
        fill
        sizes="65px"
        className="object-contain p-3 md:p-5"
      />
    </m.div>
  );
};

export default OrbitingIcons;
