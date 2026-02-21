"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { LazyMotion, domAnimation, m } from "motion/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface StatsCardsProps {
  className?: string;
  width?: string;
  height?: string;
  images?: string[];
}

export function StatsCards({
  className,
  width = "w-70",
  height = "h-84",
  images = ["/images/models/1.png", "/images/models/2.png"],
}: StatsCardsProps) {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-6 sm:gap-4 md:gap-0 px-4 py-4 bg-orange-50",
          inter.className,
          className
        )}
      >
        {/* Card 1: Revenue */}
        <m.div
          className={cn(
            `relative z-10 ${width} ${height} bg-white rounded-[16px] p-5 flex flex-col justify-between hover:z-50`
          )}
          initial={{
            rotate: -3,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <div>
            <h2 className="text-[#FF4400] text-5xl font-semibold tracking-tighter">
              $100k+
            </h2>
          </div>
          <div>
            <h4 className="text-[#FF4400] font-medium text-lg leading-tight tracking-tighter">
              Revenue driven
            </h4>
            <div className="w-full h-px bg-[#FF4400] my-2"></div>
            <p className="text-[#FF4400] text-sm leading-tight tracking-tight max-w-[90%]">
              From scroll-stopping campaigns that actually sell.
            </p>
          </div>
        </m.div>

        {/* Card 2: Image Stats */}
        <m.div
          className={cn(
            `relative z-20 ${width} ${height} rounded-[16px] overflow-hidden group hover:z-50`
          )}
          initial={{
            rotate: 2,
            y: 1,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Image
            src={images[0]}
            alt="Model"
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-cover"
          />
          <div className="absolute top-5 left-5 bg-white/90 py-[4px] px-[8px] rounded-full text-xs font-semibold tracking-tighter text-black ">
            900k Liked
          </div>
        </m.div>

        {/* Card 3: Impressions */}
        <m.div
          className={cn(
            `relative z-30 ${width} ${height} bg-[#FF4400] rounded-[16px] p-5 flex flex-col justify-between  flex-shrink-0 hover:z-50`
          )}
          initial={{
            rotate: 8,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <div>
            <h2 className="text-white text-5xl font-semibold tracking-tighter">
              37M+
            </h2>
          </div>
          <div>
            <h4 className="text-white font-medium text-lg leading-tight tracking-tighter">
              Organic impressions
            </h4>
            <div className="w-full h-px bg-white my-2"></div>
            <p className="text-white text-sm leading-tight tracking-tight max-w-[90%]">
              Growth through content that sells, not just trends.
            </p>
          </div>
        </m.div>

        {/* Card 4: Image Stats */}
        <m.div
          className={cn(
            `relative z-40 ${width} ${height} rounded-[16px] overflow-hidden -ml-1 hover:z-50`
          )}
          initial={{
            rotate: -4,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Image
            src={images[1]}
            alt="Campaign"
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-cover"
          />
          <div className="absolute bottom-5 right-5 bg-white/90 py-[4px] px-[8px] rounded-full text-xs font-semibold tracking-tighter text-black ">
            1.5M Viewed
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
}
