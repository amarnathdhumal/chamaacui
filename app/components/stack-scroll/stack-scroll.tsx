"use client"

import Image from "next/image";
import { useScroll, motion, useTransform } from "motion/react"
import { useRef } from "react";


interface StackScrollTypes {
    image: string;
    text: string;
    title: string;
}

interface StackScrollCardProps {
    image: string;
    text: string;
    title: string;
   
    index: number;
}

const data: StackScrollTypes[] = [
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // mountains
      title: "The Call of the Mountains",
      text: `<p>
        Towering peaks and winding trails remind us of the grandeur of our planet. 
        Mountains stand as symbols of strength and perseverance, challenging us to rise 
        above obstacles and discover breathtaking views from the summit.
      </p>`
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 
      title: "The Serenity of the Ocean",
      text: `<p>
        Waves crashing against the shore carry both power and peace. The ocean invites us 
        to pause, reflect, and embrace the rhythm of life, teaching us humility and resilience 
        with every tide.
      </p>`
    },
    {
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        title: "The Spirit of the Desert",
        text: `<p>
          Amid rugged canyons and sun-baked stones, the desert whispers stories of endurance. 
          Though harsh and unforgiving, it teaches us the beauty of resilience, adaptation, and 
          the quiet strength found in solitude. Traveling its winding roads reminds us of nature’s 
          raw power and timeless presence.
        </p>`
      }
      
  ];
  
const StackScroll = () => {
    return (
      <div className="bg-white dark:bg-black ">
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-[768px]" >
            {data.map((item, i) => (
              <StackScrollCard
                key={i}
                {...item}
                index={i}
                
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const StackScrollCard = ({ image, text, title, index }: StackScrollCardProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "start start"]
    });
  
    const scale = useTransform(
      scrollYProgress,
      [0, 1],
      [0.5, 1]
    );
    
    const widthPercent = 80 + (index * 10);
    
    // Calculate how much of previous cards should remain visible
    const y = useTransform(
      scrollYProgress,
      [0, 1],
      [0, index * 30]
    );
  
    return (
      <motion.div
        ref={ref}
        style={{
          scale,
          
          top: "40px",
          y,
        }}
        className="sticky h-screen flex items-center justify-center"
      >
        <div style={{ width: `${widthPercent}%` }}>
          <div className="flex justify-center items-center gap-4 rounded-[20px] relative h-[350px]  overflow-hidden ">
            <Image
              alt={title}
              src={image}
              width={800}
              height={400}
              className="w-full h-full  object-cover"
            />
  
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 rounded-[8px]" />
  
            <div className="flex flex-col gap-3 absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl font-semibold text-white drop-shadow-lg">
                {title}
              </h1>
              <div
                className="text-[14px] leading-[1.1] tracking-tight text-white/80 drop-shadow-md w-[90%]"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  
export default StackScroll