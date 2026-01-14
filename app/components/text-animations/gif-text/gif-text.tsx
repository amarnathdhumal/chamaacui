"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface GifTextProps {
  /**
   * The text to display
   */
  text?: string;
  /**
   * The source URL for the background image/gif
   */
  gif?: string;
  /**
   * Class for the text element
   */
  className?: string;
  /**
   * Class for the container (e.g. height, background)
   */
  containerClassName?: string;
}

const GifText = ({
  text = "CHAMAAC",
  gif = "https://assets.amarn.me/gif-text.gif",
  className,
  containerClassName,
}: GifTextProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!gif) return;

    setLoading(true);
    const img = new Image();
    img.src = gif;
    img.onload = () => setLoading(false);

    return () => {
      img.onload = null;
    };
  }, [gif]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4",
        containerClassName
      )}
    >
      <h2
        className={cn(
          "text-[clamp(80px,12vw,150px)] font-extrabold select-none text-center leading-tight uppercase transition-colors duration-300",
          loading
            ? "text-neutral-400 animate-pulse duration-100"
            : "text-transparent bg-clip-text bg-cover bg-center bg-no-repeat",
          className
        )}
        style={{
          backgroundImage: loading ? "none" : `url(${gif})`,
          WebkitBackgroundClip: loading ? "none" : "text",
          backgroundClip: loading ? "none" : "text",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default GifText;
