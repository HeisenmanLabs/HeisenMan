import { motion, useSpring, useTransform } from "framer-motion";
import React from "react";
import { cn } from "../lib/utils";

// Hand-Drawn Doodle Asset Imports
import productDoodle from "../assets/doodle_product.png";
import qualityDoodle from "../assets/doodle_quality.png";
import userDoodle from "../assets/doodle_user.png";
import commDoodle from "../assets/doodle_comm.png";
import visionDoodle from "../assets/doodle_vision.png";

function FeatureCard({ feature, className, zIndexOffset = 0, ...props }) {
  const { title, description, category, imageUrl, bgColor } = feature;
  const springValue = useSpring(0, {
    bounce: 0,
  });
  
  // Hover transitions: elevate z-index and scale size
  const zIndex = useTransform(springValue, (value) => +Math.floor(value * 10) + 10 + zIndexOffset);
  const scale = useTransform(springValue, [0, 1], [1, 1.1]);

  const content = (
    <div className={cn("w-full h-full flex flex-col justify-between items-center p-6 border-[3px] border-black rounded-[2rem] shadow-none", bgColor)}>
      
      {/* Doodle Illustration with mix-blend-multiply to transparentize white background */}
      <div className="flex-1 flex items-center justify-center w-full min-h-[120px] my-2 select-none pointer-events-none">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-[110px] h-[110px] object-contain mix-blend-multiply" 
        />
      </div>

      {/* Description Content Block at the bottom */}
      <div className="w-full flex flex-col items-center justify-center text-center mt-auto">
        <h3 className="text-sm font-black leading-tight text-black mb-1 select-none uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-[10px] leading-relaxed text-black/80 font-semibold select-none max-w-[160px]">
          {description}
        </p>
      </div>
      
    </div>
  );

  const containerClassName = cn(
    "relative flex h-80 w-56 flex-col overflow-hidden rounded-[2rem] shadow-none transition-shadow duration-300 ease-in-out hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group cursor-pointer sm:-mx-4 lg:-mx-5",
    className,
  );

  return (
    <>
      {/* Desktop view with custom spring scale & z-index positioning */}
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        className={cn(containerClassName, "hidden sm:flex")}
        {...props}
      >
        {content}
      </motion.div>
      
      {/* Mobile view that stacks vertically */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(containerClassName, "flex sm:hidden")}
      >
        {content}
      </motion.div>
    </>
  );
}

export const WhyChooseUsSection = () => {
  const advantages = [
    {
      title: "Product-First Thinking",
      description: "We focus on solving problems, not just writing code.",
      category: "Mindset",
      imageUrl: productDoodle,
      bgColor: "bg-[#D6759E]", // Solid Pink
    },
    {
      title: "Quality Engineering",
      description: "Clean architecture, maintainable code, and scalable solutions.",
      category: "Standards",
      imageUrl: qualityDoodle,
      bgColor: "bg-[#24C084]", // Solid Green
    },
    {
      title: "User-Centered Design",
      description: "Products built with real users and business goals in mind.",
      category: "Experience",
      imageUrl: userDoodle,
      bgColor: "bg-[#FEE5A5]", // Solid Cream
    },
    {
      title: "Clear Communication",
      description: "Clear updates, realistic timelines, and collaborative execution.",
      category: "Process",
      imageUrl: commDoodle,
      bgColor: "bg-[#78C2F3]", // Solid Blue
    },
    {
      title: "Long-Term Vision",
      description: "Building solutions designed to grow alongside your business.",
      category: "Partnership",
      imageUrl: visionDoodle,
      bgColor: "bg-[#C5A3E8]", // Solid Lavender
    }
  ];

  const angle = 6;

  return (
    <section
      id="why-choose-us"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-24 bg-black text-white"
    >
      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center">
        
        {/* Header Capsule Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <div className="bg-[#FF7E52] text-black font-extrabold text-[11px] uppercase tracking-widest px-5 py-2 rounded-full inline-block select-none shadow-sm border border-black/10">
            Our Advantages
          </div>
        </motion.div>

        {/* Section Header using clean sans-serif bold fonts */}
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 text-center max-w-xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Why Choose <span className="text-[#FF7E52]">HeisenMan Labs</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-medium leading-relaxed">
            We partner with businesses to construct high-quality products that are fast, intuitive, and designed to scale.
          </p>
        </motion.header>

        {/* Fanning Card Deck Container (No wrap on desktop) */}
        <div className="relative flex w-full flex-col sm:flex-row sm:flex-nowrap justify-center items-center py-8 min-h-[380px] max-w-6xl mx-auto px-4">
          
          {/* Card 1: Far Left */}
          <FeatureCard
            feature={advantages[0]}
            zIndexOffset={0}
            initial={{
              y: 40,
              opacity: 0,
              rotate: 0,
              scale: 0.85,
            }}
            whileInView={{
              y: 16,
              opacity: 1,
              scale: 0.9,
              rotate: -angle * 2,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          />

          {/* Card 2: Mid Left */}
          <FeatureCard
            feature={advantages[1]}
            zIndexOffset={1}
            initial={{
              y: 30,
              opacity: 0,
              rotate: 0,
              scale: 0.9,
            }}
            whileInView={{
              y: 8,
              opacity: 1,
              scale: 0.95,
              rotate: -angle,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: 0.3,
              },
            }}
            viewport={{ once: true }}
          />

          {/* Card 3: Center (Elevated) */}
          <FeatureCard
            feature={advantages[2]}
            zIndexOffset={2}
            initial={{
              y: 20,
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1.0,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: 0.1,
              },
            }}
            viewport={{ once: true }}
          />

          {/* Card 4: Mid Right */}
          <FeatureCard
            feature={advantages[3]}
            zIndexOffset={1}
            initial={{
              y: 30,
              opacity: 0,
              rotate: 0,
              scale: 0.9,
            }}
            whileInView={{
              y: 8,
              opacity: 1,
              scale: 0.95,
              rotate: angle,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: 0.3,
              },
            }}
            viewport={{ once: true }}
          />

          {/* Card 5: Far Right */}
          <FeatureCard
            feature={advantages[4]}
            zIndexOffset={0}
            initial={{
              y: 40,
              opacity: 0,
              rotate: 0,
              scale: 0.85,
            }}
            whileInView={{
              y: 16,
              opacity: 1,
              scale: 0.9,
              rotate: angle * 2,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          />

        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};


