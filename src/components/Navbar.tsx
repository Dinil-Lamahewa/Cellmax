import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-lg shadow-lg shadow-[#FFD700]/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="flex items-center space-x-2">
            <div className="text-[#FFD700] text-3xl font-bold">CELLMAX</div>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="hidden md:flex items-center space-x-8">
            {['About', 'Technology', 'Performance', 'Products', 'Contact'].map((item, index) => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 font-medium">
                  {item}
                </button>)}
          </motion.div>
        </div>
      </div>
    </motion.nav>;
}