import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Lock, Wrench } from 'lucide-react';
export function Technology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const techFeatures = [{
    icon: Zap,
    title: 'High-Performance Plates',
    description: 'Advanced plate technology for maximum power output and efficiency'
  }, {
    icon: Lock,
    title: 'Sealed MF Technology',
    description: 'Maintenance-free sealed design prevents leakage and extends battery life'
  }, {
    icon: Wrench,
    title: 'Heavy-Duty Terminals',
    description: 'Robust terminal construction ensures reliable connections and durability'
  }];
  return <section id="technology" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
      backgroundSize: '30px 30px'
    }}></div>

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
            ADVANCED <span className="text-[#FFD700]">TECHNOLOGY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge engineering meets proven reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Technical diagram */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#1a1f2e] to-[#0a0e1a] rounded-2xl border-2 border-[#FFD700]/30 p-8 relative overflow-hidden">
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <motion.path d="M50,200 L150,200 L150,100 L250,100 L250,200 L350,200" stroke="#FFD700" strokeWidth="2" fill="none" initial={{
                  pathLength: 0
                }} animate={inView ? {
                  pathLength: 1
                } : {}} transition={{
                  duration: 2,
                  delay: 0.5
                }} />
                  <motion.path d="M200,50 L200,150 L300,150 L300,250 L200,250 L200,350" stroke="#FFD700" strokeWidth="2" fill="none" initial={{
                  pathLength: 0
                }} animate={inView ? {
                  pathLength: 1
                } : {}} transition={{
                  duration: 2,
                  delay: 0.7
                }} />
                </svg>
              </div>

              {/* Battery exploded view representation */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <motion.div initial={{
                y: -20,
                opacity: 0
              }} animate={inView ? {
                y: 0,
                opacity: 1
              } : {}} transition={{
                duration: 0.6,
                delay: 0.3
              }} className="w-48 h-12 bg-[#FFD700]/20 border-2 border-[#FFD700] rounded-lg mb-4">
                  <div className="text-center text-[#FFD700] text-sm font-bold pt-3">
                    TERMINALS
                  </div>
                </motion.div>

                <motion.div initial={{
                scale: 0.8,
                opacity: 0
              }} animate={inView ? {
                scale: 1,
                opacity: 1
              } : {}} transition={{
                duration: 0.6,
                delay: 0.5
              }} className="w-56 h-32 bg-[#FFD700]/10 border-2 border-[#FFD700]/50 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#FFD700] text-lg font-bold">
                      MF SEALED
                    </div>
                    <div className="text-gray-400 text-xs">TECHNOLOGY</div>
                  </div>
                </motion.div>

                <motion.div initial={{
                y: 20,
                opacity: 0
              }} animate={inView ? {
                y: 0,
                opacity: 1
              } : {}} transition={{
                duration: 0.6,
                delay: 0.7
              }} className="w-48 h-24 bg-[#FFD700]/20 border-2 border-[#FFD700] rounded-lg">
                  <div className="text-center text-[#FFD700] text-sm font-bold pt-8">
                    HIGH-PERFORMANCE PLATES
                  </div>
                </motion.div>
              </div>

              {/* JIS Standard badge */}
              <motion.div initial={{
              scale: 0,
              rotate: -180
            }} animate={inView ? {
              scale: 1,
              rotate: 0
            } : {}} transition={{
              duration: 0.8,
              delay: 1
            }} className="absolute top-4 right-4 w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#0a0e1a] text-xs font-bold">JIS</div>
                  <div className="text-[#0a0e1a] text-[10px]">STANDARD</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features list */}
          <div className="space-y-6">
            {techFeatures.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            x: 50
          }} animate={inView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} className="flex items-start space-x-4 bg-[#1a1f2e] p-6 rounded-xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-300">
                <motion.div whileHover={{
              scale: 1.2,
              rotate: 360
            }} transition={{
              duration: 0.5
            }} className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#FFD700]" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}