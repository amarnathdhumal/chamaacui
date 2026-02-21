"use client";

import { m, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { useRef } from "react";

interface GridItemProps {
  src: string;
  isLeftSide: boolean;
  container?: React.RefObject<HTMLDivElement | null>;
}

interface StaggeredScrollProps {
  /** Optional container ref. If provided, scroll animations track this container instead of viewport */
  container?: React.RefObject<HTMLDivElement | null>;
  /**  */
  images: string[];
}

// Grid item with 3D staggered animation
const GridItem = ({ src, isLeftSide, container }: GridItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container,
    offset: ["start end", "end start"],
  });

  // Wrapper animations (entering from bottom)
  const zEnter = useTransform(scrollYProgress, [0, 0.5], [300, 0]);
  const rotateXEnter = useTransform(scrollYProgress, [0, 0.5], [70, 0]);
  const rotateZEnter = useTransform(
    scrollYProgress,
    [0, 0.5],
    [isLeftSide ? 5 : -5, 0]
  );
  const xPercentEnter = useTransform(
    scrollYProgress,
    [0, 0.5],
    [isLeftSide ? -40 : 40, 0]
  );
  const skewXEnter = useTransform(
    scrollYProgress,
    [0, 0.5],
    [isLeftSide ? -20 : 20, 0]
  );
  const yPercentEnter = useTransform(scrollYProgress, [0, 0.5], [80, 0]);

  // Wrapper animations (exiting to top)
  const zExit = useTransform(scrollYProgress, [0.5, 1], [0, 300]);
  const rotateXExit = useTransform(scrollYProgress, [0.5, 1], [0, -50]);
  const rotateZExit = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, isLeftSide ? -1 : 1]
  );
  const xPercentExit = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, isLeftSide ? -20 : 20]
  );
  const yPercentExit = useTransform(scrollYProgress, [0.5, 1], [0, -80]);

  const skewXExit = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, isLeftSide ? 20 : -20]
  );

  // Combine enter and exit transforms
  const z = useTransform(() =>
    scrollYProgress.get() < 0.5 ? zEnter.get() : zExit.get()
  );
  const rotateX = useTransform(() =>
    scrollYProgress.get() < 0.5 ? rotateXEnter.get() : rotateXExit.get()
  );
  const rotateZ = useTransform(() =>
    scrollYProgress.get() < 0.5 ? rotateZEnter.get() : rotateZExit.get()
  );
  const xPercent = useTransform(() =>
    scrollYProgress.get() < 0.5 ? xPercentEnter.get() : xPercentExit.get()
  );
  const skewX = useTransform(() =>
    scrollYProgress.get() < 0.5 ? skewXEnter.get() : skewXExit.get()
  );
  const yPercent = useTransform(() =>
    scrollYProgress.get() < 0.5 ? yPercentEnter.get() : yPercentExit.get()
  );

  // Filter animations
  const blurEnter = useTransform(scrollYProgress, [0, 0.5], [7, 0]);
  const blurExit = useTransform(scrollYProgress, [0.5, 1], [0, 4]);
  const blur = useTransform(() =>
    scrollYProgress.get() < 0.5 ? blurEnter.get() : blurExit.get()
  );

  const brightnessEnter = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const brightnessExit = useTransform(scrollYProgress, [0.5, 1], [100, 5]);
  const brightness = useTransform(() =>
    scrollYProgress.get() < 0.5 ? brightnessEnter.get() : brightnessExit.get()
  );

  const contrastEnter = useTransform(scrollYProgress, [0, 0.5], [400, 100]);
  const contrastExit = useTransform(scrollYProgress, [0.5, 1], [100, 500]);
  const contrast = useTransform(() =>
    scrollYProgress.get() < 0.5 ? contrastEnter.get() : contrastExit.get()
  );

  // Inner image scale
  const scaleYEnter = useTransform(scrollYProgress, [0, 0.5], [1.8, 1]);
  const scaleYExit = useTransform(scrollYProgress, [0.5, 1], [1, 1.8]);
  const scaleY = useTransform(() =>
    scrollYProgress.get() < 0.5 ? scaleYEnter.get() : scaleYExit.get()
  );

  const wrapperTransform = useMotionTemplate`
    perspective(1200px)
    translateX(${xPercent}%)
    translateY(${yPercent}%)
    translateZ(${z}px)
    rotateX(${rotateX}deg)
    rotateZ(${rotateZ}deg)
    skewX(${skewX}deg)
  `;

  const filter = useMotionTemplate`blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%)`;

  return (
    <m.figure ref={ref} className="relative m-0 [perspective:1200px] ">
      <m.div
        style={{
          transform: wrapperTransform,
          filter,
        }}
        className="relative w-full aspect-[1/1.2] rounded-[4px] overflow-hidden [transform-style:preserve-3d] "
      >
        <m.div
          style={{
            scaleY,
            backgroundImage: `url(${src})`,
          }}
          className="absolute -top-0 -left-0 w-full h-full bg-cover bg-[center_20%] [backface-visibility:hidden] "
        />
      </m.div>
    </m.figure>
  );
};

const StaggeredScroll = ({ container, images }: StaggeredScrollProps) => {
  return (
    <main className="relative overflow-hidden w-full bg-black text-white min-h-[1200px]">
      <section className="grid place-items-center w-full relative">
        <div className="w-full max-w-[300px] grid grid-cols-2 relative gap-x-8">
          {images.map((src, index) => (
            <GridItem
              key={src}
              src={src}
              isLeftSide={index % 2 === 0}
              container={container}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default StaggeredScroll;
