import { IconPlus } from "@tabler/icons-react";

const Plus = () => {
  return (
    <div className="text-">
      <IconPlus className="absolute -top-3 -right-3   " />
      <IconPlus className="absolute -top-3 -left-3  " />
      <IconPlus className="absolute -bottom-3 -right-3  " />
      <IconPlus className="absolute -bottom-3 -left-3  " />
    </div>
  );
};

export default Plus;
