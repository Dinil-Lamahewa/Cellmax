import React from 'react';
import { motion } from 'framer-motion';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#1a1f2e] to-[#0a0e1a]">
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      </div>

      {/* Hero image with parallax effect */}
      <motion.div initial={{
      scale: 1.2,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 0.3
    }} transition={{
      duration: 1.5
    }} className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url('https://uploadthingy.s3.us-west-1.amazonaws.com/hZzEaDstHPCEGGcPdbnoSF/WhatsApp_Image_2025-11-29_at_22.56.06_247c653e.jpg')`,
      backgroundBlendMode: 'overlay'
    }}></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{
        y: 50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-[#FFD700]">CELLMAX</span>
            <br />
            <span className="text-white">POWER.</span>
          </h1>
        </motion.div>

        <motion.h2 initial={{
        y: 50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="text-3xl md:text-5xl font-bold text-white mb-8">
          UNLEASH YOUR RIDE.
        </motion.h2>

        <motion.div initial={{
        y: 50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.7
      }} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="text-xl text-gray-300">JIS STANDARD.</div>
          <div className="hidden md:block w-1 h-6 bg-[#FFD700]"></div>
          <div className="text-xl text-gray-300">DESIGN IN JAPAN.</div>
        </motion.div>

        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.9
      }}>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-[#FFD700] text-[#0a0e1a] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#FFC107] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FFD700]/50">
            DISCOVER MORE
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#FFD700] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>;
}