import { motion } from "framer-motion";
import React from "react";

// Header Badge Ribbon Icon
const ServicesBadgeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5" />
    <path d="M9 12.7L6.5 21l5.5-3 5.5 3-2.5-8.3" />
  </svg>
);

// Fully Animated Chemistry Beaker/Flask matching the white-fill/black-outline layout
const ChemistryFlask = () => {
  return (
    <motion.div 
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[280px] h-[320px] flex items-center justify-center mx-auto shrink-0 select-none"
    >
      <svg width="220" height="260" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
        
        {/* White Glass Background Fill */}
        <path 
          d="M 102 30 V 90 L 38 215 C 24 238 41 250 66 250 H 154 C 179 250 196 238 182 215 L 118 90 V 30 Z" 
          fill="#FFFFFF" 
        />
        
        {/* Liquid Fill - Bottom Half of the Beaker */}
        <motion.path 
          d="M 54 175 Q 80 165 110 175 Q 140 185 166 175 L 188 220 C 196 235 185 245 165 245 L 55 245 C 35 245 24 235 32 220 Z" 
          fill="#D92C2C"
          animate={{ d: [
            "M 54 175 Q 80 165 110 175 Q 140 185 166 175 L 188 220 C 196 235 185 245 165 245 L 55 245 C 35 245 24 235 32 220 Z",
            "M 54 175 Q 80 185 110 175 Q 140 165 166 175 L 188 220 C 196 235 185 245 165 245 L 55 245 C 35 245 24 235 32 220 Z",
            "M 54 175 Q 80 165 110 175 Q 140 185 166 175 L 188 220 C 196 235 185 245 165 245 L 55 245 C 35 245 24 235 32 220 Z"
          ]}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Flask Glass Outline (Thick Black Border) */}
        <path 
          d="M 102 30 V 90 L 38 215 C 24 238 41 250 66 250 H 154 C 179 250 196 238 182 215 L 118 90 V 30" 
          stroke="#000000" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Lip of the flask (White fill, black outline) */}
        <rect x="92" y="18" width="36" height="12" rx="4" fill="#FFFFFF" stroke="#000000" strokeWidth="8" />

        {/* Label inside the liquid */}
        <text 
          x="110" 
          y="222" 
          textAnchor="middle" 
          fill="#000000" 
          fontSize="12" 
          fontWeight="900" 
          fontFamily="'Inter', sans-serif" 
          letterSpacing="0.5"
          className="select-none pointer-events-none"
        >
          HEISENMAN LABS
        </text>

        {/* Floating Beaker Bubbles */}
        <motion.circle cx="75" cy="150" r="3.5" fill="#D92C2C" animate={{ y: [0, -60], opacity: [1, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
        <motion.circle cx="110" cy="130" r="5" fill="#D92C2C" animate={{ y: [0, -75], opacity: [1, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }} />
        <motion.circle cx="140" cy="155" r="4" fill="#D92C2C" animate={{ y: [0, -65], opacity: [1, 0] }} transition={{ duration: 1.6, repeat: Infinity, delay: 0.1 }} />
      </svg>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      title: "Product Development",
      desc: "Building modern web applications that are scalable, secure, and ready for growth.",
      position: "top-left"
    },
    {
      title: "AI Solutions",
      desc: "Creating intelligent systems and AI-powered experiences that automate tasks.",
      position: "top-right"
    },
    {
      title: "Business Platforms",
      desc: "Developing dashboards, management systems, and internal tools that simplify operations.",
      position: "bottom-left"
    },
    {
      title: "Startup MVP Development",
      desc: "Helping founders launch faster with products designed for validation and growth.",
      position: "bottom-right"
    }
  ];

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-24 bg-black text-white"
    >
      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header Area in "Student of the Week" theme */}
      <div className="container mx-auto max-w-6xl w-full flex items-center justify-start gap-4 mb-20 relative z-10">
        {/* Left Circular Orange Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-full bg-[#FF7E52] flex items-center justify-center shadow-md shrink-0"
        >
          <ServicesBadgeIcon />
        </motion.div>

        {/* Right Lime-Green Pill Capsule */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#82F25E] text-[#1A2F1A] font-bold text-lg md:text-xl px-10 py-4 rounded-full tracking-widest uppercase flex items-center shadow-md"
        >
          OUR SERVICES
        </motion.div>
      </div>

      {/* DESKTOP DIAGRAM VIEW (Absolute positions around the central flask) */}
      <div className="hidden md:block container mx-auto max-w-5xl h-[550px] relative z-10">
        
        {/* Central Chemistry Beaker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <ChemistryFlask />
        </div>

        {/* Service 1: Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-[8%] left-[2%] lg:left-[8%] text-right flex flex-col items-end gap-3 max-w-[280px]"
        >
          <div className="bg-[#FF7E52] text-black font-extrabold text-sm md:text-base px-6 py-2.5 rounded-full shadow-md select-none border border-black/10">
            Product Development
          </div>
          <p className="text-sm text-white/80 font-medium leading-relaxed">
            Building modern web applications that are scalable, secure, and ready for growth.
          </p>
        </motion.div>

        {/* Service 2: Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-[8%] right-[2%] lg:right-[8%] text-left flex flex-col items-start gap-3 max-w-[280px]"
        >
          <div className="bg-[#FF7E52] text-black font-extrabold text-sm md:text-base px-6 py-2.5 rounded-full shadow-md select-none border border-black/10">
            AI Solutions
          </div>
          <p className="text-sm text-white/80 font-medium leading-relaxed">
            Creating intelligent systems and AI-powered experiences that automate tasks.
          </p>
        </motion.div>

        {/* Service 3: Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute bottom-[20%] left-[-2%] lg:left-[4%] text-right flex flex-col items-end gap-3 max-w-[280px]"
        >
          <div className="bg-[#FF7E52] text-black font-extrabold text-sm md:text-base px-6 py-2.5 rounded-full shadow-md select-none border border-black/10">
            Business Platforms
          </div>
          <p className="text-sm text-white/80 font-medium leading-relaxed">
            Developing dashboards, management systems, and internal tools that simplify operations.
          </p>
        </motion.div>

        {/* Service 4: Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute bottom-[20%] right-[-2%] lg:right-[4%] text-left flex flex-col items-start gap-3 max-w-[280px]"
        >
          <div className="bg-[#FF7E52] text-black font-extrabold text-sm md:text-base px-6 py-2.5 rounded-full shadow-md select-none border border-black/10">
            Startup MVP Development
          </div>
          <p className="text-sm text-white/80 font-medium leading-relaxed">
            Helping founders launch faster with products designed for validation and growth.
          </p>
        </motion.div>

      </div>

      {/* MOBILE LIST VIEW */}
      <div className="md:hidden flex flex-col items-center w-full z-10 gap-8">
        
        {/* Animated Beaker at the top */}
        <ChemistryFlask />

        {/* Services List cards */}
        <div className="flex flex-col gap-6 w-full">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-[#0F0F0F] rounded-[2rem] border border-white/5 shadow-md"
            >
              <div className="bg-[#FF7E52] text-black font-extrabold text-sm px-6 py-2.5 rounded-full shadow-sm mb-4 w-fit border border-black/10">
                {item.title}
              </div>
              <p className="text-sm text-white/80 font-medium leading-relaxed max-w-[280px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;800;900&family=Permanent+Marker&display=swap');
      `}</style>
    </section>
  );
};

