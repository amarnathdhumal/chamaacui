"use client";
import { motion } from "framer-motion";

const SlideUpButton = () => {
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 0.98, opacity: 0.8 }
    };

    const textVariants = {
        initial: { y: 0 },
        hover: { y: "-130%" }
    };

    const cloneVariants = {
        initial: { y: "130%", rotate: 20 },
        hover: { y: 0, rotate: 0 }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-white">
            <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="relative overflow-hidden bg-[#f73b20] text-white px-6 py-3 rounded-[12px] text-[16px] leading-[1.5]"
            >
                {/* container for stacked text */}
                <motion.div className="relative overflow-hidden">

                    {/* ORIGINAL TEXT */}
                    <motion.span
                        variants={textVariants}
                        transition={{
                            duration: 0.25,
                            ease: [0.55, 0.085, 0.68, 0.53]
                        }}
                        className="block"
                    >
                        Learn More
                    </motion.span>

                    {/* CLONE TEXT */}
                    <motion.span
                        variants={cloneVariants}
                        transition={{
                            duration: 0.5,
                            ease: [0.165, 0.84, 0.44, 1],
                            delay: 0.12
                        }}
                        className="block absolute top-0 left-0"
                    >
                        Learn More
                    </motion.span>

                </motion.div>
            </motion.button>
        </div>
    );
};

export default SlideUpButton;
