"use client";

import MailIcon from "@/registry/chamaac/animated-icons/mail-icon";

export default function MailIconDemo() {
  return (
    <MailIcon
      className="text-black dark:text-white"
      size={40}
      duration={4}
      strokeWidth={2}
      repeatDelay={1}
      ease="easeInOut"
    />
  );
}
