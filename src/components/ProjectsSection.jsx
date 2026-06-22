import { motion } from "framer-motion";
import React from "react";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export const ProjectsSection = () => {
  const pillars = [
    {
      title: "Your ideas remain yours.",
      icon: <Lock className="w-6 h-6 text-[#FF7E52]" />
    },
    {
      title: "Your data remains secure.",
      icon: <ShieldCheck className="w-6 h-6 text-[#FF7E52]" />
    },
    {
      title: "Your business remains protected.",
      icon: <EyeOff className="w-6 h-6 text-[#FF7E52]" />
    }
  ];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-16 md:py-20 bg-[#EAEAEA] text-[#1A2F1A]"
    >
      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Shield Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 p-3 bg-white/90 rounded-full border border-black/5 shadow-sm"
        >
          <ShieldCheck className="w-10 h-10 text-[#FF7E52]" />
        </motion.div>

        {/* Header Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mb-6"
        >
          <h2
            className="text-3xl md:text-5xl font-serif text-[#1A2F1A] tracking-tight mb-3 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
          >
            Confidentiality Comes First
          </h2>
          <p
            className="text-lg md:text-xl font-serif italic text-black/80 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            At HeisenMan Labs, trust is not just a value—it is a responsibility.
          </p>
        </motion.div>

        {/* Introductory Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mb-8"
        >
          <p
            className="text-sm md:text-base text-black/70 font-medium leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Over the years, we have partnered with 5+ clients across diverse projects, helping transform ideas into reliable digital solutions. While every project represents valuable experience and measurable impact, many have been intentionally anonymized to protect client privacy, business operations, and proprietary information.
          </p>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 border border-black/[0.06] flex flex-col items-center justify-center text-center relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
            >
              <div className="mb-3">{item.icon}</div>
              <h3
                className="text-sm md:text-base font-bold text-[#1A2F1A] leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Discretion & Detail Copy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mb-8"
        >
          <p
            className="text-sm md:text-base text-black/70 font-medium leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            We respect confidentiality agreements and maintain the highest level of professional discretion. For this reason, project showcases focus on the challenges solved, technologies implemented, and outcomes achieved rather than revealing sensitive business details.
          </p>
        </motion.div>

        {/* Ending Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3 bg-white/40 border border-white/60 p-6 md:p-8 rounded-2xl w-full max-w-xl relative overflow-hidden"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest text-[#FF7E52]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Trust & Partnership
          </span>
          
          <h4
            className="text-xl md:text-2xl font-serif text-[#1A2F1A] italic leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Because great partnerships are built on trust."
          </h4>

          <div className="w-8 h-[1px] bg-black/10 my-1" />

          <p
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/85 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What we build can be showcased.<br />
            What we protect remains protected.
          </p>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Plus+Jakarta+Sans:wght@300..800&display=swap');
      `}</style>
    </section>
  );
};