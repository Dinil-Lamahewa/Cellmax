import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Shield, Award } from 'lucide-react';
export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const features = [{
    icon: Globe,
    title: 'Korean Origin',
    description: 'Engineered and manufactured in Korea with cutting-edge battery technology'
  }, {
    icon: Shield,
    title: 'International Warranty',
    description: 'Backed by comprehensive international warranty coverage'
  }, {
    icon: Award,
    title: 'JIS Standard',
    description: 'Meets rigorous Japanese Industrial Standards for quality and performance'
  }];
  return <section id="about" className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            ABOUT <span className="text-[#FFD700]">CELLMAX</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium motorcycle batteries engineered for performance,
            reliability, and longevity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 50
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="bg-[#1a1f2e] border border-[#FFD700]/20 rounded-2xl p-8 hover:border-[#FFD700] transition-all duration-300 group">
              <motion.div whileHover={{
            scale: 1.1,
            rotate: 5
          }} transition={{
            duration: 0.3
          }} className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#FFD700]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}