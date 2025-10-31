"use client"

import TechTrendsSection from "@/components/ui/trends"

const Test = () => {
  return (
    <TechTrendsSection />
  )
}

export default Test;

// const images = [
//   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop",
// ]

// const Coursel = () => {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const container = containerRef.current

//     if (container) {
//       const interval = setInterval(() => {
//         // total scrollable width
//         const containerWidth = container.scrollWidth;

//         // visible width
//         const clientWidth = container.clientWidth;

//         // current scroll position
//         const scrollLeft = container.scrollLeft;

//         const firstImage = container.querySelector("img")
//         const imageWidth = 

//         if (scrollLeft + clientWidth >= containerWidth - 10) {
//           container.scrollTo({
//             left: 0,
//             behavior: "smooth"
//           })
//         } else {
//           container.scrollBy({
//             left: 400,
//             behavior: "smooth"
//           })
//         }
        
//       }, 2000)
//       return () => clearInterval(interval)
//     }
//   }, [])


  

//   return (
//     <div className="max-w-[1440px] mx-auto px-[70px]">
//     <div 
//     ref={containerRef}
//     className="flex flex-row overflow-hidden gap-8 items-center h-screen ">
//       {images.map((item, index) => (
//         <img
//         src={item}
//           className="size-[400px]"
//         />
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Coursel;