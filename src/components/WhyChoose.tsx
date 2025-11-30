import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Clock, Globe, Zap } from 'lucide-react';
export function WhyChoose() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const benefits = [{
    icon: Award,
    title: 'Korean Engineering',
    description: 'Precision manufacturing with world-class quality standards and rigorous testing protocols'
  }, {
    icon: Clock,
    title: 'Long Life Cycle',
    description: 'Extended operational lifespan reduces replacement frequency and total cost of ownership'
  }, {
    icon: Globe,
    title: 'International Warranty',
    description: 'Comprehensive warranty coverage backed by global service network and support'
  }, {
    icon: Zap,
    title: 'Motorcycle Optimized',
    description: 'Specifically designed for motorcycles and scooters with perfect fit and performance'
  }];
  return <section className="py-24 bg-gradient-to-b from-[#0a0e1a] via-[#1a1f2e] to-[#0a0e1a] relative overflow-hidden">
      {/* Animated background */}
      <motion.div animate={{
      backgroundPosition: ['0% 0%', '100% 100%']
    }} transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse'
    }} className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(45deg, #FFD700 25%, transparent 25%, transparent 75%, #FFD700 75%, #FFD700), 
                           linear-gradient(45deg, #FFD700 25%, transparent 25%, transparent 75%, #FFD700 75%, #FFD700)`,
      backgroundSize: '60px 60px',
      backgroundPosition: '0 0, 30px 30px'
    }}></motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
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
            WHY CHOOSE <span className="text-[#FFD700]">CELLMAX</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The smart choice for riders who demand the best
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.15
        }} className="relative group">
              <div className="bg-[#1a1f2e] border border-[#FFD700]/20 rounded-2xl p-8 hover:border-[#FFD700] transition-all duration-300 h-full">
                <div className="flex items-start space-x-6">
                  <motion.div whileHover={{
                scale: 1.2,
                rotate: 360
              }} transition={{
                duration: 0.5
              }} className="flex-shrink-0 w-16 h-16 bg-[#FFD700]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-[#FFD700]" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect line */}
                <motion.div initial={{
              scaleX: 0
            }} whileHover={{
              scaleX: 1
            }} transition={{
              duration: 0.3
            }} className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFC107] origin-left"></motion.div>
              </div>
            </motion.div>)}
        </div>

        {/* Call to action */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFC107] p-1 rounded-2xl">
            <div className="bg-[#0a0e1a] rounded-xl px-12 py-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                POWERING EVERY JOURNEY
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Long-lasting reliability you can trust
              </p>
              <div className="flex items-center justify-center space-x-4 text-[#FFD700]">
                <div className="text-center">
                  <div className="text-4xl font-bold">3X</div>
                  <div className="text-sm text-gray-400">Longer Life</div>
                </div>
                <div className="w-px h-12 bg-[#FFD700]/30"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm text-gray-400">Reliability</div>
                </div>
                <div className="w-px h-12 bg-[#FFD700]/30"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold">0</div>
                  <div className="text-sm text-gray-400">Maintenance</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}