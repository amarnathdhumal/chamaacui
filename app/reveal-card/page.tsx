"use client";

import { motion } from "motion/react";
import { useState } from "react";

const emojis = ["😀", "😁", "😂", "🤣", "😎", "😍", "🥳", "🤯", "😴", "😭"];

const RevealCard = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [emoji, setEmoji] = useState("😀");

  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[randomIndex]);
  };

  return (
    <div className="flex  ">
      <motion.div
        onHoverStart={() => {
          setIsHovered(true);
          getRandomEmoji();
        }}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-[250px] w-[350px] bg-purple-600 rounded-4xl  cursor-pointer "
      >
        <div className="absolute top-40/100 bg-violet-300/50 backdrop-blur-sm h-[150px] w-full rounded-4xl z-10" />

        <motion.div
          animate={{
            rotate: isHovered ? -15 : 15,
            y: isHovered ? -150 : 0,
            scale: isHovered ? 0.8 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeIn",
          }}
          className="h-[180px]  absolute top-20/100 bg-white w-[200px]  rounded-3xl left-1/2 -translate-x-1/2 items-center justify-center flex"
        >
          <motion.p className="text-5xl">{emoji}</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RevealCard;
