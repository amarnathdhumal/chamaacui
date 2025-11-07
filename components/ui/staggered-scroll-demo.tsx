"use client";

import StaggeredScroll from "./staggered-scroll";
import { useRef } from "react";

const StaggeredScrollDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
  ];

  return (
    <div ref={containerRef} className="h-[900px] overflow-auto">
      <StaggeredScroll images={images} container={containerRef} />
    </div>
  );
};

export default StaggeredScrollDemo;
