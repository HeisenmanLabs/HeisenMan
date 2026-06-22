import { motion } from "framer-motion";
import React from "react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-20 bg-[#E5E5E5] select-none"
    >
      {/* Soft Window Pane Shadow Overlay */}
      <div 
        className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] pointer-events-none z-20 mix-blend-multiply opacity-[0.85] filter blur-[40px] md:blur-[60px]"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.11) 0%, rgba(0,0,0,0.11) 12%, transparent 22%, transparent 35%, rgba(0,0,0,0.11) 45%, rgba(0,0,0,0.11) 58%, transparent 68%, transparent 78%, rgba(0,0,0,0.11) 88%, rgba(0,0,0,0.11) 98%, transparent 100%)',
          animation: 'shadowSway 24s ease-in-out infinite alternate',
        }}
      />

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center max-w-4xl px-4 mt-8 md:mt-0">
        
        {/* Title - Editorial Serif Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 flex flex-col items-center"
        >
          <h1
            className="text-[12vw] sm:text-[10vw] md:text-[9.5rem] font-bold text-[#1A2F1A] leading-[0.85] select-none tracking-tight flex items-center justify-center whitespace-nowrap"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="font-light uppercase tracking-tight select-none">HEISEN</span>
            <span className="font-light italic select-none -ml-[0.04em] text-[#1A2F1A] lowercase">man</span>
          </h1>
          <div 
            className="mt-6 text-xs md:text-sm tracking-[0.4em] uppercase text-[#1A2F1A]/50 font-sans select-none font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            L a b s
          </div>
        </motion.div>

        {/* Thin Horizontal Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-[1.5px] bg-[#1A2F1A]/20 my-8"
        />

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-serif italic text-[#1A2F1A]/90 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Building thoughtful software, intelligent experiences, and products people love to use.
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p
            className="text-sm md:text-base text-[#1A2F1A]/70 font-medium max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We help founders, startups, and growing businesses transform ideas into powerful digital products through modern web development, AI-driven solutions, and user-focused design.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="relative px-8 py-3.5 border-2 border-[#1A2F1A] text-[#1A2F1A] text-xs font-bold tracking-[0.2em] uppercase overflow-hidden group transition-all duration-300 rounded-none inline-flex items-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="absolute inset-0 w-full h-full bg-[#1A2F1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
              Let's Build Something Meaningful
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#1A2F1A]/50 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#1A2F1A]/40 to-transparent" />
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes shadowSway {
          0% { transform: translate(-2%, -2%) rotate(0deg) scale(1); }
          100% { transform: translate(2%, 2%) rotate(2deg) scale(1.05); }
        }

        ::selection {
          background: #1A2F1A;
          color: #E5E5E5;
        }
      `}</style>
    </section>
  );
};