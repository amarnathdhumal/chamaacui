"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";


interface CourselProps {
    images: string[];
    className?: string;
    cardWidth?: string | number;
    cardHeight?: string | number;
    duration?: number;
    rotationAngle?: number;
}

const Coursel = ({
    images,
    className,
    cardWidth = "250px",
    cardHeight = "284px",
    duration = 0.5,
    rotationAngle = 45
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

        <div
            className={cn("flex ", className)}
            style={{
                perspective: "1200px",
                transformStyle: "preserve-3d"
            }}
        >
            <AnimatePresence mode="popLayout">
                {items.map((item) => (
                    <motion.div
                        key={item.item}
                        layout
                        initial={{
                            scale: 0.8,
                            rotateY: item.position === 0 ? rotationAngle : item.position === 2 ? -rotationAngle : 0
                        }}
                        animate={{
                            scale: item.isCenter ? 1 : 0.9,
                            opacity: 1,
                            rotateY: item.position === 0 ? rotationAngle : item.position === 2 ? -rotationAngle : 0

                        }}
                        exit={{
                            scale: 0.8,
                            opacity: 0,
                            rotateY: item.position === 0 ? rotationAngle : item.position === 2 ? -rotationAngle : 0
                        }}
                        transition={{
                            duration: duration
                        }}
                        style={{
                            width: cardWidth,
                            height: cardHeight,

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
