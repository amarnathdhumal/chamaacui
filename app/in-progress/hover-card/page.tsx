import type { Metadata } from "next";
import HoverCardComponent from "@/components/ui/hover-card";

export const metadata: Metadata = {
  title: "Hover Card | Chamaac UI",
  description: "An interactive card component with smooth hover animations.",
};

const HoverCard = () => {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <HoverCardComponent />
    </div>
  );
};

export default HoverCard;
