"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CourselProps {
    images?: string[];
    className?: string;
    cardWidth?: string | number;
    cardHeight?: string | number;
}

const defaultImages = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"];

const Coursel = ({
    images = defaultImages,
    className,
    cardWidth = "250px",
    cardHeight = "284px"
}: CourselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const items = [];
    const totalItems = images.length;

    // handle next func
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    // useeffect to clear the interval
    useEffect(() => {
        // set interval to auto change the images every 1 sec
        const interval = setInterval(() => {
            handleNext();
        }, 3000)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // Get previous, current, and next items
    for (let i = 0; i <= 2; i++) {
        const index = (currentIndex + i + totalItems) % totalItems;
        items.push({
            item: images[index],
            index: index,
            position: i,
            isCenter: i === 1
        })
    }

    return (

        <div className={cn("flex gap-4", className)}>
            <AnimatePresence mode="popLayout">
                {items.map((item) => (
                    <motion.div
                        key={item.item}
                        layout
                        initial={{ scale: 0.8, }}
                        animate={{
                            scale: item.isCenter ? 1 : 0.9,
                            opacity: 1,
                            rotate: item.position === 0 ? -30 : item.position === 2 ? 30 : 0

                        }}
                        exit={{ scale: 0.8 }}
                        transition={{
                            duration: 0.5
                        }}
                        style={{
                            width: cardWidth,
                            height: cardHeight
                        }}
                        className={cn(
                            item.isCenter ? "z-10" : "",
                            "relative flex-shrink-0"
                        )}>
                        <Image
                            src={item.item}
                            alt={`image-${item.index}`}
                            fill
                            priority={true}
                            className="object-cover rounded-[16px]"
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

    );
};

export default Coursel;
