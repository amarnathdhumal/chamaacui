"use client";

import {
  IconTrendingUp,
  IconCpu,
  IconUsers,
  IconSparkles,
  IconBrain,
  IconRocket,
  IconShield,
  IconLock,
  IconDatabase,
  IconChartBar,
  IconNetwork,
  IconCloud,
  IconBolt,
  IconEye,
  IconWand,
  IconCode,
  IconSettings,
  IconSearch,
  IconBook,
  IconStar,
  IconCheck,
  IconGift,
  IconTarget,
  IconFlame,
} from "@tabler/icons-react";
import { type Icon } from "@tabler/icons-react";

import { motion } from "motion/react";

interface AiFeature {
  icon: Icon;
}

export const aiFeatures: AiFeature[] = [
  {
    icon: IconSparkles,
  },
  {
    icon: IconTrendingUp,
  },
  {
    icon: IconCpu,
  },
  {
    icon: IconUsers,
  },
  {
    icon: IconBrain,
  },
  {
    icon: IconRocket,
  },
  {
    icon: IconShield,
  },
  {
    icon: IconLock,
  },
  {
    icon: IconDatabase,
  },
  {
    icon: IconChartBar,
  },
  {
    icon: IconNetwork,
  },
  {
    icon: IconCloud,
  },
  {
    icon: IconBolt,
  },
  {
    icon: IconEye,
  },
  {
    icon: IconWand,
  },
  {
    icon: IconCode,
  },
  {
    icon: IconSettings,
  },
  {
    icon: IconSearch,
  },
  {
    icon: IconBook,
  },
  {
    icon: IconStar,
  },
  {
    icon: IconCheck,
  },
  {
    icon: IconGift,
  },
  {
    icon: IconTarget,
  },
  {
    icon: IconFlame,
  },
];

const firstRow = aiFeatures.slice(0, aiFeatures.length / 2);
const secondRow = aiFeatures.slice(aiFeatures.length / 2);

const MarqueeCard = () => {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <motion.div
        className="
    flex flex-col
    rounded-[20px] p-8 border border-[#E8E8E8] bg-white gap-4
    w-[350px] h-auto overflow-hidden relative"
      >
        {/* Row 1 */}
        <motion.div
          animate={{ x: ["0%", "-400%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="flex gap-2 whitespace-nowrap"
        >
          {Array(4) // repeat count here
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex gap-2">
                {firstRow.map((feature, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="size-full border border-[#e8e8e8] rounded-[10px] flex items-center justify-center p-4"
                  >
                    <feature.icon className="size-[30px] text-gray-700" />
                  </div>
                ))}
              </div>
            ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          animate={{ x: ["-400%", "0%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="flex gap-2 whitespace-nowrap"
        >
          {Array(4) // repeat count here
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex gap-2">
                {secondRow.map((feature, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="size-full border border-[#e8e8e8] rounded-[10px] flex items-center justify-center p-3"
                  >
                    <feature.icon className="size-[30px] text-gray-700" />
                  </div>
                ))}
              </div>
            ))}
        </motion.div>

        <div className="from-white to-transparent pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-white to-transparent pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>

        <div>
          <h2 className="text-xl font-semibold text-neutral-800 text-center mt-2 ">
            The Future of AI is Here
          </h2>

          <p
            className=" text-gray-500 text-center max-w-[250px] mx-auto 
  text-[14px] leading-[16px] tracking-[0em] mt-1
  "
          >
            AI is transforming the way we work and live.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeCard;

// const Test = () => {
//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-white">
//     <div className=" relative w-[400px] h-[300px] border border-transparent
//     [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]
//      [mask-composite:intersect]
//   [mask-clip:padding-box,border-box]
//     "
//     >
//       <motion.div
//       className={cn(
//         "aspect-square absolute",
//         "bg-gradient-to-l from-blue-600 via-red-500 to-yellow-300"
//       )}
//       style={{
//         width: 50,
//         offsetPath: `rect(0 auto auto 0 round 50px)`,
//         "--color-from": "#ffaa40",
//             "--color-to": "#9c40ff",
//       } as MotionStyle}
//       initial={{ offsetDistance: 0 }}
//       transition={{
//         repeat: Infinity,
//         ease: "linear",
//         duration : 5,
//         delay: 0,
//       }}
//       animate={{
//         offsetDistance:  [`${0}%`, `${100 + 0}%`],
//       }}

//       />
//     </div>
//     </div>
//   )
// }

// export default Test;

// const images = [
//   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop",
// ]

// const Coursel = () => {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const container = containerRef.current

//     if (container) {
//       const interval = setInterval(() => {
//         // total scrollable width
//         const containerWidth = container.scrollWidth;

//         // visible width
//         const clientWidth = container.clientWidth;

//         // current scroll position
//         const scrollLeft = container.scrollLeft;

//         const firstImage = container.querySelector("img")
//         const imageWidth =

//         if (scrollLeft + clientWidth >= containerWidth - 10) {
//           container.scrollTo({
//             left: 0,
//             behavior: "smooth"
//           })
//         } else {
//           container.scrollBy({
//             left: 400,
//             behavior: "smooth"
//           })
//         }

//       }, 2000)
//       return () => clearInterval(interval)
//     }
//   }, [])

//   return (
//     <div className="max-w-[1440px] mx-auto px-[70px]">
//     <div
//     ref={containerRef}
//     className="flex flex-row overflow-hidden gap-8 items-center h-screen ">
//       {images.map((item, index) => (
//         <img
//         src={item}
//           className="size-[400px]"
//         />
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Coursel;
