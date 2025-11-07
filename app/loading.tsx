import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default Loader;
