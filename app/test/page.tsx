import AstralFlow from "@/registry/chamaac/astral-flow/astral-flow";

export default function AstralFlowDemo() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      <AstralFlow
        speed={1.5}
        color1="#05070a"
        color2="#2e1a38"
        color3="#a0769a"
        flowMin={3}
        flowMax={7}
      />
    </div>
  );
}
