import { useEffect, useRef } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const xRef = useRef<number>(0);
  const yRef = useRef<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const { src, title } = slide;

  return (
    <div className="[perspective: 1200px] [transform-style: preserve-3d">
      <li
        className="flex flex-1 flex-col items-center justify-center relative text-center text-whie opacity-0 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2,1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-o left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) /30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            loading="eager"
            decoding="sync"
          />
        </div>
      </li>
    </div>
  );
};

// interface CarouselControlProps {
//     type: string;
//     title: string;
//     handleClick: () => void;
//   }

// const CarouselControl = ({
//     type,
//     title,
//     handleClick,
//   }: CarouselControlProps) => {
//     return (
//       <button
//         className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
//           type === "previous" ? "rotate-180" : ""
//         }`}
//         title={title}
//         onClick={handleClick}
//       >
//         <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
//       </button>
//     );
//   }

export default Slide;
