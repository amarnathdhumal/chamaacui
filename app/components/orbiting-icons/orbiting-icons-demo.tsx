"use client";

import OrbitingIcons from "./orbiting-icons";

const icons = [
  "/icons/gmail.svg",
  "/icons/linear.svg",
  "/icons/slack.svg",
  "/icons/whatsapp.svg",
  "/icons/x.svg",
];

const OrbitingIconsDemo = () => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-white dark:bg-black">
      <OrbitingIcons icons={icons} />
    </div>
  );
};

export default OrbitingIconsDemo;
