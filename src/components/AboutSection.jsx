import { motion } from "framer-motion";
import React from "react";

// Taped Star Component (styled in cream-yellow for the dark theme)
const HandDrawnStar = ({ className, size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 15L58 38L85 38L63 53L71 78L50 63L29 78L37 53L15 38L42 38L50 15Z"
      stroke="#FFF8E7"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FFF8E7"
      fillOpacity="0.1"
    />
  </svg>
);

// Taped Lightbulb Component (glows yellow-cream, black contours)
const HandDrawnLightbulb = ({ className, size = 120 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* Bulb Area */}
    <path
      d="M50 20C40 20 30 30 30 45C30 60 40 70 50 70C60 70 70 60 70 45C70 30 60 20 50 20Z"
      stroke="#000000"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="#FFF8E7"
    />
    {/* Filament */}
    <path
      d="M45 45Q50 35 55 45"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Ray Lines - Glowing Cream */}
    <path
      d="M50 10V3M71 22L78 15M29 22L22 15M85 45H92M15 45H8"
      stroke="#FFF8E7"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Base */}
    <path
      d="M42 70H58M43 75H57M45 80H55"
      stroke="#000000"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="#8A95A5"
    />
  </motion.svg>
);

// Green-filled, black-outlined Hand Drawn Person
const HandDrawnPerson = ({ className, size = 300 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Head */}
    <path
      d="M100 70C110 70 118 78 118 88C118 92 115 98 110 102C105 106 95 106 90 102C85 98 82 92 82 88C82 78 90 70 100 70Z"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      fill="#10B981"
    />
    {/* Smile */}
    <path
      d="M93 90C93 90 100 95 107 90"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Eyes */}
    <circle cx="95" cy="85" r="1.5" fill="#000000" />
    <circle cx="105" cy="85" r="1.5" fill="#000000" />
    {/* Body */}
    <path
      d="M85 105C70 115 65 140 65 160C65 180 80 190 100 190C120 190 135 180 135 160C135 140 130 115 115 105"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      fill="#10B981"
    />
    {/* Arm Pointing Up */}
    <path
      d="M82 110C70 105 60 90 60 70C60 55 65 45 65 40"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#10B981"
    />
    {/* Finger */}
    <path
      d="M65 40L63 30"
      stroke="#10B981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Other Arm */}
    <path
      d="M135 120C150 130 165 140 165 160C165 180 155 190 145 190"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      fill="#10B981"
    />
  </svg>
);

// Flower outline background element
const FlowerOutline = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="stroke-white/10 absolute left-8 top-1/4 select-none pointer-events-none hidden md:block" strokeWidth="2" strokeLinecap="round">
    <circle cx="30" cy="30" r="5" />
    <path d="M30 20 C27 12, 33 12, 30 20 Z" />
    <path d="M30 40 C27 48, 33 48, 30 40 Z" />
    <path d="M20 30 C12 27, 12 33, 20 30 Z" />
    <path d="M40 30 C48 27, 48 33, 40 30 Z" />
  </svg>
);

// Green wave background element
const GreenWave = () => (
  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="stroke-[#10B981] absolute bottom-12 right-12 opacity-80 select-none pointer-events-none hidden md:block" strokeWidth="3.5" strokeLinecap="round">
    <path d="M10 14 Q25 6 40 14 T70 14 T100 14" />
  </svg>
);

// Step Icons with customizable stroke colors
const UnderstandIcon = ({ stroke = "#000000" }) => (
  <svg width="64" height="64" viewBox="0 0 40 40" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="20" r="14" />
    <path d="M20 14C20 14 22 13 23 14C24 15 24 17 22 18.5C20 20 20 21.5 20 22.5" />
    <circle cx="20" cy="27" r="1" fill={stroke} />
  </svg>
);

const DesignIcon = ({ stroke = "#000000" }) => (
  <svg width="64" height="64" viewBox="0 0 40 40" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 28L28 12M28 12L31 15M28 12L25 9M12 28L15 31M12 28L8 32L12 28Z" />
    <path d="M15 31L31 15" />
    <path d="M5 35H35" />
  </svg>
);

const BuildIcon = ({ stroke = "#000000" }) => (
  <svg width="64" height="64" viewBox="0 0 40 40" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 25L25 10M25 10C27 10 29 7 29 7L33 11C33 11 30 13 30 15M10 25L5 30L10 35L15 30L10 25Z" />
    <path d="M7 33L12 28" />
  </svg>
);

