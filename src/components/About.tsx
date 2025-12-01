import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Shield, Award, FileText, X } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      icon: Globe,
      title: 'Korean Origin',
      description: 'Engineered and manufactured in Korea with cutting-edge battery technology'
    },
    {
      icon: Shield,
      title: 'International Warranty',
      description: 'Backed by comprehensive international warranty coverage'
    },
    {
      icon: Award,
      title: 'JIS Standard',
      description: 'Meets rigorous Japanese Industrial Standards for quality and performance'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e] relative overflow-hidden"
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            ABOUT <span className="text-[#FFD700]">CELLMAX</span>
          </h2>

          {/* Updated About Text */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cellmax is built on six years of hands-on experience in the motorcycle battery market.
            We originally operated as <strong>Asian Energies</strong>, registered under the Divisional
            Secretariat, focusing on importing and distributing high-quality batteries for two-wheelers.
            As we grew, delivering consistent performance and winning customer trust, we transitioned
            into a formally incorporated company as <strong>Cellmax Energy Batteries (Pvt) Ltd</strong>.
            <br /><br />
            Today, our products are manufactured in Korea using advanced technology and engineered to
            comply with <strong>Japanese Industrial Standards (JIS)</strong>. With a strong foundation,
            a proven track record, and international warranty support, Cellmax continues to provide
            reliable, long-lasting, and high-performance motorcycle batteries across the market.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1a1f2e] border border-[#FFD700]/20 rounded-2xl p-8 hover:border-[#FFD700] transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FFD700]/20 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-[#FFD700]" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PDF Buttons */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Animated PDF Icon Button for Modal */}
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-3 px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <FileText className="w-6 h-6" />
            </motion.div>
            View Company Registration
          </button>

          {/* 2nd PDF button */}
          <a
            href="cellmax-product-specs.pdf"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border border-[#FFD700] text-[#FFD700] font-semibold rounded-lg hover:bg-[#FFD700] hover:text-black transition"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FileText className="w-6 h-6" />
            </motion.div>
             CERTIFICATE OF INDIVIDUALTRADING PLACE REGISTRATION
          </a>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
          <div className="bg-[#1a1f2e] rounded-xl shadow-2xl max-w-4xl w-full relative p-4">

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-[#FFD700] mb-4 text-center">
              Company Registration Preview
            </h3>

            {/* Embedded PDF */}
            <iframe
              src="cellmax-company-registration.pdf"
              className="w-full h-[70vh] rounded-lg border border-[#FFD700]/20"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
