import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap } from 'lucide-react';
export function ProductRange() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const products = [{
    model: 'YTX6L-BS',
    voltage: '12V',
    capacity: '6Ah',
    type: 'MF Sealed'
  }, {
    model: '12N9-BS',
    voltage: '12V',
    capacity: '9Ah',
    type: 'MF Sealed'
  }, {
    model: 'YB2.5L-BS',
    voltage: '12V',
    capacity: '2.5Ah',
    type: 'MF Sealed'
  }, {
    model: 'YTX7A-BS',
    voltage: '12V',
    capacity: '7Ah',
    type: 'MF Sealed'
  }, {
    model: 'YTX9-BS',
    voltage: '12V',
    capacity: '9Ah',
    type: 'MF Sealed'
  }, {
    model: '12N12A-4A',
    voltage: '12V',
    capacity: '12Ah',
    type: 'MF Sealed'
  }, {
    model: 'YB14L-A2',
    voltage: '12V',
    capacity: '14Ah',
    type: 'MF Sealed'
  }, {
    model: 'YTX14-BS',
    voltage: '12V',
    capacity: '14Ah',
    type: 'MF Sealed'
  }, {
    model: 'YB16AL-A2',
    voltage: '12V',
    capacity: '16Ah',
    type: 'MF Sealed'
  }];
  return <section id="products" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
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
            PRODUCT <span className="text-[#FFD700]">RANGE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete battery solutions for every motorcycle and scooter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => <motion.div key={product.model} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={inView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.05
        }} className="bg-gradient-to-br from-[#1a1f2e] to-[#0a0e1a] border border-[#FFD700]/20 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-xl hover:shadow-[#FFD700]/20 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {product.model}
                  </h3>
                  <div className="text-[#FFD700] text-sm font-medium">
                    {product.type}
                  </div>
                </div>
                <motion.div whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.5
            }} className="w-10 h-10 bg-[#FFD700]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                  <Zap className="w-5 h-5 text-[#FFD700]" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#FFD700]/10">
                  <span className="text-gray-400">Voltage</span>
                  <span className="text-white font-semibold">
                    {product.voltage}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Capacity</span>
                  <span className="text-white font-semibold">
                    {product.capacity}
                  </span>
                </div>
              </div>

              <motion.div initial={{
            width: 0
          }} whileHover={{
            width: '100%'
          }} transition={{
            duration: 0.3
          }} className="h-1 bg-[#FFD700] mt-4 rounded-full"></motion.div>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="text-center mt-12">
          <div className="inline-block bg-[#1a1f2e] border border-[#FFD700]/30 rounded-full px-8 py-4">
            <p className="text-gray-300">
              <span className="text-[#FFD700] font-bold">Ready Stock.</span>{' '}
              Maximum Performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
}