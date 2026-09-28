"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, PhoneCall, ArrowRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#1B4332]" />
    );
  }

  // Animation variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/videos/ayurvedha.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Elegant Gradient Overlay - Minimal for Maximum Video Clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#1B4332]/90 z-0 mix-blend-multiply" />
      
      {/* Radial Gradient behind text for guaranteed legibility */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[600px] h-[300px] bg-black/40 blur-[80px] rounded-full" />
      </div>

      {/* Main Content Container (Vertically Centered) */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Big Majestic Headline with Kinetic Impact & Shimmer */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-extrabold text-white mb-2 leading-[1.1] tracking-tight drop-shadow-2xl break-words px-2"
          >
            Kumar Hospital <br /> 
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent animate-shimmer drop-shadow-lg">
              Nature Cure & Dental
            </span>
          </motion.h1>

          {/* Tamil Subtitle with Warm Gold Tint */}
          <motion.p
            variants={itemVariants}
            className="text-amber-100 font-medium text-xs sm:text-base md:text-lg tracking-wider drop-shadow-md mt-4 uppercase px-2"
          >
            குமார் இயற்கை மற்றும் பல் மருத்துவமனை
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Action Area */}
      <div className="relative z-10 w-full pb-8 sm:pb-12 px-4 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 w-full max-w-sm sm:max-w-none mx-auto"
        >
          {/* Primary Action Button (Glowing) */}
          <a
            href="tel:+918148129709"
            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-green-950 font-extrabold rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] flex items-center justify-center gap-2.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
            <PhoneCall size={18} className="shrink-0" />
            <span>81481 29709</span>
          </a>

          {/* Secondary Action Button (Glassmorphism) */}
          <Link
            href="/treatments"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all transform hover:-translate-y-1 backdrop-blur-lg flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl text-center"
          >
            <span>Explore Treatments</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 shrink-0" />
          </Link>
        </motion.div>

        {/* Smooth Scroll Down Indicator */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="flex justify-center"
        >
          <a
            href="#about"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all animate-bounce shadow-md backdrop-blur-sm"
            aria-label="Scroll down to About section"
          >
            <ChevronDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
