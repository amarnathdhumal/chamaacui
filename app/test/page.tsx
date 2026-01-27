import HowItWorksDemo from "../components/sections/how-it-works/how-it-works-demo";
import GlowingBorderButton from "@/registry/chamaac/glowing-border-button/glowing-border-button";

export default function TestPage() {
  return (
    <div>
      <HowItWorksDemo />
      <GlowingBorderButton className="">Explore Components</GlowingBorderButton>
    </div>
  );
}
