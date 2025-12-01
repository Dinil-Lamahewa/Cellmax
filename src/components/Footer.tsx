import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return <footer id="contact" className="bg-[#0a0e1a] border-t border-[#FFD700]/20 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
            <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
              CELLMAX
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Premium Korean motorcycle batteries engineered for performance,
              reliability, and longevity.
            </p>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div>
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Technology', 'Performance', 'Products'].map(item => <li key={item}>
                <button onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({
                  behavior: 'smooth'
                })} className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                  {item}
                </button>
              </li>)}
            </ul>
          </motion.div>
        </div>

        {/* Contact */}
        <div>
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
            <h4 className="text-xl font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <a href="mailto:info@cellmax.com" className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#FFD700]" />
                  <span>info@cellmax.com</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <a href="tel:+94779163548" className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#FFD700]" />
                  <span>+94 77 916 3548</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Seoul+South+Korea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <MapPin className="w-5 h-5 text-[#FFD700]" />
                  <span>Seoul, South Korea</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="border-t border-[#FFD700]/10 pt-8 text-center">
        <p className="text-gray-400">
          <a
            href="https://www.linkedin.com/company/uthrix"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            © 2025 UthriX Pvt. Ltd
          </a>
          . All rights reserved. | JIS Standard | International Warranty
        </p>

      </motion.div>
    </div>
  </footer>;
}