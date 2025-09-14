"use client";

import GreenButton from "./green-button";
import Header from "./header";
import Image from "next/image";
import IconBox from "./icon-box";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="relative h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.svg"
          alt="Hero"
          width={1440}
          height={1024}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0" />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="absolute inset-0 w-full"
      >
        <Header />
      </motion.div>

      {/* Hero Content */}
      <div className="h-full flex justify-between items-end w-[1440px] mx-auto pb-[40px] relative z-10 px-[25px]">
        {/* Top left icon */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-1/4 left-[300px]"
        >
          <IconBox img="/images/icon1.svg" rotate="-42deg" />
        </motion.div>

        {/* Top right icon */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 1  }}
          className="absolute top-1/4 right-[300px]"
        >
          <IconBox img="/images/icon2.svg" rotate="42deg" />
        </motion.div>

        {/* Bottom left icon */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute top-5/9  left-[300px]"
        >
          <IconBox img="/images/icon3.svg" rotate="-60deg" />
        </motion.div>

        {/* Bottom right icon */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute top-5/9  right-[300px]"
        >
          <IconBox img="/images/icon4.svg" rotate="60deg" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="flex items-end justify-between w-full"
        >
          <div className="text-[#ADD030] text-left">
            <h1 className="text-[48px] font-semibold leading-[1] tracking-tighter ">
              Build Strength.
              <br />
              Unlock Your Potential.
            </h1>
          </div>

          <div>
            <GreenButton
              name="Get Started"
              onClick={() => console.log("Get Started")}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
