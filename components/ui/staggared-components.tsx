// import { useScroll, useTransform, motion } from "motion/react";
// import { useRef } from "react";

// // Generate 35 items for full grid (7 columns x 5 rows)
// const fullGridData = Array.from({ length: 35 }, (_, i) => `${(i % 2) + 1}.jpg`)

// // Marquee text data
// const marqueeText: string[] = [
//   "Sora Takahashi", "空 高橋",
//   "Aoi Nakamura", "葵 中村",
//   "Ren Fujimoto", "蓮 藤本",
//   "Mio Sakurai", "澪 桜井",
//   "Shin Yamamoto", "真 山本",
//   "Kaori Kobayashi", "香織 小林",
//   "Hikari Inoue", "光 井上",
//   "Yuki Kinoshita", "雪 木下",
//   "Rina Ishikawa", "莉奈 石川",
//   "Kaito Matsumoto", "海斗 松本"
// ]
// // Full grid item with column stagger
// const FullGridItem = ({ src, columnIndex, numColumns, gridRef }: { src: string; columnIndex: number; numColumns: number; gridRef: React.RefObject<HTMLDivElement | null> }) => {
//   const middleColumnIndex = Math.floor(numColumns / 2)
//   const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2

//   const { scrollYProgress } = useScroll({
//     target: gridRef,
//     offset: ["start end", "center center"]
//   })

//   const y = useTransform(
//     scrollYProgress,
//     [0 + delayFactor, Math.min(1, 1 + delayFactor)],
//     ["450%", "0%"]
//   )

//   const opacity = useTransform(
//     scrollYProgress,
//     [0 + delayFactor, Math.min(1, 1 + delayFactor)],
//     [0, 1]
//   )

//   return (
//     <motion.figure
//       style={{ y, opacity }}
//       className="relative m-0 [perspective:800px] will-change-[transform,opacity]"
//     >
//       <div
//         style={{
//           backgroundImage: `url(/images/${src})`,
//         }}
//         className="w-full h-full bg-cover bg-[center_20%] rounded-[4px] [transform-origin:50%_0%] [transform-style:preserve-3d]"
//       />
//     </motion.figure>
//   )
// }

// // Text element character component
// const TextChar = ({ char, index, scrollYProgress, totalChars }: { char: string; index: number; scrollYProgress: any; totalChars: number }) => {
//   const centerIndex = Math.floor(totalChars / 2)
//   const distance = Math.abs(index - centerIndex)
//   const delay = distance * 0.04

//   const y = useTransform(
//     scrollYProgress,
//     [0 + delay, Math.min(1, 1 + delay)],
//     ["300%", "0%"]
//   )

//   const opacity = useTransform(
//     scrollYProgress,
//     [0 + delay, Math.min(1, 1 + delay)],
//     [0, 1]
//   )

//   return (
//     <motion.span
//       style={{ y, opacity }}
//       className="inline-block"
//     >
//       {char}
//     </motion.span>
//   )
// }

// // Text element with character stagger
// const TextElement = () => {
//   const ref = useRef<HTMLDivElement>(null)
//   const text = "Halcyon"

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center center"]
//   })

//   return (
//     <div ref={ref} className="uppercase flex items-center text-[clamp(3rem,14vw,10rem)] leading-[0.7] font-['lores-12',sans-serif] font-normal">
//       {text.split("").map((char, i) => (
//         <TextChar key={i} char={char} index={i} scrollYProgress={scrollYProgress} totalChars={text.length} />
//       ))}
//     </div>
//   )
// }

// // Credits character component
// const CreditsChar = ({ char, index, scrollYProgress, totalChars }: { char: string; index: number; scrollYProgress: any; totalChars: number }) => {
//   const startX = index * 80 - (totalChars * 80) / 2
//   const x = useTransform(scrollYProgress, [0, 1], [startX, 0])

