import HoverArrowButton from "@/registry/chamaac/hover-arrow-button/hover-arrow-button";

export default function HoverArrowButtonDemo() {
  return (
    <div className="flex justify-center items-center">
      <HoverArrowButton
        text="Get Started"
        duration={0.3}
        iconSize={20}
        className="bg-black text-white dark:bg-white dark:text-black"
        onClick={() => console.log("Clicked!")}
      />
    </div>
  );
}
