import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const data: string[] = Array.from({ length: 20 }, (_, i) => `${(i % 2) + 1}.jpg`);

const Test = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center overflow-y-scroll">
      <div className="grid grid-cols-2 gap-6 p-10">
        {data.map((item, i) => (
          <ImageWithScrollBlur key={i} src={`/images/${item}`} />
        ))}
      </div>
    </div>
  );
};


const ImageWithScrollBlur = ({ src }: { src: string }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // ✅ useMotionTemplate keeps type safety for CSS strings
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div ref={ref}>
      <motion.img
        src={src}
        alt="scrolling image"
        width={200}
        height={200}
        className="rounded-[6px]"
        style={{
          filter,
        }}
      />
    </motion.div>
  );
};

export default Test;