//   return (
//     <motion.span style={{ x, display: "inline-block" }}>
//       {char === " " ? "\u00A0" : char}
//     </motion.span>
//   )
// }

// // Credits component
// const Credits = ({ text }: { text: string }) => {
//   const ref = useRef<HTMLParagraphElement>(null)

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   })

//   return (
//     <p
//       ref={ref}
//       className="text-[clamp(1rem,5vw,3rem)] uppercase text-center mt-[50vh] pb-[10vh] font-['lores-12',sans-serif] font-normal"
//     >
//       {text.split("").map((char, i) => (
//         <CreditsChar key={i} char={char} index={i} scrollYProgress={scrollYProgress} totalChars={text.length} />
//       ))}
//     </p>
//   )
// }

// // Marquee component
// const Marquee = ({ gridRef }: { gridRef: React.RefObject<HTMLDivElement | null> }) => {
//     const { scrollYProgress } = useScroll({
//       target: gridRef,
//       offset: ["start end", "end start"]
//     })

//     const x = useTransform(scrollYProgress, [0, 1], ["100vw", "-100%"])

//     return (
//       <div className="fixed w-screen top-1/2 -translate-y-1/2 left-0 z-[50] overflow-hidden pointer-events-none">
//         <motion.div
//           style={{ x }}
//           className="flex gap-12 w-max relative will-change-transform"
//         >
//           {marqueeText.map((text, i) => (
//             <span
//               key={i}
//               className="whitespace-nowrap uppercase text-5xl leading-none font-['lores-12',sans-serif] font-normal"
//             >
//               {text}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     )
//   }

//    {/* Intro Section */}
//       {/* <div className="h-[calc(100vh-4rem)] text-center grid justify-items-center content-start mb-[30vh] auto-rows-fr gap-6 bg-gradient-to-b from-black via-black/40 to-black bg-cover bg-[center_-10%]">
//         <div className="p-6" />
//         <h1 className="m-0 leading-[0.9] self-end font-normal uppercase text-[clamp(2rem,6vw,4rem)] font-['lores-12',sans-serif]">
//           Staggered (3D) <br />Grid Animations
//         </h1>
//         <nav className="flex flex-wrap gap-4 uppercase text-[13px] self-start">
//           <a href="#" className="text-white hover:text-[#ef5d36]">#scroll</a>
//           <a href="#" className="text-white hover:text-[#ef5d36]">#3d</a>
//           <a href="#" className="text-white hover:text-[#ef5d36]">#grid</a>
//         </nav>
//         <span className="max-w-[12ch] mb-16 pb-4 leading-[1.2] opacity-40 relative self-end uppercase text-[13px] after:content-[''] after:w-px after:h-16 after:bg-gradient-to-b after:from-white after:to-black after:absolute after:top-full after:left-1/2">
//           Scroll gently & enjoy
//         </span>
//       </div> */}

//             {/* Text Section */}
//       {/* <section className="grid place-items-center w-full relative">
//         <TextElement />
//       </section> */}

//       {/* Full Grid Section */}
//       {/* <section className="grid place-items-center w-full relative">
//         <div ref={fullGridRef} className="w-full my-[10vh] h-auto aspect-[1.5] grid grid-cols-7 grid-rows-5 gap-4 p-4">
//           {fullGridData.map((src, index) => (
//             <FullGridItem
//               key={index}
//               src={src}
//               columnIndex={index % 7}
//               numColumns={7}
//               gridRef={fullGridRef}
//             />
//           ))}
//         </div>
//       </section> */}

//       {/* Credits */}
//       {/* <Credits text="Made by @codrops" />
//       <Credits text="More demos" /> */}

//       {/* Side Shadows */}
//       {/* <div className="absolute top-0 left-0 w-full h-full z-[5000] pointer-events-none bg-gradient-to-r from-black via-transparent to-black" /> */}

// const fullGridRef = useRef<HTMLDivElement>(null)
