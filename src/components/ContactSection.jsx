import { motion } from "framer-motion";
import { User } from "lucide-react";
import React from "react";

const HandDrawnHighFive = ({ size = 300 }) => (
  <svg width={size} height={size} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person 1 (Black shirt vibe) */}
    <g transform="translate(40, 60)">
      <circle cx="50" cy="40" r="12" stroke="#1A2F1A" strokeWidth="3" />
      <path d="M50 52C50 52 40 70 35 110M50 52C50 52 60 70 65 110" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 52V100" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 65L85 40" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" /> {/* High five arm */}
      <rect x="35" y="52" width="30" height="50" rx="5" fill="#1A2F1A" /> {/* Shirt */}
      <path d="M40 110V150M60 110V150" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" />
    </g>

    {/* Person 2 (Blue shirt vibe) */}
    <g transform="translate(160, 70)">
      <circle cx="50" cy="40" r="12" stroke="#1A2F1A" strokeWidth="3" />
      <path d="M50 52V100" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 65L15 30" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" /> {/* High five arm */}
      <rect x="35" y="52" width="40" height="55" rx="5" fill="#7FB3D5" stroke="#1A2F1A" strokeWidth="2" /> {/* Blue Shirt */}
      <path d="M45 107M65 107" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" />
      <path d="M45 107L35 150M65 107L75 150" stroke="#1A2F1A" strokeWidth="3" strokeLinecap="round" />
    </g>

    {/* Impact Star */}
    <motion.path
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      d="M150 70L158 85L175 88L162 100L165 117L150 108L135 117L138 100L125 88L142 85L150 70Z"
      fill="#7FB3D5"
      stroke="#1A2F1A"
      strokeWidth="2"
    />
  </svg>
);

// Heart Icon
const HeartIcon = () => (
  <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-6 right-10 opacity-90 hidden md:block select-none pointer-events-none">
    <path d="M50 80 C20 60 10 40 10 25 C10 12 20 5 32 5 C40 5 46 10 50 15 C54 10 60 5 68 5 C80 5 90 12 90 25 C90 40 80 60 50 80 Z" fill="#F1948A" />
  </svg>
);

export const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 py-24"
      >
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="container mx-auto max-w-6xl w-full flex flex-col gap-20">
        
        {/* Philosophy & Testimonials Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full bg-[#F4F3EF] border border-[#1A2F1A]/10 p-8 md:p-14 rounded-[2.5rem] shadow-lg relative overflow-hidden text-center"
        >
          {/* Subtle noise */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Heart Icon at top right */}
          <HeartIcon />

          {/* Title - Marker style */}
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#1A2F1A] mb-2 font-marker tracking-tighter text-left select-none relative z-10"
            style={{ fontFamily: "'Permanent Marker', cursive", transform: "rotate(-1deg)" }}
          >
            PHILOSOPHY & CLIENTS SAY
          </h2>
          
          {/* Subtitle */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#1A2F1A]/50 text-left mb-10 relative z-10">
            HEISENMAN LABS TEAM
          </p>

          {/* Main Philosophy Quote */}
          <p 
            className="text-lg md:text-xl font-bold text-[#1A2F1A]/95 max-w-4xl mx-auto leading-relaxed mb-12 tracking-wide text-center uppercase relative z-10" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            GREAT PRODUCTS ARE NOT REMEMBERED BECAUSE THEY ARE COMPLICATED, THEY ARE REMEMBERED BECAUSE THEY MAKE COMPLEX THINGS FEEL SIMPLE. EVERY LINE OF CODE, EVERY INTERACTION, AND EVERY DECISION IS GUIDED BY A COMMITMENT TO CREATING EXPERIENCES THAT PEOPLE GENUINELY ENJOY USING.
          </p>

          {/* Testimonials columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 border-t border-[#1A2F1A]/10 pt-10 text-left relative z-10">
            {/* Testimonial 1 */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-[#1A2F1A]/5 border border-[#1A2F1A]/10 flex items-center justify-center shrink-0 text-[#1A2F1A]/60">
                <User size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A2F1A]/85 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  "HEISENMAN LABS TRANSFORMED OUR STARTUP IDEA INTO A WORKING MVP IN RECORD TIME. THE QUALITY AND SPEED OF EXECUTION WERE OUTSTANDING."
                </p>
                <span className="block mt-2 text-[10px] font-bold tracking-widest text-[#1A2F1A]/50 uppercase">
                  – ANONYMOUS SAAS FOUNDER
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-[#1A2F1A]/5 border border-[#1A2F1A]/10 flex items-center justify-center shrink-0 text-[#1A2F1A]/60">
                <User size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#1A2F1A]/85 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  "THE DATA PLATFORM BUILT BY HEISENMAN LABS HAS SIMPLIFIED OUR DAILY OPERATIONS. CLEAN ARCHITECTURE AND TRANSPARENT COMMUNICATION."
                </p>
                <span className="block mt-2 text-[10px] font-bold tracking-widest text-[#1A2F1A]/50 uppercase">
                  – ANONYMOUS ENTERPRISE COO
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <h2
              className="text-4xl md:text-6xl font-serif text-[#1A2F1A] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's Build Something Meaningful
            </h2>

            <p
              className="text-lg md:text-xl text-[#1A2F1A]/80 font-medium leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Whether you're launching a new product, improving an existing platform, or exploring the possibilities of AI, HeisenMan Labs is ready to help bring your vision to life.
            </p>

            <p
              className="text-xl font-serif italic text-[#1A2F1A] mb-8 leading-relaxed"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Turning ambitious ideas into exceptional digital products."
            </p>

            <div className="mb-12">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#1A2F1A]/55 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Get in Touch
              </span>
              <a
                href="mailto:helloheisenman@gmail.com"
                className="text-lg sm:text-2xl md:text-3xl font-serif text-[#1A2F1A] hover:text-[#FF7E52] transition-colors duration-300 border-b border-[#1A2F1A]/20 hover:border-[#FF7E52] pb-1 inline-block break-all sm:break-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                helloheisenman@gmail.com
              </a>
            </div>

          </motion.div>

          {/* Right Side: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <HandDrawnHighFive size={450} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
    </section>

      {/* Footer Area with Black Background */}
      <footer className="relative w-full bg-black text-white/80 py-12 px-6 md:px-12 border-t border-white/10 z-10">
        {/* Grain Overlay inside footer */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 font-medium text-center md:text-left relative z-10">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-white/60">© 2026 HeisenMan Labs. Built with passion & joy.</p>
            <a 
              href="mailto:helloheisenman@gmail.com" 
              className="text-xs text-white/40 hover:text-white transition-colors duration-300"
            >
              helloheisenman@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-lg font-serif italic text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              "When you grow, we grow."
            </span>
            <span className="text-xs uppercase tracking-widest text-white/40">
              HeisenMan Labs — Built around your growth.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

