"use client";
import { motion } from "motion/react";
import { useState, useRef } from "react";

interface ConfettiPiece {
  id: string;
  angle: number;
  distance: number;
  color: string;
}

const randomColorClass = () => {
  const colors = [
    "bg-red-700",
    "bg-yellow-400",
    "bg-green-700",
    "bg-blue-700",
    "bg-pink-700",
    "bg-purple-700",
    "bg-orange-700",
    "bg-teal-700",
    "bg-indigo-700",
    "bg-violet-700",
    "bg-gray-700",
    "bg-gray-700",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const GiftCard = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function launch() {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const newPieces = Array.from({ length: 100 }).map((_, i) => ({
      id: `${Date.now()}-${i}-${Math.random()}`,
      angle: Math.random() * 360,
      distance: 120 + Math.random() * 80,
      color: randomColorClass(),
    }));

    setPieces(newPieces); // Replace instead of append

    // Set cleanup timeout
    timeoutRef.current = setTimeout(() => {
      setPieces([]);
    }, 1000);
  }

  const handleHoverStart = () => {
    setIsHovered(true);
    launch();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="relative w-[280px] h-[330px] [perspective:1000px] cursor-pointer"
    >
      {/* Front card */}
      <motion.div
        transition={{ duration: 0.4 }}
        animate={{ rotateY: isHovered ? -80 : 0 }}
        className="absolute inset-0 bg-neutral-900 flex items-center justify-center z-10 origin-left "
      >
        <p className="text-[24px] text-white font-medium text-center p-4 font-serif">
          Tap to reveal your surprise
        </p>
      </motion.div>

      {/* Back card */}
      <motion.div className="absolute inset-0 bg-gray-200 flex items-center justify-center ">
        {/* Confetti container */}
        <div className="absolute inset-0 overflow-hidden">
          {pieces.map((p) => {
            const x = Math.cos((p.angle * Math.PI) / 180) * p.distance;
            const y = Math.sin((p.angle * Math.PI) / 180) * p.distance;
            return (
              <motion.div
                key={p.id}
                className={`${p.color} w-[2px] h-[6px]  absolute top-1/2 left-1/2`}
                initial={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: 0,
                  scale: 0.8,
                  x,
                  y,
                  rotate: 720,
                }}
                transition={{
                  duration: 0.6 + Math.random() * 1,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>

        {/* Content */}
        <div className="   ">
          <p className="text-[18px] font-medium text-center text-neutral-500">
            🎉 Your Coupon Code:
            <br />
            <span className="text-[32px] font-semibold text-green-600">
              SAVE20
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GiftCard;
