import RandomImageReveal from "./reveal-card";

export default function RandomImageRevealDemo() {
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <RandomImageReveal
        images={[
          "/images/1.jpg",
          "/images/2.jpg",
          "/images/3.jpg",
          "/images/4.jpg",
          "/images/5.jpg",
        ]}
        duration={0.2}
      />
    </div>
  );
}
