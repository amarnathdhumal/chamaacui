"use client";

import React from "react";

/* -------------------------------------------------------------------------- */
/*                                  CARD COMP                                 */
/* -------------------------------------------------------------------------- */
interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme: "orange" | "blue" | "purple";
  className?: string;
  rotate?: string;
  pinColor: string;
}

const NorthStar = ({ className }: { className?: string }) => (
  // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" /><path d="M9 15l-4.5 4.5" /><path d="M14.5 4l5.5 5.5" /></svg>
  //<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" /><path d="M12 16l0 5" /><path d="M8 4l8 0" /></svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  colorTheme,
  className,
  rotate,
}: CardProps) => {
  const bgColors = {
    orange: "bg-orange-50",
    blue: "bg-blue-50",
    purple: "bg-purple-50",
  };
  const textColors = {
    orange: "text-orange-500",
    blue: "text-blue-600",
    purple: "text-purple-600",
  };

  const borderColors = {
    orange: "border-orange-100",
    blue: "border-blue-100",
    purple: "border-purple-100",
  };

  return (
    <div
      className={`relative w-full md:w-[280px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      {/* Card Body */}
      <div className="bg-white p-2 rounded-[25px] shadow-[0px_10px_20px_0px_#D3D3D3] border border-neutral-100">
        <NorthStar
          className={`w-8 h-8 ${textColors[colorTheme]} z-20 mb-6 mx-auto`}
        />
        <div
          className={`${bgColors[colorTheme]} border ${borderColors[colorTheme]} rounded-[15px] p-[15px] h-full flex flex-col  relative overflow-hidden`}
        >
          <span
            className={`${textColors[colorTheme]} text-4xl font-handwriting mb-5`}
            style={{
              fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
            }}
          >
            {number}
          </span>
          <h3 className="text-2xl font-semibold text-neutral-800 leading-none mb-[10px]">
            {title}
          </h3>
          <p className="text-neutral-500 text-sm/5 tracking-tight ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE COMP                                  */
/* -------------------------------------------------------------------------- */
export default function TestPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 relative overflow-hidden ">
      {/* Paper Horizontal Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
          backgroundSize: "100% 32px",
          marginTop: "4px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Content Area */}
        <div className="relative w-full max-w-[1000px] mx-auto md:h-[1130px] flex flex-col  md:block">
          {/* 
            Background Connecting Line (Desktop Only) 
            We use a strictly positioned SVG to match the card flow.
          */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
            viewBox="0 0 1000 1130"
            preserveAspectRatio="none"
          >
            {/* 
                Path coordinates approximation:
                1. Start: Top Left (Card 1 area) -> 250, 150
                2. Curve to Top Right (Card 2 area) -> 750, 300
                3. Curve to Mid Left (Card 3 area) -> 250, 600
                4. Curve to Mid Right (Card 4 area) -> 750, 850
                5. Curve to Bot Left (Card 5 area) -> 250, 1120
                6. End near Partner -> 550, 1200
             */}

            {/* Main dashed line */}
            <path
              d="M 290 150 
                 C 500 150, 550 270, 710 270
                 C 850 270, 500 350, 290 450
                 C 150 550, 500 720, 710 720
                 C 850 720, 500 850, 330 890"
              stroke="#d4d4d4"
              strokeWidth="1"
              strokeDasharray="8 6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Card 01: Testimonials (Top Left) */}
          <Card
            number="01"
            title="Testimonials"
            description="The only way to attract new clients, is to show your experience with the previous ones. Include: real photo, position at company, links their profiles"
            colorTheme="orange"
            pinColor="#fb923c" // orange-400
            rotate="rotate-8"
            className="md:absolute md:top-0 md:left-[15%]"
          />

          {/* Card 02: Trust Badges (Top Right) */}
          <Card
            number="02"
            title="Trust Badges"
            description="Show all the achievements you have. Awards, certificates, payment protections, etc."
            colorTheme="blue"
            pinColor="#3b82f6" // blue-500
            rotate="-rotate-8"
            className="md:absolute md:top-[120px] md:right-[15%]"
          />

          {/* Card 03: Add Contacts (Mid Left) */}
          <Card
            number="03"
            title="Add Contacts"
            description="People need to understand that if something will happen, they can always reach out to you. Leave links to your social media, your email and the phone"
            colorTheme="purple"
            pinColor="#a855f7" // purple-500
            rotate="rotate-8"
            className="md:absolute md:top-[450px] md:left-[15%]"
          />

          {/* Card 04: Case Studies (Mid Right) */}
          <Card
            number="04"
            title="Case Studies"
            description="Share detailed examples of how your product or service solved real problems. This helps visitors imagine their own success."
            colorTheme="orange"
            pinColor="#f97316" // orange-500
            rotate="-rotate-8"
            className="md:absolute md:top-[570px] md:right-[10%]"
          />

          {/* Card 05: Clear Refund Policy (Bottom Left) */}
          <Card
            number="05"
            title="Clear Refund Policy"
            description="Offer a transparent money-back guarantee or easy return process"
            colorTheme="blue"
            pinColor="#3b82f6" // blue-500
            rotate="rotate-8"
            className="md:absolute md:top-[890px] md:left-[15%]"
          />
        </div>
      </div>
    </div>
  );
}
