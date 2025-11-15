"use client";

import Image from "next/image";
import { useScroll, motion, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface StackScrollTypes {
  image: string;
  text: string;
  title: string;
}

interface StackScrollCardProps {
  image: string;
  title: string;
  index: number;
}

const data: StackScrollTypes[] = [
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "The Call of the Mountains",
    text: `<p>
        Towering peaks and winding trails remind us of the grandeur of our planet. 
        Mountains stand as symbols of strength and perseverance, challenging us to rise 
        above obstacles and discover breathtaking views from the summit.
      </p>`,
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "The Serenity of the Ocean",
    text: `<p>
        Waves crashing against the shore carry both power and peace. The ocean invites us 
        to pause, reflect, and embrace the rhythm of life, teaching us humility and resilience 
        with every tide.
      </p>`,
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "The Spirit of the Desert",
    text: `<p>
          Amid rugged canyons and sun-baked stones, the desert whispers stories of endurance. 
          Though harsh and unforgiving, it teaches us the beauty of resilience, adaptation, and 
          the quiet strength found in solitude. Traveling its winding roads reminds us of nature’s 
          raw power and timeless presence.
        </p>`,
  },
];

const StackScrollDemo = () => {
  return (
    <div className="bg-white dark:bg-black w-full min-h-full">
      <div className="relative w-full flex justify-center items-start">
        <div className="relative w-full max-w-[600px]">
          {data.map((item, i) => (
            <StackScrollCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StackScrollCard = ({ image, title, index }: StackScrollCardProps) => {
  const ref = useRef(null);
  const isMdUp = useMediaQuery({ query: "(min-width: 768px)" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Fixed: Reversed the width calculation - starts small, gets bigger
  const widthPercent = 70 + index * 5;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index * (isMdUp ? 10 : 10)]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        top: `${index * 10}px`,
        y,
      }}
      className="sticky h-[500px] flex items-center justify-center w-full"
    >
      <div style={{ width: `${widthPercent}%` }} className="mx-auto">
        {/* Fixed: Removed flex classes that were affecting height */}
        <div className="rounded-[10px] md:rounded-[20px] relative h-[180px] md:h-[250px] overflow-hidden">
          <Image
            alt={title}
            src={image}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-[8px]" />

          <div className="flex flex-col gap-3 absolute bottom-8 left-4 right-4">
            <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg leading-[60%]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StackScrollDemo;
