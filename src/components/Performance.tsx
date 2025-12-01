import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Battery, Thermometer, Activity, Shield, Wrench } from 'lucide-react';
export function Performance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const features = [{
    icon: Battery,
    title: 'Long-Lasting Reliability',
    description: 'Extended battery life with consistent performance over time',
    stat: '2X',
    statLabel: 'Longer Life than ordinary local batteries'
  }, {
    icon: Activity,
    title: 'Stable Start Power',
    description: 'Reliable cold cranking performance in all conditions',
    stat: '100%',
    statLabel: 'Start Success'
  }, {
    icon: Thermometer,
    title: 'Heat Resistance',
    description: 'Engineered to perform in extreme temperature conditions',
    stat: '60°C',
    statLabel: 'Max Operating'
  }, {
    icon: Shield,
    title: 'Vibration Resistance',
    description: 'Robust construction withstands harsh riding conditions',
    stat: '15G',
    statLabel: 'Vibration Proof'
  }, {
    icon: Wrench,
    title: 'Low Maintenance',
    description: 'Sealed MF technology eliminates the need for regular maintenance',
    stat: '0',
    statLabel: 'Maintenance'
  }];
  const CountUpNumber = ({
    end,
    inView
  }: {
    end: string;
    inView: boolean;
  }) => {
    const [count, setCount] = useState(0);
    const isNumber = !isNaN(parseInt(end));
    const targetNumber = isNumber ? parseInt(end) : 0;
    useEffect(() => {
      if (!inView || !isNumber) return;
      let start = 0;
      const duration = 2000;
      const increment = targetNumber / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [inView, targetNumber, isNumber]);
    if (!isNumber) return <span>{end}</span>;
    return <span>{count}</span>;
  };
  return <section id="performance" className="py-24 bg-gradient-to-b from-[#1a1f2e] to-[#0a0e1a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.03, 0.05, 0.03]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></motion.div>
      </div>

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            PERFORMANCE <span className="text-[#FFD700]">FEATURES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Engineered for excellence in every aspect
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 50
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="bg-[#1a1f2e] border border-[#FFD700]/20 rounded-2xl p-6 md:p-8 hover:border-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-300 group">
              <motion.div whileHover={{
            scale: 1.1,
            rotate: 360
          }} transition={{
            duration: 0.5
          }} className="w-14 h-14 md:w-16 md:h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-[#FFD700]" />
              </motion.div>

              <div className="mb-4">
                <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-1">
                  <CountUpNumber end={feature.stat} inView={inView} />
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {feature.statLabel}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}