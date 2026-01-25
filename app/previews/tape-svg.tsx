const tapeColors = {
  orange: "rgba(251, 146, 60, 0.5)", // orange-400
  blue: "rgba(59, 130, 246, 0.5)", // blue-500
  purple: "rgba(168, 85, 247, 0.5)", // purple-500
};

interface TapeProps {
  colorTheme: "orange" | "blue" | "purple";
}

const Tape = ({ colorTheme }: TapeProps) => {
  return (
    <div
      className="absolute -top-4 left-1/2 w-32 h-8 z-20"
      style={{
        background: tapeColors[colorTheme],
        transform: "translateX(-50%) rotate(-1deg)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        backdropFilter: "blur(2px)",
        opacity: 0.9,
        maskImage:
          "url(\"data:image/svg+xml,%3Csvg width='200' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L200 0 L192 4 L200 8 L192 12 L200 16 L192 20 L200 24 L192 28 L200 32 L192 36 L200 40 L0 40 L8 36 L0 32 L8 28 L0 24 L8 20 L0 16 L8 12 L0 8 L8 4 Z' fill='black'/%3E%3C/svg%3E\")",
        maskSize: "100% 100%",
      }}
    ></div>
  );
};

export default Tape;
