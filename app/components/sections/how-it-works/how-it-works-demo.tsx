"use client";

import HowItWorks from "@/registry/chamaac/how-it-works/how-it-works";

export default function HowItWorksDemo() {
  const features = [
    {
      title: "Create Account",
      description:
        "Sign up in minutes. Enter your details and verify your email to get started.",
      colors: {
        bg: "bg-orange-50 dark:bg-orange-500/10",
        text: "text-orange-500 dark:text-orange-400",
        border: "border-orange-100 dark:border-orange-500/20",
      },
    },
    {
      title: "Verify Identity",
      description:
        "Complete your profile verification to ensure secure transactions and compliance.",
      colors: {
        bg: "bg-blue-50 dark:bg-blue-500/10",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-100 dark:border-blue-500/20",
      },
    },
    {
      title: "Select Plan",
      description:
        "Choose from a variety of investment plans tailored to your financial goals.",
      colors: {
        bg: "bg-purple-50 dark:bg-purple-500/10",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-100 dark:border-purple-500/20",
      },
    },
    {
      title: "Analyze & Invest",
      description:
        "Review returns and make your first investment with confidence.",
      colors: {
        bg: "bg-orange-50 dark:bg-orange-500/10",
        text: "text-orange-500 dark:text-orange-400",
        border: "border-orange-100 dark:border-orange-500/20",
      },
    },
    {
      title: "Track Growth",
      description:
        "Monitor your portfolio in real-time and watch your wealth grow over time.",
      colors: {
        bg: "bg-blue-50 dark:bg-blue-500/10",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-100 dark:border-blue-500/20",
      },
    },
  ];

  return (
    <div className="w-full">
      <HowItWorks features={features} />
    </div>
  );
}
