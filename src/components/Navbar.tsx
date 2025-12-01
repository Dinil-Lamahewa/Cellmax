import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
  };
  const navItems = ['About', 'Technology', 'Performance', 'Products', 'Contact'];
  return <>
      <motion.nav initial={{
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
              <div className="text-[#FFD700] text-2xl md:text-3xl font-bold">
                CELLMAX
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }} className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 font-medium">
                  {item}
                </button>)}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-300 hover:text-[#FFD700] transition-colors p-2" aria-label="Toggle menu">
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <>
            {/* Backdrop */}
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2
        }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />

            {/* Slide-in Menu */}
            <motion.div initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="fixed top-0 right-0 bottom-0 w-64 bg-[#0a0e1a] border-l border-[#FFD700]/20 z-50 md:hidden shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#FFD700]/20">
                  <div className="text-[#FFD700] text-2xl font-bold">
                    CELLMAX
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#FFD700] transition-colors p-2" aria-label="Close menu">
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col p-6 space-y-1">
                  {navItems.map((item, index) => <motion.button key={item} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} onClick={() => scrollToSection(item.toLowerCase())} className="text-left text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-300 font-medium py-3 px-4 rounded-lg">
                      {item}
                    </motion.button>)}
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}