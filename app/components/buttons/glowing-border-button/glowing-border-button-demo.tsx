import React from "react";
import GlowingBorderButton from "@/registry/chamaac/glowing-border-button/glowing-border-button";

const GlowingBorderButtonDemo = () => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center bg-white dark:bg-black">
      <GlowingBorderButton
        onClick={() => console.log("Button clicked")}
        className=""
      >
        Book a Call
      </GlowingBorderButton>
    </div>
  );
};

export default GlowingBorderButtonDemo;
