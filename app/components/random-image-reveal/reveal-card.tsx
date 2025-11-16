"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

interface RandomImageRevealProps {
  images: string[];
  duration?: number;
}

const RandomImageReveal = ({
  images,
  duration = 0.2
}: RandomImageRevealProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState(images[0] || "");

  const getRandomImage = () => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }
  };

  return (
    <div className="flex  min-h-[500px] justify-center items-center">
      <motion.div
        onHoverStart={() => {
          setIsHovered(true);
          getRandomImage();
        }}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-[270px] w-[350px] bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-4xl  cursor-pointer "
      >
        <div className="absolute top-30/100 bottom-0 left-0 right-0 backdrop-blur-sm rounded-4xl z-10 border border-neutral-200 dark:border-neutral-800" />

        <motion.div
          animate={{
            rotate: isHovered ? -15 : 15,
            y: isHovered ? -150 : 0,
            scale: isHovered ? 0.8 : 1,
          }}
          transition={{
            duration: duration,
            ease: "easeIn",
          }}
          className="h-[180px]  absolute top-20/100 w-[200px]  rounded-3xl left-1/2 -translate-x-1/2 overflow-hidden  "
        >
          <Image
            src={currentImage}
            alt="Reveal card image"
            fill
            className="object-cover"
            sizes="200px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RandomImageReveal;
