"use client";

import { cn } from "@/lib/utils";

interface NeoBrutalistButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const NeoBrutalistButton = ({
  text = "Click Me",
  className,
  onClick,
}: NeoBrutalistButtonProps) => {
  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .shimmer-effect {
          transform: translateX(-100%);
        }
        .group:hover .shimmer-effect {
          animation: shimmer 0.2s linear forwards;
        }
      `}</style>
      <button
        onClick={onClick}
        className={cn(
          "group relative overflow-hidden px-6 py-3 cursor-pointer",
          "bg-[#ff90e8] text-black",
          "skew-x-[-10deg] transition-all duration-100 border-[1.5px] border-black",
          "shadow-[4px_4px_0_0_black] hover:shadow-[8px_8px_0_0_black]",
          className
        )}
      >
        <div className="shimmer-effect absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent z-0" />
        <span className="relative z-10 inline-block skew-x-[10deg] text-lg font-medium">
          {text}
        </span>
      </button>
    </>
  );
};

export default NeoBrutalistButton;