const ImproveIcon = ({ stroke = "#000000" }) => (
  <svg width="64" height="64" viewBox="0 0 40 40" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 32C14 26 22 26 30 14" />
    <path d="M22 14H30V22" />
    <path d="M5 35H35" />
  </svg>
);

export const AboutSection = () => {
  const steps = [
    {
      step: "01. Understand",
      description: "Every successful product begins with understanding the problem.",
      bgColor: "#F1C40F", // Amber/Yellow
      iconStroke: "#000000",
      Icon: UnderstandIcon
    },
    {
      step: "02. Design",
      description: "Create experiences that are intuitive, elegant, and user-centered.",
      bgColor: "#0F3D59", // Dark Blue
      iconStroke: "#FFFFFF",
      Icon: DesignIcon
    },
    {
      step: "03. Build",
      description: "Develop scalable solutions using modern technologies and best practices.",
      bgColor: "#AEB6BF", // Grey
      iconStroke: "#000000",
      Icon: BuildIcon
    },
    {
      step: "04. Improve",
      description: "Continuously refine and optimize for performance, usability, and growth.",
      bgColor: "#A2E8DD", // Mint Green
      iconStroke: "#000000",
      Icon: ImproveIcon
    }
  ];

  return (
    <>
      {/* About Company Segment (Dark Theme) */}
      <section
        id="about"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-24 bg-black text-white"
      >
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Decorative Icons */}
        <FlowerOutline />
        <GreenWave />

        {/* Main Info */}
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <h3
              className="text-sm font-bold uppercase tracking-widest text-white/50 mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              About HeisenMan Labs
            </h3>
            <h2
              className="text-4xl md:text-6xl font-serif text-[#FFF8E7] mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Technology should solve problems, not create them.
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              At HeisenMan Labs, we focus on building products that are fast, scalable, intuitive, and built with purpose. Every project is approached with a simple goal:
            </p>
            <p
              className="text-xl md:text-2xl font-serif italic text-[#10B981] border-l-2 border-[#10B981]/30 pl-4 mb-6 leading-relaxed"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Create meaningful experiences that help people and businesses move forward."
            </p>
            <p
              className="text-lg md:text-xl text-white/80 font-medium leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Whether it's launching a startup, streamlining business operations, or building the next digital product, we turn ideas into reliable solutions that deliver real value.
            </p>
          </motion.div>

          {/* Right Side: Illustration */}
          <div className="relative flex justify-center items-center">
            {/* Main Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Person - Green Filled, Black Outlines */}
              <HandDrawnPerson size={350} className="md:w-[450px]" />

              {/* Lightbulb above pointing finger */}
              <motion.div
                className="absolute top-[-10%] left-[10%] md:left-[5%]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <HandDrawnLightbulb size={100} />
              </motion.div>

              {/* Decorative Stars */}
              <HandDrawnStar className="absolute top-[20%] right-[10%] rotate-12 opacity-80" size={30} />
              <HandDrawnStar className="absolute bottom-[20%] left-[0%] -rotate-12 opacity-80" size={40} />
              <HandDrawnStar className="absolute top-[50%] left-[-15%] rotate-45 opacity-60" size={20} />
            </motion.div>
          </div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap');
        `}</style>
      </section>

      {/* Our Approach / How We Work Segment (Light Theme - Resource Page Style) */}
      <section
        id="approach"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-24 bg-white text-[#1A2F1A]"
      >
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="container mx-auto max-w-6xl w-full text-center relative z-10">
          
          {/* Main Title capsule */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-[#82F25E] text-[#1A2F1A] font-bold text-lg md:text-xl px-10 py-4 rounded-full tracking-widest uppercase inline-block shadow-sm">
              HOW WE WORK
            </div>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center group text-center"
              >
                {/* 1. Step Name capsule */}
                <div className="bg-[#FF7E52] text-white font-bold text-sm md:text-base px-6 py-2.5 rounded-full text-center mb-6 shadow-sm w-fit">
                  {item.step}
                </div>

                {/* 2. Content Box with flat color background */}
                <div 
                  className="w-full aspect-[4/3] rounded-[2.2rem] flex items-center justify-center shadow-md border border-[#1A2F1A]/5 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <item.Icon stroke={item.iconStroke} />
                  
                  {/* Subtle dark tint overlay on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300" />
                </div>

                {/* 3. Description below card */}
                <p 
                  className="mt-6 text-sm md:text-base text-[#1A2F1A]/80 font-semibold leading-relaxed max-w-[280px] mx-auto"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};