import DitherFluid from "./dither-fluid";

export default function DitherFluidDemo({ className }: { className?: string }) {
  return (
    <div
      className={
        className || "w-full h-full min-h-[600px] rounded-lg overflow-hidden"
      }
    >
      <DitherFluid />
    </div>
  );
}
