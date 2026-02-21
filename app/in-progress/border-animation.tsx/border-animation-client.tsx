"use client";

import { cn } from "@/lib/utils";
import { m, MotionStyle } from "motion/react";

const BorderAnimationClient = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div
        className=" relative p-20 py-5 rounded-full border border-transparent
[mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]
 [mask-composite:intersect]
[mask-clip:padding-box,border-box]
"
      >
        <m.div
          className={cn(
            "aspect-square absolute",
            "bg-gradient-to-l from-blue-600 via-red-500 to-yellow-300"
          )}
          style={
            {
              width: 50,
              offsetPath: `rect(0 auto auto 0 round 50px)`,
              "--color-from": "#ffaa40",
              "--color-to": "#9c40ff",
            } as MotionStyle
          }
          initial={{ offsetDistance: 0 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 5,
            delay: 0,
          }}
          animate={{
            offsetDistance: [`${0}%`, `${100 + 0}%`],
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="text-2xl font-bold text-white mb-2">Your Title</h2>
        </div>
      </div>
    </div>
  );
};

export default BorderAnimationClient;
