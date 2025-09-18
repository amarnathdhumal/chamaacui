"use client";

import { motion } from "motion/react";

import { useState } from "react";

const GiftCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-[280px] h-[330px] [perspective:1000px] cursor-pointer"
    >
      {/* Front card */}
      <motion.div
        transition={{ duration: 0.4 }}
        animate={{ rotateY: isHovered ? -80 : 0 }}
        className="absolute inset-0 bg-neutral-900 flex items-center justify-center  [backface-visibility:hidden] z-10 origin-left"
      >
        <p className="text-[24px] text-white font-medium text-center p-4 font-serif">
          Tap to reveal your surprise
        </p>
      </motion.div>

      {/* Back card */}
      <motion.div
  className="absolute inset-0 bg-black flex items-center justify-center [backface-visibility:hidden]"
>
  <p className="text-[18px] font-medium p-4 text-center text-white">
    🎉 Your Coupon Code:
    <br />
    <span className="font-serif text-[32px] text-green-400">
      SAVE20
    </span>
  </p>
</motion.div>
    </motion.div>
  );
};

export default GiftCard;
